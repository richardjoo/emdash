# Handover Summary

## Scope

This pass handled an upstream sync prerequisite and a narrow documentation consistency update.

## Current State

- `origin/main` is synced with `upstream/main` as of merge commit `5356c303`.
- Documentation edits are on branch `docs/doc-consistency-2026-08-13`.
- Public and contributor docs now use Node.js `v22.13.0+` where the previous wording was inconsistent.
- Static-generation docs now state that `getStaticPaths()` freezes content until rebuild, while themes/templates and runtime CMS pages should use SSR.
- Hyperdrive docs now say the Cloudflare sandbox runner is D1-only; Node.js sandboxing through `@emdash-cms/sandbox-workerd` remains documented separately.

## Verification

Verification already run during the pass:

- `pnpm lint:quick`
- `git diff --check`
- `pnpm lint:json | jq '.diagnostics | length'`
- `pnpm exec prettier --check <edited docs>`
- `pnpm --filter docs build`

Final targeted verification was repeated after adding this handover package.
