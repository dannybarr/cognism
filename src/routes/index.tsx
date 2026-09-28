import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Principle, Phase } from "@/data/principles";
import { decks, totalPrinciples } from "@/data/decks";
import brainEngraving from "@/assets/brain-engraving.png.asset.json";
import iconLightbulb from "@/assets/icon-lightbulb.png.asset.json";
import iconOwl from "@/assets/icon-owl.png.asset.json";
import iconChessKnight from "@/assets/icon-chess-knight.png.asset.json";
import iconCompass from "@/assets/icon-compass.png.asset.json";
import iconEye from "@/assets/icon-eye.png.asset.json";
import iconHourglass from "@/assets/icon-hourglass.png.asset.json";
import iconQuill from "@/assets/icon-quill.png.asset.json";
import iconMagnifier from "@/assets/icon-magnifier.png.asset.json";
import iconKey from "@/assets/icon-key.png.asset.json";
import iconTelescope from "@/assets/icon-telescope.png.asset.json";

const TITLE = "Cognitive Connection";
const DESCRIPTION =
  "Cognitive Connection — a personal intelligence console of research-backed communication and influence principles, free and fully unlocked.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Schematic,
});

const backdropItems: { src: string; className: string }[] = [
  { src: brainEngraving.url, className: "bd-brain" },
  { src: iconCompass.url, className: "bd-compass" },
  { src: iconLightbulb.url, className: "bd-lightbulb" },
  { src: iconEye.url, className: "bd-eye" },
  { src: iconOwl.url, className: "bd-owl" },
  { src: iconChessKnight.url, className: "bd-chess" },
  { src: iconHourglass.url, className: "bd-hourglass" },
  { src: iconQuill.url, className: "bd-quill" },
  { src: iconMagnifier.url, className: "bd-magnifier" },
  { src: iconKey.url, className: "bd-key" },
  { src: iconTelescope.url, className: "bd-telescope" },
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

function PrincipleList({
  principles,
  activeId,
  onSelect,
  twoCol = false,
}: {
  principles: Principle[];
  activeId: string;
  onSelect: (p: Principle) => void;
  twoCol?: boolean;
}) {
  return (
    <div className={twoCol ? "principle-twocol" : ""}>
      {principles.map((p) => {
        const active = p.id === activeId;
        return (
          <button
            key={p.id}
            type="button"
            aria-pressed={active}
            className={`principle-item mono ${active ? "active" : ""}`}
            onClick={() => onSelect(p)}
          >
            <span className="principle-code">{p.code}</span>
            <span
              className={`principle-name ${twoCol ? "truncate" : ""}`}
              title={twoCol ? p.name : undefined}
            >
              {p.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function PhaseGroup({
  phase,
  activeId,
  onSelect,
  twoCol = false,
  className = "",
}: {
  phase: Phase;
  activeId: string;
  onSelect: (p: Principle) => void;
  twoCol?: boolean;
  className?: string;
}) {
  return (
    <section className={`phase-group ${className}`} aria-label={phase.name}>
      <h2 className="phase-title serif">
        <span>{phase.name}</span>
        <span className="phase-number mono">{phase.code}</span>
      </h2>
      <div className="phase-content">
        <div className="phase-scroll">
          <PrincipleList
            principles={phase.principles}
            activeId={activeId}
            onSelect={onSelect}
            twoCol={twoCol}
          />
        </div>
      </div>
    </section>
  );
}

function DossierContent({ selected }: { selected: Principle }) {
  return (
    <>
      <div className="dossier-header">
        <span className="dossier-code mono">{selected.code}</span>
        <h2 className="dossier-title serif">{selected.name}</h2>
        <div className="dossier-tagline serif">"{selected.tagline}"</div>
      </div>

      <div className="dossier-section">
        <div className="dossier-section-title mono">Source</div>
        <div className="dossier-text serif">{selected.source}</div>
      </div>

      <div className="dossier-section">
        <div className="dossier-section-title mono">The Science</div>
        <div className="dossier-text serif">{selected.science}</div>
      </div>

      <div className="dossier-section">
        <div className="dossier-section-title mono">Deployment</div>
        <ul className="dossier-list serif">
          {selected.deployment.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="dossier-section">
        <div className="dossier-section-title mono">Field Examples</div>
        <ul className="dossier-list serif">
          {selected.examples.map((item, i) => (
            <li key={i}>"{item}"</li>
          ))}
        </ul>
      </div>

      {selected.caution && (
        <div className="dossier-section">
          <div className="dossier-section-title mono caution">Caution</div>
          <div className="dossier-text serif caution">{selected.caution}</div>
        </div>
      )}
    </>
  );
}

function Schematic() {
  const [deckIndex, setDeckIndex] = useState(0);
  const deck = decks[deckIndex]!;
  const [selected, setSelected] = useState<Principle>(decks[0]!.phases[0]!.principles[3]!);
  const isSmall = useMediaQuery("(max-width: 899px)");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]!);
  }, []);

  const switchDeck = (i: number) => {
    if (i === deckIndex) return;
    setDeckIndex(i);
    setSelected(decks[i]!.phases[0]!.principles[0]!);
  };

  const handleSelect = (p: Principle) => {
    setSelected(p);
    if (isSmall) setSheetOpen(true);
  };

  useEffect(() => {
    if (!isSmall) setSheetOpen(false);
  }, [isSmall]);

  const phases = deck.phases;

  return (
    <div className="blueprint-light">
      <div className="engraving-backdrop" aria-hidden="true">
        {backdropItems.map((item) => (
          <img key={item.className} src={item.src} alt="" className={`bd ${item.className}`} />
        ))}
      </div>
      <header className="blueprint-header">
        <div className="blueprint-heading">
          <h1 className="blueprint-title serif">Cognitive </h1>
          <div className="blueprint-subtitle mono">
            FIG {deckIndex + 1}. COMMUNICATION TERMINAL / {deck.name.toUpperCase()} —{" "}
            {totalPrinciples} PRINCIPLES ON FILE
          </div>
        </div>
        <nav className="deck-switcher mono" aria-label="Sheet selection">
          {decks.map((d, i) => (
            <button
              key={d.id}
              type="button"
              className={`deck-tab ${i === deckIndex ? "active" : ""}`}
              aria-pressed={i === deckIndex}
              onClick={() => switchDeck(i)}
            >
              <span className="deck-tab-code">{d.code}</span>
              <span>{d.name}</span>
            </button>
          ))}
        </nav>
        <div className="blueprint-meta mono">
          <div>REV: 3.0.0</div>
          <div>SCALE: 1:1</div>
          <div>DATE: {today}</div>
        </div>
      </header>
      <div className="blueprint-grid">
        {/* Left: all principles as an evenly-balanced matrix of phase cells */}
        <div className={`principles-field phases-${phases.length}`}>
          {phases.map((phase) => (
            <PhaseGroup
              key={phase.code}
              phase={phase}
              activeId={selected.id}
              onSelect={handleSelect}
            />
          ))}
        </div>

        {/* Right: Dossier (side panel on wide screens) */}
        {!isSmall && (
          <aside className="dossier-aside">
            <div className="dossier-panel" aria-live="polite">
              <DossierContent selected={selected} />
            </div>
          </aside>
        )}
      </div>
      {/* Small screens: dossier as bottom sheet */}
      {isSmall && (
        <>
          {!sheetOpen && (
            <button type="button" className="dossier-fab mono" onClick={() => setSheetOpen(true)}>
              <span className="dossier-fab-code">{selected.code}</span>
              <span>VIEW DOSSIER</span>
            </button>
          )}
          {sheetOpen && (
            <div
              className="dossier-sheet-backdrop"
              onClick={() => setSheetOpen(false)}
              aria-hidden="true"
            />
          )}
          <div
            className={`dossier-sheet ${sheetOpen ? "open" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label={`Dossier: ${selected.name}`}
          >
            <div className="dossier-sheet-bar">
              <span className="mono dossier-sheet-label">DOSSIER</span>
              <button
                type="button"
                className="dossier-sheet-close mono"
                onClick={() => setSheetOpen(false)}
              >
                CLOSE ✕
              </button>
            </div>
            <div className="dossier-sheet-body">
              <DossierContent selected={selected} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
