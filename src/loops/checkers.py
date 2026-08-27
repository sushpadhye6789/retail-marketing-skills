"""
Loop Layer: Deterministic Grader & Verification Loop
"""
import re
from typing import Dict, Any, List
from ..harness.loader import SkillContextInjector

class MarketingContentGrader:
    """Evaluates outputs using code-level rules rather than model confidence."""

    def __init__(self, brand_rules: Dict[str, Any]):
        self.brand_rules = brand_rules
        self.banned_phrases = brand_rules.get('banned_phrases', [])
        self.character_limits = brand_rules.get('character_limits', {})

    def evaluate_marketing_copy(self, draft: str, copy_type: str = "general") -> Dict[str, Any]:
        """Evaluate marketing copy against deterministic rules."""
        errors = []

        # Character limit checks
        limits = self.character_limits
        if copy_type == "subject_line" and len(draft) > limits.get('subject_line', 50):
            errors.append(f"Subject line exceeds {limits.get('subject_line', 50)} chars (Current: {len(draft)})")
        elif copy_type == "preview_text" and len(draft) > limits.get('preview_text', 90):
            errors.append(f"Preview text exceeds {limits.get('preview_text', 90)} chars (Current: {len(draft)})")
        elif copy_type == "hero_headline" and len(draft) > limits.get('hero_headline', 10):
            errors.append(f"Hero headline exceeds {limits.get('hero_headline', 10)} chars (Current: {len(draft)})")
        elif copy_type == "hero_body" and len(draft) > limits.get('hero_body', 100):
            errors.append(f"Hero body exceeds {limits.get('hero_body', 100)} chars (Current: {len(draft)})")
        elif copy_type == "cta_button" and len(draft) > limits.get('cta_button', 10):
            errors.append(f"CTA button exceeds {limits.get('cta_button', 10)} chars (Current: {len(draft)})")

        # Banned phrase checks
        draft_lower = draft.lower()
        for phrase in self.banned_phrases:
            if phrase in draft_lower:
                errors.append(f"Contains banned phrase '{phrase}'; use action-oriented alternative")

        # Specific marketing rules
        if copy_type == "cta_button":
            # CTA should be action-oriented
            weak_ctas = ["click here", "learn more", "submit", "enter"]
            if any(weak in draft_lower for weak in weak_ctas):
                errors.append("CTA is too weak; use action-oriented verbs like 'Shop', 'Claim', 'Get', 'Start'")

        if copy_type == "subject_line":
            # Subject line should avoid spam triggers
            spam_triggers = ["free", "guarantee", "no obligation", "limited time", "act now"]
            if any(trigger in draft_lower for trigger in spam_triggers):
                errors.append("Subject line contains spam trigger words that may reduce deliverability")

        return {
            "passed": len(errors) == 0,
            "errors": errors,
            "error_count": len(errors)
        }

def run_verification_loop(
    harness: SkillContextInjector,
    task: str,
    initial_draft: str,
    copy_type: str = "general",
    max_retries: int = 3
) -> str:
    """Loops execution until deterministic feedback checks pass or retries exhaust."""
    brand_rules = harness.load_brand_rules()
    grader = MarketingContentGrader(brand_rules)

    draft = initial_draft

    for attempt in range(1, max_retries + 1):
        result = grader.evaluate_marketing_copy(draft, copy_type)
        if result["passed"]:
            return draft

        # Build feedback payload for model retry
        feedback = "Fix the following errors: " + "; ".join(result["errors"])

        # In a real implementation, this would call the model again with feedback
        # For now, we'll simulate common corrections
        draft = apply_autocorrections(draft, result["errors"], copy_type)

        # If we can't correct automatically, break and let human handle it
        if attempt == max_retries:
            break

    # Return the best attempt we have
    return draft

def apply_autocorrections(draft: str, errors: List[str], copy_type: str) -> str:
    """Apply automatic corrections based on common error types."""
    corrected = draft

    for error in errors:
        if "exceeds" in error and "chars" in error:
            # Truncate to limit (simple approach)
            if copy_type == "subject_line":
                corrected = corrected[:50]
            elif copy_type == "preview_text":
                corrected = corrected[:90]
            elif copy_type == "hero_headline":
                corrected = corrected[:10]
            elif copy_type == "hero_body":
                corrected = corrected[:100]
            elif copy_type == "cta_button":
                corrected = corrected[:10]

        if "banned phrase" in error:
            # Remove banned phrases
            for phrase in ["click here", "game-changer", "synergy", "revolutionary"]:
                corrected = corrected.replace(phrase, "").replace(phrase.title(), "")
            # Clean up extra spaces
            corrected = " ".join(corrected.split())

        if "CTA is too weak" in error:
            # Replace weak CTAs with stronger ones
            if "click here" in corrected.lower():
                corrected = corrected.replace("click here", "Shop Now")
            elif "learn more" in corrected.lower():
                corrected = corrected.replace("learn more", "See Details")
            elif "submit" in corrected.lower():
                corrected = corrected.replace("submit", "Get Started")

    return corrected.strip()