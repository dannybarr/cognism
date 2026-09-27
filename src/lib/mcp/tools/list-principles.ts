import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { decks } from "@/data/decks";

export default defineTool({
  name: "list_principles",
  title: "List principles",
  description: "List all sheets, phases and principle codes/names, optionally filtered to one sheet.",
  inputSchema: {
    deck: z.string().optional().describe("Sheet name, e.g. Operations, Mastery, Command, Principles."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ deck }) => {
    const chosen = deck ? decks.filter((d) => d.name.toLowerCase() === deck.toLowerCase()) : decks;
    const out = chosen.map((d) => ({
      deck: d.name,
      phases: d.phases.map((ph) => ({
        phase: ph.name,
        principles: ph.principles.map((p) => ({ id: p.id, code: p.code, name: p.name })),
      })),
    }));
    return { content: [{ type: "text", text: JSON.stringify(out) }], structuredContent: { decks: out } };
  },
});
