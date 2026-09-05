# Master documents

## Version basis

| Scope                      | Version basis                                                         |
| -------------------------- | --------------------------------------------------------------------- |
| Upstream EmDash            | `emdash-cms/emdash@108c753b`                                          |
| Fork sync                  | `richardjoo/emdash@e64a0cdf` from PR #17                              |
| Child-site current runtime | `richardjoo-com@fd6a0e9` from PR #48                                  |
| Child-site handover        | `richardjoo-com@3d78e76` from PR #49, package `2026.09.04-1`          |
| Child-site consume target  | `emdash@0.36.0` and `@emdash-cms/cloudflare@0.36.0` from released npm |

## Canonical documents touched

| Document                                   | Role                                                | Status after this pass | Notes                                                          |
| ------------------------------------------ | --------------------------------------------------- | ---------------------- | -------------------------------------------------------------- |
| `docs/orchestrator/CHILD_SITE_REGISTRY.md` | Source of truth for child-site consume/config state | Updated                | Records current runtime, menu, Worker, verification, and patch |
| `docs/worklogs/README.md`                  | Worklog package index                               | Updated                | Links this navigation rollout package                          |
| Child-site `docs/handover/`                | Site-local operational source of truth              | Updated                | Package `2026.09.04-1` merged in child-site PR #49             |

## Operational artifacts

| Artifact                   | Identifier                             |
| -------------------------- | -------------------------------------- |
| Fork sync PR CI run        | `33941670827`                          |
| Fork sync main CI run      | `33942319465`                          |
| Fork sync main CodeQL run  | `33942319478`                          |
| Child navigation PR CI run | `33942675826`                          |
| Child production run       | `33942840298`                          |
| Cloudflare Worker version  | `dfab1e44-cea7-4b6b-be94-56c18b429ea6` |
| Live `primary` menu        | `01KS6WKFYPC9ZVSY5FH5TWZ6KY`           |
| Live menu update timestamp | `2026-09-05T03:58:27.583Z`             |
| Child handover PR CI run   | `33943811047`                          |
| Child handover main CI run | `33943881971`                          |
| Child handover package     | `2026.09.04-1`                         |
| Production URL             | `https://richardjoo.com`               |
