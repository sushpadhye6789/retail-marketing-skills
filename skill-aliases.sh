#!/bin/bash
# Skill Aliases for Retail Marketing Skills Repository
# Provides easy-to-use shortcuts for invoking marketing skills

# Source the RTK hook if available for token optimization
if command -v rtk &> /dev/null; then
    echo "RTK hook active - commands will be token-optimized"
else
    echo "Warning: RTK hook not found. Install for token optimization."
fi

# Function to check if we're in the repository directory
check_repo() {
    if [ ! -f ".agents/marketing-strategy.md" ] && [ ! -f "skills/customer-research/SKILL.md" ]; then
        echo "Error: Please run this from the retail-marketing-skills repository root directory"
        return 1
    fi
    return 0
}

# Skill alias functions
cr() {
    check_repo || return 1
    rtk customer-research "$@"
}

copy() {
    check_repo || return 1
    rtk copywriting "$@"
}

email() {
    check_repo || return 1
    rtk email "$@"
}

sms() {
    check_repo || return 1
    rtk sms "$@"
}

ads() {
    check_repo || return 1
    rtk ads "$@"
}

cro() {
    check_repo || return 1
    rtk cro "$@"
}

content() {
    check_repo || return 1
    rtk content-strategy "$@"
}

seo() {
    check_repo || return 1
    rtk seo "$@"
}

analytic() {
    check_repo || return 1
    rtk analytics "$@"
}

attrib() {
    check_repo || return 1
    rtk attribution "$@"
}

signup() {
    check_repo || return 1
    rtk signup-optimization "$@"
}

onboard() {
    check_repo || return 1
    rtk onboarding "$@"
}

retention() {
    check_repo || return 1
    rtk retention-and-winback "$@"
}

grill() {
    check_repo || return 1
    rtk grill-me "$@"
}

compete() {
    check_repo || return 1
    rtk competitor-profiling "$@"
}

strategy() {
    check_repo || return 1
    rtk marketing-strategy "$@"
}

learnings() {
    check_repo || return 1
    rtk marketing-learnings "$@"
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
        $EDITOR "$eval_file"
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
        $EDITOR "$eval_file"
    fi
}

# List available skills
list-skills() {
    check_repo || return 1
    echo "Available marketing skills:"
    echo "============================"
    for skilldir in skills/*/; do
        if [ -f "$skilldir/SKILL.md" ]; then
            skillname=$(baseline "$skilldir")
            echo "- $skillname"
        fi
    done
    echo ""
    echo "Alias commands:"
    echo "==============="
    echo "cr        - customer-research"
    echo "copy      - copywriting"
    echo "email     - email"
    echo "sms       - sms"
    echo "ads       - ads"
    echo "cro       - cro"
    echo "content   - content-strategy"
    echo "seo       - seo"
    echo "analytic  - analytics"
    echo "attrib    - attribution"
    echo "signup    - signup-optimization"
    echo "onboard   - onboarding"
    echo "retention - retention-and-winback"
    echo "grill     - grill-me"
    echo "compete   - competitor-profiling"
    echo "strategy  - marketing-strategy"
    echo "learnings - marketing-learnings"
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