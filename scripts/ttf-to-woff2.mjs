import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import ttf2woff2 from "ttf2woff2";

const dir = "src/fonts";

for (const name of readdirSync(dir)) {
  if (!name.endsWith(".ttf")) continue;
  const ttf = join(dir, name);
  const woff2 = ttf.replace(/\.ttf$/i, ".woff2");
  writeFileSync(woff2, ttf2woff2(readFileSync(ttf)));
  console.log("OK:", woff2);
}