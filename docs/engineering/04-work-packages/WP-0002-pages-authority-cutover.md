# WP-0002: GitHub Pages authority cutover

- Risk: R4
- Status: staging_passed_dns_control_HOLD
- Production mutation: requires staging evidence and DNS control

## Sequence

1. Create an organization Pages staging source without claiming the custom domain. PASS.
2. Verify HTTP 200, TLS and exact live body SHA-256 at the staging URL. PASS.
3. Record current DNS value and personal Pages configuration for rollback.
4. Transfer the custom-domain claim to `bfld-co/plusone`.
5. Change only the DNS target to the organization Pages endpoint.
6. Verify domain, HTTPS and exact body hash from independent resolvers.
7. Keep the predecessor recoverable until propagation and monitoring pass.

The organization staging Pages is built from `pages/bfld-staging`, returns HTTP
200 and matches the production body SHA-256. Steps 3 to 7 remain HOLD because
the computer was locked and DNS control could not be verified.

## Acceptance

- no outage at the public domain;
- exact content parity;
- production source becomes `bfld-co/plusone`;
- DNS contains no substituted account alias;
- rollback is a single DNS reversal plus Pages claim restoration.
