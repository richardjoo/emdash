# Cross-Reference Map

| File | Why it mattered |
| --- | --- |
| `.nvmrc` | Shows the repo-pinned working Node version, `22.22.2` |
| `package.json` | Pins `pnpm@11.9.0`, whose runtime warning requires Node `v22.13+` |
| `CONTRIBUTING.md` | Canonical contributor setup prerequisites |
| `docs/src/content/docs/getting-started.mdx` | Public new-project prerequisite wording |
| `docs/src/content/docs/existing-project.mdx` | Public existing-project prerequisite wording |
| `docs/src/content/docs/deployment/nodejs.mdx` | Public Node deployment prerequisite wording |
| `docs/src/content/docs/guides/querying-content.mdx` | Primary static vs SSR guidance |
| `docs/src/content/docs/themes/creating-themes.mdx` | Existing authoritative rule that theme content pages are SSR |
| `docs/src/content/docs/themes/porting-wp-themes.mdx` | Previously conflicting theme content examples |
| `packages/cloudflare/src/sandbox/bridge.ts` | Confirms the Cloudflare sandbox bridge uses a D1 binding |
| `packages/workerd/src/sandbox/bridge-handler.ts` | Confirms the Node.js workerd runner uses the configured Kysely database |
| `docs/src/content/docs/deployment/database.mdx` | Hyperdrive limitation wording |
