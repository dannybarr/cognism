import type { Phase } from "./principles";

export const commandPhases: Phase[] = [
  {
    id: "power-status",
    code: "11",
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
        id: "never-outshine",
        code: "K-04",
        name: "Never Outshine the Master",
        source: "Robert Greene — The 48 Laws of Power (Law 1)",
        tagline:
          "Making superiors feel insecure about their position is career poison — make those above you feel comfortably superior.",
        science:
          "Greene's first law distills centuries of court history into a durable status dynamic: people in power experience a subordinate's conspicuous brilliance as threat, not asset — and threats get quietly removed. The mechanism is status anxiety: your competence is welcome exactly up to the point where it makes your superior look replaceable. The masterful version isn't hiding your talent; it's directing its glow — framing your wins as extensions of their leadership, asking their counsel, and letting them discover your brilliance rather than having it announced at them.",
        deployment: [
          "Frame your victories inside their agenda: 'this worked because of the direction you set' costs nothing and buys air cover.",
          "Ask their advice on things you could figure out yourself — it affirms the hierarchy while showcasing your judgment in the questions you ask.",
          "Let third parties deliver news of your brilliance; self-announced excellence in front of an insecure superior reads as a challenge.",
          "Read the superior first: secure leaders WANT to be outshone by their people. This law applies in proportion to their insecurity.",
        ],
        examples: [
          "\"Your call to delay the launch is what made this possible — we used the extra month to fix the thing that would have sunk us.\"",
          "\"Before I take this to the committee, I want your read — you've seen ten of these politics play out.\"",
        ],
        caution:
          "This is a defensive map of how insecure power behaves, not an endorsement. Deployed cynically it becomes flattery, and flattery detected destroys the trust it was faking. Also know when to leave: a superior who requires permanent dimming is a career ceiling.",
      },
      {
        id: "reputation-guard",
        code: "K-05",
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
        code: "K-06",
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
    id: "frame-control",
    code: "12",
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
        id: "prizing",
        code: "G-02",
        name: "Prizing — Be the Prize",
        source: "Oren Klaff — Pitch Anything",
        tagline:
          "Reverse the gravity: the money, the buyer, the approver must qualify for YOU — or you're the commodity.",
        science:
          "Klaff's prize frame inverts the default supplicant posture: in most pitches the seller chases and the buyer judges, which prices the seller as a commodity. Prizing flips the qualification direction — establishing (truthfully) that your time, product, or partnership is the scarce item and the counterpart must demonstrate fit. The psychology is scarcity plus status inference: people want what others compete for and instinctively value what evaluates them. Small behavioral moves carry it: asking qualification questions of the buyer, willingness to walk, declining to over-accommodate.",
        deployment: [
          "Ask qualifying questions in both directions from the start: 'For this to be worth both our time, I need to know two things about how you decide.'",
          "Ration your accommodations: instant availability, unlimited revisions, and chase-up emails all announce that they're the prize.",
          "Give the counterpart a way to win you: people value what they had to earn — 'we take on two of these a quarter; here's what we look for.'",
          "Let your alternatives exist visibly (never as a threat): a calm mention of the other path re-centers who is choosing whom.",
        ],
        examples: [
          "\"Before we go further — this only works when the client's team commits real hours in month one. Is that available on your side?\"",
          "\"Thursday's gone, I'm afraid. I can do Monday at 2. If it's urgent, tell me what changes before Monday.\"",
        ],
        caution:
          "Prizing must be backed by genuine scarcity and genuine quality. Faked aloofness from a weak position reads instantly — and you lose the deal AND the dignity.",
      },
      {
        id: "croc-brain-pitch",
        code: "G-03",
        name: "Pitch to the Croc Brain",
        source: "Oren Klaff — Pitch Anything (neurofinance framing)",
        tagline:
          "Pitches land in the survival brain first — which only asks: is this dangerous, is this new, can I ignore it?",
        science:
          "Klaff's structural insight: you compose your pitch with your neocortex, but the audience receives it with their oldest filtering circuitry — attention systems that evolved to triage for threat and novelty and to discard everything else. Anything abstract, long, or self-oriented gets classified as ignorable. The implications: lead with novelty and change ('why now'), keep the big idea concrete and visual, inject intrigue and stakes to hold the attention loop, and keep the whole thing short — Klaff caps the core pitch at roughly 20 minutes, with the idea itself delivered in the first five.",
        deployment: [
          "Open with the 'why now' — the three forces (market, technology, social) that make this moment different. Change is the croc brain's favorite food.",
          "Deliver the idea in one concrete, visual sentence early ('For X who have problem Y, we do Z') — not after twenty slides of buildup.",
          "Alternate analysis with intrigue: a cliffhanger, a stake, a human moment every few minutes re-arms decaying attention.",
          "Cut everything that serves you rather than them: credentials up front, methodology tours, and hedged qualifiers all trigger the ignore reflex.",
        ],
        examples: [
          "\"Two years ago this product was impossible and one year ago it was illegal. Both just changed — that's why we're in this room.\"",
          "\"Here's the whole idea in one sentence, then I'll prove it: every warehouse in this state is paying double for insurance it doesn't need.\"",
        ],
      },
      {
        id: "luntz-words",
        code: "G-04",
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
        code: "G-05",
        name: "Identity Language",
        source: "Jonah Berger — Magic Words (Wharton); Bryan, Walton et al. — 'be a voter' studies",
        tagline:
          "Turn actions into identities: 'be a helper' outperforms 'please help' — and 'I don't' outperforms 'I can't.'",
        science:
          "Berger's compilation of computational-linguistics findings shows tiny word shifts move behavior measurably. Nouns beat verbs because they invoke identity: asking people to 'be a voter' raised turnout over 'to vote' (Bryan et al.), and children asked to 'be a helper' helped more than those asked 'to help' — people act to claim desirable identities, not just to perform tasks. Refusal language works the same way: 'I don't miss workouts' (identity, closed) proved far more resistant to temptation than 'I can't miss workouts' (external rule, negotiable). Related findings: 'recommend' outperforms 'like', and concrete language raises perceived listening and satisfaction.",
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
      },
      {
        id: "certainty-language",
        code: "G-06",
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
    code: "13",
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
    code: "14",
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
        id: "cues-vanedwards",
        code: "I-02",
        name: "Cues — Engineering Your Signal",
        source: "Vanessa Van Edwards — Cues; Captivate (Science of People lab)",
        tagline:
          "You are always broadcasting warmth and competence cues — most people just haven't audited the transmission.",
        science:
          "Van Edwards operationalizes the warmth–competence research into trainable signals. Warmth cues: genuine (Duchenne) smiling, head tilts, triple nods (which measurably extend the other person's talking time), audible 'mmhm's, and open palms. Competence cues: lower vocal tone under stress (versus the credibility-killing question inflection on statements), steepled or purposeful hands, still posture, and comfortable eye contact while speaking. Her lab's analyses of TED talks found the most-viewed speakers used roughly double the hand gestures of the least-viewed — hands explain and hands build trust (visible hands signal no threat). The skill is matching your cue mix to the moment: warmth to open, competence to close.",
        deployment: [
          "Audit your resting signal on video once: most people discover they broadcast one axis strongly and the other barely at all.",
          "Deploy the triple nod and head tilt when you want elaboration — they extend the speaker's disclosure without a word.",
          "Keep hands visible and gesturing when explaining; hidden hands and frozen posture read as concealment or nerves.",
          "Control the statement drop: end assertions with falling pitch. The uptalked price, deadline, or boundary invites its own renegotiation.",
        ],
        examples: [
          "Opening a tense meeting: open palms on the table, slight head tilt, \"I want to hear the version of this you'd tell if I weren't in the room.\"",
          "Video-call fix: raise the camera, sit back so hands are in frame, and gesture while explaining — engagement scores change measurably.",
        ],
      },
      {
        id: "berne-games",
        code: "I-03",
        name: "Spotting the Game",
        source: "Eric Berne — Games People Play (transactional analysis)",
        tagline:
          "Repetitive, predictable conflicts aren't accidents — they're games with payoffs, and naming the game ends it.",
        science:
          "Berne's transactional analysis models every exchange as coming from one of three ego states — Parent (critical or nurturing scripts), Adult (present-tense reality processing), or Child (adapted or rebellious feeling states). Straight transactions (Adult–Adult) are productive; 'games' are repeating transaction patterns with a hidden agenda and a predictable negative payoff — familiar bad feelings that confirm a life script. Classics: 'Why Don't You — Yes But' (help is solicited, every suggestion is defeated; the payoff is proving nobody can help), 'Now I've Got You' (a small error is banked and detonated), and 'Kick Me' (provocation until rejection confirms worthlessness). Games can't be won from inside; they end when one party declines their role and responds from the Adult.",
        deployment: [
          "Spot games by repetition and residue: the same argument with the same person ending in the same bad feeling is a game, not a disagreement.",
          "Identify the invitation: 'Yes But' invites you to keep offering solutions for defeat. Decline the role: 'Sounds like a genuinely hard problem. What have you considered?'",
          "Respond to Parent or Child hooks from the Adult: a scolding tone or a helpless one both invite complementary roles — answer the content, flat and factual, not the tone.",
          "Watch your own favorite game: everyone runs at least one. The recurring conflict where you're always the victim or always the rescuer is yours.",
        ],
        examples: [
          "Third solution defeated in a row: \"I'm out of suggestions — you know the problem best. What's your plan?\" (the game needs your next 'why don't you...' — starve it)",
          "Them, banking a gotcha: 'Well, this wouldn't have happened if SOMEONE had reviewed it.' You, Adult: \"Correct — the review got skipped. Here's the check that prevents the repeat.\"",
        ],
        caution:
          "Diagnosing games in others is seductive and easy to abuse — the labels are for changing YOUR moves, not for armchair-analyzing colleagues out loud.",
      },
      {
        id: "tannen-styles",
        code: "I-04",
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
        id: "hidden-genius",
        code: "I-05",
        name: "Operator Frameworks — Watch the Tape",
        source: "Polina Pompliano — The Hidden Genius (profiles of elite performers)",
        tagline:
          "Elite operators read people through revealed behavior over stated identity — everyone tells you who they are through what they repeatedly do.",
        science:
          "Pompliano's study of hundreds of top performers — investors, special-forces operators, athletes, founders — extracts recurring people-reading frameworks. The core discipline: weight revealed preferences over declared ones (what someone does with their time, money, and attention under no observation is the signal; the self-narrative is marketing). Supporting practices: watch behavior under stress and toward the powerless (the waiter test — character shows where status incentives vanish); collect patterns across contexts before concluding (one data point is an anecdote, the third is a trait); and pre-commit your standards before charm arrives, because skilled operators are read THROUGH their consistency, and skilled manipulators are exposed by their variance — charming to you, cold to the assistant.",
        deployment: [
          "Audit the tape, not the trailer: before trusting a partner, look at their last three conflicts, exits, or deals — how they treated people when it ended is how they'll treat you when it ends.",
          "Run the waiter test consciously: how they treat service staff, juniors, and anyone useless to them is the baseline personality; the version facing you is the negotiated one.",
          "Distrust context-dependent character: warmth that appears only when you have something they want isn't warmth — variance across power gradients is the manipulator's signature.",
          "Write your read before the charm offensive: pre-committed criteria ('what would make me walk away?') survive charisma; improvised ones don't.",
        ],
        examples: [
          "Diligence beyond the references they gave you: \"Who did they fire, and how? Who quit, and why? Get me one person from the losing side of their last deal.\"",
          "\"He was brilliant with us and dismissive to the coordinator setting up the room. Believe the coordinator's version.\"",
        ],
      },
    ],
  },
  {
    id: "commanding-room",
    code: "15",
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
          "Group intelligence tracks equal conversational turn-taking — and ideas can be deliberately kept alive and credited.",
        science:
          "Woolley's collective-intelligence studies found that a group's performance across diverse tasks is predicted less by members' average IQ than by interaction pattern: equality of conversational turn-taking and members' social sensitivity were the strong correlates of the group's 'c factor' — groups dominated by a few voices measurably underperform their own talent. The companion technique comes from practice: women staffers in the Obama White House adopted 'amplification' — deliberately repeating a colleague's overlooked point with attribution ('as Susan proposed...') — to counter the documented pattern of contributions being lost or re-credited. Amplification exploits mere-exposure and social proof legitimately: repetition raises an idea's perceived merit, and attribution locks the credit to its author.",
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
    ],
  },
];
