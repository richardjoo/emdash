# Worklog

## 2026-09-03

1. Refetched upstream after new commits landed and found the fork `64` commits ahead and `13` behind `upstream/main`.
2. Merged upstream through `264940dc` without conflicts on `sync/upstream-main-2026-09-03-264940dc`, preserving both histories in commit `53878ed6`.
3. Verified the sync locally with build, typecheck, focused package tests, formatting, and whitespace checks, then merged orchestrator PR #15 as `3d44a44d`. The complete PR matrix and post-merge CI run `33804282758` passed.
4. Refetched both remotes and confirmed the synchronized fork was `66` commits ahead and `0` behind upstream.
5. Ran a CSP-specific production browser check and found that Cloudflare's automatically injected Web Analytics beacon was blocked by the child site's `script-src`; the browser also reported that `upgrade-insecure-requests` is ignored in report-only policy.
6. Confirmed Cloudflare's automatic setup uses the same-origin `/cdn-cgi/rum` endpoint and tested CSP source matching in Chromium. The base beacon source does not match Cloudflare's version path, while a trailing-slash path source does and still blocks unrelated scripts on the same host.
7. Queried the Cloudflare zone successfully. The deploy token returned `403` from the RUM site-info endpoint because that endpoint requires `Account Settings Read`; no credential scope or account-level setting changed.
8. Merged child-site PR #45 as `27fe2a5`. Deployment run `33809351204` made public RUM operational, and post-deploy verification found the remaining admin case where EmDash's stricter CSP blocked the injected beacon.
9. Kept the third-party source out of the admin CSP and merged child-site PR #46 as `e1b48a0`. `/_emdash` HTML now uses `no-transform`, which prevents Cloudflare injection while preserving EmDash's policy.
10. Watched deployment run `33811157462` pass and activate Worker `b9f0a711-f718-4e36-ba42-9ea0f7a3e326`.
11. Verified the public homepage and `Work With Me` page on desktop/mobile. The SRI beacon returned `200`, same-origin RUM posts returned `204`, and browser consoles, page errors, and failed-request lists were clean.
12. Verified the anonymous admin redirect/login flow. The final page contained no beacon, retained `frame-ancestors 'none'`, returned `Cache-Control: private, no-store, no-transform`, and had no report-only policy or browser errors.
13. Repeated routine-token MCP initialize and `settings_get`; both returned HTTP `200` with successful JSON-RPC results.
14. Updated the child handover to `2026.09.03-2` and merged child-site PR #47 as `9e068a6`; PR CI `33812980550` and post-merge CI `33813088705` passed without deployment.
15. Refetched upstream before the orchestrator documentation update and reconfirmed the fork at `66` commits ahead and `0` behind.
16. Ran the required pre-edit `pnpm lint:json | jq '.diagnostics | length'` command. `oxlint` aborted in `oxc_allocator` before emitting valid JSON, matching the known local lint-tool failure class.
17. Ran `pnpm lint:quick` after the documentation edits; `oxlint` again aborted in `oxc_allocator` with exit code 134. `pnpm format` completed and left the preceding upgrade package unchanged.
18. Ran `pnpm typecheck` and `pnpm --dir docs build`; both passed. The documentation build retained the existing Node `DEP0040` warning.

## Decisions

- Preserve the configured public Web Analytics behavior rather than changing an account-level setting with unverified intent.
- Permit only the beacon base path and version-path prefix, not the entire `static.cloudflareinsights.com` origin.
- Keep `connect-src 'self'` because automatic setup posts to the site's `/cdn-cgi/rum` endpoint.
- Exclude `/_emdash` HTML with `no-transform` instead of adding a third-party script source to EmDash's stricter CSP.
- Keep the child site on released `emdash@0.36.0` and `@emdash-cms/cloudflare@0.36.0`; no package patch or unpublished dependency was introduced.
