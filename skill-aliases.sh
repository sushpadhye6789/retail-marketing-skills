#!/bin/bash
# Skill Aliases for Retail Marketing Skills Repository
# Shortcuts that launch Claude Code with a given marketing skill.
#
# Usage:  source skill-aliases.sh
#         ads "Create a Facebook campaign for the winter range"
#         ads                 # no args -> page through the SKILL.md
#         ads --help          # usage
#
# Requires the `claude` CLI on PATH.

# Function to check if we're in the repository directory
check_repo() {
    if [ -n "$SKILLS_REPO_ROOT" ] && [ -d "$SKILLS_REPO_ROOT/skills" ]; then
        return 0
    fi
    local d="$PWD"
    while [ "$d" != "/" ]; do
        if [ -d "$d/skills" ] && [ -f "$d/VERSIONS.md" ]; then
            SKILLS_REPO_ROOT="$d"
            return 0
        fi
        d=$(dirname "$d")
    done
    echo "Error: not inside the retail-marketing-skills repository." >&2
    echo "cd into it, or set SKILLS_REPO_ROOT=/path/to/retail-marketing-skills" >&2
    return 1
}

# Shared dispatcher: every skill alias goes through this.
_run_skill() {
    local skill="$1"; shift
    check_repo || return 1
    local dir="$SKILLS_REPO_ROOT/skills/$skill"
    if [ ! -f "$dir/SKILL.md" ]; then
        echo "Error: no such skill '$skill' (expected $dir/SKILL.md)" >&2
        return 1
    fi
    if [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
        echo "Usage: ${FUNCNAME[1]} \"<your request>\""
        echo "  Launches Claude Code with the '$skill' skill."
        echo "  No arguments: opens $dir/SKILL.md in your pager."
        return 0
    fi
    if [ "$#" -eq 0 ]; then
        "${PAGER:-less}" "$dir/SKILL.md"
        return
    fi
    if ! command -v claude >/dev/null 2>&1; then
        echo "Error: the 'claude' CLI was not found on PATH." >&2
        return 1
    fi
    ( cd "$SKILLS_REPO_ROOT" && claude "Use the $skill skill (skills/$skill/SKILL.md in this repo). Task: $*" )
}

# Skill alias functions
cr() {
    check_repo || return 1
    _run_skill customer-research "$@"
}

copy() {
    check_repo || return 1
    _run_skill copywriting "$@"
}

email() {
    check_repo || return 1
    _run_skill emails "$@"
}

sms() {
    check_repo || return 1
    _run_skill sms "$@"
}

ads() {
    check_repo || return 1
    _run_skill ads "$@"
}

cro() {
    check_repo || return 1
    _run_skill cro "$@"
}

content() {
    check_repo || return 1
    _run_skill content-strategy "$@"
}

seo() {
    check_repo || return 1
    _run_skill seo-audit "$@"
}

analytic() {
    check_repo || return 1
    _run_skill analytics "$@"
}

attrib() {
    check_repo || return 1
    _run_skill attribution "$@"
}

signup() {
    check_repo || return 1
    _run_skill signup "$@"
}

onboard() {
    check_repo || return 1
    _run_skill onboarding "$@"
}

retention() {
    check_repo || return 1
    _run_skill retention-and-winback "$@"
}

grill() {
    check_repo || return 1
    _run_skill grill-me "$@"
}

compete() {
    check_repo || return 1
    _run_skill competitor-profiling "$@"
}

strategy() {
    check_repo || return 1
    _run_skill marketing-strategy "$@"
}

learnings() {
    check_repo || return 1
    _run_skill compound-marketing "$@"
}

# Utility functions
eval-skill() {
    check_repo || return 1
    if [ -z "$1" ]; then
        echo "Usage: eval-skill <skill-name> [evaluation-date]"
        echo "Example: eval-skill ads 2026-08-27"
        return 1
    fi
    local skill="$1"
    local date="${2:-$(date +%Y-%m-%d)}"
    local eval_file="evaluations/${skill}-skill-eval-${date}.md"

    if [ -f "$eval_file" ]; then
        echo "Opening existing evaluation: $eval_file"
        "${EDITOR:-vi}" "$eval_file"
    else
        echo "Creating new evaluation template: $eval_file"
        mkdir -p evaluations
        cat > "$eval_file" << EOF
# $(echo "$skill" | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g') Skill Evaluation

## Skill Being Evaluated: $skill/SKILL.md
## Evaluation Period: [START_DATE] to [END_DATE]
## Evaluator: [Your Name/Team]
## Associated Campaign(s): [Campaign Name]

### 🎯 Evaluation Objective
[Describe what you're measuring]

### 📊 Baseline Metrics (Pre-Skill Use)
*Capture metrics from the period immediately before skill application*

| Metric | Value | Date Range | Notes |
|--------|-------|------------|-------|
| [Metric 1] | [Value] | [Date Range] | [Notes] |
| [Metric 2] | [Value] | [Date Range] | [Notes] |

### 🔧 Skill Application Details
*How was the skill applied?*

- **Specific Use Case**: [Brief description]
- **Pages/Sections Affected**: [List what was modified]
- **Budget/Resources**: [Time, budget, tools used]
- **Duration Applied**: [Start date] to [End date]
- **Targeting Used**: [How marketing strategy Sections 2-3 were applied]
- **Channels/Optimizations Applied**: [Specific tactics employed]
- **Workflow Context**: [How this fit into larger workflow]
- **Human-in-the-loop**: [Approval gates or review points]

### 📈 Results (Post-Skill Use)
*Capture metrics from equivalent period after skill application*

| Metric | Value | Date Range | Change | % Change | Notes |
|--------|-------|------------|--------|----------|-------|
| [Metric 1] | [Value] | [Date Range] | [Change] | [% Change] | [Notes] |
| [Metric 2] | [Value] | [Date Range] | [Change] | [% Change] | [Notes] |

### 💬 Qualitative Assessment
*Beyond the numbers*

- **Actionability**: Did the skill produce specific, actionable recommendations? [Y/N]
  - Examples:
    - [Example 1]
    - [Example 2]
- **Alignment**: Were recommendations aligned with marketing strategy ideal customer profiles? [Y/N]
  - Evidence: [How you verified alignment]
- **Clarity**: Was the guidance clear and easy to implement? [Rating 1-4]
  - [Rating explanation]
- **Negative Impacts**: Any observed downsides? [Y/N]
  - [If yes, describe]
- **Ease of Implementation**: How difficult was it to apply? [Rating 1-4]
  - [Rating explanation]
- **Team Feedback**: Summary of reactions from those who used/applied the skill
  - "[Quote 1]"
  - "[Quote 2]"

### 🧠 Key Learnings
*What worked, what didn't, and why*

1. **What worked well and why**:
   - [Factor]: [Explanation]
   - [Factor]: [Explanation]

2. **What didn't work and why**:
   - [Factor]: [Explanation]
   - [Factor]: [Explanation]

3. **Contextual factors**:
   - [Factor]: [Explanation]

4. **Personas alignment check**:
   - Did [skill] accurately reflect the marketing channels ideal customer profiles actually use? [Y/N]
   - Evidence: [Specific evidence]

### 📝 Recommended Skill Updates
*Based on evaluation results*

- [ ] **No changes needed** - Skill is performing as expected
- [ ] **Minor tweaks** to [specific section] - [describe suggested change]
- [ ] **Major revision** of [specific section] - [describe why current approach isn't working]
- [ ] **Add new reference**: [topic] - [e.g., "New framework", "Updated best practice"]
- [ ] **Replace with updated version**: [from source] - [Only if evaluation shows external source is clearly superior AND compatible with architecture]
- [ ] **Clarify alignment instructions**: Better explain how to apply skill guidance to marketing strategy Sections 2-3 for [specific application]
- [ ] **Add workflow integration notes**: How to better chain this skill with [related skill] for [specific purpose]

### 🔁 Next Evaluation
- **Scheduled**: [DATE]
- **Trigger**: [What triggers next evaluation]
- **Focus Area**: [What to test next]

---
*Evaluation completed on: [DATE]*
*Next review recommended: [DATE]*
*This evaluation feeds into: Skills improvement prioritization queue*
EOF
        "${EDITOR:-vi}" "$eval_file"
    fi
}

# List available skills
list-skills() {
    check_repo || return 1
    echo "Available marketing skills:"
    echo "============================"
    for skilldir in skills/*/; do
        if [ -f "$skilldir/SKILL.md" ]; then
            skillname=$(basename "$skilldir")
            echo "- $skillname"
        fi
    done
    echo ""
    echo "Alias commands:"
    echo "==============="
    echo "cr        - customer-research"
    echo "copy      - copywriting"
    echo "email     - emails"
    echo "sms       - sms"
    echo "ads       - ads"
    echo "cro       - cro"
    echo "content   - content-strategy"
    echo "seo       - seo-audit"
    echo "analytic  - analytics"
    echo "attrib    - attribution"
    echo "signup    - signup"
    echo "onboard   - onboarding"
    echo "retention - retention-and-winback"
    echo "grill     - grill-me"
    echo "compete   - competitor-profiling"
    echo "strategy  - marketing-strategy"
    echo "learnings - compound-marketing"
    echo ""
    echo "Utility:"
    echo "--------"
    echo "eval-skill <skill-name> [date] - Create or edit skill evaluation"
    echo "list-skills                  - Show this list"
}

# Handle command line arguments
if [ $# -eq 0 ]; then
    list-skills
else
    case "$1" in
        cr|copy|email|sms|ads|cro|content|seo|analytic|attrib|signup|onboard|retention|grill|compete|strategy|learnings)
            # Shift to remove the command name and pass remaining args to the function
            shift
            $1 "$@"
            ;;
        eval-skill)
            shift
            eval-skill "$@"
            ;;
        list-skills|help|-h|--help)
            list-skills
            ;;
        *)
            echo "Unknown command: $1"
            echo "Run 'skill-aliases.sh help' for available commands"
            ;;
    esac
fi