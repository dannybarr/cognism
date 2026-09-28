import type { Phase } from "./principles";

export const masteryPhases: Phase[] = [
  {
    id: "conflict-repair",
    code: "06",
    name: "Conflict & Repair",
    brief:
      "Keep dialogue alive when stakes and emotions are high — and repair the damage when it breaks.",
    principles: [
      {
        id: "safety-first",
        code: "C-01",
        name: "Restore Safety First",
        source: "Patterson, Grenny, McMillan & Switzler — Crucial Conversations",
        tagline:
          "When people go silent or violent, the problem isn't the content — it's that safety has collapsed.",
        science:
          "The Crucial Conversations research team studied thousands of high-stakes conversations and found a consistent pattern: when people feel psychologically unsafe, they exit dialogue into silence (withdrawing, masking) or verbal violence (controlling, attacking). Content is irrelevant at that point — no message survives a threatened listener. Safety rests on two conditions: mutual purpose (they believe you care about their goals) and mutual respect (they believe you respect them as a person). Restore whichever broke, then return to the issue.",
        deployment: [
          "Watch for the moment a conversation turns crucial: emotions rise, opinions differ, stakes are high. That's your cue to monitor safety, not press content.",
          "When you see silence or aggression, step OUT of the content entirely — arguing harder makes it worse.",
          "Rebuild mutual purpose: state the shared goal explicitly ('We both want this launch to succeed').",
          "Rebuild mutual respect with an apology where warranted, or by affirming what you do respect about them.",
        ],
        examples: [
          "\"Let me pause — I think I've come across as attacking your work, and that's not my intent. I think your work is strong. I want to solve one specific issue together.\"",
          "\"Before we go further: we're on the same side here. We both want a schedule the team can actually hit.\"",
        ],
      },
      {
        id: "contrasting",
        code: "C-02",
        name: "Contrasting",
        source: "Patterson et al. — Crucial Conversations",
        tagline:
          "A don't/do statement that fixes the misunderstanding before it takes root: 'I don't mean X. I do mean Y.'",
        science:
          "Most defensiveness in hard conversations comes not from your message but from a worse message the listener infers — that you don't respect them, that you're blaming everything on them. Contrasting is a prevention and first-aid tool: explicitly deny the unintended interpretation, then affirm your actual intent. Because it addresses the feared meaning head-on, it deflates the threat response faster than any amount of softening the content itself.",
        deployment: [
          "Before delivering a hard message, predict the worst interpretation they could take from it.",
          "Open with the denial: 'I don't want you to think...' or 'The last thing I mean is...'",
          "Immediately follow with your real intent: 'What I do want is...'",
          "Use it mid-conversation the moment you see defensiveness rise — it works as first aid, not just prevention.",
        ],
        examples: [
          "\"I don't want you to hear this as doubting your commitment — nobody works harder than you. I do want to talk about how the handoffs are landing.\"",
          "\"The last thing I want is for this to sound like blame. What I'm after is figuring out the process failure so it can't happen to anyone again.\"",
        ],
      },
      {
        id: "three-conversations",
        code: "C-03",
        name: "The Three Conversations",
        source: "Stone, Patton & Heen — Difficult Conversations (Harvard Negotiation Project)",
        tagline:
          "Every difficult conversation is actually three: what happened, feelings, and identity.",
        science:
          "The Harvard Negotiation Project found that every difficult conversation runs on three tracks at once: the 'what happened' conversation (where each side privately believes they're right about facts, intent, and blame), the feelings conversation (usually suppressed, always present), and the identity conversation (what this situation says about me — am I competent, good, worthy?). Conversations blow up when parties argue on the surface track while the real charge sits in feelings or identity. Naming the right track defuses it.",
        deployment: [
          "Drop the certainty about 'what happened' — shift from 'I'm right' to 'help me understand how you see it'. You have data they lack, and vice versa.",
          "Never assume intent from impact: 'you hurt me' does not mean 'you meant to'. Ask instead.",
          "Surface feelings deliberately — unexpressed feelings leak into tone and sabotage the factual discussion.",
          "Watch for identity quakes (yours and theirs): when someone reacts far out of proportion, the conversation has hit 'what does this say about me?' Address that, not the facts.",
        ],
        examples: [
          "\"We clearly remember this differently — walk me through how it looked from your side, and then I'll share mine.\"",
          "\"I want to say something about how this has felt, separate from who's right about the details.\"",
          "\"This isn't a referendum on whether you're good at your job — you are. It's about one recurring pattern.\"",
        ],
      },
      {
        id: "contribution-not-blame",
        code: "C-04",
        name: "Contribution, Not Blame",
        source: "Stone, Patton & Heen — Difficult Conversations",
        tagline:
          "Blame asks 'whose fault?' and produces defense. Contribution asks 'how did we each add to this?' and produces learning.",
        science:
          "Blame is about judgment and punishment, so it triggers defense and concealment — the truth becomes the enemy. The contribution frame maps how BOTH parties' actions (and inactions, and the system around them) combined to produce the problem. Because admitting a contribution isn't admitting fault, people can engage honestly. Stone, Patton and Heen found this shift is the single most reliable way to convert an accusation exchange into joint problem-solving.",
        deployment: [
          "Open by naming your own contribution first — it makes theirs safe to discuss.",
          "Replace 'who caused this?' with 'what did we each do — or not do — that got us here?'",
          "Include system contributions: unclear roles, bad incentives, missing information.",
          "Keep contribution separate from consequences: mapping the system is not excusing anyone from fixing it.",
        ],
        examples: [
          "\"Part of this is on me — I saw the risk in week two and didn't flag it hard enough. Let's map everything that fed into this.\"",
          "\"I'm not interested in whose fault it is. I'm interested in what each of us can change so it can't recur.\"",
        ],
      },
      {
        id: "nvc",
        code: "C-05",
        name: "Observation, Feeling, Need, Request",
        source: "Marshall Rosenberg — Nonviolent Communication",
        tagline:
          "Strip judgment out of confrontation: state what you observed, what you feel, what you need, and one doable request.",
        science:
          "Rosenberg's framework, used in conflict zones and prisons as well as boardrooms, is built on one insight: judgments and diagnoses ('you're inconsiderate') trigger counterattack, while observations, feelings, and needs are undeniable and therefore disarming. No one can argue with 'when the report arrived Thursday' (observable), 'I felt cornered' (yours to report), or 'I need predictability to plan' (a universal human need). The closing request must be positive, concrete, and doable now — not a demand in disguise.",
        deployment: [
          "Observation: state what a camera would have recorded — no adjectives, no 'always/never'.",
          "Feeling: name your actual emotion, not a disguised accusation ('I feel ignored' is a judgment; 'I feel anxious' is a feeling).",
          "Need: name the universal need underneath (clarity, respect, reliability, autonomy).",
          "Request: ask for one specific, positive, present-tense action — and be genuinely open to hearing no.",
        ],
        examples: [
          "\"When the numbers arrived two days after the deadline (observation), I felt anxious (feeling) because I need lead time to review before the board sees them (need). Would you be willing to flag me by Tuesday if a deadline is at risk (request)?\"",
        ],
        caution:
          "Delivered mechanically, NVC sounds like therapy-speak and reads as manipulation. Use the structure to discipline your thinking; deliver it in your own natural words.",
      },
      {
        id: "repair-attempts",
        code: "C-06",
        name: "Repair Attempts",
        source: "John Gottman — Love Lab longitudinal research",
        tagline:
          "The success of a relationship is predicted not by how little you fight, but by whether repair attempts land.",
        science:
          "Gottman's multi-decade observational research found that all close relationships fight — what separates the 'masters' from the 'disasters' is repair: any statement or gesture that de-escalates rising negativity mid-conflict (humor, a touch, an apology, 'can we start over?'). Masters both make repair attempts early and, critically, RECEIVE them — a repair attempt ignored is fuel on the fire. Gottman could predict relationship outcomes with over 90% accuracy largely from watching repairs succeed or fail.",
        deployment: [
          "Repair early — the first minutes of a conflict predict its entire trajectory. Don't wait for the blowup.",
          "Build a repertoire: 'Can we take that again from the top?', 'I said that badly', a moment of shared humor, an explicit timeout.",
          "Train yourself to CATCH the other side's repair attempts, especially mid-anger — accepting a clumsy olive branch matters more than offering an elegant one.",
          "After conflict, do a deliberate repair conversation: what each of you felt, and what to try next time. Never just 'move on'.",
        ],
        examples: [
          "\"Let me try that sentence again — it came out with more edge than I meant.\"",
          "\"We're both getting sharp. Ten-minute break, then we solve this?\"",
          "Receiving one: they crack a weak joke mid-argument — laugh. That laugh is the repair landing.",
        ],
      },
      {
        id: "four-horsemen",
        code: "C-07",
        name: "The Four Horsemen & Their Antidotes",
        source: "John Gottman — divorce-prediction research",
        tagline:
          "Criticism, contempt, defensiveness, stonewalling — the four patterns that kill relationships, each with a trained antidote.",
        science:
          "Gottman identified four conflict behaviors so corrosive they predict relationship failure: criticism (attacking character, not behavior), contempt (superiority — sarcasm, eye-rolling, mockery; the single strongest predictor of divorce), defensiveness (counterattack and victimhood), and stonewalling (shutting down, usually from physiological flooding above ~100 bpm heart rate). Each has a validated antidote: gentle startup, building a culture of appreciation, taking responsibility for your slice, and self-soothing breaks.",
        deployment: [
          "Criticism → gentle startup: complain about the specific behavior using 'I' statements; never indict character ('you always', 'what's wrong with you').",
          "Contempt → appreciation culture: deliberately catch and voice what the other person does well; contempt cannot survive in an atmosphere of expressed respect.",
          "Defensiveness → own your 2%: find the part of the complaint that IS true and take responsibility for it out loud before anything else.",
          "Stonewalling → structured break: when flooded, name it and schedule the return ('I need 20 minutes, then I'm coming back to this') — the return time is what makes it a break, not an escape.",
        ],
        examples: [
          "Instead of 'You never think ahead': \"I'm stressed about tomorrow's deadline and I need us to plan tonight.\"",
          "\"You're right that I dropped the update — that part's on me. Can we look at the rest together?\"",
          "\"I'm too flooded to do this well right now. Give me half an hour and I promise we finish it tonight.\"",
        ],
      },
    ],
  },
  {
    id: "presence-nonverbal",
    code: "07",
    name: "Presence & Nonverbal",
    brief:
      "The channel beneath the words — what faces, bodies, and voices broadcast, and how to read and command it.",
    principles: [
      {
        id: "microexpressions",
        code: "V-01",
        name: "Microexpressions, Correctly Scoped",
        source:
          "Paul Ekman — cross-cultural emotion research; Barrett et al. (2019); Bond & DePaulo (2006)",
        tagline:
          "Faces flash real emotion, but they can't tell you who is lying. Treat an expression as a prompt to ask, never as proof.",
        science:
          "Ekman's cross-cultural studies, including fieldwork in preliterate Papua New Guinea, found that a handful of emotions (anger, fear, sadness, disgust, surprise and happiness, with contempt added later) are recognized from facial expressions across cultures at better than chance. He also described brief 'microexpressions' that appear when people suppress a feeling. Both claims need scoping. A 2019 review led by Lisa Feldman Barrett concluded that people do not reliably make the same face for the same emotion, so expressions cannot be read like fingerprints without context. And the leap to lie detection fails: a meta-analysis of 24,483 observers found people judge lies correctly only 54 percent of the time, barely above a coin toss, and do better from what they hear than from what they see (Bond and DePaulo, 2006). What survives is modest but useful: a flicker of discomfort at a key moment is a cue to ask a question, not a verdict.",
        deployment: [
          "Watch reactions at decision moments (the price, the deadline, the ask) as prompts for a question, not conclusions.",
          "Read the face in context: the situation, the person's usual manner and what they say next matter more than any single expression.",
          "Probe with a label: 'It seems like something about that number lands wrong.' Let their answer, not your read, decide.",
          "Never treat an expression as evidence of lying. Inconsistencies in what people say are more diagnostic than how they look.",
        ],
        examples: [
          "You quote the timeline and their 'sounds fine' comes with a tight-lipped pause: \"It seems like the timeline creates a problem on your end. What am I missing?\"",
          "Instead of 'I saw contempt, they're against us': \"Something shifted when I mentioned the budget. I'll ask about it directly.\"",
        ],
        caution:
          "Face-reading courses sell far more confidence than the evidence supports. An expression tells you, at most, that something registered. It never tells you why, and it cannot tell you whether someone is lying.",
      },
      {
        id: "charisma-ppw",
        code: "V-02",
        name: "Presence, Power, Warmth",
        source: "Olivia Fox Cabane — The Charisma Myth",
        tagline:
          "Charisma is not innate — it's the learnable combination of presence, power, and warmth.",
        science:
          "Cabane synthesizes behavioral research into a working model: people read charisma from three signals — presence (you are fully here; the rarest and most foundational), power (you can affect their world: posture, space, composure), and warmth (you will use that power for them: goodwill, attention, care). Power without warmth reads as arrogance; warmth without power reads as ingratiating; presence amplifies both. Because bodies leak internal state, charisma work is mostly internal: managing your own attention and emotional state, which then broadcasts itself.",
        deployment: [
          "Presence: when your mind wanders mid-conversation, bring attention back to physical sensation (breath, feet on floor) — the listener registers returned focus within seconds.",
          "Power: take up your space calmly — still hands, slow movements, low relaxed voice, no fidgeting or verbal backpedaling.",
          "Warmth: silently practice goodwill toward the person ('I wish this person well') — it measurably softens micro-signals you cannot consciously control.",
          "Diagnose your default gap: most people lack one of the three. Overpower → add warmth. Over-warm → add stillness and composure.",
        ],
        examples: [
          "Before a high-stakes meeting: 30 seconds of slow breathing, then one deliberate thought: \"My job in this room is to make this person's problem smaller.\"",
          "Caught drifting mid-sentence? Re-anchor on their eye color for one beat — attention visibly returns and they feel it.",
        ],
      },
      {
        id: "vocal-tonality",
        code: "V-03",
        name: "Vocal Command",
        source: "Klofstad et al. (2012) pitch research; Voss — late-night FM DJ voice",
        tagline:
          "Lower, slower, downward-inflected speech is heard as calm authority. Uptalk surrenders it.",
        science:
          "Klofstad's studies found listeners across cultures prefer lower-pitched voices in selection decisions for both men and women — lower pitch is unconsciously read as competence and strength. Statement-final rising intonation ('uptalk') converts assertions into permission-seeking. Voss's operational version: the 'late-night FM DJ voice' — slow, calm, downward-tilting — triggers a neurochemical calming response in the listener and is his default for critical moments. Pace and pause matter as much as pitch: rushed speech signals nervousness; deliberate pauses signal that you expect to be heard.",
        deployment: [
          "End declarative sentences with a downward inflection — especially prices, deadlines, and boundaries.",
          "Slow to roughly 80% of your natural speed in high-stakes moments; add deliberate pauses before and after key points.",
          "Drop to the calm DJ voice when tension spikes — your tone is contagious and sets the emotional temperature.",
          "Record one real call a month and listen for uptalk, filler, and speed under pressure — the tape never flatters, and it never lies.",
        ],
        examples: [
          "\"The fee is eighteen thousand.\" [downward inflection, then silence] — versus \"The fee is eighteen thousand?\" which invites the negotiation.",
          "Tension rising: drop pace and pitch. \"Let's slow down. We'll get this right.\"",
        ],
      },
      {
        id: "mehrabian-scoped",
        code: "V-04",
        name: "Mehrabian, Correctly Scoped",
        source: "Albert Mehrabian — 1967 studies on inconsistent messages",
        tagline:
          "The 7-38-55 rule is real but narrow: when words and delivery CONFLICT about feelings, delivery wins.",
        science:
          "Mehrabian's famous finding — 7% words, 38% tone, 55% face — is the most misquoted statistic in communication. It applies ONLY to messages about feelings and attitudes where verbal and nonverbal channels contradict each other (saying 'I'm fine' through clenched teeth). It does NOT mean words carry 7% of all meaning — technical content, arguments, and instructions travel almost entirely through words. The usable law: in any incongruent emotional message, people believe the nonverbal channel, so congruence is the real skill.",
        deployment: [
          "Audit congruence before important messages: if your words say 'excited' but your energy says 'exhausted', the room receives 'exhausted'.",
          "When receiving mixed signals, trust tone and face over words for the emotional truth — then verify verbally with a label.",
          "Never deliver commitment language ('we're fully behind this') with flat delivery — it broadcasts the opposite.",
          "Correct anyone building strategy on 'words are only 7% of communication' — content still carries the argument; delivery carries the feeling about it.",
        ],
        examples: [
          "Them: 'No, it's fine.' [flat tone, no eye contact] — believe the delivery: \"It sounds like it's not entirely fine. What part still bothers you?\"",
          "Before announcing a change you have doubts about: resolve your own doubts first, or the room will hear them regardless of the script.",
        ],
      },
      {
        id: "chameleon-effect",
        code: "V-05",
        name: "The Chameleon Effect",
        source: "Chartrand & Bargh (1999) — behavioral mimicry research",
        tagline:
          "Subtle, natural mimicry of posture and mannerisms measurably increases liking — in both directions.",
        science:
          "Chartrand and Bargh showed that people unconsciously mimic interaction partners' postures and mannerisms, and that being subtly mimicked increases liking and smoothness of interaction — participants rated mimicking confederates as more likable without knowing why. Follow-up negotiation research (Maddux et al., 2008) found strategic, subtle mimicry increased deal-making success. The mechanism is perceived similarity: synchronized bodies read as 'one of us'. Detection reverses the effect entirely.",
        deployment: [
          "Loosely and lately: adopt their general posture, energy level, and speech pace after a few seconds' delay — never gesture-for-gesture copying.",
          "Match communication register: their formality, sentence length, and vocabulary altitude.",
          "Notice when THEY mirror you — spontaneous mimicry from their side is one of the most reliable signs of established rapport.",
          "Drop it entirely if you're consciously tracking it mid-sentence; forced mirroring leaks and reads as mockery.",
        ],
        examples: [
          "They lean back and slow down — after a beat, settle back and ease your pace to match. The conversation audibly relaxes.",
          "On a call: match their greeting energy ('Hey hey!' vs. 'Good morning.') before steering anywhere.",
        ],
        caution:
          "Being caught mimicking destroys trust instantly. If you can't do it below the level of deliberateness, don't do it.",
      },
      {
        id: "charisma-styles",
        code: "V-06",
        name: "The Four Charisma Styles",
        source: "Olivia Fox Cabane — The Charisma Myth",
        tagline:
          "Focus, visionary, kindness, authority — charisma is a wardrobe, not a uniform. Wear the style the moment calls for.",
        science:
          "Cabane's central thesis is that charisma is not an innate gift but a set of trainable behaviors driven by internal state — and that it comes in distinct styles suited to different situations. Focus charisma (presence and deep listening — Bill Gates in a one-on-one) makes people feel heard and intelligent; it wins in discovery, diligence, and rebuilding trust. Visionary charisma (bold belief, fully projected — the founder mid-pitch) makes people feel inspired; it wins when a group needs conviction to act, and it demands total congruence — visible doubt kills it. Kindness charisma (warmth and complete acceptance — the Dalai Lama archetype) makes people feel safe; it wins in bad-news delivery, conflict repair, and with anxious counterparts. Authority charisma (status and power signals — composure, credentials, command of space) makes people comply fast; it wins in crises, and it suppresses honest feedback as its known side effect. Choosing the wrong style for the moment — authority in a brainstorm, kindness in a crisis — is a mismatch failure, not a charisma failure.",
        deployment: [
          "Diagnose the moment before the meeting: does this room need to feel heard (focus), inspired (visionary), safe (kindness), or led (authority)? Pick one primary style.",
          "Default to focus charisma in discovery and one-on-ones — it's the lowest-risk style, and being fully listened to is rare enough to be memorable.",
          "Reserve authority for genuine crises and decision deadlocks, and pair it with warmth on the exit — sustained authority mode trains your best people to stop telling you the truth.",
          "Match style to your natural range: forced visionary reads as theater. Build from the style adjacent to your baseline, then extend.",
        ],
        examples: [
          "Crisis stand-up (authority): \"Here's what we know, here's the plan, here's who owns what. Questions in ten minutes — first, everyone move.\"",
          "Layoff conversation (kindness): full attention, no desk between you, no rush — \"take whatever time you need with this.\"",
        ],
      },
      {
        id: "internal-state",
        code: "V-07",
        name: "Internal-State Engineering",
        source: "Olivia Fox Cabane — The Charisma Myth",
        tagline:
          "Bodies leak; you cannot fake charisma at the micro level. Fix the internal state and the external signals fix themselves.",
        science:
          "Cabane's most operational insight: because micro-expressions and vocal micro-tremors leak your true state faster than conscious control can mask them, charisma work is internal work. Her toolkit targets the three internal charisma killers. Physical and mental discomfort (which observers misattribute to your feelings about THEM): destigmatize it — discomfort is universal, expected, and survivable; naming it internally shrinks it. Self-doubt and anxiety: the responsibility transfer — a visualization in which you deliberately hand the outcome's weight to something outside yourself for the duration of the interaction; measurably quiets the background hum of worry that reads as shiftiness. Negative self-talk before performance: visualization — rehearsing the interaction going well, in sensory detail, which the motor system partially treats as practice. The chain is state → body → perception: warmth and power cannot be performed convincingly, but they can be genuinely induced, and induced states broadcast themselves.",
        deployment: [
          "Destigmatize discomfort in the moment: 'this is normal, everyone in this room has felt this' — the meta-anxiety (anxiety about showing anxiety) is the part that leaks worst.",
          "Run the responsibility transfer before high-stakes rooms: sixty seconds — place the outcome's weight somewhere else and act as the person who has nothing to prove.",
          "Visualize the specific interaction going well the night before: their engaged faces, your settled voice, the close — detail is what makes the rehearsal register.",
          "Debug outward problems inward: if feedback says you seem cold, distracted, or nervous, don't rehearse warmer gestures — find and fix the internal state producing the leak.",
        ],
        examples: [
          "Pre-pitch ritual: name the sensation ('tight chest, racing — noted, normal'), transfer the outcome, then one thought on entry: \"I'm here to make their problem smaller.\"",
          "Mid-meeting anxiety spike: weight into the feet, one slow exhale, attention onto the speaker's exact words — the leak stops when the attention moves off yourself.",
        ],
      },
    ],
  },
  {
    id: "storytelling",
    code: "08",
    name: "Storytelling",
    brief:
      "Structure ideas so they stick, move audiences, and survive retelling in rooms you never enter.",
    principles: [
      {
        id: "success-model",
        code: "T-01",
        name: "SUCCESs — Made to Stick",
        source:
          "Chip & Dan Heath — Made to Stick",
        tagline:
          "Sticky ideas are Simple, Unexpected, Concrete, Credible, Emotional Stories.",
        science:
          "The Heath brothers reverse-engineered why some ideas survive and spread while better-funded ones die: sticky ideas share six traits. Simple (one core message, stripped to its essence — 'commander's intent'), Unexpected (break a pattern to seize attention, open a curiosity gap to hold it), Concrete (sensory specifics, not abstraction), Credible (testable details, accessible authority), Emotional (make them feel, target identity — people donate to one starving child, not statistics), Stories (mental simulation and inspiration). The villain throughout is the Curse of Knowledge — experts communicate in abstractions their audience cannot feel.",
        deployment: [
          "Find your core: if the audience remembers exactly ONE sentence next week, write that sentence first and subordinate everything to it.",
          "Break a pattern early — a surprising statistic, a violated expectation — then open a gap the talk will close.",
          "Convert every abstraction to something visualizable: not 'improved efficiency' but 'the report that took three days now takes an hour'.",
          "Test each message: could a stranger repeat it accurately tomorrow? If not, it isn't finished.",
        ],
        examples: [
          "Not 'we optimize logistics' — \"We put a library's worth of books on a truck by Tuesday, every Tuesday.\"",
          "\"Everyone thinks the danger is launching too late. Our last three failures all launched too EARLY. Here's what actually happened...\" (unexpected + curiosity gap)",
        ],
      },
      {
        id: "sparkline",
        code: "T-02",
        name: "The Sparkline",
        source:
          "Nancy Duarte — Resonate (analysis of history's great speeches)",
        tagline:
          "Great talks oscillate between 'what is' and 'what could be' — ending in the new bliss.",
        science:
          "Duarte mapped the structure of landmark speeches (King's 'I Have a Dream', Jobs' iPhone launch) and found a shared shape she calls the sparkline: the speaker repeatedly contrasts the flawed present ('what is') with a compelling vision ('what could be'), building tension with each oscillation, and ends with the 'new bliss' — a vivid picture of the world once the idea is adopted. The audience, not the speaker, is the hero; the speaker plays mentor. Persuasion lives in the gap between the two states.",
        deployment: [
          "Open by establishing 'what is' in terms the audience recognizes as their own reality — earn the nod first.",
          "Introduce 'what could be' as a sharp contrast, then return to 'what is'. Alternate; each pass raises the stakes.",
          "Cast the audience as the hero and yourself as the guide with the map — 'you can do this' beats 'look what I did'.",
          "End with the new bliss: a concrete, sensory picture of life after they act. Never end on logistics.",
        ],
        examples: [
          "\"Today, your team spends Friday afternoons rebuilding a spreadsheet that breaks every Monday. [what is] Imagine Fridays spent on the work you were hired for. [what could be]\"",
          "Close: \"A year from now, this meeting doesn't exist — because the problem doesn't.\" (new bliss)",
        ],
      },
      {
        id: "ethos-pathos-logos",
        code: "T-03",
        name: "Ethos, Pathos, Logos",
        source:
          "Aristotle — Rhetoric (4th century BC)",
        tagline:
          "Every act of persuasion runs on three currents: credibility, emotion and logic. When one fails, the other two cannot carry the argument.",
        science:
          "Aristotle's Rhetoric remains the foundational taxonomy of persuasion: ethos (the audience's belief in your character, good sense and goodwill, which Aristotle insisted must be earned by what the speaker says, not by reputation before they begin), pathos (the emotional state of the audience; Damasio's studies of patients with damaged emotional processing found they struggled to make even simple decisions, so emotion is part of judgment, not its enemy), and logos (the argument's logical structure, necessary but never sufficient). Aristotle set no order among them. Most technical communicators fail by leading with logos to an audience that hasn't granted them ethos or been moved by pathos; most demagogues succeed on pathos alone. Mastery is running all three at once.",
        deployment: [
          "Earn ethos inside the message: show precise understanding of THEIR situation, show sound judgment, and make a disarming admission against interest. Credentials help, but Aristotle's point stands: credibility is built by what you say.",
          "Engage pathos through specifics: one named person's story, a vivid consequence, stakes the audience already cares about.",
          "Deliver logos in pyramid form: claim, reasons, evidence. Weave it with the other two rather than saving it for last.",
          "Diagnose failed persuasion by channel: Did they doubt you (ethos)? Not care (pathos)? Not follow (logos)? Fix the failing current, not the whole speech.",
        ],
        examples: [
          "\"I've run this migration twice at companies your size — both hit the same wall we're about to discuss (ethos). Last time, the team found out at 2 a.m. on a Saturday (pathos). Here are the three ways to avoid it (logos).\"",
        ],
      },
      {
        id: "ted-lasso-effect",
        code: "T-04",
        name: "The Ted Lasso Effect",
        source:
          "Shannon Jenkins — How to Tell Stories Better Than 99% of People (2026; CART framework); Loewenstein (1994); Fiske, Cuddy & Glick (2007)",
        tagline:
          "Withhold the payoff, zoom into one moment, reveal the human behind the skill, then land what it means.",
        science:
          "Jenkins dissects two Ted Lasso scenes (the darts game, S1E8 'The Diamond Dogs'; the press conference after Earl's death, S2E1 'Goodbye Earl') and finds the same short-story engine. Ted opens with an unresolved question and delays the answer, which opens what Loewenstein calls an information gap: curiosity felt as a deprivation the listener wants closed. He drops into one concrete scene rather than a summary, spends time on the moments that matter and races through the connective years. Then he reveals a personal detail that recasts the story. In the darts scene that detail signals warmth alongside competence, the two dimensions Fiske, Cuddy and Glick identify as universal in how we judge others. He closes with an explicit takeaway, the 'T' in Jenkins' CART structure (Context, Action, Result, Takeaway), so the audience knows why they heard it.",
        deployment: [
          "Open with the question, not the answer: state the puzzle ('people have underestimated me my whole life') and hold the payoff until the end.",
          "Zoom into one scene: a day, a room, a sentence someone said. Replace 'we realized things had to change' with where you were and what you saw.",
          "Change speed deliberately: slow down on the moment you want felt, compress the years and logistics into a line.",
          "Land the takeaway out loud: say what it meant and connect it to the people in the room. Never leave them asking why you told it.",
        ],
        examples: [
          "\"Three weeks before launch, our biggest customer looked across the table and said, 'This is never going to work.'\" (zoom in, open loop)",
          "Personal reveal, not private: \"I learned negotiation at my dad's market stall, every Saturday from age twelve.\" One detail shows skill and humanity together.",
          "Close: \"That's why I'd rather hear the bad number on Monday than Friday.\" (takeaway tied back to the room)",
        ],
        caution:
          "The show's timing is scripted; in real life, holding back too long with a hostile or time-pressed audience reads as evasive. An odd opening in a sensitive moment can sound cold until the turn arrives, so make sure it does. Personal does not mean private. And do not repeat Ted's attribution: 'Be curious, not judgmental' is not Walt Whitman's.",
      },
      {
        id: "and-but-therefore",
        code: "T-05",
        name: "And, But, Therefore",
        source:
          "Randy Olson — Houston, We Have a Narrative (2015); Trey Parker & Matt Stone (South Park)",
        tagline:
          "Turn any update or summary into a story: replace 'and, and, and' with 'and, but, therefore'. Context, conflict, consequence.",
        science:
          "Olson, a scientist turned filmmaker, took the rule from South Park's creators. In a documentary on the show's production, Trey Parker describes rewriting scenes by replacing every 'and' between story beats with 'but' or 'therefore', because beats joined by 'and' make a list, while beats joined by 'but' and 'therefore' make a story. Olson turned it into a one-sentence template for any message. And sets up the agreed context. But introduces the problem or tension. Therefore gives the consequence or the action. The 'but' is the engine: it opens the gap the listener wants closed, the same information gap that drives curiosity (D-08). Without it, a report is a string of facts with no stakes. With too many turns, it becomes hard to follow. ABT sits in between, and it works at the scale of a sentence, a paragraph or a whole talk.",
        deployment: [
          "Draft your update as one sentence: '[context] AND [more context], BUT [problem], THEREFORE [what we do].'",
          "Test the 'but': if nothing in the sentence is at stake, you have a list, not a story. Find the tension before you speak.",
          "Use one clear turn per message. Stacking several ('despite this, however, yet') loses the listener.",
          "Scale it up: one ABT as the summary line, then one for each section of a longer piece.",
        ],
        examples: [
          "\"Retention has been steady all year AND the support team has hit every target, BUT new customers are leaving in their first 30 days, THEREFORE we're moving two engineers onto onboarding this quarter.\"",
          "Instead of \"This sprint we did A, and B, and C\": \"We shipped the new checkout, but mobile conversion dropped, so this sprint is about fixing that.\"",
        ],
        caution:
          "The 'but' must be real. A manufactured problem, added for drama, reads as spin. ABT frames an argument; it doesn't prove one, so the 'therefore' still needs evidence behind it.",
      },
    ],
  },
  {
    id: "presenting",
    code: "09",
    name: "Presenting",
    brief:
      "Plan, build and deliver a talk that holds the room from the first line and leaves it with one idea it can repeat.",
    principles: [
      {
        id: "five-openers",
        code: "O-01",
        name: "The Five Openers",
        source:
          "Philipp Humm — How to Start a Speech That Makes People Whisper 'Damn, that's good.' (StoryLab, 2026)",
        tagline:
          "Open a talk or keynote with a hook, not a housekeeping notice.",
        science:
          "Most speakers spend their opening on name, role and context: the lowest-value content, delivered while attention is highest. Humm's five openers each break that pattern in a different way. A question starts the listener's own search for an answer. A surprising statement contradicts what the room assumed and forces a second look. A story dropped straight into the moment moves listeners from evaluating to experiencing. Green and Brock (2000) called this narrative transportation and showed that absorbed readers hold more story-consistent beliefs and notice fewer false notes. A big promise answers the audience's silent question, what's in it for me, and matches Patrick Winston's MIT advice to open with an 'empowerment promise' instead of a joke, because a room still putting laptops away is not ready to laugh. A visual action hook does something before saying anything, so the eyes commit before the ears. All five buy the speaker the next minute. None of them substitutes for content.",
        deployment: [
          "Cut the preamble. Move your name, title and thanks to after the hook, or drop them if the host already introduced you.",
          "Pick one opener to fit the room: a question for skeptics, a surprising fact for the indifferent, a story for the tired, a promise for the busy, an action for a stage.",
          "For a surprising statement, pause before it, say the key number slowly, then pause again so it lands.",
          "For a story, start in the scene: where, when, what is going wrong. Background comes later or not at all.",
        ],
        examples: [
          "\"For those of you who don't know me, I'm Michelle's husband.\" (Barack Obama, cited by Humm)",
          "\"By the end of this talk, you'll know how to appear confident in any high-pressure situation.\" (Humm's rewrite of 'Today I will talk about body language')",
          "\"It's 6 a.m., I'm standing in the parking lot of our biggest client, and I've just read the email saying they're leaving.\"",
        ],
        caution:
          "Hooks that are not paid off feel like clickbait and cost credibility. A surprising statistic must be true and sourced, because one debunked fact poisons the whole talk. Visual stunts and shock lines misfire at eulogies, board meetings and in cultures where formality signals respect. Avoid opening with a joke: Winston found the room is not yet tuned to you.",
      },
      {
        id: "ted-methods",
        code: "O-02",
        name: "The 18-Minute Rule & the Jaw-Drop",
        source:
          "Carmine Gallo — Talk Like TED; TED curation research",
        tagline:
          "Constrain the talk, engineer one unforgettable moment, and never present more than the mind can hold.",
        science:
          "TED caps every talk at 18 minutes by design: curator Chris Anderson calls it long enough to be serious, short enough to hold attention. The popular claim that attention collapses after 10 to 15 minutes is weaker than it sounds (Wilson and Korn's 2007 review found little evidence for it), so the real case for the cap is compression: a hard limit forces the speaker to cut to what matters. Gallo's analysis of the most-viewed talks adds the 'jaw-drop moment': one emotionally charged, unexpected event — a demonstration, statistic, or image — that hijacks attention and becomes THE thing people retell (Bill Gates releasing mosquitoes on stage: 'there's no reason only poor people should have the experience').",
        deployment: [
          "Whatever time you're given, prepare the 18-minute version — the discipline of compression sharpens every argument. If you're given less, the core survives.",
          "Design one jaw-drop deliberately: a demonstration, a shocking-but-true number made visceral, an image no one expects. One. More dilutes.",
          "Place it where energy tends to dip, often around the middle, not the opening (which has free attention) or the close (which the recap owns).",
          "Cut ruthlessly: three key messages maximum. The talk is what they remember, not what you say.",
        ],
        examples: [
          "Instead of '2.5 million pounds of waste': wheeling a single day's worth of the office's discarded paper on a cart into the meeting.",
          "\"I'm going to show you our entire security posture in one slide — this is a real phishing email our CFO clicked last month.\"",
        ],
      },
      {
        id: "rhetorical-devices",
        code: "O-03",
        name: "Anaphora, Tricolon & the Applause Machine",
        source:
          "Classical rhetoric; Max Atkinson — Our Masters' Voices (claptrap research)",
        tagline:
          "Repetition and threes are the load-bearing structures of memorable speech — they cue rhythm, completion, and applause.",
        science:
          "Atkinson's analysis of political speeches found that audience applause follows predictable rhetorical structures — above all the tricolon (three-part list: Lincoln's 'of the people, by the people, for the people') and contrastive pairs ('ask not what your country can do for you...'). Three is the smallest number that creates a pattern, and the completed pattern signals 'respond now'. Anaphora — repeating the opening phrase ('We shall fight on the beaches... we shall fight on the landing grounds...') — builds accumulating force and makes passages quotable. These aren't decoration; they are cognitive packaging that makes ideas rhythmically inevitable.",
        deployment: [
          "Put your key claims in threes: three reasons, three examples, three commitments. Two feels thin; four dissolves into a list.",
          "Use anaphora for building sequences: open three consecutive sentences with the same phrase when you want force.",
          "Use contrastive pairs for the quotable line: 'not X, but Y' — the structure does half the writing.",
          "End the tricolon on the longest, strongest element: rhythm resolves on weight. Even history rounds to three. Churchill offered 'blood, toil, tears and sweat', four items, and popular memory trimmed it to 'blood, sweat and tears'.",
        ],
        examples: [
          "\"We tried waiting. We tried patching. We tried hoping. None of it worked — here's what will.\" (anaphora into pivot)",
          "\"This isn't a tooling problem. It's a trust problem.\" (contrastive pair)",
          "\"Faster onboarding, fewer escalations, and a support queue that finally sleeps at night.\" (tricolon, weighted ending)",
        ],
      },
      {
        id: "cycle-fence-punctuate",
        code: "O-04",
        name: "Cycle, Fence, Punctuate",
        source:
          "Patrick Winston — How to Speak (MIT OpenCourseWare, 2018)",
        tagline:
          "Say the core idea three times, mark what it is not, and signpost every turn.",
        science:
          "A reader can re-read. A listener cannot, and attention in a live room is never total. Winston, who gave this lecture at MIT for over 40 years, estimated that at any given moment about 20 percent of an audience is 'fogged out', so an idea said once reaches only whoever happened to be present for it. His answer is three moves. Cycling: return to the core idea several times, from different angles, so the odds that everyone catches it at least once rise sharply. Fencing: define the idea against its nearest neighbor, because ideas are recognized by their boundaries and an unfenced idea gets filed under something the audience already knows. Verbal punctuation: announce the seams, number the parts, and say when one ends, so drifting listeners have a landmark where they can 'get back on the bus'. Richard Mayer's signaling principle from multimedia-learning research points the same way: explicit cues to a presentation's structure help audiences build a coherent model of it.",
        deployment: [
          "Write your core idea as one sentence, then plan three places to say it: the opening, the middle, and the close, each time in a slightly different form.",
          "Fence it: add one line that says what your idea is not, naming the closest alternative the audience might confuse it with.",
          "Number your parts out loud at the start, and mark each transition: 'That's the first idea. Here's the second.'",
          "After any dense stretch, give a one-sentence recap before moving on.",
        ],
        examples: [
          "\"My algorithm might seem similar to Jones's algorithm, except his is exponential, and mine's linear.\" (Winston, on fencing)",
          "\"This is not a cost-cutting plan. Nobody loses their job. It's a plan to stop doing three things so we can do one thing well.\"",
          "\"So that's problem one, the pricing gap. Problem two is harder, and it's where most of the money is.\"",
        ],
        caution:
          "Cycling is not verbatim repetition. The same sentence three times sounds like padding, so vary the angle each time. Heavy signposting in a short toast or a five-minute update feels mechanical, so scale it to the length and density of the talk. The 20 percent figure is Winston's working estimate, not a measured constant.",
      },
      {
        id: "glance-test",
        code: "O-05",
        name: "The Glance Test",
        source:
          "Nancy Duarte — Slide:ology (2008); Richard E. Mayer — Multimedia Learning",
        tagline:
          "If a slide needs reading, it's competing with you.",
        science:
          "Duarte's heuristic is that an audience should grasp each slide in about three seconds, because 'an audience can't listen to your presentation and read detailed, text-heavy slides at the same time'. The three-second figure is her practical rule of thumb, not a measured threshold. The mechanism behind it has experimental support. Mayer's redundancy principle holds that people learn more deeply from graphics with spoken narration than from graphics, narration and the same words printed on screen: duplicated text makes listeners reconcile two verbal streams instead of understanding one. Winston made the same case from the lectern: humans have 'one language processor', so a slide full of words switches the audience from listening to reading. The slide's job is to show what speech cannot, such as a picture, a shape, a single number or a comparison, while the speaker carries the argument.",
        deployment: [
          "Give each slide one point, stated as a short headline or shown as one image, chart or number.",
          "Cut every sentence you plan to say aloud. If it's in your mouth, it doesn't belong on the screen.",
          "Test each slide: show it to someone for three seconds, hide it, and ask what it said. If they can't answer, simplify.",
          "Put detail in a handout or appendix, and highlight the element you're discussing on the slide rather than using a laser pointer.",
        ],
        examples: [
          "Instead of five bullets on churn causes, one bar chart with the largest bar in the accent color and the headline 'Onboarding drives most of our churn'.",
          "\"Don't read this slide. It's one number: the day we run out of cash if nothing changes.\"",
        ],
        caution:
          "Some rooms need dense slides: pre-reads, board packs, technical reviews and decks sent without a speaker. There the document is the product, so send it as a document. Stripping the words out of a slide only works if the speaker has rehearsed enough to carry the content without them.",
      },
      {
        id: "end-on-contributions",
        code: "O-06",
        name: "End on Contributions, Not Thanks",
        source:
          "Patrick Winston — How to Speak (MIT OpenCourseWare, 2018); Kahneman et al. (1993)",
        tagline:
          "Your last slide and last line should say what you gave, not that you're done.",
        science:
          "Endings carry disproportionate weight in memory. Kahneman and colleagues' 1993 'When More Pain Is Preferred to Less' study found that people judged an experience largely by its most intense moment and its final moments, with duration mostly ignored. Winston applies this to the close of a talk. 'Thank you' is 'a weak move', he argued, because it suggests the audience stayed out of politeness. 'Conclusions' is weaker still, since they may be 'perfectly legitimate conclusions that nobody cares about'. What people care about is what you have done, so the final slide, the one on screen through Q&A while people file out, should be titled Contributions and list them. The last spoken line should be one of a small set of true endings: a call to action, a salute that tells the audience specifically what you valued about being with them, or a joke that sends them out feeling they had fun throughout.",
        deployment: [
          "Build a final slide titled 'Contributions', or 'What you now have', listing the two to four things the audience gained. Leave it up during Q&A.",
          "Script your last sentence word for word. Make it a call to action, a specific salute to the audience, or a closing line that echoes your opening.",
          "Deliver the last line, stop and hold eye contact. If applause starts, a mouthed 'thank you' is fine; don't make it the ending.",
          "Take Q&A before the true close, then return to your contributions and final line so the last word is yours, not the last question's.",
        ],
        examples: [
          "\"It's been great fun being here. It's been fascinating to see what you folks are doing here at MIT.\" (Winston, demonstrating a salute)",
          "\"You came in with a pricing problem. You're leaving with a test you can run on Monday. Run it.\"",
          "Final slide: 'Contributions: a churn model that works on 30 days of data; three onboarding fixes; an open dataset.'",
        ],
        caution:
          "In some cultures and formal settings, thanking the host or audience is expected courtesy. Do it early or near the end, but not as the final word. A salute must be specific and true, because generic flattery reads as filler. Ending on a joke requires one that actually lands: a flat joke is the worst possible last impression.",
      },
      {
        id: "get-excited-not-calm",
        code: "O-07",
        name: "Get Excited, Not Calm",
        source:
          "Alison Wood Brooks — Get Excited: Reappraising Pre-Performance Anxiety as Excitement (Journal of Experimental Psychology: General, 2014)",
        tagline:
          "Nervous before you speak? Don't fight the adrenaline. Rename it: say 'I am excited.'",
        science:
          "Nearly everyone's instinct is to calm down. In Brooks's pilot, 91 percent of 300 respondents chose 'try to relax and calm down' as the best advice before a big speech. But anxiety and excitement are both high-arousal states with near-identical physiology, while calm is low-arousal. Moving from anxious to calm means fighting your body, whereas moving from anxious to excited only changes the label. In one study, 140 students prepared a two-minute persuasive speech to be filmed and 'judged by a committee', then said either 'I am excited' or 'I am calm' before delivering it. Blind raters scored the 'excited' group as more persuasive, confident, competent and persistent. In her singing study, heart rate did not differ by condition: the arousal stayed and the interpretation changed. Brooks links the effect to an opportunity mindset rather than a threat mindset.",
        deployment: [
          "When the nerves arrive, don't tell yourself to calm down. Say out loud, or firmly to yourself, 'I am excited.'",
          "Read the physical signs as fuel: a racing heart means your body is ready to perform, not that something is wrong.",
          "Frame the talk as an opportunity to win something, not a test you might fail: 'This is my chance to get the budget.'",
          "Coaching someone else? Say 'Get excited', not 'Relax'.",
        ],
        examples: [
          "Backstage, two minutes out: \"I am excited. This is the room I wanted.\"",
          "To a nervous colleague before a pitch: \"That buzz is good. Get excited, you've earned this slot.\"",
        ],
        caution:
          "This is a one-line state shift, not a treatment for clinical anxiety or a substitute for preparation. The evidence comes from one author's studies with modest, mostly student samples, so treat it as a strong nudge, not a guarantee. Telling someone in real distress to 'just get excited' can feel dismissive. Offer it as a tool, not a correction.",
      },
      {
        id: "praise-the-deed",
        code: "O-08",
        name: "Praise the Deed",
        source:
          "Aristotle — Rhetoric, Book I.9; Toastmasters International; Peggy Noonan — Simply Speaking (1998)",
        tagline:
          "At a toast or a eulogy, tell what they did. Let the room name the virtue.",
        science:
          "Aristotle defined ceremonial oratory as speech that praises or blames, concerned with the present, and his instruction for praise has aged well: 'we must display his actions as the product of such qualities', because encomium 'refers to what he has actually done'. Adjectives such as kind, generous or brave are claims. A deed is evidence, and a room that infers the virtue from the story believes it more than a room that is told it. He added two moves that still separate great tributes from polite ones. First, praise and advice are the same content in different grammar: 'whenever you want to praise any one, think what you would urge people to do'. So the best eulogies end as a charge to the living. Second, fit the praise to what this audience honors. Toastmasters' guidance gives the modern shape: a eulogy is 'not the chronology of a life but a tribute to it', limited to two or three points, and a toast runs two to three minutes. Noonan, Reagan's speechwriter, whose book covers toasts, tributes and eulogies, adds three things: write the text out, include humor, and sound 'like you, only a better, clearer you'.",
        deployment: [
          "Pick two or three moments that show who they are. Skip the CV and the timeline.",
          "Tell each moment as a scene with a detail only insiders would know, then name the quality once at most, or not at all.",
          "Turn the praise into a charge: close with what the room should do because of this person, then raise the glass or step down.",
          "Write it out word for word, rehearse aloud the lines most likely to make you choke up, and time it: two to three minutes for a toast.",
        ],
        examples: [
          "\"When the factory flooded, Dad didn't call a meeting. He drove there at 3 a.m. and was carrying stock out when the first shift arrived. If you want to honor him, be the first one there.\"",
          "\"Priya once rewrote an entire launch plan overnight so her team could have the weekend off. To Priya, and to the weekends she gave us.\"",
        ],
        caution:
          "Inside jokes exclude most of the room, and roast humor aimed at a bride, groom or the deceased rarely survives mixed company. Honesty beats whitewash, but a eulogy is not the place to settle scores. The most common failure is making it about the speaker: every story should end with them, not you. Fitting praise to the audience's values can slide into flattery, so praise what is true.",
      },
    ],
  },
  {
    id: "speaking",
    code: "10",
    name: "Speaking & Writing",
    brief:
      "Say it clearly where decisions get made: briefings, memos, meetings and the hard question across the table.",
    principles: [
      {
        id: "pyramid-principle",
        code: "L-01",
        name: "The Pyramid Principle",
        source:
          "Barbara Minto — The Pyramid Principle (McKinsey); US Army — AR 25-50 (BLUF)",
        tagline:
          "In any briefing, memo or email, lead with the answer. Then support it with grouped reasons, each resting on its own evidence.",
        science:
          "Minto, the first female MBA McKinsey hired (1963), codified how executives actually consume reasoning: conclusions first, support on demand. The pyramid: one governing thought at the top, supported by 3-ish mutually exclusive, collectively exhaustive (MECE) groupings, each backed by its data. The document opens with a short Situation, Complication, Question: the context everyone accepts, what changed, and the question that change raises, so the answer arrives as the natural reply. Audiences receiving the answer first can slot every subsequent detail into a frame; audiences forced through your discovery journey get lost and impatient. The US Army codified the same rule for its correspondence as BLUF, bottom line up front (AR 25-50). The mystery-novel structure feels natural to the author and is hostile to every reader.",
        deployment: [
          "Open with two lines of SCQ: the Situation everyone agrees on, the Complication that changed it, the Question that raises. Then state the answer at once: recommendation, ask, or conclusion. Not background, not methodology.",
          "Support with exactly two to four reasons, grouped so they don't overlap and don't leave gaps (MECE).",
          "Order reasons by strength for a friendly audience, or lead with the one that pre-empts the biggest objection for a hostile one.",
          "Answer the question each level provokes: every assertion should trigger 'why?' or 'how?', which the level below answers.",
        ],
        examples: [
          "\"We should exit the reseller channel by Q3. Three reasons: it loses money on every unit, it cannibalizes direct sales, and the contract's penalty window closes in July. Taking them in turn...\"",
          "Email version: verdict in the subject line, three supporting bullets, detail attached.",
        ],
      },
      {
        id: "what-so-what-now-what",
        code: "L-02",
        name: "What? So What? Now What?",
        source:
          "Matt Abrahams — Think Faster, Talk Smarter (2023; Stanford Graduate School of Business)",
        tagline:
          "Put on the spot, answer in three moves: the point, why it matters to them, what happens next.",
        science:
          "Most speaking in small rooms is unplanned: the question across the table, the 'any thoughts?' in a meeting, the update requested without warning. Abrahams, who teaches strategic communication at Stanford Graduate School of Business, argues that the failure there is rarely a shortage of ideas. It is a shortage of structure: the speaker thinks out loud, circles, and buries the point. His remedy is to carry a few portable structures, and this is the one he calls the Swiss Army knife. What states the idea plainly. So What makes it relevant to the listener, not the speaker. Now What names the action, decision or next step. The structure works twice over: as scaffolding for the speaker, supplying a start, a transition and an end, and as a map for listeners, because structured information is easier to process and remember. It also forces relevance, the step impromptu speakers most often skip.",
        deployment: [
          "When asked for a view, take a breath and sort your answer into the three slots before you start speaking.",
          "What: one or two sentences of substance. No preamble, no jargon.",
          "So what: tie it to the listener's goals ('For you, this means...'). If you can't fill this slot, the point may not be worth making.",
          "Now what: end on a concrete next step, a decision you need, or a question for the room. Then stop talking.",
        ],
        examples: [
          "\"The pilot missed its target by 12 percent. [What] That puts our Q3 renewals below plan. [So what] I'd like two weeks to test a revised onboarding flow before we decide on rollout. [Now what]\"",
          "As feedback: \"Your summary slide ran to 14 bullets, and the board skimmed past the one decision we needed. Next time, lead with the decision and move the bullets to the appendix.\"",
        ],
        caution:
          "It is a structure, not a script. Recited with the labels showing, it sounds canned, so keep the order and drop the signposts. On complex or contested issues it can oversimplify: use it to open the discussion, not to close it. In a brainstorm, where half-formed thinking is the point, it can shut ideas down too early.",
      },
      {
        id: "buffer-answer-topspin",
        code: "L-03",
        name: "Buffer, Answer, Topspin",
        source:
          "Jerry Weissman — In the Line of Fire: How to Handle Tough Questions",
        tagline:
          "Find the real question, restate it neutrally, answer it straight, then turn back to your point.",
        science:
          "Weissman built his method coaching executives through IPO roadshows, starting with Cisco's, where one investor's hard question can move a valuation. He treats Q&A as the moment audiences judge a speaker most, because it is the part that cannot be scripted. First, listen for what he calls the Roman Column: the core issue under the wording, often buried in a long or hostile question. Then buffer: paraphrase the question, or name its key issue, in neutral language. The buffer buys thinking time, confirms you heard correctly, and strips out loaded framing, so you never repeat an accusation in your own voice. Then answer the question actually asked, directly and briefly, because evasion is what audiences punish most. Finally, topspin: link the answer back to a point in your core message, so each question advances your story instead of derailing it.",
        deployment: [
          "Listen to the end of the question without drafting your reply. Identify the one issue underneath it.",
          "Buffer with a neutral paraphrase or key word: not 'Why did you blow the budget?' but 'The question is about cost control.'",
          "Answer that issue in your first sentence. If the answer is no, or you don't know, say so.",
          "Add one sentence of topspin that links back to your main message, then stop and take the next question.",
        ],
        examples: [
          "Question: \"Isn't this just another reorg that'll be reversed in a year?\" Buffer: \"You're asking whether this one will last.\" Answer: \"Two of the last three didn't, because nobody owned the results.\" Topspin: \"That's why every new team lead has a named target from day one.\"",
        ],
        caution:
          "A buffer that dodges the question is worse than none: audiences spot spin fast. Keep topspin to one line, or every answer turns into a speech. Don't paraphrase a simple, friendly question, because it sounds like stalling.",
      },
      {
        id: "busy-readers",
        code: "L-04",
        name: "Write for Busy Readers",
        source:
          "Todd Rogers & Jessica Lasky-Fink — Writing for Busy Readers (2023; Harvard Kennedy School)",
        tagline:
          "Assume your reader will skim. Fewer words, one clear ask, and a structure they can navigate in seconds.",
        science:
          "Rogers, a Harvard professor of public policy, and Lasky-Fink, research director of the People Lab at Harvard Kennedy School, built six principles from field experiments on how real people read: less is more, make reading easy, design for easy navigation, use enough formatting but no more, tell readers why they should care, and make responding easy. In one experiment they emailed 7,002 US school board members asking them to complete a short survey. A 49-word version got a 4.8 percent response rate against 2.7 percent for a 127-word version, an improvement of 78 percent, and follow-up work suggested readers used the length of the message to judge how much effort the request would take. The underlying fact is simple: readers are busy and triage everything, so every extra word, request or idea competes with the one you care about.",
        deployment: [
          "Cut ruthlessly: remove every word, sentence and idea the reader doesn't need in order to act. Include fewer ideas, not just fewer words.",
          "Put the ask or key point first, and keep each message to one main request.",
          "Make it easy to navigate: short paragraphs, informative headings, and formatting only for what truly matters.",
          "Tell readers why it matters to them, and make responding effortless: a yes/no question, a single link, a clear deadline.",
        ],
        examples: [
          "Subject line: \"Decision needed by Friday: approve Q3 hiring plan (yes/no)\"",
          "Instead of four paragraphs of context: \"Can you approve the attached plan by Friday? It adds two engineers within budget. Details below if useful.\"",
        ],
        caution:
          "Brevity is not bluntness: short messages can still be warm, and some readers need context before a request makes sense. Cut what the reader doesn't need, not what they do.",
      },
      {
        id: "narrative-memo",
        code: "L-05",
        name: "The Narrative Memo",
        source:
          "Jeff Bezos — Amazon's 2004 'no PowerPoint' email and 2017 shareholder letter",
        tagline:
          "Write the argument out in full sentences before the meeting. Prose exposes gaps that bullet points hide.",
        science:
          "In 2004 Bezos banned slide presentations from Amazon's senior meetings in favor of narrative memos, arguing that a good four-page memo is harder to write than a twenty-page deck because the narrative structure 'forces better thought and better understanding of what's more important than what, and how things are related.' In his 2017 shareholder letter he described the practice: meetings open with everyone silently reading a six-page memo, 'a kind of study hall', so discussion starts from a shared and complete understanding. The best memos, he wrote, are written and rewritten, shared with colleagues who are asked to improve them, set aside for a couple of days and edited again with a fresh mind. This is an established company practice rather than a tested finding, but the mechanism is sound: full sentences force the writer to state how ideas connect (because, therefore, unless), which bullet points let them skip.",
        deployment: [
          "For any decision that matters, write the case as a narrative: the situation, the problem, the options, the recommendation and what could go wrong.",
          "Use full sentences and explicit connectives such as 'because', 'therefore' and 'unless'. If you can't write the link, you haven't found it.",
          "Open the meeting with silent reading, so everyone discusses the same complete argument and nobody performs their way through slides.",
          "Draft early, ask a colleague to attack it, set it aside, then edit with fresh eyes.",
        ],
        examples: [
          "A memo's first line: \"We recommend closing the Leeds office by June, because it serves 4 percent of revenue at 11 percent of cost and its clients already prefer remote service.\"",
          "\"We'll spend the first fifteen minutes reading. Mark anything you disagree with, and we'll start there.\"",
        ],
        caution:
          "Six pages is Amazon's convention, not a rule; for most decisions one or two pages will do. A memo culture can also slow a small team down, so use it where the decision deserves full thought.",
      },
    ],
  },
  {
    id: "feedback-leadership",
    code: "11",
    name: "Feedback & Leadership",
    brief:
      "Say the hard thing in a way people can hear — and build rooms where the truth gets spoken back.",
    principles: [
      {
        id: "radical-candor",
        code: "F-01",
        name: "Radical Candor",
        source: "Kim Scott — Radical Candor",
        tagline:
          "Care personally AND challenge directly. Losing either produces the three failure modes.",
        science:
          "Scott's framework (built from careers at Google and Apple) maps feedback onto two axes: caring personally and challenging directly. Radical candor requires both. Drop the care and you get obnoxious aggression (feedback that's heard as attack); drop the challenge and you get ruinous empathy — the most common failure, where kindness silences the criticism people need to grow; drop both and you get manipulative insincerity. Her core finding: withholding hard feedback isn't kind, it's a career-damaging theft of information the person is entitled to.",
        deployment: [
          "Earn the right to challenge by demonstrating care first — know their goals, give credit publicly, invest in their growth visibly.",
          "Deliver criticism directly, specifically, and fast — humble, helpful, immediately, in person, privately (praise publicly).",
          "Hunt your ruinous empathy: list the feedback you've been softening or sitting on. That list is your job.",
          "Solicit criticism of yourself before dishing it out — and reward the person who gives it to you, visibly.",
        ],
        examples: [
          "\"Because I think you can run this team someday, I'm not going to sugarcoat this: the presentation wasn't ready, and here's specifically what was missing.\"",
          "\"What could I do or stop doing that would make it easier to work with me?\" [then be silent until they answer]",
        ],
      },
      {
        id: "feedback-triggers",
        code: "F-02",
        name: "The Three Feedback Triggers",
        source: "Douglas Stone & Sheila Heen — Thanks for the Feedback",
        tagline:
          "Feedback gets rejected for three reasons that have nothing to do with whether it's correct.",
        science:
          "Stone and Heen flipped the feedback literature by studying the receiver: even accurate, well-delivered feedback triggers rejection through three mechanisms. Truth triggers ('that's just wrong' — often because feedback types are conflated: appreciation, coaching, and evaluation are different products and starve differently). Relationship triggers ('not from YOU' — we reject the messenger, discarding the message). Identity triggers (the feedback destabilizes our story about ourselves, and we defend the story instead of hearing the data). Mastering reception — mining value from even badly delivered feedback — is a bigger lever than mastering delivery.",
        deployment: [
          "Name which type is being exchanged: 'Are you evaluating me, coaching me, or do I need appreciation right now?' Mismatched type is the most common failure.",
          "When you feel 'that's just wrong', switch to differences-hunting: 'What data do they see that I don't?' before rebutting.",
          "Separate messenger from message deliberately: 'If my most trusted mentor said this exact sentence, what would I take from it?'",
          "When identity shakes ('am I actually bad at this?'), delay the response — accept, sleep, then extract the 10% that's usable.",
        ],
        examples: [
          "\"Before you go on — is this a heads-up about my performance rating, or coaching? I want to listen the right way.\"",
          "\"My first instinct is to argue. Give me a day with it, and can we talk Thursday about what I do with it?\"",
        ],
      },
      {
        id: "sbi-model",
        code: "F-03",
        name: "SBI — Situation, Behavior, Impact",
        source: "Center for Creative Leadership",
        tagline:
          "Anchor feedback to a moment, describe what a camera saw, and state the effect — no character verdicts.",
        science:
          "The CCL's Situation-Behavior-Impact model strips out the two elements that make feedback combustible: generalization ('you always...') and attributed intent ('you were trying to undermine me'). Situation pins one specific, recent moment. Behavior describes only observable action — what a camera would record. Impact states the effect on you, the team, or the outcome. Because none of the three components is arguable, the conversation starts at problem-solving instead of litigation. The receiver supplies the intent themselves, which is the one thing you genuinely can't know.",
        deployment: [
          "Situation: name the time and place — 'in Tuesday's client call' — never 'lately' or 'often'.",
          "Behavior: observable action only. 'You interrupted the client three times' passes the camera test; 'you were dismissive' does not.",
          "Impact: the concrete effect — 'the client stopped offering information and the call ended early'.",
          "Then stop and ask: 'What was going on for you?' — the intent question, asked, not assumed.",
        ],
        examples: [
          "\"In yesterday's standup (S), when the outage came up, you said 'that's not my area' and moved on (B). Two juniors who were about to volunteer went quiet, and we lost the room (I). What was happening on your end?\"",
        ],
      },
      {
        id: "psych-safety",
        code: "F-04",
        name: "Psychological Safety",
        source:
          "Amy Edmondson (Harvard); Frazier et al. (2017) meta-analysis; Google's Project Aristotle",
        tagline:
          "When people can raise problems, questions and mistakes without fear, teams learn faster and perform better.",
        science:
          "Edmondson's hospital research found the best teams REPORTED more errors, not because they made more, but because they could admit them. Google's Project Aristotle, an internal study of 180+ teams, found psychological safety the most important of the five team dynamics it examined, more than who was on the team. That was a company study rather than peer-reviewed research, but it matches the wider evidence: a 2017 meta-analysis of 136 samples (Frazier and colleagues) linked psychological safety to learning behavior, speaking up, engagement and performance. Psychological safety is the shared belief that the team is safe for interpersonal risk-taking: questions, dissent, half-formed ideas and admissions of error won't be punished. Without it, the leader operates blind, and every room becomes an echo of what people think you want to hear.",
        deployment: [
          "Frame work as learning problems, not execution problems: 'we've never done this before; I need every set of eyes' licenses speaking up.",
          "Model fallibility as the leader: admit your own mistakes and unknowns FIRST — safety is set by what the most powerful person in the room confesses.",
          "Respond to bad news as information, never as betrayal: thank the messenger explicitly and visibly, every time. One shot messenger ends the flow permanently.",
          "Ask questions you don't know the answers to, and enforce airtime: silence from someone is missing data, not agreement.",
        ],
        examples: [
          "\"I missed this risk completely — walk me through what you saw that I didn't.\"",
          "\"That can't have been easy to bring to me. Thank you — this is exactly what I need to hear early.\"",
          "\"Before we decide: someone argue the other side. Rena, you looked skeptical — what are we missing?\"",
        ],
      },
      {
        id: "vulnerability-trust",
        code: "F-05",
        name: "Vulnerability Builds Trust",
        source: "Brené Brown — Daring Greatly, Dare to Lead",
        tagline:
          "Trust is built in small moments of risk — and vulnerability is the leader's move, not the leader's weakness.",
        science:
          "Brown's grounded-theory research across thousands of interviews found vulnerability — uncertainty, risk, emotional exposure — is the birthplace of trust, innovation, and engagement, not their enemy. Armored leadership (perfectionism, false certainty, never needing help) trains teams to hide struggle, which is where problems compound in darkness. Her BRAVING framework decomposes trust into behaviors (boundaries, reliability, accountability, vault, integrity, non-judgment, generosity), and her data shows trust accrues through small, consistent moments — asking for help, admitting 'I don't know', owning mistakes — far more than grand gestures.",
        deployment: [
          "Say 'I don't know' and 'I need help' out loud, early, and unprompted — each instance licenses the whole team to do the same.",
          "Own mistakes with specificity and without self-flagellation: what happened, what you learned, what changes.",
          "Guard the vault: never share what others confided — trust dies fastest through leaked confidences ('what's shared with you stays with you').",
          "Assume generous intent in ambiguity ('the story I'm telling myself is...') — narrate your interpretation as a draft, not a verdict.",
        ],
        examples: [
          "\"The story I'm telling myself is that the silence in that meeting meant people disagreed but didn't feel they could say so. What actually happened?\"",
          "\"I made the wrong call on the vendor. Here's what I ignored, and here's the check I'm adding so I can't ignore it again.\"",
        ],
      },
      {
        id: "start-with-why",
        code: "F-06",
        name: "Start With Why",
        source:
          "Adam Grant — beneficiary-contact studies (2007) and 'It's Not All About Me' (with Hofmann, 2011); Simon Sinek — Start With Why",
        tagline:
          "Lead with who the work is for and why it matters. Purpose moves people when it is concrete, human and about someone else.",
        science:
          "Sinek popularized communicating purpose before product. His explanation, that 'why' speaks to the emotional brain and 'what' to the rational one, is not supported by neuroscience, and his company examples are chosen after the fact. The instinct underneath has better evidence in Adam Grant's field experiments. In a university call centre, fundraisers who spent five minutes meeting one scholarship student their calls had funded increased their weekly phone time by 142 percent and the revenue they raised by 171 percent over the following month; colleagues who only read a letter from a student showed no change. In hospitals, signs reading 'Hand hygiene prevents patients from catching diseases' raised soap and gel use by about 45 percent, while 'prevents you from catching diseases' did nothing. The lesson is sharper than 'start with why': purpose motivates when it is specific, human and points to someone other than the listener.",
        deployment: [
          "Open significant asks with who benefits and how, before the task, spec or deadline.",
          "Make the purpose concrete: a named customer, a real case or the words of the person helped beats a mission statement.",
          "Where you can, connect people to the beneficiaries directly. In Grant's study a five-minute conversation outperformed a written message.",
          "Point the why outward: messages about other people's outcomes often move people more than messages about their own benefit.",
        ],
        examples: [
          "\"Everything about this project exists so a customer never again waits four days for an answer. That's the bar. The redesign is just how we get there.\"",
          "\"Before we start, this is Maria. She runs one of the clinics we supply, and she's going to tell you what happens on the days our deliveries are late.\"",
        ],
        caution:
          "Purpose talk that isn't backed by real impact reads as spin, and quickly. Don't use 'why' to paper over a weak 'what': people still need clear goals, resources and fair treatment.",
      },
      {
        id: "progress-principle",
        code: "F-07",
        name: "The Progress Principle",
        source:
          "Teresa Amabile & Steven Kramer — The Progress Principle (2011; Harvard Business School)",
        tagline:
          "The strongest motivator in a working day is progress on work that matters. Clear the path.",
        science:
          "Amabile and Kramer analyzed nearly 12,000 daily diary entries from 238 people across seven companies, each describing the day's events and how they felt. The strongest factor on people's best days was making progress in meaningful work, even a small step forward, and setbacks had an even larger negative effect. They call the supporting conditions catalysts (events that directly help the work, such as clear goals, autonomy, resources and help) and nourishers (interpersonal support such as encouragement, respect and recognition). When they asked 669 managers to rank five potential motivators, progress came last: only 35, about 5 percent, put it first, and most chose recognition. The diary data are correlational, but the implication for leaders is practical: much of motivation is removing obstacles to work people already care about.",
        deployment: [
          "Break big goals into steps small enough that people can see progress weekly, and make that progress visible.",
          "Ask in one-to-ones: 'What's slowing you down?' Then remove it. It is often the most motivating thing you can do.",
          "Protect meaning: explain how the work connects to outcomes people care about, and never dismiss it as busywork.",
          "Treat setbacks quickly: acknowledge them, fix the cause and help the team back to momentum.",
        ],
        examples: [
          "\"Three things got unblocked this week: data access, the legal sign-off and the test environment. Next up is the pilot.\"",
          "An end-of-week habit: each person names one thing that moved forward. It takes five minutes and changes how the week is remembered.",
        ],
        caution:
          "Progress only motivates when the work is meaningful to the person; manufactured wins and vanity metrics read as condescension. Recognition still matters. It just isn't the whole story.",
      },
    ],
  },
  {
    id: "defense",
    code: "12",
    name: "Defense & Counter-Influence",
    brief:
      "The same weapons, pointed at you — recognize them, name them, and neutralize them without breaking rapport.",
    principles: [
      {
        id: "cialdini-defenses",
        code: "X-01",
        name: "The Cialdini Defenses",
        source: "Robert Cialdini — Influence (the defense sections)",
        tagline:
          "You cannot suppress automatic influence triggers — but you can catch the click and inspect the tape.",
        science:
          "Each chapter of Influence ends with a defense, and they share one architecture: the triggers (reciprocity, commitment, social proof, liking, authority, scarcity) are automatic and mostly beneficial — the defense is not to fight the feeling but to notice it firing and ask whether it's being exploited. The signature tell of exploitation is manufactured triggers: unrequested gifts that precede asks, artificial deadlines, fake popularity, strategic flattery, borrowed authority symbols. The moment of defense is the felt 'pull' — a disproportionate urge to comply that you can't justify on the merits.",
        deployment: [
          "Notice the pull: when you feel unusual urgency or obligation to say yes, stop and name which trigger is firing.",
          "Reciprocity defense: redefine unrequested favors as what they are — if it was a sales device, you owe nothing.",
          "Scarcity defense: ask 'do I want this for its function, or because it's vanishing?' Scarcity changes availability, never quality.",
          "Authority defense: split the symbol from the substance — 'is this expert actually an expert HERE, and are they being straight with me?'",
          "Commitment defense: ask 'knowing what I know now, would I make this same commitment again?' If no, the past self doesn't get a vote.",
        ],
        examples: [
          "\"I notice I'm feeling rushed, which usually means someone built me a deadline. What happens if I decide next week?\"",
          "Free audit → big proposal: \"I appreciate the work you put in, and I'm evaluating this on the numbers alone.\"",
        ],
      },
      {
        id: "presuasion-awareness",
        code: "X-02",
        name: "Pre-Suasion Awareness",
        source:
          "Robert Cialdini — Pre-Suasion (2016)",
        tagline:
          "The persuasion happened before the message: whoever controls your attention in the moment before controls the frame.",
        science:
          "Cialdini's follow-up thesis is that skilled influencers work in the moment before the message, directing attention to a concept that makes the audience receptive. The core mechanism is sound: what we attend to feels more important for a while, the same effect agenda-setting research finds at the scale of news coverage. Treat the book's specific demonstrations with care, though. Many rest on subtle 'priming' studies, such as background music shifting wine choices, and a large share of social-priming findings failed to replicate in the 2010s. Direct openers are better supported: a question like 'are you unhappy with your current provider?' sends the listener searching memory for grievances, and that search shapes what they conclude. The defense is the same either way: notice the opener, and ask what state it is designed to put you in.",
        deployment: [
          "Audit openers: when a conversation begins with an odd question ('would you say you're a helpful person?'), ask what answer-state it's designed to install.",
          "Notice environment as a channel: the music, imagery, and first agenda item of any pitch were chosen. Ask what they point your attention toward.",
          "Insert a gap between the frame and your decision — pre-suasive states are temporary; sleeping on it dissolves them.",
          "Use it ethically yourself: open meetings with the question or image that puts attention on the shared goal, not on turf.",
        ],
        examples: [
          "Salesperson: 'Do you consider yourself someone who invests in quality?' You: \"I consider myself someone who compares options for a week. Let's start with the spec sheet.\"",
          "Noticing: \"Interesting that the deck opens with three slides about my competitors. Let's start with my requirements instead.\"",
        ],
        caution:
          "Don't over-read environments. Most openers are just openers. The dependable effects are the explicit ones: the question asked first, the frame chosen and the item put at the top of the agenda.",
      },
      {
        id: "gaslighting",
        code: "X-03",
        name: "Gaslighting Recognition",
        source: "Robin Stern — The Gaslight Effect; Paige Sweet — sociology of gaslighting (2019)",
        tagline:
          "The systematic attack on your confidence in your own perception — 'that never happened; you're too sensitive.'",
        science:
          "Gaslighting (named for the 1944 film) is a pattern, not an event: persistent denial of your accurate perceptions ('that never happened', 'you're remembering it wrong', 'you're overreacting') until you outsource reality-testing to the gaslighter. Stern identifies the progression — disbelief, then defense, then depression — and the hook: gaslighting requires your need for the gaslighter's approval to work. Sweet's sociological work shows it thrives on power asymmetries and isolation. The signature symptom in YOU: chronic self-doubt after interactions, constant apologizing, and the sentence 'maybe I really am crazy.'",
        deployment: [
          "Diagnose by pattern, not incident: everyone misremembers sometimes. Systematic denial of your experience, always resolving in their favor, is the tell.",
          "Anchor externally: keep contemporaneous written records of key conversations, and reality-check with people outside the dynamic.",
          "Refuse the argument about your own perception: you can debate interpretations, never whether you experienced what you experienced.",
          "Drop the approval hook: the technique dies when their agreement stops being required for your reality.",
          "Exit stakes rise with power asymmetry — in workplace settings, move the relationship to writing and witnesses.",
        ],
        examples: [
          "\"We remember this differently, and I'm confident in my memory. Let's move to what happens next.\"",
          "\"I'm not going to debate whether I'm 'too sensitive.' The comment was out of line, and I'm asking you not to repeat it.\"",
          "After a destabilizing meeting: same-day email — \"Confirming what we agreed today: ...\" (the record ends the revision game)",
        ],
        caution:
          "Don't inflate the term: disagreement, imperfect memory, or a different perspective isn't gaslighting. Reserving the word for the systematic pattern keeps your alarm credible.",
      },
      {
        id: "dark-patterns",
        code: "X-04",
        name: "Manipulation & Dark-Pattern Detection",
        source: "Harry Brignull — Deceptive Patterns; FTC dark-patterns research",
        tagline:
          "Manufactured urgency, guilt-tripping, and engineered defaults — the industrialized forms of influence abuse.",
        science:
          "Brignull coined 'dark patterns' for interfaces engineered to trick users — but the taxonomy maps directly onto human manipulators: false urgency (countdown timers; 'this offer dies today'), confirmshaming ('No thanks, I hate saving money' — guilt as a lever), forced continuity and roach motels (easy in, engineered exit friction), drip pricing, and fake social proof. The unifying test, per FTC analysis: does the design/behavior serve YOUR informed choice, or exploit predictable cognitive shortcuts against your interest? Legitimate persuasion survives transparency; manipulation requires you not to notice it.",
        deployment: [
          "Apply the transparency test: would this tactic still work if the person explained exactly what they were doing? Persuasion survives disclosure; manipulation doesn't.",
          "Treat manufactured urgency as a red flag in itself: real deadlines have reasons you can verify. 'Why this date?' exposes the theater.",
          "Name guilt-levers neutrally: emotional blackmail ('after everything I've done for you...') converts the reciprocity norm into a weapon — the naming disarms it.",
          "Check exits before entering: any commitment that's dramatically easier to start than to stop was designed that way.",
        ],
        examples: [
          "\"You've mentioned the deadline three times. Walk me through what actually happens on the 15th if we haven't signed.\"",
          "\"That sounds like 'agree or you're a bad person.' Let's separate the guilt from the question — the answer is still no.\"",
          "\"Before I sign up: show me the cancellation process, start to finish.\"",
        ],
      },
      {
        id: "framing-literacy",
        code: "X-05",
        name: "Framing & Propaganda Literacy",
        source: "George Lakoff — Don't Think of an Elephant; Robert Entman — framing theory",
        tagline:
          "Whoever defines the terms wins before the debate begins — every frame selects, and every selection hides.",
        science:
          "Entman's definition: to frame is to select some aspects of reality and make them salient — promoting a particular problem definition, cause, moral evaluation, and remedy while the alternatives quietly vanish. Lakoff adds the enforcement mechanism: negating a frame activates it ('don't think of an elephant'), so arguing inside the opponent's language cements their frame ('tax relief' pre-decides that taxes are an affliction). Classic propaganda techniques are frames at scale: loaded labels, card-stacking (one-sided evidence), bandwagon, and false dilemmas. The defense is frame-spotting: identifying the choice of words as itself a move.",
        deployment: [
          "Spot the embedded verdict: 'tax relief', 'streamlining', 'legacy process' — each noun phrase carries a conclusion. Name the frame before answering the question.",
          "Never argue inside a hostile frame — reframe first: reject the premise, then substitute your own problem definition.",
          "Ask what the frame hides: every 'the issue is X' makes some Y invisible. 'What would this look like if we framed it as Y instead?'",
          "Watch for false dilemmas — 'either we ship now or we lose the market' — the frame's power is the options it deletes. Reintroduce them.",
        ],
        examples: [
          "\"Before I answer — calling it 'headcount bloat' assumes the conclusion. Let's call it 'coverage' and ask what the right level is.\"",
          "\"Those aren't the only two options. There's a third we haven't discussed: shipping the core module now and the rest in April.\"",
        ],
      },
      {
        id: "inoculation",
        code: "X-06",
        name: "Inoculation & Prebunking",
        source: "William McGuire — inoculation theory (1961); Sander van der Linden — prebunking research",
        tagline:
          "A weakened dose of the opposing argument, refuted in advance, immunizes beliefs against the full-strength attack.",
        science:
          "McGuire's inoculation theory borrowed the vaccine logic: beliefs never exposed to challenge collapse when attacked, while beliefs pre-exposed to a weakened counterargument plus its refutation resist even NEW attacks the inoculation never mentioned. Van der Linden's modern work scales this into 'prebunking': teaching people the manipulation TECHNIQUES (fake experts, false dilemmas, emotional exploitation) confers broader immunity than debunking individual claims after the fact — technique-level immunity generalizes; fact-level correction doesn't. Forewarning alone ('someone will try to change your mind about this') measurably stiffens resistance.",
        deployment: [
          "Inoculate your own proposals: raise the strongest objection yourself, in weakened form, and refute it before opponents deliver it at full strength ('you'll hear people say X — here's what that misses').",
          "Prebunk before the pitch you know is coming: brief stakeholders on the tactic ('they'll anchor high and manufacture a deadline') — technique-warnings outlast fact-rebuttals.",
          "Immunize teams by exposure, not sheltering: have them argue the opposing case once, with your refutation available — unchallenged conviction is brittle conviction.",
          "Use forewarning as a lightweight dose: 'The vendor will be very persuasive on Thursday' alone raises the room's resistance.",
        ],
        examples: [
          "\"Next week you'll hear that this plan is 'too slow.' Here's the two-sentence version of that argument — and here's the failure it conveniently omits.\"",
          "\"Before the demo: they'll show the happy path only. Ask what happens at 10x volume, and watch the answer carefully.\"",
        ],
      },
    ],
  },
];
