import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { allPrinciples } from "../data";

export default defineTool({
  name: "search_principles",
  title: "Search principles",
  description: "Search principles by keyword across names, taglines, sources and science.",
  inputSchema: { query: z.string().min(1).describe("Keyword or phrase to search for.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query.toLowerCase();
    const results = allPrinciples()
      .filter(({ p }) => [p.name, p.tagline, p.source, p.science].join(" ").toLowerCase().includes(q))
      .slice(0, 25)
      .map(({ p, deck, phase }) => ({ id: p.id, code: p.code, name: p.name, deck, phase, tagline: p.tagline }));
    return { content: [{ type: "text", text: JSON.stringify(results) }], structuredContent: { results } };
  },
});
