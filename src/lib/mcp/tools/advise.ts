import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { toPrincipleJson } from "../data";
import { phraseMatches, rankPrinciples, type Ranked } from "../rank";

// The structure every grounded answer should follow, and the rules that keep it honest.
const ANSWER_FORMAT = [
  "Restate the situation in one sentence, including what the user is trying to achieve.",
  "Recommend the one to three principles that fit best, each named with its code and name (e.g. U-03 Build the Coalition Before the Meeting).",
  "For each, give concrete steps adapted to the user's situation, drawn from its deployment steps.",
  "State each principle's evidence level in plain words, and mention its evidence note if it has one.",
  "Include each principle's caution where it applies, and at least one way the user's framing, plan or assumptions may be wrong or incomplete.",
  "Cite the source, and a reference link where one is given.",
];

const RULES = [
  "Ground the advice in the returned principles. If you add general knowledge, say that it is not from Cognism.",
  "Do not invent studies, figures, quotes or references beyond those returned.",
  "Do not simply validate the user. Name the strongest counter-consideration, even when the plan is sound.",
  "If coverage is 'partial' or 'none', say plainly that Cognism does not fully cover this, and treat the uncovered part with appropriate caution.",
  "For medical, legal, financial or mental-health matters, recommend a qualified professional.",
];

export default defineTool({
  name: "advise",
  title: "Advise on a situation",
  description:
    "Get a grounded, structured playbook for a real situation: a negotiation, a difficult conversation, a pitch, a meeting, a career, influence or strategy problem. Describe the situation in plain language. Returns the best-matching principles in full (steps, evidence level, references, cautions), a coverage rating, and the answer format and rules to follow. Prefer this over search_principles when the user wants advice rather than a lookup.",
  inputSchema: {
    situation: z
      .string()
      .min(1)
      .describe("The user's situation and goal in plain language, e.g. 'my manager keeps blocking my proposal and I need budget by Q3'."),
    topics: z
      .array(z.string().min(1))
      .min(1)
      .max(6)
      .optional()
      .describe("Two to six short topic phrases you infer from the situation, used for matching, e.g. ['managing up', 'stakeholder resistance', 'budget request']. Strongly recommended: matching on topics is far more accurate than on the raw situation."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ situation, topics }) => {
    // Rank on all topics together for overall relevance, then reward principles that directly
    // address individual topics, so one dominant topic can't crowd the others out.
    let ranked: Ranked[];
    const perTopic = (topics ?? []).map((t) => ({ topic: t, hits: rankPrinciples(t, 3) }));
    if (perTopic.length) {
      const joined = rankPrinciples(topics!.join(" "), 10);
      const pool = new Map<string, Ranked>();
      for (const r of [...joined, ...perTopic.flatMap((x) => x.hits)]) if (!pool.has(r.p.id)) pool.set(r.p.id, r);
      const best = joined[0]?.score || 1;
      const joinedScore = new Map(joined.map((r) => [r.p.id, r.score / best]));
      ranked = [...pool.values()]
        .map((r) => {
          const addressed = topics!.filter((t) => phraseMatches(t, r.p, r.phase)).length / topics!.length;
          return { ...r, score: (joinedScore.get(r.p.id) ?? 0) + 0.6 * addressed };
        })
        .sort((x, y) => y.score - x.score)
        .slice(0, 3);
    } else {
      ranked = rankPrinciples(situation, 3);
    }
    const top = ranked[0];
    // With topics, coverage is the share of topics that at least one returned principle addresses.
    // Without them, raw-text matching is too loose to claim more than partial coverage.
    let coverage: "strong" | "partial" | "none";
    let uncovered_topics: string[] = [];
    if (topics?.length) {
      uncovered_topics = perTopic
        .filter(({ topic, hits }) => !hits.slice(0, 3).some((r) => phraseMatches(topic, r.p, r.phase)))
        .map(({ topic }) => topic);
      const share = (topics.length - uncovered_topics.length) / topics.length;
      coverage = !top || share < 0.34 ? "none" : share >= 0.67 ? "strong" : "partial";
    } else {
      coverage = !top || top.coverage < 0.3 ? "none" : "partial";
    }
    const principles = ranked.map(({ p, deck, phase }) => toPrincipleJson(p, deck, phase));
    const playbook = {
      situation,
      matched_on: topics?.length ? "topics" : "situation (pass topics for accurate matching)",
      coverage,
      uncovered_topics,
      coverage_meaning:
        coverage === "strong"
          ? "The library has principles that directly address this situation."
          : coverage === "partial"
            ? "The library touches this situation only in part. Say so, and be careful with the parts it does not cover."
            : "The library does not cover this situation. Say so; do not present general advice as coming from Cognism.",
      principles,
      answer_format: ANSWER_FORMAT,
      rules: RULES,
    };
    return { content: [{ type: "text", text: JSON.stringify(playbook) }], structuredContent: { playbook } };
  },
});
