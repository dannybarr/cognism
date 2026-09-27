import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { allPrinciples, toPrincipleJson } from "../data";

export default defineTool({
  name: "get_principle",
  title: "Get principle",
  description: "Get the full dossier for one principle: its source, the science behind it, step-by-step deployment, worked examples and any caution. Look up by code (e.g. N-06) or id (e.g. ackerman).",
  inputSchema: { idOrCode: z.string().min(1).describe("Principle id (e.g. calibrated-questions) or code (e.g. D-01).") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ idOrCode }) => {
    const q = idOrCode.toLowerCase();
    const hit = allPrinciples().find(({ p }) => p.id.toLowerCase() === q || p.code.toLowerCase() === q);
    if (!hit) throw new ToolError(`No principle found for "${idOrCode}".`);
    const principle = toPrincipleJson(hit.p, hit.deck, hit.phase);
    return { content: [{ type: "text", text: JSON.stringify(principle) }], structuredContent: { principle } };
  },
});
