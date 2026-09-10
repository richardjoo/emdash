# Readiness checklist

| Check                                                       | Status | Evidence                                                                                                |
| ----------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------- |
| Orchestrator fork is not behind upstream                    | Pass   | PR #19 merged through `44114afd`; final fetch reports `74` ahead and `0` behind                         |
| Fork sync remote checks pass                                | Pass   | PR CI `34426697013`, main CI `34428540344`, and main CodeQL `34428540351`                               |
| Child-site consume target uses official releases            | Pass   | `emdash@0.37.0`, Cloudflare `0.37.0`, and forms `0.2.6` in package and lock files                       |
| Existing site-local patch remains governed                  | Pass   | Wrangler patch and release-based removal trigger remain in the registry                                 |
| Frozen install and package peer checks pass                 | Pass   | Child-site local verification                                                                           |
| Child-site typecheck, build, and dry run pass               | Pass   | Local verification and upgrade PR CI `34435380544`                                                      |
| Fresh production D1 backup exists and is valid              | Pass   | Run `34434143085`; artifact `d1-backup-my-emdash-site-20260910T034017Z`; checksum and gzip tests passed |
| Production D1 migrations are current                        | Pass   | Migration `074` applied; no pending or unknown migrations                                               |
| Production content indexes have the release shape           | Pass   | Both content tables have the `(deleted_at, scheduled_at)` partial index                                 |
| Runtime upgrade is merged and deployed                      | Pass   | PR #50, merge `1a742f3`, CI run `34436915120`, Worker `55e5ec6c-36d6-4c25-b80f-1117ec2bbb73`            |
| Production public and forms checks pass                     | Pass   | Homepage, eight linked routes, AI Ops page, and active form UI                                          |
| Admin login and CSP boundary pass                           | Pass   | Admin login rendered without beacon resources under strict CSP and `no-transform`                       |
| Routine-PAT MCP and live menu checks pass                   | Pass   | MCP initialization and `menu_get`; exact four-item menu preserved                                       |
| Child-site handover is current                              | Pass   | Version `2026.09.09-1`, PR #51, merge `ad0ba5a`                                                         |
| No EmDash package patch or unpublished dependency is active | Pass   | Child package and lockfile use npm releases                                                             |
| No production seed or content mutation occurred             | Pass   | Production operations were backup, migration, read-only verification, and deployment                    |
| MCP revision-token requirement is documented                | Pass   | Child handover, registry, and this package describe the `_rev` flow                                     |
| Webhook notifier defect remains documented                  | Open   | Child task T17 records skipped automatic hooks and the official-fix/removal decision                    |
| Production snapshot strategy remains documented             | Open   | Child task T10 remains pending                                                                          |
| Admin bundle optimization remains release-gated             | Open   | Child task T15 remains pending                                                                          |
| Orchestrator pre-edit lint baseline is clean                | Pass   | Type-aware lint returned `0` diagnostics after the frozen install                                       |
| Orchestrator post-edit quick lint passes                    | Pass   | `pnpm lint:quick` returned no diagnostics                                                               |
| Orchestrator formatting checks pass                         | Pass   | `pnpm format:check` and `git diff --check`                                                              |
| Orchestrator root build and package typecheck pass          | Pass   | `pnpm build`, then `pnpm typecheck`                                                                     |
| EmDash documentation build passes                           | Pass   | `pnpm --filter docs build`                                                                              |
