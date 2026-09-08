# EVID-001: entry runtime baseline

- Date: 2026-09-07
- Public endpoint: `https://plusone.hachiproject.com`
- Status: HTTP 200 with GitHub Pages response headers
- Live body SHA-256 equals tracked `index.html` SHA-256
- Current production Pages source: personal predecessor repository, `main` root
- Candidate organization Pages: not enabled at entry
- Repository releases, GitHub deployments and open PRs: zero
- Branches: `main` only

## Organization staging

- Branch `pages/bfld-staging` removes only the custom-domain control from the
  publishing source and preserves the site bytes.
- Organization Pages reached `built` at `https://bfld-co.github.io/plusone/`.
- Staging returned HTTP 200.
- Staging body SHA-256 equals production and tracked `index.html`.
- The production custom-domain claim and DNS were not changed.

No environment value, private data or product IP was inspected for this gate.

## BFLD path exit evidence

- Registry v3 passed 96/96 with lifecycle `active`, boundary `portfolio` and
  canonical path `/Users/antonaci/BFLD/ventures/plusone`.
- The clone was moved with its Git directory and remains clean on `main`.
- The local validator, staging HTTP 200 and production/staging hash parity passed
  again after the move.
- The DNS and production custom-domain claim remain unchanged under WP-0002.
