import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

export interface SkillSummary {
  [key: string]: unknown;
  name: string;
  description: string;
  version?: string;
  license?: string;
}

export interface SkillFiles {
  references: string[];
  scripts: string[];
  assets: string[];
}

export interface SkillDetail extends SkillSummary {
  body: string;
  files: SkillFiles;
}

function resolveSkillsRoot(): string {
  const override = process.env.RETAIL_MARKETING_SKILLS_ROOT;
  if (override) return path.resolve(override);
  // dist/index.js -> mcp-server/dist -> mcp-server -> repo root -> skills
  const here = path.dirname(fileURLToPath(import.meta.url));
  return path.resolve(here, "..", "..", "skills");
}

export const SKILLS_ROOT = resolveSkillsRoot();

function parseFrontmatter(raw: string): { data: Record<string, any>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data = (yaml.load(match[1]) as Record<string, any>) || {};
  return { data, body: match[2] };
}

let cachedNames: string[] | null = null;

export function listSkillNames(): string[] {
  if (cachedNames) return cachedNames;
  if (!fs.existsSync(SKILLS_ROOT)) {
    throw new Error(
      `Skills directory not found at ${SKILLS_ROOT}. Set the RETAIL_MARKETING_SKILLS_ROOT environment variable to the "skills" directory of a retail-marketing-skills checkout.`
    );
  }
  cachedNames = fs
    .readdirSync(SKILLS_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => fs.existsSync(path.join(SKILLS_ROOT, name, "SKILL.md")))
    .sort();
  return cachedNames;
}

export function readSkillMd(name: string): { data: Record<string, any>; body: string } {
  const file = path.join(SKILLS_ROOT, name, "SKILL.md");
  if (!fs.existsSync(file)) {
    throw new Error(
      `No skill named "${name}" — no SKILL.md found. Call retail_marketing_list_skills to see valid names.`
    );
  }
  const raw = fs.readFileSync(file, "utf-8");
  return parseFrontmatter(raw);
}

export function listSkillSummaries(): SkillSummary[] {
  return listSkillNames().map((name) => summarize(name));
}

function summarize(name: string): SkillSummary {
  const { data } = readSkillMd(name);
  return {
    name,
    description: typeof data.description === "string" ? data.description : "",
    version: data.metadata?.version,
    license: data.license,
  };
}

function listFilesRecursive(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  const walk = (d: string) => {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) walk(full);
      else out.push(path.relative(dir, full));
    }
  };
  walk(dir);
  return out.sort();
}

export function getSkillDetail(name: string): SkillDetail {
  const { data, body } = readSkillMd(name);
  const skillDir = path.join(SKILLS_ROOT, name);
  return {
    name,
    description: typeof data.description === "string" ? data.description : "",
    version: data.metadata?.version,
    license: data.license,
    body: body.trim(),
    files: {
      references: listFilesRecursive(path.join(skillDir, "references")),
      scripts: listFilesRecursive(path.join(skillDir, "scripts")),
      assets: listFilesRecursive(path.join(skillDir, "assets")),
    },
  };
}

export function getSkillFile(
  name: string,
  kind: "references" | "scripts" | "assets",
  relPath: string
): string {
  const skillDir = path.join(SKILLS_ROOT, name);
  if (!fs.existsSync(skillDir)) {
    throw new Error(
      `No skill named "${name}". Call retail_marketing_list_skills to see valid names.`
    );
  }
  const kindDir = path.resolve(path.join(skillDir, kind));
  const target = path.resolve(kindDir, relPath);
  // Guard against path traversal outside the skill's own kind directory.
  if (target !== kindDir && !target.startsWith(kindDir + path.sep)) {
    throw new Error(`Invalid path: "${relPath}" resolves outside skills/${name}/${kind}/.`);
  }
  if (!fs.existsSync(target) || !fs.statSync(target).isFile()) {
    throw new Error(
      `No file at skills/${name}/${kind}/${relPath}. Call retail_marketing_get_skill to see the available files for this skill.`
    );
  }
  return fs.readFileSync(target, "utf-8");
}

export function searchSkills(query: string): SkillSummary[] {
  const q = query.toLowerCase();
  return listSkillSummaries().filter(
    (s) => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
  );
}
