# Readiness checklist

| Check                                                       | Status      | Evidence                                                                                 |
| ----------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| Orchestrator fork is not behind upstream                    | Pass        | Fetch comparison reported `63` ahead and `0` behind                                      |
| Child-site consume target uses official releases            | Pass        | `emdash@0.36.0` and `@emdash-cms/cloudflare@0.36.0` in package and lock files            |
| Frozen install and package peer checks pass                 | Pass        | Child-site local verification                                                            |
| Child-site typecheck and build pass                         | Pass        | Local verification and PR #43 CI run `33719175844`                                       |
| Wrangler deployment dry run passes                          | Pass        | Child-site local verification                                                            |
| Fresh production D1 backup exists                           | Pass        | Run `33719529053`, artifact `d1-backup-my-emdash-site-20260903T053727Z`                  |
| Production D1 migrations are current                        | Pass        | Migrations through `073_media_focal_point`; no pending or unknown migrations             |
| Runtime upgrade is merged and deployed                      | Pass        | PR #43, merge `5bea6d2`, CI run `33723312212`                                            |
| Production smoke checks pass                                | Pass        | Homepage, admin login, MCP initialization/settings read, and migration check             |
| Child-site handover is current                              | Pass        | Version `2026.09.03-1`, PR #44, merge `65c7dde`                                          |
| Existing site-local patch remains governed                  | Pass        | Wrangler patch and release-based removal trigger remain in the registry                  |
| No EmDash package patch or unpublished dependency is active | Pass        | Child package and lockfile use npm releases                                              |
| Webhook notifier defect is documented                       | Open        | Child task T17 records skipped automatic hooks and the official-fix/removal decision     |
| Released admin bundle optimization is still tracked         | Open        | Child task T15 remains pending; upstream PR #2516 was not consumed                       |
| Orchestrator lint commands complete locally                 | Known issue | Type-aware lint ended with `tsgolint` `SIGKILL`; quick lint hit an `oxc_allocator` panic |
| Orchestrator package typecheck passes                       | Pass        | `pnpm typecheck` completed successfully                                                  |
| EmDash documentation build passes                           | Pass        | `pnpm --dir docs build` completed with the existing Node `DEP0040` warning               |
