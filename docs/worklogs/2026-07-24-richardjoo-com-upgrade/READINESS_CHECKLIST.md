# Readiness Checklist

| Check                                                                         | Status | Evidence                                                                |
| ----------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------- |
| Child-site consume target is current in the orchestrator registry             | Pass   | `docs/orchestrator/CHILD_SITE_REGISTRY.md` updated to `0.30.0`          |
| Child-site install against the new released packages succeeds                 | Pass   | `pnpm install` passed                                                   |
| Child-site typecheck passes after the upgrade                                 | Pass   | `pnpm typecheck` passed                                                 |
| Child-site build passes after the upgrade                                     | Pass   | `pnpm build` passed                                                     |
| Child-site repo was inspected for pre-existing local changes before more work | Pass   | Dirty docs worktree recorded and preserved                              |
| Child-site repo is clean and ready to commit directly                         | No     | Unrelated local docs changes still exist alongside this package upgrade |
| Child-site commit/push completed                                              | No     | Not requested in this pass                                              |
