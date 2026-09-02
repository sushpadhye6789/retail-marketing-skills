# RTK — Retired, Not Being Pursued

RTK was referenced elsewhere (old `ONBOARDING.md` mentions, `UPDATE_AUTOMATION.md` bash snippets) as a planned "token optimization hook" for Claude Code plus a git-freshness wrapper around invoking skills. It was never built, and after review, it isn't being pursued:

- **The token-optimization half is very likely already solved by the platform.** Claude Code has native settings for exactly this problem — `skillListingMaxDescChars` and `skillListingBudgetFraction` cap how much of the skill listing's token budget gets spent per turn, auto-shortening descriptions if the catalog is too large. Building a bespoke tool to solve a problem the harness already handles isn't worth the effort.
- **The git-freshness half is real but doesn't need a branded tool.** A plain shell alias covers it — see `ONBOARDING.md`'s Prerequisites section for the one-liner (`alias claude-fresh='git pull -q && claude'`).

This file stays as the historical record of that decision, and so anyone who encounters an old RTK reference elsewhere (a stale doc, a past commit) has somewhere to land explaining it was considered and dropped, not forgotten. `PRIVATE_REPO_ACCESS_MODEL.md`'s Tier 1 file list no longer names `RTK.md` as a deliverable, since it isn't one.
