import { Link } from "react-router-dom";
import { Heart, Users, MessageCircle, Shield, CheckCircle, Sparkles, AlertCircle, ExternalLink, BookOpen, Brain, Calendar, Target, Flame, Star, TrendingUp } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const ENMPolyamoryGuide = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete ENM & Polyamory Guide 2025: Structures, Communication & Relationship Tools",
    "description": "Ultimate guide to ethical non-monogamy and polyamory. Learn relationship structures, communication strategies, jealousy management, metamour dynamics, and how to practice ENM successfully with multiple partners.",
    "author": {
      "@type": "Organization",
      "name": "SPICE Dating App"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SPICE",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thespiceapp.com/logo.png"
      }
    },
    "datePublished": "2025-01-06",
    "dateModified": "2025-01-06",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://thespiceapp.com/lifestyle/enm-polyamory-guide"
    },
    "wordCount": "7000"
  };

  return (
    <>
      <SEO
        title="Complete ENM & Polyamory Guide 2025: Structures, Communication & Tools | SPICE"
        description="Ultimate ENM and polyamory guide: What is ethical non-monogamy, polyamorous relationships, hierarchical vs non-hierarchical poly, jealousy management, compersion, metamours, relationship agreements. 7000+ word comprehensive guide for beginners and experienced practitioners."
        keywords="ENM guide, polyamory guide, ethical non-monogamy, polyamorous relationships, ENM structures, open relationships, relationship agreements, compersion, metamours, hierarchical polyamory, relationship anarchy, kitchen table poly, parallel polyamory, solo poly, polycule"
        canonical="https://thespiceapp.com/lifestyle/enm-polyamory-guide"
        structuredData={structuredData}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500">ENM & Polyamory Lifestyle</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                The Complete ENM & Polyamory Guide
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about ethical non-monogamy and polyamory: relationship structures, communication tools, jealousy management, and building successful multi-partner relationships with love and intention.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <Link to="/quiz/enm" className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all group">
                <Brain className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Take the Quiz</h3>
                  <p className="text-sm text-muted-foreground">Discover your ENM style</p>
                </div>
              </Link>
              <Link to="/blog/enm-vs-polyamory" className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all group">
                <BookOpen className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">ENM vs Poly</h3>
                  <p className="text-sm text-muted-foreground">Understand the difference</p>
                </div>
              </Link>
              <Link to="/download" className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all group">
                <Users className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Join SPICE</h3>
                  <p className="text-sm text-muted-foreground">Find ENM partners</p>
                </div>
              </Link>
            </div>

            {/* Table of Contents */}
            <div className="mb-12">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  In This Complete Guide:
                </h2>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <a href="#what-is" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> What is ENM & Polyamory?
                  </a>
                  <a href="#difference" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> ENM vs Polyamory
                  </a>
                  <a href="#structures" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Relationship Structures
                  </a>
                  <a href="#hierarchical" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Hierarchical vs Non-Hierarchical
                  </a>
                  <a href="#getting-started" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Getting Started
                  </a>
                  <a href="#communication" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Communication Skills
                  </a>
                  <a href="#agreements" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Relationship Agreements
                  </a>
                  <a href="#jealousy" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Managing Jealousy
                  </a>
                  <a href="#compersion" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Cultivating Compersion
                  </a>
                  <a href="#metamours" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Metamour Relationships
                  </a>
                  <a href="#time-management" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Time & Energy Management
                  </a>
                  <a href="#coming-out" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Coming Out as Poly
                  </a>
                  <a href="#dating" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Polyamorous Dating
                  </a>
                  <a href="#mistakes" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Common Mistakes
                  </a>
                  <a href="#resources" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Books & Resources
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <article className="prose prose-lg max-w-none">
              
              {/* What is ENM & Polyamory */}
              <section id="what-is" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Heart className="w-8 h-8 text-primary" />
                    What is ENM & Polyamory?
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">Ethical Non-Monogamy (ENM)</strong> is an umbrella term for any relationship structure where partners consensually have multiple romantic, sexual, or intimate connections. The key word is <em className="text-primary">ethical</em> – everyone involved knows about and consents to the arrangement. ENM encompasses a wide range of relationship styles including polyamory, open relationships, swinging, and relationship anarchy.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">Polyamory</strong> (often shortened to "poly") specifically means having multiple loving, romantic relationships simultaneously with the knowledge and consent of everyone involved. Unlike some forms of ENM that may focus primarily on sexual connections, polyamory typically involves emotional intimacy, love, and commitment with multiple partners.
                    </p>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-blue-500" />
                        Core Principles of ENM & Polyamory
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span><strong className="text-foreground">Informed Consent:</strong> All parties have full knowledge and agree to the relationship structure</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span><strong className="text-foreground">Honesty & Transparency:</strong> Open communication about feelings, needs, and other relationships</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span><strong className="text-foreground">Respect for Boundaries:</strong> Honoring each person's limits and comfort levels</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span><strong className="text-foreground">Emotional Responsibility:</strong> Managing your own emotions while supporting partners</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span><strong className="text-foreground">Continuous Communication:</strong> Regular check-ins and renegotiation as needs evolve</span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-lg leading-relaxed">
                      ENM and polyamory are not about being unable to commit or having "commitment issues." Rather, they represent intentional relationship designs where people commit to multiple partners simultaneously, often with high levels of communication, trust, and emotional intelligence. Many practitioners report that polyamory requires <em>more</em> commitment and communication skills than traditional monogamy.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6">
                      <Link to="/blog/enm-vs-polyamory" className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg transition-all text-sm font-medium">
                        <BookOpen className="w-4 h-4" />
                        ENM vs Polyamory Explained
                      </Link>
                      <Link to="/start/beginner-faq#enm" className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg transition-all text-sm font-medium">
                        <MessageCircle className="w-4 h-4" />
                        ENM FAQ for Beginners
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* ENM vs Polyamory */}
              <section id="difference" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">ENM vs Polyamory: Understanding the Difference</h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      While all polyamory is ethical non-monogamy, not all ENM is polyamory. Think of ENM as the umbrella and polyamory as one type underneath it. Here's how they differ:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-purple-500" />
                          Ethical Non-Monogamy (ENM)
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Umbrella term for all consensual non-monogamy</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>May or may not involve emotional connections</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Includes swinging, open relationships, relationship anarchy</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Can focus primarily on sexual experiences</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>May have rules about emotional attachment</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Heart className="w-5 h-5 text-blue-500" />
                          Polyamory
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Specific form of ENM focusing on multiple loves</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Emphasizes emotional and romantic connections</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Multiple committed, loving relationships</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Emotional intimacy is central, not just sexual</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Often involves integration of partners into life</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-amber-500" />
                        Examples in Practice
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium text-foreground mb-1">ENM (but not polyamory):</p>
                          <p className="text-sm">A committed couple who occasionally swing with other couples for sexual variety, but don't pursue romantic relationships with others.</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1">Polyamory:</p>
                          <p className="text-sm">Someone who has two committed partners they love and build life with, going on dates, celebrating holidays together, and emotionally supporting each other.</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1">Both ENM & Polyamory:</p>
                          <p className="text-sm">A person in multiple romantic relationships who also occasionally has casual sexual encounters – practicing both poly and broader ENM principles.</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed">
                      For more detailed comparison, read our comprehensive article: <Link to="/blog/enm-vs-polyamory" className="text-primary hover:underline font-medium">ENM vs Polyamory: What's the Difference?</Link>
                    </p>
                  </div>
                </div>
              </section>

              {/* Relationship Structures */}
              <section id="structures" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Polyamorous Relationship Structures</h2>
                  
                  <div className="space-y-8 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Polyamory isn't one-size-fits-all. There are many different relationship structures and styles, each with its own dynamics and considerations. Here are the most common:
                    </p>

                    {/* Hierarchical Polyamory */}
                    <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-purple-500" />
                        Hierarchical Polyamory
                      </h3>
                      <p className="mb-4">A structure where relationships are ranked, typically with a "primary" partner having priority in decision-making, time, and resources, while "secondary" and "tertiary" partners have less priority.</p>
                      <div className="bg-background/50 rounded-lg p-4 mb-3">
                        <p className="font-medium text-foreground mb-2">How it works:</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>Primary partners often share finances, living space, life decisions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>Primary relationship has "veto power" over other relationships in some cases</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>Secondary partners may not have same access, time, or decision-making input</span>
                          </li>
                        </ul>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-green-500 mb-1">Pros:</p>
                          <ul className="space-y-1">
                            <li>• Clear structure and expectations</li>
                            <li>• Existing primary feels secure</li>
                            <li>• Easier for beginners transitioning</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-red-500 mb-1">Cons:</p>
                          <ul className="space-y-1">
                            <li>• Can feel unfair to secondary partners</li>
                            <li>• Limits growth of other relationships</li>
                            <li>• "Couple privilege" concerns</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Non-Hierarchical Polyamory */}
                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-500" />
                        Non-Hierarchical Polyamory
                      </h3>
                      <p className="mb-4">All relationships are valued equally without predetermined rankings. Each relationship develops organically based on connection, compatibility, and mutual investment.</p>
                      <div className="bg-background/50 rounded-lg p-4 mb-3">
                        <p className="font-medium text-foreground mb-2">How it works:</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>No one partner automatically gets priority</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>Decisions made collaboratively with all affected partners</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>Time and resources allocated based on needs, not predetermined status</span>
                          </li>
                        </ul>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-green-500 mb-1">Pros:</p>
                          <ul className="space-y-1">
                            <li>• More equitable for all partners</li>
                            <li>• Relationships can grow naturally</li>
                            <li>• Respects autonomy of all involved</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-red-500 mb-1">Cons:</p>
                          <ul className="space-y-1">
                            <li>• Requires excellent communication</li>
                            <li>• Can feel unstable for some</li>
                            <li>• Complex scheduling and decision-making</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* More structures continued... */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-card/30 border border-border rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Kitchen Table Polyamory</h3>
                        <p className="text-sm mb-3">All partners and metamours are friendly and comfortable spending time together, like sitting around a kitchen table.</p>
                        <p className="text-xs text-muted-foreground">Best for: Those who value integration and community among partners</p>
                      </div>

                      <div className="bg-card/30 border border-border rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Parallel Polyamory</h3>
                        <p className="text-sm mb-3">Partners have minimal interaction with each other's other partners. Relationships remain separate.</p>
                        <p className="text-xs text-muted-foreground">Best for: Those who prefer independence and separation between relationships</p>
                      </div>

                      <div className="bg-card/30 border border-border rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Solo Polyamory</h3>
                        <p className="text-sm mb-3">Maintaining autonomy and not seeking to "couple up" as a primary life structure. Relationships exist without escalator expectations.</p>
                        <p className="text-xs text-muted-foreground">Best for: Those who value independence and non-traditional relationship models</p>
                      </div>

                      <div className="bg-card/30 border border-border rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Relationship Anarchy</h3>
                        <p className="text-sm mb-3">Rejecting all traditional relationship categories and hierarchies. Each connection is unique without predetermined rules.</p>
                        <p className="text-xs text-muted-foreground">Best for: Those who want maximum freedom and customization</p>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                      <p className="text-sm">
                        <strong className="text-foreground">Important:</strong> These structures aren't mutually exclusive. Many people blend elements from different styles, and structures can evolve over time. The key is finding what works for everyone involved through honest communication and regular check-ins.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Getting Started - Placeholder for brevity, can be expanded */}
              <section id="getting-started" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Getting Started with ENM & Polyamory</h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Starting your ENM or polyamory journey requires careful consideration, self-reflection, and honest communication. Whether you're opening an existing relationship or starting from scratch, these steps will help you begin thoughtfully:
                    </p>

                    {/* Step by step guide */}
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-l-4 border-primary rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">1</span>
                          Educate Yourself
                        </h3>
                        <p className="mb-4">Before diving in, read extensively about ENM and polyamory. Understanding the landscape helps you make informed decisions.</p>
                        <div className="space-y-2">
                          <p className="font-medium text-foreground text-sm">Recommended Reading:</p>
                          <ul className="text-sm space-y-1">
                            <li>• "The Ethical Slut" by Dossie Easton and Janet Hardy</li>
                            <li>• "More Than Two" by Franklin Veaux and Eve Rickert</li>
                            <li>• "Opening Up" by Tristan Taormino</li>
                            <li>• "Polysecure" by Jessica Fern</li>
                          </ul>
                          <div className="mt-3">
                            <Link to="/academy/journeys" className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium">
                              <Target className="w-4 h-4" />
                              Follow Our ENM Guided Journey
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-l-4 border-primary rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">2</span>
                          Examine Your Motivations
                        </h3>
                        <p className="mb-3">Be honest about why you're interested in ENM. Healthy motivations lead to better outcomes.</p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                            <p className="font-medium text-green-500 mb-2">Healthy Motivations:</p>
                            <ul className="space-y-1">
                              <li>• Desire for multiple deep connections</li>
                              <li>• Aligns with personal values</li>
                              <li>• Want to explore different types of love</li>
                              <li>• Abundance mindset about relationships</li>
                            </ul>
                          </div>
                          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                            <p className="font-medium text-red-500 mb-2">Red Flag Motivations:</p>
                            <ul className="space-y-1">
                              <li>• Trying to "fix" relationship problems</li>
                              <li>• Pressured by partner</li>
                              <li>• Avoiding intimacy or commitment</li>
                              <li>• Chasing new relationship energy (NRE)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-l-4 border-primary rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">3</span>
                          Have Deep Conversations
                        </h3>
                        <p className="mb-3">If opening an existing relationship, have multiple conversations before taking action. Topics to discuss:</p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span><strong className="text-foreground">What structure appeals to you?</strong> Hierarchical, non-hierarchical, solo poly?</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span><strong className="text-foreground">What are your boundaries?</strong> Safer sex, time allocation, disclosure?</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span><strong className="text-foreground">How will you handle jealousy?</strong> Support strategies and reassurance needs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span><strong className="text-foreground">What about metamours?</strong> Kitchen table, parallel, or somewhere in between?</span>
                          </li>
                        </ul>
                        <div className="mt-4">
                          <Link to="/lifestyle/relationships-communication" className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium">
                            <MessageCircle className="w-4 h-4" />
                            Communication Tools for Poly Relationships
                          </Link>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-l-4 border-primary rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">4</span>
                          Start Slowly
                        </h3>
                        <p className="mb-3">Don't rush into full polyamory immediately. Consider gradual steps:</p>
                        <ul className="space-y-2 text-sm">
                          <li>• Start with <strong className="text-foreground">emotional openness</strong> before physical</li>
                          <li>• Try <strong className="text-foreground">casual dating</strong> before serious relationships</li>
                          <li>• Have <strong className="text-foreground">regular check-ins</strong> about how it's going</li>
                          <li>• Establish <strong className="text-foreground">pause protocols</strong> if needed</li>
                          <li>• Practice <strong className="text-foreground">compersion exercises</strong> together</li>
                        </ul>
                        <div className="mt-4">
                          <Link to="/blog/compersion-exercises" className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium">
                            <Heart className="w-4 h-4" />
                            8 Compersion Exercises for Poly Couples
                          </Link>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-l-4 border-primary rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">5</span>
                          Find Community & Support
                        </h3>
                        <p className="mb-3">Connect with others practicing ENM and polyamory for support, advice, and friendship.</p>
                        <div className="space-y-2 text-sm">
                          <p>• Join local polyamory meetup groups</p>
                          <p>• Attend poly discussion events and workshops</p>
                          <p>• Connect with experienced practitioners for mentorship</p>
                          <p>• Join online communities and forums</p>
                          <p>• Consider poly-friendly therapy if needed</p>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-3">
                          <Link to="/download" className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all text-sm font-medium">
                            <Users className="w-4 h-4" />
                            Find ENM Partners on SPICE
                          </Link>
                          <Link to="/blog/poly-dating-apps-2026" className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border hover:border-primary/50 rounded-lg transition-all text-sm font-medium">
                            <Sparkles className="w-4 h-4" />
                            Best Poly Dating Apps 2026
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mt-8">
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-500" />
                        Important Reminders
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500">⚠️</span>
                          <span>There's no rush. Take months to prepare and educate yourselves</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500">⚠️</span>
                          <span>Expect challenges. Even healthy poly relationships face jealousy and growing pains</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500">⚠️</span>
                          <span>Be prepared to work on yourself. Poly requires emotional intelligence and self-awareness</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500">⚠️</span>
                          <span>Not everyone is suited for polyamory, and that's okay</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Communication Skills - Key section */}
              <section id="communication" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <MessageCircle className="w-8 h-8 text-primary" />
                    Essential Communication Skills for Polyamory
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Communication is the absolute foundation of successful polyamory. While monogamous relationships can sometimes coast on assumed understandings, polyamory requires explicit, ongoing, vulnerable communication. Here are the essential skills:
                    </p>

                    <div className="space-y-6">
                      {/* Radical Honesty */}
                      <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Radical Honesty (with Kindness)</h3>
                        <p className="mb-4">Being truthful about your feelings, needs, desires, and concerns – even when it's uncomfortable. This doesn't mean being brutal; it means being authentic while considering others' feelings.</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="font-medium text-green-500 text-sm mb-2">✓ Do This:</p>
                            <p className="text-sm">"I'm feeling insecure about you spending so much time with Alex. Can we talk about ways I can feel more secure?"</p>
                          </div>
                          <div>
                            <p className="font-medium text-red-500 text-sm mb-2">✗ Avoid This:</p>
                            <p className="text-sm">"You're spending too much time with Alex. You clearly don't care about me anymore."</p>
                          </div>
                        </div>
                      </div>

                      {/* Active Listening */}
                      <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Active Listening</h3>
                        <p className="mb-4">Truly hearing your partner without formulating your defense or rebuttal. Seek to understand, not to respond.</p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>Make eye contact and give full attention</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>Reflect back what you heard: "What I'm hearing is..."</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>Ask clarifying questions before responding</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>Validate feelings even if you disagree with actions</span>
                          </li>
                        </ul>
                      </div>

                      {/* I-Statements */}
                      <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Using "I" Statements</h3>
                        <p className="mb-4">Frame concerns from your experience rather than accusations. This reduces defensiveness and opens dialogue.</p>
                        <div className="bg-background/50 rounded-lg p-4">
                          <p className="text-sm mb-2 font-medium text-foreground">Formula: I feel [emotion] when [situation] because [reason]. I need [request].</p>
                          <p className="text-sm italic">Example: "I feel anxious when you don't text me during your dates because I worry something's wrong. I need a quick check-in text so I can relax."</p>
                        </div>
                      </div>

                      {/* Regular Check-Ins */}
                      <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Scheduled Relationship Check-Ins</h3>
                        <p className="mb-4">Don't wait for problems. Regular check-ins prevent small issues from becoming big ones.</p>
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="font-medium text-foreground mb-1">Weekly Check-Ins (15-30 minutes):</p>
                            <p>• How are you feeling about our relationship?</p>
                            <p>• Is there anything you need more or less of?</p>
                            <p>• Any concerns or celebrations to share?</p>
                          </div>
                          <div>
                            <p className="font-medium text-foreground mb-1">Monthly Deep Dives (1-2 hours):</p>
                            <p>• Review relationship agreements – do they still work?</p>
                            <p>• Discuss how other relationships are going</p>
                            <p>• Plan quality time together</p>
                            <p>• Address any building tension</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link to="/lifestyle/relationships-communication" className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all font-medium">
                        <MessageCircle className="w-5 h-5" />
                        Complete Communication Guide
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Continue with remaining sections - for brevity showing structure */}
              {/* Relationship Agreements */}
              <section id="agreements" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-primary" />
                    Creating Relationship Agreements
                  </h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Relationship agreements (sometimes called "rules" but better framed as collaborative agreements) are the foundation of ethical non-monogamy. These are negotiated boundaries that all parties agree to honor.
                    </p>
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Areas for Agreements:</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <p className="font-medium text-foreground">Safer Sex & Health:</p>
                          <ul className="space-y-1 ml-4">
                            <li>• Barrier requirements (condoms, dental dams)</li>
                            <li>• STI testing frequency and disclosure</li>
                            <li>• Fluid bonding decisions</li>
                            <li>• Birth control responsibilities</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <p className="font-medium text-foreground">Time & Scheduling:</p>
                          <ul className="space-y-1 ml-4">
                            <li>• Date nights protected for each partner</li>
                            <li>• Advance notice for new dates</li>
                            <li>• Holiday and vacation priorities</li>
                            <li>• Overnight permissions and notice</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <p className="font-medium text-foreground">Information Sharing:</p>
                          <ul className="space-y-1 ml-4">
                            <li>• What details to share about other partners</li>
                            <li>• Meeting metamours expectations</li>
                            <li>• Social media boundaries</li>
                            <li>• Privacy for other partners</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <p className="font-medium text-foreground">Emotional & Physical:</p>
                          <ul className="space-y-1 ml-4">
                            <li>• Shared space boundaries (bedroom, etc.)</li>
                            <li>• Pet names or special activities</li>
                            <li>• Financial arrangements</li>
                            <li>• Meeting friends and family</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">⚠️ Agreements vs Rules</h3>
                      <p className="text-sm mb-3">Frame agreements as collaborative choices, not controlling rules:</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                          <p className="font-medium text-red-500 mb-2">Controlling Rule:</p>
                          <p>"You can't have sex with anyone else without me present."</p>
                        </div>
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                          <p className="font-medium text-green-500 mb-2">Healthy Agreement:</p>
                          <p>"For now, I'm only comfortable with group experiences. Can we revisit this in 3 months?"</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm italic">
                      Remember: Agreements should be regularly revisited and renegotiated as relationships evolve and people grow.
                    </p>
                    <Link to="/start/consent-basics" className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium">
                      <CheckCircle className="w-4 h-4" />
                      Learn About Consent & Boundaries
                    </Link>
                  </div>
                </div>
              </section>

              {/* Jealousy Management */}
              <section id="jealousy" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Managing Jealousy in Polyamory</h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Jealousy is normal and expected in polyamory. Even experienced poly folks feel jealous sometimes. The goal isn't to eliminate jealousy but to manage it healthily and use it as information about your needs, insecurities, and areas for growth.
                    </p>
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Understanding Your Jealousy</h3>
                      <p className="mb-3 text-sm">Jealousy is often a secondary emotion covering deeper fears. Ask yourself:</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">Fear of abandonment:</strong> "Will they leave me for someone better?"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">Inadequacy:</strong> "Am I not enough? What do they have that I don't?"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">Scarcity mindset:</strong> "There's only so much love/time/attention to go around"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">Unmet needs:</strong> "I'm not getting enough quality time/affection/sex"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">Loss of specialness:</strong> "Our intimate moments won't be unique anymore"</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-card/30 border border-border rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Tools for Managing Jealousy</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                          <div>
                            <p className="font-medium text-foreground">Name and acknowledge the feeling</p>
                            <p>Don't try to suppress it. "I'm feeling jealous right now" is valid.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                          <div>
                            <p className="font-medium text-foreground">Dig deeper into the root cause</p>
                            <p>What specific fear or insecurity is being triggered?</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                          <div>
                            <p className="font-medium text-foreground">Communicate your needs (not demands)</p>
                            <p>Share what would help you feel secure without controlling your partner.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                          <div>
                            <p className="font-medium text-foreground">Practice self-soothing</p>
                            <p>Meditation, journaling, exercise, calling a friend (not your partner mid-date!).</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex-shrink-0 mt-0.5">5</span>
                          <div>
                            <p className="font-medium text-foreground">Challenge scarcity thinking</p>
                            <p>Love is not a finite resource. Your partner loving someone else doesn't diminish their love for you.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      <Link to="/lifestyle/jealousy-management" className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg transition-all text-sm font-medium">
                        <Heart className="w-4 h-4" />
                        Complete Jealousy Management Guide
                      </Link>
                      <Link to="/blog/compersion-exercises" className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg transition-all text-sm font-medium">
                        <Sparkles className="w-4 h-4" />
                        Compersion Exercises
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Compersion */}
              <section id="compersion" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Star className="w-8 h-8 text-primary" />
                    Cultivating Compersion
                  </h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">Compersion</strong> is often described as the opposite of jealousy – it's the feeling of joy, happiness, or satisfaction when your partner experiences pleasure or happiness with another person. Think of it as empathetic happiness for your partner's joy.
                    </p>
                    <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">What Compersion Feels Like:</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Heart className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                          <span>Genuine happiness when your partner talks excitedly about their date</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                          <span>Feeling warmth knowing your partner is experiencing new love or connection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                          <span>Relief that your partner's needs are being met in ways you might not be able to provide</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                          <span>Appreciation for the ways other relationships enrich your partner's life</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-lg leading-relaxed">
                      Compersion doesn't always come naturally – and that's okay! It's a skill that can be developed over time. Many people experience a mix of compersion and jealousy simultaneously, which is completely normal.
                    </p>
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Exercises to Build Compersion:</h3>
                      <div className="space-y-3 text-sm">
                        <p className="font-medium text-foreground">Try these practices from our comprehensive guide:</p>
                        <ul className="space-y-2 ml-4">
                          <li>• Gratitude journaling for your partner's other relationships</li>
                          <li>• Reframing thoughts from scarcity to abundance</li>
                          <li>• Celebrating metamours' positive impact on your partner</li>
                          <li>• Visualization exercises imagining your partner's joy</li>
                          <li>• Sharing in post-date excitement together</li>
                        </ul>
                      </div>
                    </div>
                    <Link to="/blog/compersion-exercises" className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all font-medium">
                      <Sparkles className="w-5 h-5" />
                      8 Compersion Exercises to Practice
                    </Link>
                  </div>
                </div>
              </section>

              {/* Metamours */}
              <section id="metamours" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Users className="w-8 h-8 text-primary" />
                    Navigating Metamour Relationships
                  </h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      A <strong className="text-foreground">metamour</strong> is your partner's other partner – someone you're connected to through a shared romantic/sexual partner but don't have a direct romantic relationship with yourself. How you relate to metamours significantly impacts your polyamory experience.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Kitchen Table Poly</h3>
                        <p className="text-sm mb-3">Everyone is comfortable sitting around the kitchen table together. Metamours are friends or friendly.</p>
                        <p className="text-xs text-muted-foreground italic">Level: High integration, everyone knows everyone</p>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Garden Party Poly</h3>
                        <p className="text-sm mb-3">Metamours are pleasant at group gatherings but don't seek independent friendships. Cordial but not close.</p>
                        <p className="text-xs text-muted-foreground italic">Level: Medium integration, friendly when together</p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Parallel Poly</h3>
                        <p className="text-sm mb-3">Minimal to no contact with metamours. Relationships stay separate. You may not even meet them.</p>
                        <p className="text-xs text-muted-foreground italic">Level: Low/no integration, separate relationships</p>
                      </div>
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Tips for Positive Metamour Dynamics:</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Respect boundaries:</strong> Not everyone wants to be friends with their metamours, and that's valid</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Remember the hinge:</strong> Your shared partner is juggling multiple relationships – be compassionate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Avoid comparison:</strong> You and your metamour offer different things – neither better nor worse</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Direct communication:</strong> When issues arise, talk to your partner, not about them through the metamour</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Find your style:</strong> Your metamour relationship style can differ from your partner's preference</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Time Management */}
              <section id="time-management" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Calendar className="w-8 h-8 text-primary" />
                    Time & Energy Management
                  </h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      One of polyamory's biggest challenges is managing limited time and energy across multiple relationships. Unlike monogamy where you focus resources on one partnership, poly requires careful attention to balance and sustainability.
                    </p>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4">⏰ The Time Reality Check</h3>
                      <p className="mb-3 text-sm">Before adding partners, honestly assess your available capacity:</p>
                      <div className="bg-background/50 rounded-lg p-4 text-sm space-y-2">
                        <p>• <strong className="text-foreground">Work/Career:</strong> 40-60+ hours/week</p>
                        <p>• <strong className="text-foreground">Sleep & Self-Care:</strong> 50-60 hours/week</p>
                        <p>• <strong className="text-foreground">Household/Life Admin:</strong> 10-15 hours/week</p>
                        <p>• <strong className="text-foreground">Friends & Family:</strong> 5-10 hours/week</p>
                        <p>• <strong className="text-foreground">Personal Hobbies:</strong> 5-10 hours/week</p>
                        <p className="pt-2 border-t border-border"><strong className="text-foreground">Remaining for dating/relationships:</strong> 20-30 hours/week realistically</p>
                      </div>
                      <p className="text-xs mt-3 italic">And remember: relationship time isn't just dates – it includes communication, scheduling, emotional labor, and processing.</p>
                    </div>
                    <div className="bg-card/30 border border-border rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Practical Time Management Strategies:</h3>
                      <div className="space-y-4 text-sm">
                        <div>
                          <p className="font-medium text-foreground mb-2">1. Use Shared Calendars</p>
                          <p>Google Calendar with color-coding for each partner helps prevent double-booking and allows partners to see when you're available.</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-2">2. Schedule Regular Date Nights</p>
                          <p>Protect recurring time for each partner. Tuesday nights with Partner A, Fridays with Partner B ensures consistent connection.</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-2">3. Quality Over Quantity</p>
                          <p>3 focused, present hours trump 10 hours of distracted parallel time. Be fully there when you're together.</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-2">4. Build in Transition Time</p>
                          <p>Don't schedule back-to-back dates. Allow time for emotional processing and self-care between partners.</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-2">5. Protect Solo Time</p>
                          <p>Schedule time alone for recharging. Polyamory can be emotionally intensive – burnout is real.</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-2">6. Be Realistic About Capacity</p>
                          <p>You can't maintain 5 deep romantic relationships while working full-time. Be honest about your bandwidth.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                      <p className="text-sm">
                        <strong className="text-foreground">Remember:</strong> It's okay to be "poly-saturated" (at capacity for relationships). Quality relationships require time investment – it's better to have 2-3 well-tended connections than 5 neglected ones.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Mistakes */}
              <section id="mistakes" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <AlertCircle className="w-8 h-8 text-red-500" />
                    Common Polyamory Mistakes to Avoid
                  </h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Learning from others' mistakes can save you heartache. Here are the most common pitfalls people encounter when starting polyamory:
                    </p>
                    <div className="space-y-4">
                      {/* Mistake 1 */}
                      <div className="bg-red-500/10 border-l-4 border-red-500 rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-foreground mb-2">❌ Using Poly to Fix Relationship Problems</h3>
                        <p className="text-sm mb-2">Opening a struggling relationship to "add excitement" or "meet unmet needs" almost always makes things worse. Fix your foundation first.</p>
                        <p className="text-xs text-green-500">✓ Instead: Strengthen your relationship through therapy, communication work, and addressing core issues before opening up.</p>
                      </div>

                      {/* Mistake 2 */}
                      <div className="bg-red-500/10 border-l-4 border-red-500 rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-foreground mb-2">❌ Couple Privilege & "Unicorn Hunting"</h3>
                        <p className="text-sm mb-2">Seeking a "third" person to join an existing couple equally, with veto power and rules designed to protect the couple first. This treats people as relationship accessories.</p>
                        <p className="text-xs text-green-500">✓ Instead: Date separately or approach triads organically without pre-existing power imbalances. Let all relationships develop authentically.</p>
                      </div>

                      {/* Mistake 3 */}
                      <div className="bg-red-500/10 border-l-4 border-red-500 rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-foreground mb-2">❌ Moving Too Fast</h3>
                        <p className="text-sm mb-2">Jumping into polyamory without education, rushing into new relationships, or opening up immediately when one partner asks.</p>
                        <p className="text-xs text-green-500">✓ Instead: Take months to learn, discuss, and prepare. Start slowly with clear check-ins and gradual steps.</p>
                      </div>

                      {/* Mistake 4 */}
                      <div className="bg-red-500/10 border-l-4 border-red-500 rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-foreground mb-2">❌ Neglecting Existing Relationships</h3>
                        <p className="text-sm mb-2">New Relationship Energy (NRE) is intoxicating. Many people accidentally neglect established partners while caught up in the excitement of someone new.</p>
                        <p className="text-xs text-green-500">✓ Instead: Maintain protected time with existing partners. Be mindful of NRE's effects and intentionally balance attention.</p>
                      </div>

                      {/* Mistake 5 */}
                      <div className="bg-red-500/10 border-l-4 border-red-500 rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-foreground mb-2">❌ Poor Communication & Assumptions</h3>
                        <p className="text-sm mb-2">Assuming partners know what you need, avoiding difficult conversations, or expecting partners to read your mind.</p>
                        <p className="text-xs text-green-500">✓ Instead: Over-communicate, especially early on. Explicitly state needs, boundaries, and feelings even when uncomfortable.</p>
                      </div>

                      {/* Mistake 6 */}
                      <div className="bg-red-500/10 border-l-4 border-red-500 rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-foreground mb-2">❌ Ignoring Your Own Needs</h3>
                        <p className="text-sm mb-2">Being so focused on being a "good poly person" that you suppress legitimate needs and feelings, or agreeing to things you're not actually comfortable with.</p>
                        <p className="text-xs text-green-500">✓ Instead: Honor your authentic feelings. It's okay to have boundaries and limits. Polyamory requires honesty with yourself first.</p>
                      </div>

                      {/* Mistake 7 */}
                      <div className="bg-red-500/10 border-l-4 border-red-500 rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-foreground mb-2">❌ Comparing Relationships</h3>
                        <p className="text-sm mb-2">Constantly comparing yourself to metamours or comparing relationships to each other creates unnecessary suffering.</p>
                        <p className="text-xs text-green-500">✓ Instead: Each relationship is unique. Focus on what you share with your partner rather than what they share with others.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Resources Section */}
              <section id="resources" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Resources & Next Steps</h2>
                  
                  <div className="space-y-8">
                    {/* Related Articles */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-foreground">Related Articles & Guides</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/blog/enm-vs-polyamory" className="flex items-start gap-3 p-4 bg-card/30 border border-border hover:border-primary/50 rounded-lg transition-all group">
                          <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold group-hover:text-primary transition-colors">ENM vs Polyamory: What's the Difference?</h4>
                            <p className="text-sm text-muted-foreground mt-1">Understand the nuances between these related but distinct relationship styles</p>
                          </div>
                        </Link>
                        
                        <Link to="/blog/enm-at-work" className="flex items-start gap-3 p-4 bg-card/30 border border-border hover:border-primary/50 rounded-lg transition-all group">
                          <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold group-hover:text-primary transition-colors">Being Openly ENM at Work</h4>
                            <p className="text-sm text-muted-foreground mt-1">Navigate professional spaces while living authentically</p>
                          </div>
                        </Link>

                        <Link to="/blog/poly-dating-apps-2026" className="flex items-start gap-3 p-4 bg-card/30 border border-border hover:border-primary/50 rounded-lg transition-all group">
                          <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold group-hover:text-primary transition-colors">Best Polyamory Dating Apps 2026</h4>
                            <p className="text-sm text-muted-foreground mt-1">Where to find compatible poly partners online</p>
                          </div>
                        </Link>

                        <Link to="/lifestyle/relationships-communication" className="flex items-start gap-3 p-4 bg-card/30 border border-border hover:border-primary/50 rounded-lg transition-all group">
                          <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold group-hover:text-primary transition-colors">Relationship Communication Skills</h4>
                            <p className="text-sm text-muted-foreground mt-1">Master the communication tools essential for poly success</p>
                          </div>
                        </Link>

                        <Link to="/lifestyle/jealousy-management" className="flex items-start gap-3 p-4 bg-card/30 border border-border hover:border-primary/50 rounded-lg transition-all group">
                          <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold group-hover:text-primary transition-colors">Jealousy Management Tools</h4>
                            <p className="text-sm text-muted-foreground mt-1">Practical strategies for working through jealousy</p>
                          </div>
                        </Link>

                        <Link to="/blog/compersion-exercises" className="flex items-start gap-3 p-4 bg-card/30 border border-border hover:border-primary/50 rounded-lg transition-all group">
                          <Star className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold group-hover:text-primary transition-colors">8 Compersion Exercises</h4>
                            <p className="text-sm text-muted-foreground mt-1">Cultivate joy in your partners' happiness</p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Take Action */}
                    <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30">
                      <h3 className="text-2xl font-bold mb-4 text-center">Ready to Explore ENM & Polyamory?</h3>
                      <p className="text-center text-muted-foreground mb-6">
                        Join SPICE to connect with 30,000+ verified members practicing ethical non-monogamy and polyamory
                      </p>
                      <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/download" className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                          <Users className="w-5 h-5" />
                          Download SPICE Free
                        </Link>
                        <Link to="/academy/journeys" className="inline-flex items-center gap-2 px-8 py-3 bg-card border-2 border-primary hover:bg-card/80 font-semibold rounded-full transition-all">
                          <Target className="w-5 h-5" />
                          Follow Guided Journey
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </article>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default ENMPolyamoryGuide;
