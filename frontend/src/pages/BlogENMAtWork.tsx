import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, Briefcase, Shield, CheckCircle, BookOpen, Sparkles, Eye, EyeOff, Users, MessageCircle, Lock, AlertTriangle, Scale, Building } from "lucide-react";

const BlogENMAtWork = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ENM & Polyamory at Work: Navigating Professional Life When Youre Open (or Discreet)",
    "description": "Strategies for handling workplace dynamics when you practice ethical non-monogamy or polyamory.",
    "author": { "@type": "Organization", "name": "SPICE" },
    "datePublished": "2025-12-28",
    "dateModified": "2025-12-28"
  };

  const disclosureSpectrum = [
    {
      level: "Fully Closeted",
      description: "No one at work knows anything about your relationship structure.",
      pros: ["Maximum privacy", "No risk of discrimination", "Simplest approach"],
      cons: ["Cannot bring partners to events", "Must manage stories carefully", "Can feel isolating"],
      bestFor: "Conservative industries, early career, uncertain job security"
    },
    {
      level: "Selectively Out",
      description: "A few trusted colleagues know, but it is not public.",
      pros: ["Some support at work", "Can be more authentic with select people", "Maintains general privacy"],
      cons: ["Risk of information spreading", "Must trust people's discretion", "Can create in-group/out-group dynamics"],
      bestFor: "Most professionals who want some authenticity without full exposure"
    },
    {
      level: "Passively Out",
      description: "You do not hide it, but you do not announce it either.",
      pros: ["Authenticity without activism", "If it comes up, you are honest", "Less mental load than hiding"],
      cons: ["May still face questions or judgment", "Ambiguity can be uncomfortable", "Others may out you"],
      bestFor: "Secure positions in progressive environments"
    },
    {
      level: "Openly Out",
      description: "Your relationship structure is known and you are comfortable discussing it.",
      pros: ["Full authenticity", "Can advocate for others", "No hiding required"],
      cons: ["Potential discrimination", "Constant explanation", "May affect opportunities"],
      bestFor: "Entrepreneurs, academics, progressive industries, advocates"
    }
  ];

  const nosyCoworkerScripts = [
    {
      situation: "Who was that person in your Instagram story?",
      deflect: "Oh, just a friend! We had a great time at that restaurant.",
      honest: "That is someone I am dating. How was your weekend?",
      boundary: "I prefer to keep my personal life personal at work. How about that project deadline?"
    },
    {
      situation: "Is your partner okay with you traveling with [other person]?",
      deflect: "We have a great relationship and trust each other completely.",
      honest: "We have an open relationship, so yes! We are both happy.",
      boundary: "That is a pretty personal question. What did you need regarding the trip logistics?"
    },
    {
      situation: "I heard you have multiple partners. Is that true?",
      deflect: "I am not sure where you heard that. Anyway, about the quarterly report...",
      honest: "Yes, I practice polyamory. It works well for me. Any questions?",
      boundary: "I do not discuss my relationship details at work. Was there something work-related you needed?"
    },
    {
      situation: "How does your spouse feel about [other partner]?",
      deflect: "We are all good! Hey, did you see the email from the client?",
      honest: "They actually get along great. We practice ethical non-monogamy.",
      boundary: "I appreciate the curiosity, but I keep my relationships private at work."
    }
  ];

  const linkedInTips = [
    "Review your privacy settings regularly—control who sees your connections and activity",
    "Consider whether to list relationship-related interests or groups",
    "Think carefully before connecting with partners, metamours, or lifestyle friends",
    "Google yourself regularly to see what potential employers might find",
    "Use a professional photo that does not include partners or lifestyle-related content",
    "If you blog or podcast about ENM, decide whether to link it to your professional identity"
  ];

  const hrConsiderations = [
    {
      topic: "Workplace Romance Policies",
      details: "Most policies focus on conflicts of interest and power dynamics, not relationship structure. If your partners do not work with you, policies likely do not apply."
    },
    {
      topic: "Benefits and Insurance",
      details: "Most employers only allow one spouse on benefits. Domestic partner benefits may help in some cases. This is an area where ENM folks often face systemic disadvantage."
    },
    {
      topic: "Emergency Contacts",
      details: "You can typically list anyone as an emergency contact. Consider which partners should be listed and ensure they have necessary information."
    },
    {
      topic: "Discrimination Protections",
      details: "ENM/poly is not a protected class in most jurisdictions. Discrimination based on relationship structure is generally legal, though some argue it falls under marital status protections."
    },
    {
      topic: "Social Media Policies",
      details: "Review your employer's social media policy. Some restrict content that could 'reflect poorly' on the company—vague language that could theoretically apply to ENM content."
    }
  ];

  const whoNeedsToKnow = [
    {
      person: "Direct Manager",
      maybeIf: "They will meet your partners at events, you need schedule flexibility for multiple relationships, or you have a strong, trusting relationship.",
      probablyNot: "Conservative manager, new job, uncertain dynamics, no practical need."
    },
    {
      person: "HR",
      maybeIf: "You face harassment or discrimination, need benefits consultation, or there is a workplace policy question.",
      probablyNot: "No specific need, conservative company culture, you prefer privacy."
    },
    {
      person: "Close Colleagues",
      maybeIf: "You have genuine friendships, they have shown open-mindedness, you want support.",
      probablyNot: "Office gossips, competitive colleagues, you do not trust their discretion."
    },
    {
      person: "Clients/Customers",
      maybeIf: "Almost never relevant. Your relationship structure is not their business.",
      probablyNot: "Virtually always. Keep client relationships professional."
    }
  ];

  const industryNotes = [
    {
      industry: "Tech/Startups",
      climate: "Generally progressive, especially in major hubs. Many ENM folks work openly in tech.",
      caution: "Company culture varies widely. Startups can be liberal or surprisingly conservative."
    },
    {
      industry: "Academia",
      climate: "Often accepting, particularly in humanities and social sciences. Many poly researchers are out.",
      caution: "Conservative institutions exist. Tenure provides more safety than adjunct positions."
    },
    {
      industry: "Healthcare",
      climate: "Mixed. Mental health fields may be more accepting than traditional medicine.",
      caution: "Patient-facing roles may require more discretion. Board licensure concerns."
    },
    {
      industry: "Finance/Law",
      climate: "Generally conservative. Partner tracks may be particularly scrutinizing.",
      caution: "High stakes for reputation. Being out could affect client relationships."
    },
    {
      industry: "Creative/Media",
      climate: "Often progressive. Many openly ENM people work in creative fields.",
      caution: "Public-facing roles require considering audience perception."
    },
    {
      industry: "Government/Military",
      climate: "Conservative and security-clearance-sensitive.",
      caution: "ENM can affect security clearances in some cases. Proceed with extreme caution."
    }
  ];

  return (
    <>
      <SEO
        title="ENM & Polyamory at Work: Navigating Professional Life | SPICE"
        description="How to handle workplace dynamics when you practice ethical non-monogamy. Strategies for nosy coworkers, HR policies, LinkedIn privacy, and deciding who needs to know."
        keywords="polyamory at work, ENM workplace, out at work poly, polyamory professional life, ENM career, workplace discrimination poly, poly LinkedIn, hiding polyamory at work, ENM HR policies, coming out at work poly"
        canonical="https://thespiceapp.com/blog/enm-at-work"
        structuredData={structuredData}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">ENM & POLYAMORY</span>
                <span className="text-xs text-muted-foreground">16 min read</span>
                <span className="text-xs text-muted-foreground">December 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                ENM & Polyamory at Work
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Strategies for handling nosy coworkers, LinkedIn privacy, workplace romance policies, and deciding who needs to know about your relationship structure.
              </p>
            </div>

            {/* Featured Image */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-12 mb-12 text-center border border-primary/30">
              <Briefcase className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Balancing Authenticity and Professional Life</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                In This Guide
              </h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#disclosure" className="text-primary hover:underline">→ The Disclosure Spectrum</a></li>
                <li><a href="#nosy" className="text-primary hover:underline">→ Handling Nosy Coworkers</a></li>
                <li><a href="#digital" className="text-primary hover:underline">→ Digital Privacy (LinkedIn, Social)</a></li>
                <li><a href="#hr" className="text-primary hover:underline">→ HR and Policy Considerations</a></li>
                <li><a href="#who-knows" className="text-primary hover:underline">→ Who Needs to Know?</a></li>
                <li><a href="#industries" className="text-primary hover:underline">→ Industry-Specific Notes</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section className="mb-12">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For many ENM and polyamorous people, work presents a unique challenge: How much of your authentic self do you bring to your professional life? There is no universal right answer—it depends on your industry, company culture, career stage, and personal comfort level.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This guide will help you navigate workplace dynamics thoughtfully, whether you choose to be fully out, completely private, or somewhere in between.
                  </p>
                </div>
              </section>

              <section id="disclosure" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Scale className="w-7 h-7 text-primary" />
                  The Disclosure Spectrum
                </h2>
                <p className="text-muted-foreground mb-6">
                  There is no binary "out" or "closeted"—disclosure exists on a spectrum. Consider where you want to be:
                </p>
                <div className="space-y-6">
                  {disclosureSpectrum.map((level, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {idx === 0 && <EyeOff className="w-5 h-5 text-gray-400" />}
                        {idx === 1 && <Eye className="w-5 h-5 text-blue-400" />}
                        {idx === 2 && <Eye className="w-5 h-5 text-green-400" />}
                        {idx === 3 && <Eye className="w-5 h-5 text-primary" />}
                        <h3 className="text-lg font-bold text-white">{level.level}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{level.description}</p>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="bg-green-500/10 rounded-lg p-3">
                          <span className="font-bold text-green-400 block mb-1">Pros</span>
                          <ul className="space-y-1 text-muted-foreground">
                            {level.pros.map((pro, pIdx) => (
                              <li key={pIdx}>• {pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-red-500/10 rounded-lg p-3">
                          <span className="font-bold text-red-400 block mb-1">Cons</span>
                          <ul className="space-y-1 text-muted-foreground">
                            {level.cons.map((con, cIdx) => (
                              <li key={cIdx}>• {con}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-primary/10 rounded-lg p-3">
                          <span className="font-bold text-primary block mb-1">Best For</span>
                          <p className="text-muted-foreground">{level.bestFor}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="nosy" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-7 h-7 text-primary" />
                  Handling Nosy Coworkers: Scripts
                </h2>
                <div className="space-y-6">
                  {nosyCoworkerScripts.map((item, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                      <h3 className="font-bold text-amber-400 mb-4">"{item.situation}"</h3>
                      <div className="space-y-3">
                        <div className="bg-gray-500/10 rounded-lg p-3">
                          <span className="text-xs font-bold text-gray-400 uppercase">Deflect</span>
                          <p className="text-muted-foreground text-sm mt-1">"{item.deflect}"</p>
                        </div>
                        <div className="bg-green-500/10 rounded-lg p-3">
                          <span className="text-xs font-bold text-green-400 uppercase">Honest</span>
                          <p className="text-muted-foreground text-sm mt-1">"{item.honest}"</p>
                        </div>
                        <div className="bg-primary/10 rounded-lg p-3">
                          <span className="text-xs font-bold text-primary uppercase">Boundary</span>
                          <p className="text-muted-foreground text-sm mt-1">"{item.boundary}"</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="digital" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Lock className="w-7 h-7 text-primary" />
                  Digital Privacy
                </h2>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <h3 className="font-bold text-white mb-4">LinkedIn and Professional Social Media</h3>
                  <div className="space-y-3">
                    {linkedInTips.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="hr" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Building className="w-7 h-7 text-primary" />
                  HR and Policy Considerations
                </h2>
                <div className="space-y-4">
                  {hrConsiderations.map((item, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5">
                      <h3 className="font-bold text-primary mb-2">{item.topic}</h3>
                      <p className="text-muted-foreground text-sm">{item.details}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="who-knows" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-7 h-7 text-primary" />
                  Who Needs to Know?
                </h2>
                <div className="space-y-4">
                  {whoNeedsToKnow.map((item, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5">
                      <h3 className="font-bold text-white mb-3">{item.person}</h3>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-green-500/10 rounded-lg p-3">
                          <span className="font-bold text-green-400 block mb-1">Maybe If:</span>
                          <p className="text-muted-foreground">{item.maybeIf}</p>
                        </div>
                        <div className="bg-red-500/10 rounded-lg p-3">
                          <span className="font-bold text-red-400 block mb-1">Probably Not:</span>
                          <p className="text-muted-foreground">{item.probablyNot}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="industries" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Briefcase className="w-7 h-7 text-primary" />
                  Industry-Specific Notes
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {industryNotes.map((item, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5">
                      <h3 className="font-bold text-primary mb-2">{item.industry}</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        <strong className="text-green-400">Climate:</strong> {item.climate}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        <strong className="text-amber-400">Caution:</strong> {item.caution}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/lifestyle/relationships-communication" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">Communication Guide</h3>
                    <p className="text-sm text-muted-foreground">Scripts for difficult conversations</p>
                  </Link>
                  <Link to="/guide/safety" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">Safety Guide</h3>
                    <p className="text-sm text-muted-foreground">Privacy and discretion strategies</p>
                  </Link>
                </div>
              </section>
            </article>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Your Community</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Connect with others who understand the unique challenges of balancing ENM with professional life.
              </p>
              <Link to="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all gap-2">
                <Heart className="w-5 h-5" />
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

export default BlogENMAtWork;