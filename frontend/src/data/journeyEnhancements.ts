// Enhanced journey data with detailed descriptions, tips, and beginner context

export const glossary: { [key: string]: string } = {
  "swinging": "A lifestyle where committed couples engage in sexual activities with other couples or singles, typically with full knowledge and consent.",
  "soft swap": "Sexual play that doesn't include penetrative intercourse - typically includes kissing, touching, and oral sex.",
  "full swap": "Complete sexual activity including penetrative intercourse with other partners.",
  "unicorn": "A single bisexual woman who joins a couple (often hard to find, hence the mythical reference).",
  "bull": "A single man who engages with a couple, particularly in hotwifing scenarios.",
  "BDSM": "Bondage & Discipline, Dominance & Submission, Sadism & Masochism - consensual power exchange and sensation play.",
  "safeword": "A pre-agreed word that immediately stops all activity when spoken, ensuring safety and consent.",
  "aftercare": "The time after a scene or sexual activity dedicated to emotional and physical comfort and reconnection.",
  "scene": "A planned BDSM play session with negotiated activities and boundaries.",
  "dominant": "The partner who takes control in a power exchange dynamic (also called Dom/Domme).",
  "submissive": "The partner who consensually gives up control in a power exchange dynamic (also called sub).",
  "switch": "Someone who enjoys both dominant and submissive roles at different times.",
  "ENM": "Ethical Non-Monogamy - consensual non-exclusive relationships with honesty and communication.",
  "polyamory": "Having multiple romantic relationships simultaneously with the knowledge and consent of all involved.",
  "metamour": "Your partner's other partner (not a direct relationship with you).",
  "compersion": "Feeling joy from your partner's happiness with another person - the opposite of jealousy.",
  "hotwifing": "A relationship dynamic where the wife has sexual experiences with other men, typically with the husband's encouragement.",
  "hierarchical polyamory": "A polyamory structure with primary/secondary relationship rankings.",
  "relationship anarchy": "Rejecting traditional relationship hierarchies and rules, treating each connection uniquely.",
  "munch": "A casual social gathering for people in alternative lifestyles, typically in a vanilla (non-sexual) setting like a restaurant.",
  "lifestyle": "General term for alternative relationship structures including swinging, BDSM, ENM, etc.",
  "vanilla": "Traditional monogamous relationships or non-kinky sexual activities.",
  "fetlife": "A social networking site for the BDSM and fetish community.",
  "negotiation": "The process of discussing boundaries, desires, and limits before engaging in play or new experiences.",
  "consent": "Freely given, enthusiastic agreement to participate in activities. Can be withdrawn at any time.",
  "boundaries": "Personal limits and rules about what you're comfortable with in relationships and activities.",
  "compersion": "Feeling joy when your partner experiences pleasure with someone else - opposite of jealousy.",
  "NRE": "New Relationship Energy - the exciting, intoxicating feeling at the start of a new relationship.",
  "veto power": "The ability for one partner to end another partner's relationship (controversial in polyamory)."
};

export const beginnerResources = {
  swinging: [
    { title: "What is Swinging?", path: "/blog/swinging-101-beginners-guide", icon: "book" },
    { title: "Communication Guide", path: "/guide/how-to", icon: "message" },
    { title: "Safety First", path: "/guide/safety", icon: "shield" },
    { title: "Consent Basics", path: "/start/consent-basics", icon: "check" },
    { title: "Common Myths", path: "/start/beginner-faq#swinging", icon: "help" }
  ],
  bdsm: [
    { title: "BDSM for Beginners", path: "/blog/bdsm-beginners-guide", icon: "book" },
    { title: "Safety Checklist", path: "/blog/bdsm-safety-checklist", icon: "shield" },
    { title: "Understanding Roles", path: "/lifestyle/bdsm-guide#roles", icon: "users" },
    { title: "Consent & Negotiation", path: "/blog/bdsm-negotiation-checklist", icon: "check" },
    { title: "Common Questions", path: "/lifestyle/bdsm-guide", icon: "help" }
  ],
  hotwifing: [
    { title: "Hotwifing 101", path: "/lifestyle/hotwifing-guide", icon: "book" },
    { title: "Communication", path: "/guide/how-to", icon: "message" },
    { title: "Jealousy Management", path: "/lifestyle/jealousy-management", icon: "heart" },
    { title: "Safety Guidelines", path: "/guide/safety", icon: "shield" },
    { title: "FAQs", path: "/start/beginner-faq#hotwifing", icon: "help" }
  ],
  enm: [
    { title: "What is ENM?", path: "/lifestyle/enm-polyamory-guide", icon: "book" },
    { title: "Relationship Structures", path: "/lifestyle/enm-polyamory-guide", icon: "users" },
    { title: "Managing Jealousy", path: "/lifestyle/jealousy-management", icon: "heart" },
    { title: "Communication Skills", path: "/lifestyle/relationships-communication", icon: "message" },
    { title: "ENM FAQ", path: "/start/beginner-faq#enm", icon: "help" }
  ]
};

export const lifestyleOverviews = {
  swinging: {
    summary: "Swinging involves couples engaging in sexual experiences with other couples or singles. It's primarily recreational and focuses on sexual experiences rather than romantic connections.",
    keyPoints: [
      "Recreational sexual experiences",
      "Focus on physical pleasure, not emotional connection",
      "Strong relationship foundation required",
      "Clear communication and boundaries essential",
      "Various forms: soft swap, full swap, same room, separate rooms"
    ],
    whoItsFor: "Couples in strong, trusting relationships who want to explore sexual variety together",
    notFor: "Those using it to 'fix' relationship problems or who struggle with jealousy"
  },
  bdsm: {
    summary: "BDSM encompasses a wide range of activities involving power exchange, sensation play, and kink. It requires explicit consent, negotiation, and emphasis on safety.",
    keyPoints: [
      "Consensual power exchange and sensation play",
      "Requires clear negotiation and boundaries",
      "Safety and consent are paramount",
      "Roles: Dominant, Submissive, Switch",
      "Community-oriented with established protocols"
    ],
    whoItsFor: "Individuals or couples interested in exploring power dynamics, sensation play, or kink",
    notFor: "Those looking for abuse or who don't prioritize consent and safety"
  },
  hotwifing: {
    summary: "Hotwifing is a dynamic where the wife has sexual experiences with other men, typically with her husband's encouragement and involvement. It celebrates the wife's desirability.",
    keyPoints: [
      "Wife-centric dynamic",
      "Husband typically present or aware",
      "Focus on wife's pleasure and empowerment",
      "Requires strong trust and communication",
      "Different from cuckolding (no humiliation element)"
    ],
    whoItsFor: "Couples where the husband enjoys his wife's sexual empowerment and freedom",
    notFor: "Couples without exceptional communication or those dealing with relationship issues"
  },
  enm: {
    summary: "Ethical Non-Monogamy (ENM) and polyamory involve having multiple romantic and/or sexual relationships with full knowledge and consent of all involved.",
    keyPoints: [
      "Multiple romantic or sexual relationships",
      "Honesty and transparency with all partners",
      "Various structures: hierarchical, non-hierarchical, relationship anarchy",
      "Requires excellent communication and time management",
      "Focus on compersion and personal growth"
    ],
    whoItsFor: "Those who want multiple meaningful relationships and have capacity for complex emotional management",
    notFor: "Those who struggle with time management, jealousy, or clear communication"
  }
};
