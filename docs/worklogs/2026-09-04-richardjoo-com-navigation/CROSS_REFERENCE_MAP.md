# Cross-reference map

| File or artifact                                         | Why it mattered                                                               |
| -------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Orchestrator PR #17                                      | Preserves fork ancestry while synchronizing through upstream `108c753b`       |
| `docs/orchestrator/CHILD_SITE_REGISTRY.md`               | Central source of truth for child-site consume, patch, and verification state |
| Child-site `seed/seed.json`                              | Records the intended four-item primary-menu baseline                          |
| Child-site `src/layouts/Base.astro`                      | Defines the independent `980px` header and `640px` footer breakpoints         |
| Child-site `src/pages/index.astro`                       | Defines hero actions and conditional "More About Me" links                    |
| Child-site `.github/workflows/ci.yml`                    | Validated PR #48 and deployed merge `fd6a0e9`                                 |
| Child-site PR #48                                        | Reviewed runtime and visual change with responsive screenshots                |
| Child-site `docs/handover/README.md`                     | Site-local source of truth at package version `2026.09.04-1`                  |
| Child-site PR #49                                        | Merged the final versioned child handover without a production redeploy       |
| `packages/core/src/mcp/server.ts`                        | Defines atomic `menu_set_items` and read-only `menu_get` behavior and scopes  |
| `docs/worklogs/2026-09-03-richardjoo-com-csp-follow-up/` | Preserves the preceding Web Analytics and admin-CSP production record         |
| `docs/worklogs/README.md`                                | Index for this dated navigation rollout package                               |
