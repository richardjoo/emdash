# Changelog

## 2026-09-09

- Synchronized the fork through upstream `44114afd` in richardjoo/emdash#19; merge `94b54ad9a` leaves the fork `74` commits ahead and `0` behind.
- Updated `richardjoo-com` from released EmDash `0.36.0` packages to released `0.37.0` packages and forms plugin `0.2.6`.
- Preserved the exact patched `wrangler@4.104.0` baseline and webhook notifier `0.2.0` without adding another local exception.
- Verified frozen installation, package peers, type checking, production build, Wrangler dry run, and local public/admin behavior.
- Completed backup run `34434143085`, verified its downloaded checksum and gzip stream, and applied migration `074_content_deleted_scheduled_index`.
- Merged child-site PR #50 as `1a742f3`; deployment run `34436915120` activated Worker `55e5ec6c-36d6-4c25-b80f-1117ec2bbb73`.
- Verified production routes, active forms UI, admin login, CSP boundaries, Web Analytics resources, routine-PAT MCP reads, exact primary menu, and post-deploy migration status.
- Merged child-site PR #51 as `ad0ba5a` with handover package `2026.09.09-1`; its documentation-only workflow did not redeploy.
- Updated the orchestrator child-site registry and added this dated worklog package.
