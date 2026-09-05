# Worklog

## 2026-09-04

1. Ran the required pre-edit `pnpm lint:json | jq '.diagnostics | length'` command. `oxlint` aborted in `oxc_allocator` before emitting valid JSON, matching the existing local lint-tool failure class.
2. Fetched `upstream/main` and found `origin/main` `68` commits ahead and `4` behind.
3. Merged upstream through `108c753b` without conflicts on `sync/upstream-main-2026-09-04-108c753b`, preserving both histories in commit `0634e689`.
4. Verified the sync locally with install, build, typecheck, formatting, whitespace checks, and focused reruns for aggregate-load test timeouts. PR #17's complete remote matrix passed.
5. Merged orchestrator PR #17 as `e64a0cdf`. Main CI run `33942319465`, CodeQL run `33942319478`, and the other post-merge workflows passed. A final fetch reported `70` commits ahead and `0` behind upstream.
6. Kept the child site on released `emdash@0.36.0` and `@emdash-cms/cloudflare@0.36.0` and retained the governed `wrangler@4.104.0` patch.
7. Updated the child seed baseline to four primary-menu items, kept the wordmark as Home, reduced the hero to two actions, added a conditional "More About Me" section, and split the header's `980px` breakpoint from the footer's `640px` breakpoint.
8. Verified the child change under Node `22.22.2` with `pnpm typecheck`, `pnpm build`, JSON and whitespace checks, eight linked local routes, and Playwright at six light/dark responsive views.
9. Opened child-site PR #48 with responsive screenshots and the package/patch state. PR CI run `33942675826` passed, and merge `fd6a0e9` triggered production run `33942840298`.
10. Watched production run `33942840298` pass `changes`, `validate`, and `deploy`, activating Worker `dfab1e44-cea7-4b6b-be94-56c18b429ea6`.
11. Verified the deployed homepage and admin CSP boundary before changing D1. Routine-PAT MCP `initialize`, `menu_list`, and `menu_get` confirmed the existing nine-item English menu and provided its exact rollback order.
12. Called atomic `menu_set_items` for menu `01KS6WKFYPC9ZVSY5FH5TWZ6KY`, locale `en`. MCP returned `itemCount: 4`; read-after-write confirmed `Posts`, `Projects`, `About`, and `Work With Me` at `2026-09-05T03:58:27.583Z`.
13. Verified production with Playwright at `1440`, `981`, `980`, `768`, and `390px` in light and dark modes. Exact navigation, hero actions, secondary links, wordmark target, header/footer breakpoints, and all linked routes passed without overflow, console errors, page errors, or failed requests.
14. Updated the child handover to `2026.09.04-1` and merged child-site PR #49 as `3d78e76`. PR CI `33943811047` and post-merge CI `33943881971` passed; both correctly skipped deployment for the documentation-only diff.
15. Updated the orchestrator child-site registry and created this dated rollout package.
16. Ran `pnpm lint:quick` after the orchestrator documentation edit. `oxlint` again aborted in `oxc_allocator` with exit code 134 before emitting diagnostics.
17. Ran `pnpm format` and `pnpm format:check`; both completed successfully.
18. Ran `pnpm typecheck`, `pnpm --dir docs build`, and `git diff --check`; all passed. The documentation build retained the existing Node `DEP0040` warning.

## Decisions

- Keep the primary header focused on `Posts`, `Projects`, `About`, and `Work With Me`; Home remains available through the wordmark.
- Keep `Start Here` and `Work With Me` in the homepage hero and surface `Now`, `Uses`, and `Elsewhere` in the conditional "More About Me" section.
- Treat live D1 as authoritative and use atomic routine-PAT MCP operations rather than applying the seed to production.
- Preserve the previous menu order for rollback: `Home`, `Start Here`, `Posts`, `Projects`, `Work With Me`, `About`, `Uses`, `Now`, `Elsewhere`.
- Keep the child site on released `emdash@0.36.0` and `@emdash-cms/cloudflare@0.36.0`; no package patch or unpublished dependency was introduced.
- Preserve the existing public Web Analytics CSP and `/_emdash` `no-transform` behavior.
