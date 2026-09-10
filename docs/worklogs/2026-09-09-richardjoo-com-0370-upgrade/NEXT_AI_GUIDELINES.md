# Next AI guidelines

- Treat child-site `main` at `ad0ba5a` as the current documented baseline and `1a742f3` as the deployed runtime merge.
- Treat child-site handover package `2026.09.09-1` as the source of truth for its active editorial and operational backlog.
- Treat orchestrator sync merge `94b54ad9a` as including upstream through `44114afd`; the last verified divergence is `74` commits ahead and `0` behind.
- Recheck upstream before the next substantive orchestrator or child-site package-contract change.
- Treat `emdash@0.37.0`, `@emdash-cms/cloudflare@0.37.0`, and `@emdash-cms/plugin-forms@0.2.6` as the current official child-site consume target.
- For MCP content update and publication actions, read the item first and pass the returned `_rev` through unchanged. Read again after a `CONFLICT` before retrying.
- Use the routine PAT and `https://richardjoo.com` for normal live operations; do not seed production.
- Keep the live English `primary` menu ordered as `Posts`, `Projects`, `About`, and `Work With Me` unless Richard approves another information architecture.
- Keep Cloudflare Web Analytics enabled on public HTML and preserve the `/_emdash` `no-transform` exclusion unless the account-level analytics policy changes deliberately.
- Do not assume `@emdash-cms/plugin-webhook-notifier@0.2.0` sends automatic notifications. Confirm production need before consuming an official fix or removing the plugin.
- Consume the separate admin bundle optimization only after it ships in an official release.
- Preserve the Wrangler patch, exact pin, and removal trigger as one governed exception.
