"""
Graph Layer: Master State Machine Graph
Orchestrates the marketing workflow using nodes and edges.
"""
from typing import Dict, Any, Optional, Callable
from .nodes import *
from .edges import EDGE_MAP, edge_after_research, edge_after_copywriting, edge_after_pricing, edge_after_compliance, edge_after_human_gate, edge_after_optimization
from ..harness.loader import SkillContextInjector

class MarketingWorkflow:
    """State machine orchestrator for retail marketing workflows."""

    def __init__(self, repo_root: str):
        self.harness = SkillContextInjector(repo_root)
        self.nodes: Dict[str, Callable] = {
            "research": node_research,
            "copywriting": node_copywriting,
            "pricing_analysis": node_pricing_analysis,
            "compliance_check": node_compliance_check,
            "human_gate": node_human_gate,
            "optimization": node_optimization
        }
        self.edges = EDGE_MAP

    def execute_workflow(self, initial_state: Dict[str, Any]) -> Dict[str, Any]:
        """
        Execute the marketing workflow from initial state to completion.
        Returns final state with all processing results.
        """
        state = initial_state.copy()
        current_node = "research"
        max_iterations = 10  # Prevent infinite loops
        iteration_count = 0

        while current_node != "end" and iteration_count < max_iterations:
            # Execute current node
            if current_node in self.nodes:
                state = self.nodes[current_node](state, self.harness)

            # Determine next node via edge function
            edge_key = f"after_{current_node}"
            if edge_key in self.edges:
                current_node, state = self.edges[edge_key](state)
            else:
                # Default fallback - end workflow
                break

            iteration_count += 1

        # Add execution metadata
        state["workflow_iterations"] = iteration_count
        state["completed_nodes"] = [n for n in self.nodes.keys() if n in state or n in ["research", "copywriting", "pricing_analysis", "compliance_check", "human_gate", "optimization"]]

        return state

def create_marketing_workflow(sku: str, campaign_name: str, target_segment: str) -> Dict[str, Any]:
    """
    Convenience function to create and execute a standard marketing workflow.
    """
    workflow = MarketingWorkflow(repo_root=".")  # Assuming current directory is repo root

    initial_state = {
        "sku": sku,
        "campaign_name": campaign_name,
        "target_segment": target_segment,
        "brief": {},
        "copy": "",
        "approved": False,
        "iteration_count": 0,
        "errors": []
    }

    return workflow.execute_workflow(initial_state)

# Example usage
if __name__ == "__main__":
    # Example: Execute workflow for a power tool SKU
    result = create_marketing_workflow(
        sku="PT-578000",
        campaign_name="Q4 Power Tool Promotion",
        target_segment="Professional Contractors"
    )

    import json
    print(json.dumps(result, indent=2, default=str))