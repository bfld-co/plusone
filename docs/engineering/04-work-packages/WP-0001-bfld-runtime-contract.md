# WP-0001: BFLD runtime contract and local organization

- Risk: R3
- Status: complete
- Production mutation: not authorized

## Acceptance

1. Kernel, Registry, BASE-1.2 and `.bfld-engineering/` govern all executors.
2. `index.html`, `CNAME` and `.nojekyll` match the frozen hashes.
3. The public endpoint remains HTTP 200 with the same body hash.
4. The clone moves to `/Users/antonaci/BFLD/ventures/plusone` after Registry merge.
5. No product identity or runtime resource changes in this package.

## Rollback

Revert the PR and restore the prior Registry path. Production is not touched.
