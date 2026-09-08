import { createHash } from "node:crypto";
import { readFile, readdir, stat } from "node:fs/promises";
import { join, relative } from "node:path";

const root = new URL("../", import.meta.url);
const required = [
  "AGENTS.md",
  "CLAUDE.md",
  "README.md",
  "repo.manifest.json",
  ".bfld-engineering/project.json",
  ".bfld-engineering/risk-assessment.json",
  ".bfld-engineering/runtime-baseline.json",
  "docs/engineering/03-design/ADR-0001-pages-authority.md",
  "docs/engineering/04-work-packages/WP-0001-bfld-runtime-contract.md",
  "docs/engineering/04-work-packages/WP-0002-pages-authority-cutover.md",
  "docs/engineering/evidence/EVID-001-entry-runtime-baseline.md",
  "docs/engineering/traceability.csv",
  "docs/ai/handoff.md",
  "index.html",
  "CNAME",
  ".nojekyll",
];
const retiredPatterns = [
  new RegExp(["an", "chora"].join(""), "i"),
  new RegExp(`\\b${["M", "AES"].join("")}\\b`, "i"),
  new RegExp(`\\b${["M", "AIPP"].join("")}\\b`, "i"),
  new RegExp(`\\b${["M", "AFG"].join("")}\\b`, "i"),
  new RegExp(["BFLD-VIS-", "001"].join(""), "i"),
];
const failures = [];

for (const path of required) {
  try {
    if (!(await stat(new URL(path, root))).isFile()) failures.push(`required:${path}`);
  } catch {
    failures.push(`required:${path}`);
  }
}

const baseline = JSON.parse(await readFile(new URL(".bfld-engineering/runtime-baseline.json", root), "utf8"));
for (const [path, expected] of Object.entries(baseline.files)) {
  const actual = createHash("sha256").update(await readFile(new URL(path, root))).digest("hex");
  if (actual !== expected) failures.push(`hash:${path}`);
}
if (baseline.files["index.html"] !== baseline.live_body_sha256) failures.push("baseline:live-body");

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if ([".git", "node_modules"].includes(entry.name)) continue;
    const path = join(directory, entry.name);
    const rel = relative(root.pathname, path);
    if (rel.startsWith("docs/history/")) continue;
    if (entry.isDirectory()) {
      await walk(path);
      continue;
    }
    if (!entry.isFile() || rel === "scripts/validate-repository.mjs") continue;
    const bytes = await readFile(path);
    if (bytes.includes(0)) continue;
    const content = bytes.toString("utf8");
    for (const pattern of retiredPatterns) {
      if (pattern.test(rel)) failures.push(`path:${rel}`);
      if (pattern.test(content)) failures.push(`content:${rel}`);
    }
  }
}

await walk(root.pathname);
if (failures.length) {
  console.error(`FAIL: ${[...new Set(failures)].sort().join(", ")}`);
  process.exit(1);
}
console.log("PASS: Plusone content bytes, product boundary and BFLD runtime contract");
