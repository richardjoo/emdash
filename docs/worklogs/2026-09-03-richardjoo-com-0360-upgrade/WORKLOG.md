# Worklog

## 2026-09-03

1. Fetched `upstream` and confirmed `richardjoo/emdash` was `63` commits ahead and `0` behind.
2. Confirmed that npm published `emdash@0.36.0` and `@emdash-cms/cloudflare@0.36.0`, then traced the release source to commit `2adef407`.
3. Reviewed the release delta against the child site:
   - Node `22.22.2` satisfies the `>=22.16` package requirement.
   - The site has no removed `mediaUsageCron` option or related trigger.
   - The existing Wrangler patch is unrelated and remains governed by its release trigger.
   - Upstream PR #2516 is not part of `0.36.0` and remains outside the child-site consume target.
4. Updated the child site to the released `0.36.0` packages and regenerated `pnpm-lock.yaml`, `emdash-env.d.ts`, and the ignored `.emdash/migrations.json` manifest.
5. Verified the child site with a frozen install, package peer check, typecheck, build, Wrangler dry run, local homepage smoke test, and local authenticated admin list/editor checks.
6. Opened child-site PR #43 from commit `fd91eec`; CI run `33719175844` passed `changes` and `validate`.
7. Dispatched D1 backup run `33719529053`; it produced artifact `d1-backup-my-emdash-site-20260903T053727Z`.
8. Rechecked the production D1 target, then applied migrations `060_collection_admin_config` through `073_media_focal_point` with target fingerprint `bd5618801d46415ebbe9a01f0321bb7b39d2ca87525d52e39bdc054433ad5ba2`.
9. Verified the migration report had no pending or unknown migrations, then merged PR #43 as `5bea6d2`.
10. Watched CI run `33723312212` pass `changes`, `validate`, and `deploy`; Cloudflare activated Worker version `39902304-6603-4718-a0e4-4513b4b25928` on `richardjoo.com`.
11. Verified the production homepage and admin login without browser errors, completed routine-token MCP initialize and settings reads, and reran the migration check with no pending or unknown migrations.
12. Traced webhook startup warnings to `@emdash-cms/plugin-webhook-notifier@0.2.0`. The package omits `content:read` and `media:read`, so EmDash skips its three automatic hooks. The package and enforcement code are unchanged from `0.33.0`, making this an existing defect rather than an upgrade regression.
13. Updated the child handover to `2026.09.03-1` and merged child-site PR #44 as `65c7dde`; its PR and `main` CI runs passed without another deployment.
14. Ran the required orchestrator pre-edit lint command. `pnpm lint:json | jq '.diagnostics | length'` failed before producing JSON because the `tsgolint` subprocess was killed with `SIGKILL`; this is the recorded baseline for the orchestrator documentation edit.
15. Updated the orchestrator registry and created this worklog package.
16. Ran `pnpm lint:quick` after the documentation edit. `oxlint` aborted in `oxc_allocator` with exit code 134, matching the existing local lint-tool failure class; `pnpm format` completed successfully.
17. Ran `pnpm typecheck` and `pnpm --dir docs build`; both completed successfully. The docs build retained the existing Node `DEP0040` warning.

## Decisions

- Consume only released npm packages in the child site; no EmDash package patch or unpublished dependency was introduced.
- Serialize production migration work by taking a fresh backup, confirming the D1 fingerprint, applying migrations, and checking status before merging the deployment PR.
- Keep the existing Wrangler patch until its documented release trigger is met.
- Leave upstream PR #2516 and child-site task T15 pending until the optimization ships in an official release.
- Do not weaken capability enforcement or add a local webhook plugin workaround. Confirm production usage, then consume an official fix or remove the unused plugin.
