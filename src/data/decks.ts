import { phases, type Phase } from "./principles";
import { masteryPhases } from "./mastery";
import { commandPhases } from "./command";
import { conductPhases } from "./conduct";
import { strategyPhases } from "./strategy";

export interface Deck {
  id: string;
  code: string;
  name: string;
  phases: Phase[];
}

export const decks: Deck[] = [
  {
    id: "operations",
    code: "SHEET 01",
    name: "Operations",
    phases,
  },
  {
    id: "mastery",
    code: "SHEET 02",
    name: "Mastery",
    phases: masteryPhases,
  },
  {
    id: "command",
    code: "SHEET 03",
    name: "Command",
    phases: commandPhases,
  },
  {
    id: "principles",
    code: "SHEET 04",
    name: "Principles",
    phases: conductPhases,
  },
  {
    id: "strategy",
    code: "SHEET 05",
    name: "Strategy",
    phases: strategyPhases,
  },
];

export const totalPrinciples = decks.reduce(
  (sum, d) => sum + d.phases.reduce((s, p) => s + p.principles.length, 0),
  0,
);
