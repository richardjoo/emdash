# EmDash Docs

Documentation site for EmDash, built with [Starlight](https://starlight.astro.build).

Canonical repository governance lives in the root `README.md`, `CONTRIBUTING.md`, `AGENTS.md`, and `TEMPLATES.md` files.

Published docs content lives under `docs/src/content/docs/`. Internal AI-facing work logs and handover packages live under `docs/worklogs/` and are not part of the public docs site.

## Development

Run these commands from `docs/`:

```bash
pnpm dev
```

If you're running in a remote or API-token-only environment that cannot access the
Cloudflare AI Search instance, keep using `pnpm dev` for local content work and
use the local-only Wrangler config for built-worker preview checks instead:

```bash
pnpm build
pnpm exec wrangler dev --config wrangler.local.jsonc
```

The `/mcp` endpoint still works, but it returns a helpful message until a
Cloudflare AI Search binding is configured.

## Build

Run from `docs/`:

```bash
pnpm build
```

For remote docs preview/deploy checks that require production bindings, run the
main config as usual:

```bash
pnpm exec wrangler dev
pnpm exec wrangler deploy
```
