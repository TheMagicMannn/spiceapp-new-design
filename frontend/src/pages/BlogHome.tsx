import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Clock, Filter, X } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// All blog posts data - single source of truth
const allBlogPosts = [
  // Hotwifing Articles (10)
  {
    title: "Beginner's Guide to Hotwifing: Starting the Conversation",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Complete beginner's guide to hotwifing. Learn how to introduce the hotwife lifestyle to your partner, discuss boundaries, build trust, and start your journey safely.",
    path: "/blog/hotwifing-beginners-guide",
    readTime: "15 min read",
    date: "2025-01-15"
  },
  {
    title: "Overcoming Jealousy: Real Strategies for Hotwife Couples",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Learn proven strategies for managing jealousy in the hotwife lifestyle. Turn jealousy into compersion and strengthen your relationship.",
    path: "/blog/hotwifing-jealousy",
    readTime: "12 min read",
    date: "2025-01-14"
  },
  {
    title: "My First Hotwife Date: What Went Right (and Wrong)",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "A candid, detailed account of our first hotwife experience—the nerves, the excitement, the mistakes, and the unexpected lessons.",
    path: "/blog/hotwifing-first-date",
    readTime: "10 min read",
    date: "2025-01-13"
  },
  {
    title: "Finding the Perfect Bull: Tips for Safe Encounters",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Complete guide to finding the right bull for your hotwife adventures. Learn vetting strategies, red flags, and how to ensure safe encounters.",
    path: "/blog/hotwifing-finding-bull",
    readTime: "14 min read",
    date: "2025-01-12"
  },
  {
    title: "Reclamation Sex: Why It's the Hottest Part of Coming Home",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Discover why reclamation sex is the most intense, intimate part of the hotwife experience and how to maximize reconnection.",
    path: "/blog/hotwifing-reclamation-sex",
    readTime: "11 min read",
    date: "2025-01-11"
  },
  {
    title: "Hotwife Fantasies vs. Reality: Debunking Common Myths",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Separate hotwife fantasy from reality. We debunk common myths about the hotwife lifestyle including infidelity fears and relationship damage.",
    path: "/blog/hotwifing-fantasy-reality",
    readTime: "13 min read",
    date: "2025-01-10"
  },
  {
    title: "Creative Date Ideas to Keep the Hotwife Spark Alive",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Exciting date ideas for hotwife couples. From role-playing strangers to public flirting and surprise encounters.",
    path: "/blog/hotwifing-creative-dates",
    readTime: "9 min read",
    date: "2025-01-09"
  },
  {
    title: "The Emotional Highs and Lows of Hotwifing: A Year in Review",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "An intimate, honest reflection on our first year in the hotwife lifestyle—the growth, challenges, surprises, and transformation.",
    path: "/blog/hotwifing-year-review",
    readTime: "14 min read",
    date: "2025-01-08"
  },
  {
    title: "Incorporating Toys and Kink: Elevating Hotwife Experiences",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Enhance your hotwife dynamic with toys, BDSM elements, and kink. Ideas for chastity, bondage, role-play, and more.",
    path: "/blog/hotwifing-toys-kink",
    readTime: "12 min read",
    date: "2025-01-07"
  },
  {
    title: "Hotwifing and Communication: How It Transformed Our Marriage",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Discover how the hotwife lifestyle transformed one couple's marriage through radical honesty, deeper trust, and unprecedented communication.",
    path: "/blog/hotwifing-communication-marriage",
    readTime: "13 min read",
    date: "2025-01-06"
  },
  // Swingers Articles (11)
  {
    title: "10 Signs You're Ready to Try the Lifestyle",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Curious about swinging, hotwifing, or ENM? Here are 10 signs you and your partner might be ready to explore the lifestyle together.",
    path: "/blog/10-signs-ready-lifestyle",
    readTime: "8 min read",
    date: "2025-01-20"
  },
  {
    title: "Swinging 101: A Step-by-Step Guide for Curious Couples",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Complete beginner's guide to swinging. Learn how to start the conversation, set rules, find swinger clubs and events, and prepare for your first experience.",
    path: "/blog/swinging-101-beginners-guide",
    readTime: "18 min read",
    date: "2025-01-19"
  },
  {
    title: "The Biggest Mistakes New Swinging Couples Make",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Real-talk lessons from experienced couples on common pitfalls like poor communication, rushing into play, ignoring jealousy triggers, and choosing the wrong first partners.",
    path: "/blog/swinging-mistakes-avoid",
    readTime: "14 min read",
    date: "2025-01-18"
  },
  {
    title: "How Swinging Strengthened Our Marriage: Real Stories",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Heartfelt testimonials and insights on how the lifestyle improved trust, communication, sexual satisfaction, and emotional intimacy.",
    path: "/blog/swinging-strengthened-marriage",
    readTime: "12 min read",
    date: "2025-01-17"
  },
  {
    title: "Finding Your Perfect Match: Best Ways to Meet Swingers in 2025",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "An up-to-date comparison of clubs, lifestyle resorts, apps, websites, house parties, and events—plus tips for creating a standout profile.",
    path: "/blog/swinging-finding-couples",
    readTime: "15 min read",
    date: "2025-01-16"
  },
  {
    title: "Jealousy in the Lifestyle: Proven Tools to Turn It Into Excitement",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Practical strategies including pre-play check-ins, aftercare rituals, reclamation techniques, and how to use compersion as a superpower.",
    path: "/blog/swinging-jealousy-tools",
    readTime: "13 min read",
    date: "2025-01-05"
  },
  {
    title: "Soft Swap vs. Full Swap: How to Decide What's Right for You",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "A non-judgmental breakdown of the differences, pros/cons, how to communicate preferences, and signs you're ready to level up.",
    path: "/blog/swinging-soft-full-swap",
    readTime: "11 min read",
    date: "2025-01-04"
  },
  {
    title: "Swinging Etiquette: The Unwritten Rules Every Couple Needs to Know",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Essential dos and don'ts at clubs, parties, and dates—covering consent, rejection, hygiene, phone use, and being a good guest.",
    path: "/blog/swinging-etiquette-rules",
    readTime: "13 min read",
    date: "2025-01-03"
  },
  {
    title: "Planning the Ultimate Swinger Vacation: Top Resorts & Cruises 2025-2026",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Reviews and insider tips on places like Desire, Hedonism II, Bliss Cruise, and emerging hotspots, plus budgeting and booking advice.",
    path: "/blog/swinging-vacation-guide",
    readTime: "20 min read",
    date: "2025-01-02"
  },
  {
    title: "Health, Safety & Consent: Non-Negotiables for Responsible Swinging",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "In-depth guide on STI testing protocols, safer sex practices, boundary setting, sober consent, and how to handle 'no' gracefully.",
    path: "/blog/swinging-health-safety",
    readTime: "16 min read",
    date: "2025-01-01"
  },
  {
    title: "Keeping the Spark Alive: Advanced Tips from Veteran Swingers",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Ideas for long-term couples to avoid burnout—new fantasies, role-playing within the lifestyle, solo dates, themed events, and balancing swinging with vanilla life.",
    path: "/blog/swinging-keeping-spark",
    readTime: "15 min read",
    date: "2024-12-30"
  },
  // Relationships Articles (1)
  {
    title: "How to Talk to Your Partner About Opening Your Relationship",
    category: "relationships",
    categoryDisplay: "Relationships",
    excerpt: "A step-by-step guide to having 'the talk' with your partner about ENM, polyamory, or swinging. Communication strategies that work.",
    path: "/blog/talk-partner-opening-relationship",
    readTime: "12 min read",
    date: "2024-12-28"
  },
  // ENM & Polyamory Articles (10)
  {
    title: "ENM vs. Polyamory: Which Path Fits Your Heart",
    category: "enm",
    categoryDisplay: "ENM & Poly",
    excerpt: "A clear, non-judgmental comparison of casual ENM styles versus romantic polyamory—with real stories of people who have switched or blended both.",
    path: "/blog/enm-vs-polyamory",
    readTime: "18 min read",
    date: "2025-12-28"
  },
  {
    title: "The 2026 Guide to Poly-Friendly Dating Apps",
    category: "enm",
    categoryDisplay: "ENM & Poly",
    excerpt: "In-depth reviews of Feeld, OkCupid, Bloom, #open, and emerging platforms—plus profile tips for attracting multiple loving connections.",
    path: "/blog/poly-dating-apps-2026",
    readTime: "20 min read",
    date: "2025-12-27"
  },
  {
    title: "Polycule Drama: How to Spot It Early and Keep Relationships Drama-Free",
    category: "enm",
    categoryDisplay: "ENM & Poly",
    excerpt: "Common pitfalls like triangulation, hierarchy fights, and unspoken expectations—plus proactive tools to foster harmony in your polycule.",
    path: "/blog/polycule-drama",
    readTime: "16 min read",
    date: "2025-12-26"
  },
  {
    title: "Time Management Mastery: Thriving in Multiple Relationships",
    category: "enm",
    categoryDisplay: "ENM & Poly",
    excerpt: "Practical systems, apps, rituals, and boundary-setting strategies for balancing dates, partners, work, and self-care without burning out.",
    path: "/blog/poly-time-management",
    readTime: "15 min read",
    date: "2025-12-25"
  },
  {
    title: "Compersion in Action: Real Exercises to Feel Genuine Joy",
    category: "enm",
    categoryDisplay: "ENM & Poly",
    excerpt: "Step-by-step practices, journaling prompts, and success stories from poly folks who turned jealousy into celebration.",
    path: "/blog/compersion-exercises",
    readTime: "18 min read",
    date: "2025-12-24"
  },
  {
    title: "Building Your Chosen Family: How Polycules Become Lifelong Support Networks",
    category: "enm",
    categoryDisplay: "ENM & Poly",
    excerpt: "Heartwarming examples of shared holidays, group homes, co-parenting, and emotional safety nets beyond blood ties.",
    path: "/blog/chosen-family",
    readTime: "17 min read",
    date: "2025-12-23"
  },
  {
    title: "Solo Poly in a Coupled World: Why Independence Is the Ultimate Relationship Goal",
    category: "enm",
    categoryDisplay: "ENM & Poly",
    excerpt: "Empowering insights for those who prioritize autonomy while loving deeply—dating tips, boundary scripts, and community advice.",
    path: "/blog/solo-poly",
    readTime: "19 min read",
    date: "2025-12-22"
  },
  {
    title: "ENM & Polyamory at Work: Navigating Professional Life",
    category: "enm",
    categoryDisplay: "ENM & Poly",
    excerpt: "Strategies for handling nosy coworkers, LinkedIn privacy, workplace romance policies, and deciding who needs to know.",
    path: "/blog/enm-at-work",
    readTime: "16 min read",
    date: "2025-12-21"
  },
  {
    title: "Intimacy Beyond Sex: Deepening Emotional Connections",
    category: "enm",
    categoryDisplay: "ENM & Poly",
    excerpt: "Ideas for love languages across partners, vulnerability dates, group bonding activities, and nurturing romance long-term.",
    path: "/blog/intimacy-beyond-sex",
    readTime: "16 min read",
    date: "2025-12-20"
  },
  {
    title: "The Future of Love: How ENM and Polyamory Are Reshaping Relationships",
    category: "enm",
    categoryDisplay: "ENM & Poly",
    excerpt: "Trends like rising acceptance, new legal protections, media representation, and predictions from leading voices in the community.",
    path: "/blog/future-of-love",
    readTime: "14 min read",
    date: "2025-12-19"
  },
  // BDSM Articles (11)
  {
    title: "BDSM Safety Checklist: Essential Practices for Safe Play",
    category: "bdsm",
    categoryDisplay: "BDSM & Kink",
    excerpt: "Comprehensive safety guide for BDSM practitioners. Essential practices, aftercare tips, and safety protocols for kink exploration.",
    path: "/blog/bdsm-safety-checklist",
    readTime: "10 min read",
    date: "2024-12-25"
  },
  {
    title: "BDSM for Beginners: How to Safely Explore Your First Kinks",
    category: "bdsm",
    categoryDisplay: "BDSM & Kink",
    excerpt: "A gentle, step-by-step guide to BDSM for beginners. Learn self-discovery, basic toys, negotiation techniques, and how to start with low-risk scenes safely.",
    path: "/blog/bdsm-beginners-guide",
    readTime: "18 min read",
    date: "2025-01-25"
  },
  {
    title: "The Power of Aftercare: Why It's the Most Important Part of Any Scene",
    category: "bdsm",
    categoryDisplay: "BDSM & Kink",
    excerpt: "Deep dive into emotional and physical aftercare techniques, real couple stories, and why skipping it can lead to sub-drop or Dom-drop.",
    path: "/blog/bdsm-aftercare-guide",
    readTime: "16 min read",
    date: "2025-01-24"
  },
  {
    title: "Negotiating Like a Pro: The Ultimate BDSM Checklist and Templates",
    category: "bdsm",
    categoryDisplay: "BDSM & Kink",
    excerpt: "Downloadable resources, must-ask questions, and tips for turning potentially awkward talks into intimate foreplay.",
    path: "/blog/bdsm-negotiation-checklist",
    readTime: "20 min read",
    date: "2025-01-23"
  },
  {
    title: "Kink and Mental Health: How BDSM Can Heal, Harm, or Help You Grow",
    category: "bdsm",
    categoryDisplay: "BDSM & Kink",
    excerpt: "Honest exploration of catharsis, trauma processing, therapy compatibility, and red flags to watch for.",
    path: "/blog/kink-mental-health",
    readTime: "17 min read",
    date: "2025-01-22"
  },
  {
    title: "Top 10 Beginner-Friendly Kinks That Feel Intense But Are Low-Risk",
    category: "bdsm",
    categoryDisplay: "BDSM & Kink",
    excerpt: "Spotlight on sensation play, light bondage, role-playing, and more—with safety tips and starter toy recommendations.",
    path: "/blog/beginner-friendly-kinks",
    readTime: "14 min read",
    date: "2025-01-21"
  },
  {
    title: "Finding Your Kink Community in 2026: Events, Munches, Apps & Spaces",
    category: "bdsm",
    categoryDisplay: "BDSM & Kink",
    excerpt: "Curated list of in-person and virtual options, etiquette for first-timers, and how to spot welcoming vs. toxic groups.",
    path: "/blog/finding-kink-community",
    readTime: "15 min read",
    date: "2025-01-20"
  },
  {
    title: "Switching Dynamics: What Happens When a Dom Wants to Sub",
    category: "bdsm",
    categoryDisplay: "BDSM & Kink",
    excerpt: "Personal stories, identity shifts, relationship impacts, and advice for partners navigating role flexibility.",
    path: "/blog/switching-dynamics",
    readTime: "13 min read",
    date: "2025-01-19"
  },
  {
    title: "Kink on a Budget: DIY Toys, Furniture Hacks, and Affordable Gear",
    category: "bdsm",
    categoryDisplay: "BDSM & Kink",
    excerpt: "Creative, safe homemade alternatives to expensive equipment—plus reviews of the best under-$50 finds.",
    path: "/blog/kink-on-budget",
    readTime: "12 min read",
    date: "2025-01-18"
  },
  {
    title: "Long-Distance BDSM: Keeping the Power Exchange Hot Across Miles",
    category: "bdsm",
    categoryDisplay: "BDSM & Kink",
    excerpt: "Tools, apps, tasks, rituals, and virtual scene ideas for maintaining intensity across time zones.",
    path: "/blog/long-distance-bdsm",
    readTime: "22 min read",
    date: "2025-01-17"
  },
  {
    title: "Coming Out as Kinky: How to Tell Partners, Friends, or Family",
    category: "bdsm",
    categoryDisplay: "BDSM & Kink",
    excerpt: "Strategies for disclosure, handling judgment, setting boundaries, and finding chosen family in the lifestyle.",
    path: "/blog/coming-out-kinky",
    readTime: "20 min read",
    date: "2025-01-16"
  },
  // Consent & Safety Articles (10)
  {
    title: "The Golden Rules of Consent: How to Ask, Give, and Revoke It Gracefully",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "A practical guide to enthusiastic consent, verbal/non-verbal cues, and why 'yes' should always feel exciting, never pressured.",
    path: "/blog/consent-golden-rules",
    readTime: "14 min read",
    date: "2025-01-20"
  },
  {
    title: "Red Flags vs. Green Flags: Spotting Safe Partners Before You Meet",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Real examples of warning signs in profiles, messages, and first conversations—plus the positive traits that signal a respectful playmate.",
    path: "/blog/red-flags-green-flags",
    readTime: "12 min read",
    date: "2025-01-19"
  },
  {
    title: "Safer Sex in the Lifestyle: 2026 Guide to STI Testing, Barriers & Honest Conversations",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Updated protocols, best testing services, how to share results without awkwardness, and protecting everyone involved.",
    path: "/blog/safer-sex-guide-2026",
    readTime: "15 min read",
    date: "2025-01-18"
  },
  {
    title: "Solo Dates Done Right: Personal Safety Tips for First Meets",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Step-by-step checklist: location sharing, public meetups, check-in systems, sober consent, and emergency plans for swinging and ENM.",
    path: "/blog/solo-dates-safety",
    readTime: "11 min read",
    date: "2025-01-17"
  },
  {
    title: "When 'No' Gets Ignored: How to Handle Consent Violations",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Empowering advice on immediate responses, aftermath support, reporting in communities, and healing as a couple or individual.",
    path: "/blog/consent-violations",
    readTime: "13 min read",
    date: "2025-01-16"
  },
  {
    title: "Consent Check-Ins: Sexy Phrases and Techniques to Keep Things Hot and Safe",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Fun, flirty ways to pause and confirm comfort mid-scene without killing the mood—includes scripts for beginners.",
    path: "/blog/consent-check-ins-sexy",
    readTime: "10 min read",
    date: "2025-01-15"
  },
  {
    title: "Alcohol, Substances, and Consent: Why a Clear Head Makes Everything Better",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Exploring how intoxication affects decision-making, setting personal limits, and creating group agreements for parties or dates.",
    path: "/blog/alcohol-substances-consent",
    readTime: "12 min read",
    date: "2025-01-14"
  },
  {
    title: "Digital Safety First: Protecting Your Privacy in Apps, Chats & Communities",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Tips on anonymous profiles, secure messaging, avoiding revenge porn, and what to do if photos get shared without permission.",
    path: "/blog/digital-safety-first",
    readTime: "15 min read",
    date: "2025-01-13"
  },
  {
    title: "Aftercare and Emotional Safety: Why Reconnection Matters Just as Much as Protection",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "How to debrief, provide reassurance, and handle unexpected feelings after play—essential for long-term enjoyment and trust.",
    path: "/blog/aftercare-emotional-safety",
    readTime: "13 min read",
    date: "2025-01-12"
  },
  {
    title: "Teaching Consent to the Next Generation: Raising Kids Who Understand Boundaries",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Age-appropriate ways to model healthy consent, respect, and communication for parents in open or lifestyle relationships.",
    path: "/blog/teaching-consent-next-generation",
    readTime: "14 min read",
    date: "2025-01-11"
  },
  // Exploring/Curious Articles
  {
    title: "Am I Ready for the Lifestyle? A Self-Assessment Guide",
    category: "exploring",
    categoryDisplay: "Exploring/Curious",
    excerpt: "Honest questions to ask yourself before diving into swinging, ENM, or any alternative lifestyle. Find out if you're truly prepared.",
    path: "/blog/am-i-ready-lifestyle",
    readTime: "10 min read",
    date: "2025-01-25"
  },
  {
    title: "The Different Types of Ethical Non-Monogamy Explained",
    category: "exploring",
    categoryDisplay: "Exploring/Curious",
    excerpt: "Swinging, polyamory, hotwifing, open relationships—what's the difference? A comprehensive breakdown of lifestyle options.",
    path: "/blog/types-ethical-non-monogamy",
    readTime: "12 min read",
    date: "2025-01-24"
  },
  {
    title: "What Really Happens at a Lifestyle Club? Expectations vs. Reality",
    category: "exploring",
    categoryDisplay: "Exploring/Curious",
    excerpt: "Nervous about your first club visit? Here's what actually happens, what to expect, and how to prepare for the experience.",
    path: "/blog/what-happens-lifestyle-club",
    readTime: "11 min read",
    date: "2025-01-23"
  },
  {
    title: "Common Fears About the Lifestyle (And Why Most Don't Come True)",
    category: "exploring",
    categoryDisplay: "Exploring/Curious",
    excerpt: "Worried about jealousy, judgment, or ruining your relationship? Let's address the most common fears head-on.",
    path: "/blog/common-lifestyle-fears",
    readTime: "9 min read",
    date: "2025-01-22"
  },
  {
    title: "Is the Lifestyle Right for Your Relationship? Key Questions for Couples",
    category: "exploring",
    categoryDisplay: "Exploring/Curious",
    excerpt: "Before taking the plunge, couples should ask themselves these crucial questions about readiness, motivations, and expectations.",
    path: "/blog/lifestyle-right-for-relationship",
    readTime: "10 min read",
    date: "2025-01-21"
  },
  // How-To Articles
  {
    title: "How to Create the Perfect Lifestyle Profile That Gets Responses",
    category: "howto",
    categoryDisplay: "How-To",
    excerpt: "Step-by-step guide to writing a profile that attracts the right connections. Photos, bios, and what to include (and avoid).",
    path: "/blog/how-to-create-lifestyle-profile",
    readTime: "12 min read",
    date: "2025-01-28"
  },
  {
    title: "How to Have 'The Talk' With Your Partner About Opening Up",
    category: "howto",
    categoryDisplay: "How-To",
    excerpt: "A tactical guide to starting the conversation about non-monogamy without scaring your partner away.",
    path: "/blog/how-to-talk-opening-up",
    readTime: "14 min read",
    date: "2025-01-27"
  },
  {
    title: "How to Prepare for Your First Lifestyle Event or Party",
    category: "howto",
    categoryDisplay: "How-To",
    excerpt: "Everything you need to do before, during, and after your first event. Packing list, etiquette, and insider tips included.",
    path: "/blog/how-to-prepare-first-event",
    readTime: "15 min read",
    date: "2025-01-26"
  },
  {
    title: "How to Set Boundaries That Work (And Stick to Them)",
    category: "howto",
    categoryDisplay: "How-To",
    excerpt: "Practical framework for establishing, communicating, and enforcing boundaries in any lifestyle situation.",
    path: "/blog/how-to-set-boundaries",
    readTime: "11 min read",
    date: "2025-01-25"
  },
  {
    title: "How to Recover After a Lifestyle Experience That Didn't Go Well",
    category: "howto",
    categoryDisplay: "How-To",
    excerpt: "Bad experiences happen. Here's how to process, communicate, and move forward as a stronger couple.",
    path: "/blog/how-to-recover-bad-experience",
    readTime: "10 min read",
    date: "2025-01-24"
  },
  // SPICE User Stories
  {
    title: "From Curious to Connected: How SPICE Changed Our Marriage",
    category: "stories",
    categoryDisplay: "User Stories",
    excerpt: "One couple's journey from lifestyle-curious to finding their perfect community through SPICE. Their honest story.",
    path: "/blog/story-curious-to-connected",
    readTime: "8 min read",
    date: "2025-01-30"
  },
  {
    title: "Finding Our Tribe: A Poly Family's SPICE Journey",
    category: "stories",
    categoryDisplay: "User Stories",
    excerpt: "How a polyamorous triad used SPICE to find like-minded connections and build a supportive community.",
    path: "/blog/story-poly-family-journey",
    readTime: "9 min read",
    date: "2025-01-29"
  },
  {
    title: "Solo and Thriving: One Woman's Experience in the Lifestyle",
    category: "stories",
    categoryDisplay: "User Stories",
    excerpt: "A single woman shares her experiences navigating the lifestyle world, finding respect, and building confidence.",
    path: "/blog/story-solo-woman-lifestyle",
    readTime: "10 min read",
    date: "2025-01-28"
  },
  {
    title: "We Almost Gave Up—Then We Found the Right Community",
    category: "stories",
    categoryDisplay: "User Stories",
    excerpt: "After several disappointing experiences, this couple nearly quit the lifestyle. Here's what changed everything.",
    path: "/blog/story-almost-gave-up",
    readTime: "11 min read",
    date: "2025-01-27"
  },
  {
    title: "Long-Distance Lifestyle: Making It Work Across Miles",
    category: "stories",
    categoryDisplay: "User Stories",
    excerpt: "How one couple maintains their lifestyle connection despite living in different cities. Creative solutions and honest challenges.",
    path: "/blog/story-long-distance-lifestyle",
    readTime: "9 min read",
    date: "2025-01-26"
  },
];

// Category configuration
const categories = [
  { id: "all", name: "All Articles", description: "Browse all lifestyle articles" },
  { id: "exploring", name: "Exploring/Curious", description: "New to the lifestyle?" },
  { id: "howto", name: "How-To", description: "Step-by-step guides" },
  { id: "stories", name: "User Stories", description: "Real SPICE experiences" },
  { id: "swingers", name: "Swingers", description: "Swinging lifestyle tips and stories" },
  { id: "hotwifing", name: "Hotwifing", description: "Hotwife and stag/vixen guides" },
  { id: "bdsm", name: "BDSM & Kink", description: "Kink education and safety" },
  { id: "enm", name: "ENM & Poly", description: "Non-monogamy insights" },
  { id: "consent", name: "Consent & Safety", description: "Safe practices and boundaries" },
  { id: "travel", name: "Travel Stories", description: "Lifestyle destinations" },
  { id: "relationships", name: "Relationships", description: "Communication and intimacy" },
];

const BlogHome = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(true); // Expanded by default

  // Calculate article counts per category
  const categoryCounts = useMemo(() => {
    const counts = { all: allBlogPosts.length };
    allBlogPosts.forEach(post => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter articles based on search and category
  const filteredPosts = useMemo(() => {
    return allBlogPosts.filter(post => {
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.categoryDisplay.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Get latest articles - mixed across categories for variety
  const latestPosts = useMemo(() => {
    const categoriesUsed = new Set<string>();
    const mixedPosts: typeof allBlogPosts = [];
    
    // Sort all posts by date
    const sortedPosts = [...allBlogPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // First pass: Get one post from each category
    for (const post of sortedPosts) {
      if (!categoriesUsed.has(post.category) && mixedPosts.length < 9) {
        mixedPosts.push(post);
        categoriesUsed.add(post.category);
      }
    }
    
    // Second pass: Fill remaining slots with latest posts
    for (const post of sortedPosts) {
      if (mixedPosts.length >= 9) break;
      if (!mixedPosts.includes(post)) {
        mixedPosts.push(post);
      }
    }
    
    return mixedPosts;
  }, []);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  const hasActiveFilters = searchQuery !== "" || selectedCategory !== "all";

  return (
    <>
      <SEO
        title="SPICE Blog: Lifestyle Dating, Swinging, BDSM & ENM Articles"
        description="Expert articles on swingers lifestyle, hotwifing, BDSM, polyamory, ENM, consent, and relationship communication. Educational content for lifestyle couples and singles."
        keywords="lifestyle blog, swingers blog, hotwifing articles, BDSM guides, ENM blog, polyamory articles, swinger advice, lifestyle dating tips"
        canonical="https://thespiceapp.com/blog"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                SPICE Lifestyle Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert guides, real stories, and practical advice for swingers, hotwife couples, BDSM enthusiasts, and ENM practitioners.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg bg-card/50 border-border rounded-full"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Toggle */}
            <div className="flex justify-center mb-6">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? "Hide Categories" : "Filter by Category"}
                {selectedCategory !== "all" && (
                  <span className="ml-2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                    1
                  </span>
                )}
              </Button>
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  className="ml-2 text-muted-foreground hover:text-white"
                >
                  Clear filters
                </Button>
              )}
            </div>

            {/* Category Filter Pills */}
            {showFilters && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-card/50 border border-border text-muted-foreground hover:border-primary/50 hover:text-white"
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 opacity-70">
                      ({categoryCounts[category.id] || 0})
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Search Results or Default View */}
            {hasActiveFilters ? (
              // Filtered Results
              <div className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">
                    {filteredPosts.length} {filteredPosts.length === 1 ? "Result" : "Results"}
                    {searchQuery && <span className="text-muted-foreground"> for &quot;{searchQuery}&quot;</span>}
                    {selectedCategory !== "all" && (
                      <span className="text-muted-foreground">
                        {" "}in {categories.find(c => c.id === selectedCategory)?.name}
                      </span>
                    )}
                  </h2>
                </div>
                
                {filteredPosts.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post, index) => (
                      <Link
                        key={index}
                        to={post.path}
                        className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-[1.02]"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {post.categoryDisplay}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">No articles found matching your criteria.</p>
                    <Button variant="outline" onClick={clearFilters}>
                      Clear filters
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              // Default View: Latest Articles + Categories
              <>
                {/* Latest Articles */}
                <div className="mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8">Latest Articles</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {latestPosts.map((post, index) => (
                      <Link
                        key={index}
                        to={post.path}
                        className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-[1.02]"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {post.categoryDisplay}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Category Sections with Posts */}
                {categories.filter(c => c.id !== "all").map((category) => {
                  const categoryPosts = allBlogPosts.filter(post => post.category === category.id).slice(0, 3);
                  if (categoryPosts.length === 0) return null;
                  
                  return (
                    <div key={category.id} className="mb-16">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold">{category.name}</h2>
                        <Link
                          to={`/blog/${category.id}`}
                          className="text-primary hover:underline font-semibold flex items-center gap-2"
                        >
                          View All {categoryCounts[category.id] || 0} Articles →
                        </Link>
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryPosts.map((post, idx) => (
                          <Link
                            key={idx}
                            to={post.path}
                            className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-[1.02]"
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                {post.categoryDisplay}
                              </span>
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold mb-3 line-clamp-2">{post.title}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <h2 className="text-3xl font-bold mb-4">Join the Conversation</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Download SPICE to connect with writers, share your stories, and engage with the lifestyle community.
              </p>
              <Link 
                to="/download" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all"
              >
                Download SPICE Free
              </Link>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default BlogHome;
