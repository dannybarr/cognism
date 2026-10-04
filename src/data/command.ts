import type { Phase } from "./principles";

export const commandPhases: Phase[] = [
  {
    id: "power-status",
    code: "13",
    name: "Power & Status",
    brief:
      "The invisible hierarchy in every room — how power is actually acquired, how status is conferred, and how both are lost.",
    principles: [
      {
        id: "pfeffer-power-rules",
        code: "K-01",
        name: "Power Is Taken, Not Given",
        source: "Jeffrey Pfeffer — Power: Why Some People Have It (Stanford GSB)",
        tagline:
          "Performance alone doesn't produce power. Visibility, resources, and relationships with the powerful do.",
        science:
          "Pfeffer's decades of organizational research dismantle the 'just world' assumption that good work gets noticed: promotion and influence correlate more strongly with visibility to decision-makers, control of resources, and network position than with measured performance. His data shows people systematically underinvest in power-building because it feels political — and then are outmaneuvered by those who don't share the squeamishness. The remedy isn't cynicism; it's treating influence infrastructure (sponsors, visibility, resource control) as a legitimate part of the job.",
        deployment: [
          "Make your work visible deliberately: brief the people whose opinion determines your trajectory — don't assume results speak; they don't have a voice.",
          "Build relationships with the powerful before you need them, and with people OUTSIDE your natural circle — weak ties carry the opportunities.",
          "Acquire resources others depend on: budget, information, access, scarce skills. Dependence is the raw material of power.",
          "Ask for what you want, directly and specifically — Pfeffer's data shows the biggest single predictor of getting resources is asking for them.",
        ],
        examples: [
          "\"I'd like fifteen minutes to walk you through what my team shipped this quarter and where I want to take it — I don't want you hearing it secondhand.\"",
          "\"I want the platform migration. I'm the right owner for it, and here's why.\" (a direct ask, not a hint)",
        ],
        caution:
          "Power built without delivering value curdles into pure politics and is eventually audited. Pair every visibility move with substance worth seeing.",
      },
      {
        id: "fragale-status",
        code: "K-02",
        name: "Status Before Power",
        source: "Alison Fragale — Likeable Badass (UNC organizational psychology)",
        tagline:
          "Power is control over resources; status is being respected. Get status first — power without it breeds sabotage.",
        science:
          "Fragale's research separates two currencies people constantly conflate: power (control over valued resources) and status (the respect and regard others grant you). Her key finding: power exercised without status triggers resentment and covert resistance, while status makes every unit of power cheaper to use — people comply willingly with those they respect. Status is granted through two perceptions, assertiveness (you can advance things) and warmth (you're on our side), and crucially it is conferred by others — which means it's built through what you do for the group, told through the stories others repeat about you.",
        deployment: [
          "Audit which you're missing: if people comply but complain behind your back, you have power without status — invest in warmth and visible contribution.",
          "Do small, memorable favors that showcase your competence: help that only you could have given builds both warmth and assertiveness at once.",
          "Manage your 'other-created' reputation: give allies specific, repeatable stories about you ('she's the one who caught the error that saved the launch').",
          "Never trade status for power in negotiations — taking the bigger title while alienating the room is buying a car with the engine removed.",
        ],
        examples: [
          "\"I know the analytics tooling cold — send me the gnarliest query and I'll have it back to you by lunch.\" (a favor that builds status)",
          "Priming your introducer: \"When you intro me to the VP, mention the vendor negotiation — that story does more than my title.\"",
        ],
      },
      {
        id: "keltner-paradox",
        code: "K-03",
        name: "The Power Paradox",
        source: "Dacher Keltner — The Power Paradox (UC Berkeley)",
        tagline:
          "We gain power through empathy and generosity — then power itself erodes the very skills that earned it.",
        science:
          "Keltner's twenty years of studies find that power is granted, not seized: groups elevate the people who advance the group's interests — the empathetic, generous, open ones. The paradox: the experience of holding power measurably degrades those exact capacities. Elevated power predicts reduced mirroring of others, more interrupting, more rudeness, and more self-serving behavior (in his studies, higher-status individuals literally took more cookies from a shared plate and were more likely to cut off pedestrians while driving). Power is a neurological intoxicant — and the fall from it is usually self-inflicted.",
        deployment: [
          "Treat empathy as maintenance, not just acquisition: schedule genuine listening with people who have no power over you — that's where the erosion shows first.",
          "Install tripwires: ask a trusted peer to flag when you interrupt more, dismiss faster, or stop asking questions. You will not notice it yourself.",
          "Practice the small courtesies deliberately as you rise — names, thanks, credit — precisely because power makes them feel optional.",
          "Give power away visibly: delegation, credit, and platform-sharing renew the group's reason for granting you power in the first place.",
        ],
        examples: [
          "\"You have standing permission to tell me when I'm steamrolling — and the first time I punish you for it, revoke the permission publicly.\"",
          "In every win announcement, name the people whose work carried it — before naming the result.",
        ],
      },
      {
        id: "reputation-guard",
        code: "K-04",
        name: "Guard the Reputation Asset",
        source: "Robert Greene — 48 Laws (Law 5); reputation-market research",
        tagline:
          "Reputation is the one asset that negotiates for you in rooms you never enter — build it deliberately, defend it instantly.",
        science:
          "Greene's Law 5 ('So much depends on reputation — guard it with your life') matches the economics of reputation markets: because most decisions about you are made in your absence, your reputation IS you for practical purposes — it determines which opportunities even reach you. Research on trust repair shows why defense must be fast: negative information is weighted more heavily than positive (negativity bias), spreads farther, and once a reputational frame sets, confirmation bias makes every subsequent ambiguous act read as evidence for it. An unanswered attack becomes the accepted record.",
        deployment: [
          "Choose the one or two words you want attached to your name ('rigorous', 'unflappable', 'ships') and make every visible act deposit into them.",
          "Answer reputational attacks immediately and factually — silence is read as confirmation. Correct the record where the record lives.",
          "Never attack another's reputation with insinuation; it marks YOU as dangerous to everyone watching. Beat rivals with visible work instead.",
          "Protect the keystone: identify which single quality your reputation rests on, and never trade it for a convenience ('I'll just miss this one deadline').",
        ],
        examples: [
          "\"I heard the project described as 'over budget' in the leads meeting. Here are the actual numbers — I'd appreciate the correction reaching the same room.\"",
          "Prep for a new arena: \"You know my work — when it comes up, the thing I'd want mentioned is the turnaround on the Meridian account.\"",
        ],
      },
      {
        id: "status-conferral",
        code: "K-05",
        name: "Competence Plus Generosity",
        source: "Cameron Anderson — status research (UC Berkeley); Hardy & Van Vugt — competitive altruism",
        tagline:
          "Groups grant status to those who are visibly competent AND visibly generous with it — one without the other stalls.",
        science:
          "Anderson's studies of status in groups find that status is granted for perceived value to the group, and that perception runs on two signals: competence (you can contribute) and generosity (you will contribute — to us). Competitive-altruism research (Hardy & Van Vugt) shows public generosity is a status strategy in itself: the most giving members of groups are consistently accorded the highest regard and chosen for leadership. Confidence acts as a competence signal even when miscalibrated — overconfident members gain status (Anderson's 'status enhancement' effect) — which is why calibrated confidence, displayed early, matters strategically.",
        deployment: [
          "Contribute early in any new group: the first meetings set your status equilibrium, and equilibria are sticky. Speak with prepared substance in meeting one.",
          "Make your generosity observable but not performative: help in channels others can see; let the helped person tell the story.",
          "Display confidence through calibrated commitment ('I'm confident in this number; here's the one I'm not sure of') — precision beats bravado over time.",
          "Raise others' status publicly and specifically — status is not zero-sum, and conferring it is one of the highest-status behaviors there is.",
        ],
        examples: [
          "First week on a new team: \"I dug into the backlog over the weekend — three quick wins nobody owns yet. I'll take the first if useful.\"",
          "\"Most of you haven't worked with Dana — she's the reason the audit went clean. Listen when she flags something.\"",
        ],
      },
    ],
  },
  {
    id: "influence-without-authority",
    code: "14",
    name: "Influence Without Authority",
    brief:
      "Move bosses, peers and partners you don't control: understand what they need, trade in what they value, and line up support before the decision.",
    principles: [
      {
        id: "managing-your-boss",
        code: "U-01",
        name: "Managing Your Boss",
        source:
          "John Gabarro & John Kotter — Managing Your Boss (Harvard Business Review, 1980)",
        tagline:
          "The relationship with your boss is mutual dependence. Manage it deliberately, around their goals, pressures and working style.",
        science:
          "Gabarro and Kotter, both Harvard Business School professors, observed that effective managers treat the relationship with their boss as something to manage, not merely endure. The logic is mutual dependence: bosses depend on subordinates for cooperation, reliability and honesty, while subordinates depend on bosses for connections to the rest of the organization, for priorities and for critical resources. Managing that relationship starts with understanding the boss (their goals, pressures, strengths, weaknesses and preferred working style) and yourself, then building a relationship that fits both: compatible styles, clear mutual expectations, a steady flow of information, dependability and honesty, and careful use of the boss's time. One of their sharpest distinctions is between 'readers', who want information in writing so they can study it first, and 'listeners', who want it in person so they can ask questions. Delivering the right content in the wrong format is a common and avoidable failure.",
        deployment: [
          "Map your boss's world: their top goals, the pressures on them from above, and what they need from you to succeed.",
          "Learn whether they are a reader or a listener, and send important material in that form: a memo ahead of the meeting, or a conversation first and paper after.",
          "Agree expectations explicitly instead of guessing: what they want to hear about, how often, and what you can decide alone.",
          "Be dependable and honest: no surprises, bad news early, and never spend their time on what you could resolve yourself.",
        ],
        examples: [
          "\"Before I build the plan, can I check what you're being measured on this quarter? I want mine to make yours easier.\"",
          "For a reader: \"You'll have a one-page summary tonight, so you can read it before we talk on Thursday.\"",
        ],
        caution:
          "Managing up is not flattery or telling the boss what they want to hear. Gabarro and Kotter's point is mutual effectiveness, and a relationship built on managed impressions breaks the first time the news is bad.",
      },
      {
        id: "currencies-of-exchange",
        code: "U-02",
        name: "Currencies of Exchange",
        source:
          "Allan Cohen & David Bradford — Influence Without Authority",
        tagline:
          "Influence without authority runs on trade. Find what the other person values and pay in that currency.",
        science:
          "Cohen and Bradford built their model on the law of reciprocity: people expect good and bad turns to be repaid over time. When you need cooperation from people you don't manage, you trade. The difficulty is that people value different things, so they describe five families of 'currencies': inspiration (vision, doing something that matters), task (resources, help, information, challenge), position (recognition, visibility, reputation), relationship (acceptance, closeness, support) and personal (gratitude, ownership, comfort). Their six-step process: assume everyone is a potential ally; clarify your own goals; diagnose the other person's world, including their pressures and how they are measured; identify the currencies they value and the ones you can offer; attend to the state of the relationship; and influence through give and take. The most common mistake is offering what you would value instead of what they do.",
        deployment: [
          "Before asking, diagnose their world: what they're measured on, who puts pressure on them, and what they worry about.",
          "Name the currency they value most (inspiration, task, position, relationship or personal) and what you can genuinely offer in it.",
          "Offer first where you can, and make the exchange explicit when the relationship is new.",
          "Keep the account balanced over time, and never write anyone off: today's obstacle can be next quarter's ally.",
        ],
        examples: [
          "To a colleague who values visibility: \"If your team pilots this, I'll make sure the results go to the leadership review under your name.\"",
          "To one who values the task: \"This is the hardest data problem we've got, and nobody's cracked it yet. I think you'd enjoy it.\"",
        ],
        caution:
          "An explicit trade can cheapen a close relationship, where the currency is usually the relationship itself. And trading on promises you can't keep spends reputation faster than any favor earns it.",
      },
      {
        id: "coalition-before-the-meeting",
        code: "U-03",
        name: "Build the Coalition Before the Meeting",
        source:
          "David Lax & James Sebenius — 3-D Negotiation (Harvard Business School)",
        tagline:
          "Most decisions are won before the meeting. Map back from the final yes and bring people on board in the right order.",
        science:
          "Lax and Sebenius argue that most negotiators fixate on the first dimension, tactics at the table, and neglect the third: setup. Before the decisive conversation, effective dealmakers make sure the right parties are involved, in the right sequence, addressing the right interests, and facing the right consequences if there is no deal. Their tool is backward mapping, borrowed from project planning: start from the final agreement you need, identify whose support the most critical party will look for, and work backwards to decide whom to approach first. Approaching the hardest and most important person first often fails; arriving with the people they trust already on board changes the conversation. The same logic applies inside organizations: a proposal that meets the decision-making meeting cold is being negotiated in the worst possible setting.",
        deployment: [
          "Write down who must say yes, and whose view each of those people will check before they do.",
          "Map backwards: approach the people whose support makes the next person's yes easier, before you reach the decisive one.",
          "Meet key stakeholders one to one before the group meeting, so objections surface where they can be answered, not in public.",
          "Check the setup, not just the pitch: are the right parties involved, and is the alternative to agreeing clear to everyone?",
        ],
        examples: [
          "Before asking the CFO for budget: \"I've walked the finance partner and the head of operations through the numbers. Both think it holds up.\"",
          "\"Can I get fifteen minutes before Tuesday's review? I'd rather hear your concerns now than discover them in the room.\"",
        ],
        caution:
          "Pre-wiring a decision becomes backroom politics if it shuts out people who should have a voice. Sequence the conversations, but don't hide them: the aim is a better-informed decision, not an ambush.",
      },
      {
        id: "more-persuasive-than-you-think",
        code: "U-04",
        name: "You're More Persuasive Than You Think",
        source:
          "Francis Flynn & Vanessa Lake — 'If You Need Help, Just Ask' (2008); Vanessa Bohns (2016) review",
        tagline:
          "People say yes to direct requests for help far more often than you predict. Ask.",
        science:
          "Flynn and Lake asked participants to predict how many strangers they would need to approach before enough agreed to a request, such as filling out a questionnaire or lending a phone, and then sent them out to ask. Requesters consistently underestimated compliance, in the first studies by as much as half. Bohns's 2016 review of the effect, drawing on studies in which participants made requests of more than 14,000 strangers, found requesters underestimated how often people said yes by an average of 48 percent. The cause is a perspective gap: askers focus on what helping costs, while the person being asked feels the social cost of saying no, which is awkward and uncomfortable. Because that awkwardness is strongest in person, Bohns and colleagues also found requests are far less persuasive over email than people expect.",
        deployment: [
          "Ask directly and specifically: who, what and by when. Vague requests are easy to decline.",
          "For requests that matter, ask in person or on a call rather than by email.",
          "Stop refusing on other people's behalf ('they'll be too busy'). Let them decide.",
          "Remember the flip side: people find it hard to say no to you, so make declining easy when the request is large.",
        ],
        examples: [
          "Instead of not asking at all: \"Would you be willing to spend twenty minutes reviewing my draft this week?\"",
          "Walking over to a colleague's desk instead of sending the same request as a message.",
        ],
        caution:
          "The effect works because saying no is socially costly, which makes it easy to pressure people into things they don't want. For big or personal requests, give a genuine exit: 'It's completely fine if not.'",
      },
      {
        id: "three-networks",
        code: "U-05",
        name: "Three Networks",
        source:
          "Herminia Ibarra & Mark Lee Hunter — How Leaders Create and Use Networks (Harvard Business Review, 2007)",
        tagline:
          "Operational networks get today's work done. Strategic networks shape what comes next. Rising leaders under-invest in the second.",
        science:
          "Ibarra and Hunter studied 30 managers making the transition into leadership and distinguished three kinds of networking. Operational networking builds the ties you need to do your current job: mostly internal, and shaped by routine, short-term demands. Personal networking is largely external: discretionary links to people outside the workplace who share your interests, useful for development, referrals and perspective. Strategic networking faces outward and toward the future: lateral and vertical ties, inside and outside the firm, to the stakeholders who shape where the business is going. The transition into leadership requires a network that reorients externally and toward the future, and that is the hard part: it means moving from hands-on functional contribution to the more ambiguous work of building and working through relationships whose payoff is indirect.",
        deployment: [
          "Audit your contacts by type: who helps you do today's job, who develops you, and who shapes where your field or company is heading.",
          "Move time from operational to strategic: delegate enough routine work to free a few hours a month for outward-facing conversations.",
          "Build strategic ties around a genuine agenda: bring a question, an insight or help, not just a request for coffee.",
          "Use existing hubs such as cross-functional projects, industry groups and alumni networks, rather than relying on cold outreach.",
        ],
        examples: [
          "\"I'm trying to understand where procurement is heading over the next two years. Could I buy you lunch and hear how you see it?\"",
          "Volunteering for the cross-functional pricing review because it puts you in the room with finance, sales and the COO's office.",
        ],
        caution:
          "Networks built only on usefulness feel transactional and decay quickly. The durable ones rest on repeated, genuine exchange (see Give Without Keeping Score).",
      },
    ],
  },
  {
    id: "frame-control",
    code: "15",
    name: "Frame Control & Pitching",
    brief:
      "Every encounter runs inside a frame — whoever owns it owns the meaning of everything said within it.",
    principles: [
      {
        id: "frame-collision",
        code: "G-01",
        name: "Frame Collision & Ownership",
        source: "Oren Klaff — Pitch Anything",
        tagline:
          "When frames meet, the stronger absorbs the weaker — and no amount of argument beats a lost frame.",
        science:
          "Klaff's operating thesis, drawn from thousands of capital-raising pitches: every social encounter is a collision of frames (perspectives loaded with power), and one frame always wins — instantly, before any content is exchanged. Common hostile frames: the power frame (dismissiveness, making you wait, checking a phone), the analyst frame (drowning the big idea in detail demands), and the time frame ('you've got ten minutes'). Facts do not beat frames; frames are pre-rational. The counter is never argument — it's a frame-disrupting act: mild defiance, humor, or a small denial that breaks the expected script of the subordinate.",
        deployment: [
          "Diagnose the frame in the first seconds: who is acting as the prize, who controls time, whose questions are being answered?",
          "Meet a power frame with small, playful defiance — never hostility, never compliance: a light refusal to follow their script resets the collision.",
          "Break the analyst frame by owning altitude: 'the details are in the appendix and my analyst will walk yours through them — the decision in this room is about the direction.'",
          "Never present INTO a broken frame — fix the frame first or reschedule. Content delivered from the low-status position is discounted before it's heard.",
        ],
        examples: [
          "They take a call mid-pitch. You stop, close the laptop, and wait — resuming only when attention returns: \"This part's the reason you took the meeting. Ready?\"",
          "\"Ten minutes? Perfect — I only need eight. But I need them uninterrupted.\" (accepting the constraint while seizing its terms)",
        ],
        caution:
          "Frame moves are seasoning, not the meal. Defiance without substance is arrogance, and it collapses the moment content is demanded.",
      },
      {
        id: "luntz-words",
        code: "G-02",
        name: "It's What They Hear",
        source: "Frank Luntz — Words That Work",
        tagline:
          "It's not what you say, it's what people hear — the same policy lives or dies by its label.",
        science:
          "Luntz's decades of instant-response polling and focus groups established that word choice alone reshapes judgment of identical substance: 'estate tax' polls differently from 'death tax'; 'drilling for oil' differently from 'energy exploration'; 'gaming' differently from 'gambling'. His ten rules of effective language are empirically grounded: small words beat big ones, brevity beats length, credibility rides on consistency, novelty and sound matter, and aspiration outsells process. The deeper law: listeners don't receive your intent — they receive their own associations with your words, so the composition unit is the hearer's reaction, not the speaker's meaning.",
        deployment: [
          "Test your key phrase against its received meaning: what does this word trigger in THIS audience? 'Restructuring' means opportunity to you and layoffs to them.",
          "Choose the smallest common word that carries the meaning — comprehension is a precondition of persuasion, and fluency reads as truth.",
          "Name things before others name them: the first sticky label usually holds, and unlabeled initiatives get named by their opponents.",
          "Speak aspiration, not mechanism: people buy the destination ('a queue that sleeps at night'), not the transmission ('a ticket-routing refactor').",
        ],
        examples: [
          "Instead of 'mandatory process compliance review': \"a pre-flight checklist — five minutes that keeps us off the front page.\"",
          "\"Call it the 'reliability program', not the 'incident-reduction initiative' — one promises a future, the other advertises a past.\"",
        ],
        caution:
          "Labels that outrun reality are propaganda, and audiences eventually audit. Use language to clarify true substance, not to costume weak substance.",
      },
      {
        id: "berger-magic-words",
        code: "G-03",
        name: "Identity Language",
        source: "Jonah Berger — Magic Words (Wharton); Bryan, Walton et al. — 'be a voter' studies",
        tagline:
          "Turn actions into identities: 'be a helper' can outperform 'please help', and 'I don't' outperforms 'I can't.'",
        science:
          "Berger's compilation of computational-linguistics findings shows tiny word shifts move behavior measurably. Nouns beat verbs because they invoke identity: asking people to 'be a voter' raised turnout over 'to vote' in Bryan and colleagues' original studies (though two much larger field experiments by Gerber and colleagues found no effect), and children asked to 'be a helper' helped more than those asked 'to help' — people act to claim desirable identities, not just to perform tasks. Refusal language works the same way: 'I don't miss workouts' (identity, closed) proved far more resistant to temptation than 'I can't miss workouts' (external rule, negotiable). Related findings: 'recommend' outperforms 'like', and concrete language raises perceived listening and satisfaction.",
        deployment: [
          "Convert asks into identity offers: 'be the reviewer everyone trusts' recruits the self-concept; 'please review carefully' recruits nothing.",
          "Set your own boundaries in 'don't' language: 'I don't take meetings before ten' ends negotiation; 'I can't' invites help dismantling the obstacle.",
          "Attribute the identity before requesting the behavior (Pygmalion pairing): 'you're the most rigorous person on this team — I need that rigor on this.'",
          "Replace hedges at commitment moments: 'I recommend' and 'I will' move people; 'I sort of think maybe' unmoves them.",
        ],
        examples: [
          "\"You're a builder — and this quarter I need builders, not caretakers. Which piece do you want?\"",
          "\"I don't ship without a rollback plan.\" (identity — conversation over) versus \"I can't ship without one\" (rule — here comes the exception request)",
        ],
        caution:
          "Several headline findings here come from small studies, and the best known, the voter study, failed to replicate at scale. Treat identity framing as a low-cost nudge, not a guaranteed lever.",
      },
      {
        id: "certainty-language",
        code: "G-04",
        name: "Hedges, Fillers & the Sound of Certainty",
        source: "Jonah Berger — Magic Words; Hosman — powerless-language research",
        tagline:
          "Hedges ('sort of', 'I guess') measurably shrink persuasion and perceived competence — precision plus confidence carries the room.",
        science:
          "Decades of 'powerless language' research (Hosman and others) show that hedges, disclaimers, and tag questions reduce the speaker's perceived competence, credibility, and persuasiveness — listeners discount not just the claim but the claimant. Berger's analyses add the flip side: speaking with certainty markers ('definitely', 'clearly', present tense, concrete specifics) increases persuasion even holding content constant, and precise numbers outperform round ones (they imply underlying work). The skill is calibration, not bluster: express your confident claims cleanly, and flag genuine uncertainty explicitly as information ('that's the number I'd check') — selective certainty reads as honesty; uniform certainty reads as salesmanship.",
        deployment: [
          "Strip hedges from your core claim: say the sentence, then stop. 'This will save the team a day a week.' No 'I think', no 'kind of', no trailing 'if that makes sense?'",
          "Move real uncertainty into explicit scaffolding: 'Two things I'm sure of, one I'm not — here's the one to pressure-test.'",
          "Trade round numbers for precise ones where you have the data: '$84,300' signals work; '$85K' signals guess.",
          "Audit your written asks: delete 'just', 'sort of', 'maybe we could', and every preemptive apology. The remaining sentence is your actual message.",
        ],
        examples: [
          "Instead of \"I just sort of feel like maybe we should delay?\": \"We should delay two weeks. The top risk isn't mitigated, and here's the evidence.\"",
          "\"I'm certain about the demand and the unit cost. The churn assumption is the soft spot — that's where I'd aim the diligence.\"",
        ],
      },
    ],
  },
  {
    id: "conversation-science",
    code: "16",
    name: "Conversation Science",
    brief:
      "The last decade of research on what actually makes conversations connect — measured, replicated, and operational.",
    principles: [
      {
        id: "talk-framework",
        code: "Q-01",
        name: "TALK — Topics, Asking, Levity, Kindness",
        source: "Alison Wood Brooks — TALK (Harvard Business School conversation lab)",
        tagline:
          "Conversation is a learnable skill with four trainable maxims — not a personality trait you're stuck with.",
        science:
          "Brooks's lab work treats conversation as coordinated decision-making under uncertainty, and finds performance improves on four measurable dimensions. Topics: preparing subjects in advance improves conversations (her students write 'topic pyramids'); switching topics at the right moment matters more than picking perfect ones — most pairs linger too long. Asking: questions, especially follow-ups, drive liking and information flow. Levity: moments of lightness mark status and competence (a successful joke raises both) and re-arm attention; what matters is the attempt at warmth, not comedic skill. Kindness: attentive, responsive warmth — demonstrated through listening and callbacks — is the trait conversation partners reward most.",
        deployment: [
          "Prepare topics like an agenda even for 'casual' conversations: three subjects this person lights up on. Preparation reads as presence, not calculation.",
          "Switch topics sooner than feels natural: when the energy dips twice on a subject, move — dwell time is the most common conversational error.",
          "Deploy levity as a tool: one light aside or callback per serious conversation resets attention and signals confidence.",
          "Practice callbacks: referencing something they said earlier ('back to your point about the audit...') is the cheapest high-yield kindness signal there is.",
        ],
        examples: [
          "Pre-meeting note: \"Ask about the Denver rollout, the new hire, the marathon.\" (a topic pyramid for a fifteen-minute call)",
          "\"That connects to what you said at the start about hating dashboards — I haven't forgotten, we're solving that too.\" (callback = kindness made visible)",
        ],
      },
      {
        id: "question-asking",
        code: "Q-02",
        name: "The Question-Asking Advantage",
        source: "Huang, Yeomans, Brooks et al. — 'It Doesn't Hurt to Ask' (2017)",
        tagline:
          "People who ask more questions — especially follow-ups — are better liked and learn more, yet most people barely ask.",
        science:
          "Analyzing thousands of live conversations (including speed dates), Brooks and colleagues found question-asking strongly predicts liking: speed-daters who asked more follow-up questions secured more second dates, and conversation partners rated high-questioners as more responsive and likable. Follow-up questions are the highest-value type — they prove listening. The striking companion finding: people systematically under-ask, because attention defaults to self-presentation ('what do I say next?') over information acquisition. In negotiations, question-askers also extracted more information without paying a likability cost. Boomerasking — asking only to answer it yourself ('How was your weekend? Mine was AMAZING') — backfires; it reads as self-absorption wearing a question costume.",
        deployment: [
          "Set a mechanical floor: two follow-up questions on their answer before you contribute your own material.",
          "Ask about the thing they just said, not the thing you planned to ask next — the follow-up beats the script.",
          "Kill the boomerask: if you ask it, stay on their answer. Your anecdote can survive unshared.",
          "In assessments and negotiations, remember asking is free: the evidence says questioners are liked MORE, not less — the fear of seeming nosy is miscalibrated.",
        ],
        examples: [
          "Them: 'We migrated last spring.' You: \"What broke first?\" ... \"And what would you do differently?\" (two follow-ups before your turn)",
          "Instead of 'How was your quarter? Ours was wild —': \"How was your quarter? ... What drove that? ... How did the team take it?\"",
        ],
      },
      {
        id: "matching-principle",
        code: "Q-03",
        name: "The Matching Principle",
        source: "Charles Duhigg — Supercommunicators",
        tagline:
          "Every discussion is really one of three conversations — practical, emotional, or social — and connection requires being in the SAME one.",
        science:
          "Duhigg's synthesis of conversation research centers on one diagnostic: at any moment a person is having one of three conversations — What's this really about? (practical: decisions, plans), How do we feel? (emotional), or Who are we? (social identity: roles, belonging). Miscommunication is usually mismatch: one party problem-solving while the other needs feelings heard — the classic advice-versus-empathy collision. Supercommunicators constantly detect which conversation is happening and match it, or explicitly negotiate the switch. The companion technique is 'looping for understanding': ask, summarize what you heard, then ask if you got it right — proven to make people feel heard and to de-escalate even political disagreement.",
        deployment: [
          "Diagnose before responding: is this a decision conversation, a feelings conversation, or an identity conversation? The words rarely announce it; the energy does.",
          "When someone brings a problem, ask which mode they want: 'Do you want help fixing this, or do you want to vent first?' — the question itself is a matching move.",
          "Loop for understanding in any charged exchange: summarize their point, ask 'did I get that right?', and don't advance until yes.",
          "Watch for identity conversations wearing practical masks: a fight about the org chart is rarely about the org chart. Address who-are-we before what-do-we-do.",
        ],
        examples: [
          "\"Before I jump to solutions — is this a 'help me fix it' conversation or a 'this week has been brutal' conversation? Both are fine.\"",
          "\"Let me play back what I heard: the timeline isn't the issue — being told last is. Did I get it right?\"",
        ],
      },
      {
        id: "perspective-getting",
        code: "Q-04",
        name: "Perspective-Getting Beats Perspective-Taking",
        source: "Nicholas Epley — Mindwise; Eyal, Steffel & Epley (2018)",
        tagline:
          "Imagining another's mind is unreliable no matter how hard you try — asking them is the only instrument that works.",
        science:
          "Epley's research delivers an uncomfortable audit of empathic intuition: across 25 experiments, deliberately 'taking the other's perspective' did NOT improve accuracy about what partners, strangers, or spouses actually thought and felt — it sometimes increased confidence while accuracy stayed flat, the most dangerous combination. Even long-married couples barely beat strangers when predicting each other's preferences. What reliably improved accuracy was perspective-GETTING: directly asking and listening to the answer. The operational law: your mental model of another person is a low-resolution caricature; every important assumption about their thoughts is a question you haven't asked yet.",
        deployment: [
          "Convert inferences into questions: every 'they probably think X' in your prep notes becomes 'ask what they think about X.'",
          "Distrust confident mind-reads — especially about people you know well; familiarity inflates confidence faster than accuracy.",
          "Before reacting to an ambiguous act (short email, missed call, silence in a meeting), get the data: 'I noticed X and I'm not sure how to read it — what's going on?'",
          "In negotiation prep, replace the empathy exercise with an interview plan: the questions that would reveal their constraints beat an hour of imagining them.",
        ],
        examples: [
          "\"I've been assuming the budget is the blocker — but I realize I've never actually asked. What's the real constraint on your side?\"",
          "\"Your note read as frustrated to me. Before I respond to that reading — is it right?\"",
        ],
      },
      {
        id: "magic-question",
        code: "Q-05",
        name: "The Magic Question",
        source: "Zoe Chance — Influence Is Your Superpower (Yale SOM)",
        tagline:
          "'What would it take?' converts an opponent into an engineer of your yes.",
        science:
          "Chance's synthesis of influence research crowns one question for stuck situations: 'What would it take...?' Its mechanics stack several validated effects — it transfers the problem-solving to the other party (self-generated solutions carry commitment, per the motivational-interviewing literature), it presupposes a path exists (reframing from whether to how), it signals respect for their constraints (reactance stays asleep), and any answer they give functions as a conditional commitment ('if that, then yes') that consistency pressure encourages them to honor. It also surfaces the true blockers in one move — information you could spend five meetings guessing at.",
        deployment: [
          "Deploy at impasse, not at the open: after a 'no' or a stall, ask 'What would it take to make this work?' and then be silent.",
          "Treat the answer as the deal's blueprint: they've just told you the real conditions — confirm them back ('so if we solved X and Y, we're moving?').",
          "Use it on yourself and your team to break internal deadlocks: 'what would it take to say yes to this?' converts objections into requirements.",
          "Pair with genuine flexibility: the question implies you'll consider their terms. If you won't, don't ask it.",
        ],
        examples: [
          "\"I hear that it's not possible this quarter. What would it take to make it possible?\"",
          "Them: 'We'd need executive sponsorship and a pilot budget.' You: \"If I get you both by Friday, are we in business?\"",
        ],
      },
      {
        id: "deep-talk",
        code: "Q-06",
        name: "The Miscalibrated Fear of Deep Talk",
        source: "Kardas, Kumar & Epley — 'Overly Shallow?' (2022, JPSP)",
        tagline:
          "People expect deep questions with strangers to be awkward — and are reliably wrong. Depth connects faster than small talk.",
        science:
          "Across twelve experiments, Kardas, Kumar and Epley had strangers converse using shallow versus deep questions ('What are you grateful for?', 'When did you last cry in front of someone?'). Participants systematically overestimated the awkwardness of deep conversation and underestimated how connected they'd feel and how much their partner would care about their answers — the 'miscalibrated' expectations kept them defaulting to weather and logistics. Actual deep conversations produced more connection, more enjoyment, and no meaningful awkwardness penalty, with both strangers and friends. The barrier to meaningful connection isn't the other person's willingness; it's your forecast of it — and the forecast is broken in a known direction.",
        deployment: [
          "Skip one rung on the ladder: wherever the conversation naturally sits, ask one question slightly deeper than the setting suggests.",
          "Ask about meaning, not logistics: 'what's the part of this work you actually love?' beats 'busy week?' at zero additional cost.",
          "Trust the research over the flinch: the pre-conversation dread is the miscalibration talking — the other side wants the deeper conversation too.",
          "Answer your own deep questions honestly when reciprocated; depth is a trade, and shallow answers to deep questions close the exchange.",
        ],
        examples: [
          "Instead of 'How's the conference?': \"What's the one conversation here you'll still be thinking about next month?\"",
          "\"Setting the project aside for a second — what would make this year a genuinely good year for you?\"",
        ],
      },
    ],
  },
  {
    id: "reading-social",
    code: "17",
    name: "Reading & Social Intelligence",
    brief:
      "Decode the person in front of you — the signals they broadcast, the styles they speak in, and the games they play.",
    principles: [
      {
        id: "warmth-competence",
        code: "I-01",
        name: "The Warmth–Competence Map",
        source: "Susan Fiske — Stereotype Content Model (Princeton)",
        tagline:
          "Every person you meet is instantly plotted on two axes: can I trust you, and can you deliver — in that order.",
        science:
          "Fiske's stereotype content model, replicated across dozens of cultures, shows social judgment runs on two universal dimensions: warmth (good intentions toward me?) and competence (capacity to act on them?). Warmth is judged first and weighted more heavily — an evolutionary triage: a foe's intentions matter before their skill. The quadrants predict emotional responses: high-warmth/high-competence earns admiration, competence without warmth earns envy and quiet sabotage, warmth without competence earns pity and dismissal, neither earns contempt. Most professionals over-invest in competence signals and structurally neglect warmth — optimizing the second question while failing the first.",
        deployment: [
          "Lead with warmth signals in first encounters — genuine interest, names, acknowledgment — before demonstrating competence; the order is not optional.",
          "Diagnose your default quadrant honestly: feared but not liked means envy is accumulating, and envy waits for your first stumble.",
          "Repair the deficient axis, not the strong one: more brilliance won't fix a warmth deficit, and more niceness won't fix a competence doubt.",
          "Read others on both axes separately: the warm incompetent and the cold expert require opposite handling — and mixing them up is expensive.",
        ],
        examples: [
          "Opening a high-stakes intro: \"Before we start — I've heard about the quarter you've had. How are you actually doing?\" (warmth first, agenda second)",
          "Post-mortem on a stalled relationship: 'They respect the work but dodge my meetings' → warmth deficit. Fix: unrequested help, credit-sharing, one non-transactional conversation.",
        ],
      },
      {
        id: "ability-benevolence-integrity",
        code: "I-02",
        name: "Ability, Benevolence, Integrity",
        source:
          "Mayer, Davis & Schoorman — An Integrative Model of Organizational Trust (1995); Frances Frei & Anne Morriss — Begin with Trust (Harvard Business Review, 2020)",
        tagline:
          "Build trust on three beliefs: that you can deliver, that you care about them, and that you keep to principles. Find your weak side.",
        science:
          "Mayer, Davis and Schoorman defined trust as the willingness to be vulnerable to another person, and proposed that it rests on three perceptions of that person: ability (the skills to deliver in this domain), benevolence (wanting to do good by you, beyond self-interest) and integrity (keeping to principles you find acceptable). Their model is among the most cited in the trust literature. Frei and Morriss, both at Harvard Business School, offer a practical version for leaders: people trust you when they experience the real you (authenticity), believe in your judgment (logic) and believe you care about them (empathy). Their key idea is the 'wobble': most people are reliably strong on two drivers and weaker on the third, and lost trust can almost always be traced to a breakdown in one of them. Diagnosing which one is the fastest route to repair.",
        deployment: [
          "When trust is shaky, ask which leg is in doubt: your competence, your care for them, or your consistency.",
          "Find your usual wobble: logic (judgment or delivery), empathy (distracted or impatient) or authenticity (a guarded, managed self).",
          "Repair the specific leg: show your reasoning and track record for logic, give undivided attention for empathy, and share more of your real views for authenticity.",
          "Remember that trust is domain-specific: people can trust your analysis and not your judgment of people. Build it where you need it.",
        ],
        examples: [
          "After a missed deadline, the doubt is ability, not care: \"Here's the revised plan, the risk I missed, and a checkpoint on Friday so you can see it's on track.\"",
          "An empathy wobble often shows up as distraction. Putting the phone away and asking one real follow-up question repairs more than any speech.",
        ],
        caution:
          "Trust takes far longer to build than to lose. Performing a trait (manufactured vulnerability, scripted empathy) damages the authenticity leg while trying to shore up another.",
      },
      {
        id: "tannen-styles",
        code: "I-03",
        name: "Conversational Style Literacy",
        source: "Deborah Tannen — That's Not What I Meant!; You Just Don't Understand (Georgetown linguistics)",
        tagline:
          "Directness, pausing, and interruption are dialect, not character — misreading style as intent breaks relationships.",
        science:
          "Tannen's sociolinguistic fieldwork shows conversational styles vary systematically — by culture, region, upbringing, and gender socialization — along dimensions like directness, pause length, overlap tolerance, and volume. The failure mode: we read others' STYLE through our own and attribute the difference to character or intent. A short pause-taker experiences a long pause-taker as having nothing to say; the long pause-taker experiences the other as domineering — both are wrong about the person and right about the mismatch. Her rapport-talk versus report-talk distinction adds another axis: some speakers use conversation primarily to negotiate closeness (rapport), others to establish information and standing (report) — and each hears the other's mode as missing the point.",
        deployment: [
          "Before judging intent, check style: is this person rude, or a high-involvement overlapper? Evasive, or a long-pause processor? The behavior is the same; the person isn't.",
          "Match pace and pause length deliberately with unfamiliar counterparts — style symmetry is invisible when present and corrosive when absent.",
          "Diagnose rapport vs. report mode in the moment: a story shared may be a bid for connection, not a request for analysis. Match the mode or ask.",
          "In mixed-style meetings, engineer the floor: explicit turns and written rounds neutralize the advantage of the fastest interrupter.",
        ],
        examples: [
          "\"I notice I keep jumping in before you're finished — I run on short pauses. Take the time you need; I'll wait for a signal.\"",
          "Reading the mode: they describe a brutal week. Rapport response: \"That sounds exhausting — the audit on top of everything.\" (Not: 'You should delegate the audit.')",
        ],
      },
      {
        id: "high-low-context",
        code: "I-04",
        name: "High- and Low-Context Communication",
        source:
          "Erin Meyer (INSEAD) — The Culture Map (2014); Edward T. Hall — high- and low-context cultures",
        tagline:
          "Across cultures, some people say exactly what they mean and others mean more than they say. Know which you're dealing with, and default to explicit in mixed teams.",
        science:
          "The anthropologist Edward Hall distinguished low-context communication, where meaning sits in the words, from high-context communication, where much of it sits in shared context, relationships and what is left unsaid. Erin Meyer of INSEAD made it the first of the eight scales in The Culture Map, her framework for international business. At the low-context end (the United States is the most extreme in her data, with countries such as Germany and the Netherlands nearby), good communication is precise, simple and explicit, repetition is welcome if it clarifies, and important points are put in writing. At the high-context end (Japan is a leading example), good communication is layered and nuanced, and a skilled listener reads between the lines. The friction is predictable: low-context speakers can seem blunt or condescending to high-context listeners, while high-context speakers can seem vague or evasive in return. Meyer's rule of thumb for multicultural teams is to use low-context processes, because explicitness is the common denominator.",
        deployment: [
          "Before important cross-border conversations, place yourself and your counterparts on the scale. Position is relative, so compare yourselves to each other, not to an average.",
          "With higher-context counterparts, listen for what is implied: hesitation, what is left unsaid, and phrases like 'that will be difficult', which may mean no.",
          "With lower-context counterparts, say it plainly and confirm in writing. Don't expect a hint to land.",
          "In mixed teams, set explicit norms: summarize decisions aloud, confirm next steps in writing, and invite questions directly.",
        ],
        examples: [
          "A partner says, \"We will consider it carefully.\" In a high-context setting that may be a polite no, so ask: \"What would need to change for this to work for you?\"",
          "Closing a mixed-team call: \"Let me confirm what we decided and who owns each step. I'll put it in writing within the hour.\"",
        ],
        caution:
          "Cultural scales describe averages, not individuals, and they shift with generation, industry and personal history. Use the map to generate questions about a person, never to predict them.",
      },
    ],
  },
  {
    id: "commanding-room",
    code: "18",
    name: "Commanding the Room",
    brief:
      "Gatherings, meetings, and audiences are designed experiences — the host who designs deliberately owns the outcome.",
    principles: [
      {
        id: "art-of-gathering",
        code: "M-01",
        name: "Purpose-First Gathering",
        source: "Priya Parker — The Art of Gathering",
        tagline:
          "Most meetings are ruled by defaults; great ones are ruled by a specific, disputable purpose — and a host willing to govern.",
        science:
          "Parker's practice across conflict-resolution and high-stakes convening yields a discipline most meetings lack. First, purpose: a gathering's reason must be specific enough to exclude ('align the exec team on the pricing decision' — not 'monthly sync'); category defaults (the standing meeting, the standard offsite) are purpose vacuums that ritual fills. Second, generous authority: hosts who abdicate ('whatever the group wants') don't create freedom — they create a power vacuum the loudest occupy; governing the gathering — protecting guests, equalizing airtime, enforcing the purpose — is generosity, not control. Third, the gathering begins before it begins: the invitation, the name, and the pre-work prime what people arrive ready to do. Never open with logistics — the first minutes are the room's most impressionable, and 'housekeeping' spends them on nothing.",
        deployment: [
          "Write the disputable purpose first: if no reasonable person could disagree with it, it's too vague to design from. Let the purpose decide the list, the length, and the format.",
          "Exercise generous authority: name the rules at the start, protect the interrupted, cut the tangent — the group feels the difference between control and care.",
          "Prime before arrival: a specific question in the invite ('come with the one number that worries you') means the meeting starts at minute zero, already deep.",
          "Design openings and closings: open with something that connects or focuses (never logistics), close with meaning — commitments, a round of last words — not a fizzle into calendars.",
        ],
        examples: [
          "Invite line: \"This is a decision meeting: we leave with a price. Come with your number and your strongest objection to it.\"",
          "\"Before anything else — one sentence each: what would make this hour worth it for you?\" (the opening primes ownership; logistics can wait)",
        ],
      },
      {
        id: "charismatic-tactics",
        code: "M-02",
        name: "Charismatic Leadership Tactics",
        source: "John Antonakis et al. — CLT field experiments (Lausanne)",
        tagline:
          "Charisma decomposes into twelve trainable tactics — metaphor, story, contrast, rhetorical questions, moral conviction — with measured effects.",
        science:
          "Antonakis's research program treats charisma as 'values-based, symbolic, emotion-laden signaling' and proves it trainable: in randomized field experiments, managers taught the charismatic leadership tactics were rated significantly more influential, competent, and leader-like afterward. The verbal nine: metaphors and analogies, stories and anecdotes, contrasts ('not X but Y'), rhetorical questions, three-part lists, expressions of moral conviction, sharing the group's sentiments, high and confident goals, and confidence the goals are achievable. The nonverbal three: animated voice, expressive gestures, expressive face. A companion result: MBA students trained in CLTs were rated more leader-like in subsequent group work — the effect survives contact with people who know you.",
        deployment: [
          "Draft key messages through the checklist: is there a metaphor? a story? a contrast? a three-part list? a rhetorical question? Retrofit at least three into any consequential communication.",
          "State moral conviction where you have it: 'this is the right thing to do, and here's why' — leaders who never touch values read as administrators.",
          "Set goals high and pair them immediately with expressed confidence: ambition without confidence is anxiety transfer; the pairing is the tactic.",
          "Animate the delivery deliberately — vary pace and volume, gesture on the key points, let the face match the message. Flat delivery cancels charismatic text.",
        ],
        examples: [
          "\"We're not patching a system — we're draining a swamp we've been paying rent on for five years. (metaphor + contrast) Can we keep paying it? (rhetorical question) I know this team can be done by June — I've watched you do harder. (high goal + confidence)\"",
          "Before the all-hands: retrofit pass — one customer story, one contrast, one three-part close.",
        ],
      },
      {
        id: "humble-inquiry",
        code: "M-03",
        name: "Humble Inquiry",
        source: "Edgar Schein — Humble Inquiry (MIT Sloan)",
        tagline:
          "The gentle art of asking instead of telling — the higher your status, the more your questions are worth and the fewer you ask.",
        science:
          "Schein's career studying organizational culture converges on a diagnosis: professional culture overvalues telling — and telling puts the other person down, subtly asserting that you know and they should listen. Humble Inquiry is asking questions to which you do NOT already know the answer, from genuine curiosity — 'here-and-now humility' that acknowledges the other person holds information you need. The stakes compound with hierarchy: subordinates hold the information that prevents disasters (his case studies include fatal accidents where juniors saw the problem and stayed silent), and they release it only to leaders who have built the relationship through inquiry BEFORE the critical moment. Telling closes the channel precisely where the channel matters most.",
        deployment: [
          "Ask real questions — ones you don't know the answers to. 'Don't you think we should...?' is telling wearing a question mark.",
          "Lead with inquiry when dependent on others' hands and eyes: the operator, the engineer, and the junior on the front line know things your dashboard doesn't.",
          "Build the channel before you need it: casual, curious, agenda-free questions in calm times are what make the warning speakable in critical times.",
          "Catch your telling reflex at status gradients: the more junior the person, the more deliberately you ask and the longer you wait before adding your view.",
        ],
        examples: [
          "\"You're closer to this system than anyone. What's it doing lately that nobody upstairs would believe?\"",
          "\"I have a view, but I've got the least current information in this room — walk me through what you're seeing first.\"",
        ],
      },
      {
        id: "self-determination",
        code: "M-04",
        name: "Autonomy, Competence, Relatedness",
        source: "Edward Deci & Richard Ryan — Self-Determination Theory (hundreds of studies)",
        tagline:
          "Lasting buy-in runs on three psychological nutrients — control feels efficient and quietly starves all three.",
        science:
          "Deci and Ryan's self-determination theory, among the most validated frameworks in motivation science, identifies three innate needs whose satisfaction predicts intrinsic motivation, performance, and persistence: autonomy (my actions are self-endorsed, not coerced), competence (I'm effective and growing), and relatedness (I matter to people who matter to me). The famous corollary: external control — surveillance, deadlines imposed without rationale, contingent rewards for interesting work — can undermine intrinsic motivation (Deci's original experiments showed payment for a fun puzzle reduced voluntary engagement). For influence: compliance can be extracted; commitment must be grown, and it grows only in soil containing all three nutrients.",
        deployment: [
          "Sell the why, choice the how: state the outcome and rationale, then hand over genuine decisions about method — autonomy within structure, not the illusion of it.",
          "Feed competence with calibrated challenge and named progress: 'a month ago this would have taken you a week' is a competence deposit.",
          "Build relatedness deliberately: people persist for teams they feel bound to long after the task's shine wears off — the relationship IS motivational infrastructure.",
          "Audit your levers: if your influence toolkit is deadlines, escalation, and incentives, you're renting behavior. Ask which of the three needs your ask feeds — or starves.",
        ],
        examples: [
          "\"The outcome is fixed: zero-downtime cutover by March. Everything about how we get there is this team's call — design it.\"",
          "\"You've grown into the hardest reviews we have — that's why this one's yours. And it's your name on it, not mine.\"",
        ],
      },
      {
        id: "meeting-science",
        code: "M-05",
        name: "The Science of Meetings",
        source: "Steven Rogelberg — The Surprising Science of Meetings (UNC Charlotte)",
        tagline:
          "Meeting quality is a measurable leadership skill: smaller, shorter, question-framed, and actively facilitated wins.",
        science:
          "Rogelberg's research program — the largest empirical body on workplace meetings — finds most meetings fail through unexamined defaults, and quantifies the fixes. Size: effectiveness drops sharply with headcount (coordination and social loafing scale with attendees); his guidance runs single digits for decisions. Time: Parkinson's law is real — work expands to fill the scheduled hour, so shrinking the default (25/50-minute meetings) removes waste without cost. Agendas as topics do nothing measurable; agendas as QUESTIONS ('what would have to be true to ship in May?') define done and expose whether a meeting is needed at all. Facilitation is the differentiator: leaders who actively steward — managing airtime, separating idea generation from evaluation (silent brainwriting reliably beats open brainstorming), and protecting dissent — run meetings people rate as effective; and leaders systematically overrate their own meetings, so measurement beats intuition.",
        deployment: [
          "Frame every agenda item as a question with a decision owner — if you can't phrase the question, cancel the item; if there are no questions, cancel the meeting.",
          "Cut the invite list to the people who bear on the questions; give everyone else the notes. Eight is a decision meeting; eighteen is an audience.",
          "Default to the shorter slot and end early on purpose — the recovered minutes are real, and the time pressure sharpens the discussion.",
          "Collect input in silence before discussion (brainwriting) when stakes or status gradients are high — it doubles idea flow and unmutes the juniors.",
        ],
        examples: [
          "Agenda rewrite: not 'Q3 marketing' but \"Which two campaigns do we fund, and what evidence changes the answer? (Decision: Maya)\"",
          "\"Two minutes, everyone writes their answer silently, then we read them all before anyone reacts — including me.\"",
        ],
      },
      {
        id: "amplification-airtime",
        code: "M-06",
        name: "Airtime Engineering & Amplification",
        source: "Woolley et al. — collective intelligence (Science, 2010); Obama White House 'amplification' practice",
        tagline:
          "Groups decide better when airtime is shared, and good ideas can be deliberately kept alive and credited.",
        science:
          "Woolley's collective-intelligence studies found that a group's performance across diverse tasks is predicted less by members' average IQ than by interaction pattern: equality of conversational turn-taking and members' social sensitivity were the strong correlates of the group's 'c factor' — groups dominated by a few voices measurably underperform their own talent. The existence of a single collective-intelligence 'c factor' is contested, however: independent attempts to reproduce it have partly or completely failed. Treat equal airtime as good practice backed by related evidence, such as the hidden-profile research, rather than as a proven intelligence multiplier. The companion technique comes from practice: women staffers in the Obama White House adopted 'amplification' — deliberately repeating a colleague's overlooked point with attribution ('as Susan proposed...') — to counter the documented pattern of contributions being lost or re-credited. Amplification exploits mere-exposure and social proof legitimately: repetition raises an idea's perceived merit, and attribution locks the credit to its author.",
        deployment: [
          "Track airtime as a chair: who hasn't spoken bears directly on decision quality, not just fairness — call on the silent by name with a real question.",
          "Amplify deliberately: when a good point sinks without trace, resurface it with the author's name attached — 'I want to come back to what Priya said, because I think it's the answer.'",
          "Interrupt the re-crediting in real time: 'That's the proposal Marcus made ten minutes ago — Marcus, take it from here.'",
          "Structure equality where culture won't provide it: written rounds, round-robins, and pre-reads flatten the floor faster than exhortation.",
        ],
        examples: [
          "\"Before we decide — three people haven't weighed in. Lena, you see the customer side of this daily: what are we missing?\"",
          "\"Building on Dana's point — and to be clear, it was Dana's — the phased option solves both objections.\"",
        ],
      },
      {
        id: "premortem",
        code: "M-07",
        name: "The Premortem",
        source:
          "Gary Klein — Performing a Project Premortem (Harvard Business Review, 2007); Mitchell, Russo & Pennington (1989); Veinott, Klein & Wiggins (2010)",
        tagline:
          "Before you commit, imagine the plan has already failed and ask why. People find risks they would never voice in a normal review.",
        science:
          "In a premortem, a team imagines that its plan has been carried out and has failed completely, then each person writes down the reasons why. Klein built the method on research into 'prospective hindsight': Mitchell, Russo and Pennington found in 1989 that imagining an event has already happened increased people's ability to correctly identify reasons for future outcomes by 30 percent. The frame also changes the social dynamics. In an ordinary review, raising doubts can look disloyal; in a premortem, finding the failure is the assignment, so people surface concerns they would otherwise keep to themselves. In an experiment on an emergency-response plan, Veinott, Klein and Wiggins found the premortem reduced overconfidence more than a standard critique or a list of pros and cons.",
        deployment: [
          "Once a plan is agreed but before it launches, say: 'Imagine it's a year from now and this has failed badly. Write down every reason why.'",
          "Give everyone a few minutes to write silently first, so the loudest voice doesn't set the list.",
          "Go round the room taking one reason at a time until every list is exhausted.",
          "Pick the two or three most plausible failures, change the plan to address them, and assign owners to watch for the early signs.",
        ],
        examples: [
          "\"It's March next year and the migration has been rolled back. What happened?\" One engineer writes: \"The vendor's rate limits were never load-tested.\"",
          "Closing it out: \"Of these twelve, which three would we bet on? Those get owners today.\"",
        ],
        caution:
          "A premortem is not a vote on whether to proceed, and it can become a pile-on if the plan's owner feels attacked. Frame it as stress-testing a plan everyone wants to succeed, and act on what it finds, or people will stop taking part.",
      },
      {
        id: "hidden-profile",
        code: "M-08",
        name: "Surface the Hidden Profile",
        source:
          "Garold Stasser & William Titus — hidden-profile research (1985); Lu, Yuan & McLeod — meta-analysis (2012); Cass Sunstein & Reid Hastie — Wiser (2015)",
        tagline:
          "Groups spend their time on what everyone already knows. The information that decides the question is often held by one person who never says it.",
        science:
          "Stasser and Titus designed experiments in which the information needed for the best decision was split among group members, while information pointing to a worse option was shared by everyone. Groups consistently discussed the shared information and missed the unshared facts, a pattern known as the hidden profile. A 2012 meta-analysis of 65 studies (Lu, Yuan and McLeod) found that groups mentioned far more common than unique information, and that groups facing a hidden profile were eight times less likely to find the right answer than groups given the full picture. Shared information gets repeated because others validate it and it feels safer to say; unique information is easy to doubt and easy to drop. Sunstein and Hastie, in Wiser, show how leaders can counter this: signal early that they want dissent and new information, keep their own views back, assign roles, and gather individual views before the group converges.",
        deployment: [
          "Collect views and relevant facts individually, in writing, before the discussion starts.",
          "Ask each person directly: 'What do you know about this that the rest of us might not?'",
          "As the leader, speak last, so your view doesn't anchor the room.",
          "Give people explicit roles tied to their expertise (the customer view, the legal view), which licenses them to bring what only they know.",
        ],
        examples: [
          "\"Before we debate the vendor choice, send me two things you know about these suppliers that you suspect others don't. I'll read them out without names.\"",
          "\"Priya, you've dealt with their support team directly. What have you seen that isn't in the deck?\"",
        ],
        caution:
          "Unique information is not automatically right: some of it is stale, anecdotal or wrong. The goal is to get it on the table and tested, not to give it special weight.",
      },
    ],
  },
];
