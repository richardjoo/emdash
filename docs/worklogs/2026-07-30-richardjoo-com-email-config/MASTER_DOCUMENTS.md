# Master Documents

## Version Basis

This package is keyed to the current pushed child-site state after commit `20a5d22`.

| Scope                     | Version basis                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------- |
| Orchestrator repo anchor  | `emdash@86ccee1e`                                                                             |
| Child-site repo           | `richardjoo-com@20a5d22`                                                                      |
| Child-site consume target | `emdash@0.31.1`, `@emdash-cms/cloudflare@0.31.1`, `astro@7.0.3`, `@astrojs/cloudflare@14.0.1` |

## Canonical Documents Touched

| Document                                   | Role                                                | Status after this pass | Notes                                              |
| ------------------------------------------ | --------------------------------------------------- | ---------------------- | -------------------------------------------------- |
| `docs/orchestrator/CHILD_SITE_REGISTRY.md` | Source of truth for child-site consume/config state | Updated                | Now records `0.31.1` and the email-delivery caveat |
| `docs/worklogs/README.md`                  | Active package index                                | Updated                | Added this dated package                           |

## Child-Site Operational Outcome

- Repo config now includes Cloudflare Email Sending via `cloudflareEmail(...)`.
- `wrangler.jsonc` now declares the `send_email` binding as `EMAIL`.
- Live production now exposes the provider as available and selected.
- Actual delivery still fails to the tested address because Cloudflare reports the destination is not a verified address.
