# Hachi x Plusone: Emotional Coordinates

Public brand object served at `https://plusone.hachiproject.com`.

The site is a single static `index.html` with embedded photography. `CNAME` and
`.nojekyll` are production controls and must remain intact until the governed
GitHub Pages authority cutover is complete.

## Current runtime

- Production: GitHub Pages from the personal predecessor repository.
- Candidate authority: `bfld-co/plusone`.
- Domain and HTTPS: preserve throughout the migration.
- Content invariant: the live response must match the SHA-256 baseline in
  `.bfld-engineering/runtime-baseline.json`.

The organization Pages instance must pass at its staging URL before production
DNS is changed. Do not recreate the content, remove the custom domain or expose
internal Hachi material during that cutover.

## Governance

- Kernel: `/Users/antonaci/BFLD/.agent-os/AGENTS.md`
- Method: BASE-1.2
- Validation: `node scripts/validate-repository.mjs`
