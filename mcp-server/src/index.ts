#!/usr/bin/env node
/**
 * MCP server for the retail-marketing-skills repo.
 *
 * Exposes the repo's Agent Skills (skills/*\/SKILL.md, plus their bundled
 * references/scripts/assets) as MCP tools, so any MCP-compatible client —
 * not just Claude Code — can browse and load them the same way Claude Code
 * does natively via the Agent Skills spec's progressive-disclosure model:
 * list -> get full skill -> load a specific bundled file on demand.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  SKILLS_ROOT,
  getSkillDetail,
  getSkillFile,
  listSkillSummaries,
  searchSkills,
} from "./skills.js";

const server = new McpServer({
  name: "retail-marketing-mcp-server",
  version: "1.0.0",
});

const SkillNameSchema = z
  .string()
  .min(1)
  .describe(
    'The skill directory name, e.g. "cro", "ads", "compliance" — see retail_marketing_list_skills for the full list.'
  );

server.registerTool(
  "retail_marketing_list_skills",
  {
    title: "List Retail Marketing Skills",
    description: `List every skill in the retail-marketing-skills repo (79+ Agent Skills for retail/ecommerce marketing — conversion optimization, copywriting, SEO, paid ads, retail/dealer marketing, growth engineering), with each skill's name, one-line description, and current version.

Call this first to discover what's available before calling retail_marketing_get_skill on a specific one. Returns the full list every time — it's small enough that pagination isn't needed.

Read-only. Does not modify anything.`,
    inputSchema: {},
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
    },
  },
  async () => {
    const skills = listSkillSummaries();
    const lines = [`# Retail Marketing Skills (${skills.length})`, ""];
    for (const s of skills) {
      lines.push(`- **${s.name}**${s.version ? ` (v${s.version})` : ""}: ${s.description}`);
    }
    return {
      content: [{ type: "text" as const, text: lines.join("\n") }],
      structuredContent: { count: skills.length, skills },
    };
  }
);

server.registerTool(
  "retail_marketing_get_skill",
  {
    title: "Get Retail Marketing Skill",
    description: `Fetch the full instructions for one retail-marketing-skills skill by name — its complete SKILL.md body (framework, playbooks, guidance to apply) plus the list of any bundled reference/script/asset files it can load on demand.

Call retail_marketing_list_skills first if you don't already know the exact skill name. If the returned "files" list includes references relevant to the current task, call retail_marketing_get_skill_file to load the specific one(s) the SKILL.md body points you to — don't load every reference file, only the ones relevant to the situation at hand.

Read-only. Does not modify anything.`,
    inputSchema: { name: SkillNameSchema },
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
    },
  },
  async ({ name }: { name: string }) => {
    const detail = getSkillDetail(name);
    const lines = [
      `# ${detail.name} (v${detail.version ?? "unknown"})`,
      "",
      detail.description,
      "",
      "---",
      "",
      detail.body,
    ];
    const { references, scripts, assets } = detail.files;
    if (references.length || scripts.length || assets.length) {
      lines.push("", "---", "", "## Bundled Files");
      if (references.length) {
        lines.push("", "**references/** (load with retail_marketing_get_skill_file, kind=\"references\"):");
        for (const f of references) lines.push(`- ${f}`);
      }
      if (scripts.length) {
        lines.push("", "**scripts/** (load with kind=\"scripts\"):");
        for (const f of scripts) lines.push(`- ${f}`);
      }
      if (assets.length) {
        lines.push("", "**assets/** (load with kind=\"assets\"):");
        for (const f of assets) lines.push(`- ${f}`);
      }
    }
    return {
      content: [{ type: "text" as const, text: lines.join("\n") }],
      structuredContent: detail,
    };
  }
);

server.registerTool(
  "retail_marketing_get_skill_file",
  {
    title: "Get Retail Marketing Skill Bundled File",
    description: `Fetch the content of one reference, script, or asset file bundled with a specific skill — the "progressive disclosure" layer of the Agent Skills spec that a SKILL.md body points to for deeper detail instead of loading everything up front.

Get the exact relative path from retail_marketing_get_skill's "files" list first (e.g. path="playbook-catalog.md", kind="references"). A path that doesn't exist under that skill's references/scripts/assets directory returns an error naming the problem.

Read-only. Does not modify anything.`,
    inputSchema: {
      name: SkillNameSchema,
      kind: z
        .enum(["references", "scripts", "assets"])
        .describe("Which bundled directory the file lives in."),
      path: z
        .string()
        .min(1)
        .describe('Relative path within that directory, e.g. "playbook-catalog.md".'),
    },
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
    },
  },
  async ({
    name,
    kind,
    path: relPath,
  }: {
    name: string;
    kind: "references" | "scripts" | "assets";
    path: string;
  }) => {
    const content = getSkillFile(name, kind, relPath);
    return { content: [{ type: "text" as const, text: content }] };
  }
);

server.registerTool(
  "retail_marketing_search_skills",
  {
    title: "Search Retail Marketing Skills",
    description: `Search skill names and descriptions for a keyword or phrase (e.g. "checkout", "influencer", "pricing") and return matching skills with their descriptions.

Use this when you're not sure of the exact skill name and want to find the right one by topic, instead of scanning the full retail_marketing_list_skills output yourself.

Read-only. Does not modify anything.`,
    inputSchema: {
      query: z.string().min(1).describe('Keyword or phrase to search for, e.g. "cart abandonment".'),
    },
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
    },
  },
  async ({ query }: { query: string }) => {
    const matches = searchSkills(query);
    if (!matches.length) {
      return { content: [{ type: "text" as const, text: `No skills matched "${query}".` }] };
    }
    const lines = [`# Skills matching "${query}" (${matches.length})`, ""];
    for (const s of matches) lines.push(`- **${s.name}**: ${s.description}`);
    return {
      content: [{ type: "text" as const, text: lines.join("\n") }],
      structuredContent: { query, count: matches.length, skills: matches },
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`retail-marketing-mcp-server running (skills root: ${SKILLS_ROOT})`);
}

main().catch((err) => {
  console.error("Fatal error starting retail-marketing-mcp-server:", err);
  process.exit(1);
});
