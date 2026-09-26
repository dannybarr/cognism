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
        name: "Microexpressions & Emotional Leakage",
        source: "Paul Ekman — cross-cultural emotion research",
        tagline:
          "Seven emotions flash across every human face in under half a second — before the mask goes up.",
        science:
          "Ekman's cross-cultural studies (including preliterate Papua New Guinea) established that seven emotions produce universal facial expressions: anger, fear, sadness, disgust, contempt, surprise, and happiness. When people suppress an emotion, it still 'leaks' as a microexpression lasting 1/25 to 1/5 of a second. Trained observers catch these flashes and gain access to what the person actually feels versus what they're presenting — most valuably, the flash of contempt or fear that contradicts a confident 'yes'.",
        deployment: [
          "Watch the face at decision moments — when you state the price, the deadline, the ask. The first half-second of reaction is the honest one.",
          "Learn the big three tells: contempt (one-sided lip corner tightening), masked fear (brows pulled together and raised), and the fake smile (mouth without the eye crinkle of a true Duchenne smile).",
          "Treat a microexpression as a flag, not a verdict — it tells you an emotion occurred, not why. Probe with a label: 'It seems like something about that number lands wrong.'",
          "Check congruence: when the face says one thing and the words another, believe the face and investigate the gap.",
        ],
        examples: [
          "You quote the timeline; their 'sounds fine' follows a flash of pressed-lip anger. \"It seems like the timeline creates a problem on your end — what am I missing?\"",
          "A one-sided smirk during your proposal: contempt leak. Don't push forward — surface the objection now.",
        ],
        caution:
          "Amateur face-reading breeds overconfidence. Microexpressions reveal that an emotion exists, never its cause — always verify with questions.",
      },
      {
        id: "body-comfort",
        code: "V-02",
        name: "Comfort / Discomfort Tells",
        source: "Joe Navarro — What Every BODY Is Saying (FBI counterintelligence)",
        tagline:
          "The limbic brain answers before the mouth does — read comfort and discomfort, especially in the feet.",
        science:
          "Navarro's 25 years in FBI counterintelligence codified a working principle: the limbic system reacts to threat and reward instantly and honestly, while the thinking brain scripts the words. The most honest body parts are the least consciously controlled — feet and legs first (pointing toward exits or interesting people, happy feet, freeze), then torso (leaning, ventral fronting or blading away), then hands (pacifying behaviors: neck-touching, face-rubbing signal stress). The face is the LEAST reliable — it's the most practiced liar.",
        deployment: [
          "Establish a baseline first: how does this person sit, gesture, and hold their feet when relaxed? Deviations from baseline are the signal, not any single gesture.",
          "Watch for pacifying behaviors after your questions — neck touching, lip compression, collar pull. They mark which topic caused stress.",
          "Read the feet: feet aimed at the door mean the conversation is over regardless of the polite words. Torso turned fully toward you means engagement.",
          "Look for clusters and timing: one gesture means little; three discomfort tells right after your price does.",
        ],
        examples: [
          "Their words say 'we're open to it' while their torso blades away and their feet point at the door — the deal is not open. Address it: \"I get the sense this isn't landing. What's the real hesitation?\"",
          "Sudden lip compression the moment you mention the exclusivity clause: that clause is the issue. Slow down there.",
        ],
        caution:
          "No gesture has a fixed meaning — crossed arms may mean cold, comfort, or habit. Only deviations from that person's baseline, in clusters, in context, carry information.",
      },
      {
        id: "charisma-ppw",
        code: "V-03",
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
        code: "V-04",
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
        code: "V-05",
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
        code: "V-06",
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
        code: "V-07",
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
        code: "V-08",
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
    name: "Storytelling & Speaking",
    brief:
      "Structure ideas so they stick, move audiences, and survive retelling in rooms you never enter.",
    principles: [
      {
        id: "success-model",
        code: "T-01",
        name: "SUCCESs — Made to Stick",
        source: "Chip & Dan Heath — Made to Stick",
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
        source: "Nancy Duarte — Resonate (analysis of history's great speeches)",
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
        id: "ted-methods",
        code: "T-03",
        name: "The 18-Minute Rule & the Jaw-Drop",
        source: "Carmine Gallo — Talk Like TED; TED curation research",
        tagline:
          "Constrain the talk, engineer one unforgettable moment, and never present more than the mind can hold.",
        science:
          "TED caps every talk at 18 minutes by design — curator Chris Anderson calls it long enough to be serious, short enough to hold attention; cognitive-load research supports it (listening is metabolically expensive; attention decays sharply well before the hour). Gallo's analysis of the most-viewed talks adds the 'jaw-drop moment': one emotionally charged, unexpected event — a demonstration, statistic, or image — that hijacks attention and becomes THE thing people retell (Bill Gates releasing mosquitoes on stage: 'there's no reason only poor people should have the experience').",
        deployment: [
          "Whatever time you're given, prepare the 18-minute version — the discipline of compression sharpens every argument. If you're given less, the core survives.",
          "Design one jaw-drop deliberately: a demonstration, a shocking-but-true number made visceral, an image no one expects. One. More dilutes.",
          "Place it where attention naturally sags — roughly the middle — not the opening (which has free attention) or the close (which the recap owns).",
          "Cut ruthlessly: three key messages maximum. The talk is what they remember, not what you say.",
        ],
        examples: [
          "Instead of '2.5 million pounds of waste': wheeling a single day's worth of the office's discarded paper on a cart into the meeting.",
          "\"I'm going to show you our entire security posture in one slide — this is a real phishing email our CFO clicked last month.\"",
        ],
      },
      {
        id: "pyramid-principle",
        code: "T-04",
        name: "The Pyramid Principle",
        source: "Barbara Minto — The Pyramid Principle (McKinsey)",
        tagline:
          "Lead with the answer. Then support it with grouped reasons, each resting on its own evidence.",
        science:
          "Minto, McKinsey's first female consultant, codified how executives actually consume reasoning: conclusions first, support on demand. The pyramid: one governing thought at the top, supported by 3-ish mutually exclusive, collectively exhaustive (MECE) groupings, each backed by its data. Audiences receiving the answer first can slot every subsequent detail into a frame; audiences forced through your discovery journey get lost and impatient. The mystery-novel structure feels natural to the author and is hostile to every reader.",
        deployment: [
          "State the answer in the first sentence: recommendation, ask, or conclusion. Not background, not methodology.",
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
        id: "ethos-pathos-logos",
        code: "T-05",
        name: "Ethos, Pathos, Logos",
        source: "Aristotle — Rhetoric (4th century BC)",
        tagline:
          "Every act of persuasion runs on three currents: credibility, emotion, and logic — in that order of operations.",
        science:
          "Aristotle's Rhetoric remains the foundational taxonomy of persuasion: ethos (the audience's belief in your character and competence — established first, or nothing else lands), pathos (emotional state of the audience — the engine of decision; modern neuroscience agrees decisions are made emotionally and justified rationally), and logos (the argument's logical structure — necessary but never sufficient). Most technical communicators fail by leading with logos to an audience that hasn't granted them ethos or been moved by pathos; most demagogues succeed on pathos alone. Mastery is deploying all three in sequence.",
        deployment: [
          "Establish ethos before arguing: credentials via third party, demonstrated understanding of THEIR situation, or a disarming admission against interest.",
          "Engage pathos through specifics: one named person's story, a vivid consequence, stakes the audience already cares about.",
          "Deliver logos in pyramid form — claim, reasons, evidence — only after the first two have opened the channel.",
          "Diagnose failed persuasion by channel: Did they doubt you (ethos)? Not care (pathos)? Not follow (logos)? Fix the failing current, not the whole speech.",
        ],
        examples: [
          "\"I've run this migration twice at companies your size — both hit the same wall we're about to discuss (ethos). Last time, the team found out at 2 a.m. on a Saturday (pathos). Here are the three ways to avoid it (logos).\"",
        ],
      },
      {
        id: "rhetorical-devices",
        code: "T-06",
        name: "Anaphora, Tricolon & the Applause Machine",
        source: "Classical rhetoric; Max Atkinson — Our Masters' Voices (claptrap research)",
        tagline:
          "Repetition and threes are the load-bearing structures of memorable speech — they cue rhythm, completion, and applause.",
        science:
          "Atkinson's analysis of political speeches found that audience applause follows predictable rhetorical structures — above all the tricolon (three-part list: 'blood, sweat, and tears') and contrastive pairs ('ask not what your country can do for you...'). Three is the smallest number that creates a pattern, and the completed pattern signals 'respond now'. Anaphora — repeating the opening phrase ('We shall fight on the beaches... we shall fight on the landing grounds...') — builds accumulating force and makes passages quotable. These aren't decoration; they are cognitive packaging that makes ideas rhythmically inevitable.",
        deployment: [
          "Put your key claims in threes: three reasons, three examples, three commitments. Two feels thin; four dissolves into a list.",
          "Use anaphora for building sequences: open three consecutive sentences with the same phrase when you want force.",
          "Use contrastive pairs for the quotable line: 'not X, but Y' — the structure does half the writing.",
          "End the tricolon on the longest, strongest element — rhythm resolves on weight ('blood, sweat, and tears', not 'tears, sweat, and blood').",
        ],
        examples: [
          "\"We tried waiting. We tried patching. We tried hoping. None of it worked — here's what will.\" (anaphora into pivot)",
          "\"This isn't a tooling problem. It's a trust problem.\" (contrastive pair)",
          "\"Faster onboarding, fewer escalations, and a support queue that finally sleeps at night.\" (tricolon, weighted ending)",
        ],
      },
    ],
  },
  {
    id: "feedback-leadership",
    code: "09",
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
        source: "Amy Edmondson (Harvard); Google's Project Aristotle",
        tagline:
          "The #1 predictor of team performance is whether members can take interpersonal risks without fear.",
        science:
          "Edmondson's hospital research found the best teams REPORTED more errors — not because they made more, but because they could admit them. Google's Project Aristotle, studying 180+ teams, confirmed psychological safety as the strongest single predictor of team effectiveness, above talent composition. Psychological safety is the shared belief that the team is safe for interpersonal risk-taking: questions, dissent, half-formed ideas, and admissions of error won't be punished. Without it, the leader operates blind — every room becomes an echo of what people think you want to hear.",
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
        source: "Simon Sinek — Start With Why (the Golden Circle)",
        tagline:
          "People don't buy what you do; they buy why you do it. Communicate from the inside out.",
        science:
          "Sinek's Golden Circle: most communication moves outside-in — WHAT we do, HOW we're different, and (rarely) WHY. Inspiring communicators invert it: purpose first, then method, then product. The claim maps loosely onto brain architecture — the 'why' speaks to emotion and decision-making, the 'what' to rationalization — and holds up as communication practice regardless: a purpose gives people a cause to join rather than a task to complete, and decisions framed by why survive contact with obstacles that kill decisions framed by what. Apple's 'everything we do challenges the status quo' precedes any product mention.",
        deployment: [
          "Open every significant ask with the why: the purpose or belief the work serves — before any task, spec, or deadline.",
          "Make the why a cause, not a euphemism for profit: 'so support tickets stop ruining weekends' is a why; 'to hit Q3 targets' is a what wearing a costume.",
          "Test delegation quality: if the person can make a good judgment call at 5 p.m. Friday without calling you, you communicated the why. If not, you handed them a what.",
          "Return to the why when energy flags or priorities conflict — it's the tiebreaker that doesn't need you present.",
        ],
        examples: [
          "\"Everything about this project exists so a customer never again waits four days for an answer. That's the bar. The redesign is just how we get there.\"",
          "\"If you hit a tradeoff I didn't anticipate: optimize for the customer finding out early. That principle outranks the spec.\"",
        ],
      },
    ],
  },
  {
    id: "defense",
    code: "10",
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
        source: "Robert Cialdini — Pre-Suasion (2016)",
        tagline:
          "The persuasion happened before the message: whoever controls your attention in the moment before controls the frame.",
        science:
          "Cialdini's follow-up thesis: skilled influencers win in the 'privileged moment' BEFORE the message, by directing attention to a concept that makes the audience receptive — what we attend to becomes temporarily important and shapes what follows. Demonstrations: asking 'do you consider yourself adventurous?' before a request multiplied compliance; a French-music background shifted wine purchases French; asking 'are you unhappy with your current provider?' primes a catalog of grievances. The defense is noticing the opener: what state is this question, image, or environment designed to put me in?",
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
