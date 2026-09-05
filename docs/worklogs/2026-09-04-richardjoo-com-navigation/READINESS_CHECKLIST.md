# Readiness checklist

| Check                                                       | Status      | Evidence                                                                                  |
| ----------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| Orchestrator fork is not behind upstream                    | Pass        | PR #17 merged through `108c753b`; final fetch reports `70` ahead and `0` behind           |
| Fork sync remote checks pass                                | Pass        | PR run `33941670827`, main CI `33942319465`, and main CodeQL `33942319478`                |
| Child-site consume target still uses official releases      | Pass        | `emdash@0.36.0` and `@emdash-cms/cloudflare@0.36.0` remain unchanged                      |
| Existing site-local patch remains governed                  | Pass        | Wrangler patch and release-based removal trigger remain in the registry                   |
| Child-site typecheck and build pass                         | Pass        | Local checks and PR CI run `33942675826`                                                  |
| Runtime changes are merged and deployed                     | Pass        | PR #48; run `33942840298`; Worker `dfab1e44-cea7-4b6b-be94-56c18b429ea6`                  |
| Live primary menu matches approved information architecture | Pass        | MCP write/read on `01KS6WKFYPC9ZVSY5FH5TWZ6KY` confirmed four ordered items               |
| Production browser checks pass                              | Pass        | Six responsive light/dark views, all linked routes, and clean browser/network results     |
| EmDash admin CSP remains strict                             | Pass        | Admin login is `private, no-store, no-transform` and retains the stricter CSP             |
| Child-site handover is current                              | Pass        | Version `2026.09.04-1`, PR #49, merge `3d78e76`                                           |
| No EmDash package patch or unpublished dependency is active | Pass        | Child package and lockfile remain on released npm packages                                |
| Webhook notifier defect remains documented                  | Open        | Child task T17 records skipped automatic hooks and the official-fix/removal decision      |
| Production snapshot strategy remains documented             | Open        | Child task T10 remains pending                                                            |
| Orchestrator lint commands complete locally                 | Known issue | Type-aware baseline and post-edit quick lint abort in `oxc_allocator` without diagnostics |
| Orchestrator formatting checks pass                         | Pass        | `pnpm format` and `pnpm format:check` completed successfully                              |
| Orchestrator package typecheck passes                       | Pass        | `pnpm typecheck` completed successfully                                                   |
| EmDash documentation build passes                           | Pass        | `pnpm --dir docs build` passed with the existing Node `DEP0040` warning                   |
