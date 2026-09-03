# richardjoo-com 0.36.0 upgrade

Internal AI-facing handover package for the completed `richardjoo-com` production upgrade from released EmDash `0.33.0` to `0.36.0` on `2026-09-03`.

## Snapshot

- EmDash release anchor: `2adef407` (`ci: release (#2625)`)
- Orchestrator pre-recording anchor: `f1999890`
- Child-site package-upgrade commit: `fd91eec`
- Child-site runtime merge: PR #43, commit `5bea6d2`
- Child-site documentation merge: PR #44, commit `65c7dde`
- Child-site consume target:
  - `emdash@0.36.0`
  - `@emdash-cms/cloudflare@0.36.0`
  - `astro@7.0.3`
  - `@astrojs/cloudflare@14.0.1`
  - `wrangler@4.104.0` with the existing documented patch
- Production evidence:
  - D1 backup run `33719529053` produced `d1-backup-my-emdash-site-20260903T053727Z`
  - migrations `060_collection_admin_config` through `073_media_focal_point` applied successfully
  - CI run `33723312212` passed and activated Worker version `39902304-6603-4718-a0e4-4513b4b25928`
  - homepage, admin login, routine-token MCP reads, and the post-deploy migration check passed

## Scope

This package records:

- consumption of the official `0.36.0` npm releases without an EmDash package patch
- local install, typecheck, build, dry-run deployment, and browser verification
- the production D1 backup and serialized migration apply before deployment
- the child-site runtime and documentation PRs
- the pre-existing webhook notifier capability defect discovered during verification
- the updated orchestrator registry state

The package does not change or consume the unreleased admin bundle optimization tracked by upstream PR #2516.
