# Worklog

## 2026-07-14

1. Re-read the current source-of-truth docs and the latest dated worklog package.
   - Started with `AGENTS.md`, `CONTRIBUTING.md`, `README.md`, `docs/orchestrator/README.md`, `docs/orchestrator/SINGLE_AGENT_MODE.md`, and `docs/worklogs/README.md`.
   - Reviewed the prior dated handover package from `2026-06-25` to identify what had become stale.

2. Confirmed the enforced fork workflow before further work.
   - Compared `origin/main` with `upstream/main`.
   - Determined the fork was behind upstream and therefore had to be synced before anything else.

3. Synced `richardjoo/emdash` with upstream.
   - Merged `upstream/main` into local `main`.
   - Resolved the three merge conflicts in:
     - `.github/workflows/auto-format.yml`
     - `CONTRIBUTING.md`
     - `packages/core/src/astro/routes/api/setup/dev-bypass.ts`
   - Kept both the fork-specific schema-repair behavior and the upstream `?content=0` support in `dev-bypass`.
   - Verified the merged route behavior with `pnpm --filter emdash exec vitest run tests/unit/astro/setup-dev-bypass.test.ts --testTimeout=30000`.
   - Committed and pushed the sync as `a0b9146b`.

4. Upgraded the `richardjoo-com` child site after the fork was current.
   - Confirmed the site was still pinned to `emdash@0.23.0` and `@emdash-cms/cloudflare@0.23.0` with a local patch exception.
   - Verified that the local patch contained the same two fixes now present in the synced mainline:
     - Cloudflare OAuth env resolution via `cloudflare:workers`
     - seed schema-repair behavior
   - Updated the child site to released `emdash@0.28.1` and `@emdash-cms/cloudflare@0.28.1`.
   - Removed `patches/emdash@0.23.0.patch` and the `patchedDependencies` entry from `pnpm-workspace.yaml`.
   - Ran `pnpm install`, `pnpm typecheck`, and `pnpm build` in `richardjoo-com`; all passed.
   - Committed and pushed the child-site upgrade as `4bbe2e4`.

5. Updated orchestrator state after the child-site upgrade.
   - Updated `docs/orchestrator/CHILD_SITE_REGISTRY.md` to record the new `richardjoo-com` consume target and `none` for the patch exception.
   - Committed and pushed that registry update as `e9011e0f`.

6. Reconciled canonical/orchestrator docs against the actual current checkout state.
   - Verified the symlink layout:
     - `.claude/CLAUDE.md` exists and points to `../AGENTS.md`
     - `.claude/skills` exists and points to `../skills`
     - root `CLAUDE.md` does not exist
     - `.opencode/skills` does not exist
   - Found the stale note in `AGENTS.md` that still described the non-existent root `CLAUDE.md` and `.opencode/skills` symlinks.
   - Found that the fork workflow wording in `AGENTS.md` and orchestrator docs still allowed “explicitly account for drift” instead of enforcing sync-first when behind upstream.
   - Updated:
     - `AGENTS.md`
     - `docs/orchestrator/README.md`
     - `docs/orchestrator/SINGLE_AGENT_MODE.md`
     - `docs/worklogs/README.md`
     - `docs/orchestrator/CHILD_SITE_REGISTRY.md` (`Last verified` date corrected to `2026-07-14`)

7. Re-ran the key repo verification commands under Node `22.22.2`.
   - `pnpm lint:json` still panics inside `oxlint` before JSON is emitted.
   - `pnpm build` passed.
   - `pnpm typecheck` initially failed before the fresh build in `packages/cloudflare`, then passed after the build.

8. Created the new dated handover package.
   - Added this folder under `docs/worklogs/` with the requested inventory, changelog, TODOs, dependency map, worklog, handover, checklist, and next-AI rules.

## Decisions

- Syncing the fork is now treated as mandatory before any other substantive work whenever `origin/main` is behind `upstream/main`.
- Child sites continue to consume released npm packages by default; no unpublished branch or tarball consumption was introduced.
- `richardjoo-com` no longer needs a local EmDash patch exception.
- The current repo-level open issue to carry forward is the `oxlint` panic, not the previously stale `plugin-cli` typecheck failure.
