# Next AI guidelines

- Treat child-site `main` at `9e068a6` as the current documented baseline and `e1b48a0` as the deployed runtime merge.
- Treat child-site handover package `2026.09.03-2` as the source of truth for its active editorial and operational backlog.
- Treat orchestrator sync merge `3d44a44d` as including upstream through `264940dc`; the last verified divergence is `66` commits ahead and `0` behind.
- Recheck upstream before the next substantive orchestrator or child-site package-contract change.
- Keep Cloudflare Web Analytics enabled on public HTML and preserve the `/_emdash` `no-transform` exclusion unless the account-level analytics policy changes deliberately.
- Keep public Web Analytics `connect-src` on `'self'`; automatic setup posts to `/cdn-cgi/rum` on the site origin.
- Do not add the analytics origin to EmDash's stricter admin CSP.
- Treat `emdash@0.36.0` and `@emdash-cms/cloudflare@0.36.0` as the current official child-site consume target.
- Do not assume `@emdash-cms/plugin-webhook-notifier@0.2.0` sends automatic notifications. Confirm production need before consuming an official fix or removing the plugin.
- Do not consume upstream PR #2516 directly. Keep the admin bundle optimization pending until it is published in an official release.
- Preserve the Wrangler patch, exact pin, and removal trigger as one governed exception.
- Record the local `pnpm lint:json` and `pnpm lint:quick` `oxc_allocator` aborts if they still reproduce during the next orchestrator edit.
