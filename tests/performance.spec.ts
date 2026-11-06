import { test, expect, type Request } from '@playwright/test';
import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Performance smoke test.
 *
 * Opens the page several times (mobile + desktop projects), measures load time
 * and network activity with cache disabled, writes a JSON report, and fails if
 * any run is slower than the budget or the main document returns an HTTP error.
 *
 * Override defaults with env vars:
 *   PERF_URL          page to measure
 *   PERF_RUNS         how many times to load the page
 *   PERF_MAX_LOAD_MS  max allowed load time per run (ms)
 *   PERF_PAUSE_MS     wait between runs so the server can recover (ms)
 */

/** Page under test. Change via PERF_URL for other sites/environments. */
const TARGET_URL = process.env.PERF_URL ?? 'http://localhost:3000/';

/** How many isolated navigations to run for this Playwright project. */
const TOTAL_RUNS = Number(process.env.PERF_RUNS ?? 5);

/** Load-time budget. A run that exceeds this counts as a slow run. */
const MAX_LOAD_TIME_MS = Number(process.env.PERF_MAX_LOAD_MS ?? 10_000);

/** Delay between runs so previous traffic does not skew the next measurement. */
const PAUSE_BETWEEN_RUNS_MS = Number(process.env.PERF_PAUSE_MS ?? 2_000);

/** One network request captured while the page is loading. */
type TrackedRequest = {
  url: string;
  type: string;
  start: number;
  status: number | null;
  duration: number | null;
};

/** Full measurement for a single navigation. */
type PerformanceRunResult = {
  run: number;
  device: 'mobile' | 'desktop';
  url: string;
  loadTime: number;
  navigationStatus: number | null;
  fontReady: boolean;
  navigationMetrics: {
    domContentLoaded: number;
    loadEvent: number;
    responseTime: number;
  } | null;
  resourceSummary: {
    total: number;
    fonts: number;
    scripts: number;
    stylesheets: number;
    images: number;
    documents: number;
    other: number;
  };
  failedRequests: { url: string; type: string; error?: string }[];
  errorResponses: { status: number; url: string; type: string }[];
  slowRequests: TrackedRequest[];
  error: string | null;
};

test('Performance — page load and network', async ({ browser }, testInfo) => {
  // Playwright runs this spec once per project (e.g. "mobile", "desktop").
  const isMobile = testInfo.project.name === 'mobile';
  const results: PerformanceRunResult[] = [];

  for (let run = 1; run <= TOTAL_RUNS; run++) {
    console.log(`[${testInfo.project.name}] run ${run}/${TOTAL_RUNS}`);

    // Fresh context per run: no cookies, cache, or leftover page state.
    const context = await browser.newContext({
      viewport: isMobile
        ? { width: 390, height: 844 }
        : { width: 1366, height: 768 },
      isMobile,
      hasTouch: isMobile,
      deviceScaleFactor: isMobile ? 3 : 1,
      // Service workers can serve cached assets and hide real network cost.
      serviceWorkers: 'block',
    });

    const page = await context.newPage();
    page.setDefaultNavigationTimeout(100_000);

    // Disable HTTP cache via CDP so every run fetches resources from the network.
    const cdp = await context.newCDPSession(page);
    await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });

    const requests = new Map<Request, TrackedRequest>();
    const failedRequests: PerformanceRunResult['failedRequests'] = [];
    const errorResponses: PerformanceRunResult['errorResponses'] = [];

    // Record each request as soon as it starts so we can attach status/duration later.
    page.on('request', (request) => {
      requests.set(request, {
        url: request.url(),
        type: request.resourceType(),
        start: Date.now(),
        status: null,
        duration: null,
      });
    });

    // Capture HTTP status and collect 4xx/5xx responses for the report.
    page.on('response', (response) => {
      const data = requests.get(response.request());
      if (data) {
        data.status = response.status();
      }
      if (response.status() >= 400) {
        errorResponses.push({
          status: response.status(),
          url: response.url(),
          type: response.request().resourceType(),
        });
      }
    });

    // Request completed successfully — store how long it took.
    page.on('requestfinished', (request) => {
      const data = requests.get(request);
      if (data) {
        data.duration = Date.now() - data.start;
      }
    });

    // Request never completed (DNS, timeout, aborted, etc.).
    page.on('requestfailed', (request) => {
      failedRequests.push({
        url: request.url(),
        type: request.resourceType(),
        error: request.failure()?.errorText,
      });
    });

    const startedAt = Date.now();
    let loadTime = 0;
    let fontReady = false;
    let navigationStatus: number | null = null;
    let error: string | null = null;

    try {
      // waitUntil: 'load' waits for the window load event, not just DOMContentLoaded.
      const response = await page.goto(TARGET_URL, {
        waitUntil: 'load',
        timeout: 100_000,
      });
      navigationStatus = response?.status() ?? null;

      // Fonts often finish after the load event. Wait up to 15s, then continue.
      fontReady = await page.evaluate(async () =>
        Promise.race([
          document.fonts.ready.then(() => true),
          new Promise<boolean>((resolve) =>
            setTimeout(() => resolve(false), 15_000)
          ),
        ])
      );
    } catch (e) {
      // Keep going so this run still appears in the JSON report.
      error = String(e);
    }

    // Wall-clock time covering navigation + optional font wait (or the error).
    loadTime = Date.now() - startedAt;

    // Browser Navigation Timing API — timestamps relative to navigation start.
    const navigationMetrics = await page
      .evaluate(() => {
        const nav = performance.getEntriesByType('navigation')[0] as
          | PerformanceNavigationTiming
          | undefined;
        if (!nav) return null;
        return {
          domContentLoaded: Math.round(nav.domContentLoadedEventEnd),
          loadEvent: Math.round(nav.loadEventEnd),
          responseTime: Math.round(nav.responseEnd - nav.requestStart),
        };
      })
      .catch(() => null);

    const requestList = Array.from(requests.values());
    const countByType = (type: string) =>
      requestList.filter((r) => r.type === type).length;

    // Breakdown of what the page requested during this run.
    const resourceSummary = {
      total: requestList.length,
      fonts: countByType('font'),
      scripts: countByType('script'),
      stylesheets: countByType('stylesheet'),
      images: countByType('image'),
      documents: countByType('document'),
      other: requestList.filter(
        (r) =>
          !['font', 'script', 'stylesheet', 'image', 'document'].includes(
            r.type
          )
      ).length,
    };

    // Requests that took 1s or more, slowest first — useful for bottleneck hunting.
    const slowRequests = requestList
      .filter((r) => r.duration !== null && r.duration >= 1000)
      .sort((a, b) => (b.duration ?? 0) - (a.duration ?? 0));

    results.push({
      run,
      device: isMobile ? 'mobile' : 'desktop',
      url: TARGET_URL,
      loadTime,
      navigationStatus,
      fontReady,
      navigationMetrics,
      resourceSummary,
      failedRequests,
      errorResponses,
      slowRequests,
      error,
    });

    console.log({
      run,
      loadTimeSec: (loadTime / 1000).toFixed(2),
      requests: resourceSummary.total,
      httpErrors: errorResponses.length,
      failed: failedRequests.length,
    });

    await context.close();

    // Pause before the next run so the previous session does not affect results.
    if (run < TOTAL_RUNS) {
      await new Promise((resolve) => setTimeout(resolve, PAUSE_BETWEEN_RUNS_MS));
    }
  }

  // Persist per-run details for later comparison (one file per Playwright project).
  const outputDir = path.resolve('performance-results');
  await fs.mkdir(outputDir, { recursive: true });

  const jsonPath = path.join(
    outputDir,
    `performance-${testInfo.project.name}.json`
  );
  await fs.writeFile(jsonPath, JSON.stringify(results, null, 2), 'utf-8');

  const times = results.map((r) => r.loadTime).sort((a, b) => a - b);
  const average = times.reduce((sum, t) => sum + t, 0) / times.length;

  const summary = {
    device: testInfo.project.name,
    url: TARGET_URL,
    totalRuns: TOTAL_RUNS,
    averageMs: Math.round(average),
    minMs: times[0],
    maxMs: times[times.length - 1],
    slowRuns: results.filter((r) => r.loadTime > MAX_LOAD_TIME_MS).length,
    reportFile: jsonPath,
  };

  console.log('Resumo:', summary);

  // Fail if any navigation exceeded the load-time budget.
  expect(
    summary.slowRuns,
    `Mais de ${MAX_LOAD_TIME_MS}ms em algum acesso`
  ).toBe(0);

  // Fail if the main document did not return a successful HTTP status.
  expect(
    results.every(
      (r) =>
        r.navigationStatus !== null &&
        r.navigationStatus >= 200 &&
        r.navigationStatus < 400
    ),
    'Documento principal com erro HTTP'
  ).toBe(true);
});
