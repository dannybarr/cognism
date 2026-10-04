import { decks } from "@/data/decks";
import type { Principle } from "@/data/principles";
import { evidenceFor, evidenceLevels } from "@/data/evidence";
import { referencesFor } from "@/data/references";

export const allPrinciples = () =>
  decks.flatMap((d) =>
    d.phases.flatMap((ph) => ph.principles.map((p) => ({ p, deck: d.name, phase: ph.name }))),
  );

const evidenceJson = (id: string) => {
  const e = evidenceFor(id);
  return e ? { level: e.level, meaning: evidenceLevels[e.level], note: e.note ?? null } : null;
};

export const toPrincipleJson = (p: Principle, deck: string, phase: string) => ({
  id: p.id,
  code: p.code,
  name: p.name,
  deck,
  phase,
  source: p.source,
  evidence: evidenceJson(p.id),
  references: referencesFor(p.id).map((r) => ({ citation: r.citation, url: r.url ?? null })),
  tagline: p.tagline,
  science: p.science,
  deployment: [...p.deployment],
  examples: [...p.examples],
  caution: p.caution ?? null,
});

export const toSummaryJson = (p: Principle, deck: string, phase: string) => ({
  id: p.id,
  code: p.code,
  name: p.name,
  deck,
  phase,
  tagline: p.tagline,
  evidence: evidenceFor(p.id)?.level ?? null,
});
