# richardjoo-com navigation rollout

Internal AI-facing handover package for the required fork synchronization and the `richardjoo-com` primary-navigation rollout completed on `2026-09-04`.

## Snapshot

- Upstream anchor: `emdash-cms/emdash@108c753b`
- Fork sync branch merge: `0634e689`
- Fork sync PR: richardjoo/emdash#17, merge `e64a0cdf`
- Fork divergence after the final fetch: `70` commits ahead and `0` behind `upstream/main`
- Child-site navigation PR: #48, feature `764648b`, merge `fd6a0e9`
- Child-site production run: `33942840298`
- Current Worker version: `dfab1e44-cea7-4b6b-be94-56c18b429ea6`
- Live English `primary` menu: `Posts`, `Projects`, `About`, `Work With Me`
- Child-site handover PR: #49, merge `3d78e76`
- Child-site handover package: `2026.09.04-1`
- Child-site consume target remains released `emdash@0.36.0` and `@emdash-cms/cloudflare@0.36.0`

## Outcome

The wordmark remains the Home link. The primary header now contains four links, the homepage hero contains `Start Here` and `Work With Me`, and `Now`, `Uses`, and `Elsewhere` appear in the conditional "More About Me" section. The header stays single-line at `981px` and stacks at `980px`; footer breakpoints are unchanged.

Production browser checks passed at desktop, breakpoint-boundary, tablet, and mobile widths in light and dark modes. All navigation and homepage-link targets returned `200`, no horizontal overflow or browser failures appeared, and the existing public/admin CSP split remained intact.

## Scope

This package records:

- the ancestry-preserving upstream sync required before child-site work
- the reviewed child-site information architecture and responsive implementation
- the production deployment and Worker version
- the routine-PAT atomic live-menu replacement and read-after-write result
- responsive production verification and durable rollback order
- child-site handover package `2026.09.04-1`
- the current orchestrator child-site registry state

The child package versions, consume target, database schema, secrets, Cloudflare account settings, and site-local patch remained unchanged. The upstream fork changes were not consumed by the child site. Production D1 was not seeded; the only live content mutation was the approved `primary` menu replacement.
