import type { Phase } from "./principles";

export const conductPhases: Phase[] = [
  {
    id: "presence-approach",
    code: "16",
    name: "Presence & Approach",
    brief:
      "How you show up before a word is spoken — the daily disposition that decides whether a room warms to you or braces against you.",
    principles: [
      {
        id: "go-first",
        code: "B-01",
        name: "Go First",
        source: "Boothby, Cooney, Sandstrom & Clark (2018) — The Liking Gap; Epley & Schroeder (2014)",
        tagline:
          "Assume everyone already wants to meet you. Extend the warmth first — the odds are far better than your nerves report.",
        science:
          "The 'liking gap' is a robust, replicated finding: after conversations, people systematically underestimate how much the other person liked them and enjoyed their company — and the misjudgment can persist for months. Separately, Epley and Schroeder found commuters expected talking to a stranger to be unpleasant, then reliably enjoyed it. The pattern is the same: we hang back to protect ourselves from a rejection that is mostly imagined, and that self-protection reads from the outside as coldness or disinterest. Going first — the greeting, the introduction, the genuine question — isn't social risk-taking; it's correcting a bias. The confident bearing people admire is usually just someone who has stopped waiting for permission that was always going to be granted.",
        deployment: [
          "Be the one who crosses the room, offers the hand, and says the first warm line — treat the other person's welcome as already given.",
          "Open with genuine curiosity about them, not a performance of yourself: a question beats a pitch.",
          "When your nerves say 'they don't want to be bothered,' name it as the liking gap and act against it.",
          "Greet people you half-know by name and with evident gladness — the small re-approach compounds into a reputation for warmth.",
        ],
        examples: [
          "\"I've been wanting to meet you — I'm [name]. What's had your attention lately?\"",
          "Arriving at a gathering: make a lap and greet three people before you let yourself stand with the one you already know.",
        ],
      },
      {
        id: "gift-of-attention",
        code: "B-02",
        name: "The Gift of Full Attention",
        source: "Przybylski & Weinstein (2013) — phone presence and closeness; attention economics",
        tagline:
          "Undivided attention is the rarest thing you can give. Give it completely and people feel it as respect.",
        science:
          "In controlled studies, the mere visible presence of a phone on the table — untouched — lowered the felt closeness, trust, and conversation quality between two people, and the effect was strongest during meaningful conversations. Attention is now the scarcest social currency precisely because it is under constant assault; to receive someone's whole, unhurried focus has become rare enough to feel like a gift. The high-quality presence people describe as 'when he talks to you, you're the only person in the room' is not charisma in the mystical sense — it is the disciplined refusal to divide attention. It signals, without a word, that this person and this moment are worth more than the next notification.",
        deployment: [
          "Put the phone away — pocket or bag, not face-down on the table. Visible is still costly.",
          "Hold eye contact through the end of the other person's sentences; don't let your gaze drift to the door or the room.",
          "Single-task the conversation: don't scan for someone more important to talk to.",
          "When you must break away, name it and close cleanly — 'I want to keep this going; can I find you in ten?'",
        ],
        examples: [
          "Before a one-on-one: 'Give me one second' — silence the phone and stow it, so they see the moment being protected.",
          "\"Say that again — I want to make sure I actually get it.\" (attention made audible)",
        ],
      },
      {
        id: "be-the-calm",
        code: "B-03",
        name: "Be the Calm in the Room",
        source: "Hatfield, Cacioppo & Rapson — Emotional Contagion; physiological co-regulation research",
        tagline:
          "Emotions spread automatically. The most regulated nervous system in the room sets the temperature for everyone.",
        science:
          "Emotional contagion is real and largely involuntary: through rapid facial mimicry, vocal matching, and posture, people unconsciously 'catch' the emotional states of those around them within seconds. Anxiety, irritation, and haste transmit as readily as calm and warmth. This means composure is not just a private virtue — it is a service you render to everyone present, because your steadiness gives their nervous systems something settled to synchronize with. The person who stays measured when news is bad, who lowers rather than raises the temperature, becomes the one others instinctively look to and want near them under pressure. Panic is loud, but calm is contagious too, and it is calm that reads as strength.",
        deployment: [
          "Under stress, deliberately slow your breathing and your speech first — your regulation downstream-regulates the room.",
          "Lower your volume and pace when others raise theirs; the contrast pulls the group toward you, not away.",
          "Deliver hard news evenly and without flinching — how you say it teaches people how alarmed to be.",
          "Protect your own state upstream (sleep, margin, recovery) so there's calm available to lend.",
        ],
        examples: [
          "In a crisis: \"Okay. Here's what we know, here's what we don't, and here's the next single thing we do.\" — steady cadence, no adrenaline in the voice.",
          "When someone arrives agitated, meet them a notch calmer than feels natural and watch them settle to your level.",
        ],
      },
      {
        id: "unhurried-frame",
        code: "B-04",
        name: "The Unhurried Frame",
        source: "Cabane — The Charisma Myth (presence); status signaling of time and pace",
        tagline:
          "Haste signals low status and low control. Moving, speaking, and pausing without rush signals that you belong here.",
        science:
          "Perceived time-abundance is a quiet status signal: people who rush, over-explain, fill every silence, and answer before the question lands communicate that their time is not their own and that they are anxious to be approved of. The unhurried — who let a beat of silence sit, who finish their sentences, who don't scramble to fill gaps — read as secure and in command of the moment. Cabane frames this as presence: the discipline of being fully in the current moment rather than mentally racing ahead. Crucially, this is a tempo, not a slowness of mind; it is the difference between a considered pause and a nervous scramble. The pause before you answer a hard question does more for your credibility than the answer itself.",
        deployment: [
          "Let a full beat of silence pass before answering an important question — the pause reads as thought, not hesitation.",
          "Finish your sentences; resist the upward, hurried trail-off that invites interruption.",
          "Don't rush to fill silences — the person who is comfortable with the pause usually controls the exchange.",
          "Walk, sit, and gesture with deliberate ease; the body's tempo teaches the room how to read you.",
        ],
        examples: [
          "Asked something pointed: a two-second pause, eye contact held, then — 'That's a fair question. Here's how I see it.'",
          "In a meeting that's spiraling: slow your own delivery by half; the group's tempo tends to follow the calmest voice.",
        ],
        caution:
          "Unhurried is a tempo of security, not indifference. Pair it with visible engagement — warmth and attention — or calm can read as aloof.",
      },
      {
        id: "first-impression-warmth",
        code: "B-05",
        name: "Lead With the Face",
        source: "Willis & Todorov (2006) — 100ms trait inference; Ambady & Rosenthal thin slices",
        tagline:
          "Trust is judged in a tenth of a second and anchors everything after. Let warmth reach your face before your words.",
        science:
          "People form durable trait judgments — trustworthiness, competence, likeability — from a face in roughly 100 milliseconds, and longer exposure mostly increases confidence in that snap verdict rather than changing it. 'Thin slice' research shows these first impressions are stubborn anchors: the rest of the interaction gets interpreted through them. Trustworthiness and warmth are read fastest of all. The practical implication is not manipulation but readiness: if your resting expression is guarded, distracted, or braced, that is the frame everything you say afterward has to fight. A genuine, unforced openness in the face and a beat of steady eye contact in the first moment sets a frame of goodwill that the whole exchange then rides on.",
        deployment: [
          "Soften and open your expression a moment before you engage, not after — the first frame is the one that sticks.",
          "Make brief, warm eye contact on arrival before you speak; the eyes register as sincerity.",
          "Mind your resting face in default moments (walking in, waiting, listening) — people read it constantly.",
          "Let the smile be genuine and reach the eyes; a performed smile is caught as fast as a real one is felt.",
        ],
        examples: [
          "Walking into a meeting: a warm, unhurried scan of the room and a nod to a few faces before you sit — you've set the frame before agenda one.",
          "Greeting someone: eye contact and an open expression land first; the words follow a half-second behind.",
        ],
      },
      {
        id: "dress-with-intention",
        code: "B-06",
        name: "Dress a Notch Above",
        source: "Adam & Galinsky (2012) — Enclothed Cognition (the wearer effect); everyday first-impressions",
        tagline:
          "What you wear changes how others read you and how you perform. Dress slightly above the room, always clean and well-fitted.",
        science:
          "Adam and Galinsky's 'enclothed cognition' experiments showed that clothing can alter the wearer's own psychology: subjects who wore a coat described as a doctor's coat performed better on an attention task than those told the same coat was a painter's — same garment, different meaning, different behavior. That is the narrow, demonstrated effect. The broader, common-sense half is that dress is also among the first things others read: turning up visibly considered reads as regard for the occasion, while turning up sloppy reads as the opposite before you speak. Dressing with intention is not vanity or expense — fit, cleanliness, and appropriateness matter far more than labels. The man who dresses a notch above the expectation tends to be read as someone who has his standards in order.",
        deployment: [
          "Dress one notch above the room's baseline — err toward considered, never underdressed.",
          "Prioritize fit and cleanliness over cost or labels; a pressed, well-fitted simple outfit beats expensive and careless.",
          "Attend to grooming and details — shoes, nails, a tidy line — the small signals are read closely.",
          "Let your appearance match the respect you want to convey for the person or occasion.",
        ],
        examples: [
          "Arriving to a meeting slightly sharper than required — the effort is registered as respect before a word.",
          "Choosing the well-fitted, pressed basics over the flashy but careless option.",
        ],
      },
      {
        id: "arrive-early",
        code: "B-07",
        name: "Arrive Early and Unhurried",
        source: "Kahneman & Tversky — the planning fallacy; punctuality as respect for others' time",
        tagline:
          "Being on time is a promise kept about the most nonrenewable thing others have. Arrive early so you enter composed.",
        science:
          "Chronic lateness is rarely malice — it's usually the planning fallacy, our well-documented tendency to underestimate how long things will take even when we know better. But the impact on others doesn't care about the cause: making people wait spends their time, the one resource no one gets back, and it quietly signals that your schedule outranks theirs. Punctuality is therefore a form of keeping your word — an implicit promise honored — and it compounds into a reputation for reliability. There is a second, private dividend: arriving with margin means you enter settled rather than flustered, which feeds directly into presence and calm. The man who is reliably a few minutes early, unhurried and ready, is read as both respectful and in command of himself.",
        deployment: [
          "Plan to arrive early, not on time — build a buffer against the planning fallacy that makes everyone late.",
          "Treat other people's time as more valuable than your own convenience; don't make them wait.",
          "Use the early margin to settle and prepare, so you enter composed rather than rushed.",
          "If you will be late, tell them as early as possible — the warning is the courtesy.",
        ],
        examples: [
          "Showing up five minutes early, calm and ready, rather than sliding in on the dot flustered.",
          "\"I'm running eight minutes behind — I'm sorry, start without me if it helps.\" (sent the moment you know)",
        ],
      },
    ],
  },
  {
    id: "integrity-word",
    code: "17",
    name: "Integrity & Word",
    brief:
      "Reliability is the substrate of every reputation. What you promise, own, and protect when it costs you is who you actually are.",
    principles: [
      {
        id: "keep-your-word",
        code: "H-01",
        name: "Keep Your Word",
        source: "Cialdini — commitment & consistency; repeated-game trust research (Axelrod)",
        tagline:
          "Small kept promises are the atomic unit of trust. Under-promise, over-deliver, and let reliability compound.",
        science:
          "Trust is built the way compound interest is: through many small, reliable deposits, and it is destroyed by a single conspicuous withdrawal. Game-theoretic work on repeated interaction (Axelrod's tournaments) shows that the strategies that win over time are those that are clear, consistent, and dependable — reputation for reliability is itself a form of power because it lets others plan around you. In everyday terms, the person whose 'I'll get it to you by Thursday' is simply true becomes the person others route their most important things through. The rare, quiet dependability of doing exactly what you said — no reminder needed — is more magnetic than charm, because charm is common and reliability is not.",
        deployment: [
          "Make fewer promises than you're tempted to, then keep every one — a smaller word kept beats a larger word broken.",
          "Under-promise the timeline and over-deliver on it; let people be pleasantly surprised, never let down.",
          "Write down what you committed to so 'I forgot' never becomes 'I can't be trusted.'",
          "If you can't deliver, say so early and renegotiate — a proactive heads-up preserves trust; silence spends it.",
        ],
        examples: [
          "\"I'll have it to you by Thursday\" — and it arrives Wednesday, without a reminder.",
          "\"I said Friday and I'm not going to make it well — I can get you a solid draft Monday, or a rough version Friday. Which serves you?\"",
        ],
      },
      {
        id: "own-it-fast",
        code: "H-02",
        name: "Own It Fast and Clean",
        source: "Kim et al. — integrity vs competence violations; Lewicki — trust repair",
        tagline:
          "A fast, unqualified 'I was wrong, here's what I'll do' repairs trust. 'But' and excuse destroy it.",
        science:
          "Research on trust repair distinguishes how you handle a fault from the fault itself. For competence failures, an apology with a credible fix restores trust; across the board, the ownership that works is fast, specific, and free of the word 'but.' The moment you append a justification, listeners hear the excuse and discount the apology — you've signaled that protecting your image matters more than the harm done. Counterintuitively, clean ownership of a mistake often raises standing rather than lowering it, because it demonstrates the security and honesty that people most want in someone they rely on. The secure man can say 'that was my error' as a complete sentence; the insecure one can't reach the period without a defense.",
        deployment: [
          "Own it before you're caught, and faster than feels comfortable — speed of ownership is read as character.",
          "Drop the word 'but' from apologies; the clause after it deletes everything before it.",
          "Name the specific fault and the specific fix: what happened, and what you'll do differently.",
          "Don't over-grovel — one clean ownership plus corrective action beats repeated self-flagellation.",
        ],
        examples: [
          "\"That was my miss. I moved without looping you in, and it cost us a day. Going forward I'll confirm before I ship. Here's how I'm fixing it now.\"",
          "No version with 'but I was slammed' — the reason is for your planning, not their apology.",
        ],
      },
      {
        id: "same-in-every-room",
        code: "H-03",
        name: "Be the Same in Every Room",
        source: "Skowronski et al. (1998) — spontaneous trait transference; reputation as portable information",
        tagline:
          "Speak of people the same whether they're present or absent. What you say about others, listeners quietly attribute to you.",
        science:
          "Spontaneous trait transference is a striking, replicated finding: when you describe someone else as, say, dishonest or petty, listeners unconsciously and enduringly associate those very traits with you — the messenger gets tagged with the message. This is why disparaging an absent third party quietly poisons how the present party sees you, and why witnessing your two-facedness leads people to correctly infer you'll do the same to them. Reputation is information that travels without you, and inconsistency across rooms is the fastest way to corrupt it. The inverse builds trust: the man who is recognizably the same person in the boardroom, the break room, and the group chat is legible and safe to rely on. Integrity in its original sense means integrated — undivided — and that wholeness is felt by everyone who watches you move between contexts.",
        deployment: [
          "Never say anything about an absent person you wouldn't say with them in the room.",
          "Hold the same manners and warmth regardless of who's watching or who can help you.",
          "Refuse to be recruited into the bonding-through-bashing that groups offer; redirect or stay out.",
          "Let your values show most where they cost you something — that's where people decide if they're real.",
        ],
        examples: [
          "When a group turns to trashing someone absent: \"He's not here to answer that — what did you make of his actual proposal?\"",
          "Treat the intern's idea and the executive's idea with the same seriousness in front of both.",
        ],
      },
      {
        id: "guard-confidences",
        code: "H-04",
        name: "Guard What's Told in Confidence",
        source: "Feinberg et al. — gossip & reputation; discretion and perceived safety",
        tagline:
          "The one who never repeats a private thing becomes the one everyone trusts with everything.",
        science:
          "People unconsciously and continuously sort others into 'safe' and 'unsafe' to confide in, and a single repeated confidence reclassifies you permanently. Discretion is a compounding asset: each private thing you're told and don't repeat deepens the sense that you can be trusted with more, and access to what people really think and fear is one of the quietest forms of influence there is. The man who holds confidences becomes a kind of vault others gravitate toward — not because he's useful to gossip with, but because he never is. Conversely, the person who trades in others' secrets to seem 'in the know' buys momentary status at the cost of every future confidence.",
        deployment: [
          "Treat anything shared privately as sealed unless explicitly told otherwise.",
          "Resist the small status hit of being the one who 'knows' — it's paid for with your trustworthiness.",
          "When you need to check whether something can be shared, ask: 'Is this something I can repeat, or is it just between us?'",
          "Don't relay secondhand confidences either — 'she told me in confidence, but…' still marks you as leaky.",
        ],
        examples: [
          "\"That stays with me.\" — and it does, permanently.",
          "When pressed for something you were told privately: \"That's not mine to share.\"",
        ],
      },
      {
        id: "candor-with-care",
        code: "H-05",
        name: "Say the Hard True Thing With Care",
        source: "Kim Scott — Radical Candor; care personally + challenge directly",
        tagline:
          "Withholding the truth to be liked is a quiet betrayal. The highest respect is honesty delivered with evident goodwill.",
        science:
          "Kim Scott's framework maps two axes — caring personally and challenging directly — and shows that dropping the challenge to stay liked ('ruinous empathy') is one of the most common and damaging failures, because it deprives people of the information they need to grow while feeling, falsely, like kindness. Real candor requires both: the difficult truth and manifest care in how it's delivered. People can absorb remarkably hard feedback when they trust the goodwill behind it, and they resent even mild feedback delivered without it. The man who will tell you the truth others are too comfortable or too cowardly to say — and does it in a way that's clearly for you, not at you — becomes rare and valued precisely because most people opt for silence.",
        deployment: [
          "Lead with evident goodwill, then say the hard thing plainly — care first, then challenge, in the same breath.",
          "Be specific and behavioral, not characterological: describe what you saw, not who they are.",
          "Ask permission and pick the moment: hard truths land better sought than ambushed.",
          "Say the thing others are avoiding — but privately, and with a path forward attached.",
        ],
        examples: [
          "\"I'm telling you this because I think you're better than how that landed: in the meeting, cutting Sam off twice cost you the room. You had the stronger point.\"",
          "\"Can I give you something direct? I'd want it if I were you.\"",
        ],
        caution:
          "Candor without care is just cruelty wearing an honesty badge. If you can't locate genuine goodwill first, wait until you can.",
      },
      {
        id: "do-good-quietly",
        code: "H-06",
        name: "Do Good Quietly",
        source: "Sezer, Gino & Norton (2018) — humblebragging; modesty and sincerity research",
        tagline:
          "Do the good thing and let it be discovered. Announcing your own virtue spends the credit you were building.",
        science:
          "Sezer, Gino, and Norton found that humblebragging — disguising a boast as a complaint or false modesty ('I'm exhausted from everyone always asking me for help') — is perceived as less sincere and less likeable than either straightforward bragging or plain complaining, because people detect and resent the manipulation. The broader principle is that virtue announced is virtue discounted: the moment you point at your own generosity, honesty, or hard work, observers reweight it as performance. Good done quietly, by contrast, accrues full reputational value precisely because it wasn't advertised — and it tends to be discovered and spoken of by others, which is far more credible than self-report. The secure man does the right thing whether or not it's seen, and resists the small itch to make sure it was noticed.",
        deployment: [
          "Do the favor, the fix, or the kindness without narrating it afterward.",
          "Kill the humblebrag entirely — if it's worth saying plainly, say it plainly; otherwise let it go.",
          "Let others discover and report your contributions; it lands far harder from their mouth than yours.",
          "Measure yourself by what you'd still do if no one would ever know.",
        ],
        examples: [
          "Quietly covering a colleague's gap and never mentioning it — until someone else notices.",
          "Resisting the 'so busy helping everyone' line; the help speaks without the caption.",
        ],
      },
    ],
  },
  {
    id: "grace-under-fire",
    code: "18",
    name: "Grace Under Fire",
    brief:
      "Anyone is composed when things go their way. Class is what you do with refusal, criticism, provocation, and defeat.",
    principles: [
      {
        id: "accept-no-with-grace",
        code: "E-01",
        name: "Accept No With Grace",
        source: "Brehm — reactance theory; relationship-preservation research on rejection",
        tagline:
          "Take a refusal without pressure or sulk. The man who accepts no well is the one later given more yeses.",
        science:
          "How a person handles 'no' is one of the most revealing behaviors there is. Pushing after a refusal triggers reactance — the other person digs in to protect their autonomy — and it signals neediness and a transactional view of the relationship. Accepting a no cleanly, even warmly, does the opposite: it signals security and abundance and tends to preserve the relationship, which is what keeps the door open for a future yes rather than slamming it. The grace is not in never being disappointed; it's in not making your disappointment the other person's problem. A gracious 'understood — thanks for considering it' leaves a far better residue than a sigh, a guilt trip, or one more ask.",
        deployment: [
          "Take the first no at face value; don't relitigate it in the moment.",
          "Thank them for considering it — genuinely — and mean the relationship more than the ask.",
          "Leave the door open without pressure: 'if that changes, I'd love to revisit.'",
          "Never punish a no with coldness or guilt; the punishment is remembered long after the request is forgotten.",
        ],
        examples: [
          "\"Completely understand — thanks for hearing me out. If the situation shifts, I'd welcome another look.\"",
          "Told no on a request: a warm nod and a subject change, not a wounded silence.",
        ],
      },
      {
        id: "criticism-as-data",
        code: "E-02",
        name: "Receive Criticism as Data",
        source: "Stone & Heen — Thanks for the Feedback; Dweck — growth mindset",
        tagline:
          "Meet criticism with 'thank you' and a question, not a defense. Separate the signal from the sting.",
        science:
          "Stone and Heen show that the reflex to defend against feedback is what wastes it: the moment you're explaining why the critic is wrong, you've stopped extracting the one useful thing they might be right about. Feedback arrives tangled — poorly delivered, partly unfair, emotionally charged — and the skill is sorting the signal from the noise rather than rejecting the whole package because the wrapping was bad. A growth orientation treats criticism as information about the work, not a verdict on the self, which is exactly what lets someone stay open under it. The visible calm of a person who can hear 'here's what didn't work' and respond with 'tell me more' rather than a rebuttal is one of the clearest markers of security and class.",
        deployment: [
          "Default first response to any critique: 'Thank you — say more about that.'",
          "Separate the delivery (which may be clumsy or unfair) from the content (which may be right).",
          "Ask for the one thing you could do differently rather than defending the whole.",
          "Sit with it before responding; you don't have to accept or reject in the moment.",
        ],
        examples: [
          "\"That's useful — what specifically would you have done differently?\"",
          "Instead of 'well, actually…': 'Thank you. Let me think on that and come back.'",
        ],
      },
      {
        id: "hard-on-problem",
        code: "E-03",
        name: "Hard on the Problem, Easy on the Person",
        source: "Fisher & Ury — Getting to Yes; Gottman — contempt research",
        tagline:
          "Attack the problem, never the person. The instant it becomes personal, thinking stops and defense begins.",
        science:
          "A foundational principle of Getting to Yes is to separate the people from the problem: sit side-by-side against the issue rather than face-to-face against each other. The moment a disagreement becomes an attack on the person, it triggers defense, and defense ends problem-solving — nobody reasons well while protecting their worth. Gottman's research adds the sharp edge: contempt, the sense of being looked down on, is the single strongest predictor of relational rupture. The man who can be relentless on the substance while remaining unmistakably warm toward the human across from him keeps the alliance intact through hard conversations, which is exactly when most people fracture it. Toughness and kindness are not a trade-off; the highest form pairs full pressure on the problem with full respect for the person.",
        deployment: [
          "Frame it as 'us versus the problem,' literally: 'How do we solve this?' not 'Why did you?'",
          "Critique the work, the decision, or the outcome — never the character or intelligence of the person.",
          "Keep your warmth visibly on even as you press hard on the substance.",
          "Watch for contempt in yourself — sarcasm, an eye-roll, a dismissive tone — and cut it at the root.",
        ],
        examples: [
          "\"The plan has a hole in the timeline — let's figure out how to close it,\" not \"You always underestimate.\"",
          "\"I disagree hard with the call, and I still think you're the right person for this.\"",
        ],
      },
      {
        id: "gap-before-response",
        code: "E-04",
        name: "Put a Gap Between Trigger and Response",
        source: "Goleman — amygdala hijack; Kahneman — System 1/System 2",
        tagline:
          "The pause is where character lives. Never send, say, or decide from the hot state.",
        science:
          "Under provocation, the fast, emotional system fires before the slower, deliberate one can weigh in — Goleman's 'amygdala hijack' — and action taken in those first seconds is reliably worse than action taken after the surge passes. The single most reliable upgrade to how you handle conflict is not becoming un-triggerable but inserting a deliberate gap: a breath, a walk, a night, a saved-not-sent draft. That gap lets the deliberate system come back online, and it is almost always the difference between a response you're proud of and one you have to apologize for. The composure others read as maturity is usually just a person who has trained themselves not to act in the hot minute — who knows the feeling will pass and the words won't.",
        deployment: [
          "Build a default delay: for anything charged, wait before you send or say it — minutes for small, a night for large.",
          "Name the feeling to yourself ('I'm angry right now') — labeling it lowers its grip.",
          "Draft the hot reply if you must, then don't send it; write the real one after the surge passes.",
          "Physically step away when flooded — a short walk resets the system faster than willpower does.",
        ],
        examples: [
          "\"Let me sit with this and come back to you tomorrow.\" — bought time, saved relationship.",
          "The furious email gets written, saved to drafts, and rewritten the next morning at a third the length.",
        ],
      },
      {
        id: "refuse-contempt",
        code: "E-05",
        name: "Refuse Contempt",
        source: "Gottman — contempt as the top predictor of relational failure",
        tagline:
          "Sarcasm, mockery, and the eye-roll win the moment and lose the person. Disagree without disdain.",
        science:
          "Across decades of Gottman's research, contempt — treating another as beneath you via sarcasm, mockery, name-calling, or the eye-roll — is the strongest single predictor that a relationship will fail, more corrosive than anger, criticism, or conflict itself. Contempt communicates disgust and superiority, and it is remembered long after the disagreement's content is forgotten. It is also seductive: it offers a cheap hit of feeling superior and often a laugh from bystanders. The man who refuses it — who can be in sharp disagreement, even in conflict, without ever signaling that the other person is lesser — protects every relationship he's in. This is not weakness; holding your fire on contempt while still stating your position plainly takes far more strength than the cheap shot does.",
        deployment: [
          "Cut sarcasm and mockery from disagreement entirely — the laugh is never worth the residue.",
          "Watch the micro-signals: the eye-roll, the scoff, the 'obviously' — they broadcast contempt louder than words.",
          "Attack positions, never dignity; you can demolish an argument while honoring the person.",
          "When you feel superior, that's the exact moment to check your tone — contempt rides in on that feeling.",
        ],
        examples: [
          "\"I see it completely differently, and here's why\" — flat, respectful, no scorn.",
          "Resisting the easy joke at someone's expense even when the room would laugh.",
        ],
      },
      {
        id: "magnanimous",
        code: "E-06",
        name: "Magnanimous in Win and Loss",
        source: "Crocker & Wolfe — contingencies of self-worth; Aristotle — magnanimity (megalopsychia)",
        tagline:
          "How you carry victory and defeat is watched more closely than the outcome. No gloating, no sulking.",
        science:
          "Crocker and Wolfe's work on contingencies of self-worth shows that when self-esteem is staked on external outcomes — winning, beating others — every result becomes an emotional referendum on the self, producing the gloating high and the sulking low. The person whose worth rests on more stable ground can hold both outcomes lightly, which is precisely what magnanimity looks like from outside: crediting others in a win, owning your part in a loss, congratulating a rival sincerely. Aristotle named this megalopsychia — greatness of soul — the bearing of someone too secure to be inflated by success or crushed by failure. People form lasting judgments of character less from whether you won than from how you held it, because the holding reveals where your worth actually lives. The scoreboard is temporary; the reputation for how you carried it is not.",
        deployment: [
          "In victory, credit the people and luck that carried it; never spike the ball on someone.",
          "In defeat, own your part first, congratulate the winner sincerely, and skip the excuses.",
          "Extend warmth to a rival at exactly the moment it's hardest — that's when it's seen and remembered.",
          "Keep the same bearing whether you won or lost; the steadiness across both is the whole point.",
        ],
        examples: [
          "After winning: \"Honestly, their pitch pushed us to make ours better — good team over there.\"",
          "After losing: \"They earned it. We've got things to fix, starting with what I own.\"",
        ],
      },
      {
        id: "refuse-to-complain",
        code: "E-07",
        name: "Refuse the Victim Story",
        source: "Bushman (2002) — venting increases aggression; rumination research",
        tagline:
          "Complaining fixes nothing and repels everyone. Route every grievance to action or acceptance — never marinate in it.",
        science:
          "The catharsis theory of venting is a myth: Bushman's experiments showed that venting anger — the supposed 'release' — actually increases aggression and keeps the emotion alive rather than discharging it. Rumination research points the same way: rehearsing grievances deepens the groove instead of dissolving it. Chronic complaining and a victim narrative do triple damage — they keep you stuck in a state you can't act from, they cede your agency to circumstances, and they are draining to be around, so people quietly withdraw. The high-quality alternative isn't forced positivity or swallowing real problems; it's the discipline of routing every grievance to one of two exits: an action you can take, or an acceptance you can make. The man who doesn't complain, who owns his part and moves, is both more effective and vastly better company.",
        deployment: [
          "Route every complaint to an exit: what can I do about it, or what must I accept? Then stop.",
          "Catch the victim narrative ('this always happens to me') and swap it for agency ('here's my next move').",
          "Don't vent to discharge anger — it feeds it; act, reframe, or let it go instead.",
          "Be the person who brings solutions and steadiness to a group, not fresh grievances.",
        ],
        examples: [
          "\"Yeah, it's a bad situation. Here's what I'm going to do about it.\"",
          "Catching a spiral of complaint and asking yourself: action or acceptance?",
        ],
        caution:
          "This is about chronic griping, not silence — real problems still need to be named and raised. The line is grievance-as-identity versus problem-as-something-to-solve.",
      },
      {
        id: "forgive-and-release",
        code: "E-08",
        name: "Forgive and Release",
        source: "Worthington — REACH forgiveness model; research on forgiveness, health, and relational repair",
        tagline:
          "A grudge is a weight you carry for someone who isn't holding it. Release it for your own sake, on your own terms.",
        science:
          "Decades of research (Worthington's REACH model and the wider forgiveness literature) link the capacity to forgive with lower stress, reduced anxiety and depression, better cardiovascular markers, and stronger relationships — while chronic grudge-holding correlates with the reverse. Forgiveness here is not condoning the wrong, forgetting it, or necessarily reconciling; it is the internal act of releasing the resentment so it stops taxing you. Grudges feel like power over the offender but function as a rent you pay daily while they carry nothing. The secure man can name a wrong clearly, decline to be defined by it, and let the resentment go — which frees his attention and his equanimity for better things. This is one of the least visible and most freeing forms of strength.",
        deployment: [
          "Separate forgiveness from reconciliation: you can release resentment without reopening the door.",
          "Name the wrong honestly first — forgiveness isn't pretending it didn't happen.",
          "Choose release for your own freedom, not the other person's deserving; it's for you.",
          "Don't collect grievances or keep a ledger of slights; travel light.",
        ],
        examples: [
          "\"That hurt, and I'm not carrying it anymore\" — a decision made for yourself.",
          "Declining to bring up an old wound as ammunition in a new disagreement.",
        ],
        caution:
          "Releasing resentment is not tolerating ongoing harm. Forgiveness and firm boundaries live together — let go of the grudge, keep the standard.",
      },
    ],
  },
  {
    id: "generosity-regard",
    code: "19",
    name: "Generosity & Regard",
    brief:
      "People decide how they feel about you from how you make them feel about themselves. Regard, freely given, is magnetic.",
    principles: [
      {
        id: "make-people-feel-important",
        code: "W-01",
        name: "Make Each Person Feel Significant",
        source: "Carnegie — How to Win Friends; mattering research (Rosenberg; Elliott)",
        tagline:
          "The deepest human hunger is to feel significant. Meet it sincerely and people orient toward you for life.",
        science:
          "'Mattering' — the felt sense that one is noticed, valued, and would be missed — is a well-studied psychological need linked to belonging, self-worth, and even mental health, and it is chronically under-fed. Carnegie built an entire philosophy on the observation that people are moved less by what you say than by how you make them feel about themselves in your presence. The mechanism isn't flattery, which is detected and discounted; it's genuine, specific attention that communicates 'you register to me, you matter here.' People remember, sometimes for years, the person who made them feel like the most important one in the room — and that feeling, not any clever line, is what draws people back. The rarest and most magnetic quality is making others feel larger, not making yourself look large.",
        deployment: [
          "Make sincerity your only tool — specific, true appreciation, never generic flattery.",
          "Notice and name what people actually did or contributed; 'seen' beats 'praised.'",
          "Bring quieter people in: 'I want to hear what you think about this' turns a spectator into a participant.",
          "Aim to leave everyone a little taller than you found them — that residue is your reputation.",
        ],
        examples: [
          "\"The thing you said last week actually changed how I approached this — I've been meaning to tell you.\"",
          "In a group, turning to the one who hasn't spoken: \"You've done this before — what are we missing?\"",
        ],
      },
      {
        id: "remember-what-matters",
        code: "W-02",
        name: "Remember What Matters to Them",
        source: "Carnegie — the detail; effort as a signal of regard",
        tagline:
          "Recalling the small thing they mentioned once is proof of attention that money can't buy.",
        science:
          "Remembering the worry someone mentioned in passing, the trip they were nervous about, or the deadline hanging over them is a disproportionately powerful signal because it is costly: it proves you were genuinely paying attention and then carried them in your mind afterward. Effort is the honest currency of care — anyone can offer words, but recall requires that you actually attended. (Names get their own protocol in W-07; this is about the details of their life.) Following up on the specific thing — 'how did the surgery go?', 'did the interview happen?' — lands far harder than any amount of general warmth, because it says: you weren't just polite with me, you kept me.",
        deployment: [
          "Note the details people share — a deadline, a worry, an event — and follow up on them later.",
          "Ask the specific follow-up: not 'how are you?' but 'how did Tuesday go?'",
          "Track what the people they love are up to, not just them — the concern extends to their world.",
          "Keep light notes if you must — the follow-through matters more than the method.",
        ],
        examples: [
          "\"How did your daughter's recital go — that was this weekend, right?\"",
          "\"Last time you mentioned the move was stressing you out. Did it settle?\"",
        ],
      },
      {
        id: "credit-and-blame",
        code: "W-03",
        name: "Give Credit Lavishly, Take Blame First",
        source: "Collins — Level 5 Leadership (the window and the mirror); attribution",
        tagline:
          "Point the credit outward and the blame at yourself first. The secure do this, and it makes them magnetic to work with.",
        science:
          "Jim Collins's study of the best leaders found a consistent signature he called 'the window and the mirror': in success they look out the window and credit others and circumstances; in failure they look in the mirror and take responsibility themselves. Ordinary ego does the reverse. The generous attribution pattern is disarming precisely because it's rare and because it's secure — it takes a self-worth that isn't threatened by sharing credit or absorbing blame. People fight to work with and for someone who reliably passes credit down and out and takes the hit up front, because it's safe there: your wins will be seen and your mistakes won't be weaponized. Hoarding credit buys a little status once; giving it away buys loyalty repeatedly.",
        deployment: [
          "In any win, name the specific people who made it happen before you say anything about yourself.",
          "In any failure on your watch, take responsibility first and publicly, before assigning any elsewhere.",
          "Pass credit downward especially — lifting a junior person's visibility costs you nothing and earns loyalty.",
          "Never claim an idea that wasn't yours, and correct the record when credit lands on you wrongly.",
        ],
        examples: [
          "\"This was mostly Priya — she caught the thing that unlocked it.\"",
          "\"That's on me. I set the direction and it was the wrong one.\"",
        ],
      },
      {
        id: "champion-when-absent",
        code: "W-04",
        name: "Champion People When They're Not There",
        source: "Feinberg et al. — reputation & gossip; praise behind the back",
        tagline:
          "Praise travels and is believed. Speaking well of the absent builds trust with everyone present.",
        science:
          "Positive reputational information spreads through networks, and praise that reaches someone secondhand can carry unusual credibility precisely because it seems to have no ulterior motive — you didn't know it would get back to them. Speaking well of people when they aren't in the room does double duty: it may eventually reach them as that kind of credible praise, and it signals to everyone present that you're the kind of person who builds others up rather than tears them down (which they correctly infer means you'll speak well of them too). It's the exact inverse of the trust-poisoning that gossip produces. The habit of being someone's advocate in the rooms they'll never know about is one of the most quietly powerful things you can do for a relationship.",
        deployment: [
          "Say the good thing about someone specifically when they're not there to hear it.",
          "When someone's name comes up, add the genuine strength you know about them.",
          "Let praise reach people indirectly — it's more believed than praise to the face.",
          "Be the person who defends the absent, not the one who joins the pile-on.",
        ],
        examples: [
          "To a manager: \"You should know how much of that launch was Dan — he doesn't advertise it.\"",
          "When someone's being doubted in the room: \"In my experience he's exactly the person you want on this.\"",
        ],
      },
      {
        id: "waiter-test",
        code: "W-05",
        name: "Pass the Waiter Test",
        source: "Keltner — power & empathy; character revealed toward those who can't reciprocate",
        tagline:
          "How you treat those who can do nothing for you is the truest read on your character. People watch it closely.",
        science:
          "The 'waiter rule' — judging a person by how they treat the waiter, not the boss — endures because it works: behavior toward those with no power over you strips away the incentive to perform and reveals the default setting. Keltner's research shows that status and power tend to erode empathy and increase self-serving behavior, which makes the deliberate, consistent decency toward people who can't advance you a genuine signal of character rather than strategy. Observers, including the powerful ones you're trying to impress, register this instantly and weight it heavily: someone gracious upward but dismissive downward is read as a fraud, while someone equally warm to the intern, the server, and the CEO is read as the real thing. Treating everyone as though they matter — because they do — is the most legible form of class there is.",
        deployment: [
          "Give the same warmth, eye contact, and patience to the server, the assistant, and the junior as to the decision-maker.",
          "Learn the names of the people others overlook, and use them.",
          "Say please and thank you to everyone, always — it costs nothing and reveals everything.",
          "Never perform kindness for the powerful while withholding it from the powerless; the contrast is what people remember.",
        ],
        examples: [
          "Thanking the server by name and meeting their eyes mid-conversation, without breaking stride.",
          "Treating the new hire's question with the same seriousness you'd give the executive's.",
        ],
      },
      {
        id: "genuinely-curious",
        code: "W-06",
        name: "Be Interested, Not Interesting",
        source: "Carnegie — become genuinely interested; Huang et al. (2017) — question-asking and liking",
        tagline:
          "Curiosity is more attractive than being impressive. The one who asks and listens is the one people remember warmly.",
        science:
          "People who ask more questions — especially follow-up questions that build on what was just said — are rated as more likeable, and the effect holds because follow-ups signal genuine attention and responsiveness rather than waiting for your turn to talk. Carnegie's older formulation was blunter: you make more friends in two months by becoming interested in others than in two years trying to get others interested in you. The disposition underneath the tactic is humility — the willingness to make the other person the subject and yourself the audience. Most people are quietly desperate to be asked about and listened to, and are starved of it; the man who is authentically curious, who draws people out and finds them interesting, is experienced as rare and warm in a world full of people waiting to talk.",
        deployment: [
          "Ask, then ask again — the follow-up question is where genuine interest shows.",
          "Aim to leave a conversation knowing something real about the other person, not to have delivered your highlights.",
          "Resist the topper — the reflex to match their story with a bigger one of your own.",
          "Listen to understand, not to reply; let there be a beat before you respond.",
        ],
        examples: [
          "\"Wait, go back — what made you decide to actually do it?\" (the follow-up that shows you were listening)",
          "Catching yourself about to one-up a story and instead asking, \"Then what happened?\"",
        ],
      },
      {
        id: "remember-names",
        code: "W-07",
        name: "Remember and Use Names",
        source: "Carnegie — a name is the sweetest sound; a practical name-recall protocol",
        tagline:
          "A person's own name is the sweetest sound to them. Learn it, use it, and never hide behind 'I'm bad with names.'",
        science:
          "Carnegie's observation — that a person's name is to them the sweetest and most important sound in any language — is offered here as durable practical wisdom rather than a strong empirical claim: a name is identity itself, and using it signals that the person registered to you as an individual rather than a face in the crowd. Where W-02 is about remembering the details of someone's life, this principle is narrower and mechanical — the discipline of actually catching and keeping the name in the first place. 'I'm terrible with names' is usually a failure of attention at the moment of introduction, not a fixed trait, and it yields to a few seconds of deliberate encoding: hear it, repeat it, attach it to the face. Using someone's name naturally later tends to be felt as warmth and recognition.",
        deployment: [
          "At introduction, actually listen for the name, repeat it back once, and use it in your next sentence.",
          "Encode it deliberately — link it to the face, a feature, or a rhyme in the first few seconds.",
          "Greet people by name when you see them again; the re-use is where the warmth compounds.",
          "If you forget, admit it warmly and ask again — 'remind me of your name, I want to get it right' beats avoiding it.",
        ],
        examples: [
          "\"Good to meet you, Daniel.\" ... later: \"Daniel, what did you make of that?\"",
          "\"I'm sorry — your name again? I want to get it right.\" (better than dodging it for the rest of the night)",
        ],
      },
      {
        id: "give-without-score",
        code: "W-08",
        name: "Give Without Keeping Score",
        source: "Adam Grant — Give and Take; generalized reciprocity and reputation",
        tagline:
          "Help freely, without tallying who owes you. Over a lifetime the generous — not the transactional — come out ahead.",
        science:
          "Adam Grant's research distinguishes givers, takers, and matchers, and finds that givers — people who help others without keeping a strict ledger of return — cluster at both the bottom and the very top of success distributions. The ones who reach the top give strategically and sustainably ('otherish' rather than selfless), but the engine is the same: generosity builds reputation and triggers generalized reciprocity, where help flows back through the network rather than directly from the person you helped. Transactional scorekeeping, by contrast, caps your relationships at the level of the last favor and makes you exhausting to deal with. The man who gives freely — introductions, time, credit, the five-minute favor — becomes someone the whole network quietly wants to see win.",
        deployment: [
          "Do the small favor when you can — the 'five-minute favor' costs little and compounds enormously.",
          "Give without invoicing: no mental ledger, no 'you owe me,' no favors weaponized later.",
          "Trust generalized reciprocity — help flows back through the network, not always from whom you helped.",
          "Give sustainably: generosity with boundaries lasts; the selfless doormat burns out and helps no one.",
        ],
        examples: [
          "\"Happy to — no need to return it, just pass it on to someone else sometime.\"",
          "Making the intro, sharing the contact, sending the resource — without tracking the tab.",
        ],
        caution:
          "Grant's own finding: unbounded selfless giving leads to burnout. Give generously and protect your reserves — 'otherish,' not martyr.",
      },
      {
        id: "specific-gratitude",
        code: "W-09",
        name: "Say Thank You, Specifically",
        source: "Grant & Gino (2010) — expressed gratitude and prosocial behavior; Emmons — gratitude research",
        tagline:
          "Specific, sincere thanks makes people feel valued and roughly doubles their willingness to help again.",
        science:
          "Grant and Gino found that a brief expression of gratitude had an outsized effect: people who were thanked for their help were more than twice as likely to help again, and the mechanism was not obligation but feeling socially valued — being thanked raises a person's sense of self-worth and belonging. The key is specificity: 'thank you for staying late to fix the deck — it's the reason the meeting landed' communicates that you actually saw what they did and what it cost them, where a generic 'thanks' evaporates. Gratitude, studied extensively by Emmons and others, also compounds for the giver, strengthening relationships and well-being over time. The habit of naming, promptly and precisely, the good that others do is one of the cheapest and most powerful ways to make people glad to be around you.",
        deployment: [
          "Be specific: name what they did and the difference it made, not just 'thanks.'",
          "Be prompt — gratitude lands hardest close to the act.",
          "Thank people privately and, when it costs you nothing and helps them, publicly.",
          "Notice the invisible labor — the things people do that usually go unremarked — and name those especially.",
        ],
        examples: [
          "\"Thank you for catching that error before it shipped — you saved us a very bad Monday.\"",
          "\"I don't say it enough: the way you keep this team steady makes my job possible.\"",
        ],
      },
      {
        id: "connect-people",
        code: "W-10",
        name: "Connect People Generously",
        source: "Granovetter — the strength of weak ties; the connector as network hub",
        tagline:
          "Introduce people who should know each other, expecting nothing. Generous connectors become the center of every network.",
        science:
          "Granovetter's classic finding on 'the strength of weak ties' showed that opportunities, information, and jobs travel most through loose acquaintances rather than close friends, because weak ties bridge otherwise separate clusters. The connector who habitually introduces people who should know each other sits astride those bridges — and while the reputational payoff is more common observation than a proven Granovetter result, the underlying logic is sound: connecting is a gift you give at almost no cost to yourself and usually without direct return, which is exactly why it reads as transparently generous. The man known as the one who 'knows everyone and is glad to introduce you' accrues genuine goodwill and a broad, well-bridged network over time.",
        deployment: [
          "When you meet someone, ask yourself who in your world they'd benefit from knowing — and make the intro.",
          "Use the warm double opt-in: check both sides want it, then introduce with genuine context about each.",
          "Connect without scorekeeping; the goodwill is the point, not a favor owed.",
          "Be specific in the introduction about why each person is worth the other's time.",
        ],
        examples: [
          "\"You two should really know each other — Maya, this is Tom; he built the exact system you're planning.\"",
          "\"Mind if I introduce you to someone? I think you'd genuinely help each other.\"",
        ],
      },
    ],
  },
  {
    id: "self-mastery",
    code: "20",
    name: "Self-Mastery & Standards",
    brief:
      "The outward poise others read as class is the surface of a private discipline. You govern yourself first; everything else follows.",
    principles: [
      {
        id: "promises-to-yourself",
        code: "A-01",
        name: "Keep Your Promises to Yourself",
        source: "Bandura — self-efficacy; self-trust and self-concept research",
        tagline:
          "Self-discipline is self-respect made visible. Every kept promise to yourself raises the baseline of what you expect.",
        science:
          "Bandura's work on self-efficacy shows that the belief 'I can do what I set out to do' is built primarily through mastery experiences — actually following through — and it predicts persistence, resilience, and performance across domains. Kept promises to yourself compound into self-trust; broken ones erode it, and a person who chronically breaks faith with himself develops a quiet, corrosive sense that his own word means nothing. That internal state leaks outward: others sense whether someone is at peace with himself or perpetually disappointed in himself. The confidence people find magnetic is rarely bravado — it is the settledness of someone who does what he says he'll do, first and foremost when the only witness is himself.",
        deployment: [
          "Make promises to yourself deliberately and few, then treat them as non-negotiable as promises to others.",
          "Start absurdly small if needed — a promise kept beats an ambition abandoned.",
          "Don't negotiate with yourself in the moment of weakness; the decision was already made.",
          "Track the streak; the visible chain of kept commitments becomes its own motivation.",
        ],
        examples: [
          "Deciding the night before exactly what the morning holds — and doing it regardless of how you feel.",
          "\"I said I'd train today\" as a closed statement, not the opening of a negotiation.",
        ],
      },
      {
        id: "one-hard-thing",
        code: "A-02",
        name: "Do One Hard Thing Daily",
        source: "Duckworth — grit; stress-inoculation & voluntary discomfort (Stoic praxis)",
        tagline:
          "Deliberately choose discomfort each day. It widens your range and builds the calm of a man who has faced hard things.",
        science:
          "Controlled exposure to manageable stress builds tolerance for it — the logic behind stress inoculation, and the ancient Stoic practice of voluntarily courting discomfort so that hardship, when it arrives unbidden, finds you already trained. Duckworth's research on grit ties long-term achievement less to talent than to the sustained willingness to do hard, often unglamorous things over time. Choosing a daily dose of difficulty — the cold, the workout, the uncomfortable conversation, the task you're avoiding — expands the zone in which you remain composed and capable, and that expanded range is exactly what reads to others as unflappability. The man who regularly does hard things on purpose is not braver by nature; he has simply moved his baseline, so what rattles others barely registers.",
        deployment: [
          "Pick one genuinely uncomfortable thing each day and do it first, before it can be talked out of.",
          "Rotate the difficulty: physical, social, and the task you're most avoiding.",
          "Treat the resistance itself as the signal — the thing you want to skip is usually the rep that counts.",
          "Keep the doses manageable and consistent; this is training, not self-punishment.",
        ],
        examples: [
          "Making the awkward call you've been putting off before you let yourself open the laptop.",
          "The cold shower, the last set, the honest conversation — chosen, not avoided.",
        ],
        caution:
          "Voluntary discomfort is training, not martyrdom. The goal is expanded capacity, not exhaustion or a performance of toughness.",
      },
      {
        id: "non-negotiable-standards",
        code: "A-03",
        name: "Standards You Decide Once",
        source: "Patrick & Hagtvedt (2012) — 'I don't' vs 'I can't'; Clear — identity-based habits; Aristotle — virtue as habituation",
        tagline:
          "Decide the line in advance, in the cold, so you're not renegotiating your character in the heat.",
        science:
          "Willpower fails under pressure, fatigue, and temptation — which is exactly when your standards get tested. The reliable alternative is the bright line: a rule decided once, in advance, that removes the in-the-moment negotiation. Patrick and Hagtvedt found the framing itself matters: participants who refused temptation with 'I don't' (an identity statement) held out markedly more often than those who used 'I can't' (a rule imposed from outside) — 'I don't' signals a settled self, while 'I can't' invites negotiation. Aristotle located virtue in habituation — we become what we repeatedly do — and modern habit research reframes it as identity: actions cast votes for the kind of person you are. Pre-committed standards convert a thousand exhausting individual decisions into one durable identity. The man with clear non-negotiables is not more disciplined in the moment; he has simply removed most moments from the table.",
        deployment: [
          "Decide your bright lines when calm, and write them as identity, not restriction: 'I'm someone who…'",
          "Use 'I don't' rather than 'I can't' — it signals settled identity, not deprivation.",
          "Make the standard specific enough to be unambiguous at the moment of temptation.",
          "Protect the lines that define you fiercely; the first exception is the one that ends the rule.",
        ],
        examples: [
          "\"I don't drink on weeknights\" lands, and holds, in a way \"I'm trying to cut back\" never does.",
          "Deciding your response to a certain kind of offer before it's ever made, so the answer is automatic.",
        ],
      },
      {
        id: "grow-the-ego-down",
        code: "A-04",
        name: "Grow the Ego Down",
        source: "Dweck — growth mindset; Leary et al. — intellectual humility",
        tagline:
          "Real confidence is quiet enough to say 'I was wrong' and 'I don't know.' Fragile ego defends; strong character learns.",
        science:
          "Intellectual humility — the capacity to recognize the limits of your own knowledge and update in the face of good evidence — correlates with better decision-making, learning, and, counterintuitively, with how competent and trustworthy others judge you to be. It requires a self-worth that isn't on trial in every disagreement: the securely confident can concede a point, admit ignorance, and change their mind because their identity doesn't depend on being right. Dweck's growth mindset describes the same engine from the learning side — treating ability as expandable frees you to seek out the corrective information a fragile ego must avoid. The paradox people sense is that the quietly confident, who don't need to win every exchange, come across as far stronger than the loud and defended, whose need to always be right advertises the fragility underneath.",
        deployment: [
          "Say 'I don't know' and 'I was wrong' plainly and early — they read as strength, not weakness.",
          "Argue to find the truth, not to win; be visibly willing to update when someone's right.",
          "Seek the disconfirming view on purpose: ask the person most likely to disagree with you.",
          "Separate your worth from your correctness — you are not the argument you just lost.",
        ],
        examples: [
          "\"You're right, I hadn't thought of that — I'm changing my view.\"",
          "\"I don't actually know. Let me find out rather than guess at you.\"",
        ],
      },
      {
        id: "govern-your-state",
        code: "A-05",
        name: "Govern the Day Before It Governs You",
        source: "Duhigg — The Power of Habit (keystone habits)",
        tagline:
          "The man who governs his morning governs his mood. A settled inner state is the source of the outward poise.",
        science:
          "Keystone habits are the small routines that reliably trigger cascades of other good behavior — Duhigg documents how a single anchoring practice can restructure a person's whole day. Winning the early hours (movement, light, intention, no immediate reactivity to the phone and its manufactured urgencies) sets an internal baseline of agency rather than reaction, and that baseline is felt by everyone you encounter later. Poise is not primarily a social skill performed in the moment; it is the surface of a regulated internal state cultivated beforehand. The person who begins the day on his own terms — grounded, unhurried, having already done something for himself — carries a settledness into every room that no amount of in-the-moment technique can fake.",
        deployment: [
          "Win the first hour on your terms before the world's demands arrive — don't open the day inside the phone.",
          "Anchor one keystone routine (movement, sunlight, a few minutes of intention) that sets the tone.",
          "Front-load what centers you so composure is already in the tank when the day turns.",
          "Protect your sleep and recovery upstream — there is no poise without a rested nervous system.",
        ],
        examples: [
          "The phone stays untouched for the first hour; the day starts with your intentions, not everyone else's.",
          "A short morning ritual done daily — the same three things — that make the rest of the day steadier.",
        ],
      },
      {
        id: "code-not-mood",
        code: "A-06",
        name: "Live by a Code, Not by Mood",
        source: "Hayes — Acceptance & Commitment Therapy (values-based action); virtue ethics",
        tagline:
          "Mood is weather; a code is climate. Acting from chosen values instead of passing feeling is the root of dignity.",
        science:
          "A central insight of Acceptance and Commitment Therapy is that you can act on your values regardless of how you feel — feelings are not commands, and waiting to feel motivated before doing the right or hard thing cedes your life to your moods. Values-based action means choosing behavior by reference to the kind of person you've decided to be, not by the emotional weather of the moment. This is the modern echo of virtue ethics: character is consistency of right action across circumstances and states. The dignity people recognize as maturity is precisely this steadiness — the man who is kind when irritated, disciplined when unmotivated, and honest when it costs him, because his conduct answers to a code rather than to how he happens to feel. Moods will always come; the question is whether they get a vote.",
        deployment: [
          "Name your handful of core values explicitly, so you have something to act from when feeling won't cooperate.",
          "When mood and code conflict, follow the code — feelings follow action more reliably than the reverse.",
          "Don't wait to feel like it; do the values-consistent thing and let the state catch up.",
          "Judge yourself by consistency across moods, not by your conduct on your best days.",
        ],
        examples: [
          "Being patient and warm on a bad day because that's who you've decided to be, not because you feel it.",
          "\"I don't feel like it\" met with 'irrelevant' — the code, not the mood, decides.",
        ],
      },
      {
        id: "guard-the-body",
        code: "A-07",
        name: "Guard the Body",
        source: "Exercise–cognition meta-analyses; sleep-deprivation & emotion-regulation studies (Ratey — Spark, popular synthesis)",
        tagline:
          "Energy, mood, and composure all run on the body. Train it, rest it, and fuel it — it's the platform everything else uses.",
        science:
          "The link between physical condition and everything people admire as poise is not metaphorical. A large research literature ties regular exercise to improved mood, reduced anxiety, sharper executive function, and greater stress resilience; sleep research shows that being under-rested degrades emotional regulation, judgment, and impulse control — the exact faculties that grace under fire depends on. The body is the platform the mind and temperament run on, and a neglected platform throttles all of them. This isn't about vanity or aesthetics; it's that physical vitality underwrites the energy to be generous, the calm to absorb provocation, and the presence others read as strength. The man who guards his sleep, trains his body, and fuels it well has quietly stacked the deck in favor of every other principle here.",
        deployment: [
          "Train consistently — regular movement is one of the highest-leverage inputs to mood and clarity.",
          "Protect sleep as non-negotiable; almost every capacity you value degrades without it.",
          "Fuel and hydrate deliberately — energy dips are often self-inflicted.",
          "Treat physical maintenance as the foundation, not a luxury for when there's time.",
        ],
        examples: [
          "Guarding the training slot and the bedtime with the same seriousness as a work commitment.",
          "Recognizing that the short temper at 4pm is often just low sleep and low fuel — and fixing the input.",
        ],
      },
      {
        id: "feed-the-mind",
        code: "A-08",
        name: "Feed the Mind Relentlessly",
        source: "Cacioppo & Petty — need for cognition; Kashdan — curiosity research",
        tagline:
          "Stay a lifelong student. Depth and curiosity make you both more capable and more interesting to be around.",
        science:
          "'Need for cognition' — the disposition to seek out and enjoy effortful thinking, studied by Cacioppo and Petty — is associated with more thorough, central-route processing of information, better-calibrated judgment, and richer engagement with the world. Kashdan's work on curiosity links it to stronger relationships, greater well-being, and continued growth: curious people ask more, notice more, and are experienced as more engaging. Staying a student — reading widely, learning across domains, seeking out people who know more than you — is what keeps a person from calcifying into their thirty-year-old opinions. It compounds in two directions at once: it makes you more capable and more useful, and it makes you better company, because a well-fed mind has something to offer and the humility to keep taking things in. The high-quality man never graduates.",
        deployment: [
          "Read daily and broadly — across domains, not just your own field.",
          "Stay a deliberate student: seek out people who know more and ask them real questions.",
          "Treat curiosity as a muscle — follow the thread of what genuinely interests you.",
          "Revisit and update your strong opinions as you learn; don't calcify.",
        ],
        examples: [
          "Keeping a running list of things to learn and books to read — and actually working through it.",
          "Being the person who asks the expert a genuine question rather than performing what you already know.",
        ],
      },
    ],
  },
];
