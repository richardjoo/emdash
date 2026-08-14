# Readiness Checklist

| Check                                                            | Status | Evidence                                                   |
| ---------------------------------------------------------------- | ------ | ---------------------------------------------------------- |
| Local `main` is current with `upstream/main`                     | Pass   | `HEAD...upstream/main` -> `48` ahead, `0` behind           |
| Critical repo verification is clean                              | Pass   | `pnpm install`, lint baseline, and `pnpm typecheck` passed |
| Child-site follow-up can resume without upstream drift confusion | Pass   | The new target is explicitly recorded as `0.31.1`          |
