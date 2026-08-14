# Readiness Checklist

| Check                                                               | Status | Evidence                                                                  |
| ------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------- |
| Child-site repo is pushed with email-provider config                | Pass   | `richardjoo-com@20a5d22`                                                  |
| Child-site package target matches current orchestrator release line | Pass   | `0.31.1`                                                                  |
| Local child-site typecheck passes                                   | Pass   | `pnpm typecheck`                                                          |
| Local child-site build passes                                       | Pass   | `pnpm build`                                                              |
| Live provider is active and selected                                | Pass   | `/_emdash/api/settings/email` and exclusive-hook state                    |
| Actual inbox delivery is verified                                   | No     | Live test-send fails with `destination address is not a verified address` |
