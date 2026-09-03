"""
Graph Layer: Routing Rules & Conditional Gates
"""
from typing import Dict, Any, Tuple
from ..harness.loader import SkillContextInjector

def edge_after_research(state: Dict[str, Any]) -> Tuple[str, Dict[str, Any]]:
    """
    Edge after research node - always proceed to copywriting.
    """
    return "copywriting", state

def edge_after_copywriting(state: Dict[str, Any]) -> Tuple[str, Dict[str, Any]]:
    """
    Edge after copywriting node - proceed to pricing analysis.
    """
    return "pricing_analysis", state

def edge_after_pricing(state: Dict[str, Any]) -> Tuple[str, Dict[str, Any]]:
    """
    Edge after pricing node - proceed to compliance check.
    """
    return "compliance_check", state

def edge_after_compliance(state: Dict[str, Any]) -> Tuple[str, Dict[str, Any]]:
    """
    Edge after compliance node - check if we need to revise or proceed to human gate.
    """
    errors = state.get("errors", [])
    critical_errors = [e for e in errors if "banned phrase" in e.lower() or "exceeds" in e.lower()]

    if critical_errors and len(critical_errors) > 2:
        # Too many critical errors, loop back to copywriting for revision
        return "copywriting", state
    else:
        # Proceed to human gate
        return "human_gate", state

def edge_after_human_gate(state: Dict[str, Any]) -> Tuple[str, Dict[str, Any]]:
    """
    Edge after human gate node - check if approved and proceed accordingly.
    """
    if state.get("approved", False):
        return "optimization", state
    else:
        # Not approved, end workflow (would normally go back to copywriting with feedback)
        return "end", state

def edge_after_optimization(state: Dict[str, Any]) -> Tuple[str, Dict[str, Any]]:
    """
    Edge after optimization node - end workflow.
    """
    return "end", state

# Mapping of edge names to functions for easy lookup
EDGE_MAP = {
    "after_research": edge_after_research,
    "after_copywriting": edge_after_copywriting,
    "after_pricing": edge_after_pricing,
    "after_compliance": edge_after_compliance,
    "after_human_gate": edge_after_human_gate,
    "after_optimization": edge_after_optimization
}