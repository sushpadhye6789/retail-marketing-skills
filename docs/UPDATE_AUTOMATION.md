# Repository Update Automation

This document outlines automation strategies for keeping the retail-marketing-skills repository current with the latest marketing best practices, platform updates, and framework improvements.

## Overview
Keeping the marketing skills repository up-to-date is crucial for maintaining its effectiveness. This guide provides automated approaches for regular updates while preserving customizations.

## Automated Update Strategies

### 1. Monthly Content Sync (For Private Repository)
If using the private repository access model, this automation promotes stable content from private to public.

```bash
#!/bin/bash
# monthly-sync.sh - Promote stable content from private to public repo

# Configuration
PRIVATE_REPO_PATH="/path/to/retail-marketing-skills-private"
PUBLIC_REPO_PATH="/path/to/retail-marketing-skills"
SYNC_LOG="$PUBLIC_REPO_PATH/logs/sync-$(date +%Y-%m-%d).log"

# Create logs directory if needed
mkdir -p "$(dirname "$SYNC_LOG")"

echo "Starting monthly sync: $(date)" >> "$SYNC_LOG"

# Sync stabilized content
# In practice, this would be more sophisticated, perhaps using git subtrees or specific branch strategies
# For now, we'll copy stabilized directories

# List of directories to sync (these contain stabilized content)
STABLE_DIRS=(
  "skills/marketing-strategy/"
  "skills/customer-research/"
  "skills/grill-me/"
  "skills/competitor-profiling/"
  "evaluations/"
  "templates/"
  "knowledge-integration/"
)

for dir in "${STABLE_DIRS[@]}"; do
  if [ -d "$PRIVATE_REPO_PATH/$dir" ]; then
    echo "Syncing $dir..." >> "$SYNC_LOG"
    rsync -av --exclude='.git' --exclude='__pycache__' "$PRIVATE_REPO_PATH/$dir/" "$PUBLIC_REPO_PATH/$dir/" >> "$SYNC_LOG" 2>&1
  fi
done

# Update version information
echo "Updating version info..." >> "$SYNC_LOG"
date +"%Y-%m-%d" > "$PUBLIC_REPO_PATH/LAST_SYNC.txt"

echo "Monthly sync completed: $(date)" >> "$SYNC_LOG"
```

### 2. Skill Update Checker
Automatically checks for opportunities to improve skills based on recent evaluations.

```bash
#!/bin/bash
# skill-update-checker.sh - Identifies skills that may need updates

REPO_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
EVALUATIONS_PATH="$REPO_PATH/evaluations"
SKILLS_PATH="$REPO_PATH/skills"
UPDATES_NEEDED="$REPO_PATH/UPDATES_NEEDED.md"

echo "# Skills Potentially Needing Updates" > "$UPDATES_NEEDED"
echo "*Generated: $(date)*" >> "$UPDATES_NEEDED"
echo "" >> "$UPDATES_NEEDED"

# Check each skill evaluation for recommended updates
for eval_file in "$EVALUATIONS_PATH"/*-skill-eval-*.md; do
  if [ -f "$eval_file" ]; then
    skill_name=$(basename "$eval_file" | sed 's/-skill-eval-.*.md//')
    
    # Look for recommended updates in the evaluation
    if grep -q "\[ \] Minor tweaks" "$eval_file" || \
       grep -q "\[ \] Major revision" "$eval_file" || \
       grep -q "\[ \] Add new reference" "$eval_file" || \
       grep -q "\[ \] Replace with updated version" "$eval_file" || \
       grep -q "\[ \] Clarify alignment instructions" "$eval_file" || \
       grep -q "\[ \] Add workflow integration notes" "$eval_file"; then
      
      echo "## $skill_name" >> "$UPDATES_NEEDED"
      echo "Evaluation suggests updates may be needed." >> "$UPDATES_NEEDED"
      echo "" >> "$UPDATES_NEEDED"
      
      # Extract specific recommendations if possible
      if grep -A5 "Recommended Skill Updates" "$eval_file" | grep -q "\[ \]"; then
        echo "Specific recommendations:" >> "$UPDATES_NEEDED"
        grep -A10 "Recommended Skill Updates" "$eval_file" | grep "\[ \]" >> "$UPDATES_NEEDED"
        echo "" >> "$UPDATES_NEEDED"
      fi
    fi
  fi
done

if [ ! -s "$UPDATES_NEEDED" ]; then
  echo "No skills currently flagged for updates based on recent evaluations." > "$UPDATES_NEEDED"
fi

echo "Update check completed. See $UPDATES_NEEDED for details."
```

### 3. Platform Reference Updater — removed, not pursued

The original placeholder here checked `skills/*/references/platforms/` for staleness against Meta/Google/Klaviyo API changes. It never had a real implementation ("Note: Actual implementation would check specific platforms..."), and it's now checking for staleness in content that doesn't exist by design: `SKILL_UPDATES_SUMMARY.md` records that this repo deliberately removed all `skills/*/references/platforms/` directories in favor of staying platform-generic in core skill logic. Reviving this script would mean solving a staleness problem for a directory structure the repo intentionally stopped maintaining. If platform-specific references come back as a deliberate choice later, this is worth rebuilding for real then — not as a placeholder now.

### 4. Knowledge Integration Sync — removed, not pursued

The original placeholder here synced marketing-strategy/customer-insight content to Obsidian/Notion. It's the automation counterpart to the "knowledge integration guides" feature that's already explicitly deferred in `PRIVATE_REPO_ACCESS_MODEL.md`'s Tier 2 scope — cut until there's real subscriber demand pulling for it, since it's an ongoing-maintenance commitment (keeping Obsidian/Notion templates current as the repo evolves), not a one-time build. Automating a sync for a feature that isn't offered yet would be automating nothing. Revisit if/when the underlying feature actually gets built.

## Git Pull Automation for Marketing Loops

To implement git pull automation in marketing loops, consider adding this to your skill invocation process:

### Option 1: Pre-skill Hook
Add a git pull check before skill execution:

```bash
# Add to your shell profile or skill invocation script
pre_skill_git_check() {
  REPO_PATH="$(git rev-parse --show-toplevel 2>/dev/null)"
  
  if [ -n "$REPO_PATH" ]; then
    # Check if we have unpulled changes
    git fetch origin
    LOCAL=$(git rev-parse @)
    REMOTE=$(git rev-parse @{u})
    BASE=$(git merge-base @ @{u})
    
    if [ "$LOCAL" = "$REMOTE" ]; then
      echo "✓ Repository is up to date"
    elif [ "$LOCAL" = "$BASE" ]; then
      echo "⚠ Repository is behind. Pulling updates..."
      git pull origin $(git rev-parse --abbrev-ref HEAD)
    elif [ "$REMOTE" = "$BASE" ]; then
      echo "⚠ Repository has local changes. Consider stashing or committing."
    else
      echo "⚠ Repository has diverged. Manual resolution needed."
    fi
  fi
}

# Then create an alias that runs this check before skills
# alias skill='pre_skill_git_check && rtk'
```

### Option 2: Scheduled Updates
Use cron or similar to regularly update the repository:

```bash
# Add to crontab (crontab -e)
# Update marketing skills repo every morning at 8 AM
0 8 * * * cd /path/to/retail-marketing-skills && git pull origin main >> /tmp/marketing-repo-update.log 2>&1
```

### Option 3: Skill-Integrated Check
Modify skill invocations to include a lightweight check:

```bash
# Example modification to skill invocation (conceptual)
function smart_skill() {
  # Quick check - only pull if we haven't checked in last 6 hours
  LAST_CHECK_FILE="$HOME/.marketing_skill_last_check"
  NOW=$(date +%s)
  
  if [ -f "$LAST_CHECK_FILE" ]; then
    LAST_CHECK=$(cat "$LAST_CHECK_FILE")
    if [ $((NOW - LAST_CHECK)) -lt 21600 ]; then  # 6 hours
      # Skip check if recent
      rtk "$@"
      return
    fi
  fi
  
  # Do the check
  if git rev-parse --git-dir > /dev/null 2>&1; then
    git fetch -q origin
    LOCAL=$(git rev-parse @)
    REMOTE=$(git rev-parse @{u})
    
    if [ "$LOCAL" != "$REMOTE" ]; then
      echo "🔄 Updating marketing skills..."
      git pull -q origin $(git rev-parse --abbrev-ref HEAD)
      echo "✓ Skills updated"
    fi
    
    echo $NOW > "$LAST_CHECK_FILE"
  fi
  
  # Execute the skill
  rtk "$@"
}

# Then use smart_skill instead of rtk or direct skill names
# smart_skill ads "Create campaign for..."
```

## Implementation Recommendations

### For Individual Users
1. **Use the skill-aliases.sh** with built-in update checking
2. **Set up a monthly cron job** to run the update automation scripts
3. **Use the knowledge-sync.sh** as a starting point for your personal knowledge system integration
4. **Consider the pre-skill git check** if you frequently work in the repository

### For Teams Using Private Repository
1. **Implement the monthly-sync.sh** on your server to promote stable content
2. **Set up weekly evaluation checks** using skill-update-checker.sh
3. **Use platform-reference-checker.sh** as a monthly maintenance task
4. **Implement team-specific knowledge sync** based on your chosen system (Obsidian/Notion/etc.)

### Automation Schedule Recommendation
- **Daily**: Lightweight git check before skill sessions (if actively working)
- **Weekly**: Run skill-update-checker.sh to identify improvement opportunities
- **Monthly**: Run full update automation including platform references and knowledge sync
- **Quarterly**: Major review and potential structural updates

## Maintenance Tips
1. **Preserve Customizations**: When updating, be careful not to overwrite your customized skill applications or strategy documents
2. **Backup First**: Always backup before running major updates
3. **Test Updates**: Consider testing updates in a branch before applying to main
4. **Document Changes**: Keep track of what updates were made and why
5. **Monitor Impact**: After updates, run evaluations to ensure skills still perform effectively

By implementing these automation strategies, you can ensure your retail-marketing-skills repository remains current with minimal manual effort, allowing you to focus on applying marketing skills rather than maintaining the repository itself.