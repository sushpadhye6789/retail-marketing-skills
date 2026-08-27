#!/usr/bin/env python3
"""
Level 3 Local Automation Loop: Batch Lead Enricher
Loops through lead CSV, enriches via API, outputs prompts for Claude Code.
"""
import csv
import json
import os
import sys
from typing import Dict, List, Any

def load_leads(csv_path: str) -> List[Dict[str, Any]]:
    """Load leads from CSV file."""
    leads = []
    try:
        with open(csv_path, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                leads.append(dict(row))
    except FileNotFoundError:
        print(f"Error: Lead file {csv_path} not found.")
        sys.exit(1)
    except Exception as e:
        print(f"Error reading CSV: {e}")
        sys.exit(1)
    return leads

def enrich_lead(lead: Dict[str, Any]) -> Dict[str, Any]:
    """
    Simulate enriching a lead with additional data.
    In reality, this would call external APIs (Clearbit, Hunter, etc.)
    """
    enriched = lead.copy()

    # Simulate enrichment data
    enriched['company_size'] = "50-200 employees"  # Simulated
    enriched['industry'] = "Retail"  # Simulated
    enriched['tech_stack'] = ["Shopify", "Klaviyo", "Google Ads"]  # Simulated
    enriched['recent_funding'] = "Series B ($15M)"  # Simulated
    enriched['intent_signals'] = ["visited pricing page", "downloaded whitepaper"]  # Simulated

    # Add a personalized prompt for Claude Code
    enriched['claude_prompt'] = f"""
Generate a personalized outreach sequence for:
- Name: {enriched.get('first_name', '')} {enriched.get('last_name', '')}
- Company: {enriched.get('company', '')}
- Title: {enriched.get('title', '')}
- Industry: {enriched['industry']}
- Company Size: {enriched['company_size']}
- Tech Stack: {', '.join(enriched['tech_stack'])}
- Recent Activity: {', '.join(enriched['intent_signals'])}

Focus on how our retail marketing solutions can help {enriched.get('company', 'them')}
leverage their {enriched['tech_stack'][0]} stack for better GMROI and sell-through rates.
Include specific references to their recent {enriched['intent_signals'][0]} activity.
"""

    return enriched

def save_enriched_leads(leads: List[Dict[str, Any]], output_path: str):
    """Save enriched leads to JSON file for Claude Code consumption."""
    try:
        with open(output_path, 'w') as file:
            json.dump(leads, file, indent=2)
        print(f"Successfully enriched {len(leads)} leads and saved to {output_path}")
    except Exception as e:
        print(f"Error saving enriched leads: {e}")
        sys.exit(1)

def generate_claude_prompts(enriched_leads: List[Dict[str, Any]], output_dir: str):
    """Generate individual prompt files for each lead."""
    os.makedirs(output_dir, exist_ok=True)

    for lead in enriched_leads:
        # Create safe filename
        name = f"{lead.get('first_name', 'unknown')}_{lead.get('last_name', 'lead')}"
        safe_name = "".join(c for c in name if c.isalnum() or c in (' ', '-', '_')).rstrip()
        safe_name = safe_name.replace(' ', '_') or "unknown_lead"

        prompt_file = os.path.join(output_dir, f"{safe_name}_prompt.txt")
        try:
            with open(prompt_file, 'w') as file:
                file.write(lead['claude_prompt'])
        except Exception as e:
            print(f"Error writing prompt file {prompt_file}: {e}")

def main():
    if len(sys.argv) != 3:
        print("Usage: python batch_lead_enricher.py <input_csv> <output_json>")
        print("Example: python batch_lead_enricher.py leads.csv enriched_leads.json")
        sys.exit(1)

    input_csv = sys.argv[1]
    output_json = sys.argv[2]
    prompt_dir = "./prompts/generated/"

    print("Loading leads...")
    leads = load_leads(input_csv)
    print(f"Loaded {len(leads)} leads")

    print("Enriching leads...")
    enriched_leads = [enrich_lead(lead) for lead in leads]

    print("Saving enriched leads...")
    save_enriched_leads(enriched_leads, output_json)

    print("Generating Claude Code prompts...")
    generate_claude_prompts(enriched_leads, prompt_dir)

    print("Batch lead enrichment complete!")
    print(f"Enriched leads: {output_json}")
    print(f"Individual prompts: {prompt_dir}")

if __name__ == "__main__":
    main()