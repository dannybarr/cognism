import type { Phase } from "./principles";

export const strategyPhases: Phase[] = [
  {
    id: "competitive-strategy",
    code: "26",
    name: "Competitive Strategy",
    brief:
      "Understand the structure of your market and choose a position rivals can't easily copy.",
    principles: [
      {
        id: "five-forces",
        code: "Z-01",
        name: "Map the Five Forces",
        source:
          "Michael Porter — The Five Competitive Forces That Shape Strategy (Harvard Business Review, 1979; 2008)",
        tagline:
          "An industry's profits are set by five forces, not just by rivals. Map them before you choose where to compete.",
        science:
          "Porter, then a young Harvard Business School professor, argued in 1979 that competition for profits extends well beyond existing rivals. Five forces determine the long-run profitability of an industry: rivalry among existing competitors, the threat of new entrants, the threat of substitute products or services, the bargaining power of buyers, and the bargaining power of suppliers. Together they decide how the value an industry creates is split between its firms, their customers, their suppliers and would-be competitors. Airlines, for example, create enormous value for travelers yet have long struggled to keep much of it, squeezed by price-sensitive buyers, powerful suppliers and intense rivalry. Porter updated the framework in 2008 with guidance on applying it. Its lasting value is diagnostic: it explains why some industries are structurally attractive and others are not, and where a firm can position itself to escape the strongest forces.",
        deployment: [
          "For your industry, or a market you're considering, rate each force: rivalry, new entrants, substitutes, buyer power and supplier power.",
          "Find the strongest force; it usually explains why profits are where they are.",
          "Position the business where the forces are weakest, or act to shift them, for example by raising switching costs or reducing dependence on a dominant supplier.",
          "Repeat the analysis when something structural changes: a new technology, regulation or business model can reshape the forces.",
        ],
        examples: [
          "\"Our margins aren't low because of competitors. Three customers buy 60 percent of our output. Buyer power is the problem, so diversifying our customers matters more than outselling rivals.\"",
        ],
        caution:
          "Five forces analysis describes industry structure at a point in time and is weaker in fast-moving platform or ecosystem markets where industry boundaries blur. It explains why an industry is profitable on average, not why one firm outperforms another within it.",
      },
      {
        id: "strategic-tradeoffs",
        code: "Z-02",
        name: "Strategy Means Choosing What Not to Do",
        source: "Michael Porter — What Is Strategy? (Harvard Business Review, 1996)",
        tagline:
          "Doing the same things better is not strategy. Real differentiation from competitors comes from different activities, chosen with deliberate trade-offs.",
        science:
          "In 1996 Porter drew a line between operational effectiveness, performing similar activities better than rivals, and strategy, performing different activities, or similar activities in different ways. Operational effectiveness is necessary but not sufficient: best practices spread quickly, and when everyone copies them, competitors converge and profits erode. Strategy requires a unique and valuable position built on trade-offs, and the essence of strategy is choosing what not to do. Southwest Airlines is his central example: short-haul, point-to-point flights between mid-size cities and secondary airports, with no meals, no seat assignments and no baggage transfers to other airlines, a set of activities that reinforce one another. When Continental Lite copied some of Southwest's activities without the whole system, the results were disastrous. Fit among activities is what makes a position hard to imitate.",
        deployment: [
          "Write down what your organization will not do: customers it won't serve, features it won't build, channels it won't use.",
          "Check that your activities reinforce each other; a strategy made of unrelated best practices is easy to copy.",
          "Separate operational improvement from strategy in plans and discussions, so efficiency projects aren't mistaken for a position.",
          "When tempted to add an offering, ask whether it blurs the trade-offs that make you distinct.",
        ],
        examples: [
          "\"For the next two years we won't serve enterprise clients. Every feature, hire and sales effort goes to mid-size firms, where our speed is decisive.\"",
        ],
        caution:
          "Trade-offs must be revisited as markets change; a position that once worked can become a trap. Saying no is costly in the short term, so leaders have to explain the logic, or the organization will quietly drift back to doing everything.",
      },
      {
        id: "playing-to-win",
        code: "Z-03",
        name: "Where to Play, How to Win",
        source: "A.G. Lafley & Roger Martin — Playing to Win: How Strategy Really Works (2013)",
        tagline:
          "Strategy is an integrated set of five choices. 'Where will we play?' and 'How will we win there?' are the heart of it.",
        science:
          "Lafley, twice CEO of Procter & Gamble, and Martin, former dean of the Rotman School of Management, define strategy as an integrated set of choices that uniquely positions a firm to create sustainable advantage. They frame it as a cascade of five questions: What is our winning aspiration? Where will we play? How will we win? What capabilities must be in place? What management systems are required? The choices must reinforce each other: a where-to-play choice that the how-to-win can't serve is not a strategy. The authors credit the approach with P&G's growth during Lafley's first tenure as CEO, from 2000 to 2009, when sales doubled and profits quadrupled. Its practical power is that it turns strategy from a long document into a few explicit, testable choices.",
        deployment: [
          "State the winning aspiration in terms of customers and the market, not just financial targets.",
          "Choose where to play explicitly: which customers, geographies, channels and products, and which you'll avoid.",
          "Define how you'll win there: the specific advantage, lower cost or differentiation, that makes customers choose you.",
          "Check the cascade: do your capabilities and management systems actually support the where-to-play and how-to-win choices?",
        ],
        examples: [
          "\"Where we play: independent pharmacies in the UK. How we win: next-day delivery and credit terms the wholesalers won't match. What we won't do: hospitals.\"",
        ],
        caution:
          "The framework draws heavily on one company's experience, and its success at P&G doesn't prove it will work elsewhere. Clear choices still need testing; Martin's own advice is to ask what would have to be true for each choice to succeed.",
      },
      {
        id: "value-innovation",
        code: "Z-04",
        name: "Make the Competition Irrelevant",
        source: "W. Chan Kim & Renée Mauborgne — Blue Ocean Strategy (INSEAD, 2005)",
        tagline:
          "Instead of fighting rivals on their terms, eliminate what customers don't value and create what no one offers.",
        science:
          "Kim and Mauborgne, professors at INSEAD, contrast 'red oceans', crowded markets where companies fight over existing demand, with 'blue oceans', new market space where competition is irrelevant. Their core idea is value innovation: pursuing differentiation and low cost at the same time rather than choosing between them. The tool is the four actions framework, or ERRC grid: which factors the industry takes for granted should be eliminated, which reduced well below the standard, which raised well above it, and which created that the industry has never offered. Cirque du Soleil is the canonical case. It removed animal acts and star performers, the costliest parts of the traditional circus, and added theater's storylines and production values, reaching adult audiences who would never have bought circus tickets.",
        deployment: [
          "List the factors your industry competes on, and plot where you and your rivals sit on each.",
          "Run the four actions: what can we eliminate, reduce, raise and create?",
          "Look at non-customers: who avoids the industry entirely, and why?",
          "Test the new profile for cost as well as value; a blue-ocean move should lower costs while raising value for the buyer.",
        ],
        examples: [
          "A training firm drops classroom venues and printed binders (eliminate), shortens courses (reduce), adds follow-up coaching (raise) and creates manager dashboards (create).",
        ],
        caution:
          "Critics note the cases were chosen after the fact, a form of survivorship bias: companies that tried similar moves and failed aren't in the book. Successful blue oceans also attract imitators, so they rarely stay uncontested for long.",
      },
    ],
  },
  {
    id: "innovation-growth",
    code: "27",
    name: "Innovation & Growth",
    brief:
      "Find new markets, test ideas fast, and protect tomorrow's business from today's.",
    principles: [
      {
        id: "disruptive-innovation",
        code: "Z-05",
        name: "Watch for Disruption from Below",
        source: "Clayton Christensen — The Innovator's Dilemma (1997)",
        tagline:
          "Incumbents rarely lose to better products. They lose to cheaper, simpler ones they rationally ignored until it was too late.",
        science:
          "Christensen, at Harvard Business School, studied why well-managed leading firms, in industries such as disk drives, lose to newcomers. His answer is that disruptive innovations typically start as products that are worse on the measures mainstream customers value but cheaper, simpler or more convenient, and they take hold in low-end or new markets that incumbents find unattractive. Incumbents, listening carefully to their best customers and pursuing higher margins, rationally ignore them. The newcomers improve until they are good enough for the mainstream, and the incumbent's advantages stop protecting it. The theory is among the most influential in management but also contested: Jill Lepore challenged its evidence in 2014, and King and Baatartogtokh found that only about 9 percent of 77 cases Christensen and colleagues had cited showed all four of the theory's defining features.",
        deployment: [
          "Watch the low end and non-consumers: who is serving the customers you consider too small or unprofitable?",
          "Track how fast cheaper alternatives are improving, not just today's quality gap.",
          "Give disruptive bets a separate unit with its own cost structure and measures (see Z-08), so the core business doesn't starve them.",
          "Be ready to disrupt yourself: launch the cheaper offering before a rival does.",
        ],
        examples: [
          "\"The new entrant's tool is far less capable than ours, but it's a tenth of the price and improving every quarter, and our smallest customers are already switching. That's the warning sign.\"",
        ],
        caution:
          "Not every cheap entrant is disruptive, and not every incumbent's failure is disruption; the word is now used so loosely that it often explains nothing. Apply the theory's specific conditions, not the label.",
      },
      {
        id: "scientific-entrepreneurship",
        code: "Z-06",
        name: "Test Ideas Like a Scientist",
        source:
          "Eric Ries — The Lean Startup (2011); Camuffo, Cordova, Gambardella & Spina — randomized trial (Management Science, 2020)",
        tagline:
          "Treat a new idea as a set of hypotheses. Build the smallest test, measure the result, then pivot or persevere on the evidence.",
        science:
          "Ries's Lean Startup recasts launching a venture as a learning process: build a minimum viable product, measure how real customers respond, and learn whether to persevere or pivot, in a build-measure-learn loop designed to shorten the time to validated learning. The broader idea, deciding like a scientist, has been tested directly. In a randomized trial with 116 Italian startups, Camuffo and colleagues trained some founders to frame their business ideas as explicit hypotheses and test them rigorously. Those founders were more likely to abandon weak projects and to pivot, avoiding wasted time and money. A larger replication with 759 firms, published in 2024, confirmed the core result. The method applies equally to new products, initiatives and internal programs.",
        deployment: [
          "Write down the critical assumptions behind the idea: who the customer is, what problem they have, and what they will pay.",
          "Design the cheapest test that could prove the riskiest assumption wrong: a landing page, a manual pilot, a pre-order.",
          "Set the success threshold before running the test, so you can't move the goalposts afterwards.",
          "After each test, decide explicitly: persevere, pivot on one assumption, or stop.",
        ],
        examples: [
          "\"Before we build the app, we'll run the service by hand for ten clients. If fewer than six renew after a month, we change the offer.\"",
        ],
        caution:
          "Fast experiments suit questions customers can answer quickly; they are weaker for deep technology or long-cycle markets. A minimum viable product that is too crude can kill a good idea by testing the wrong thing.",
      },
      {
        id: "crossing-the-chasm",
        code: "Z-07",
        name: "Cross the Chasm with a Beachhead",
        source: "Geoffrey Moore — Crossing the Chasm (1991)",
        tagline:
          "Early enthusiasts don't predict mainstream success. Win one narrow segment completely, then use it to reach the next.",
        science:
          "Moore builds on the technology adoption life cycle, in which customers adopt in groups: innovators, early adopters, the early majority, the late majority and laggards. His insight is that a chasm separates early adopters, visionaries who will tolerate an incomplete product to gain an advantage, from the early majority, pragmatists who want a proven, complete solution and references from people like them. Many technology products stall in that gap. Moore's prescription is to pick a single beachhead segment, big enough to matter but small enough to win, deliver the whole product that fully solves its problem, and dominate it. Each segment won then becomes a reference for the adjacent ones, like bowling pins knocking each other down.",
        deployment: [
          "Recognize which customers you have: visionaries buying potential, or pragmatists buying proven results.",
          "Choose one beachhead segment where you can become the clear leader, and concentrate resources there.",
          "Deliver the whole product: everything that segment needs to solve its problem, including services and partners, not just the core technology.",
          "Use beachhead customers as references to win the neighboring segment next.",
        ],
        examples: [
          "\"Instead of selling to every hospital, we'll own outpatient radiology clinics in the Northeast first. Once ten of them vouch for us, we move into imaging centers.\"",
        ],
        caution:
          "The chasm model comes from technology markets of the 1990s, and not every product faces the same gap. Focusing on one segment means turning down tempting deals elsewhere, which takes discipline many companies lack.",
      },
      {
        id: "ambidexterity",
        code: "Z-08",
        name: "Explore and Exploit at Once",
        source:
          "Charles O'Reilly & Michael Tushman — The Ambidextrous Organization (Harvard Business Review, 2004); James March (1991)",
        tagline:
          "Run today's business and build tomorrow's in separate units, held together by a senior team that protects both.",
        science:
          "James March described the core tension in organizational learning: exploitation, refining what you already do, produces reliable near-term returns, while exploration, searching for new possibilities, is uncertain and slow, so organizations drift toward exploitation and gradually lose the ability to adapt. O'Reilly and Tushman studied 35 attempts to launch breakthrough innovations in 15 business units across nine industries. More than 90 percent of efforts organized ambidextrously, as structurally separate units with their own processes and culture but integrated at the senior management level, reached their goals, while none of the unsupported teams and only a quarter of those embedded in existing functional structures did. The lesson is structural: new ventures need protection from the core business's measures and routines, and a leadership team committed to both.",
        deployment: [
          "Separate exploratory units from the core, with their own team, processes and measures, so they aren't judged by mature-business standards.",
          "Integrate at the top: a senior leader or team who owns both and protects the new unit's resources.",
          "Share selectively: give the new unit access to the core's assets, such as customers, brand and distribution, where it helps.",
          "Measure each differently: efficiency and margins for the core, learning and milestones for the new.",
        ],
        examples: [
          "A publisher builds its digital subscription business as a separate unit reporting to the CEO, with its own editor and targets, while drawing on the newsroom's journalism.",
        ],
        caution:
          "Separation can breed resentment and isolation; without senior integration the new unit either starves or gets absorbed. The 2004 study is small and case-based, so treat its success rates as indicative rather than precise.",
      },
    ],
  },
  {
    id: "execution-operations",
    code: "28",
    name: "Execution & Operations",
    brief:
      "Turn strategy into results: find the real constraint, set clear goals and act on what you already know.",
    principles: [
      {
        id: "theory-of-constraints",
        code: "Z-09",
        name: "Manage the Constraint",
        source: "Eliyahu Goldratt — The Goal (1984)",
        tagline:
          "Every system has one constraint that sets its output. Improving anything else is an illusion.",
        science:
          "Goldratt's theory of constraints, introduced through the business novel The Goal, holds that the output of any system is limited by a small number of constraints, usually one. An hour lost at the constraint is an hour lost for the whole system; an hour saved elsewhere is a mirage. His five focusing steps are: identify the constraint; decide how to exploit it, getting the most from it as it stands; subordinate everything else to that decision; elevate the constraint by adding capacity; and, once it is broken, start again, because the constraint has moved. The insight reaches well beyond factories: in a sales process, a hiring pipeline or a product team, efficiency gains away from the bottleneck often just pile up more work in progress.",
        deployment: [
          "Map how work flows and find where it piles up; the queue usually sits in front of the constraint.",
          "Exploit the constraint first: make sure it never sits idle, works only on what matters, and isn't fed defective work.",
          "Subordinate everything else: pace upstream work to the constraint instead of maximizing each step's own output.",
          "Only then add capacity, and look for the next constraint once this one is broken.",
        ],
        examples: [
          "\"Our deals stall in legal review, not in sales. Hiring more salespeople just lengthens the queue. Let's give legal standard templates and a dedicated slot for priority contracts.\"",
        ],
        caution:
          "In knowledge work the constraint can shift quickly or be hard to see, and a policy, such as an approval rule or an incentive, is often the real constraint rather than capacity. The approach optimizes flow, not whether the work is worth doing.",
      },
      {
        id: "okrs-goal-setting",
        code: "Z-10",
        name: "Set Specific, Stretching Goals",
        source:
          "Edwin Locke & Gary Latham — goal-setting theory (American Psychologist, 2002); Andrew Grove & John Doerr — Objectives and Key Results",
        tagline:
          "Specific, challenging goals beat 'do your best'. Pair each objective with a few measurable key results.",
        science:
          "Locke and Latham's goal-setting theory, built over decades of studies, finds that specific, difficult goals lead to higher performance than easy goals or vague instructions to 'do your best', provided people are committed to them, get feedback on progress and have the ability to reach them; for complex, unfamiliar tasks, learning goals can work better than outcome goals. Objectives and Key Results apply the theory to organizations. Andy Grove developed them at Intel, building on Peter Drucker's management by objectives, and John Doerr introduced them to Google's founders in 1999. An objective states what you want to achieve; a handful of key results state measurably how you'll know you've got there. Shared openly, OKRs also align teams by making everyone's priorities visible.",
        deployment: [
          "Write each objective as a qualitative, motivating outcome: 'Become the easiest supplier to work with.'",
          "Attach two to five key results that are specific and measurable: 'Cut order-to-delivery time from ten days to four.'",
          "Make goals stretching but credible, and build genuine commitment rather than imposing them.",
          "Review progress regularly, and share OKRs openly so teams can align with each other.",
        ],
        examples: [
          "Objective: \"Win back our mid-market customers.\" Key results: \"Renewal rate from 78 to 88 percent; onboarding under two weeks; three published case studies.\"",
        ],
        caution:
          "Specific targets can narrow attention and encourage gaming, or cutting corners on whatever isn't measured. For novel, complex work, set learning goals first, and avoid tying stretch goals rigidly to pay, or people will set them low.",
      },
      {
        id: "knowing-doing-gap",
        code: "Z-11",
        name: "Close the Knowing-Doing Gap",
        source: "Jeffrey Pfeffer & Robert Sutton — The Knowing-Doing Gap (Stanford, 2000)",
        tagline:
          "Most organizations know what to do. They fail because talk, precedent, fear and internal competition replace action.",
        science:
          "Pfeffer and Sutton, both at Stanford, set out to explain why firms so often fail to act on knowledge they already have: about practices that work, about customers, about their own problems. They identified recurring causes. Talk substitutes for action, as meetings, plans and presentations come to feel like progress. Memory substitutes for thinking, as people repeat what has always been done. Fear prevents acting on knowledge, because people won't risk mistakes. Measurement obstructs good judgment, as complex or misaligned metrics drive the wrong behavior. And internal competition turns colleagues into rivals who hoard what they know. The companies that closed the gap valued doing over talking, learned by doing, tolerated intelligent mistakes, measured what mattered and fostered collaboration.",
        deployment: [
          "After any meeting or plan, ask: 'What will we actually do differently, who will do it, and by when?'",
          "Favor small actions now over perfect plans later; much of the learning comes from doing.",
          "Make it safe to try and fail on reasonable bets, and treat mistakes as information.",
          "Audit your measures and incentives: do they reward collaboration and the behavior you want, or internal competition?",
        ],
        examples: [
          "\"We've discussed improving onboarding at three offsites. This month Priya pilots the new checklist with the next five hires, and we review the results on the 30th.\"",
        ],
        caution:
          "A bias for action can turn into thoughtless activity; some decisions deserve analysis first. The book rests on case research, so it diagnoses common patterns rather than measuring how often they occur.",
      },
      {
        id: "leverage-points",
        code: "Z-12",
        name: "Find the Leverage Points",
        source:
          "Donella Meadows — Thinking in Systems; Leverage Points: Places to Intervene in a System (1997)",
        tagline:
          "In a system, the obvious fixes (budgets, targets, headcount) change least. Goals, rules, feedback and mindsets change most.",
        science:
          "Meadows, a systems scientist, argued that an organization's behavior comes from its structure: stocks and flows, feedback loops, delays, rules and goals. Pushing harder on the parts most people reach for, parameters such as budgets, targets and headcount, usually changes little, because the system's feedback loops absorb the push. In her ranking of twelve places to intervene, parameters sit near the bottom; higher up are the strength of feedback loops, information flows (who knows what, and when), the rules of the system, its goals, and at the top the mindset or paradigm from which the system arises. Delays matter too: when feedback is slow, people overreact and swing back and forth. The practical lesson is to look for the structural causes of recurring problems before throwing resources at the symptoms.",
        deployment: [
          "When a problem keeps recurring, map the system: what drives it, which feedback loops sustain it, and where the delays are.",
          "Before changing numbers such as budgets, targets or headcount, ask whether a rule, an information flow or a goal is the real driver.",
          "Make feedback faster and more visible; people adjust their behavior when they can see its effects.",
          "Expect delays, and resist overcorrecting before a change has had time to show its effect.",
        ],
        examples: [
          "\"Hiring more support staff won't clear the backlog while we keep shipping bugs. If support data went straight to the product team every week, we'd fix the problem at its source.\"",
        ],
        caution:
          "Systems maps can turn into elaborate diagrams that delay action. Meadows herself warned that leverage points are often counterintuitive, and people frequently push them in the wrong direction.",
      },
    ],
  },
  {
    id: "leading-organization",
    code: "29",
    name: "Leading the Organization",
    brief:
      "Multiply your impact through where you spend your time, how you spread excellence and how you share information.",
    principles: [
      {
        id: "effective-executive",
        code: "Z-13",
        name: "Focus on Contribution",
        source: "Peter Drucker — The Effective Executive (1967)",
        tagline:
          "Effectiveness is a set of learnable practices: know where your time goes, ask what you can contribute, build on strengths, put first things first.",
        science:
          "Drucker argued that effectiveness is not a talent but a discipline built from five practices. Effective executives know where their time goes: they record it, because memory of how time is spent is unreliable, then cut what doesn't matter and consolidate the rest into usable blocks. They focus on contribution, asking 'What can I contribute that will significantly affect the performance of the institution I serve?' rather than dwelling on their own efforts. They build on strengths, their own and their people's, rather than on fixing weaknesses. They put first things first, doing one thing at a time and abandoning yesterday's priorities that no longer earn their place. And they make few but sound decisions, grounded in principle rather than in each individual case.",
        deployment: [
          "Track your time for two weeks, then cut, delegate or consolidate whatever doesn't serve your key contribution.",
          "Ask regularly: 'What can I contribute that would significantly change results here?', and plan your week around the answer.",
          "Staff and assign to strengths: ask what each person does exceptionally well, and design the work around it.",
          "Each quarter, decide what to stop: which projects, reports and meetings no longer earn their place?",
        ],
        examples: [
          "\"Two weeks of logging showed 40 percent of my time going to status meetings. I've cut half of them and moved the time to the two hiring decisions only I can make.\"",
        ],
        caution:
          "Drucker's practices come from observing executives, not from controlled studies, and building only on strengths can leave real weaknesses unaddressed when they genuinely block performance.",
      },
      {
        id: "managerial-leverage",
        code: "Z-14",
        name: "Spend Time Where Leverage Is Highest",
        source: "Andrew Grove — High Output Management (1983)",
        tagline:
          "A manager's output is the output of the team. Spend your time on the activities that multiply it.",
        science:
          "Grove, Intel's former CEO, defined a manager's output as the output of the organization under them plus that of the neighboring organizations they influence. Because a manager's own hours are limited, the key variable is leverage: the output generated per unit of managerial activity. High-leverage activities affect many people, change behavior over a long period, or supply information and guidance that shape a group's work: hiring, training, one-on-ones, decisions and setting an example. Grove also argued that management style should match each person's task-relevant maturity, their experience and readiness for a specific task: structured and detailed for someone new to it, lighter and more collaborative as their maturity grows, and minimal, focused on agreeing objectives, once they have mastered it.",
        deployment: [
          "List your activities and estimate their leverage: how many people do they affect, and for how long?",
          "Invest in the highest-leverage work: hiring well, training, clear decisions and one-on-ones (see F-09).",
          "Match your style to each person's task-relevant maturity: specific direction for the new, objectives and space for the experienced.",
          "Cut or delegate low-leverage tasks, especially ones others could do as well as you.",
        ],
        examples: [
          "\"Four hours writing a clear onboarding guide saves each of the next twenty hires a week of confusion. That's the highest-leverage thing I'll do this month.\"",
        ],
        caution:
          "Leverage thinking can tip into neglecting the individual work only you can do, or into treating people as productivity units. Task-relevant maturity is specific to the task: an expert in one area may need close support in another.",
      },
      {
        id: "scaling-excellence",
        code: "Z-15",
        name: "Scale the Mindset, Not Just the Footprint",
        source: "Robert Sutton & Huggy Rao — Scaling Up Excellence (Stanford, 2014)",
        tagline:
          "Growth fails when you copy structures without the beliefs behind them. Decide what must be identical and what can vary.",
        science:
          "Sutton and Rao, both at Stanford Graduate School of Business, spent seven years studying how organizations spread excellent practices as they grow. Their central argument is that scaling is a ground war for mindset, not an air war of announcements: copying a footprint (more offices, more people, more processes) without spreading the beliefs and behaviors behind it dilutes excellence. They frame a key choice as 'Catholicism versus Buddhism': replicating a practice exactly everywhere, versus spreading a core mindset and letting local teams adapt how it is expressed. Other lessons include cutting cognitive load as the organization grows, since added people, rules and processes make it harder for anyone to keep the essentials in mind, and connecting scaling efforts to people's emotions and identity, not only to plans and metrics.",
        deployment: [
          "Name the few beliefs and behaviors that make your best unit excellent before you try to copy anything.",
          "Decide what must be identical everywhere (Catholicism) and what local teams may adapt (Buddhism).",
          "Spread excellence through people: move experienced staff into new units rather than relying on manuals.",
          "Cut complexity as you grow: retire rules, steps and meetings that no longer serve the core mindset.",
        ],
        examples: [
          "\"Every new clinic copies our safety checklist exactly. How each team runs patient follow-up is theirs to design, as long as they meet the response-time standard.\"",
        ],
        caution:
          "The book draws on cases of successful scaling, so it shows what worked rather than proving it will work elsewhere. Choosing local variation without a clearly defined core can become an excuse for inconsistency.",
      },
      {
        id: "team-of-teams",
        code: "Z-16",
        name: "Shared Consciousness, Empowered Execution",
        source: "Stanley McChrystal et al. — Team of Teams (2015)",
        tagline:
          "When conditions change fast, share information radically and push decisions to the people closest to the action.",
        science:
          "As commander of the US Joint Special Operations Command in Iraq, McChrystal found that a hierarchy built for efficiency was too slow against a decentralized, adaptive enemy. His response combined two principles. Shared consciousness meant spreading information as widely as possible, so every unit understood the whole picture rather than just its own slice: the daily operations and intelligence briefing grew from about 50 senior leaders to more than 7,000 participants. Empowered execution meant pushing decision authority down to the teams closest to events, which became workable only once they shared enough context to decide well. The result was a 'team of teams', in which small teams were linked by trust and information across the whole organization, instead of a command chain in which every decision traveled up and back down.",
        deployment: [
          "Share context more widely than feels comfortable: strategy, priorities and the reasons behind decisions.",
          "Create a regular forum where teams see each other's work and problems, not just report upward.",
          "Push decisions to the people closest to the information, once they share the context to make them well.",
          "Build ties between teams through exchanges, embedded liaisons and joint work, so trust doesn't stop at team boundaries.",
        ],
        examples: [
          "A weekly all-hands where product, sales and support each share their biggest open problem, after which teams decide locally how to respond.",
        ],
        caution:
          "Radical transparency needs trust and judgment about what can safely be shared, especially sensitive information. The model comes from a specific military context and is one organization's account of its change, not a tested study.",
      },
    ],
  },
  {
    id: "advantage-capital",
    code: "30",
    name: "Advantage & Capital",
    brief:
      "Build advantages that last, and put money where it earns the most.",
    principles: [
      {
        id: "seven-powers",
        code: "Z-17",
        name: "Power Needs a Benefit and a Barrier",
        source: "Hamilton Helmer — 7 Powers: The Foundations of Business Strategy (2016)",
        tagline:
          "A lasting competitive advantage, or moat, needs two things: a benefit that improves your economics, and a barrier that stops rivals copying it.",
        science:
          "Helmer, a strategy adviser and investor, argues that a business earns persistent returns above its cost of capital only when it has 'power', which requires both a benefit (higher prices, lower costs or less investment) and a barrier that keeps competitors from neutralizing it, even when they understand exactly what you're doing. He identifies seven sources: scale economies, network economies, counter-positioning (a new model incumbents won't copy because it would damage their existing business), switching costs, branding, cornered resources (preferential access to a valuable asset) and process power (embedded organizational capabilities that are hard to replicate). His equation is that value equals market size multiplied by power: without power, even a large market won't produce lasting returns.",
        deployment: [
          "For each claimed advantage, name both the benefit (what it does to your economics) and the barrier (why rivals can't or won't copy it).",
          "Test it against the seven: scale, network, counter-positioning, switching costs, brand, cornered resource, process power.",
          "If you can't name a barrier, treat the advantage as temporary and plan accordingly.",
          "Ask which power you can realistically build next at your stage; some, such as counter-positioning, are open to newcomers, while others, such as scale, come later.",
        ],
        examples: [
          "\"Our advantage isn't 'better service'; anyone can claim that. It's switching costs: once a client's data and workflows live in our system, moving costs them months.\"",
        ],
        caution:
          "The framework is a lens for analysis built from one practitioner's experience rather than tested research, and real advantages often combine several powers. Naming a power after the fact is much easier than building one.",
      },
      {
        id: "capital-allocation",
        code: "Z-18",
        name: "Allocate Capital Like an Owner",
        source: "William Thorndike — The Outsiders: Eight Unconventional CEOs (2012)",
        tagline:
          "A leader's most important job is deciding where the money goes. Compare every option by its return per share.",
        science:
          "Thorndike studied eight CEOs, including Henry Singleton of Teledyne, Tom Murphy of Capital Cities, Katharine Graham of the Washington Post and Warren Buffett of Berkshire Hathaway, whose companies beat the S&P 500 by more than twenty times on average over their tenures. What they shared was not charisma or operating brilliance but a focus on capital allocation: choosing between reinvesting in the business, acquisitions, paying down debt, dividends and buying back shares, according to the return each would generate per share. They ran highly decentralized organizations with very lean headquarters, and they were willing to act against convention, buying back stock when their shares were cheap and using them to buy when they were dear. Singleton's Teledyne, for example, compounded at about 20 percent a year from 1963 to 1990, against 8 percent for the S&P 500.",
        deployment: [
          "List every available use of capital (reinvesting, acquiring, paying down debt, dividends, buybacks) and compare their expected returns.",
          "Judge decisions by return per share or per unit of capital, not by growth in size alone.",
          "Keep headquarters lean and push operating decisions to the units, while keeping capital allocation at the top.",
          "Be willing to go against the crowd: invest when assets are cheap, and hold back when they're expensive.",
        ],
        examples: [
          "\"The acquisition grows revenue 30 percent, but at that price it returns 6 percent on capital. Buying back our own shares returns more. Let's pass.\"",
        ],
        caution:
          "The eight CEOs were chosen for their extraordinary results, so the book describes winners rather than testing a strategy; others who behaved similarly may have failed. Capital allocation also depends on market conditions and judgment no checklist can supply.",
      },
      {
        id: "business-model-canvas",
        code: "Z-19",
        name: "Map the Business Model on One Page",
        source: "Alexander Osterwalder & Yves Pigneur — Business Model Generation (2010)",
        tagline:
          "Every business creates, delivers and captures value through nine building blocks. Map them on one page to see how it really works.",
        science:
          "Osterwalder developed the business model canvas in his doctoral research at the University of Lausanne under Pigneur, and the two published it for a general audience in 2010. The canvas describes how an organization creates, delivers and captures value through nine building blocks: customer segments, value propositions, channels, customer relationships and revenue streams on one side, and key resources, key activities, key partnerships and cost structure on the other. Its value is shared visibility. With the whole model on one page, a team can see how a change in one block, such as a new customer segment, ripples through the others, compare alternative models side by side, and spot the assumptions that need testing.",
        deployment: [
          "Fill in the nine blocks for your current business on one page, starting with customer segments and value propositions.",
          "Check the links: does each segment have a channel, a relationship and a revenue stream that fit it?",
          "Sketch two or three alternative models and compare them before committing.",
          "Mark the riskiest assumptions on the canvas and test them (see Z-06).",
        ],
        examples: [
          "A consultancy maps a subscription version of its service on a second canvas, and sees it would need a new key activity, content production, before it could work.",
        ],
        caution:
          "The canvas describes a model; it doesn't tell you whether the model is any good. It can become a box-filling exercise, and it says little about competitors or industry structure (see Z-01).",
      },
      {
        id: "contrarian-question",
        code: "Z-20",
        name: "Ask the Contrarian Question",
        source: "Peter Thiel with Blake Masters — Zero to One (2014)",
        tagline:
          "Ask: 'What important truth do very few people agree with you on?' The answer is where overlooked opportunities hide.",
        science:
          "Thiel argues that the most valuable businesses do something genuinely new, going from zero to one, rather than copying what already works, from one to n. His favorite interview question, 'What important truth do very few people agree with you on?', is hard because conventional knowledge is by definition agreed upon, and saying something unpopular is uncomfortable. A good answer names a belief that is both unpopular and true, which is where opportunities others overlook can be found. Thiel pairs this with a provocative claim, 'competition is for losers': in crowded markets, margins get competed away, so companies should aim to dominate a small market with something unique and then expand from there.",
        deployment: [
          "Ask yourself and your team the contrarian question before setting strategy, and write the answers down.",
          "Test each answer: is it genuinely unpopular, and do you have evidence that it's true?",
          "Look for markets you can dominate because they're small or overlooked, rather than large ones crowded with rivals.",
          "Use the question in hiring to find people who think independently and can defend a view.",
        ],
        examples: [
          "\"Most people in our industry believe small clients aren't worth serving. We think they're underserved and loyal. If we're right, that's our market.\"",
        ],
        caution:
          "Being contrarian is not the same as being right; most unpopular beliefs are unpopular because they're wrong. Thiel's advice draws on the successes he observed, and aiming for market dominance has to stay within competition law.",
      },
    ],
  },
];
