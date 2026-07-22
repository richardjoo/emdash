# EmDash Cloudflare Demo

This demo shows EmDash running on Cloudflare Workers with D1, R2, and Cloudflare Access auth.

It uses the real `workerd` runtime in development via Astro's Cloudflare adapter.

## Setup

1. Start the dev server:

```bash
pnpm dev
```

EmDash runs migrations automatically on first request — no manual migration or DB-create step
needed. If the database is empty, the configured seed is also applied automatically on first
request.

2. Open http://localhost:4321/\_emdash/admin

## Preview

After building, you can preview with the real Workers runtime:

```bash
pnpm build
pnpm preview
```

## Deployment

```bash
pnpm deploy
```

This builds and deploys to Cloudflare Workers. EmDash handles migrations automatically on startup.

## Notes

- `astro dev` now uses `workerd` (the real Workers runtime) - development matches production
- `wrangler types` runs automatically before dev/build to generate TypeScript types for bindings
- R2 storage for media uploads is already configured via `storage: r2({ binding: "MEDIA" })`
- Cloudflare Access auth is already configured; set the expected Access audience in your local
  environment if you want to exercise the admin login flow
