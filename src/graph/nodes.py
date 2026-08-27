"""
Graph Layer: Specialist Task Definitions
"""
from typing import Dict, Any, Optional, TypedDict
from ..harness.loader import SkillContextInjector
from ..loops.checkers import MarketingContentGrader, run_verification_loop

class WorkflowState(TypedDict):
    """State object flowing through the marketing workflow graph."""
    sku: str
    campaign_name: str
    target_segment: str
    brief: Dict[str, Any]
    copy: str
    approved: bool
    iteration_count: int
    errors: list

def node_research(state: WorkflowState, harness: SkillContextInjector) -> WorkflowState:
    """
    Node 1: Retrieves product information and market context.
    Simulates execution against PIM/database and market research tools.
    """
    # In real implementation, this would call actual tools/APIs
    # For now, we'll simulate with structured data
    state["brief"] = {
        "sku": state["sku"],
        "name": f"Product {state['sku']}",
        "category": "Retail Goods",
        "base_price_ex_gst": 100.00,
        "features": ["Feature 1", "Feature 2", "Feature 3"],
        "target_demographics": state["target_segment"],
        "seasonal_relevance": "Q4",
        "competitive_advantage": "Quality and durability"
    }
    state["iteration_count"] = 0
    state["errors"] = []
    return state

def node_copywriting(state: WorkflowState, harness: SkillContextInjector) -> WorkflowState:
    """
    Node 2: Generates and verifies marketing copy via loop engineering.
    Uses deterministic graders instead of relying on model confidence.
    """
    task = f"Write promotional copy for SKU {state['sku']} targeting {state['target_segment']}"

    # Simulated first model generation attempt (would come from actual LLM)
    draft = f"Discover the {state['brief']['name']}. Click here to buy now for a limited time!"

    # Run verification loop with copy-specific checks
    verified_copy = run_verification_loop(
        harness=harness,
        task=task,
        initial_draft=draft,
        copy_type="general",
        max_retries=3
    )

    state["copy"] = verified_copy
    state["iteration_count"] += 1
    return state

def node_pricing_analysis(state: WorkflowState, harness: SkillContextInjector) -> WorkflowState:
    """
    Node 3: Analyzes pricing and promotional margins.
    """
    base_price = state["brief"]["base_price_ex_gst"]
    # Simulate pricing analysis
    state["brief"]["pricing_analysis"] = {
        "base_price_ex_gst": base_price,
        "suggested_promo_price_ex_gst": base_price * 0.75,  # 25% discount
        "max_promo_discount_pct": 30,  # From AGENTS.md
        "margin_at_25pct": 0.25,  # Assuming 50% base margin
        "profit_impact": "Positive at 25% discount"
    }
    return state

def node_compliance_check(state: WorkflowState, harness: SkillContextInjector) -> WorkflowState:
    """
    Node 4: Validates generated content against compliance rules.
    """
    brand_rules = harness.load_brand_rules()
    grader = MarketingContentGrader(brand_rules)

    # Check the generated copy
    result = grader.evaluate_marketing_copy(state["copy"], "general")

    if not result["passed"]:
        state["errors"] = result["errors"]
        # In a real workflow, this might loop back to copywriting
        # For now, we'll flag it for human review

    # Additional compliance checks
    compliance_issues = []

    # Check for required disclaimers (simplified)
    if "[promo_code]" not in state["copy"] and "promo" in state["copy"].lower():
        compliance_issues.append("Missing promo code placeholder")

    if "ex-gst" not in state["copy"].lower() and "inc-gst" not in state["copy"].lower():
        if "% off" in state["copy"].lower() or "discount" in state["copy"].lower():
            compliance_issues.append("Missing GST clarity in discount claims")

    state["errors"].extend(compliance_issues)
    return state

def node_human_gate(state: WorkflowState) -> WorkflowState:
    """
    Node 5: Approval checkpoint prior to production deployment.
    In production, this would pause for actual human approval.
    """
    # In a real implementation, this would exit the graph and wait for human input
    # For simulation, we'll auto-approve if no critical errors
    critical_errors = [e for e in state["errors"] if "banned phrase" in e or "exceeds" in e]
    state["approved"] = len(critical_errors) == 0
    return state

def node_optimization(state: WorkflowState, harness: SkillContextInjector) -> WorkflowState:
    """
    Node 6: Optional optimization based on performance data.
    """
    # Simulate A/B testing suggestions
    if state["approved"]:
        state["brief"]["optimization_suggestions"] = [
            "Test benefit-driven vs feature-driven headlines",
            "Try urgency-based vs social proof CTAs",
            "A/B test subject line length (shorter vs longer)"
        ]
    return state