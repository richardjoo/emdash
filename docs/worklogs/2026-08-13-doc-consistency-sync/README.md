# Documentation Consistency Sync

Internal AI-facing handover package for the `2026-08-13` upstream sync checkpoint and narrow documentation consistency pass.

## Snapshot

- Orchestrator repo branch for edits: `docs/doc-consistency-2026-08-13`
- Upstream sync prerequisite: completed and pushed to `origin/main` as merge commit `5356c303`
- Sync result: `origin/main` contains all commits from `upstream/main` at the time of the pass
- Baseline after sync: `pnpm lint:json | jq '.diagnostics | length'` returned `0`

## Scope

This package covers:

- normalizing documented Node.js prerequisites to `v22.13.0+`
- clarifying that `getStaticPaths()` is valid for intentionally static builds, while themes/templates and runtime CMS pages should use SSR
- correcting sandbox-runner wording so D1-only applies to the Cloudflare sandbox runner on Hyperdrive, not to the Node.js workerd runner
- recording the verification commands run for the documentation pass
