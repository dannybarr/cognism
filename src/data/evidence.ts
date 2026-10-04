// How strong the evidence is behind each principle, keyed by principle id.
// Levels, strongest first:
//   meta-analysis  — a synthesis of many studies supports the core claim
//   experimental   — controlled experiments support it
//   observational  — field, longitudinal, diary or survey research supports it
//   practitioner   — an expert framework from practice; plausible, not formally tested
//   classical      — classical philosophy or rhetoric
// Notes flag limits a careful reader should know (small effects, failed replications, narrow scope).

export type EvidenceLevel = "meta-analysis" | "experimental" | "observational" | "practitioner" | "classical";

export interface Evidence {
  level: EvidenceLevel;
  note?: string;
}

export const evidenceLevels: Record<EvidenceLevel, string> = {
  "meta-analysis": "A synthesis of many studies supports the core claim.",
  experimental: "Controlled experiments support the core claim.",
  observational: "Field, longitudinal, diary or survey research supports the core claim.",
  practitioner: "An expert framework from practice: plausible and widely used, not formally tested.",
  classical: "Classical philosophy or rhetoric: enduring, not empirically tested.",
};

export const evidence: Record<string, Evidence> = {
  // Operations: Discovery
  "calibrated-questions": { level: "practitioner" },
  "active-listening": { level: "observational" },
  "spin-questions": { level: "observational", note: "Based on Rackham's observation of 35,000 sales calls rather than controlled trials." },
  "effective-silence": { level: "practitioner" },
  "motivational-interviewing": { level: "meta-analysis", note: "A 119-study meta-analysis (Lundahl et al., 2010) found MI beats weak comparisons but performs similarly to other specific treatments." },
  "seek-first": { level: "practitioner" },
  "black-swans": { level: "practitioner" },
  "curiosity-gap": { level: "experimental" },
  "ladder-of-inference": { level: "practitioner" },
  // Operations: Rapport
  mirroring: { level: "practitioner" },
  labeling: { level: "experimental" },
  "tactical-empathy": { level: "practitioner" },
  "accusation-audit": { level: "practitioner" },
  "liking-similarity": { level: "meta-analysis", note: "A meta-analysis of 313 studies (Montoya, Horton & Kirchner, 2008) found perceived similarity predicts liking more than actual similarity." },
  "fast-friends": { level: "experimental" },
  pratfall: { level: "experimental", note: "Rests largely on Aronson's 1966 study; the effect is limited to people already seen as highly competent." },
  "name-warmth": { level: "experimental" },
  "five-to-one": { level: "observational", note: "From couples research; no equivalent ratio has been validated for teams." },
  // Operations: Solutioning
  "self-persuasion": { level: "experimental" },
  "thats-right": { level: "practitioner" },
  "advice-seeking": { level: "experimental" },
  "ikea-cocreation": { level: "experimental" },
  "autonomy-byaf": { level: "meta-analysis" },
  "narrative-transport": { level: "experimental" },
  feedforward: { level: "practitioner" },
  "challenger-reframe": { level: "observational", note: "Based on consultancy research, not peer-reviewed." },
  "jolt-indecision": { level: "observational", note: "Based on a vendor's analysis of sales calls, not peer-reviewed." },
  "rethinking-cycle": { level: "practitioner", note: "A popular synthesis of research rather than a single tested model." },
  // Operations: Negotiation
  "interests-positions": { level: "practitioner" },
  batna: { level: "practitioner" },
  anchoring: { level: "experimental" },
  "loss-framing": { level: "meta-analysis", note: "A 2024 meta-analysis of 607 estimates puts the loss-aversion ratio near 2 (Brown et al.); a 2025 re-analysis argues the effect is less robust than that headline suggests." },
  "no-oriented": { level: "practitioner" },
  ackerman: { level: "practitioner" },
  "fairness-lever": { level: "experimental" },
  "reciprocal-concessions": { level: "meta-analysis", note: "Reliably increases verbal agreement, but not actual behavior (Feeley, Anker & Aloe, 2012)." },
  mesos: { level: "experimental" },
  "contingency-contracts": { level: "practitioner" },
  "first-offer-perspective": { level: "experimental" },
  "golden-bridge": { level: "practitioner" },
  "negotiation-backlash": { level: "experimental", note: "The related claim that women negotiate as assertively when advocating for others failed a close replication and is excluded." },
  // Operations: Psychology
  "two-routes": { level: "experimental" },
  reciprocity: { level: "experimental" },
  "commitment-consistency": { level: "meta-analysis", note: "The foot-in-the-door effect is real but small (r = .17; Burger, 1999)." },
  "social-proof": { level: "experimental", note: "The hotel-towel finding only partly replicated (Bohner & Schlüter, 2014)." },
  authority: { level: "experimental" },
  scarcity: { level: "experimental" },
  "peak-end": { level: "experimental" },
  "franklin-effect": { level: "experimental", note: "Rests on a small 1969 study with limited replication." },
  "curse-of-knowledge": { level: "experimental" },
  pygmalion: { level: "experimental", note: "Classroom expectation effects are real but small (d of roughly 0.1 to 0.3; Jussim & Harber, 2005)." },
  "mere-exposure": { level: "meta-analysis", note: "A meta-analysis of 208 effects (Bornstein, 1989) found a reliable effect that weakens with overexposure." },
  unity: { level: "practitioner" },
  "emotional-intelligence": { level: "meta-analysis", note: "Effects on job performance are modest and strongest in emotionally demanding roles (Joseph & Newman, 2010)." },
  // Mastery: Conflict & Repair
  "safety-first": { level: "practitioner" },
  contrasting: { level: "practitioner" },
  "three-conversations": { level: "practitioner" },
  "contribution-not-blame": { level: "practitioner" },
  nvc: { level: "practitioner", note: "Widely used, with limited formal testing." },
  "repair-attempts": { level: "observational" },
  "four-horsemen": { level: "observational" },
  // Mastery: Presence & Nonverbal
  microexpressions: { level: "meta-analysis", note: "The evidence sets limits: people detect lies at 54 percent, barely above chance (Bond & DePaulo, 2006)." },
  "charisma-ppw": { level: "practitioner" },
  "vocal-tonality": { level: "experimental" },
  "mehrabian-scoped": { level: "experimental", note: "Valid only for conflicting messages about feelings." },
  "chameleon-effect": { level: "experimental", note: "Later replications of mimicry effects are mixed." },
  "charisma-styles": { level: "practitioner" },
  "internal-state": { level: "practitioner" },
  // Mastery: Storytelling
  "success-model": { level: "practitioner" },
  sparkline: { level: "practitioner" },
  "ethos-pathos-logos": { level: "classical" },
  "ted-lasso-effect": { level: "practitioner" },
  "and-but-therefore": { level: "practitioner" },
  // Mastery: Presenting
  "five-openers": { level: "practitioner" },
  "ted-methods": { level: "practitioner" },
  "rhetorical-devices": { level: "observational" },
  "cycle-fence-punctuate": { level: "practitioner" },
  "glance-test": { level: "experimental", note: "The three-second rule is a heuristic; the experiments concern redundant on-screen text." },
  "end-on-contributions": { level: "practitioner" },
  "get-excited-not-calm": { level: "experimental", note: "From one author's studies with mostly student samples." },
  "praise-the-deed": { level: "classical" },
  // Mastery: Speaking & Writing
  "pyramid-principle": { level: "practitioner" },
  "what-so-what-now-what": { level: "practitioner" },
  "buffer-answer-topspin": { level: "practitioner" },
  "busy-readers": { level: "experimental" },
  "narrative-memo": { level: "practitioner" },
  // Mastery: Feedback & Leadership
  "radical-candor": { level: "practitioner" },
  "feedback-triggers": { level: "practitioner" },
  "sbi-model": { level: "practitioner" },
  "psych-safety": { level: "meta-analysis" },
  "vulnerability-trust": { level: "observational", note: "Based on qualitative interview research." },
  "start-with-why": { level: "experimental" },
  "progress-principle": { level: "observational", note: "Diary data are correlational." },
  // Mastery: Defense & Counter-Influence
  "cialdini-defenses": { level: "practitioner" },
  "presuasion-awareness": { level: "experimental", note: "Many of the subtle priming studies behind it failed to replicate; direct openers are better supported." },
  gaslighting: { level: "observational" },
  "dark-patterns": { level: "observational" },
  "framing-literacy": { level: "experimental" },
  inoculation: { level: "meta-analysis", note: "A meta-analysis of 54 studies found a medium effect (d = 0.43; Banas & Rains, 2010)." },
  // Command: Power & Status
  "pfeffer-power-rules": { level: "observational" },
  "fragale-status": { level: "experimental" },
  "keltner-paradox": { level: "experimental" },
  "reputation-guard": { level: "practitioner" },
  "status-conferral": { level: "experimental" },
  // Command: Influence Without Authority
  "managing-your-boss": { level: "practitioner" },
  "currencies-of-exchange": { level: "practitioner" },
  "coalition-before-the-meeting": { level: "practitioner" },
  "more-persuasive-than-you-think": { level: "experimental", note: "Replicated across studies involving more than 14,000 requests (Bohns, 2016)." },
  "three-networks": { level: "observational", note: "Based on a qualitative study of 30 managers." },
  // Command: Frame Control & Pitching
  "frame-collision": { level: "practitioner" },
  "luntz-words": { level: "practitioner" },
  "berger-magic-words": { level: "experimental", note: "The best-known study, 'be a voter', failed two large replications." },
  "certainty-language": { level: "experimental" },
  // Command: Conversation Science
  "talk-framework": { level: "experimental" },
  "question-asking": { level: "experimental" },
  "matching-principle": { level: "practitioner" },
  "perspective-getting": { level: "experimental" },
  "magic-question": { level: "practitioner" },
  "deep-talk": { level: "experimental" },
  // Command: Reading & Social Intelligence
  "warmth-competence": { level: "experimental" },
  "ability-benevolence-integrity": { level: "meta-analysis", note: "A meta-analysis of 132 samples supports the model (Colquitt, Scott & LePine, 2007)." },
  "tannen-styles": { level: "observational" },
  "high-low-context": { level: "practitioner", note: "Describes cultural averages, not individuals." },
  // Command: Commanding the Room
  "art-of-gathering": { level: "practitioner" },
  "charismatic-tactics": { level: "experimental" },
  "humble-inquiry": { level: "practitioner" },
  "self-determination": { level: "meta-analysis" },
  "meeting-science": { level: "observational" },
  "amplification-airtime": { level: "experimental", note: "The collective-intelligence 'c factor' is contested; independent replications have failed." },
  premortem: { level: "experimental" },
  "hidden-profile": { level: "meta-analysis" },
  // Principles: Presence & Approach
  "go-first": { level: "experimental" },
  "gift-of-attention": { level: "experimental" },
  "be-the-calm": { level: "experimental" },
  "first-impression-warmth": { level: "experimental" },
  "dress-with-intention": { level: "practitioner", note: "The 'enclothed cognition' study failed a preregistered replication." },
  "arrive-early": { level: "experimental" },
  // Principles: Integrity & Word
  "keep-your-word": { level: "experimental" },
  "own-it-fast": { level: "experimental" },
  "same-in-every-room": { level: "experimental" },
  "guard-confidences": { level: "observational" },
  "do-good-quietly": { level: "experimental" },
  // Principles: Grace Under Fire
  "accept-no-with-grace": { level: "experimental" },
  "gap-before-response": { level: "practitioner", note: "'Amygdala hijack' is a popular metaphor, not a precise neuroscience finding." },
  magnanimous: { level: "practitioner" },
  "refuse-to-complain": { level: "experimental" },
  "forgive-and-release": { level: "meta-analysis" },
  // Principles: Generosity & Regard
  "make-people-feel-important": { level: "observational" },
  "remember-what-matters": { level: "practitioner" },
  "credit-and-blame": { level: "observational", note: "Collins's research studied successful companies after the fact, which risks survivorship bias." },
  "waiter-test": { level: "practitioner" },
  "give-without-score": { level: "observational" },
  "specific-gratitude": { level: "experimental" },
  "connect-people": { level: "observational" },
  // Principles: Self-Mastery & Standards
  "promises-to-yourself": { level: "practitioner" },
  "one-hard-thing": { level: "practitioner", note: "Grit's link to performance is modest and overlaps heavily with conscientiousness (Credé et al., 2017)." },
  "non-negotiable-standards": { level: "experimental" },
  "grow-the-ego-down": { level: "experimental", note: "Growth-mindset interventions show very small average effects (Sisk et al., 2018)." },
  "govern-your-state": { level: "practitioner" },
  "code-not-mood": { level: "meta-analysis" },
  "guard-the-body": { level: "meta-analysis" },
  "feed-the-mind": { level: "observational" },
};

export const evidenceFor = (id: string): Evidence | undefined => evidence[id];
