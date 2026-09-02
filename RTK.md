# RTK — Status

RTK (referenced elsewhere as a "token optimization hook" for Claude Code, invoked via a `rtk` command) is **planned, not built**. There's no installable binary or script yet — `which rtk` will not resolve on a clean setup, and that's expected, not a broken install.

Until it ships:
- `ONBOARDING.md`'s Claude Code setup works fully without it. Don't treat "RTK hook active" as a real prerequisite.
- Any onboarding step or troubleshooting note that references RTK as if it's already available is describing the target state, not the current one.

This file exists so `PRIVATE_REPO_ACCESS_MODEL.md`'s file list (which names `RTK.md` as a Tier 1 config file) points at something real instead of a dangling reference — and so a new team member hitting an RTK mention in onboarding has somewhere to land instead of assuming their setup is broken.

When RTK is actually built, this file becomes the real usage doc.
