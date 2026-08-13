# Master Documents

## Version Basis

This package is keyed to the fork state after upstream sync merge commit `5356c303`.

| Scope | Version basis |
| --- | --- |
| Orchestrator repo anchor | `emdash@5356c303` plus documentation edits on `docs/doc-consistency-2026-08-13` |
| Upstream basis | `upstream/main` had no commits missing from `origin/main` after the sync |
| Child-site state | No child-site changes in this package |

## Canonical Documents Touched

| Document | Role | Status after this pass | Notes |
| --- | --- | --- | --- |
| `CONTRIBUTING.md` | Human contributor setup and PR policy | Updated | Node prerequisite and pnpm/Corepack wording aligned with observed toolchain behavior |
| `docs/src/content/docs/getting-started.mdx` | Public onboarding | Updated | Node prerequisite normalized |
| `docs/src/content/docs/existing-project.mdx` | Existing Astro project guide | Updated | Node prerequisite normalized |
| `docs/src/content/docs/deployment/nodejs.mdx` | Node deployment guide | Updated | Node prerequisite normalized |
| `docs/src/content/docs/guides/querying-content.mdx` | Public content-query guide | Updated | Static vs SSR guidance clarified |
| `docs/src/content/docs/coming-from/astro.mdx` | Astro migration guide | Updated | Static vs SSR guidance clarified |
| `docs/src/content/docs/coming-from/astro-for-wp-devs.mdx` | Astro primer for WordPress developers | Updated | Static route example annotated with SSR caveat |
| `docs/src/content/docs/themes/porting-wp-themes.mdx` | Theme migration guide | Updated | Theme content examples changed to SSR |
| `docs/src/content/docs/plugins/creating-plugins/choosing-a-format.mdx` | Plugin format guidance | Updated | Sandbox runner support clarified |
| `docs/src/content/docs/plugins/creating-plugins/your-first-plugin.mdx` | Sandboxed plugin tutorial | Updated | Cloudflare sandbox runner scope clarified |
| `docs/src/content/docs/plugins/installing.mdx` | Plugin installation guide | Updated | Cloudflare sandbox runner D1 requirement clarified |
| `docs/src/content/docs/deployment/database.mdx` | Database deployment guide | Updated | Hyperdrive sandbox limitation scoped to the Cloudflare runner |
| `docs/worklogs/README.md` | Worklog index | Updated | Added this dated package |
