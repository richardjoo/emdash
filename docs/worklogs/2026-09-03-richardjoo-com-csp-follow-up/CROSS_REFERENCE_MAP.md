# Cross-reference map

| File or artifact                                                                                           | Why it mattered                                                               |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Orchestrator PR #15                                                                                        | Preserves fork ancestry while synchronizing through upstream `264940dc`       |
| `docs/orchestrator/CHILD_SITE_REGISTRY.md`                                                                 | Central source of truth for child-site consume, patch, and verification state |
| Child-site `src/middleware.ts`                                                                             | Defines the public beacon sources and the `/_emdash` injection exclusion      |
| Child-site `.github/workflows/ci.yml`                                                                      | Validated and deployed child-site PRs #45 and #46                             |
| Child-site `docs/cloudflare-site-runbook.md`                                                               | Documents the Cloudflare Web Analytics and CSP operating policy               |
| Child-site `docs/handover/README.md`                                                                       | Site-local source of truth at package version `2026.09.03-2`                  |
| [Cloudflare Web Analytics setup](https://developers.cloudflare.com/web-analytics/get-started/)             | Establishes automatic injection and the same-origin RUM endpoint              |
| [Cloudflare origin `Cache-Control`](https://developers.cloudflare.com/cache/concepts/cache-control/#other) | Establishes that `no-transform` prevents intermediary payload transformation  |
| `docs/worklogs/2026-09-03-richardjoo-com-0360-upgrade/`                                                    | Preserves the preceding package-upgrade record                                |
| `docs/worklogs/README.md`                                                                                  | Index for this dated follow-up package                                        |
