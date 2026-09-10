# Worklog

## 2026-09-09

1. Fetched `upstream/main` and synchronized the fork through `44114afd` on `sync/upstream-main-2026-09-09-44114afd`, preserving both histories in commit `bbc36d658`.
2. Opened richardjoo/emdash#19 and verified its complete remote matrix, including CI run `34426697013` and CodeQL run `34426697049`.
3. Merged fork PR #19 as `94b54ad9a`. Main CI run `34428540344`, CodeQL run `34428540351`, and the other post-merge workflows passed. The final fetch reports `74` commits ahead and `0` behind upstream.
4. Confirmed official tag `emdash@0.37.0` resolves to release commit `fc87efeb` and reviewed the release against the child site.
5. Confirmed Node `22.22.2` satisfies the release requirement, migration `074_content_deleted_scheduled_index` is the only new migration, and MCP content update and publication tools require `_rev` from `content_get`.
6. Updated the child site to `emdash@0.37.0`, `@emdash-cms/cloudflare@0.37.0`, and `@emdash-cms/plugin-forms@0.2.6` in commit `9d2a47d`. The exact patched `wrangler@4.104.0` baseline and webhook notifier `0.2.0` remained unchanged.
7. Verified the child branch under Node `22.22.2` with a frozen install, package peer check, typecheck, traced build, Wrangler dry run, whitespace check, and local public/admin browser checks. The traced build omitted `DEP0040`.
8. Kept the release's nested `lowlight` optimize-dependency warning as a non-blocking upstream warning after the local editor and code-block extension loaded without browser errors.
9. Opened child-site PR #50. CI run `34435380544` passed `changes` and `validate`.
10. Dispatched D1 backup run `34434143085`. Artifact `d1-backup-my-emdash-site-20260910T034017Z` includes every durable table, and its downloaded checksum and gzip integrity tests passed.
11. Confirmed D1 target fingerprint `bd5618801d46415ebbe9a01f0321bb7b39d2ca87525d52e39bdc054433ad5ba2`, applied migration `074_content_deleted_scheduled_index`, and verified no pending or unknown migrations remained.
12. Queried production indexes and confirmed `idx_ec_pages_del_sched` and `idx_ec_posts_del_sched` use `(deleted_at, scheduled_at)` with `scheduled_at IS NOT NULL`.
13. Merged child-site PR #50 as `1a742f3`. CI run `34436915120` passed `changes`, `validate`, and `deploy`, activating Worker `55e5ec6c-36d6-4c25-b80f-1117ec2bbb73`.
14. Verified the homepage, eight navigation and homepage-link targets, and the AI Ops page returned `200`. The active form rendered all expected fields without browser console or page errors.
15. Verified the public Web Analytics beacon and `/cdn-cgi/rum` resource entries. The admin login remained beacon-free with its strict CSP and `private, no-store, no-transform` cache policy.
16. Used the routine PAT for MCP initialization and `menu_get`. Menu `01KS6WKFYPC9ZVSY5FH5TWZ6KY` remained `Posts`, `Projects`, `About`, and `Work With Me`; no production content or menu write occurred.
17. Rechecked migration status after deployment; every known migration through `074_content_deleted_scheduled_index` is applied with no pending or unknown migrations.
18. Updated the child handover to `2026.09.09-1` and merged child-site PR #51 as `ad0ba5a`. PR CI `34439332859` and post-merge CI `34439448138` passed; both correctly skipped deployment for the documentation-only diff.
19. Fetched upstream again before this orchestrator edit. The fork remained `74` commits ahead and `0` behind.
20. Refreshed the synchronized workspace with `pnpm install --frozen-lockfile`. The required pre-edit `pnpm lint:json | jq '.diagnostics | length'` baseline then returned `0` diagnostics.
21. Updated the orchestrator child-site registry and created this worklog package.

## Decisions

- Consume only released npm packages in the child site; no EmDash package patch or unpublished dependency was introduced.
- Serialize production migration work by taking and verifying a fresh backup, confirming the D1 fingerprint, applying migration `074`, and checking status before merging the deployment PR.
- Treat production D1 and plugin storage as authoritative. Do not seed production during package upgrades.
- Preserve the live English `primary` menu and the existing public/admin CSP split.
- Require MCP clients to read content and pass the returned `_rev` to update and publication actions.
- Keep the existing Wrangler patch until its documented release trigger is met.
- Do not add direct child dependencies solely to suppress the nested `lowlight` Vite warning while the editor works correctly.
- Do not weaken capability enforcement or add a local webhook plugin workaround. Confirm production usage, then consume an official fix or remove the unused plugin.
- Keep the separate admin bundle optimization pending until it ships in an official release.

## Validation

### Child-site local and PR

- `pnpm install --frozen-lockfile`
- `pnpm check:package-peers`
- `pnpm typecheck`
- `pnpm build:traced`
- `pnpm build:check`
- `pnpm exec wrangler deploy --dry-run --outdir /tmp/opencode/wrangler-dry-run --config wrangler.jsonc`
- `git diff --check`
- Upgrade PR CI run `34435380544`

### Production

- Backup workflow `34434143085`; artifact `d1-backup-my-emdash-site-20260910T034017Z`, ID `10136184095`, expires 2026-12-09.
- Migration status clean at target fingerprint `bd5618801d46415ebbe9a01f0321bb7b39d2ca87525d52e39bdc054433ad5ba2`.
- Runtime deployment run `34436915120`; Worker version `55e5ec6c-36d6-4c25-b80f-1117ec2bbb73`.
- Post-deployment production smoke passed for public routes, forms UI, admin login, CSP split, analytics resources, MCP, and menu state.
- Handover-only main run `34439448138` passed and correctly skipped deployment.

### Orchestrator documentation

- `pnpm lint:quick`
- `pnpm format:check`
- `git diff --check`
- `pnpm build`
- `pnpm typecheck`
- `pnpm --filter docs build`
