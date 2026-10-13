/**
 * GIRLFRIEND CERTIFICATION EXAM.exe — Content & Customization File
 *
 * Relationship Systems Bureau v5.0
 * All questions, choices, system reactions, mini-games, certificate text,
 * and developer letters are organized here for easy personalization.
 *
 * Placeholders are marked with [CUSTOMIZE] or comments for your personal touches.
 */

export const BUREAU_CONFIG = {
  appName: "GIRLFRIEND CERTIFICATION EXAM.exe",
  appSubtitle: "Relationship Systems Bureau — Officially Unofficial Assessment",
  candidateName: "Gwenyy",
  boyfriendName: "Boyfriend (Still Under Review)", // [CUSTOMIZE: Can be changed to your name or nickname]
  version: "v5.0-STABLE-LAMBING-EDITION",
  auditDate: "Month 5",
};

export const BOOT_LOGS = [
  { text: "RELATIONSHIP SYSTEMS BUREAU (R) BIOS v5.0", type: "system", delay: 200 },
  { text: "Initializing Couple Systems Architecture...", type: "system", delay: 350 },
  { text: "Scanning communication channels...", type: "info", delay: 300 },
  { text: "Detecting girlfriend...", type: "info", delay: 400 },
  { text: "Girlfriend detected: GWENYY (Status: Certified Adorable)", type: "success", delay: 450 },
  { text: "Detecting boyfriend...", type: "info", delay: 350 },
  { text: "Boyfriend detected: STILL UNDER REVIEW (Status: Confused)", type: "warn", delay: 450 },
  { text: "Loading relationship memory database...", type: "info", delay: 400 },
  { text: "Analyzing the word \"Okay\" across all chat logs...", type: "warn", delay: 500 },
  { text: "WARNING: Meaning of \"Okay\" could not be determined.", type: "error", delay: 550 },
  { text: "WARNING: Infinite Lambing Loop detected in subsystem.", type: "warn", delay: 450 },
  { text: "All systems questionable. Ready for mandatory audit.", type: "success", delay: 400 },
  { text: "Launching Girlfriend Certification Exam.exe...", type: "system", delay: 500 },
];

export const NOTICE_DATA = {
  title: "NOTICE OF MANDATORY GIRLFRIEND CERTIFICATION",
  refCode: "REF-RSB-M5-00429",
  salutation: "Uy Gwenyy, ikaw na pud? 😭",
  intro:
    "The system has selected you for another highly questionable relationship assessment. Please answer honestly. Although, honestly, even the system doesn't know what it's doing.",
  details: [
    { label: "Candidate", value: "Gwenyy" },
    { label: "Boyfriend", value: "Under Investigation / Questionable" },
    { label: "Examination", value: "Month 5 Relationship Audit" },
    { label: "Classification", value: "Unnecessarily Official" },
    { label: "Warning", value: "Results may contain lambing, nonsense, and suspicious amounts of \"Okay.\"" },
  ],
  buttonText: "START EXAM.exe",
};

export const EXAM_QUESTIONS = [
  {
    id: 1,
    department: "DEPT 01: THE OKAY INCIDENT",
    title: "The Mystery of the Endless \"Okay\"",
    context: {
      type: "dialogue",
      speaker1: "Boyfriend",
      line1: "\"Love ko nimo?\"",
      speaker2: "Gwenyy",
      line2: "\"Dili.\"",
      speaker1_2: "Boyfriend",
      line1_2: "\"Okay.\"",
      speaker2_2: "Gwenyy",
      line2_2: "\"Okay pud.\"",
      speaker1_3: "Boyfriend",
      line1_3: "\"Okay..... okay.... okay....\"",
      systemNote:
        "System note: Both parties have entered the Okay Loop. Lambing levels are exponentially increasing. Neither party is willing to admit it.",
    },
    question: "Unsa man jud meaning sa inyong \"Okay\" ani nga situation? 😭",
    choices: [
      {
        id: "A",
        text: "Okay ra ko. Wala koy problema. Promise.",
        reaction:
          "ANALYSIS COMPLETE: False alarm. Suspect is definitely NOT \"okay ra\". Subsystem detects 99.8% hidden lambing requirement.",
      },
      {
        id: "B",
        text: "Ah, dili diay ko love? Sige, noted. Okay... okay... okay...",
        reaction:
          "PROTOCOL TRIGGERED: Boyfriend has activated the triple-dot Okay... Okay... Okay... defense mechanism. System is currently waiting for someone to apologize first.",
      },
      {
        id: "C",
        text: "Nangita ra kog lambing, nganong gi-seryoso man ninyo akong Okay?",
        reaction:
          "EVIDENCE ACCEPTED: The Bureau confirms no actual argument occurred. Both parties are simply guilty of high-level nagpapalambing.",
      },
      {
        id: "D",
        text: "Padayon lang ta og Okay hangtod naay mo-give in ug mo-sweet balik.",
        reaction:
          "LOOP MONITORED: \"Okay pud\" recorded. Communication status: Technically functioning. Lambing status: Non-stop.",
      },
    ],
  },
  {
    id: 2,
    department: "DEPT 02: THE JEALOUSY DEPARTMENT",
    title: "Investigation into Boyfriend Teasing Capabilities",
    context: {
      type: "report",
      text: "Gwenyy, naa napud tay report diri. Apparently, kabalo kaayo ka mangpa-selos sa imong boyfriend. 😭 Suspect exhibits expert-level teasing routines.",
    },
    question: "Unsa imong official defense, Gwenyy?",
    choices: [
      {
        id: "A",
        text: "Wala ra, trip lang jud nako mangulit.",
        reaction:
          "DEFENSE LOGGED: Suspect has demonstrated advanced teasing capabilities. Reminder: Boyfriend's tear ducts are not covered by warranty. Please use your powers responsibly. 😭",
      },
      {
        id: "B",
        text: "Your Honor, I plead not guilty.",
        reaction:
          "OBJECTION OVERRULED: Court exhibits reveal overwhelming photographic and chat evidence of extreme kulitan.",
      },
      {
        id: "C",
        text: "Ganahan ra ko makakita sa iyang reaction. Cute man usahay.",
        reaction:
          "FINDING: Motivation established as \"Cute man usahay\". Boyfriend's ego temporarily restored by 12%. Suspect granted conditional immunity.",
      },
      {
        id: "D",
        text: "Next question na lang, please. Confidential information na.",
        reaction:
          "CLASSIFIED: File marked as Top Secret. The Bureau notes that hiding the truth only proves how effective the teasing is.",
      },
    ],
  },
  {
    id: 3,
    department: "DEPT 03: THE CHICKEN INCIDENT",
    title: "Scientific Review of Questionable Anatomical Observations",
    context: {
      type: "report",
      text: "Official records indicate that Gwenyy once described her boyfriend's lips when kissing as \"chicken's asshole.\" The Bureau has requested immediate clarification regarding this highly questionable scientific observation.",
    },
    question: "Unsay imong official statement sa imong findings, Gwenyy? 😭",
    choices: [
      {
        id: "A",
        text: "Honest review ra to, Your Honor.",
        reaction:
          "SCIENTIFIC NOTE: No qualified chicken anatomist was available to verify the claim. Boyfriend's formal appeal has been received and immediately filed at the bottom of the queue.",
      },
      {
        id: "B",
        text: "Observation is observation. Dili ko responsible sa results.",
        reaction:
          "PEER REVIEW REJECTED: The research methodology has been deemed ruthless, unprovoked, and completely hilarious.",
      },
      {
        id: "C",
        text: "No comment. My lawyer will contact you.",
        reaction:
          "LEGAL ADVICE: Suspect's legal team has reportedly laughed and advised their client to give the boyfriend another kiss to re-test the hypothesis.",
      },
      {
        id: "D",
        text: "The Department of Unnecessary Boyfriend Humiliation should handle this.",
        reaction:
          "DEPARTMENT DISPATCH: Department of Unnecessary Boyfriend Humiliation has awarded Gwenyy a Certificate of High Precision Roasting.",
      },
    ],
  },
  {
    id: 4,
    department: "DEPT 04: THE MOBILE LEGENDS DEPARTMENT",
    title: "Investigation into Questionable In-Game Decisions",
    context: {
      type: "report",
      text: "Mobile Legends activity detected. The Bureau is investigating the couple's questionable in-game teamwork and sudden battlefield emergencies.",
    },
    question: "Kung naa na sa ML, unsay pinaka-posibleng mahitabo?",
    // [CUSTOMIZE: You can personalize these starter ML habits anytime below!]
    choices: [
      {
        id: "A",
        text: "Someone says, \"Kaya pa ni, comeback pa!\" bisan hapit na mabuak ang base.",
        reaction:
          "TACTICAL AUDIT: Delusional optimism detected. Base HP: 12%. Faith in comeback: 100%. The Bureau respects the fighting spirit.",
      },
      {
        id: "B",
        text: "Someone starts questioning the team's questionable life decisions.",
        reaction:
          "VOICE COMM LOGGED: High-intensity tactical commentary. The Bureau recommends muting the random teammates and blaming the lag.",
      },
      {
        id: "C",
        text: "Someone becomes very confident before the match even starts.",
        reaction:
          "CONFIDENCE METRIC: Maximum swagger recorded during draft pick. Match result: Pending review (Bureau refuses to point fingers).",
      },
      {
        id: "D",
        text: "Both players somehow end up blaming the game and laughing about it.",
        reaction:
          "MATCH ANALYSIS COMPLETE: Victory or defeat, relationship synergy remains operational. The Bureau approves continued queueing together.",
      },
    ],
  },
  {
    id: 5,
    department: "DEPT 05: THE ALBION ONLINE DEPARTMENT",
    title: "Financial Audit of Risky Couple Expeditions",
    context: {
      type: "report",
      text: "Albion Online records detected. The Bureau has opened an inquiry into the couple's dangerous expeditions, loot distributions, and survival strategies.",
    },
    question: "Unsa kaha ang pinaka-risky part sa inyong next adventure?",
    // [CUSTOMIZE: You can personalize these starter Albion choices anytime below!]
    choices: [
      {
        id: "A",
        text: "Planning everything carefully, unya mag-usab ang plano halfway.",
        reaction:
          "EXPEDITION REPORT: Tactical chaos detected. Plan A abandoned. Plan B nonexistent. Yet somehow surviving anyway.",
      },
      {
        id: "B",
        text: "Following the plan until someone in voice chat suddenly says \"Okay.\"",
        reaction:
          "SECURITY BREACH: The word \"Okay\" has breached Albion territory! All guild members instructed to provide emergency lambing.",
      },
      {
        id: "C",
        text: "Going on an adventure together and hoping everything works out.",
        reaction:
          "ADVENTURE LOG: Silver balance: Uncertain. Danger level: High. Couple companionship score: Maximum.",
      },
      {
        id: "D",
        text: "The loot is uncertain, but the experience and kulitan are always worth it.",
        reaction:
          "TREASURE CONFIRMED: The Bureau accepts no responsibility for lost gear or silver, but awards 500 bonus Couple XP points.",
      },
    ],
  },
  {
    id: 6,
    department: "DEPT 06: FINAL COUPLE AUDIT",
    title: "Comprehensive Assessment of Relationship Operating System",
    context: {
      type: "report",
      text: "After synthesizing five months of telemetry, transcripts, and suspicious occurrences, the Bureau requires your final assessment.",
    },
    question: "After reviewing all available evidence, unsa man jud inyong relationship system?",
    choices: [
      {
        id: "A",
        text: "A perfectly organized and professionally managed operation.",
        reaction:
          "SYSTEM VERDICT: Absolutely nobody believes this, but the Bureau admires your administrative audacity.",
      },
      {
        id: "B",
        text: "A system powered by lambing and questionable decisions.",
        reaction:
          "SYSTEM VERDICT: 100% ACCURATE. Powered by high-voltage lambing, unpredictable teasing, and infinite patience.",
      },
      {
        id: "C",
        text: "Two people making things up as they go, but happy together.",
        reaction:
          "SYSTEM VERDICT: Scientific consensus achieved! Improvisation rate: 94%. Mutual affection rate: Off the charts.",
      },
      {
        id: "D",
        text: "A complicated system nga somehow nag-work gihapon every single day.",
        reaction:
          "FINAL ANALYSIS COMPLETE: The Bureau has determined that this relationship operates on a combination of lambing, humor, and unexplained technical behavior. Neither party fully understands the system. Both parties are hereby approved for continued nonsense. 💗",
      },
    ],
  },
];

export const OKAY_MINI_GAME = {
  windowTitle: "Okay.exe — NOT RESPONDING",
  subtitle: "Critical System Alert: Overflow of \"Okay\" detected",
  instruction: "The system has encountered an unexpected amount of Okay. Please click each interpretation to diagnose the error:",
  bubbles: [
    { id: 1, text: "Okay", popup: "Meaning not found. Analyzing tone... Tone unclear." },
    { id: 2, text: "Okay pud", popup: "Suspect responded with \"Okay pud\". The system is now monitoring an endless loop!" },
    { id: 3, text: "Okay...", popup: "Warning: Trailing dots detected. This indicates subtle waiting for lambing." },
    { id: 4, text: "Okay..... okay.... okay....", popup: "Boyfriend protocol triggered! Emotional overload imminent." },
    { id: 5, text: "Okay ra lagi promise 😭", popup: "Error 404: Authenticity not found. Please contact the Department of Lambing for clarification." },
    { id: 6, text: "Sige, Okay.", popup: "The other person is now typing... and typing... and typing..." },
  ],
  resolvedThreshold: 4,
  errorBanner: "ERROR 404: UNIVERSALLY CORRECT MEANING NOT FOUND.",
  finalDiagnosis:
    "Final diagnosis: Sometimes, \"Okay\" is not an argument. Sometimes, duha ra ka tawo nga nagpa-lambingay. 😭💗",
  continueButton: "CONTINUE TO NEXT AUDIT ->",
};

export const ATTRIBUTION_MINI_GAME = {
  windowTitle: "INCIDENT ATTRIBUTION PROTOCOL — WHO DID IT?",
  instruction:
    "Review the following recorded couple incidents and assign responsibility to the correct party:",
  scenarios: [
    {
      id: "scen-1",
      habit: "Says \"dili\" when asked \"Love ko nimo?\"",
      correct: "gwenyy",
      hint: "Suspect has a history of teasing answers to romantic inquiries.",
    },
    {
      id: "scen-2",
      habit: "Repeats \"Okay... okay... okay...\" with increasing dots",
      correct: "boyfriend",
      hint: "Signature defensive maneuver when teasing occurs.",
    },
    {
      id: "scen-3",
      habit: "Responds \"Okay pud\" to escalate the standoff",
      correct: "gwenyy",
      hint: "The master of counter-responses.",
    },
    {
      id: "scen-4",
      habit: "Keeps the playful Okay conversation going instead of stopping",
      correct: "both",
      hint: "Takes two to maintain the legendary Okay Loop.",
    },
  ],
  officialResult:
    "Investigation complete! Both parties are jointly responsible for the continued operation of the Okay Loop. No one has been arrested. Both remain suspiciously cute.",
  buttonText: "GENERATE OFFICIAL CERTIFICATION 📜",
};

export const CERTIFICATE_DATA = {
  title: "CERTIFICATE OF GIRLFRIEND EXCELLENCE",
  bureauName: "RELATIONSHIP SYSTEMS BUREAU",
  subBureau: "OFFICIAL AUDIT DIVISION // MONTH 5 ASSESSMENT",
  recipientName: "GWENYY",
  bodyText:
    "This certifies that GWENYY has successfully completed the Month 5 Girlfriend Certification Exam and is hereby officially authorized to continue:",
  authorizations: [
    "Professional boyfriend teasing without fear of legal retribution",
    "Advanced Okay-related operations and mutual lambing standoffs",
    "Unscheduled, spontaneous sweet attacks and cuddles",
    "Co-management of highly questionable couple decisions in games and life",
  ],
  issuedBy: "Relationship Systems Bureau — Joint Board of Lambing",
  status: "APPROVED FOR CONTINUED NONSENSE",
  sealText: "OFFICIALLY UNOFFICIAL",
  fakeStats: [
    { label: "Officiality Level", value: "100%" },
    { label: "Meaning of Okay Understood", value: "0%" },
    { label: "Lambing Detected", value: "Too Many To Count" },
    { label: "Boyfriend Confusion", value: "Ongoing" },
    { label: "Nonsense Authorization", value: "APPROVED 💗" },
  ],
  titlesEarned: [
    "Certified Girlfriend of Questionable Methods",
    "Senior Boyfriend Teasing Specialist",
    "Co-Administrator of the Okay Loop",
    "Lifetime License Holder of Lambing Operations",
  ],
};

export const DEVELOPER_NOTES = {
  windowTitle: "DEVELOPER_NOTES.txt — Relationship Systems Bureau",
  summaryPoints: [
    "The girlfriend is certified.",
    "The boyfriend is still questionable.",
    "The word \"Okay\" remains unresolved.",
    "Further research is required, but the Bureau is tired.",
  ],
  // [CUSTOMIZE: Replace this heartfelt placeholder message with your personal Month 5 words for Gwenyy anytime!]
  personalMessage: {
    salutation: "Happy 5th Monthsary, Gwenyy! 💗",
    paragraphs: [
      "Five months na ta, and honestly, every single day with you is filled with so much fun, lambing, and our silly little inside jokes. From our late night kulitan, kanang sige tag \"dili\" ug \"okay\", to our games together—I wouldn't trade any of this for the world.",
      "Even though magbinuang ko nga \"under review\" pa ko or grabe ka mangpa-selos usahay, the truth is I am so grateful to have you in my life. You make everything lighter, happier, and so much sweeter.",
      "Thank you for being my favorite person, my best friend, and the cutest girlfriend ever. Happy 5th Monthsary! Padayon lang ta sa atong lambing ug kabuang together. Love you always! 🤍",
    ],
    closing: "Forever your loving (and slightly confused) boyfriend,",
    signature: "Your Boyfriend 💖",
  },
};
