"""
Harness Layer: Context Injection and Skill/Context Management
"""
import os
import yaml
from pathlib import Path
from typing import Dict, Any, Optional

class SkillContextInjector:
    """Manages context loading and injection into skill prompts."""

    def __init__(self, repo_root: str):
        self.repo_root = Path(repo_root)
        self.context_cache = {}

    def load_brand_context(self) -> str:
        """Load brand context from AGENTS.md (now CLAUDE.md)"""
        claude_path = self.repo_root / "CLAUDE.md"
        if claude_path.exists():
            return claude_path.read_text(encoding='utf-8')
        return ""

    def load_review_standards(self) -> str:
        """Load QA standards from REVIEW.md"""
        review_path = self.repo_root / "REVIEW.md"
        if review_path.exists():
            return review_path.read_text(encoding='utf-8')
        return ""

    def load_brand_rules(self) -> Dict[str, Any]:
        """Load brand rules from YAML config"""
        rules_path = self.repo_root / "config" / "brand_rules.yaml"
        if rules_path.exists():
            with open(rules_path, 'r') as f:
                return yaml.safe_load(f)
        return {}

    def inject_context(self, base_prompt: str, context_type: str = "full") -> str:
        """Inject relevant context into a base prompt"""
        context_parts = []

        if context_type in ["full", "brand"]:
            brand_context = self.load_brand_context()
            if brand_context:
                context_parts.append(f"BRAND CONTEXT:\n{brand_context}")

        if context_type in ["full", "qa"]:
            review_standards = self.load_review_standards()
            if review_standards:
                context_parts.append(f"QA STANDARDS:\n{review_standards}")

        if context_type in ["full", "rules"]:
            brand_rules = self.load_brand_rules()
            if brand_rules:
                context_parts.append(f"BRAND RULES:\n{yaml.dump(brand_rules, default_flow_style=False)}")

        if context_parts:
            return "\n\n".join(context_parts) + "\n\n" + base_prompt
        return base_prompt

    def load_skill(self, skill_name: str) -> Optional[str]:
        """Load a skill from .claude/skills/ or skills/"""
        # Check .claude/skills first (custom skills)
        skill_paths = [
            self.repo_root / ".claude" / "skills" / skill_name / "SKILL.md",
            self.repo_root / "skills" / skill_name / "SKILL.md"
        ]

        for path in skill_paths:
            if path.exists():
                return path.read_text(encoding='utf-8')
        return None