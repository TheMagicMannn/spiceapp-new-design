import { useState } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ChevronDown, Users, User, Heart, Flame, Target, Sparkles } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  icon: typeof Users;
  color: string;
  faqs: FAQ[];
}

const BeginnerLifestyleFAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (sectionId: string, index: number) => {
    const key = `${sectionId}-${index}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  const faqSections: FAQSection[] = [
    {
      title: "Swinging - For Singles",
      icon: User,
      color: "pink",
      faqs: [
        {
          question: "Can single men really find success in the swinging community?",
          answer: "Yes, but it requires patience and respect. Single men (often called 'unicorns' when sought after) face more competition, so focus on being genuine, respectful, and building real connections. Join clubs, attend meet-and-greets, and understand that couples are looking for quality people, not just physical encounters. Many successful single men in the lifestyle emphasize communication skills and emotional intelligence over anything else."
        },
        {
          question: "What's a 'unicorn' in swinging, and how do I navigate that role as a single woman?",
          answer: "A 'unicorn' is a bisexual single woman willing to play with couples—they're called unicorns because they're rare and highly sought after. While this can be flattering, it's important to set your own boundaries and not feel pressured to fulfill every couple's fantasy. Choose couples who treat you as an equal partner in the experience, not just an accessory. Communicate your limits clearly, and don't be afraid to walk away from situations that don't feel right."
        },
        {
          question: "How do I approach couples at lifestyle events as a single person?",
          answer: "Always be respectful and read the room. Introduce yourself politely, engage in normal conversation first, and let them initiate any flirting or physical interest. Never interrupt couples who are clearly engaged with others, and respect 'no' immediately. Bring something to the conversation beyond just physical interest—many couples value singles who can hold interesting conversations and contribute to the social atmosphere."
        },
        {
          question: "What are the unwritten rules for singles in swinging?",
          answer: "Key rules: 1) Never pressure or pursue aggressively, 2) Respect that the couple's relationship comes first, 3) Be honest about your intentions and availability, 4) Practice excellent hygiene and grooming, 5) Don't contact one partner without the other's knowledge, 6) Accept rejection gracefully, 7) Don't try to come between a couple or create drama. Being known as drama-free and respectful is your best asset."
        },
        {
          question: "Should I attend lifestyle clubs alone as a single person?",
          answer: "Absolutely! Many clubs welcome singles (though some have restrictions on single men, especially on busy nights). Start by attending on meet-and-greet nights or educational events where the focus is social rather than sexual. This lets you build connections in a lower-pressure environment. Some singles find it helpful to attend with a platonic friend initially for comfort and safety."
        }
      ]
    },
    {
      title: "Swinging - For Couples",
      icon: Users,
      color: "pink",
      faqs: [
        {
          question: "How do we bring up swinging to each other without causing problems?",
          answer: "Start with curiosity rather than demands. Try phrases like 'I read an interesting article about open relationships' or 'What do you think about...' rather than 'I want to...' Watch lifestyle-related shows or documentaries together and discuss your reactions. Emphasize that you're exploring ideas together, not making demands. Be prepared for your partner to need time to process, and reassure them that your relationship is the priority."
        },
        {
          question: "What should our first swinging experience be?",
          answer: "Most couples start with soft swap (kissing, touching, oral, but no intercourse with others) or even just watching/being watched (voyeurism/exhibitionism). Many begin at lifestyle clubs just to observe and socialize with no pressure to participate. Taking small steps helps you gauge comfort levels and build trust. There's no timeline—some couples socialize for months before any sexual activity, and that's perfectly normal."
        },
        {
          question: "How do we handle jealousy when it comes up?",
          answer: "Jealousy is normal and doesn't mean you're not 'cut out' for the lifestyle. Address it immediately—stop the activity if needed and talk through feelings. Common triggers include perceived unequal attention, seeing your partner deeply enjoying someone else, or feeling left out. Prevention helps: set clear boundaries beforehand, check in with each other during events, use safe words, and debrief after experiences. Consider jealousy a signal to communicate, not a failure."
        },
        {
          question: "What boundaries should we set before our first experience?",
          answer: "Discuss and agree on: 1) What activities are okay (kissing, touching, oral, full swap?), 2) Condom rules, 3) Playing together in same room vs. separate rooms, 4) Can you play without your partner present?, 5) Communication expectations during play, 6) Overnight stays?, 7) Ongoing friendships with play partners?, 8) Social media connections?, 9) What happens if someone wants to stop mid-play?, 10) Date nights—just you two afterward? Start conservative; you can always expand boundaries later."
        },
        {
          question: "How do we find other couples to play with?",
          answer: "Apps like SPICE, Feeld, and SDC (Swingers Date Club) are popular. Lifestyle clubs and meet-and-greets offer face-to-face connections. Be honest in your profile about experience level, interests, and boundaries. Look for couples with similar experience levels and communication styles. Chemistry matters—it's okay to meet several couples before finding the right match. Many successful couples emphasize friendship and connection first, play second."
        },
        {
          question: "What if one of us wants to stop during an encounter?",
          answer: "You should ALWAYS stop immediately if either partner is uncomfortable. Have a safe word or signal established beforehand (something subtle like touching your ear, or a clear word like 'pause' or 'yellow/red'). Your relationship comes first, always. Good lifestyle couples will completely understand and respect this—anyone who doesn't isn't worth playing with. After stopping, leave the situation if needed and debrief privately about what happened and how you both feel."
        }
      ]
    },
    {
      title: "BDSM/Kink - For Singles",
      icon: User,
      color: "red",
      faqs: [
        {
          question: "I'm new to BDSM—where do I even start?",
          answer: "Start with education: read books like 'The New Topping Book' and 'The New Bottoming Book,' take the BDSM quiz on SPICE, and join online communities like FetLife. Attend local munches (casual social gatherings for kinksters) to meet people in a vanilla setting. Explore what interests you through research and fantasy before diving into physical activities. Understanding consent, negotiation, and safety should be your foundation before exploring any specific kinks."
        },
        {
          question: "How do I know if I'm dominant, submissive, or a switch?",
          answer: "This often takes time and exploration to figure out. Some people have strong preferences from the start; others discover their preferences through experience. Take quizzes (like SPICE's BDSM Quiz), read about different roles, and imagine scenarios. It's also okay to be a switch (enjoying both roles) or to have preferences that vary based on the partner or situation. Your desires can evolve over time—there's no rush to label yourself permanently."
        },
        {
          question: "What's the difference between BDSM dating and vanilla dating?",
          answer: "BDSM dating typically involves more upfront communication about desires, boundaries, and compatibility. Negotiation (discussing what you want to try, limits, and safe words) is standard practice. The focus is often on specific kink compatibility, not just general attraction. However, emotional connection, respect, and trust are just as important—BDSM isn't a shortcut to intimacy. Many kinksters date 'vanilla style' initially and introduce kink gradually as trust develops."
        },
        {
          question: "How do I safely meet someone for BDSM play?",
          answer: "Never skip safety steps: 1) Video chat before meeting in person, 2) Meet first in public for coffee/drinks, 3) Tell a trusted friend where you'll be and establish a check-in system, 4) Share the person's profile/contact with your safety person, 5) Start with less intense activities while building trust, 6) Don't do intoxicated play with new partners, 7) Use safe words/signals, 8) For first play sessions, keep it to a limited time in a location you can easily leave. Trust your instincts—if something feels off, it probably is."
        },
        {
          question: "What if I'm interested in extreme kinks—is that normal?",
          answer: "Yes, having intense fantasies is normal and doesn't make you 'broken' or 'wrong.' However, fantasy doesn't always equal reality. Start with lighter versions of your interests and build up gradually. Find partners experienced in those kinks who prioritize safety and consent. Join online communities focused on your specific interests to learn proper safety protocols. Remember: Safe, Sane, and Consensual (SSC) or Risk-Aware Consensual Kink (RACK) should guide all activities. Never feel pressured to do things you're not ready for, regardless of how 'extreme' your fantasies are."
        }
      ]
    },
    {
      title: "BDSM/Kink - For Couples",
      icon: Users,
      color: "red",
      faqs: [
        {
          question: "How do we introduce BDSM into our existing relationship?",
          answer: "Start with open, judgment-free conversation. Share articles, take the BDSM quiz together, or watch educational content. Begin with light exploration: silk scarves for restraints, blindfolds, temperature play with ice, or light spanking. Discuss fantasies without pressure to act on them immediately. Many couples find that reading erotica together or creating a 'yes/no/maybe' checklist helps identify shared interests without awkwardness. Remember: BDSM is about enhancing connection and pleasure, not fixing relationship problems."
        },
        {
          question: "What if we're interested in different roles or kinks?",
          answer: "This is common! First, identify overlapping interests—you might discover shared middle ground. For non-overlapping interests, consider: 1) Taking turns exploring each person's interests, 2) Compromising on lighter versions of activities, 3) Having some solo exploration (with agreed boundaries), 4) Finding creative ways to merge different desires. Communication and flexibility are key. Not every couple needs to be perfectly compatible in every kink—what matters is mutual respect and willingness to explore each other's pleasure."
        },
        {
          question: "How do we establish dominant/submissive roles without it feeling weird?",
          answer: "Start gradually and don't force 24/7 dynamics if they don't feel natural. Try 'scenes' with clear beginnings and endings—you're in role during the scene, then return to your equal partnership. Use language that feels authentic to you (Sir/Mistress might feel silly—find what works). Practice giving and following commands in low-stakes situations. Debrief after each scene: what felt good? What felt awkward? Adjust based on feedback. Many couples maintain completely equal relationships outside the bedroom and only adopt roles during intimate time."
        },
        {
          question: "What are safe words, and how do we use them?",
          answer: "Safe words are clear signals to stop or slow down. Common systems: 'Red' = stop immediately, 'Yellow' = slow down/check in, 'Green' = all good, keep going. Some couples use words that wouldn't naturally come up (like 'pineapple' or 'Oklahoma'). Non-verbal signals are important too (holding an object that can be dropped, or a specific gesture if gagged). Agree on safe words before any play, respect them absolutely without question or guilt, and check in afterward about what prompted their use. Safe words are tools of trust, not failure."
        },
        {
          question: "How do we handle aftercare?",
          answer: "Aftercare is the time after intense play where you reconnect, comfort each other, and return to baseline. It might include: physical comfort (cuddling, blankets, water), emotional reassurance, gentle conversation about the experience, or quiet companionship. Both partners may need aftercare—dominants can experience 'dom drop' just like submissives experience 'sub drop' (emotional/physical crash after intense scenes). Discuss beforehand what each person needs, and build in time for it. Don't skip this step—it's crucial for emotional wellbeing and relationship health."
        },
        {
          question: "Is it normal to feel embarrassed or awkward when starting BDSM?",
          answer: "Completely normal! You're trying new things and being vulnerable in new ways. Expect some awkwardness, laughter, and moments that don't go perfectly. Give yourselves permission to mess up, break character, and learn together. Some couples find it helpful to debrief with humor: 'That was weird, but let's try it again differently.' The awkwardness usually fades with practice and familiarity. Focus on exploration and connection rather than perfection. The fact that you're both willing to try is what matters most."
        }
      ]
    },
    {
      title: "ENM/Polyamory - For Singles",
      icon: User,
      color: "purple",
      faqs: [
        {
          question: "What's the difference between ENM and polyamory?",
          answer: "ENM (Ethical Non-Monogamy) is an umbrella term for any consensual non-monogamous relationship structure. Polyamory specifically refers to having multiple romantic relationships with everyone's knowledge and consent. Other ENM styles include swinging (primarily sexual), open relationships (committed couple with outside casual partners), and relationship anarchy (rejecting relationship hierarchies). Polyamory typically emphasizes emotional connections and romantic relationships, not just sexual ones."
        },
        {
          question: "How do I date someone who's already in a relationship?",
          answer: "First, ensure their partner(s) know about you and consent to the relationship—otherwise it's cheating, not ENM. Ask about their relationship structure: Are they hierarchical (primary/secondary partners) or non-hierarchical? What time and emotional availability do they have? Understand that you might not be their 'primary' if they practice hierarchy—decide if that works for you. Build your own relationship with them independently, but respect their existing commitments. Good poly partners will communicate clearly about expectations and limitations."
        },
        {
          question: "What if I want a relationship with someone who's polyamorous, but I'm monogamous?",
          answer: "This is called 'mono-poly' relationships and can work, but requires honest self-reflection. Can you genuinely be comfortable with your partner having other relationships? It's not about being 'evolved enough'—it's about what genuinely works for you. Many mono-poly relationships fail because the monogamous partner hopes their partner will 'choose' them eventually. If you need exclusivity for your happiness, dating someone poly isn't fair to either of you. Be honest about your needs from the start."
        },
        {
          question: "How do I avoid being someone's 'secondary' when I want to be a priority?",
          answer: "Look for people who practice non-hierarchical polyamory or who are solo poly (prioritizing their own autonomy rather than couple-centric structures). In initial conversations, ask directly about how they structure relationships and what time/emotional availability they realistically have. If someone already has a highly enmeshed primary partnership, that's probably not changing. Don't enter relationships hoping to escalate your position—believe what people tell you about their capacity and structure. Your needs for priority and availability are valid; find partners whose relationship structure can accommodate them."
        },
        {
          question: "What questions should I ask when dating someone who's poly?",
          answer: "Essential questions: 1) How long have you been practicing polyamory?, 2) Does your partner/do your partners know about me?, 3) What's your relationship structure (hierarchical, non-hierarchical, etc.)?, 4) How much time/emotional availability do you realistically have?, 5) How do you handle scheduling and prioritization?, 6) What happens if partners have conflicts or emergencies?, 7) What are your safer sex practices and testing schedules?, 8) How do you handle metamour (partner's partner) relationships?, 9) What would relationship escalation look like with you (moving in, marriage, etc.)?, 10) What's your conflict resolution style?"
        }
      ]
    },
    {
      title: "ENM/Polyamory - For Couples",
      icon: Users,
      color: "purple",
      faqs: [
        {
          question: "How do we open our relationship without ruining it?",
          answer: "Start with extensive reading and discussion before any action. Books like 'The Ethical Slut,' 'More Than Two,' and 'Polysecure' are essential. Discuss motivations honestly—opening up won't fix existing problems. Some couples start with a 'soft opening': dating separately without sex initially, or only attending events together. Set initial boundaries knowing they'll evolve. Many successful poly couples emphasize: open communication, regular check-ins, therapy or couples counseling, addressing jealousy immediately, and prioritizing your foundational relationship during the transition."
        },
        {
          question: "Should we date together or separately?",
          answer: "This depends on your goals. Dating as a couple (seeking a 'third') is often called 'unicorn hunting' and can be challenging—single people interested in dating couples are rare, and couple privilege can create unhealthy dynamics. Dating separately often works better: each person builds their own relationships independently. However, some couples do successfully date together. The key is treating any additional partner as a full person with their own needs, not as an accessory to your relationship. Consider whether you're genuinely offering what you're asking for."
        },
        {
          question: "What's 'couple privilege' and how do we avoid it?",
          answer: "Couple privilege means your existing relationship gets default priority in time, decisions, and emotional investment, often at the expense of newer partners. To avoid it: 1) Give other partners genuine say in decisions affecting them, 2) Don't use 'veto power' to unilaterally end your partner's other relationships, 3) Allocate quality time to all partners, not just leftover time, 4) Include other partners in important life events when appropriate, 5) Don't treat others as less important or 'secondary' by default, 6) Avoid rules that protect your comfort at others' expense. Consider non-hierarchical polyamory where all relationships can develop naturally."
        },
        {
          question: "How do we handle one partner finding a connection faster than the other?",
          answer: "This is extremely common and often challenging. The partner who's 'behind' may feel jealous, insecure, or that the arrangement is unfair. Address this with: 1) Extra quality time together, 2) Reassurance and appreciation, 3) Acknowledging feelings without blame, 4) Examining if there are practical barriers (the 'behind' partner's dating approach, limited time due to childcare, etc.), 5) Remembering that relationships develop on their own timelines—forcing equality doesn't work. Some couples set a 'pause' option if the imbalance becomes painful. Consider couples therapy to navigate this transition."
        },
        {
          question: "What about our kids—how does polyamory affect them?",
          answer: "Children can thrive in poly families with appropriate handling. Key considerations: 1) Age-appropriate explanations (young kids don't need details, just 'these are our close friends'), 2) Stability matters more than structure—avoid introducing partners until relationships are established, 3) Maintain consistent parenting and household routines, 4) Be prepared for questions from schools and other parents, 5) Consider your community's acceptance level, 6) Ensure your legal protections are in place (wills, medical directives, guardianship), 7) Some families are fully 'out,' others keep poly aspects private from kids until they're older. Research shows kids do best with clear structures and loving, stable adults—not a specific family formation."
        },
        {
          question: "How do we manage scheduling and time with multiple partners?",
          answer: "Shared calendar apps (Google Calendar, etc.) are essential. Schedule regular dates with each partner, not just 'leftover' time. Some poly folks use: 1) Rotating schedules (certain days for certain partners), 2) Anchored dates (first Friday with Partner A, third Saturday with Partner B, etc.), 3) Flexible systems with advance planning. Include time for yourself and your primary/existing relationships. Communicate clearly about time constraints and availability. When conflicts arise, use fair decision-making (not always defaulting to the same partner/relationship). Many poly folks emphasize: scheduling isn't romantic, but it's necessary and respectful."
        }
      ]
    },
    {
      title: "Hotwifing - For Couples",
      icon: Users,
      color: "orange",
      faqs: [
        {
          question: "What exactly is hotwifing, and how is it different from swinging?",
          answer: "Hotwifing is when a woman (the 'hotwife') has sexual experiences with other men while her husband/partner watches, knows about it, or is told about it afterward—with his full consent and often encouragement. The focus is on the wife's pleasure and the husband's enjoyment of her being desired. Unlike swinging (where both partners typically participate equally), hotwifing is primarily about the wife's extramarital experiences. It's also different from cuckolding—hotwifing emphasizes the wife's desirability and the husband's pride, while cuckolding often includes elements of humiliation."
        },
        {
          question: "How do I (the husband) bring up hotwifing without my wife thinking I don't want her?",
          answer: "Frame it as desire, not rejection: 'You're so attractive, I love the idea of other men wanting you' rather than 'I want you to sleep with other men.' Emphasize that this is about celebrating her desirability, not replacing you. Share fantasies gradually—maybe start with fantasizing together during sex about what others might find attractive about her. Be prepared for initial confusion or rejection—this isn't a common fantasy women are taught to expect. Reassure her repeatedly that you're attracted to her and this comes from desire, not disinterest. Consider sharing articles or posts from hotwifing communities so she sees it's a real lifestyle."
        },
        {
          question: "I'm the wife—I'm interested but also scared. What if this changes how my husband sees me?",
          answer: "This fear is completely valid and common. Before starting, have extensive conversations about: 1) His motivations (is this truly something he wants, or is he testing you?), 2) What happens if he gets jealous afterward?, 3) How you'll handle changes in your dynamic, 4) Can you both stop anytime without judgment?, 5) Does he see this as you being adventurous or as something negative? Start slowly (flirting with others while out, photos/sexting before physical meetups) to gauge his reactions. Many couples find that clear communication and reassurance throughout the experience strengthen their bond. Trust your instincts—if something feels off, pump the brakes."
        },
        {
          question: "How do we find 'bulls' (other men) for hotwifing?",
          answer: "Apps like SPICE, Feeld, and SLS (SwingLifeStyle) have hotwifing communities. Be clear in your profile about what you're seeking. Look for: 1) Men who understand the dynamic and respect the couple's relationship, 2) Good communicators who can discuss boundaries, 3) Clean STI tests and safer sex practices, 4) Respectful behavior toward both partners, 5) Understanding that the husband might be involved (watching, photos, or just knowing details). Red flags: men who try to cut out the husband, pressure for bareback sex, or don't respect boundaries. Many couples find 'lifestyle-experienced' men are better partners than vanilla men who don't understand the dynamic."
        },
        {
          question: "What boundaries should we set for hotwifing?",
          answer: "Common boundaries to discuss: 1) Condom use (always/sometimes/never), 2) Where does she meet men (our home/hotels/his place/never our home), 3) Does husband watch/join/stay away?, 4) Are ongoing relationships with bulls okay or one-time only?, 5) Can she develop feelings or is it purely physical?, 6) Communication during encounters (texts/photos/nothing until after?), 7) What acts are okay (kissing, oral, full intercourse, anal?), 8) Can she meet bulls without you present?, 9) Social media or phone contact between meets?, 10) Are 'dates' okay or just hookups? Start conservative and adjust as you learn what works for both of you."
        },
        {
          question: "How do we handle jealousy and insecurity in hotwifing?",
          answer: "Jealousy is normal, even when you logically want this. Strategies: 1) Stop immediately if either feels overwhelmed—your relationship comes first, 2) Extra intimacy and reassurance before/after encounters, 3) Reclaim sex (intimate connection afterward), 4) Regular check-ins about feelings, 5) Process emotions without blame, 6) Consider seeing a sex-positive therapist, 7) Take breaks if needed. Common triggers for husbands: feeling replaced/inadequate, wife seeming more enthusiastic with bulls, or unexpected emotional connections. For wives: feeling used, objectified, or worried about husband's judgment. Address these immediately. Many successful hotwife couples emphasize that their connection strengthens because they face these challenges together."
        }
      ]
    },
    {
      title: "General Lifestyle Questions",
      icon: Sparkles,
      color: "blue",
      faqs: [
        {
          question: "How do I know which lifestyle is right for me?",
          answer: "Start with self-reflection: What attracts you? Sexual variety? Emotional connections with multiple people? Specific kinks or power dynamics? Celebrating your partner's sexuality? Take quizzes (like SPICE's BDSM and Hotwifing quizzes), read about different lifestyles, and notice which descriptions excite you vs. which make you anxious. Remember: you can try things slowly, you don't have to commit to one lifestyle forever, and it's okay to realize something isn't for you. Many people blend elements from different lifestyles rather than fitting one box perfectly."
        },
        {
          question: "Is it normal to be interested in the lifestyle but also scared?",
          answer: "Completely normal! You're considering something outside mainstream relationship norms, which naturally brings up fear of judgment, relationship changes, or the unknown. Fear doesn't mean you shouldn't explore—it means you should proceed thoughtfully. Start with education, fantasy, and discussion before any action. Fear with excitement can signal healthy growth outside your comfort zone. Fear with dread or pressure is a warning sign to slow down. Trust your gut, take your time, and remember you can always stop or slow down at any point."
        },
        {
          question: "What if my partner isn't interested in the lifestyle?",
          answer: "Accept this without trying to pressure or change them. Alternative lifestyles work only with genuine enthusiasm from all involved—anything else breeds resentment and harms your relationship. You have options: 1) Accept monogamy and let go of the lifestyle, 2) Explore lifestyle interests through fantasy only (role-play, erotica, etc.), 3) Attend educational events together with no pressure to participate, or 4) If this is truly essential to your happiness and they're firmly opposed, consider if you're compatible long-term. What won't work: coercion, ultimatums, or 'trying it for them.' Respect their boundaries as you'd want yours respected."
        },
        {
          question: "How do we stay safe (health-wise) in the lifestyle?",
          answer: "Essential safety practices: 1) Barrier protection (condoms) for all penetrative acts—even oral for some, 2) Regular STI testing (every 3-6 months or between partners), 3) Honest communication about test results and number of partners, 4) Get HPV and Hepatitis B vaccines, 5) Understand each partner's risk profile and fluid-bonding (barrier-free sex) agreements, 6) Be prepared to show recent test results, 7) Don't play while symptomatic with anything, 8) Know the signs of common STIs. Remember: the lifestyle community generally has LOWER STI rates than the general population because of better testing and communication practices. Don't skip this!"
        },
        {
          question: "What if we try the lifestyle and it's not for us?",
          answer: "That's completely okay and actually common! Many people explore and decide it's not their thing—that doesn't mean you failed. Be honest with each other about the experience, give yourselves time to process, and return to whatever relationship structure feels right. Most importantly: don't let guilt or sunk-cost fallacy ('we've come this far') keep you in a lifestyle that doesn't serve you. The exploration itself can strengthen your relationship by improving communication and deepening trust. What you learned about each other is valuable even if you don't continue."
        },
        {
          question: "How do we deal with judgment from friends and family?",
          answer: "First, decide: do you need to tell them? Many lifestyle folks keep this completely private—it's your sex life, not public business. If you do share: 1) Choose carefully who you tell (sex-positive, open-minded people), 2) You don't owe anyone details or justifications, 3) Set clear boundaries: 'This works for us, and we're not seeking advice or opinions,' 4) Be prepared for changed relationships—some people can't handle it, 5) Find community in the lifestyle where you're understood and accepted. Remember: people's discomfort says more about their limitations than your choices. Surround yourself with supportive people."
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; icon: string; iconBg: string }> = {
      pink: { bg: "bg-pink-500/10", border: "border-pink-500/30", icon: "text-pink-500", iconBg: "bg-pink-500/20" },
      red: { bg: "bg-red-500/10", border: "border-red-500/30", icon: "text-red-500", iconBg: "bg-red-500/20" },
      purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", icon: "text-purple-500", iconBg: "bg-purple-500/20" },
      orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", icon: "text-orange-500", iconBg: "bg-orange-500/20" },
      blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", icon: "text-blue-500", iconBg: "bg-blue-500/20" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <>
      <SEO
        title="Beginner Lifestyle FAQ - Singles & Couples | SPICE"
        description="Comprehensive FAQ for singles and couples exploring swinging, BDSM, ENM, polyamory, and hotwifing. Get answers to your questions about starting in the lifestyle."
        keywords="lifestyle FAQ, swinging questions, BDSM for beginners, polyamory FAQ, hotwifing questions, ENM advice, singles in lifestyle, couples swinging"
        canonical="https://thespiceapp.com/start/beginner-faq"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />

        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Beginner FAQ</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Beginner Lifestyle FAQ
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Honest answers to real questions about exploring swinging, BDSM, ENM, polyamory, and hotwifing.
                Whether you're single or partnered, we've got you covered.
              </p>
            </div>

            {/* FAQ Sections */}
            <div className="space-y-8">
              {faqSections.map((section, sectionIndex) => {
                const Icon = section.icon;
                const colors = getColorClasses(section.color);
                
                return (
                  <div key={sectionIndex} className={`${colors.bg} border ${colors.border} rounded-2xl overflow-hidden`}>
                    {/* Section Header */}
                    <div className="p-6 border-b border-border/50">
                      <div className="flex items-center gap-4">
                        <div className={`${colors.iconBg} rounded-xl p-3`}>
                          <Icon className={`w-6 h-6 ${colors.icon}`} />
                        </div>
                        <h2 className="text-2xl font-bold">{section.title}</h2>
                      </div>
                    </div>

                    {/* FAQs */}
                    <div className="divide-y divide-border/30">
                      {section.faqs.map((faq, faqIndex) => {
                        const key = `${sectionIndex}-${faqIndex}`;
                        const isOpen = openIndex === key;
                        
                        return (
                          <div key={faqIndex} className="bg-background/30">
                            <button
                              onClick={() => toggleFAQ(sectionIndex.toString(), faqIndex)}
                              className="w-full px-6 py-4 text-left flex items-start justify-between gap-4 hover:bg-background/50 transition-colors"
                            >
                              <span className="font-semibold pr-8">{faq.question}</span>
                              <ChevronDown 
                                className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''} ${colors.icon}`}
                              />
                            </button>
                            {isOpen && (
                              <div className="px-6 pb-4">
                                <p className="text-muted-foreground leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join SPICE to connect with experienced community members who can offer guidance and support as you explore the lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/download" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all"
                >
                  Join SPICE Free
                </a>
                <a 
                  href="/quiz" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-background/50 hover:bg-background/80 border border-border font-semibold rounded-full transition-all"
                >
                  Take Lifestyle Quizzes
                </a>
              </div>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default BeginnerLifestyleFAQ;
