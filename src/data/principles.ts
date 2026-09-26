export interface Principle {
  id: string;
  code: string;
  name: string;
  source: string;
  tagline: string;
  science: string;
  deployment: string[];
  examples: string[];
  caution?: string;
}

export interface Phase {
  id: string;
  code: string;
  name: string;
  brief: string;
  principles: Principle[];
}

export const phases: Phase[] = [
  {
    id: "discovery",
    code: "01",
    name: "Discovery",
    brief:
      "Extract the real map of the other side's world — their constraints, motivations, and hidden information — before you ever advocate.",
    principles: [
      {
        id: "calibrated-questions",
        code: "D-01",
        name: "Calibrated Questions",
        source: "Chris Voss — Never Split the Difference",
        tagline:
          "Open-ended 'What' and 'How' questions that make the other side solve your problem for you.",
        science:
          "Calibrated questions remove the confrontational edge of a demand while forcing the counterpart's brain into problem-solving mode on your behalf. Because they cannot be answered with 'yes' or 'no', they generate information and create the illusion of control — the counterpart feels in charge while you steer the conversation.",
        deployment: [
          "Delete 'why' from your vocabulary in tense moments — it sounds accusatory. Convert every 'why' into 'what' or 'how'.",
          "When you receive a demand or objection, respond with a calibrated question instead of a counterargument.",
          "Use 'How am I supposed to do that?' to make the other side confront the reality of your constraints without saying no.",
          "Stack them: each answer generates the next question. Two or three in a row will surface the real constraint.",
        ],
        examples: [
          "\"How am I supposed to do that?\" — in response to an aggressive demand.",
          "\"What about this is important to you?\" — to surface the underlying interest.",
          "\"What's the biggest challenge you're facing with this?\" — to open discovery.",
          "\"How would you like me to proceed?\" — to hand them the illusion of control.",
        ],
        caution:
          "Tone is everything. Delivered flat or sarcastically, a calibrated question sounds like stonewalling. Deliver with genuine curiosity.",
      },
      {
        id: "active-listening",
        code: "D-02",
        name: "Active Listening",
        source: "Carl Rogers & Richard Farson — foundational clinical research",
        tagline:
          "Listen to understand, not to reply. The listener controls the conversation.",
        science:
          "Rogers demonstrated that people move toward openness and change when they feel genuinely heard without judgment. Neuroscience backs this: feeling understood activates reward circuitry (ventral striatum), while feeling unheard triggers threat responses. Most people listen at 25% efficiency because they are rehearsing their reply.",
        deployment: [
          "Give the speaker 100% of your attention — no devices, no formulating responses while they talk.",
          "Reflect content AND feeling: paraphrase what they said, then name what they seem to feel about it.",
          "Do not rush to fix, advise, or relate it back to yourself. Understanding first, solutions later.",
          "Follow the 80/20 rule in discovery conversations: they talk 80%, you talk 20%.",
        ],
        examples: [
          "\"So if I'm hearing you right, the timeline isn't the real issue — it's that you've been burned by missed deadlines before.\"",
          "\"Let me make sure I've got this...\" then summarize before you respond.",
          "\"What I'm hearing underneath that is frustration with the process itself. Is that fair?\"",
        ],
      },
      {
        id: "spin-questions",
        code: "D-03",
        name: "SPIN Sequence",
        source: "Neil Rackham — SPIN Selling (12-year study, 35,000 sales calls)",
        tagline:
          "Situation → Problem → Implication → Need-payoff. Escalate the cost of inaction in their own words.",
        science:
          "Rackham's research at Huthwaite found top performers in complex, high-stakes conversations don't pitch — they ask a specific sequence of questions that make the counterpart articulate the pain and the value of solving it themselves. Implication questions were the strongest differentiator of elite performers.",
        deployment: [
          "Situation: establish neutral facts briefly — don't over-ask, it bores people.",
          "Problem: probe for difficulties and dissatisfactions ('What's not working as well as you'd like?').",
          "Implication: expand the consequences of the problem ('What does that delay cost you downstream?'). This is where urgency is built.",
          "Need-payoff: have THEM state the value of solving it ('If that were fixed, what would that free you up to do?').",
        ],
        examples: [
          "\"How is the current approach handled today?\" (Situation)",
          "\"Where does that process break down?\" (Problem)",
          "\"When it breaks down, what does that do to the rest of the team's week?\" (Implication)",
          "\"If you never had to deal with that again, what would that be worth?\" (Need-payoff)",
        ],
      },
      {
        id: "effective-silence",
        code: "D-04",
        name: "Strategic Silence",
        source: "Voss; supported by conversational-pressure research",
        tagline: "After a key question or offer — stop talking. Silence does the work.",
        science:
          "Humans are wired to fill conversational voids; silence creates social pressure that pulls out information the speaker never planned to share. In negotiation studies, the party who tolerates silence longer extracts more concessions and more disclosure. At least 3–5 seconds of silence feels eternal to the other side — and that's the point.",
        deployment: [
          "After asking an important question, count silently to at least four before speaking again.",
          "After labeling an emotion ('It seems like there's more to this...'), go silent and let it land.",
          "When you receive an offer or answer that feels incomplete, say nothing. They will usually improve it or elaborate.",
          "Pair with a slow nod or a soft 'hmm' to signal you're listening, not stonewalling.",
        ],
        examples: [
          "Them: 'That's the best we can do.' You: [silence, 5 seconds]. Them: '...although we might have some flexibility on terms.'",
          "\"It sounds like something else is going on here.\" [silence]",
        ],
      },
      {
        id: "motivational-interviewing",
        code: "D-05",
        name: "Elicit Change Talk",
        source: "Miller & Rollnick — Motivational Interviewing (500+ clinical trials)",
        tagline:
          "People are persuaded by the reasons THEY voice, not the reasons you give them.",
        science:
          "Motivational Interviewing is among the most validated influence frameworks in behavioral science. Its core finding: when a person hears themselves argue for change ('change talk'), commitment rises measurably; when they hear themselves defend the status quo, resistance hardens. Your job is to ask questions that make them voice the case for your direction.",
        deployment: [
          "Ask about their own desires, abilities, reasons, and needs relevant to the change you want.",
          "When they voice anything favoring the change, reflect it back and ask them to expand ('Tell me more about that').",
          "Never argue against resistance — roll with it. Arguing makes them defend the opposite position out loud, deepening it.",
          "Ask scaling questions to draw out their own reasoning.",
        ],
        examples: [
          "\"What would be the best thing about making this work?\"",
          "\"On a scale of 1–10, how important is fixing this to you? ... Why a 6 and not a 3?\" (They now argue FOR importance.)",
          "\"You've mentioned twice that the current setup frustrates you — what would you want instead?\"",
        ],
      },
      {
        id: "seek-first",
        code: "D-06",
        name: "Diagnose Before Prescribing",
        source: "Stephen Covey — Habit 5, The 7 Habits of Highly Effective People",
        tagline: "Seek first to understand, then to be understood.",
        science:
          "Premature advocacy triggers reactance — people resist solutions offered before they feel their problem was fully grasped. Covey's principle mirrors medical practice: a prescription before diagnosis is malpractice. When people feel deeply understood first, their openness to your proposal rises dramatically, because your credibility as a diagnostician is established.",
        deployment: [
          "Ban yourself from proposing anything until you can state their position better than they can.",
          "Test it out loud: 'Let me see if I understand your situation...' and articulate their view to their satisfaction.",
          "Only after they confirm 'yes, exactly' have you earned the right to be understood.",
          "In conflict, this alone often dissolves the fight — most escalation is two people feeling unheard simultaneously.",
        ],
        examples: [
          "\"Before I share any thoughts — let me make sure I actually understand what you're up against. Here's what I've heard...\"",
          "\"I want to state your case back to you. Stop me where I get it wrong.\"",
        ],
      },
      {
        id: "black-swans",
        code: "D-07",
        name: "Hunt Black Swans",
        source: "Chris Voss — Never Split the Difference",
        tagline:
          "Every counterpart holds 3+ pieces of hidden information that would change everything. Find them.",
        science:
          "Voss's hostage-negotiation doctrine: deals are rarely won on the known facts — they're won on the unknowns ('black swans'): hidden deadlines, internal politics, personal stakes, prior traumas with similar deals. These surface only through sustained listening, off-agenda conversation, and observing contradictions between words and behavior.",
        deployment: [
          "Assume at least three game-changing unknowns exist. Make finding them an explicit goal of every early conversation.",
          "Pay attention to unguarded moments — before and after formal meetings, small talk, offhand comments. That's where swans surface.",
          "Probe contradictions gently: when what they say and what they do diverge, there's a swan underneath.",
          "Ask about their world beyond the deal: pressures, how success is measured for them personally, what happened last time.",
        ],
        examples: [
          "\"What happens on your end if this doesn't get done this quarter?\" (surfaces hidden deadlines and personal stakes)",
          "\"How did this go the last time you tried it?\" (surfaces prior scar tissue driving current behavior)",
          "\"Who else does this decision affect?\" (surfaces hidden stakeholders)",
        ],
      },
      {
        id: "curiosity-gap",
        code: "D-08",
        name: "The Curiosity Gap & Open Loops",
        source: "George Loewenstein — information-gap theory (1994); Bluma Zeigarnik (1927)",
        tagline:
          "Attention flows to the gap between what people know and what they want to know — open the loop, then own it.",
        science:
          "Loewenstein's information-gap theory: curiosity is a form of cognitive deprivation triggered by awareness of a specific gap in one's knowledge — and it demands closure like an itch demands scratching. Zeigarnik's earlier finding compounds it: interrupted, unfinished tasks are remembered roughly twice as well as completed ones, because open loops keep occupying working memory. Together they explain cliffhangers, headlines, and why 'there are three problems with this plan — the third is the one that worries me' owns a room. The gap must be specific: vague mystery bores; a named, almost-closed gap compels.",
        deployment: [
          "Open with the gap, not the content: name what's surprising or missing before you explain it.",
          "Tease structure: 'There are three reasons — the last one changed my mind.' The numbered promise creates loops the listener needs closed.",
          "Leave a deliberate loop open at the end of meetings ('Next time I'll show you what the data said — it wasn't what we expected') to guarantee attention carries over.",
          "Size the gap to their knowledge: curiosity peaks when people know ALMOST enough. Establish what they know first, then reveal the gap in it.",
        ],
        examples: [
          "\"Before I show you the numbers — one of our three assumptions turned out to be completely wrong. See if you can spot which.\"",
          "\"I found the reason the deals are stalling. It's not pricing, and it's not the product. Have you got ten minutes?\"",
        ],
        caution:
          "A gap you open and fail to close satisfyingly reads as clickbait and burns credibility. Only open loops your content genuinely pays off.",
      },
      {
        id: "ladder-of-inference",
        code: "D-09",
        name: "The Ladder of Inference",
        source: "Chris Argyris (Harvard); popularized in Senge's The Fifth Discipline",
        tagline:
          "From the same pool of data, two people climb different ladders to opposite certainties — walk yours down before you argue.",
        science:
          "Argyris mapped how humans get from observation to action: from the pool of observable data we SELECT a subset, add cultural and personal MEANING, make ASSUMPTIONS, draw CONCLUSIONS, adopt BELIEFS, and act — all in milliseconds, all invisibly. Two failure modes compound it: the reflexive loop (our existing beliefs steer which data we select next time, so the ladder self-seals) and the fact that we experience our conclusions AS data ('he's checked out' feels observed, not inferred). Most unproductive disagreement is two people defending the tops of their ladders. The discipline: make your ladder visible and inquire into theirs — the disagreement usually dissolves several rungs down, at the selection step.",
        deployment: [
          "Before a charged conclusion, walk down out loud: what did I actually observe (camera test), and what did I add?",
          "Advocate with your ladder exposed: state the data, then your interpretation, explicitly labeled as interpretation — then invite correction.",
          "Inquire into their ladder instead of attacking their conclusion: 'What are you seeing that leads you there?' targets the rung where agreement is possible.",
          "Audit your reflexive loop on people you've written off: what disconfirming data have you stopped selecting?",
        ],
        examples: [
          "\"Here's what I observed: three deadlines slipped without a heads-up. The story I built from that is disengagement — but that's my inference. What's actually going on?\"",
          "\"We're arguing conclusions. Let's go back down — what data are you starting from? I suspect we're not even selecting the same facts.\"",
        ],
      },
    ],
  },
  {
    id: "rapport",
    code: "02",
    name: "Rapport",
    brief:
      "Engineer trust and psychological safety — the channel through which all influence must travel.",
    principles: [
      {
        id: "mirroring",
        code: "R-01",
        name: "Mirroring",
        source: "Chris Voss — Never Split the Difference",
        tagline:
          "Repeat their last 1–3 critical words as a question. They elaborate; the bond deepens.",
        science:
          "Mirroring exploits the neurological comfort of similarity. In a study of waiters, those who mirrored customers' words earned 70% larger tips than those who used positive reinforcement. In conversation, a mirror signals 'I'm with you, keep going' — the counterpart reflexively rephrases and expands, revealing more each pass.",
        deployment: [
          "Take the last one to three significant words your counterpart said and repeat them with a gentle upward inflection.",
          "Then be quiet. Let the mirror do its work — they will elaborate.",
          "Chain mirrors to walk someone deeper into their own reasoning without asking a single question.",
          "Use the late-night FM DJ voice: slow, calm, downward-tilting tone for safety.",
        ],
        examples: [
          "Them: 'We just can't move forward with this budget.' You: 'This budget?' Them: 'Well, the Q3 allocation specifically — Q4 might be different...'",
          "Them: 'The team is overwhelmed.' You: 'Overwhelmed?' Them: 'Honestly it's mostly the two new projects that landed at once...'",
        ],
      },
      {
        id: "labeling",
        code: "R-02",
        name: "Labeling",
        source: "Chris Voss; fMRI research by Matthew Lieberman (UCLA)",
        tagline:
          "Name their emotion out loud — 'It seems like...' — and watch its intensity drop or its warmth grow.",
        science:
          "Lieberman's fMRI studies show that putting feelings into words ('affect labeling') reduces amygdala activation — naming a negative emotion literally defuses it neurologically, while naming a positive one reinforces it. Labels also demonstrate deep attunement, accelerating trust faster than agreement does.",
        deployment: [
          "Open with 'It seems like...', 'It sounds like...', or 'It looks like...' — never 'I think you feel', which makes it about you.",
          "Label the emotion you observe, then go silent. Do not follow the label with a question or pitch.",
          "Label negatives to defuse them ('It seems like you're worried this will blow up on you'). Label positives to amplify them.",
          "If the label is wrong, no damage done — 'It seems like...' lets them correct you, which also builds trust.",
        ],
        examples: [
          "\"It seems like you've been burned by promises like this before.\"",
          "\"It sounds like this timeline is putting you in a tough spot with your boss.\"",
          "\"It looks like this project really matters to you personally.\"",
        ],
      },
      {
        id: "tactical-empathy",
        code: "R-03",
        name: "Tactical Empathy",
        source: "Chris Voss — Never Split the Difference",
        tagline:
          "Understand and vocalize their perspective so precisely that they feel completely seen — then influence flows.",
        science:
          "Tactical empathy is not agreement or sympathy — it is the deliberate demonstration that you understand the other side's worldview, pressures, and emotions. Once a person feels genuinely understood, their defensive posture drops and their receptivity to your framing rises. It is the master skill under mirroring, labeling, and the accusation audit.",
        deployment: [
          "Before any meeting, write down how the situation looks FROM THEIR SEAT: their fears, incentives, audience, and constraints.",
          "Vocalize their perspective early, unprompted, and accurately — before advocating anything.",
          "Aim for 'That's right' — the moment they confirm you've captured their world exactly.",
          "Keep empathy tactical: you can fully understand a position you completely disagree with.",
        ],
        examples: [
          "\"You've got leadership pushing for speed, a team stretched thin, and now I show up asking for changes. If I were you, I'd be skeptical too.\"",
          "\"From where you sit, this probably looks like risk with no upside — someone asking you to bet your reputation on an unproven idea.\"",
        ],
      },
      {
        id: "accusation-audit",
        code: "R-04",
        name: "Accusation Audit",
        source: "Chris Voss — Never Split the Difference",
        tagline:
          "List every negative thing they could think about you — and say it first, out loud.",
        science:
          "Preemptively voicing the other side's worst assumptions about you deflates them before they can fester. Psychologically it works through expectation-lowering and affect labeling combined: hearing their objections stated by YOU, often more harshly than they'd put it, triggers denial ('no, that's not fair, you're not that bad') and clears the emotional field.",
        deployment: [
          "Before a difficult conversation, list every accusation, fear, or negative label the other side might hold about you or your ask.",
          "Open the conversation by airing the worst of them yourself: 'You're probably thinking...'",
          "Overstate slightly — it invites correction in your favor.",
          "Then move to your actual message into the cleared space.",
        ],
        examples: [
          "\"You're probably going to think I'm being greedy here, and that I haven't thought about your side at all...\"",
          "\"This is going to sound like I'm dumping more work on you right after you cleared your plate...\"",
          "\"You might feel like I only show up when I need something.\"",
        ],
      },
      {
        id: "liking-similarity",
        code: "R-05",
        name: "Liking & Similarity",
        source: "Robert Cialdini — Influence; Byrne's similarity-attraction paradigm",
        tagline:
          "We say yes to people we like — and we like people who are like us, who compliment us, and who cooperate with us.",
        science:
          "Cialdini identifies three reliable drivers of liking: similarity (shared background, values, style), praise (genuine compliments — which work even when we know they're strategic), and cooperation toward shared goals. In MBA negotiation studies, pairs who spent five minutes finding commonalities before negotiating reached agreement 90% of the time vs. 55% for those who went straight to business.",
        deployment: [
          "Before business, invest minutes in discovering genuine commonalities — background, interests, shared struggles.",
          "Give specific, honest praise about things they actually care about (their work, judgment, effort — not flattery).",
          "Frame the interaction as collaboration against a shared problem, never you vs. them: same side of the table, problem on the other side.",
          "Match their communication style — pace, formality, energy — without mimicry.",
        ],
        examples: [
          "\"Before we dive in — I saw you led the migration project last year. I'm dealing with something similar; how did you survive it?\"",
          "\"It sounds like we're both trying to get to the same place: a deal that doesn't blow up in six months.\"",
        ],
      },
      {
        id: "fast-friends",
        code: "R-06",
        name: "Escalating Self-Disclosure",
        source: "Arthur Aron — the 'Fast Friends' protocol (36 questions study)",
        tagline:
          "Closeness is built by reciprocal, gradually deepening self-disclosure — not by time.",
        science:
          "Aron's landmark experiment generated closeness between strangers in 45 minutes rivaling weeks of acquaintance, using one mechanism: alternating self-disclosure that escalates from surface to personal. Vulnerability shown first invites vulnerability in return (the 'vulnerability loop' — Daniel Coyle, The Culture Code). Trust is not the precondition of openness; openness is the precondition of trust.",
        deployment: [
          "Go first: share something modestly personal or candid before expecting them to.",
          "Escalate gradually — small disclosures early, more meaningful ones as reciprocity builds. Never jump levels.",
          "When they disclose, honor it: acknowledge, never exploit or one-up.",
          "Admit uncertainty and mistakes candidly — leaders who signal fallibility trigger the vulnerability loop fastest.",
        ],
        examples: [
          "\"Honestly, I wasn't sure how to open this conversation — I've been turning it over all week.\"",
          "\"I'll go first: the part of this project I'm genuinely worried about is...\"",
        ],
      },
      {
        id: "pratfall",
        code: "R-07",
        name: "The Pratfall Effect",
        source: "Elliot Aronson — 1966 experiments",
        tagline:
          "Competent people become MORE likable after admitting a flaw or blunder.",
        science:
          "Aronson found that a highly competent person who commits a small blunder (spilling coffee, admitting a weakness) is rated as more attractive and trustworthy than one who appears flawless — perfection creates distance; a crack creates connection. Critically, this only works when competence is already established.",
        deployment: [
          "Establish competence first — the effect reverses if you seem mediocre.",
          "Admit small, genuine imperfections: a mistake you made, something you don't know, a struggle in your process.",
          "Use it when you sense you're being perceived as slick, polished, or 'too good to trust'.",
          "Never fake flaws — manufactured humility reads instantly.",
        ],
        examples: [
          "\"I'll be straight with you — I completely misjudged this the first time I tried it, and it cost me a month.\"",
          "\"That's a great question and I genuinely don't know. Let me find out rather than guess.\"",
        ],
      },
      {
        id: "name-warmth",
        code: "R-08",
        name: "Genuine Interest & the Sound of One's Name",
        source: "Dale Carnegie — How to Win Friends and Influence People",
        tagline:
          "You make more allies in two months by becoming interested in people than in two years trying to get them interested in you.",
        science:
          "Carnegie's century-old observations hold up in modern research: hearing one's own name activates distinct brain regions tied to self-relevance; people rate conversation partners who ask more follow-up questions as significantly more likable (Harvard study, Huang et al. 2017). Attention is the rarest currency — giving it fully is disproportionately powerful.",
        deployment: [
          "Use their name naturally — at the open, at key moments, at the close. Never robotically.",
          "Ask follow-up questions about what THEY said, rather than pivoting to your own stories.",
          "Remember and reference details from previous conversations — it signals they matter beyond the transaction.",
          "Let others do most of the talking about themselves; they will remember the conversation as excellent.",
        ],
        examples: [
          "\"Sarah, last time you mentioned your daughter's tournament — how did it go?\"",
          "\"Wait, go back — you said you almost took a completely different career path. What happened?\"",
        ],
      },
      {
        id: "five-to-one",
        code: "R-09",
        name: "The 5:1 Ratio",
        source: "John Gottman — Love Lab observational research",
        tagline:
          "Stable relationships run at five positive interactions for every negative one — even during conflict.",
        science:
          "Gottman's longitudinal coding of thousands of interactions found a precise arithmetic to relational health: couples heading for stability maintained roughly 5 positive interactions (interest, affection, humor, appreciation, small acknowledgments) per negative one DURING conflict — and about 20:1 in everyday life; relationships below ~1:1 were headed for collapse. The ratio generalizes to teams: research on high-performing business teams (Losada's data, though its math was later disputed, directionally matches Gottman's) shows positivity-dominant interaction climates outperform. The practical law: negativity is roughly five times heavier than positivity, so deposits must dramatically outnumber withdrawals.",
        deployment: [
          "Treat every relationship as an account: each criticism, correction, or missed commitment is a withdrawal that needs ~5 deposits to cover.",
          "Make deposits tiny and constant: noticing effort, remembering details, small acknowledgments — frequency beats magnitude.",
          "Front-load deposits before known withdrawals: build the balance BEFORE the hard feedback conversation, not as damage control after.",
          "Audit your ratio with the people who matter most professionally — most people run large deficits with exactly the colleagues they depend on most.",
        ],
        examples: [
          "\"Before we get into the revisions — the client specifically called out your section as the clearest. They're right.\"",
          "Weekly habit: two specific, unprompted appreciation messages to people you'll eventually need to push hard.",
        ],
      },
    ],
  },
  {
    id: "solutioning",
    code: "03",
    name: "Solutioning",
    brief:
      "Guide the other side to author your conclusion themselves. Ideas people birth, they defend; ideas people are handed, they resist.",
    principles: [
      {
        id: "self-persuasion",
        code: "S-01",
        name: "Self-Persuasion via Their Own Story",
        source: "Elliot Aronson — self-persuasion research; Socratic method",
        tagline:
          "The most durable persuasion is the argument people construct themselves.",
        science:
          "Decades of research show self-generated arguments outlast externally supplied ones, because they carry no source to discount and no reactance to overcome — we don't argue with our own conclusions. The technique: ask questions whose honest answers assemble your case, letting the counterpart narrate their way to the destination.",
        deployment: [
          "Decide the conclusion you want them to reach, then design 3–4 questions whose truthful answers build toward it.",
          "Ask them to recall their OWN experiences that support the direction ('When has X worked for you before?').",
          "When they voice a piece of the conclusion, reflect it back and let them expand it — never say 'exactly, so that means...' and grab the wheel.",
          "Let them state the conclusion. If you must, offer it as their idea: 'So what you're saying is...?'",
        ],
        examples: [
          "\"What's worked best in the past when the team hit something like this?\" (their story supplies your solution)",
          "\"Walk me through what happens if nothing changes.\" (they build the case for action)",
          "\"You said speed matters more than polish here — so what does that imply for how we should ship?\"",
        ],
      },
      {
        id: "thats-right",
        code: "S-02",
        name: "Engineer 'That's Right'",
        source: "Chris Voss — Never Split the Difference",
        tagline:
          "'That's right' is the breakthrough. 'You're right' means they want you to go away.",
        science:
          "When you summarize someone's situation and feelings so completely that they say 'that's right', a subtle epiphany occurs — they feel fully understood, and the psychological barrier between you dissolves. Voss calls it the moment negotiations turn. 'You're right', by contrast, is a dismissal: agreement given to end the pressure, not from conviction.",
        deployment: [
          "Combine a label with a summary: paraphrase their facts AND their feelings in one clean statement.",
          "Aim for a summary so accurate they couldn't have said it better themselves.",
          "When you hear 'that's right', proceed — the channel is open. When you hear 'you're right', stop: you're pushing, not persuading. Return to listening.",
          "Use before any ask: understanding must be confirmed before influence is attempted.",
        ],
        examples: [
          "\"So you've championed this internally for a year, leadership finally gave you budget, and now the vendor you bet on is wobbling — and it's your name on the line.\" — 'That's right.'",
        ],
      },
      {
        id: "advice-seeking",
        code: "S-03",
        name: "Advice Seeking",
        source: "Liljenquist & Galinsky — negotiation research (Kellogg/Northwestern)",
        tagline:
          "Asking for advice turns a judge into a champion.",
        science:
          "Research by Liljenquist and Galinsky found advice-seeking is a uniquely potent influence move: it flatters (signals respect for their judgment), triggers perspective-taking (they must stand in your shoes to advise you), and creates commitment (having advised your plan, they become invested in its success). It converts potential critics into co-owners.",
        deployment: [
          "Ask for advice BEFORE decisions are final — 'How would you approach this?' — not after, when it reads as politics.",
          "Ask people whose buy-in you'll need later; the act of advising creates their stake in the outcome.",
          "Actually use some of the advice and tell them what happened — it compounds the investment.",
          "Frame genuinely: seek their specific expertise, not generic validation.",
        ],
        examples: [
          "\"You've seen ten of these launches. If this were yours, what would you do differently?\"",
          "\"Before I take this to the committee — where are the holes in it? I'd rather hear it from you first.\"",
        ],
      },
      {
        id: "ikea-cocreation",
        code: "S-04",
        name: "Co-Creation (IKEA Effect)",
        source: "Norton, Mochon & Ariely — Harvard Business School, 2011",
        tagline:
          "People value what they helped build at a premium — labor breeds love.",
        science:
          "Norton's experiments showed people value self-assembled items ~63% higher than identical pre-built ones, and the effect extends to ideas and plans: contributing effort to a solution inflates one's valuation of it and commitment to it. A plan the other side helped shape is a plan they will defend in rooms you're not in.",
        deployment: [
          "Bring proposals 80% finished — leave meaningful, real decisions open for them to shape.",
          "Ask them to improve, not approve: 'What would make this stronger?' beats 'Do you sign off?'",
          "Incorporate their input visibly and credit it: 'This section is built on your point about X.'",
          "In group settings, have stakeholders draft components rather than review yours.",
        ],
        examples: [
          "\"Here's the skeleton. I deliberately left the rollout sequence open — you know the team's rhythms better than I do. How would you stage it?\"",
          "\"I've got two ways to structure this and I'm torn. Which would you pick, and why?\"",
        ],
      },
      {
        id: "autonomy-byaf",
        code: "S-05",
        name: "Autonomy Framing ('But You Are Free')",
        source: "Guéguen & Pascual — BYAF technique; 42-study meta-analysis (Carpenter, 2013)",
        tagline:
          "Explicitly affirming their freedom to refuse DOUBLES compliance.",
        science:
          "A meta-analysis of 42 studies with over 22,000 participants found that adding a simple acknowledgment of the person's freedom to decline ('but you are free to refuse') roughly doubled compliance rates. It works by neutralizing psychological reactance — the reflexive resistance we feel when our autonomy is threatened. Pressure creates pushback; freedom creates yes.",
        deployment: [
          "End requests with an explicit release: 'totally your call', 'no pressure either way', 'feel free to say no'.",
          "Present options rather than a single demand — choice among alternatives preserves autonomy while bounding the outcome.",
          "Never chase a hesitation with pressure; restate their freedom and go silent.",
          "Combine with a no-oriented question: 'Would it be a bad idea to...?' — 'no' feels safe and protective to say.",
        ],
        examples: [
          "\"I think option B saves you the most pain, but you're the one living with it — entirely your call.\"",
          "\"Would you be against taking one more look at the numbers before we lock it?\" ('No' = yes.)",
          "\"Happy to walk you through it, and totally fine if now's not the time.\"",
        ],
      },
      {
        id: "narrative-transport",
        code: "S-06",
        name: "Narrative Transportation",
        source: "Green & Brock — 'The Role of Transportation in the Persuasiveness of Public Narratives' (2000)",
        tagline:
          "A story smuggles your message past the brain's defenses; a fact invites a counterargument.",
        science:
          "Green and Brock demonstrated that when people are 'transported' into a story, counterarguing shuts down and beliefs shift in the story's direction — with attitude changes persisting longer than those from rhetorical argument. Data makes people evaluate; story makes people experience. Character + struggle + concrete detail is the delivery vehicle for any conclusion you want adopted.",
        deployment: [
          "Convert your key argument into a specific story: one real person, a struggle they faced, and what happened.",
          "Use concrete sensory detail and stakes — vagueness breaks transportation.",
          "Let the listener draw the moral; state it only if they don't. A conclusion they extract is self-persuasion.",
          "Deploy stories at resistance points, where direct argument would trigger counterarguing.",
        ],
        examples: [
          "Instead of 'downtime costs us customers': \"Last March, a customer named Elena tried to check out during the outage. Her cart had $400 in it. She never came back — I know because I called her.\"",
          "\"Let me tell you what happened to the last team that skipped this step...\"",
        ],
      },
      {
        id: "feedforward",
        code: "S-07",
        name: "Feedforward",
        source: "Marshall Goldsmith — executive coaching methodology",
        tagline:
          "People fight feedback about the past; they welcome ideas for the future.",
        science:
          "Goldsmith's insight: feedback triggers defensiveness because the past can't be changed and critique implicates identity. 'Feedforward' — concrete suggestions for future behavior, with no rehashing of past failure — delivers the same corrective content without the threat. People can act on it because accepting it doesn't require admitting fault.",
        deployment: [
          "Skip the autopsy. Frame every improvement conversation around the next attempt, not the last one.",
          "Offer suggestions as options for the future: 'Next time, one thing that might land better is...'",
          "When receiving pushback on critique, pivot: 'Forget last quarter — what would make the next one great?'",
          "Ask for feedforward yourself; it models the norm and disarms.",
        ],
        examples: [
          "\"I'm not interested in relitigating the launch. Going forward, what's one change that would make the next one smoother?\"",
          "\"Here are two ideas for the next pitch — take whatever's useful.\"",
        ],
      },
      {
        id: "challenger-reframe",
        code: "S-08",
        name: "The Challenger Reframe",
        source: "Matthew Dixon & Brent Adamson — The Challenger Sale (CEB study, 6,000+ reps)",
        tagline:
          "Top performers don't ask what keeps you up at night — they TEACH you what should.",
        science:
          "CEB's study of 6,000+ sales professionals across 90 companies found the highest performers in complex sales weren't relationship-builders (the lowest-performing profile) but 'challengers': they teach the counterpart something new about their OWN business, tailor the message to the stakeholder, and take control of the conversation. The engine is commercial teaching — a credible, data-backed insight that reframes how the customer sees their problem, leading uniquely to your strengths. People pay attention to those who make them smarter about their own world.",
        deployment: [
          "Lead with insight, not questions about needs: bring a data-backed observation about their world that they don't already have.",
          "Build to the reframe: 'you think the problem is X; the data says it's actually Y' — then let the implications sink in before offering anything.",
          "Tailor the same insight per stakeholder: CFO hears cost exposure, ops hears workflow risk, from one underlying reframe.",
          "Take control calmly: hold your ground on price and process, and redirect the conversation to value rather than accommodating every demand.",
        ],
        examples: [
          "\"Most teams your size assume churn is a product problem. In the data we see, 60% of it traces to the first two weeks of onboarding — which changes where the fix lives.\"",
          "\"Before we talk about what we sell — can I show you two numbers from your industry that surprised every operator we've shown them to?\"",
        ],
        caution:
          "The insight must be genuinely true and genuinely novel to them. A recycled 'provocative take' without data reads as arrogance and burns the meeting.",
      },
      {
        id: "jolt-indecision",
        code: "S-09",
        name: "JOLT — Defeating Indecision",
        source: "Matthew Dixon & Ted McKenna — The JOLT Effect (2.5M sales-call analysis)",
        tagline:
          "40–60% of deals die not to a competitor but to 'no decision' — and fear of messing up, not the status quo, is why.",
        science:
          "Dixon and McKenna's machine analysis of 2.5 million recorded sales conversations found that most lost deals are lost to indecision — and that the standard playbook (re-selling the cost of inaction, turning up FOMO) actively backfires once a customer already agrees they should act, because it amplifies their real fear: making a MISTAKE they'll own personally. High performers instead Judge the level of indecision, Offer their recommendation (cutting the choice paralysis), Limit the exploration (capping endless research loops), and Take risk off the table (guarantees, pilots, downside protection).",
        deployment: [
          "Diagnose which indecision you face: valuation problems (too many options), lack of information (research loops), or outcome uncertainty (fear of failure). Each needs a different move.",
          "Make a recommendation instead of presenting a menu: 'Based on what you've told me, this is the configuration I'd choose' — experts who recommend outperform servers who offer.",
          "Cap the research: agree on what information would actually change the decision, get it, and close the loop — 'if the reference call goes well, is there anything else standing between us and a decision?'",
          "De-risk the downside explicitly: pilots, opt-outs, phased commitments, personal guarantees — the fear is owning a visible mistake, so shrink the possible mistake.",
        ],
        examples: [
          "\"You don't need more information — you need to know you won't regret this. So here's the safety net: 60-day pilot, and I'll flag it myself if the numbers aren't there.\"",
          "\"If I were sitting in your chair with your constraints, I'd take option two. Here's exactly why.\"",
        ],
      },
      {
        id: "rethinking-cycle",
        code: "S-10",
        name: "The Rethinking Cycle",
        source: "Adam Grant — Think Again (Wharton)",
        tagline:
          "You can't argue people out of entrenched views — but a skilled interviewer can help them argue themselves out.",
        science:
          "Grant synthesizes the science of opinion change around a central finding: people reason in three broken modes — preacher (defending sacred beliefs), prosecutor (attacking others' reasoning), and politician (campaigning for approval) — and none of them updates anyone. The mode that works is scientist: treating views as hypotheses. For changing OTHERS, Grant's evidence points to motivational-interviewing moves over debate: expert vaccine whisperers and master negotiators in his data asked more questions, presented FEWER reasons (a weak argument added to a strong one dilutes it and awakens counterargument), acknowledged complexity, and found the person's own openings for doubt. Binary framing hardens positions; complexifying ('under what conditions would this be different?') softens them. The question 'what evidence would change your mind?' converts a shouting match into a joint inquiry — and if their answer is 'nothing', you've learned to stop spending effort.",
        deployment: [
          "Diagnose your mode mid-argument: preaching, prosecuting, or politicking? Switch to scientist — offer your view as a hypothesis with a named confidence level.",
          "Ask 'what evidence would change your mind?' — and answer it for yourself first, out loud. It models updating and reveals whether persuasion is even possible.",
          "Present your one or two STRONGEST reasons and stop: piling on weaker ones gives them the easy target and dilutes the case (the 'dilution effect').",
          "Complexify binaries: replace 'should we or shouldn't we' with 'under what conditions does this work?' — conditions-talk lets people move without losing face.",
        ],
        examples: [
          "\"I'm at about 70% confident on this. What would move you — and honestly, what should move me?\"",
          "\"Instead of debating whether remote works, can we list the conditions under which it clearly does and clearly doesn't? I suspect we agree on more than we think.\"",
        ],
      },
    ],
  },
  {
    id: "negotiation",
    code: "04",
    name: "Negotiation",
    brief:
      "Claim and create value under tension — with the leverage points that decades of research prove actually move outcomes.",
    principles: [
      {
        id: "interests-positions",
        code: "N-01",
        name: "Interests, Not Positions",
        source: "Fisher & Ury — Getting to Yes (Harvard Negotiation Project)",
        tagline:
          "Positions are what they say they want. Interests are why. Deals live in the why.",
        science:
          "The Harvard Negotiation Project's core finding: positional bargaining locks parties into face-saving stances, while interest-based negotiation expands the solution space. Behind opposed positions usually lie compatible interests — the famous orange dispute where one party needed the fruit and the other the peel. Asking 'why' behind the demand routinely reveals trades that make both sides better off.",
        deployment: [
          "For every demand received, ask yourself and them: what need does this position serve? (Security, recognition, control, timeline pressure?)",
          "State your own interests openly instead of anchoring to positions — it invites problem-solving.",
          "Look for differing priorities: things cheap for you to give and valuable for them to get.",
          "Separate the people from the problem: be soft on the person, hard on the issue.",
        ],
        examples: [
          "\"Help me understand what the deadline protects — is it a board commitment, a budget cycle, something else?\"",
          "\"If we could solve for the underlying concern — coverage during the transition — would the specific date still matter?\"",
        ],
      },
      {
        id: "batna",
        code: "N-02",
        name: "BATNA — Your Walk-Away Power",
        source: "Fisher & Ury — Getting to Yes",
        tagline:
          "Your power in any negotiation equals the strength of your best alternative to it.",
        science:
          "BATNA (Best Alternative To a Negotiated Agreement) is the most cited concept in negotiation science for a reason: the party with the stronger fallback negotiates from calm, not need — and counterparts smell need. Research consistently shows negotiators with developed alternatives set higher aspirations, concede less, and reach better outcomes. Desperation is the most expensive emotion in any deal.",
        deployment: [
          "Before any significant negotiation, develop your BATNA in writing: what exactly happens if this deal dies?",
          "Actively improve your BATNA before and during talks — every alternative you build raises your floor.",
          "Estimate THEIR BATNA: their alternatives define how far you can push.",
          "Never accept a deal worse than your BATNA, and never reveal a weak one. If yours is strong, revealing it (calmly) is leverage.",
        ],
        examples: [
          "\"We'd love to do this with you, and we do have another path if the terms can't work — so let's see if they can.\"",
          "Internal prep: 'If this falls through: extend current vendor 6 months (confirmed), spin up in-house pilot. Floor = anything better than that.'",
        ],
      },
      {
        id: "anchoring",
        code: "N-03",
        name: "Anchoring & Precise Numbers",
        source: "Tversky & Kahneman — anchoring heuristic; Mason et al. — precision effects",
        tagline:
          "The first number sets the gravitational field. Precise numbers anchor harder than round ones.",
        science:
          "Anchoring is among the most replicated effects in psychology: first offers pull final outcomes toward themselves even when parties know the anchor is arbitrary. Columbia research (Mason et al.) adds that precise numbers ($104,650 vs. $105,000) produce smaller counter-adjustments — precision signals underlying rationale, so counterparts adjust less. Anchor first when you know the range; anchor ambitiously but justifiably.",
        deployment: [
          "When you know the value range, make the first offer — set the anchor rather than react to theirs.",
          "Anchor ambitiously but defensibly, and attach the rationale in the same breath.",
          "Use precise, non-round numbers to signal calculation.",
          "If anchored by them, name the tactic to defuse it and re-anchor: don't counter incrementally from their number.",
        ],
        examples: [
          "\"Based on the three comparables and the timeline premium, we're at $84,300.\"",
          "Against a lowball: \"That number tells me we're looking at different data. Let me show you what I'm basing mine on.\" [re-anchor]",
        ],
        caution:
          "Anchoring first backfires when you're badly uninformed about the range — then let them reveal information first.",
      },
      {
        id: "loss-framing",
        code: "N-04",
        name: "Loss-Aversion Framing",
        source: "Kahneman & Tversky — Prospect Theory (Nobel Prize–winning work)",
        tagline:
          "Losses hurt roughly twice as much as equivalent gains feel good. Frame accordingly.",
        science:
          "Prospect Theory established that people feel losses about 2–2.5x more intensely than equivalent gains, and take irrational risks to avoid them. The same offer framed as avoiding a loss moves people far more than framed as acquiring a gain. In negotiation, showing a counterpart what they stand to LOSE by not agreeing is the single most powerful ethical lever available.",
        deployment: [
          "Reframe your proposal's value as protection against loss: what disappears, degrades, or gets taken by others if they pass?",
          "Make the loss concrete and current — 'what this is already costing you' beats hypothetical future gains.",
          "Deadlines and expiring terms work because they convert a static offer into a prospective loss.",
          "Use honestly: illuminate real losses; never manufacture fake ones.",
        ],
        examples: [
          "Instead of 'this saves you $30K a year': \"Every quarter this waits, roughly $7,500 walks out the door.\"",
          "\"I want to make sure you don't lose the pricing tier you're currently locked into — it doesn't survive the renewal date.\"",
        ],
      },
      {
        id: "no-oriented",
        code: "N-05",
        name: "No-Oriented Questions",
        source: "Chris Voss — Never Split the Difference",
        tagline:
          "'No' makes people feel safe and in control. Design questions where 'no' means yes.",
        science:
          "Voss inverts the classic 'yes ladder': pushing for yes makes people feel cornered and defensive, while 'no' preserves autonomy — after saying no, people relax and become MORE open. Questions engineered so 'no' advances your agenda combine reactance-avoidance with progress. Also the best reply-rate email ever: 'Have you given up on this project?'",
        deployment: [
          "Convert asks into no-format: 'Would it be ridiculous to...?', 'Are you against...?', 'Is it a bad idea if...?'",
          "Use when counterparts have gone silent or defensive — 'no' questions re-engage without pressure.",
          "After they say no (= yes), let them elaborate; don't pounce.",
          "Never chase three yeses in a row — counterparts feel the trap closing and harden.",
        ],
        examples: [
          "\"Would it be a bad idea to run a two-week pilot before deciding?\"",
          "\"Are you against carving out just the first phase to start?\"",
          "Revival email: \"Have you given up on solving this?\"",
        ],
      },
      {
        id: "ackerman",
        code: "N-06",
        name: "Ackerman Bargaining",
        source: "Chris Voss / Mike Ackerman — FBI-refined offer system",
        tagline:
          "65% → 85% → 95% → 100% of your target, with shrinking concessions and a non-monetary close.",
        science:
          "The Ackerman model weaponizes anchoring, reciprocity, and the psychology of diminishing concessions: decreasing increments signal you're being squeezed to your true limit (even when you're not). The final precise, odd number plus a thrown-in non-monetary item makes the counterpart feel they've extracted everything — which is the feeling that closes deals.",
        deployment: [
          "Set your real target price first. Open at 65% of it (if buying; invert if selling).",
          "Plan three raises in advance: to 85%, 95%, then 100% of target — each concession smaller than the last.",
          "Before each raise, extract something or use calibrated questions/empathy — never concede for free.",
          "Make the final number precise and non-round ($4,325, not $4,500), and add a small non-monetary item to signal you're truly at the limit.",
        ],
        examples: [
          "Target $8,000: offer $5,200 → $6,800 → $7,600 → \"$7,935, and I'll handle the transfer paperwork myself. That's genuinely everything I've got.\"",
        ],
      },
      {
        id: "fairness-lever",
        code: "N-07",
        name: "The Fairness Lever",
        source: "Voss; ultimatum-game research (Güth et al.)",
        tagline:
          "'Fair' is the most emotionally loaded word in negotiation. Use it as a shield, defuse it as a weapon.",
        science:
          "Ultimatum-game experiments show people routinely destroy their own economic interest to punish perceived unfairness — fairness is processed emotionally, not rationally. Skilled negotiators harness this: offering fairness proactively builds trust; when 'fair' is hurled at you ('we just want what's fair'), it's usually an attempt to destabilize — name it calmly rather than defend.",
        deployment: [
          "Early on, offer the shield: 'I want you to feel treated fairly at every step. If anything feels off, stop me and we'll fix it.'",
          "When accused ('that's not fair'), don't defend. Mirror and label: 'Fair? It seems like you feel I'm not treating you fairly. Tell me where.'",
          "Ask them to define it: 'What would fair look like to you?' — their answer reveals their real interests.",
          "Never say 'I've given you a fair offer' as a bludgeon — it accuses them of unreasonableness and escalates.",
        ],
        examples: [
          "\"I want you to feel this was fair at every step. If at any point it doesn't, say so and we'll deal with it head-on.\"",
          "Them: 'We just want what's fair.' You: 'It sounds like you feel you're being shortchanged somewhere. Walk me through it.'",
        ],
      },
      {
        id: "reciprocal-concessions",
        code: "N-08",
        name: "Reciprocity of Concessions",
        source: "Robert Cialdini — door-in-the-face research (1975)",
        tagline:
          "A rejected larger request makes the smaller one far harder to refuse.",
        science:
          "Cialdini's classic experiment: asking students to chaperone a zoo trip got 17% compliance — but asking first for a two-year mentoring commitment (rejected), then the zoo trip, tripled compliance to 50%. The retreat from a larger to a smaller request is perceived as a concession, and the norm of reciprocity compels a concession in return. Concessions, like gifts, create debts.",
        deployment: [
          "Open with an ambitious (but not absurd) ask you can retreat from; the retreat itself becomes currency.",
          "Make every concession explicit and labeled — unnoticed concessions earn no reciprocity: 'That's a real stretch for us, but we'll do it.'",
          "Concede slowly and get something each time; never volunteer two concessions in a row.",
          "After any concession, pause and let reciprocity pressure build.",
        ],
        examples: [
          "\"We couldn't do the full program — but a scaled pilot? That we could make work.\" (the fallback was the goal)",
          "\"We can move on the timeline, and that's genuinely painful for us. What can you do on scope?\"",
        ],
      },
      {
        id: "mesos",
        code: "N-09",
        name: "MESOs — Multiple Equivalent Offers",
        source: "Max Bazerman & Deepak Malhotra — Negotiation Genius (Harvard Business School)",
        tagline:
          "Present two or three packages you value equally — their choice is free market research.",
        science:
          "Bazerman and Malhotra's prescription for claiming AND creating value simultaneously: instead of one offer (which gets attacked) present multiple simultaneous packages that differ in structure but are equivalent in value to you. Every response teaches you their priorities — which package they gravitate toward, which elements they push on — without them having to disclose anything. MESOs also make you look flexible while anchoring three times at once, and they convert 'yes/no on your offer' into 'which of your offers', a materially better question.",
        deployment: [
          "Build 2–3 packages that trade different variables (price vs. timeline vs. scope vs. terms) but sit at the same value for you.",
          "Present them together, neutrally: 'Any of these works for us — which comes closest for you?'",
          "Read the response as data: their preferred package and their objections map their true priorities more honestly than any answer to direct questions.",
          "Use their pick as the base for the next round — you're now negotiating structure, not whether to deal.",
        ],
        examples: [
          "\"Option A: full scope, standard timeline, $92K. Option B: full scope, expedited, $105K. Option C: phased scope starting at $60K. All three genuinely work on our end — which is closest to yours?\"",
        ],
      },
      {
        id: "contingency-contracts",
        code: "N-10",
        name: "Contingency Contracts — Betting on Beliefs",
        source: "Bazerman & Malhotra — Negotiation Genius",
        tagline:
          "When you disagree about the future, stop arguing and bet on it: 'If X happens, then Y.'",
        science:
          "Many deadlocks are disagreements about predictions, not preferences — you believe the campaign will lift sales 20%, they believe 5%. Bazerman and Malhotra's move: don't resolve the disagreement, monetize it. A contingency contract ('base fee plus a bonus if lift exceeds 15%') lets both parties bet on their own belief, so BOTH expect to win, and the deal closes on terms each side considers favorable. Bonus effect: contingencies flush out bluffing — a party unwilling to bet on its own confident claims just told you what those claims are worth.",
        deployment: [
          "When you hit a wall over a forecast ('it will/won't work'), stop persuading and propose terms contingent on the outcome.",
          "Structure so each side wins under its OWN prediction: their belief makes the contingent terms cheap for them to accept.",
          "Use it as a lie detector: 'If you're confident it ships by March, you won't mind a per-week delay credit.' Refusal is information.",
          "Make the trigger objectively measurable and third-party verifiable — vague contingencies breed the next dispute.",
        ],
        examples: [
          "\"We see the retention lift differently — so let's not argue. Base price assumes your number. If it comes in above 15%, the success fee kicks in. You only pay more in the world where you made more.\"",
        ],
        caution:
          "Never accept a contingency against a counterpart who controls the measured outcome or has better information about it than you do.",
      },
      {
        id: "first-offer-perspective",
        code: "N-11",
        name: "First-Offer Science & Perspective-Taking",
        source: "Adam Galinsky & Thomas Mussweiler (2001); Galinsky et al. — perspective-taking studies",
        tagline:
          "First offers explain ~50%+ of final outcomes — unless the responder thinks about the right two things.",
        science:
          "Galinsky and Mussweiler quantified the first-mover advantage: first offers correlate massively with final settlements, often explaining half or more of the variance in outcomes. But the same research found the antidote: responders who focused on their counterpart's alternatives/reservation price, or on their own target, negotiated as if the anchor never happened. A companion finding across Galinsky's work: perspective-TAKING (coolly inferring what the other side thinks and wants) improves deal outcomes, while empathizing (absorbing what they feel) leads to giving too much away. Think their thoughts; don't catch their feelings at the table.",
        deployment: [
          "Move first when informed — and set your aspiration before the meeting, in writing, because the first number you internalize anchors YOU.",
          "When anchored by them, immediately shift focus to your prepared counter-anchors: their BATNA, your target, the objective comparables — then respond from those, not from their number.",
          "Prepare the perspective-taking brief: what does the deal look like from their chair — their alternatives, deadlines, and scorecard? Accuracy here converts directly into terms.",
          "Keep the boundary: understand their pressures fully, but negotiate against your target, not their stress.",
        ],
        examples: [
          "Anchored at $40K when you planned $75K: \"Set that number aside for a second — here's the range the comparables actually support, and why.\" [re-anchor from prepared data]",
          "Prep sheet, every deal: their likely walk-away, my target, my first offer, my evidence. Filled in BEFORE hearing their number.",
        ],
      },
    ],
  },
  {
    id: "psychology",
    code: "05",
    name: "Psychology",
    brief:
      "The permanent operating system beneath every conversation — the biases and levers that govern human judgment.",
    principles: [
      {
        id: "loss-aversion",
        code: "P-01",
        name: "Loss Aversion",
        source: "Kahneman & Tversky — Prospect Theory (1979)",
        tagline: "People feel loss roughly twice as intensely as equivalent gain.",
        science:
          "The cornerstone of behavioral economics: the pain of losing $100 outweighs the pleasure of gaining $100 by a factor of about 2 to 2.5. This asymmetry drives status-quo bias, endowment effects, sunk-cost escalation, and risk-seeking to avoid losses. Whoever controls the loss frame controls the decision's emotional weight.",
        deployment: [
          "Frame stakes as protecting what people already have, not acquiring what they don't.",
          "Audit your proposals: does the other side perceive change as a gain or a threatened loss? Their resistance usually maps to a hidden loss.",
          "To move someone off the status quo, make standing still the risky option.",
          "Trial periods and pilots work because they convert your ask into their possession — which they then don't want to lose.",
        ],
        examples: [
          "\"You've built a reputation for shipping on time. This is the first project that puts that at risk.\"",
          "\"Try it for thirty days. If it doesn't earn its place, pull it out.\" (endowment does the rest)",
        ],
      },
      {
        id: "reciprocity",
        code: "P-02",
        name: "Reciprocity",
        source: "Robert Cialdini — Influence; Regan's 1971 Coke experiment",
        tagline: "Give first, and give something personalized and unexpected.",
        science:
          "The reciprocity norm is universal across human cultures: receiving creates an uncomfortable indebtedness that people act to discharge — often repaying far more than they received (in Regan's study, an unrequested 10-cent Coke doubled purchases of raffle tickets). The effect amplifies when the gift is meaningful, personalized, and unexpected.",
        deployment: [
          "Be first to give: information, help, introductions, credit, concessions — before you need anything.",
          "Personalize the give; generic favors create weak debts.",
          "When thanked, never say 'it was nothing' — say 'you'd do the same for me', which affirms the reciprocal relationship.",
          "Give without immediate strings; ledger-keeping too obviously destroys the effect.",
        ],
        examples: [
          "\"I saw this analysis and thought of your Q3 problem — no agenda, just thought it would help.\"",
          "\"Happy to intro you to the person who solved this at scale. Want me to connect you?\"",
        ],
      },
      {
        id: "commitment-consistency",
        code: "P-03",
        name: "Commitment & Consistency",
        source: "Cialdini; Freedman & Fraser — foot-in-the-door (1966)",
        tagline:
          "People strain to act consistently with what they've said and done — especially publicly and in writing.",
        science:
          "Freedman & Fraser found homeowners who agreed to a small sign were 4x more likely to later accept a massive one. Once we take a position — especially actively, publicly, or in writing — identity pressure drives consistency with it. Small commitments are the gateway to large ones; self-authored commitments bind hardest.",
        deployment: [
          "Start with small, easy commitments in the direction you want; escalate gradually.",
          "Get commitments stated actively — spoken aloud or written — not just nodded at.",
          "Ask people to articulate WHY they're committing; self-generated reasons cement it.",
          "Invoke prior commitments gently when momentum stalls: 'You said X mattered most — does it still?'",
        ],
        examples: [
          "\"Before we scope anything big — would you be open to a 30-minute working session?\" (small yes first)",
          "\"Can you send a quick note confirming the direction so I can mobilize the team?\" (written commitment)",
        ],
      },
      {
        id: "social-proof",
        code: "P-04",
        name: "Social Proof",
        source: "Cialdini; Milgram's sidewalk studies; hotel-towel experiments",
        tagline:
          "Under uncertainty, people copy what similar others do — 'people like you chose this.'",
        science:
          "The hotel-towel studies showed reuse jumped 33% when the sign said 'guests in this room' reused towels — similarity is the multiplier. Social proof is strongest when people are uncertain and when the reference group resembles them. The negative form is equally potent and dangerous: publicizing that many do the wrong thing normalizes it.",
        deployment: [
          "Cite what similar others — same role, same industry, same situation — have done, with specifics.",
          "Use peer numbers when adoption is genuinely strong; use trending momentum ('fastest-growing choice') when it's not yet majority.",
          "Never advertise the prevalence of the behavior you're fighting ('most people ignore this policy' backfires).",
          "Testimonials from relatable peers beat endorsements from impressive strangers.",
        ],
        examples: [
          "\"Three teams your size hit the same wall — all three solved it this way.\"",
          "\"Of the managers who tried the pilot, 80% kept it after the trial.\"",
        ],
      },
      {
        id: "authority",
        code: "P-05",
        name: "Authority & Credible Expertise",
        source: "Cialdini; Milgram's obedience research",
        tagline:
          "People defer to credible expertise — establish it before you need it, ideally via a third party.",
        science:
          "Milgram demonstrated the extraordinary human deference to perceived authority. In influence terms, credibility = expertise x trustworthiness. Counterintuitively, admitting a weakness before your strongest point raises trustworthiness (the 'blemish effect'), and having your credentials introduced by someone else works dramatically better than self-promotion.",
        deployment: [
          "Arrange third-party introductions of your expertise ('She's the one who rebuilt the pipeline at...') — never recite your own résumé.",
          "Signal expertise through specific, verifiable detail rather than titles.",
          "Concede a small weakness before your core argument: 'This won't solve X — what it will do is...'",
          "Borrow authority: cite the research, the recognized expert, the precedent.",
        ],
        examples: [
          "\"Full disclosure: this approach is slower to start. Where it wins — and why the data supports it — is everything after month two.\"",
          "Ask a colleague: \"When you intro me, mention the Meridian project — it's doing the work my title can't.\"",
        ],
      },
      {
        id: "scarcity",
        code: "P-06",
        name: "Scarcity & Exclusivity",
        source: "Cialdini; Worchel's cookie-jar experiments (1975)",
        tagline:
          "Value tracks availability. Rare, exclusive, and expiring things command desire.",
        science:
          "Worchel's experiment: identical cookies were rated far more desirable from a jar of two than a jar of ten — and most desirable when the jar had just gone from plentiful to scarce. Scarcity works through loss aversion (missing out is a loss) and through inference (rare = valuable). Newly scarce beats always-scarce; exclusive information is the sharpest form.",
        deployment: [
          "State genuine limits — capacity, windows, availability — plainly and early. Real scarcity needs no theatrics.",
          "Emphasize what's unique about your offer that cannot be obtained elsewhere.",
          "Share exclusive information as such: 'This isn't public yet...'",
          "Never fabricate scarcity; discovered falsehood destroys all accumulated trust permanently.",
        ],
        examples: [
          "\"I can hold this slot until Thursday — after that it goes to the waitlist, and that's genuinely out of my hands.\"",
          "\"We only take on two of these engagements a quarter. One is spoken for.\"",
        ],
      },
      {
        id: "peak-end",
        code: "P-07",
        name: "The Peak-End Rule",
        source: "Kahneman — experienced vs. remembered utility research",
        tagline:
          "People remember an experience by its emotional peak and its ending — not its average.",
        science:
          "Kahneman's studies (including the famous colonoscopy experiments) show memory of an experience is dominated by its most intense moment and its final moment, with duration largely neglected. Every meeting, negotiation, and relationship interaction is remembered this way. Whoever engineers the peak and the end controls the memory — and the memory is what they act on later.",
        deployment: [
          "Design one deliberate high point into every important interaction — an insight, a moment of genuine connection, an unexpected give.",
          "End on your strongest note: recap wins, express genuine appreciation, land a forward-looking commitment. Never let meetings fizzle out.",
          "Deliver bad news early-to-middle, never last.",
          "In long relationships, a strong recovery after a low becomes the remembered peak — repair loudly and well.",
        ],
        examples: [
          "\"Before we wrap — the thing that struck me most today was your point about X. That reframes the whole project for me.\" (peak + end in one)",
          "Closing note same-day: two lines of specific appreciation and the single next step.",
        ],
      },
      {
        id: "franklin-effect",
        code: "P-08",
        name: "The Ben Franklin Effect",
        source: "Jecker & Landy (1969); Franklin's autobiography",
        tagline:
          "Someone who does YOU a favor likes you more afterward — ask for small help.",
        science:
          "Jecker and Landy confirmed Franklin's famous maneuver: participants asked to do the experimenter a favor rated him more likable afterward. The mechanism is cognitive dissonance — 'I helped him, therefore I must like him.' Asking for a small, easy favor doesn't spend relationship capital; it creates it.",
        deployment: [
          "Ask rivals, skeptics, and new contacts for small, low-cost favors: an opinion, a book title, a quick sanity-check.",
          "Make the favor easy and flattering to grant — it should invoke their expertise or taste.",
          "Thank them specifically and report back on the outcome; the loop completion cements the effect.",
          "Don't hoard self-sufficiency; refusing all help keeps people at distance.",
        ],
        examples: [
          "\"You have better instincts on this than anyone I know — can I get ninety seconds of your read on something?\"",
          "\"That book you mentioned — could you send me the title? I want to read what you're reading.\"",
        ],
      },
      {
        id: "curse-of-knowledge",
        code: "P-09",
        name: "Curse of Knowledge & Fluency",
        source: "Newton's tappers-listeners study (1990); Alter & Oppenheimer — processing fluency",
        tagline:
          "Once you know something, you can't imagine not knowing it. Simple messages win because easy-to-process feels TRUE.",
        science:
          "Newton's experiment: 'tappers' predicted listeners would recognize 50% of tapped songs; actual rate was 2.5%. Experts systematically overestimate how much others understand. Compounding this, fluency research shows that messages that are easier to process are judged more true, more likable, and less risky. Complexity doesn't signal intelligence to the listener — it signals risk.",
        deployment: [
          "Translate every message to the listener's altitude: concrete words, one idea per sentence, zero insider jargon.",
          "Use analogies to things they already understand deeply.",
          "Test comprehension by asking them to play it back, not by asking 'does that make sense?'",
          "Make the ask itself frictionless: one clear next step, not a menu of seven.",
        ],
        examples: [
          "Instead of 'we need to refactor the ingestion architecture': \"The pipes feeding our data are held together with tape. I want six weeks to replace them before something bursts.\"",
          "\"If you had to explain this decision to your team in one sentence, what would you say?\" (comprehension check)",
        ],
      },
      {
        id: "pygmalion",
        code: "P-10",
        name: "The Pygmalion Effect",
        source: "Rosenthal & Jacobson — classroom studies (1968)",
        tagline:
          "People rise or sink to the expectations you genuinely hold of them — label people UP.",
        science:
          "Rosenthal's experiments showed that teachers' (falsely induced) high expectations of random students produced real IQ gains — expectations leak through tone, attention, and opportunity, and become self-fulfilling. In influence terms: assigning someone a positive label or reputation to live up to ('you're one of the most thorough people here') reliably shifts their behavior toward it (also Cialdini's 'altercasting').",
        deployment: [
          "Publicly attribute to people the qualities you want more of — specifically and credibly, anchored in something real they did.",
          "Frame requests as consistent with their best identity: 'You're exactly the kind of person who...'",
          "Hold visibly high expectations paired with visible confidence they'll be met ('high standards + belief' is the strongest feedback frame per Yeager's research).",
          "Never label down, even in frustration — negative labels are equally self-fulfilling.",
        ],
        examples: [
          "\"I'm bringing this to you because you're the most rigorous reviewer we have — I need that rigor here.\"",
          "\"I'm giving you this feedback because I have very high standards and I'm convinced you can meet them.\"",
        ],
      },
      {
        id: "mere-exposure",
        code: "P-11",
        name: "The Mere-Exposure Effect",
        source: "Robert Zajonc — 'Attitudinal Effects of Mere Exposure' (1968)",
        tagline:
          "Familiarity alone breeds liking — repeated neutral contact shifts preference without a single argument.",
        science:
          "Zajonc demonstrated that simple repeated exposure to a stimulus — faces, words, symbols, even nonsense syllables — increases liking for it, with no persuasion involved; the effect appears even when exposure is subliminal. Moreland and Beach's classroom study made it practical: women who silently attended more lectures were rated more attractive and likable by classmates who never spoke to them. The mechanism is processing fluency: familiar things are easier to process, and ease is misread as positive affect. Influence implication: presence is a strategy — visibility compounds before competence ever gets evaluated.",
        deployment: [
          "Engineer benign repeated contact before you need anything: brief useful check-ins, showing up at the standing meeting, short relevant shares.",
          "Space exposures rather than batching: five two-minute touchpoints across a month outperform one ten-minute meeting.",
          "Keep early exposures neutral-to-positive; mere exposure amplifies the existing valence — repeated annoying contact makes you familiarly annoying.",
          "Apply to ideas too: float a proposal informally two or three times before the decision meeting — by the vote, it feels like an old friend.",
        ],
        examples: [
          "Three weeks before the pitch: a short relevant article forwarded, a hallway question, a two-line note of appreciation. By meeting day, you're a known quantity.",
          "\"You've heard me mention the consolidation idea a few times — today I want to actually walk through it.\" (the audience nods; it's already familiar)",
        ],
      },
      {
        id: "unity",
        code: "P-12",
        name: "Unity — The Shared-Identity Lever",
        source: "Robert Cialdini — Pre-Suasion (the seventh principle)",
        tagline:
          "Beyond liking: people say yes to those they consider one of US — shared identity outguns shared preferences.",
        science:
          "Cialdini added a seventh principle to his original six: unity. Liking is 'people similar to me'; unity is 'people who share an identity with me' — family, place, tribe, cause, co-created experience. His evidence: questionnaire compliance jumped when the requester merely claimed the same university identity; Warren Buffett's most persuasive shareholder letters invoke family ('what I would tell my sisters'). Unity is built through two channels: being together (kinship language, shared origins, in-group markers) and acting together (co-creation, synchrony, shared struggle — see the IKEA effect's social twin).",
        deployment: [
          "Surface genuine shared identities early: same city, same industry scars, same alma mater, same mission — identity markers, not just common interests.",
          "Use 'we' language honestly where a real shared group exists: 'people like us', 'as fellow founders' — the frame recruits in-group norms.",
          "Create unity where none exists yet by acting together: co-author the plan, run the pilot jointly, share a hard deadline shoulder-to-shoulder.",
          "Borrow the family channel with care: advice framed as 'what I'd tell my own brother' invokes the strongest trust schema humans have.",
        ],
        examples: [
          "\"We've both rebuilt a team after a bad quarter — so I'll give it to you the way I'd want it: straight.\"",
          "\"Honestly, this is the advice I'd give my own sister if she were deciding this.\"",
        ],
        caution:
          "Fabricated kinship is the fastest-detected manipulation there is. Invoke only identities you genuinely hold.",
      },
      {
        id: "emotional-intelligence",
        code: "P-13",
        name: "The Emotional Intelligence Loop",
        source: "Daniel Goleman — Emotional Intelligence; Working with Emotional Intelligence",
        tagline:
          "Self-awareness → self-regulation → empathy → skilled relationships: the base rate under every other technique on these sheets.",
        science:
          "Goleman's synthesis of affective neuroscience and competence research established emotional intelligence as the substrate of influence: his analyses of leadership competency models found EI-based capabilities mattered roughly twice as much as IQ and technical skill combined for outstanding performance, with the gap widening at senior levels. The architecture is sequential: self-awareness (recognizing your emotion as it arises) enables self-regulation (choosing the response instead of being chosen by it — critical because of the 'amygdala hijack', where the threat system seizes control before the cortex weighs in); those two enable accurate empathy (you can't read others through your own emotional static); and all three enable relationship skill. Emotions are also contagious — leaders' moods propagate through groups measurably — making your own state management a group intervention, not private hygiene.",
        deployment: [
          "Name your state in real time — 'I'm getting defensive' — the act of recognition itself re-engages the cortex and buys the choosing space (see affect labeling).",
          "Install a hijack protocol before you need it: the 6-second pause, one slow breath, or a scripted phrase ('let me think about that') — decided in calm, executed in heat.",
          "Treat your mood as broadcast infrastructure: before high-stakes rooms, deliberately set the state you want the room to catch.",
          "Train the sequence in order: regulation without awareness is suppression, and empathy without regulation is absorption. The loop only works forward.",
        ],
        examples: [
          "\"I notice I'm reacting to the tone more than the content — give me a second to separate them, because the content deserves a fair answer.\"",
          "Pre-meeting reset after a bad morning: two minutes, name the residue ('still irritated about the email'), choose the state to walk in with — because the team will catch whichever one enters.",
        ],
      },
    ],
  },
];

export const totalPrinciples = phases.reduce(
  (sum, p) => sum + p.principles.length,
  0,
);
