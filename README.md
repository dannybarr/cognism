# Cognism

**A curated library of 153 communication and influence principles, served as an MCP server so AI agents can draw on proven playbooks instead of the open web.**

[Live app](https://cognism.lovable.app) · [MCP endpoint](https://cognism.lovable.app/mcp) · [Connect in one line](#connect)

---

## Why this exists

Ask an AI assistant how to handle a price objection and it answers from everything it has ever read: forum threads, listicles, half-remembered sales blogs. The advice is plausible and generic.

Cognism narrows that context. It gives agents a small, vetted library of principles drawn from negotiation, sales, psychology and leadership sources, each broken down into the science, the deployment steps, worked examples and the cautions. An agent searches it, pulls the one or two principles that fit, and grounds its advice in them.

The result is shorter, more specific advice with a traceable source, in place of a blend of the whole internet.

| Without Cognism | With Cognism |
| --- | --- |
| Advice synthesised from unknown sources | Advice grounded in a named principle and its source |
| Generic tips | Step-by-step deployment and a worked example |
| Large, noisy context | A few hundred tokens of high-signal material |
| Nothing to cite | Citable codes, e.g. `N-06 Ackerman Bargaining` |

## What an agent sees

A user asks: *"The supplier quoted £8,000. How do I get them down without souring the relationship?"*

The agent calls `search_principles` with `"bargain a supplier down on price"`. The top match is `N-06`, so it calls `get_principle` for the full dossier:

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
| `search_principles` | `query`: a keyword or plain description of the situation | Up to 10 principles ranked by relevance, with code, name and tagline |
| `get_principle` | `idOrCode`: e.g. `N-06` or `ackerman` | The full dossier: source, science, deployment steps, examples, caution |
| `list_principles` | `deck` (optional): one of the four sheets | The full index of sheets, phases, codes and names |

All three tools are marked read-only and idempotent. The server also ships instructions that tell the agent when to reach for the library and how to cite it.

## The library

153 principles across four sheets and 20 phases. Every principle carries a short code for fast reference.

| Sheet | Focus | Phases | Principles |
| --- | --- | --- | --- |
| **Operations** | Running a live conversation or deal | Discovery, Rapport, Solutioning, Negotiation, Psychology | 52 |
| **Mastery** | Harder interpersonal situations | Conflict & Repair, Presence & Nonverbal, Storytelling & Speaking, Feedback & Leadership, Defense & Counter-Influence | 33 |
| **Command** | Status, framing and influence in the room | Power & Status, Frame Control & Pitching, Conversation Science, Reading & Social Intelligence, Commanding the Room | 29 |
| **Principles** | Personal conduct and standards | Presence & Approach, Integrity & Word, Grace Under Fire, Generosity & Regard, Self-Mastery & Standards | 39 |

Each entry follows the same structure:

- **Source**: the book, researcher or practitioner it comes from
- **Tagline**: the principle in one line
- **Science**: why it works
- **Deployment**: how to use it, step by step
- **Examples**: what it sounds like in practice
- **Caution**: where it backfires, when relevant

## Architecture

```
src/
├── data/            The library: one typed file per sheet
├── lib/mcp/         MCP server definition and the three tools
│   ├── index.ts     Server metadata and agent instructions
│   ├── data.ts      Shared lookup over all sheets
│   └── tools/       list, get and search
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

- Situation-to-principle recommendations, returning a short sequence of principles for a scenario rather than single matches
- MCP resources and prompts, so clients can browse sheets and start guided sessions directly
- Usage analytics on which principles agents reach for most

## Licence

The source code is released under the [MIT Licence](LICENSE). The principle library in `src/data/` is not covered by that licence and remains all rights reserved. See [CONTENT_LICENSE.md](CONTENT_LICENSE.md).

---

Built by [Danny Barr](https://dbarr.xyz).
