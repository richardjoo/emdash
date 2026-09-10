# Master documents

## Version basis

| Scope                             | Version basis                                                                                                                                       |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| EmDash release                    | Tag `emdash@0.37.0`, commit `fc87efeb`                                                                                                              |
| Upstream EmDash                   | `emdash-cms/emdash@44114afd`                                                                                                                        |
| Fork sync                         | `richardjoo/emdash@94b54ad9a` from PR #19                                                                                                           |
| Child-site runtime                | `richardjoo-com@1a742f3` from PR #50                                                                                                                |
| Child-site handover               | `richardjoo-com@ad0ba5a` from PR #51, package `2026.09.09-1`                                                                                        |
| Child-site consume target         | `emdash@0.37.0`, `@emdash-cms/cloudflare@0.37.0`, `@emdash-cms/plugin-forms@0.2.6`, `astro@7.0.3`, `@astrojs/cloudflare@14.0.1`, `wrangler@4.104.0` |
| Orchestrator pre-recording anchor | `richardjoo/emdash@94b54ad9a`                                                                                                                       |

## Canonical documents touched

| Document                                   | Role                                                | Status after this pass | Notes                                                               |
| ------------------------------------------ | --------------------------------------------------- | ---------------------- | ------------------------------------------------------------------- |
| `docs/orchestrator/CHILD_SITE_REGISTRY.md` | Source of truth for child-site consume/config state | Updated                | Records deployed `0.37.0`, migration, verification, and patch state |
| `docs/worklogs/README.md`                  | Worklog package index                               | Updated                | Links this dated upgrade package                                    |
| Child-site `docs/handover/`                | Site-local operational source of truth              | Updated                | Package `2026.09.09-1` merged in child-site PR #51                  |

## Operational artifacts

| Artifact                     | Identifier                                                         |
| ---------------------------- | ------------------------------------------------------------------ |
| Fork sync PR                 | #19, merge `94b54ad9a`                                             |
| Fork sync PR CI run          | `34426697013`                                                      |
| Fork sync main CI run        | `34428540344`                                                      |
| Fork sync main CodeQL run    | `34428540351`                                                      |
| Upgrade PR CI run            | `34435380544`                                                      |
| D1 database                  | `my-emdash-site` / `6c3b05d9-6994-4777-9492-d63d027904a1`          |
| Migration target fingerprint | `bd5618801d46415ebbe9a01f0321bb7b39d2ca87525d52e39bdc054433ad5ba2` |
| Migration-set fingerprint    | `6864996c26aae72fb939ee06ab5408d1e877d50e3da5e93c805af1819e0bed22` |
| Backup workflow run          | `34434143085`                                                      |
| Backup artifact              | `d1-backup-my-emdash-site-20260910T034017Z`                        |
| Backup artifact ID           | `10136184095`                                                      |
| Production CI run            | `34436915120`                                                      |
| Cloudflare Worker version    | `55e5ec6c-36d6-4c25-b80f-1117ec2bbb73`                             |
| Live `primary` menu          | `01KS6WKFYPC9ZVSY5FH5TWZ6KY`                                       |
| Child handover PR CI run     | `34439332859`                                                      |
| Child handover main CI run   | `34439448138`                                                      |
| Child handover package       | `2026.09.09-1`                                                     |
| Production URL               | `https://richardjoo.com`                                           |
