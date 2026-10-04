// Primary references behind each principle, keyed by principle id.
// Only sources that have been checked are listed; principles without an entry
// have not been referenced yet, which is different from having no sources.

export interface Reference {
  citation: string;
  url?: string;
}

export const references: Record<string, Reference[]> = {
  "curiosity-gap": [
    { citation: "Loewenstein, G. (1994). The psychology of curiosity: A review and reinterpretation. Psychological Bulletin, 116(1).", url: "https://www.cmu.edu/dietrich/sds/docs/loewenstein/PsychofCuriosity.pdf" },
  ],
  "motivational-interviewing": [
    { citation: "Lundahl, B. et al. (2010). A meta-analysis of motivational interviewing: Twenty-five years of empirical studies. Research on Social Work Practice.", url: "https://eric.ed.gov/?id=EJ875284" },
  ],
  "liking-similarity": [
    { citation: "Montoya, R. M., Horton, R. S. & Kirchner, J. (2008). Is actual similarity necessary for attraction? A meta-analysis of actual and perceived similarity. Journal of Social and Personal Relationships, 25.", url: "https://www.semanticscholar.org/paper/Is-actual-similarity-necessary-for-attraction-A-of-Montoya-Horton/b7bbe74b56ee993e75a5ed2ecdf09d8879de0056" },
  ],
  "narrative-transport": [
    { citation: "Green, M. C. & Brock, T. C. (2000). The role of transportation in the persuasiveness of public narratives. Journal of Personality and Social Psychology, 79(5).", url: "https://pubmed.ncbi.nlm.nih.gov/11079236/" },
  ],
  "loss-framing": [
    { citation: "Brown, A. L., Imai, T., Vieider, F. M. & Camerer, C. F. (2024). Meta-analysis of empirical estimates of loss aversion. Journal of Economic Literature, 62(2).", url: "https://www.aeaweb.org/articles?id=10.1257%2Fjel.20221698" },
  ],
  "reciprocal-concessions": [
    { citation: "Feeley, T., Anker, A. E. & Aloe, A. M. (2012). The door-in-the-face persuasive message strategy: A meta-analysis of the first 35 years. Communication Monographs, 79(3).", url: "https://www.researchgate.net/publication/263263459_The_Door-in-the-Face_Persuasive_Message_Strategy_A_Meta-Analysis_of_the_First_35_Years" },
  ],
  "golden-bridge": [
    { citation: "Ury, W. (1991). Getting Past No: Negotiating in Difficult Situations. Bantam.", url: "https://penguinrandomhousehighereducation.com/book/?isbn=9780553371314" },
  ],
  "negotiation-backlash": [
    { citation: "Bowles, H. R., Babcock, L. & Lai, L. (2007). Social incentives for gender differences in the propensity to initiate negotiations: Sometimes it does hurt to ask. Organizational Behavior and Human Decision Processes, 103.", url: "https://www.sciencedirect.com/science/article/abs/pii/S0749597806000884" },
    { citation: "Bowles, H. R. & Babcock, L. (2013). How can women escape the compensation negotiation dilemma? Relational accounts are one answer. Psychology of Women Quarterly.", url: "https://journals.sagepub.com/doi/10.1177/0361684312455524" },
  ],
  "two-routes": [
    { citation: "Petty, R. E. & Cacioppo, J. T. (1986). The elaboration likelihood model of persuasion. Advances in Experimental Social Psychology, 19.", url: "https://richardepetty.com/wp-content/uploads/2019/01/1986-advances-pettycacioppo.pdf" },
  ],
  "social-proof": [
    { citation: "Bohner, G. & Schlüter, L. E. (2014). A room with a viewpoint revisited: Descriptive norms and hotel guests' towel reuse behavior. PLOS ONE.", url: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0104086" },
  ],
  pygmalion: [
    { citation: "Jussim, L. & Harber, K. D. (2005). Teacher expectations and self-fulfilling prophecies: Knowns and unknowns, resolved and unresolved controversies. Personality and Social Psychology Review, 9(2)." },
  ],
  "emotional-intelligence": [
    { citation: "Joseph, D. L. & Newman, D. A. (2010). Emotional intelligence: An integrative meta-analysis and cascading model. Journal of Applied Psychology, 95.", url: "https://experts.illinois.edu/en/publications/emotional-intelligence-an-integrative-meta-analysis-and-cascading/" },
  ],
  microexpressions: [
    { citation: "Bond, C. F. & DePaulo, B. M. (2006). Accuracy of deception judgments. Personality and Social Psychology Review, 10(3).", url: "https://journals.sagepub.com/doi/10.1207/s15327957pspr1003_2" },
    { citation: "Barrett, L. F. et al. (2019). Emotional expressions reconsidered: Challenges to inferring emotion from human facial movements. Psychological Science in the Public Interest.", url: "https://journals.sagepub.com/doi/10.1177/1529100619832930" },
  ],
  "ethos-pathos-logos": [
    { citation: "Aristotle. Rhetoric, Book I (trans. W. Rhys Roberts).", url: "https://classics.mit.edu/Aristotle/rhetoric.1.i.html" },
  ],
  "ted-lasso-effect": [
    { citation: "Jenkins, S. (2026). How to Tell Stories Better Than 99% of People [video].", url: "https://www.youtube.com/watch?v=lghSjBl9yGM" },
    { citation: "Fiske, S. T., Cuddy, A. J. C. & Glick, P. (2007). Universal dimensions of social cognition: Warmth and competence. Trends in Cognitive Sciences, 11(2).", url: "https://www.sciencedirect.com/science/article/abs/pii/S1364661306003299" },
  ],
  "and-but-therefore": [
    { citation: "Olson, R. (2015). Houston, We Have a Narrative: Why Science Needs Story. University of Chicago Press.", url: "https://ncse.ngo/and-therefore-randy-olson-and-art-science-storytelling-part-1" },
  ],
  "five-openers": [
    { citation: "Humm, P. (2026). How to Start a Speech That Makes People Whisper 'Damn, that's good.' [video].", url: "https://www.youtube.com/watch?v=9HJ0AHfx7BE" },
  ],
  "ted-methods": [
    { citation: "Wilson, K. & Korn, J. H. (2007). Attention during lectures: Beyond ten minutes. Teaching of Psychology, 34.", url: "https://journals.sagepub.com/doi/10.1080/00986280701291291" },
  ],
  "rhetorical-devices": [
    { citation: "Churchill, W. (1940). Blood, toil, tears and sweat. Speech to the House of Commons, 13 May 1940.", url: "https://winstonchurchill.org/resources/speeches/1940-the-finest-hour/blood-toil-tears-sweat/" },
  ],
  "cycle-fence-punctuate": [
    { citation: "Winston, P. (2018). How to Speak. MIT OpenCourseWare.", url: "https://ocw.mit.edu/courses/res-tll-005-how-to-speak-january-iap-2018/" },
  ],
  "glance-test": [
    { citation: "Duarte, N. (2012). Do your slides pass the glance test? Harvard Business Review.", url: "https://hbr.org/2012/10/do-your-slides-pass-the-glance-test" },
  ],
  "end-on-contributions": [
    { citation: "Winston, P. (2018). How to Speak. MIT OpenCourseWare.", url: "https://ocw.mit.edu/courses/res-tll-005-how-to-speak-january-iap-2018/" },
  ],
  "get-excited-not-calm": [
    { citation: "Brooks, A. W. (2014). Get excited: Reappraising pre-performance anxiety as excitement. Journal of Experimental Psychology: General, 143(3).", url: "https://www.apa.org/pubs/journals/releases/xge-a0035325.pdf" },
  ],
  "praise-the-deed": [
    { citation: "Aristotle. Rhetoric, Book I.9 (trans. W. Rhys Roberts).", url: "https://classics.mit.edu/Aristotle/rhetoric.mb.txt" },
    { citation: "Toastmasters International. Delivering eulogies.", url: "https://www.toastmasters.org/resources/public-speaking-tips/delivering-eulogies" },
  ],
  "what-so-what-now-what": [
    { citation: "Abrahams, M. One communication tool you should add to your toolkit. Stanford Graduate School of Business.", url: "https://www.gsb.stanford.edu/insights/one-communication-tool-you-should-add-your-toolkit" },
  ],
  "buffer-answer-topspin": [
    { citation: "Weissman, J. In the Line of Fire: How to Handle Tough Questions When It Counts. Pearson.", url: "https://www.oreilly.com/library/view/in-the-line/9780136933335/" },
  ],
  "busy-readers": [
    { citation: "Rogers, T. & Lasky-Fink, J. (2023). Writing for Busy Readers. Dutton.", url: "https://www.penguinrandomhouse.com/books/706548/writing-for-busy-readers-by-todd-rogers-and-jessica-lasky-fink/" },
  ],
  "narrative-memo": [
    { citation: "Bezos, J. (2018). 2017 Letter to Shareholders. Amazon.", url: "https://www.aboutamazon.com/news/company-news/2017-letter-to-shareholders" },
  ],
  "psych-safety": [
    { citation: "Frazier, M. L. et al. (2017). Psychological safety: A meta-analytic review and extension. Personnel Psychology, 70(1).", url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/peps.12183" },
  ],
  "start-with-why": [
    { citation: "Grant, A. M. et al. (2007). Impact and the art of motivation maintenance: The effects of contact with beneficiaries on persistence behavior. Organizational Behavior and Human Decision Processes.", url: "https://faculty.wharton.upenn.edu/wp-content/uploads/2012/05/GrantCampbellChenCottoneLapedisLee_ImpactAndArt.pdf" },
    { citation: "Grant, A. M. & Hofmann, D. A. (2011). It's not all about me: Motivating hand hygiene among health care professionals by focusing on patients. Psychological Science, 22(12).", url: "https://journals.sagepub.com/doi/abs/10.1177/0956797611419172" },
  ],
  "progress-principle": [
    { citation: "Amabile, T. & Kramer, S. (2011). The Progress Principle. Harvard Business Review Press.", url: "https://www.library.hbs.edu/working-knowledge/how-small-wins-unleash-creativity" },
  ],
  inoculation: [
    { citation: "Banas, J. A. & Rains, S. A. (2010). A meta-analysis of research on inoculation theory.", url: "https://experts.arizona.edu/en/publications/a-meta-analysis-of-research-on-inoculation-theory/" },
  ],
  "managing-your-boss": [
    { citation: "Gabarro, J. J. & Kotter, J. P. (1980). Managing your boss. Harvard Business Review.", url: "https://hbr.org/2005/01/managing-your-boss" },
  ],
  "currencies-of-exchange": [
    { citation: "Cohen, A. R. & Bradford, D. L. Influence Without Authority. Wiley.", url: "https://www.oreilly.com/library/view/influence-without-authority/9780471463306/ch03.html" },
  ],
  "coalition-before-the-meeting": [
    { citation: "Lax, D. A. & Sebenius, J. K. (2003). 3-D negotiation: Playing the whole game. Harvard Business Review.", url: "https://hbr.org/2003/11/3-d-negotiation-playing-the-whole-game" },
  ],
  "more-persuasive-than-you-think": [
    { citation: "Flynn, F. J. & Lake, V. K. B. (2008). If you need help, just ask: Underestimating compliance with direct requests for help. Journal of Personality and Social Psychology, 95(1).", url: "https://www.gsb.stanford.edu/faculty-research/publications/if-you-need-help-just-ask-underestimating-compliance-direct-requests" },
    { citation: "Bohns, V. K. (2016). (Mis)understanding our influence over others: A review of the underestimation-of-compliance effect. Current Directions in Psychological Science.", url: "https://journals.sagepub.com/doi/abs/10.1177/0963721415628011" },
  ],
  "three-networks": [
    { citation: "Ibarra, H. & Hunter, M. L. (2007). How leaders create and use networks. Harvard Business Review.", url: "https://hbr.org/2007/01/how-leaders-create-and-use-networks" },
  ],
  "berger-magic-words": [
    { citation: "Gerber, A. S. et al. Voting behavior is unaffected by subtle linguistic cues: Evidence from a psychologically authentic replication. Behavioural Public Policy.", url: "https://www.cambridge.org/core/journals/behavioural-public-policy/article/abs/voting-behavior-is-unaffected-by-subtle-linguistic-cues-evidence-from-a-psychologically-authentic-replication/7CA9BE69C3213D5030A2BD11A5C53450" },
  ],
  "warmth-competence": [
    { citation: "Fiske, S. T., Cuddy, A. J. C. & Glick, P. (2007). Universal dimensions of social cognition: Warmth and competence. Trends in Cognitive Sciences, 11(2).", url: "https://www.sciencedirect.com/science/article/abs/pii/S1364661306003299" },
  ],
  "ability-benevolence-integrity": [
    { citation: "Mayer, R. C., Davis, J. H. & Schoorman, F. D. (1995). An integrative model of organizational trust. Academy of Management Review, 20.", url: "https://www.jstor.org/stable/258792" },
    { citation: "Frei, F. X. & Morriss, A. (2020). Begin with trust. Harvard Business Review.", url: "https://hbr.org/2020/05/begin-with-trust" },
    { citation: "Colquitt, J. A., Scott, B. A. & LePine, J. A. (2007). Trust, trustworthiness, and trust propensity: A meta-analytic test. Journal of Applied Psychology, 92.", url: "https://ui.adsabs.harvard.edu/abs/2007JApPs..92..909C/abstract" },
  ],
  "high-low-context": [
    { citation: "Meyer, E. (2014). The Culture Map. PublicAffairs.", url: "https://erinmeyer.com/books/the-culture-map/" },
  ],
  "self-determination": [
    { citation: "Van den Broeck, A. et al. (2016). A review of self-determination theory's basic psychological needs at work. Journal of Management, 42.", url: "https://pure.psu.edu/en/publications/a-review-of-self-determination-theorys-basic-psychological-needs-/" },
  ],
  "amplification-airtime": [
    { citation: "Woolley, A. W. et al. (2010). Evidence for a collective intelligence factor in the performance of human groups. Science.", url: "https://pubmed.ncbi.nlm.nih.gov/20929725/" },
    { citation: "g versus c: comparing individual and collective intelligence across two meta-analyses (2021). Cognitive Research: Principles and Implications.", url: "https://link.springer.com/article/10.1186/s41235-021-00285-2" },
  ],
  premortem: [
    { citation: "Klein, G. (2007). Performing a project premortem. Harvard Business Review.", url: "https://hbr.org/product/performing-a-project-premortem/F0709A-PDF-ENG" },
    { citation: "Veinott, B., Klein, G. & Wiggins, S. (2010). Evaluating the effectiveness of the PreMortem technique on plan confidence. ISCRAM.", url: "https://idl.iscram.org/files/veinott/2010/1049_Veinott_etal2010.pdf" },
  ],
  "hidden-profile": [
    { citation: "Lu, L., Yuan, Y. C. & McLeod, P. L. (2012). Twenty-five years of hidden profiles in group decision making: A meta-analysis. Personality and Social Psychology Review, 16(1).", url: "https://doi.org/10.1177/1088868311417243" },
  ],
  "dress-with-intention": [
    { citation: "Burns, D. M. et al. (2019). An old task in new clothes: A preregistered direct replication attempt of enclothed cognition effects on Stroop performance. Journal of Experimental Social Psychology.", url: "https://www.sciencedirect.com/science/article/abs/pii/S0022103118303664" },
  ],
  "forgive-and-release": [
    { citation: "Wade, N. G., Hoyt, W. T., Kidwell, J. E. M. & Worthington, E. L. (2014). Efficacy of psychotherapeutic interventions to promote forgiveness: A meta-analysis. Journal of Consulting and Clinical Psychology.", url: "https://www.researchgate.net/publication/259454682_Efficacy_of_Psychotherapeutic_Interventions_to_Promote_Forgiveness_A_Meta-Analysis" },
  ],
  "one-hard-thing": [
    { citation: "Credé, M., Tynan, M. C. & Harms, P. D. (2017). Much ado about grit: A meta-analytic synthesis of the grit literature. Journal of Personality and Social Psychology, 113.", url: "https://pubmed.ncbi.nlm.nih.gov/27845531/" },
  ],
  "grow-the-ego-down": [
    { citation: "Sisk, V. F. et al. (2018). To what extent and under which circumstances are growth mind-sets important to academic achievement? Two meta-analyses. Psychological Science, 29.", url: "https://www.semanticscholar.org/paper/To-What-Extent-and-Under-Which-Circumstances-Are-to-Sisk-Burgoyne/ee2e51b22572bb6f29021c8bbd12674137bcb6b2" },
  ],
  "code-not-mood": [
    { citation: "A-Tjak, J. G. L. et al. (2015). A meta-analysis of the efficacy of acceptance and commitment therapy for clinically relevant mental and physical health problems. Psychotherapy and Psychosomatics, 84(1).", url: "https://www.researchgate.net/publication/266139846_A_Meta-Analysis_of_the_Efficacy_of_Acceptance_and_Commitment_Therapy_for_Clinically_Relevant_Mental_and_Physical_Health_Problems" },
  ],
  "guard-the-body": [
    { citation: "Chang, Y. K. et al. (2012). The effects of acute exercise on cognitive performance: A meta-analysis.", url: "https://www.semanticscholar.org/paper/The-effects-of-acute-exercise-on-cognitive-A-Chang-Labban/726cba1d5acce93f799ae977c79979046bfc7779" },
    { citation: "(2021). The effect of sleep deprivation and restriction on mood, emotion, and emotion regulation: Three meta-analyses in one. Sleep, 44(6).", url: "https://pubmed.ncbi.nlm.nih.gov/33367799/" },
  ],
};

export const referencesFor = (id: string): Reference[] => references[id] ?? [];
