# Quick Reference: Marketing Skills Aliases

## Common Skill Commands
Use these aliases in your terminal (after making skill-aliases.sh executable):

| Alias | Full Command | Purpose |
|-------|--------------|---------|
| `cr "your request"` | `customer-research` | Understand your customers better |
| `copy "your request"` | `copywriting` | Write marketing messages that convert |
| `email "your request"` | `email` | Create effective email campaigns |
| `sms "your request"` | `sms` | Create SMS/text marketing campaigns |
| `ads "your request"` | `ads` | Create advertising campaigns |
| `cro "your request"` | `cro` | Improve your website conversion |
| `content "your request"` | `content-strategy` | Plan your content marketing |
| `seo "your request"` | `seo` | Optimize for search engines |
| `analytic "your request"` | `analytics` | Measure and understand your data |
| `attrib "your request"` | `attribution` | Understand what marketing is working |
| `signup "your request"` | `signup-optimization` | Improve sign-up flows |
| `onboard "your request"` | `post-purchase-experience` | Create better post-purchase and activation experiences |
| `retention "your request"` | `retention-and-winback` | Keep customers coming back |
| `grill "your request"` | `grill-me` | Conduct customer interviews |
| `compete "your request"` | `competitor-profiling` | Research your competitors |
| `strategy "your request"` | `marketing-strategy` | Define/update your marketing strategy |
| `learnings "your request"` | `marketing-learnings` | Document marketing insights |

## Examples
```bash
# Understand customer struggles
cr "Learn what parents struggle with when buying baby clothes"

# Write welcome email series
email "Create a welcome email series for new customers"

# Create Facebook ad campaign
ads "Create Facebook ads targeting eco-conscious parents"

# Improve product page
cro "Optimize product detail pages for better conversion"

# Plan content calendar
content "Create a 3-month content calendar for baby bunting retailer"

# Measure campaign results
analytic "Measure performance of Fall Collection campaign"
```

## Daily Workflow
1. **Morning**: Check your strategy
   ```bash
   strategy "Review current marketing strategy"
   ```

2. **Before Marketing**: Research if needed
   ```bash
   cr "What do customers say about [topic]?"
   ```

3. **Create Marketing**: Use relevant skill
   ```bash
   copy "Write ad copy for [product] targeting [persona]"
   ```

4. **After Marketing**: Learn and document
   ```bash
   learnings "Document what we learned from [campaign]"
   ```

## Evaluation Shortcut
After using a skill, evaluate its impact:
```bash
# Create evaluation template for ads skill used today
eval-skill ads 2026-08-27
```

## Getting Help
```bash
# See all available aliases
skill-aliases.sh help

# List all skills
skill-aliases.sh list-skills
```

## Tip: Add to Your Shell Profile
For permanent access, add this to your ~/.zshrc or ~/.bashrc:
```bash
alias skill-aliases="/path/to/retail-marketing-skills/skill-aliases.sh"
# Then you can use:
skill-aliases cr "Learn about customer struggles"
```

Or source it directly:
```bash
source /path/to/retail-marketing-skills/skill-aliases.sh
# Then you can use the aliases directly:
cr "Learn about customer struggles"
```