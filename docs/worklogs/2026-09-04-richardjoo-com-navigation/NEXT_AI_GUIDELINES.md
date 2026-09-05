# Next AI guidelines

- Treat child-site `main` at `3d78e76` as the current documented baseline and `fd6a0e9` as the deployed runtime merge.
- Treat child-site handover package `2026.09.04-1` as the source of truth for its active editorial and operational backlog.
- Treat orchestrator sync merge `e64a0cdf` as including upstream through `108c753b`; the last verified divergence is `70` commits ahead and `0` behind.
- Recheck upstream before the next substantive orchestrator or child-site package-contract change.
- Use the routine PAT and `https://richardjoo.com` for normal live operations; do not seed production.
- Keep the live English `primary` menu ordered as `Posts`, `Projects`, `About`, and `Work With Me` unless Richard approves another information architecture.
- For rollback, atomically restore `Home`, `Start Here`, `Posts`, `Projects`, `Work With Me`, `About`, `Uses`, `Now`, and `Elsewhere` to menu `primary`, locale `en`.
- Preserve the `981px` single-line and `980px` stacked header boundary and the footer's independent `640px` single-column boundary.
- Keep Cloudflare Web Analytics enabled on public HTML and preserve the `/_emdash` `no-transform` exclusion unless the account-level analytics policy changes deliberately.
- Treat `emdash@0.36.0` and `@emdash-cms/cloudflare@0.36.0` as the current official child-site consume target.
- Do not assume `@emdash-cms/plugin-webhook-notifier@0.2.0` sends automatic notifications. Confirm production need before consuming an official fix or removing the plugin.
- Preserve the Wrangler patch, exact pin, and removal trigger as one governed exception.
- Record the local `pnpm lint:json` and `pnpm lint:quick` `oxc_allocator` aborts if they still reproduce during the next orchestrator edit.
