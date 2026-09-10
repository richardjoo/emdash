# Cross-reference map

| File or artifact                                                               | Why it mattered                                                               |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Upstream tag `emdash@0.37.0` and commit `fc87efeb`                             | Define the official release consumed by the child site                        |
| Orchestrator PR #19                                                            | Preserves fork ancestry while synchronizing through upstream `44114afd`       |
| `packages/core/src/database/migrations/074_content_deleted_scheduled_index.ts` | Defines the production index migration applied before deployment              |
| `packages/core/CHANGELOG.md`                                                   | Documents the release behavior and MCP `_rev` compatibility change            |
| Child-site `package.json` and `pnpm-lock.yaml`                                 | Declare and lock the official release consumption target                      |
| Child-site `.github/workflows/d1-backup.yml`                                   | Produced the verified pre-migration D1 backup                                 |
| Child-site `.github/workflows/ci.yml`                                          | Validated PR #50 and deployed merge `1a742f3`                                 |
| Child-site `docs/handover/README.md`                                           | Site-local source of truth at package version `2026.09.09-1`                  |
| Child-site PR #51                                                              | Merged the current handover package without another production deployment     |
| `docs/orchestrator/CHILD_SITE_REGISTRY.md`                                     | Central source of truth for child-site consume, patch, and verification state |
| `docs/worklogs/2026-09-04-richardjoo-com-navigation/`                          | Preserves the preceding navigation and live-menu rollout record               |
| `docs/worklogs/README.md`                                                      | Index for this dated upgrade package                                          |
