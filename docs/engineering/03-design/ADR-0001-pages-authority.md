# ADR-0001: BFLD repository as target Pages authority

- Status: accepted
- Date: 2026-09-07
- Owner: bfld-co

## Decision

`bfld-co/plusone` is the target authority for the public brand object. The
current personal predecessor Pages remains production until an organization
staging endpoint serves the exact same bytes and the DNS gate can be executed
with immediate rollback.

The product keeps its own identity. BFLD governance does not restyle or rename
the public object.

## Consequences

- Repository hygiene and local path migration may proceed independently.
- Pages enablement is a staging action, not production cutover.
- DNS and custom-domain transfer remain HOLD until both endpoints are healthy.
