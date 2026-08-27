# Marketing Strategy Database Template (Notion)

## Database Overview
This database stores your marketing strategy documents and serves as the single source of truth for all marketing decisions.

## Database Structure
### Properties
- **Name** (Title): Strategy document name (e.g., "Q3 2026 Marketing Strategy")
- **Status** (Select): Draft / Active / Archived
- **Version** (Number): Version number (e.g., 1.0, 1.1, 2.0)
- **Last Updated** (Date): Date of last modification
- **Effective Date** (Date): When this strategy becomes active
- **Target Audience** (Multi-select): Personas this strategy targets
- **Primary Goal** (Select): Acquisition / Retention / Awareness / Conversion
- **Time Horizon** (Select): Quarterly / Semi-annual / Annual
- **Tags** (Multi-select): For categorization (e.g., #seasonal #launch #rebrand)
- **Related Skills** (Relation): Links to Skills Inventory database
- **Campaigns** (Relation): Links to Campaign Management database
- **Key Metrics** (Text): Key performance indicators being tracked
- **Budget Allocation** (Text): High-level budget distribution by channel
- **Document Link** (URL or File): Link to the actual strategy document (.agents/marketing-strategy.md)

## Views
### Table View (Default)
- Shows all strategy documents with key properties
- Sorted by Effective Date (descending)
- Grouped by Status

### Board View (by Status)
- Kanban view showing strategies in different stages
- Columns: Draft, Active, Archived
- Cards show Name, Version, Last Updated

### Calendar View (by Effective Date)
- Shows when strategies become active
- Helpful for planning strategy updates

### Gallery View
- Visual view showing strategy documents
- Preview shows document thumbnail if available
- Shows Name, Status, Version

## Template for New Strategy Entry
When creating a new strategy entry, use this template:

```
# [Strategy Name] - [Version]

## Executive Summary
[Brief overview of the strategy]

## Target Audience & Personas (Sections 2-3)
- [List of primary personas targeted]
- [Key characteristics of each persona]

## Problems, Pain Points & Differentiation (Sections 4-6)
- [Key customer problems being addressed]
- [How we differentiate from competitors]

## Goals & Objectives (Sections 7-8)
- [Specific, measurable goals]
- [Key objectives for the period]

## Tactical Approach
- [Primary marketing channels]
- [Budget allocation percentages]
- [Key initiatives planned]

## Success Metrics
- [Metric 1]: [Target]
- [Metric 2]: [Target]
- [Metric 3]: [Target]

## Links
- **Strategy Document**: [Link to .agents/marketing-strategy.md]
- **Related Skills**: [Links to relevant skills in Skills Inventory]
- **Campaigns**: [Links to planned campaigns in Campaign Management]
```

## Usage Guidelines
1. **Single Source of Truth**: Only one strategy should be marked as "Active" at any time
2. **Version Control**: Increment version number for significant updates
3. **Regular Review**: Review and update strategy quarterly or when market shifts occur
4. **Linking**: Always link to related skills, campaigns, and metrics
5. **Archiving**: Move old strategies to "Archived" status when superseded

## Relations & Rollups
- **Skills Inventory**: Relation to see which skills support this strategy
  - Rollup: Count of skills by type
- **Campaign Management**: Relation to see campaigns executing this strategy
  - Rollup: Total budget allocated, average expected ROI
- **Learning Library**: Relation to see insights that informed this strategy
  - Rollup: Number of insights by type

---
*Tip: Use Notion's template button feature to quickly create new strategy entries from this template.*