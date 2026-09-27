import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { allPrinciples } from "../data";

// Filler words agents tend to include in natural-language queries.
const STOPWORDS = new Set([
  "a", "an", "and", "are", "for", "how", "i", "in", "is", "it", "me", "my", "of", "on",
  "or", "the", "to", "what", "when", "with", "you", "your",
]);

const terms = (query: string) =>
  [...new Set(query.toLowerCase().split(/[^a-z0-9-]+/))].filter((t) => t.length > 1 && !STOPWORDS.has(t));

export default defineTool({
  name: "search_principles",
  title: "Search principles",
  description:
    "Find principles that fit a situation. Accepts a keyword or a plain-language description (e.g. 'price objection', 'difficult feedback to a senior colleague'). Matches across codes, names, taglines, phases, sources, science, deployment steps and examples, ranked by relevance. Returns up to 10 results; call get_principle on the best match for the full playbook.",
  inputSchema: {
    query: z.string().min(1).describe("Keyword, phrase or short description of the situation."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const words = terms(query);
    const docs = allPrinciples().map(({ p, deck, phase }) => ({
      p,
      deck,
      phase,
      title: [p.code, p.name, p.tagline, phase].join(" ").toLowerCase(),
      body: [p.source, p.science, ...p.deployment, ...p.examples, p.caution ?? ""].join(" ").toLowerCase(),
    }));
    // Rare terms carry more signal than common ones (inverse document frequency).
    const idf = new Map(
      words.map((w) => {
        const df = docs.filter((d) => d.title.includes(w) || d.body.includes(w)).length;
        return [w, df ? Math.log(1 + docs.length / df) : 0];
      }),
    );
    const results = docs
      .map((d) => {
        // A title hit (code, name, tagline or phase) weighs three times a body hit.
        const score = words.reduce(
          (sum, w) => sum + idf.get(w)! * (d.title.includes(w) ? 3 : d.body.includes(w) ? 1 : 0),
          0,
        );
        return { ...d, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map(({ p, deck, phase }) => ({ id: p.id, code: p.code, name: p.name, deck, phase, tagline: p.tagline }));
    return { content: [{ type: "text", text: JSON.stringify(results) }], structuredContent: { results } };
  },
});
