import { decks } from "@/data/decks";
import type { Principle } from "@/data/principles";

export const allPrinciples = () =>
  decks.flatMap((d) =>
    d.phases.flatMap((ph) => ph.principles.map((p) => ({ p, deck: d.name, phase: ph.name }))),
  );

export const toPrincipleJson = (p: Principle, deck: string, phase: string) => ({
  id: p.id,
  code: p.code,
  name: p.name,
  deck,
  phase,
  source: p.source,
  tagline: p.tagline,
  science: p.science,
  deployment: [...p.deployment],
  examples: [...p.examples],
  caution: p.caution ?? null,
});
