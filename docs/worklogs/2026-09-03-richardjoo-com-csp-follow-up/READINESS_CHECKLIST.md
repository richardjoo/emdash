# Readiness checklist

| Check                                                       | Status      | Evidence                                                                                     |
| ----------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------- |
| Orchestrator fork is not behind upstream                    | Pass        | PR #15 merged through `264940dc`; fetch comparison reports `66` ahead and `0` behind         |
| Fork sync remote checks pass                                | Pass        | PR matrix, main CI `33804282758`, and main CodeQL `33804282788`                              |
| Child-site consume target still uses official releases      | Pass        | `emdash@0.36.0` and `@emdash-cms/cloudflare@0.36.0` remain in package and lock files         |
| Child-site typecheck and build pass                         | Pass        | Local checks and PR CI runs `33808998114` and `33810820050`                                  |
| Wrangler deployment dry runs pass                           | Pass        | Local checks for both child-site changes                                                     |
| Public Web Analytics behavior is verified                   | Pass        | Beacon `200`, RUM `204`, path-scoped CSP, and unrelated Cloudflare script blocked            |
| EmDash admin CSP remains strict                             | Pass        | No injected beacon; `frame-ancestors 'none'`; `private, no-store, no-transform`              |
| Production browser smoke checks pass                        | Pass        | Desktop homepage, mobile `Work With Me`, and anonymous admin redirect/login                  |
| Routine MCP checks pass                                     | Pass        | `initialize` and `settings_get` returned HTTP `200` with successful JSON-RPC results         |
| Runtime changes are merged and deployed                     | Pass        | PRs #45 and #46; production run `33811157462`; Worker `b9f0a711-f718-4e36-ba42-9ea0f7a3e326` |
| Child-site handover is current                              | Pass        | Version `2026.09.03-2`, PR #47, merge `9e068a6`                                              |
| Existing site-local patch remains governed                  | Pass        | Wrangler patch and release-based removal trigger remain in the registry                      |
| No EmDash package patch or unpublished dependency is active | Pass        | Child package and lockfile remain on released npm packages                                   |
| Webhook notifier defect remains documented                  | Open        | Child task T17 records skipped automatic hooks and the official-fix/removal decision         |
| Released admin bundle optimization remains tracked          | Open        | Child task T15 remains pending; upstream PR #2516 was not consumed                           |
| Orchestrator lint commands complete locally                 | Known issue | Type-aware and quick lint abort in `oxc_allocator`; no valid lint diagnostics are emitted    |
| Orchestrator package typecheck passes                       | Pass        | `pnpm typecheck` completed successfully                                                      |
| EmDash documentation build passes                           | Pass        | `pnpm --dir docs build` completed with the existing Node `DEP0040` warning                   |
