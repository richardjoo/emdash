# Next AI guidelines

- Treat child-site `main` at `65c7dde` as the current documented baseline and `5bea6d2` as the deployed runtime merge.
- Treat `emdash@0.36.0` and `@emdash-cms/cloudflare@0.36.0` as the current official consume target.
- Use child-site handover package `2026.09.03-1` for the active editorial and operational backlog.
- Do not assume `@emdash-cms/plugin-webhook-notifier@0.2.0` sends automatic notifications. Confirm production need before consuming an official fix or removing the plugin.
- Do not consume upstream PR #2516 directly. Keep the admin bundle optimization pending until it is published in an official release.
- Preserve the Wrangler patch, exact pin, and removal trigger as one governed exception.
- Recheck upstream before the next package-contract change and update child sites serially.
- Record the `pnpm lint:json` `tsgolint` `SIGKILL` and `pnpm lint:quick` `oxc_allocator` failures if they still reproduce during the next orchestrator edit.
