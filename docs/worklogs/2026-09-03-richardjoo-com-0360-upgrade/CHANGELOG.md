# Changelog

## 2026-09-03

- Updated `richardjoo-com` from released EmDash `0.33.0` packages to released `0.36.0` packages.
- Regenerated the child site's EmDash declarations and migration manifest for the new release.
- Verified frozen installation, package peers, type checking, production build, Wrangler dry run, and local public/admin behavior.
- Created a fresh production D1 backup, then applied migrations `060` through `073` with the confirmed target fingerprint.
- Merged child-site PR #43 and verified CI run `33723312212`, Cloudflare Worker version `39902304-6603-4718-a0e4-4513b4b25928`, and live production behavior.
- Merged child-site PR #44 with handover package version `2026.09.03-1`.
- Updated the orchestrator child-site registry and added this dated worklog package.
- Recorded the existing `@emdash-cms/plugin-webhook-notifier@0.2.0` capability defect without adding a local patch.
