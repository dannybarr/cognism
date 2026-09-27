import { defineMcp } from "@lovable.dev/mcp-js";
import listPrinciples from "./tools/list-principles";
import getPrinciple from "./tools/get-principle";
import searchPrinciples from "./tools/search-principles";

export default defineMcp({
  name: "cognism",
  title: "Cognism",
  version: "0.1.0",
  instructions:
    "Read-only access to the Cognitive Connection library of communication and influence principles. Use `list_principles` to browse, `search_principles` to find by keyword, and `get_principle` for a full dossier.",
  tools: [listPrinciples, getPrinciple, searchPrinciples],
});
