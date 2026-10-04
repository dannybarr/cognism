# Cognism

**An evidence-graded library of 210 principles for communication, influence, careers, decisions, strategy and professional conduct, from 200+ researchers and authors. Use it as a field manual, or connect it to your AI so its advice rests on tested theory, not the loudest thread.**

[Live app](https://cognism.lovable.app) · [MCP endpoint](https://cognism.lovable.app/mcp) · [Connect in one line](#connect)

---

## Why this exists

AI has become where people go for career, communication and relationship advice. "Practical guidance" is the largest category of ChatGPT use, at 28 percent of messages ([NBER, 2025](https://www.nber.org/papers/w34255)). But the answers lean on what the web rewards: Reddit, YouTube and LinkedIn are the three most-cited domains in AI answers ([Peec AI analysis of 30M citations](https://searchengineland.com/ai-search-engines-cite-reddit-youtube-and-linkedin-most-study-473138)). And on advice questions, models tend to tell people what they want to hear: in a Stanford study they validated the user 72 percent of the time, against 22 percent for human respondents ([Cheng et al.](https://arxiv.org/pdf/2505.13995)).

Cognism gives your AI a better foundation. Each principle carries its source, an evidence level, references where checked, step-by-step deployment, examples and the cautions that say where it backfires. Connected agents are instructed to cite the principle, state how strong the evidence is, and name at least one way the user's framing may be wrong, rather than simply agreeing.

| Typical AI advice | With Cognism |
| --- | --- |
| Synthesised from forums, posts and listicles | Grounded in a named principle and its source |
| Evidence strength unknown | Every principle graded, from meta-analysis to practitioner framework |
| Tends to validate the user | Required to raise cautions and counter-points |
| Nothing to check | Citable codes and, increasingly, reference links |

Cognism covers communication, influence and professional conduct. It is not a substitute for medical, legal, financial or mental-health advice.

## What an agent sees

A user asks: *"The supplier quoted £8,000. How do I get them down without souring the relationship?"*

The agent calls `advise` with the situation and a few topics (`"price negotiation"`, `"supplier"`). Among the principles returned is `N-06`, with its full dossier:

```json
{
  "code": "N-06",
  "name": "Ackerman Bargaining",
  "phase": "Negotiation",
  "source": "Chris Voss / Mike Ackerman — FBI-refined offer system",
  "tagline": "65% → 85% → 95% → 100% of your target, with shrinking concessions and a non-monetary close.",
  "deployment": [
    "Set your real target price first. Open at 65% of it (if buying; invert if selling).",
    "Plan three raises in advance: to 85%, 95%, then 100% of target — each concession smaller than the last.",
    "..."
  ]
}
```

Its answer now follows a specific, tested method rather than general tips.

## Connect

The server is public, read-only and needs no API key. It uses the Streamable HTTP transport.

**Claude Code**

```bash
claude mcp add --transport http cognism https://cognism.lovable.app/mcp
```

**Claude (web and desktop):** Settings → Connectors → Add custom connector, then paste `https://cognism.lovable.app/mcp`.

**Cursor** (`~/.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "cognism": { "url": "https://cognism.lovable.app/mcp" }
  }
}
```

**VS Code** (`.vscode/mcp.json`)

```json
{
  "servers": {
    "cognism": { "type": "http", "url": "https://cognism.lovable.app/mcp" }
  }
}
```

## Tools

| Tool | Input | Returns |
| --- | --- | --- |
| `advise` | `situation`, plus `topics`: two to six short phrases the agent infers | The best one to three principles in full, a coverage rating (strong, partial, none), the topics the library doesn't cover, and the answer format and rules to follow |
| `search_principles` | `query`: a keyword or plain description | Up to 10 principles ranked by relevance, each with its evidence level |
| `get_principle` | `idOrCode`: e.g. `N-06` or `ackerman` | The full dossier: source, evidence level, references, science, deployment steps, examples, caution |
| `list_principles` | `deck` (optional): one of the five sheets | The full index of sheets, phases, codes and names |

All four tools are read-only and idempotent. The server ships instructions that tell agents when to use the library, how to structure an answer, and to say plainly when a question falls outside it.

## Evidence levels

Every principle is graded so agents and readers can weigh it:

| Level | Meaning | Principles |
| --- | --- | --- |
| Meta-analysis | A synthesis of many studies supports the core claim | 22 |
| Experimental | Controlled experiments support it | 71 |
| Observational | Field, longitudinal, diary or survey research supports it | 35 |
| Practitioner | An expert framework from practice: plausible and widely used, not formally tested | 80 |
| Classical | Classical philosophy or rhetoric | 2 |

Where it matters, a grade carries a note: a small effect, a failed replication, or a narrow scope. References with links are being added in batches; principles without them are not yet referenced, not unsourced.

## The library

210 principles across five sheets and 30 phases. Every principle carries a short code for fast reference. Codes are stable: new principles take the next free number, so a citation keeps pointing at the same principle.

| Sheet | Focus | Phases | Principles |
| --- | --- | --- | --- |
| **Operations** | Running a live conversation or deal | Discovery, Rapport, Solutioning, Negotiation, Psychology | 57 |
| **Mastery** | Harder interpersonal situations | Conflict & Repair, Presence & Nonverbal, Storytelling, Presenting, Speaking & Writing, Feedback & Leadership, Defense & Counter-Influence | 50 |
| **Command** | Status, influence and decisions in the room | Power & Status, Influence Without Authority, Frame Control & Pitching, Conversation Science, Reading & Social Intelligence, Commanding the Room | 32 |
| **Principles** | Personal conduct, careers and decisions | Presence & Approach, Integrity & Word, Grace Under Fire, Generosity & Regard, Self-Mastery & Standards, Careers & Transitions, Deciding Well | 51 |
| **Strategy** | Competing, growing and running the organization | Competitive Strategy, Innovation & Growth, Execution & Operations, Leading the Organization, Advantage & Capital | 20 |

Each entry follows the same structure:

- **Source**: the book, researcher or practitioner it comes from
- **Evidence**: its level, with a note on limits where relevant
- **References**: links to the primary sources, where checked
- **Tagline**: the principle in one line
- **Science**: why it works
- **Deployment**: how to use it, step by step
- **Examples**: what it sounds like in practice
- **Caution**: where it backfires, when relevant

## Architecture

```
src/
├── data/            The library: one typed file per sheet, plus evidence and references
├── lib/mcp/         MCP server definition and the four tools
│   ├── index.ts     Server metadata and agent instructions
│   ├── data.ts      Shared lookup over all sheets
│   ├── rank.ts      Relevance ranking and topic matching
│   └── tools/       advise, search, get and list
├── routes/
│   ├── index.tsx    The web app (human-facing field manual)
│   └── mcp.ts       MCP endpoint at /mcp
└── server.ts
```

- **Framework:** TanStack Start (React, server routes) on Vite
- **MCP:** `@lovable.dev/mcp-js`, with inputs validated by Zod
- **Styling:** Tailwind CSS and Radix UI primitives
- **Hosting:** Lovable

The web app and the MCP server read the same typed data, so the library has one source of truth for humans and agents.

## Run locally

Requires Node.js 20.19 or later.

```bash
npm install
npm run dev
```

The app runs on the local Vite port and the MCP endpoint is served at `/mcp` on the same host. To test the tools interactively, point the MCP Inspector at it:

```bash
npx @modelcontextprotocol/inspector
```

## Roadmap

- Reference links for every principle, added in checked batches
- Usage analytics on which principles agents reach for most

## Licence

The source code is released under the [MIT Licence](LICENSE). The principle library in `src/data/` is not covered by that licence and remains all rights reserved. See [CONTENT_LICENSE.md](CONTENT_LICENSE.md).

---

Built by [Danny Barr](https://dbarr.xyz).
