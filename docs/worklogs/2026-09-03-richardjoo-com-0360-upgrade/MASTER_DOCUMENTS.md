# Master documents

## Version basis

| Scope                             | Version basis                                                                                                     |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| EmDash release                    | `2adef407` with `emdash@0.36.0` and `@emdash-cms/cloudflare@0.36.0`                                               |
| Orchestrator pre-recording anchor | `richardjoo/emdash@f1999890`                                                                                      |
| Child-site runtime                | `richardjoo-com@5bea6d2` from PR #43                                                                              |
| Child-site handover               | `richardjoo-com@65c7dde` from PR #44                                                                              |
| Child-site consume target         | `emdash@0.36.0`, `@emdash-cms/cloudflare@0.36.0`, `astro@7.0.3`, `@astrojs/cloudflare@14.0.1`, `wrangler@4.104.0` |

## Canonical documents touched

| Document                                   | Role                                                | Status after this pass | Notes                                                    |
| ------------------------------------------ | --------------------------------------------------- | ---------------------- | -------------------------------------------------------- |
| `docs/orchestrator/CHILD_SITE_REGISTRY.md` | Source of truth for child-site consume/config state | Updated                | Records deployed `0.36.0`, verification, and patch state |
| `docs/worklogs/README.md`                  | Worklog package index                               | Updated                | Links this dated package                                 |
| Child-site `docs/handover/`                | Site-local operational source of truth              | Updated                | Package `2026.09.03-1` merged in child-site PR #44       |

## Operational artifacts

| Artifact                     | Identifier                                                         |
| ---------------------------- | ------------------------------------------------------------------ |
| D1 database                  | `my-emdash-site` / `6c3b05d9-6994-4777-9492-d63d027904a1`          |
| Migration target fingerprint | `bd5618801d46415ebbe9a01f0321bb7b39d2ca87525d52e39bdc054433ad5ba2` |
| Migration-set fingerprint    | `a24e4870dbf95e951c0df1cd63ff81252c97a01473367dac24242a3960949b32` |
| Backup workflow run          | `33719529053`                                                      |
| Backup artifact              | `d1-backup-my-emdash-site-20260903T053727Z`                        |
| Upgrade PR CI run            | `33719175844`                                                      |
| Production CI run            | `33723312212`                                                      |
| Cloudflare Worker version    | `39902304-6603-4718-a0e4-4513b4b25928`                             |
| Child docs CI run            | `33725881104`                                                      |
| Child docs main CI run       | `33726013867`                                                      |
