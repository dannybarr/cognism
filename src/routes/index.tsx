import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Principle, Phase } from "@/data/principles";
import { decks, totalPrinciples } from "@/data/decks";
import { evidenceFor, evidenceLevels } from "@/data/evidence";
import { referencesFor } from "@/data/references";
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
  "160+ research-backed principles for communication, influence and professional conduct, from 200+ researchers and authors. Use it as a field manual, or connect it to your AI so its advice rests on tested theory, not the loudest thread.";

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

const EVIDENCE_LABEL: Record<string, string> = {
  "meta-analysis": "Meta-analysis",
  experimental: "Experimental",
  observational: "Observational",
  practitioner: "Practitioner",
  classical: "Classical",
};

function DossierContent({ selected }: { selected: Principle }) {
  const evidence = evidenceFor(selected.id);
  const refs = referencesFor(selected.id);
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

      {evidence && (
        <div className="dossier-section">
          <div className="dossier-section-title mono">Evidence</div>
          <div className="dossier-text serif">
            <span className={`evidence-stamp mono evidence-${evidence.level}`}>{EVIDENCE_LABEL[evidence.level]}</span>{" "}
            {evidenceLevels[evidence.level]}
            {evidence.note && <span className="evidence-note"> {evidence.note}</span>}
          </div>
        </div>
      )}

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

      {refs.length > 0 && (
        <div className="dossier-section">
          <div className="dossier-section-title mono">References</div>
          <ul className="dossier-refs serif">
            {refs.map((r) => (
              <li key={r.citation}>
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noopener noreferrer">
                    {r.citation}
                  </a>
                ) : (
                  r.citation
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selected.caution && (
        <div className="dossier-section">
          <div className="dossier-section-title mono caution">Caution</div>
          <div className="dossier-text serif caution">{selected.caution}</div>
        </div>
      )}
    </>
  );
}

const MCP_URL = "https://cognism.lovable.app/mcp";

const SETUP_TABS: { id: string; label: string; steps: string; code?: string }[] = [
  {
    id: "claude",
    label: "Claude",
    steps:
      "In Claude (web or desktop), open Settings, then Connectors, then Add custom connector. Name it Cognism and paste the server address.",
  },
  {
    id: "claude-code",
    label: "Claude Code",
    steps: "Run this once in your terminal:",
    code: `claude mcp add --transport http cognism ${MCP_URL}`,
  },
  {
    id: "cursor",
    label: "Cursor",
    steps: "Add this to ~/.cursor/mcp.json:",
    code: `{ "mcpServers": { "cognism": { "url": "${MCP_URL}" } } }`,
  },
  {
    id: "vscode",
    label: "VS Code",
    steps: "Add this to .vscode/mcp.json in your project:",
    code: `{ "servers": { "cognism": { "type": "http", "url": "${MCP_URL}" } } }`,
  },
  {
    id: "other",
    label: "Other",
    steps:
      "Any AI app that supports remote MCP servers over HTTP can connect. Add a new server and paste the address. No account or API key is needed.",
  },
];

function CopyButton({ text, label = "COPY" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };
  return (
    <button type="button" className="connect-copy mono" onClick={copy} aria-live="polite">
      {copied ? "COPIED" : label}
    </button>
  );
}

function ConnectPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [tab, setTab] = useState(SETUP_TABS[0]!.id);
  const active = SETUP_TABS.find((t) => t.id === tab)!;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <>
      <div className="connect-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="connect-panel" role="dialog" aria-modal="true" aria-labelledby="connect-title">
        <div className="connect-bar">
          <span className="mono connect-label">MCP SERVER</span>
          <button type="button" className="dossier-sheet-close mono" onClick={onClose} autoFocus>
            CLOSE ✕
          </button>
        </div>
        <div className="connect-body">
          <h2 id="connect-title" className="dossier-title serif">
            Connect your AI
          </h2>
          <p className="dossier-tagline serif">
            AI answers lean on forum threads and social posts, and on advice questions they tend to tell
            you what you want to hear. Connect Cognism and your AI grounds its advice in {totalPrinciples}{" "}
            principles from 200+ researchers and authors.
          </p>

          <div className="dossier-section connect-section">
            <div className="dossier-section-title mono">Server address</div>
            <div className="connect-url">
              <code className="mono">{MCP_URL}</code>
              <CopyButton text={MCP_URL} />
            </div>
            <div className="connect-note mono">Free · read-only · no account or API key</div>
          </div>

          <div className="dossier-section">
            <div className="dossier-section-title mono">Set it up</div>
            <div className="connect-tabs mono" role="tablist" aria-label="AI app">
              {SETUP_TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={t.id === tab}
                  className={`connect-tab ${t.id === tab ? "active" : ""}`}
                  onClick={() => setTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="connect-steps" role="tabpanel">
              <p className="dossier-text serif">{active.steps}</p>
              {active.code && (
                <div className="connect-code">
                  <code className="mono">{active.code}</code>
                  <CopyButton text={active.code} />
                </div>
              )}
            </div>
          </div>

          <div className="dossier-section">
            <div className="dossier-section-title mono">What changes</div>
            <ul className="dossier-list serif">
              <li>Your AI searches the library when you ask about a negotiation, a hard conversation, a pitch or a career move.</li>
              <li>Its answers name the principle, the research behind it and how strong that evidence is.</li>
              <li>It tells you where the advice can backfire and where your framing may be wrong, instead of simply agreeing.</li>
            </ul>
          </div>

          <p className="connect-disclaimer serif">
            Cognism covers communication, influence and professional conduct. It is not a substitute for
            medical, legal, financial or mental-health advice.
          </p>
        </div>
      </div>
    </>
  );
}

function Schematic() {
  const [deckIndex, setDeckIndex] = useState(0);
  const deck = decks[deckIndex]!;
  const [selected, setSelected] = useState<Principle>(decks[0]!.phases[0]!.principles[3]!);
  const isSmall = useMediaQuery("(max-width: 899px)");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
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
        <button
          type="button"
          className="connect-trigger mono"
          onClick={() => setConnectOpen(true)}
          aria-haspopup="dialog"
        >
          <span className="connect-trigger-code">MCP</span>
          <span>Connect your AI</span>
        </button>
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
      <ConnectPanel open={connectOpen} onClose={() => setConnectOpen(false)} />
    </div>
  );
}
