import { allPrinciples } from "./data";

// Filler words agents tend to include in natural-language queries.
const STOPWORDS = new Set([
  "a", "about", "all", "an", "and", "any", "are", "as", "at", "be", "but", "by", "can", "could",
  "do", "does", "doing", "from", "get", "got", "has", "have", "how", "i", "if", "in", "into", "is",
  "it", "its", "just", "keep", "keeps", "like", "me", "my", "need", "needs", "not", "of", "on", "one",
  "or", "our", "really", "should", "so", "some", "take", "that", "the", "their", "them", "they",
  "this", "to", "up", "us", "very", "want", "wants", "we", "what", "when", "will", "with", "would",
  "you", "your",
]);

// Light stemming so word forms match each other: "names" finds "name",
// "stonewalling" finds "stonewalls", "motivate" finds "motivator".
const stem = (t: string) => {
  if (t.length > 5 && t.endsWith("ing")) return t.slice(0, -3);
  if (t.length > 3 && t.endsWith("s") && !t.endsWith("ss")) t = t.slice(0, -1);
  if (t.length > 5 && t.endsWith("e")) return t.slice(0, -1);
  return t;
};

export const terms = (query: string) => [
  ...new Set(
    query
      .toLowerCase()
      .split(/[^a-z0-9-]+/)
      .filter((t) => t.length > 1 && !STOPWORDS.has(t))
      .map(stem),
  ),
];

// Terms match at the start of a word, so "rate" finds "rates" but not "strategic".
// Terms contain only letters, digits and hyphens (see `terms`), so no escaping is needed.
const matcher = (term: string) => new RegExp("\\b" + term);

export interface Ranked {
  p: ReturnType<typeof allPrinciples>[number]["p"];
  deck: string;
  phase: string;
  score: number;
  /** Share of the query's meaning this principle matched, weighted so rare terms count most (0 to 1). */
  coverage: number;
}

export const rankPrinciples = (query: string, limit = 10): Ranked[] => {
  const words = terms(query);
  const re = new Map(words.map((w) => [w, matcher(w)]));
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
      const df = docs.filter((d) => re.get(w)!.test(d.title) || re.get(w)!.test(d.body)).length;
      // A term no principle contains gets the highest weight: missing it should lower coverage most.
      return [w, Math.log(1 + docs.length / Math.max(df, 1))];
    }),
  );
  const totalWeight = words.reduce((sum, w) => sum + idf.get(w)!, 0);
  return docs
    .map(({ p, deck, phase, title, body }) => {
      let score = 0;
      let matchedWeight = 0;
      for (const w of words) {
        // A title hit (code, name, tagline or phase) weighs three times a body hit.
        const hit = re.get(w)!.test(title) ? 3 : re.get(w)!.test(body) ? 1 : 0;
        if (hit) matchedWeight += idf.get(w)!;
        score += idf.get(w)! * hit;
      }
      return { p, deck, phase, score, coverage: totalWeight ? matchedWeight / totalWeight : 0 };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
};

/** True when every meaningful word of the phrase appears (at a word start) in the principle's text. */
export const phraseMatches = (phrase: string, p: Ranked["p"], phase: string) => {
  const text = [p.code, p.name, p.tagline, phase, p.source, p.science, ...p.deployment, ...p.examples, p.caution ?? ""]
    .join(" ")
    .toLowerCase();
  const ws = terms(phrase);
  return ws.length > 0 && ws.every((w) => matcher(w).test(text));
};
