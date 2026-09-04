# Master documents

## Version basis

| Scope                      | Version basis                                                         |
| -------------------------- | --------------------------------------------------------------------- |
| Upstream EmDash            | `emdash-cms/emdash@264940dc`                                          |
| Fork sync                  | `richardjoo/emdash@3d44a44d` from PR #15                              |
| Child-site public CSP      | `richardjoo-com@27fe2a5` from PR #45                                  |
| Child-site current runtime | `richardjoo-com@e1b48a0` from PR #46                                  |
| Child-site handover        | `richardjoo-com@9e068a6` from PR #47, package `2026.09.03-2`          |
| Child-site consume target  | `emdash@0.36.0` and `@emdash-cms/cloudflare@0.36.0` from released npm |

## Canonical documents touched

| Document                                     | Role                                                | Status after this pass | Notes                                                          |
| -------------------------------------------- | --------------------------------------------------- | ---------------------- | -------------------------------------------------------------- |
| `docs/orchestrator/CHILD_SITE_REGISTRY.md`   | Source of truth for child-site consume/config state | Updated                | Records CSP behavior, current Worker, verification, and patch  |
| `docs/worklogs/README.md`                    | Worklog package index                               | Updated                | Links this follow-up package                                   |
| Child-site `docs/handover/`                  | Site-local operational source of truth              | Updated                | Package `2026.09.03-2` merged in child-site PR #47             |
| Child-site `docs/cloudflare-site-runbook.md` | Cloudflare site operations                          | Updated                | Documents public analytics and the admin `no-transform` policy |

## Operational artifacts

| Artifact                        | Identifier                             |
| ------------------------------- | -------------------------------------- |
| Fork sync PR CI run             | `33802590344`                          |
| Fork sync main CI run           | `33804282758`                          |
| Fork sync main CodeQL run       | `33804282788`                          |
| Public analytics production run | `33809351204`                          |
| Admin exclusion production run  | `33811157462`                          |
| Cloudflare Worker version       | `b9f0a711-f718-4e36-ba42-9ea0f7a3e326` |
| Child handover PR CI run        | `33812980550`                          |
| Child handover main CI run      | `33813088705`                          |
| Child handover package          | `2026.09.03-2`                         |
| Production URL                  | `https://richardjoo.com`               |
