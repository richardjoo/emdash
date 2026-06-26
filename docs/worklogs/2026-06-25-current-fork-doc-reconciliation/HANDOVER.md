# Handover Summary

## Scope

This pass reconciled the canonical/root governance docs only: `README.md`, `CONTRIBUTING.md`, `AGENTS.md`, `TEMPLATES.md`, and `docs/README.md`. It did not attempt a full package-level README audit or a published docs-site content sweep.

## Current State

The current fork is clean on `main` and was audited against its own state, not against `upstream/main`. At the start of the pass it was `21` commits ahead and `39` commits behind upstream. The repo requires Node `22.22.2` from `.nvmrc`; after the reboot the shell was on Node `20.20.0`, which broke baseline repo commands until corrected.

The canonical-doc set is now internally aligned around the current seed workflow:

- demo and template seeds apply automatically on the first request when the database is empty
- root docs no longer instruct stale manual `seed` or `bootstrap` steps for normal demo/template startup
- AI-facing project-state material now has a defined home under `docs/worklogs/`
- root docs now cross-link more explicitly so the next reader can move from overview -> contributor policy -> agent rules -> template guide -> docs subproject guide without guessing

Versioning for this package is keyed to the current fork's own manifests. The main published family in this fork is at `0.21.0`; notable exceptions include `@emdash-cms/auth-atproto@0.2.17`, `@emdash-cms/plugin-cli@0.6.0`, `@emdash-cms/registry-client@0.3.2`, `@emdash-cms/registry-lexicons@0.1.1`, and `@emdash-cms/sandbox-workerd@0.1.9`.

## Risks

1. Template screenshot automation is currently broken on this fork.
   - `pnpm screenshots blog` fails immediately because `scripts/screenshot-all-templates.mjs` still runs `pnpm bootstrap`, while current template packages no longer define `bootstrap`.
   - This is now documented in `TEMPLATES.md` and tracked in `TODO.md`.

2. The fork has meaningful upstream drift.
   - That drift was intentionally not reconciled in this pass.
   - Any future “make docs current” request needs to confirm whether “current” still means current fork state or freshly synced upstream state.

3. Full package typecheck is currently not clean.
   - `pnpm typecheck` fails in `packages/plugin-cli` because it imports missing exports from `@emdash-cms/plugin-types`.
   - This docs pass did not touch TypeScript sources, so treat it as an existing repo issue discovered during verification.

4. Only canonical/root governance docs were audited.
   - Package READMEs, template/demo READMEs, and published docs-site pages may still contain similar stale language.
   - That follow-up is tracked but intentionally out of scope here.

## Recommended Next Actions

1. Repair screenshot automation by either restoring a template-level `bootstrap` path or updating `scripts/screenshot-all-templates.mjs` to the current auto-seed flow.
2. Resolve the `@emdash-cms/plugin-cli` typecheck failure before treating the repo as verification-clean.
3. Decide whether the fork should be synced with `upstream/main` before the next substantive docs or feature pass.
4. If a broader documentation cleanup is needed later, extend the same audit pattern to package READMEs and `docs/src/content/docs/`.

## Resume Instructions For The Next AI

1. Start with `AGENTS.md`, `CONTRIBUTING.md`, `docs/worklogs/README.md`, and this folder's `README.md`.
2. Switch to the Node version in `.nvmrc` before running repo commands.
3. Treat this handover package as the time-bound state layer; treat the five canonical root docs as the source-of-truth layer.
4. If you change canonical docs again, update this package or create a new dated folder under `docs/worklogs/` rather than scattering status notes elsewhere.
