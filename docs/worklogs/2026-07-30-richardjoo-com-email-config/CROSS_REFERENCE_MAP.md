# Cross-Reference Map

| File                                                                     | Why it mattered                                                   |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `richardjoo-com/astro.config.mjs`                                        | Adds the `cloudflareEmail(...)` plugin configuration              |
| `richardjoo-com/wrangler.jsonc`                                          | Declares the `send_email` Worker binding                          |
| `richardjoo-com/package.json`                                            | Aligns the site to released `0.31.1` packages                     |
| `packages/cloudflare/src/plugins/cloudflare-email.ts`                    | Defines the expected plugin/binding behavior                      |
| `packages/core/src/astro/routes/api/settings/email.ts`                   | Live verification path for provider status and test-send behavior |
| `packages/core/src/astro/routes/api/admin/hooks/exclusive/[hookName].ts` | Confirms the selected `email:deliver` provider                    |
