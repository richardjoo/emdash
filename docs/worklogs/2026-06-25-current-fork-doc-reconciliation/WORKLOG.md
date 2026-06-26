# Worklog

## 2026-06-25

1. Confirmed the repo baseline after the cold reboot.
   - Worktree was clean on `main`.
   - Remotes included `origin` and `upstream`.

2. Fetched `upstream` and measured fork drift.
   - Result: `21` commits ahead and `39` commits behind `upstream/main`.
   - Decision: continue against the current fork state as directed.

3. Corrected the shell runtime before verification.
   - Initial repo commands failed under Node `v20.20.0`.
   - Switched to `.nvmrc` -> Node `22.22.2`.

4. Re-ran the required baseline check.
   - `pnpm lint:json | jq '.diagnostics | length'` -> `0`.

5. Audited the canonical/root governance docs in scope.
   - `README.md`
   - `CONTRIBUTING.md`
   - `AGENTS.md`
   - `TEMPLATES.md`
   - `docs/README.md`

6. Found the primary canonical-doc conflicts.
   - `README.md` still instructed `pnpm --filter emdash-demo seed`.
   - `TEMPLATES.md` still instructed `pnpm bootstrap`.
   - Root docs did not define an internal worklog/handover location.
   - Cross-links between the root docs were thinner than needed for a clean handoff.

7. Verified one operational mismatch affecting template-maintenance docs.
   - Ran `pnpm screenshots blog` under Node `22.22.2`.
   - Result: failed because `scripts/screenshot-all-templates.mjs` still invokes `pnpm bootstrap`, but current template packages do not define `bootstrap`.

8. Updated the canonical/root docs.
   - Removed stale manual seed/bootstrap instructions.
   - Added missing guidance links and worklog conventions.
   - Clarified the published-docs vs internal-worklogs boundary.

9. Created `docs/worklogs/` and the dated handover package for this pass.

10. Ran final verification on the docs-only changes.

- Formatted changed Markdown files with `pnpm exec prettier --write`.
- `pnpm lint:quick` passed.
- `pnpm typecheck` failed in `packages/plugin-cli` because it imports missing exports from `@emdash-cms/plugin-types`.

11. Logged the verification-discovered repo issues for the next AI.

- Added TODO follow-ups for screenshot automation and the `plugin-cli` typecheck failure.
- Marked those as repo-level risks rather than canonical-doc ambiguities.
