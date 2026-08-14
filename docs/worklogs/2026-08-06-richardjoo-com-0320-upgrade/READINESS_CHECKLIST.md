# Readiness Checklist

| Check                                                             | Status | Evidence                                                       |
| ----------------------------------------------------------------- | ------ | -------------------------------------------------------------- |
| Child-site consume target is current in the orchestrator registry | Pass   | `docs/orchestrator/CHILD_SITE_REGISTRY.md` updated to `0.32.0` |
| Child-site install against the new released packages succeeds     | Pass   | `pnpm install` passed                                          |
| Child-site typecheck passes after the upgrade                     | Pass   | `pnpm typecheck` passed                                        |
| Child-site build passes after the upgrade                         | Pass   | `pnpm build` passed                                            |
| Child-site package-upgrade commit is pushed                       | Pass   | `richardjoo-com@7292de6`                                       |
