import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, Home, Users, Baby, Calendar, Gift, Shield, BookOpen, Sparkles, Quote, CheckCircle, Star, HandHeart, Cake, TreePine, Plane } from "lucide-react";

const BlogChosenFamily = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Building Your Chosen Family: How Polycules Become Lifelong Support Networks",
    "description": "Heartwarming examples and practical guidance for creating chosen family through polyamorous relationships.",
    "author": { "@type": "Organization", "name": "SPICE" },
    "datePublished": "2025-12-28",
    "dateModified": "2025-12-28"
  };

  const familyExamples = [
    {
      title: "The Holiday Quad",
      description: "Four adults who rotate hosting major holidays, creating traditions that blend all their backgrounds.",
      details: "Maya and Jordan started as a married couple who opened their relationship. Now they celebrate Thanksgiving with their partners Alex and Sam in a home they purchased together. Their children call all four adults by chosen family names, and they have created unique holiday traditions that honor everyone."
    },
    {
      title: "The Support Network Triad",
      description: "Three partners who supported each other through cancer treatment, job loss, and grief.",
      details: "When Elena was diagnosed with breast cancer, her partners David and Michelle coordinated care schedules, medical appointments, and emotional support that would have overwhelmed a single partner. They describe their polycule as their 'chosen safety net.'"
    },
    {
      title: "The Co-Parenting Constellation",
      description: "Five adults raising three children with intention, love, and clear agreements.",
      details: "The Chen-Williams-Garcia household includes biological parents, step-parents, and partners who have all committed to raising their children together. Weekly family meetings ensure everyone is aligned, and the kids benefit from multiple loving adults invested in their wellbeing."
    },
    {
      title: "The Retirement Polycule",
      description: "A group of older poly folks who planned their later years together.",
      details: "Tired of the nuclear family model that leaves elders isolated, this group of six partners and metamours purchased adjacent condos. They share meals, care responsibilities, and companionship while maintaining their own spaces. They call it 'intentional aging.'"
    }
  ];

  const sharedLivingTips = [
    {
      tip: "Start With Clear Agreements",
      details: "Before moving in together, document everything: finances, chores, privacy needs, guests, noise, shared spaces. What seems obvious now will not be later."
    },
    {
      tip: "Protect Individual Space",
      details: "Even in shared homes, everyone needs a space that is theirs alone. This could be a bedroom, an office, or even just a corner. Autonomy prevents resentment."
    },
    {
      tip: "Establish Financial Transparency",
      details: "Whether you pool finances or keep them separate, everyone should understand the household economy. Monthly money meetings prevent surprises."
    },
    {
      tip: "Create House Meetings",
      details: "Regular meetings (weekly or bi-weekly) to address logistics, concerns, and celebrations keep small issues from becoming big problems."
    },
    {
      tip: "Plan for Relationship Changes",
      details: "Relationships in the household may shift. Build agreements for what happens if people break up, want to move out, or want to bring in new partners."
    },
    {
      tip: "Respect Different Lifestyles",
      details: "Night owls and early birds, introverts and extroverts, neat freaks and messy creatives—household harmony requires respecting these differences."
    }
  ];

  const coParentingPrinciples = [
    {
      principle: "Children's Wellbeing Comes First",
      explanation: "Adult relationship dynamics should never negatively impact kids. If adults are in conflict, they resolve it away from children."
    },
    {
      principle: "Consistency Across Caregivers",
      explanation: "Core rules, values, and expectations should be consistent regardless of which adult is present. Regular alignment meetings help."
    },
    {
      principle: "Defined Roles",
      explanation: "Not every adult needs to be a 'parent.' Some may be aunts, uncles, or simply trusted adults. Clear roles prevent confusion."
    },
    {
      principle: "Child-Led Disclosure",
      explanation: "Let children decide how they describe their family to others. Give them language, but let them choose what to share."
    },
    {
      principle: "Therapy and Support",
      explanation: "Poly families benefit from family therapists who understand non-traditional structures. Proactive support prevents problems."
    },
    {
      principle: "Legal Protections",
      explanation: "Consult a family lawyer about custody agreements, medical authorization, and other legal protections for all caregivers."
    }
  ];

  const holidayIdeas = [
    {
      holiday: "Thanksgiving/Friendsgiving",
      ideas: ["Potluck where each household brings signature dishes", "Gratitude circle including all partners and metamours", "Rotating hosting duties yearly", "Creating new traditions unique to your polycule"]
    },
    {
      holiday: "Winter Holidays",
      ideas: ["Combined gift exchange with spending limits", "Polycule ornament making party", "Shared holiday morning before family visits", "New Year's vision boarding together"]
    },
    {
      holiday: "Birthdays & Anniversaries",
      ideas: ["Celebrating relationship anniversaries for all dyads", "Polycule-versary celebrating when the constellation formed", "Collaborative birthday planning", "Shared party for partners with close birthdays"]
    },
    {
      holiday: "Vacations",
      ideas: ["Group trips with private room options", "Time-shares between different partner combinations", "Metamour bonding trips", "Family vacations with all adults and children"]
    }
  ];

  const emotionalSafety = [
    "Regular one-on-one check-ins between all dyads",
    "Family meetings that include space for feelings, not just logistics",
    "Clear agreements about confidentiality within the polycule",
    "Protocols for when someone needs extra support",
    "Celebration rituals for wins, big and small",
    "Grief and loss protocols—for relationship changes and external losses",
    "Commitment to ongoing communication skill development"
  ];

  return (
    <>
      <SEO
        title="Building Your Chosen Family: How Polycules Become Lifelong Support Networks | SPICE"
        description="Discover how polyamorous relationships create chosen families. Examples of shared holidays, group homes, co-parenting, and emotional safety nets beyond blood ties."
        keywords="chosen family polyamory, polycule family, poly co-parenting, polyamorous household, shared living poly, poly holidays, metamour relationships, poly support network, intentional family, non-traditional family"
        canonical="https://thespiceapp.com/blog/chosen-family"
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
                <span className="text-xs text-muted-foreground">17 min read</span>
                <span className="text-xs text-muted-foreground">December 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Building Your Chosen Family
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Heartwarming examples of shared holidays, group homes, co-parenting, and emotional safety nets—how polycules become lifelong support networks beyond blood ties.
              </p>
            </div>

            {/* Featured Image */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-12 mb-12 text-center border border-primary/30">
              <Home className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Family Is Who You Choose</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                In This Guide
              </h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#redefining" className="text-primary hover:underline">→ Redefining Family</a></li>
                <li><a href="#examples" className="text-primary hover:underline">→ Real Chosen Family Examples</a></li>
                <li><a href="#shared-living" className="text-primary hover:underline">→ Shared Living Arrangements</a></li>
                <li><a href="#co-parenting" className="text-primary hover:underline">→ Co-Parenting in Polycules</a></li>
                <li><a href="#holidays" className="text-primary hover:underline">→ Holidays and Celebrations</a></li>
                <li><a href="#emotional" className="text-primary hover:underline">→ Building Emotional Safety Nets</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section id="redefining" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-7 h-7 text-primary" />
                  Redefining Family
                </h2>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The nuclear family—two parents, 2.5 kids, a house in the suburbs—has been sold as the ideal for generations. But this model leaves many people isolated: single adults, childless couples, estranged family members, LGBTQ+ folks rejected by biological families, and anyone whose life does not fit the mold.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Polyamorous communities are pioneering a different approach: <strong className="text-white">chosen family</strong>. These are intentional networks of love, support, and commitment that may or may not include biological ties, legal marriage, or traditional structures.
                  </p>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <p className="text-muted-foreground">
                      <strong className="text-green-400">The Vision:</strong> Imagine facing a health crisis with four loving partners coordinating your care. Imagine raising children with five devoted adults sharing the load. Imagine growing old surrounded by people who chose you, not obligated by blood. This is the promise of chosen family.
                    </p>
                  </div>
                </div>
              </section>

              <section id="examples" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Star className="w-7 h-7 text-primary" />
                  Real Chosen Family Examples
                </h2>
                <div className="space-y-6">
                  {familyExamples.map((example, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                      <h3 className="text-lg font-bold text-primary mb-2">{example.title}</h3>
                      <p className="text-white font-medium mb-3">{example.description}</p>
                      <p className="text-muted-foreground text-sm">{example.details}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="shared-living" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Home className="w-7 h-7 text-primary" />
                  Shared Living Arrangements
                </h2>
                <p className="text-muted-foreground mb-6">
                  Many polycules choose to live together—whether in one home, adjacent units, or nearby properties. Here is what makes it work:
                </p>
                <div className="space-y-4">
                  {sharedLivingTips.map((item, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-white mb-1">{item.tip}</h3>
                        <p className="text-sm text-muted-foreground">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="co-parenting" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Baby className="w-7 h-7 text-primary" />
                  Co-Parenting in Polycules
                </h2>
                <p className="text-muted-foreground mb-6">
                  Poly co-parenting can be beautiful—more hands, more love, more perspectives. But it requires extraordinary intentionality:
                </p>
                <div className="space-y-4">
                  {coParentingPrinciples.map((item, idx) => (
                    <div key={idx} className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
                      <h3 className="font-bold text-purple-400 mb-2">{item.principle}</h3>
                      <p className="text-sm text-muted-foreground">{item.explanation}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="holidays" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Gift className="w-7 h-7 text-primary" />
                  Holidays and Celebrations
                </h2>
                <p className="text-muted-foreground mb-6">
                  Holidays can be complicated in poly families—but also opportunities to create new, meaningful traditions:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {holidayIdeas.map((item, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5">
                      <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
                        {idx === 0 && <Cake className="w-4 h-4" />}
                        {idx === 1 && <TreePine className="w-4 h-4" />}
                        {idx === 2 && <Gift className="w-4 h-4" />}
                        {idx === 3 && <Plane className="w-4 h-4" />}
                        {item.holiday}
                      </h3>
                      <ul className="space-y-1">
                        {item.ideas.map((idea, iIdx) => (
                          <li key={iIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary">•</span>
                            {idea}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section id="emotional" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <HandHeart className="w-7 h-7 text-primary" />
                  Building Emotional Safety Nets
                </h2>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <p className="text-muted-foreground mb-6">
                    The deepest gift of chosen family is emotional security—knowing you are not alone. Here is how to build it:
                  </p>
                  <div className="space-y-3">
                    {emotionalSafety.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <Shield className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Continue Reading</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/blog/polycule-drama" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">Polycule Drama Prevention</h3>
                    <p className="text-sm text-muted-foreground">Keep your chosen family harmonious</p>
                  </Link>
                  <Link to="/blog/poly-time-management" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">Time Management</h3>
                    <p className="text-sm text-muted-foreground">Balance multiple family connections</p>
                  </Link>
                </div>
              </section>
            </article>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Your Chosen Family</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                SPICE connects you with people seeking deep, lasting connections—the building blocks of chosen family.
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

export default BlogChosenFamily;