"use client";
import { useEffect } from "react";

export default function ScrollAnchor() {
    useEffect(() => {
        const getId = () =>
            location.hash ? decodeURIComponent(location.hash.slice(1)) : null;

        const find = (id: string) =>
            document.getElementById(id) ||
            document.querySelector<HTMLElement>(`[name="${id}"]`);

        const scrollToEl = (el: HTMLElement) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" });

        const tryScroll = () => {
            const id = getId();
            if (!id) return false;
            const el = find(id);
            if (!el) return false;
            requestAnimationFrame(() => scrollToEl(el));
            return true;
        };

        const scrollNowOrLater = () => {
            // try now
            if (tryScroll()) return;

            // If it doesn't already exist, keep an eye out until it appears.
            //  MutationObserver: It observes all changes in the document.body file
            const obs = new MutationObserver(() => {
                if (tryScroll()) obs.disconnect();
            });
            obs.observe(document.body, { childList: true, subtree: true });
            setTimeout(() => obs.disconnect(), 5000);
        };

        // Try loading
        scrollNowOrLater();

        // try again after 1s — It ensures scrolling even if the content lags
        const timeoutId = setTimeout(() => {
            scrollNowOrLater();
        }, 1000);

        // and also when the hash changes
        const onHashChange = () => {
            scrollNowOrLater();
            setTimeout(scrollNowOrLater, 1000); // retry 2s after
        };
        window.addEventListener("hashchange", onHashChange);

        // on anchor link click
        const onAnchorClick = (e: MouseEvent) => {
            const el = e.target as Element | null;
            const a = el?.closest("a[href^='#'], a[href*='#']") as HTMLAnchorElement | null;
            if (!a) return;

            const url = new URL(a.href, location.href);
            const hash = url.hash;
            if (!hash) return;

            // different rout with #
            if (url.origin === location.origin && url.pathname !== location.pathname) {
                // Next.js navigation
                e.preventDefault();
                window.location.href = url.pathname + url.hash;
                return;
            }

            // same page
            if (url.origin === location.origin && url.pathname === location.pathname) {
                e.preventDefault();
                history.pushState(null, "", hash);
                scrollNowOrLater();
                setTimeout(scrollNowOrLater, 1000);
            }
        };
        document.addEventListener("click", onAnchorClick, true);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("hashchange", onHashChange);
            document.removeEventListener("click", onAnchorClick, true);
        };
    }, []);

    return null;
}
