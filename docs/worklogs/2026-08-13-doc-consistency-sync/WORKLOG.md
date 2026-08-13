# Worklog

## 2026-08-13

1. Read the canonical root docs, orchestrator docs, current worklog package, public docs, package READMEs, and nested agent guidance to establish the working rules.
2. Ran the required upstream check and found `origin/main` missing commits from `upstream/main`.
3. Merged `upstream/main` into local `main`, resolved conflicts in `demos/cloudflare/README.md` and `docs/src/content/docs/reference/rest-api.mdx`, ran targeted checks, and pushed merge commit `5356c303` to `origin/main`.
4. Confirmed after sync that `origin/main` had no missing upstream commits.
5. Recorded the clean post-sync type-aware lint baseline: `pnpm lint:json | jq '.diagnostics | length'` returned `0`.
6. Updated documentation to normalize Node.js prerequisites, clarify SSR/static guidance, and reconcile sandbox-runner platform notes.
7. Added this handover package after Richard Joo requested that substantive source-of-truth documentation updates be recorded.

## Decisions

- Use Node.js `v22.13.0+` in docs because pinned `pnpm@11.9.0` warns below Node `v22.13`.
- Keep root `package.json` `engines.node` unchanged for this documentation-only pass.
- Treat `getStaticPaths()` as valid only for intentionally static EmDash builds; use SSR for themes, reusable templates, and runtime CMS pages.
- Scope D1-only sandbox wording to the Cloudflare sandbox runner on Hyperdrive deployments.
