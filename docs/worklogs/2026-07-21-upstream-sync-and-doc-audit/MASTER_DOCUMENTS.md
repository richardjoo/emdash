# Master Documents

## Version Basis

This handover package is keyed to the current fork state after merging `upstream/main` into local `main` and applying the docs-audit cleanup commit.

| Scope | Version basis |
| --- | --- |
| Workspace root | `1.0.0` |
| Core release family | `emdash@0.30.0`, `@emdash-cms/admin@0.30.0`, `@emdash-cms/auth@0.30.0`, `@emdash-cms/blocks@0.30.0`, `@emdash-cms/cloudflare@0.30.0`, `create-emdash@0.30.0`, `@emdash-cms/gutenberg-to-portable-text@0.30.0`, `@emdash-cms/x402@0.30.0` |
| Other published packages | `@emdash-cms/auth-atproto@0.2.29`, `@emdash-cms/plugin-cli@0.8.0`, `@emdash-cms/registry-client@0.3.4`, `@emdash-cms/registry-lexicons@0.3.0`, `@emdash-cms/sandbox-workerd@0.3.0`, `@emdash-cms/registry-verification@0.1.0` |
| Audit anchor | `emdash@537528c9` with prior docs cleanup commit `c17e3ed1` on `2026-07-21` |

## Canonical Document Set

| Document | Audience | Role | Status after this pass | Notes |
| --- | --- | --- | --- | --- |
| `README.md` | Public / contributors | Product overview and repo entry point | Verified | No local edits in this pass; upstream merge applied cleanly |
| `CONTRIBUTING.md` | Contributors | Workflow, policy, PR rules, changesets | Updated by upstream | Post-sync verification now runs cleanly under the pinned Node version |
| `AGENTS.md` | AI agents | Repository-specific engineering rules | Updated by upstream | Sync-first governance remains in place; lint baseline guidance is now no longer stale |
| `TEMPLATES.md` | Contributors / maintainers | Template workflow and maintenance | Verified | Not changed in this pass |
| `docs/README.md` | Docs maintainers / AI agents | Docs subproject boundary and operations | Verified | Worklog index extended for this pass |
| `docs/worklogs/README.md` | AI agents | Worklog naming, required files, and active package index | Updated | Added this dated handover package |

## Published/Operational Docs Corrected In This Pass

- `docs/src/content/docs/index.mdx`
- `docs/src/content/docs/introduction.mdx`
- `docs/src/content/docs/getting-started.mdx`
- `docs/src/content/docs/themes/overview.mdx`
- `docs/src/content/docs/reference/api.mdx`
- `docs/src/content/docs/reference/rest-api.mdx`
- `docs/src/content/docs/guides/working-with-content.mdx`
- `docs/src/content/docs/guides/media-library.mdx`
- `docs/src/content/docs/guides/site-settings.mdx`
- `docs/src/content/docs/deployment/nodejs.mdx`
- `demos/plugins-demo/README.md`
- `demos/cloudflare/README.md`
- `packages/plugins/marketplace-test/README.md`
- `infra/perf-monitor/README.md`

## Canonical Decisions Locked In

- Syncing the fork remains mandatory before substantive work when the fork is behind `upstream/main`.
- The default general onboarding path is `npm create emdash@latest`; theme-specific docs may still use `create-astro` template commands where that is the point of the page.
- Current user-facing version targets are Astro 7-era docs with Node `22+` guidance.
- Session-authenticated state-changing admin/API calls require `X-EmDash-Request: 1`; bearer-token requests are exempt.
- The documented API envelope is `{ data: ... }` on success and `{ error: ... }` on failure.

## Consolidated Accuracy Notes

- The previously recorded `oxlint` panic is no longer reproducible in this checkout after the upstream sync and fresh install; lint now returns `0` diagnostics under Node `22.22.2`.
- The focused OAuth regression introduced by the merge was resolved by updating `packages/core/src/astro/routes/api/auth/oauth/env.ts` to avoid touching `locals.runtime` and prefer `virtual:emdash/env`.
- Child-site follow-up work was intentionally not performed in this pass.
