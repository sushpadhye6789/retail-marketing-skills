# retail-marketing-mcp-server

An [MCP](https://modelcontextprotocol.io) server that exposes every skill in this repo as tools, so any MCP-compatible client — Claude Desktop, Cursor, Windsurf, ChatGPT (via MCP), or a custom agent — can browse and load them, not just Claude Code (which reads `skills/` natively via the Agent Skills spec and doesn't need this server).

It mirrors the Agent Skills spec's own progressive-disclosure model as MCP tools: list skills (cheap) → get one skill's full body (moderate) → load a specific bundled reference/script/asset file only when needed (on demand), instead of dumping all 79+ skills' full content into context at once.

## Tools

| Tool | What it does |
|---|---|
| `retail_marketing_list_skills` | Lists every skill: name, one-line description, version |
| `retail_marketing_get_skill` | Fetches one skill's full SKILL.md body + the list of its bundled reference/script/asset files |
| `retail_marketing_get_skill_file` | Fetches one specific bundled file's content (a `references/*.md`, `scripts/*`, or `assets/*` file) |
| `retail_marketing_search_skills` | Keyword search across skill names and descriptions |

All four are read-only — this server only reads from the `skills/` directory; it never writes.

## Install & Run

```bash
cd mcp-server
npm install
npm run build
```

This produces `dist/index.js`, a stdio MCP server. Point your MCP client at it.

**Claude Desktop** (`claude_desktop_config.json`) or any client using the same config shape:

```json
{
  "mcpServers": {
    "retail-marketing": {
      "command": "node",
      "args": ["/absolute/path/to/retail-marketing-skills/mcp-server/dist/index.js"]
    }
  }
}
```

**Claude Code** (from outside this repo, or if you want MCP-tool access instead of the native Agent Skills integration):

```bash
claude mcp add retail-marketing -- node /absolute/path/to/retail-marketing-skills/mcp-server/dist/index.js
```

## Configuration

By default the server reads skills from `../skills` relative to its own location (i.e. this repo's `skills/` directory). To point it at a different checkout, set:

```bash
RETAIL_MARKETING_SKILLS_ROOT=/path/to/other/checkout/skills
```

## Development

```bash
npm run dev    # tsx watch — runs src/index.ts directly, no build step
npm run build  # tsc -> dist/
npm run clean  # rm -rf dist
```

Test with the [MCP Inspector](https://github.com/modelcontextprotocol/inspector):

```bash
npx @modelcontextprotocol/inspector node dist/index.js
```

## Why this exists, and why it's separate from the skills themselves

The skills in `skills/` are plain Markdown per the [Agent Skills spec](https://agentskills.io) — Claude Code, Cursor, Windsurf, and other Agent-Skills-aware tools already read them directly with no server needed. This MCP server exists for the other case: an MCP host that doesn't read Agent Skills natively but does speak MCP. It's a thin read-only wrapper, not a fork of the content — the skills themselves are still maintained as Markdown in `skills/`, and this server always reflects whatever's currently there.
