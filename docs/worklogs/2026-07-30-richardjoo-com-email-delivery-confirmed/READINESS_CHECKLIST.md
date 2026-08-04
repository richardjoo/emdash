# Readiness Checklist

| Check | Status | Evidence |
| --- | --- | --- |
| Email provider is active and selected in production | Pass | `available: true`, selected `cloudflare-email` |
| Notification destination is committed and pushed | Pass | `richardjoo-com@750442e` |
| Live test email succeeded | Pass | `POST /_emdash/api/settings/email` returned success to `richardjoo@gmail.com` |
| Sender identity preserved | Pass | `aiopsforfounders@richardjoo.com` remains the configured sender/reply-to |
