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
  "test-and-learn-career": [
    { citation: "Ibarra, H. Working Identity: Unconventional Strategies for Reinventing Your Career. Harvard Business Review Press.", url: "https://herminiaibarra.com/working-identity-book/" },
  ],
  "job-crafting": [
    { citation: "Wrzesniewski, A. & Dutton, J. E. (2001). Crafting a job: Revisioning employees as active crafters of their work. Academy of Management Review, 26(2).", url: "https://www.researchgate.net/publication/211396297_Crafting_a_Job_Revisioning_Employees_as_Active_Crafters_of_Their_Work" },
    { citation: "Rudolph, C. W., Katz, I. M., Lavigne, K. N. & Zacher, H. (2017). Job crafting: A meta-analysis of relationships with individual differences, job characteristics, and work outcomes. Journal of Vocational Behavior, 102.", url: "https://www.researchgate.net/publication/317128663_Job_Crafting_A_Meta-Analysis_of_Relationships_with_Individual_Differences_Job_Characteristics_and_Work_Outcomes" },
  ],
  "moderately-weak-ties": [
    { citation: "Rajkumar, K., Saint-Jacques, G., Bojinov, I., Brynjolfsson, E. & Aral, S. (2022). A causal test of the strength of weak ties. Science.", url: "https://www.semanticscholar.org/paper/A-causal-test-of-the-strength-of-weak-ties-Rajkumar-Saint-Jacques/63b9342bb178f12be3d7ece657e6a9c5324e040f" },
  ],
  "lean-toward-change": [
    { citation: "Levitt, S. D. (2021). Heads or tails: The impact of a coin toss on major life decisions and subsequent happiness. Review of Economic Studies, 88(1).", url: "https://www.nber.org/papers/w22487" },
  ],
  "never-whether-or-not": [
    { citation: "Nutt, P. C. Why Decisions Fail. Berrett-Koehler.", url: "https://news.osu.edu/half-of-business-decisions-fail-because-of-managements-blunders-new-study-finds/" },
    { citation: "Heath, C. & Heath, D. (2013). Decisive: How to Make Better Choices in Life and Work. Crown.", url: "https://readingraphics.com/book-summary-decisive/" },
  ],
  "outside-view": [
    { citation: "Flyvbjerg, B. From Nobel Prize to project management: Getting risks right. Project Management Institute.", url: "https://www.pmi.org/learning/library/nobel-project-management-reference-class-forecasting-8068" },
    { citation: "Kahneman, D. (2007). A short course in thinking about thinking. Edge Master Class.", url: "https://www.edge.org/event/edge-master-class-2007-daniel-kahneman-a-short-course-in-thinking-about-thinking" },
  ],
  "prepare-to-be-wrong": [
    { citation: "Heath, C. & Heath, D. (2013). Decisive: How to Make Better Choices in Life and Work. Crown.", url: "https://readingraphics.com/book-summary-decisive/" },
  ],
  "public-narrative": [
    { citation: "Ganz, M. What is public narrative: Self, us and now. Leading Change Network working paper.", url: "https://leadingchangenetwork.org/resource_center/what-is-public-narrative-self-us-and-now-public-narrative-worksheet-working-paper/" },
    { citation: "Harvard Kennedy School. Public Narrative: Leadership, Storytelling, and Action.", url: "https://www.hks.harvard.edu/educational-programs/executive-education/public-narrative-leadership-storytelling-and-action" },
  ],
  "storytelling-with-data": [
    { citation: "Knaflic, C. N. (2015). Storytelling with Data: A Data Visualization Guide for Business Professionals. Wiley.", url: "https://www.storytellingwithdata.com/books" },
  ],
  "characters-and-actions": [
    { citation: "Williams, J. M. & Bizup, J. Style: Lessons in Clarity and Grace. Pearson.", url: "https://goodreads.com/book/show/6966800.Style_Lessons_in_Clarity_and_Grace" },
  ],
  "jobs-to-be-done": [
    { citation: "Christensen, C. M., Hall, T., Dillon, K. & Duncan, D. S. (2016). Competing Against Luck. Harper Business.", url: "https://www.goodreads.com/book/show/28820024-competing-against-luck" },
  ],
  "deep-canvassing": [
    { citation: "Broockman, D. & Kalla, J. (2016). Durably reducing transphobia: A field experiment on door-to-door canvassing. Science, 352(6282).", url: "https://www.science.org/doi/10.1126/science.aad9713" },
  ],
  "objective-criteria": [
    { citation: "Fisher, R., Ury, W. & Patton, B. Getting to Yes: Negotiating Agreement Without Giving In. Penguin.", url: "https://www.beyondintractability.org/bksum/fisher-getting" },
  ],
  "moral-reframing": [
    { citation: "Feinberg, M. & Willer, R. (2015). From gulf to bridge: When do moral arguments facilitate political influence? Personality and Social Psychology Bulletin, 41(12).", url: "https://www.semanticscholar.org/paper/From-Gulf-to-Bridge-Feinberg-Willer/613dc1e41bd748cd574c05b8d52ce590d93b63b4" },
    { citation: "Feinberg, M. & Willer, R. (2019). Moral reframing: A technique for effective and persuasive communication across political divides. Social and Personality Psychology Compass, 13.", url: "https://compass.onlinelibrary.wiley.com/doi/abs/10.1111/spc3.12501" },
  ],
  "fundamental-attribution-error": [
    { citation: "Gilbert, D. T. & Malone, P. S. (1995). The correspondence bias. Psychological Bulletin.", url: "https://scholar.harvard.edu/files/danielgilbert/files/gilbert__malone_correspondence_bias.pdf" },
    { citation: "Morris, M. W. & Peng, K. (1994). Culture and cause: American and Chinese attributions for social and physical events. Journal of Personality and Social Psychology.", url: "https://culcog.studentorg.berkeley.edu/Publications/1994JPSP_MorrisPeng.pdf" },
  ],
  "coaching-habit": [
    { citation: "Bungay Stanier, M. (2016). The Coaching Habit: Say Less, Ask More and Change the Way You Lead Forever. Box of Crayons Press.", url: "https://news.stthomas.edu/seven-questions-that-will-change-the-way-you-lead/" },
  ],
  "one-on-ones": [
    { citation: "Rogelberg, S. G. (2024). Glad We Met: The Art and Science of 1:1 Meetings. Oxford University Press.", url: "https://fisher.osu.edu/blogs/leadreadtoday/glad-we-met-art-and-science-11-meetings" },
  ],
  "superforecasting": [
    { citation: "Mellers, B. et al. (2014). Psychological strategies for winning a geopolitical forecasting tournament. Psychological Science, 25(5).", url: "https://www.sas.upenn.edu/tetlock/publications" },
    { citation: "AI Impacts. Evidence on good forecasting practices from the Good Judgment Project.", url: "https://aiimpacts.org/evidence-on-good-forecasting-practices-from-the-good-judgment-project/" },
  ],
  "decision-hygiene": [
    { citation: "Kahneman, D., Sibony, O. & Sunstein, C. R. (2021). Noise: A Flaw in Human Judgment. Little, Brown Spark.", url: "https://en.wikipedia.org/wiki/Noise:_A_Flaw_in_Human_Judgment" },
  ],
  "outcome-bias": [
    { citation: "Baron, J. & Hershey, J. C. (1988). Outcome bias in decision evaluation. Journal of Personality and Social Psychology, 54(4).", url: "https://www.sas.upenn.edu/~baron/papers/outcomebias.pdf" },
    { citation: "Outcomes affect evaluations of decision quality: Replication and extensions of Baron and Hershey's (1988) outcome bias experiment 1.", url: "https://pubmed.ncbi.nlm.nih.gov/40951810/" },
  ],
  "intuitive-expertise": [
    { citation: "Kahneman, D. & Klein, G. (2009). Conditions for intuitive expertise: A failure to disagree. American Psychologist, 64(6).", url: "https://www.semanticscholar.org/paper/Conditions-for-intuitive-expertise:-a-failure-to-Kahneman-Klein/f1a5fb0c4b9703b3213bc3bd2dfe1f79ee35d511" },
  ],
  "surrogation": [
    { citation: "Gilbert, D. T., Killingsworth, M. A., Eyre, R. N. & Wilson, T. D. (2009). The surprising power of neighborly advice. Science, 323(5921).", url: "https://www.science.org/doi/10.1126/science.1166632" },
  ],
  "strategy-kernel": [
    { citation: "Rumelt, R. P. (2011). Good Strategy/Bad Strategy: The Difference and Why It Matters. Crown Business.", url: "https://www.amazon.com/Good-Strategy-Bad-Difference-Matters/dp/0307886239" },
  ],
  "develop-passion": [
    { citation: "O'Keefe, P. A., Dweck, C. S. & Walton, G. M. (2018). Implicit theories of interest: Finding your passion or developing it? Psychological Science.", url: "https://journals.sagepub.com/doi/abs/10.1177/0956797618780643" },
  ],
  "first-90-days": [
    { citation: "Watkins, M. D. The First 90 Days: Proven Strategies for Getting Up to Speed Faster and Smarter. Harvard Business Review Press.", url: "https://readingraphics.com/book-summary-the-first-90-days/" },
  ],
  "deliberate-practice": [
    { citation: "Macnamara, B. N., Hambrick, D. Z. & Oswald, F. L. (2014). Deliberate practice and performance in music, games, sports, education, and professions: A meta-analysis. Psychological Science.", url: "https://scottbarrykaufman.com/wp-content/uploads/2014/07/Macnamara-et-al.-2014.pdf" },
  ],
  "retrieval-spacing": [
    { citation: "Dunlosky, J. et al. (2013). Improving students' learning with effective learning techniques. Psychological Science in the Public Interest, 14(1).", url: "https://journals.sagepub.com/doi/abs/10.1177/1529100612453266" },
    { citation: "Roediger, H. L. & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3).", url: "https://www.researchgate.net/publication/7270829_Test-Enhanced_Learning_Taking_Memory_Tests_Improves_Long-Term_Retention" },
    { citation: "Cepeda, N. J. et al. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. Psychological Bulletin.", url: "https://augmentingcognition.com/assets/Cepeda2006.pdf" },
  ],
  "implementation-intentions": [
    { citation: "Gollwitzer, P. M. & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis of effects and processes. Advances in Experimental Social Psychology, 38.", url: "https://www.socmot.uni-konstanz.de/publications/implementation-intentions-and-goal-achievement-meta-analysis-effects-and-processes" },
  ],
  "attention-residue": [
    { citation: "Leroy, S. (2009). Why is it so hard to do my work? The challenge of attention residue when switching between work tasks. Organizational Behavior and Human Decision Processes, 109(2).", url: "https://www.semanticscholar.org/paper/Why-is-it-so-hard-to-do-my-work-The-challenge-of-Leroy/58a602c378da63993ab19b514e1bd57817bc18e5" },
  ],
  "checklists": [
    { citation: "Haynes, A. B. et al. (2009). A surgical safety checklist to reduce morbidity and mortality in a global population. New England Journal of Medicine, 360.", url: "https://news.harvard.edu/gazette/story/2009/01/surgical-safety-checklist-drops-deaths-and-complications-by-more-than-one-third/" },
  ],
  "five-forces": [
    { citation: "Porter, M. E. (2008). The five competitive forces that shape strategy. Harvard Business Review, 86(1).", url: "https://hbr.org/2008/01/the-five-competitive-forces-that-shape-strategy" },
    { citation: "McGahan, A. M. & Porter, M. E. (1997). How much does industry matter, really? Strategic Management Journal, 18(S1)." },
  ],
  "strategic-tradeoffs": [
    { citation: "Porter, M. E. (1996). What is strategy? Harvard Business Review, 74(6).", url: "https://hbr.org/1996/11/what-is-strategy" },
  ],
  "disruptive-innovation": [
    { citation: "King, A. A. & Baatartogtokh, B. (2015). How useful is the theory of disruptive innovation? MIT Sloan Management Review, 57(1).", url: "https://sloanreview.mit.edu/article/how-useful-is-the-theory-of-disruptive-innovation/" },
    { citation: "Lepore, J. (2014). The disruption machine. The New Yorker, 23 June.", url: "https://www.newyorker.com/magazine/2014/06/23/the-disruption-machine" },
  ],
  "scientific-entrepreneurship": [
    { citation: "Camuffo, A., Cordova, A., Gambardella, A. & Spina, C. (2020). A scientific approach to entrepreneurial decision making: Evidence from a randomized control trial. Management Science, 66(2).", url: "https://pubsonline.informs.org/doi/10.1287/mnsc.2018.3249" },
  ],
  "ambidexterity": [
    { citation: "O'Reilly, C. A. & Tushman, M. L. (2004). The ambidextrous organization. Harvard Business Review, 82(4).", url: "https://hbr.org/2004/04/the-ambidextrous-organization" },
    { citation: "March, J. G. (1991). Exploration and exploitation in organizational learning. Organization Science, 2(1).", url: "https://pubsonline.informs.org/doi/10.1287/orsc.2.1.71" },
  ],
  "okrs-goal-setting": [
    { citation: "Locke, E. A. & Latham, G. P. (2002). Building a practically useful theory of goal setting and task motivation: A 35-year odyssey. American Psychologist, 57(9).", url: "https://doi.org/10.1037/0003-066X.57.9.705" },
  ],
  "leverage-points": [
    { citation: "Meadows, D. (1999). Leverage points: Places to intervene in a system. The Sustainability Institute.", url: "https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/" },
  ],
};

export const referencesFor = (id: string): Reference[] => references[id] ?? [];
