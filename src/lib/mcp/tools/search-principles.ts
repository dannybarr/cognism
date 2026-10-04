import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { toSummaryJson } from "../data";
import { rankPrinciples } from "../rank";

export default defineTool({
  name: "search_principles",
  title: "Search principles",
  description:
    "Find principles that fit a situation. Accepts a keyword or a plain-language description (e.g. 'price objection', 'difficult feedback to a senior colleague'). Matches across codes, names, taglines, phases, sources, science, deployment steps and examples, ranked by relevance. Returns up to 10 results, each with its evidence level; call get_principle on the best match for the full playbook, or use advise for a complete, structured answer.",
  inputSchema: {
    query: z.string().min(1).describe("Keyword, phrase or short description of the situation."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const results = rankPrinciples(query, 10).map(({ p, deck, phase }) => toSummaryJson(p, deck, phase));
    return { content: [{ type: "text", text: JSON.stringify(results) }], structuredContent: { results } };
  },
});
