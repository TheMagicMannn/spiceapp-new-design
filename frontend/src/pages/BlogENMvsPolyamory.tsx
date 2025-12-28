import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, Users, ArrowRight, CheckCircle, BookOpen, Clock, Sparkles, MessageCircle, Scale, Compass, Quote, ChevronRight, Star, Lightbulb, RefreshCw } from "lucide-react";

const BlogENMvsPolyamory = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ENM vs. Polyamory: Which Path Fits Your Heart (and Why You Don't Have to Choose Forever)",
    "description": "A comprehensive comparison of ethical non-monogamy styles versus romantic polyamory with real stories and practical guidance for finding your path.",
    "author": { "@type": "Organization", "name": "SPICE" },
    "datePublished": "2025-12-28",
    "dateModified": "2025-12-28"
  };

  const enmStyles = [
    {
      name: "Swinging",
      description: "Recreational sex with others, typically as a couple activity",
      emotional: "Low - focuses on physical connection",
      bestFor: "Couples seeking shared sexual adventures"
    },
    {
      name: "Open Relationship",
      description: "Freedom to have sexual encounters outside primary partnership",
      emotional: "Variable - can include casual dating",
      bestFor: "Those wanting flexibility without deep outside bonds"
    },
    {
      name: "Monogamish",
      description: "Mostly monogamous with occasional exceptions",
      emotional: "Low - rare outside encounters",
      bestFor: "Couples who value monogamy but want breathing room"
    },
    {
      name: "Relationship Anarchy",
      description: "Rejecting all relationship hierarchies and labels",
      emotional: "Varies - each connection is unique",
      bestFor: "Those who resist categorizing relationships"
    }
  ];

  const polyStyles = [
    {
      name: "Hierarchical Polyamory",
      description: "Primary partner(s) with secondary relationships",
      structure: "Clear tiers of commitment and priority",
      bestFor: "Those transitioning from monogamy who need structure"
    },
    {
      name: "Non-Hierarchical Polyamory",
      description: "All partners are equally important without ranking",
      structure: "Flat structure, each relationship stands alone",
      bestFor: "Those who reject the idea of ranking love"
    },
    {
      name: "Kitchen Table Polyamory",
      description: "All partners and metamours are friendly and connected",
      structure: "Interconnected polycule that socializes together",
      bestFor: "Those who want community and chosen family"
    },
    {
      name: "Parallel Polyamory",
      description: "Partners have minimal interaction with metamours",
      structure: "Separate relationship tracks with little overlap",
      bestFor: "Those who prefer compartmentalized relationships"
    }
  ];

  const realStories = [
    {
      name: "Maya & Jordan",
      journey: "Swinging → Polyamory",
      quote: "We started swinging to spice up our marriage. But after three years, we both fell in love with people we'd met. Instead of panicking, we realized our hearts had expanded. Now we have a beautiful quad.",
      lesson: "Physical connections can naturally evolve into emotional ones—and that's okay."
    },
    {
      name: "Alex",
      journey: "Polyamory → Solo Poly → Monogamish",
      quote: "I was in a triad for five years, then spent two years as solo poly. Now I'm in a mostly monogamous relationship with occasional play partners. My needs changed, and that's valid.",
      lesson: "Your relationship style can shift as you grow and learn about yourself."
    },
    {
      name: "The Reyes Family",
      journey: "Open Relationship → Polycule",
      quote: "We opened our marriage for sexual variety. But my husband's girlfriend became my best friend. Now we're raising kids together as a family of four adults. We never planned this, but we couldn't be happier.",
      lesson: "Sometimes the path chooses you—stay open to unexpected beauty."
    }
  ];

  return (
    <>
      <SEO
        title="ENM vs. Polyamory: Which Path Fits Your Heart | SPICE Blog"
        description="Comprehensive comparison of ethical non-monogamy versus polyamory. Explore swinging, open relationships, hierarchical poly, solo poly and more. Real stories and guidance for finding your path."
        keywords="ENM vs polyamory, ethical non-monogamy comparison, polyamory styles, open relationship vs polyamory, swinging vs poly, hierarchical polyamory, solo polyamory, relationship anarchy, ENM relationship types, non-monogamy guide 2025"
        canonical="https://thespiceapp.com/blog/enm-vs-polyamory"
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
                <span className="text-xs text-muted-foreground">18 min read</span>
                <span className="text-xs text-muted-foreground">December 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                ENM vs. Polyamory: Which Path Fits Your Heart
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A clear, non-judgmental comparison of casual ENM styles versus romantic polyamory—with real stories of people who have switched or blended both. Because your heart does not have to choose one path forever.
              </p>
            </div>

            {/* Featured Image */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-12 mb-12 text-center border border-primary/30">
              <Scale className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Finding Your Authentic Relationship Path</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                In This Guide
              </h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#understanding" className="text-primary hover:underline">→ Understanding the Spectrum</a></li>
                <li><a href="#enm-styles" className="text-primary hover:underline">→ ENM Styles Explained</a></li>
                <li><a href="#poly-styles" className="text-primary hover:underline">→ Polyamory Styles Explained</a></li>
                <li><a href="#key-differences" className="text-primary hover:underline">→ Key Differences: ENM vs Poly</a></li>
                <li><a href="#real-stories" className="text-primary hover:underline">→ Real Stories of Transition</a></li>
                <li><a href="#finding-path" className="text-primary hover:underline">→ Finding Your Path</a></li>
                <li><a href="#blending" className="text-primary hover:underline">→ Blending Styles Successfully</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section id="understanding" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Compass className="w-7 h-7 text-primary" />
                  Understanding the Spectrum
                </h2>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The world of consensual non-monogamy is not a binary choice between two options—it is a rich spectrum of relationship styles, each with unique characteristics, benefits, and challenges. Understanding this spectrum is the first step toward finding what resonates with your heart.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-white">Ethical Non-Monogamy (ENM)</strong> is the umbrella term encompassing all consensual relationship structures beyond traditional monogamy. This includes swinging, open relationships, polyamory, relationship anarchy, and many other configurations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-white">Polyamory</strong>, specifically, refers to the practice of engaging in multiple romantic relationships simultaneously, with the knowledge and consent of everyone involved. The key distinction is the emphasis on emotional connection and love, not just physical intimacy.
                  </p>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <h3 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Key Insight
                  </h3>
                  <p className="text-muted-foreground">
                    Neither ENM nor polyamory is inherently better than the other. What matters is finding the style that aligns with your values, needs, and capacity for connection. Many people move fluidly between styles throughout their lives, and that is perfectly healthy.
                  </p>
                </div>
              </section>

              <section id="enm-styles" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-7 h-7 text-primary" />
                  ENM Styles Explained
                </h2>
                <p className="text-muted-foreground mb-6">
                  These relationship styles typically emphasize physical connection, sexual exploration, or flexibility without the expectation of deep romantic bonds with multiple partners.
                </p>
                <div className="space-y-4">
                  {enmStyles.map((style, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5">
                      <h3 className="text-lg font-bold text-primary mb-2">{style.name}</h3>
                      <p className="text-muted-foreground mb-3">{style.description}</p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-background/50 rounded-lg p-3">
                          <span className="text-white font-medium">Emotional Depth:</span>
                          <span className="text-muted-foreground ml-2">{style.emotional}</span>
                        </div>
                        <div className="bg-background/50 rounded-lg p-3">
                          <span className="text-white font-medium">Best For:</span>
                          <span className="text-muted-foreground ml-2">{style.bestFor}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="poly-styles" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-7 h-7 text-primary" />
                  Polyamory Styles Explained
                </h2>
                <p className="text-muted-foreground mb-6">
                  Polyamory centers on loving multiple people romantically and building meaningful emotional connections with more than one partner.
                </p>
                <div className="space-y-4">
                  {polyStyles.map((style, idx) => (
                    <div key={idx} className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
                      <h3 className="text-lg font-bold text-purple-400 mb-2">{style.name}</h3>
                      <p className="text-muted-foreground mb-3">{style.description}</p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-background/50 rounded-lg p-3">
                          <span className="text-white font-medium">Structure:</span>
                          <span className="text-muted-foreground ml-2">{style.structure}</span>
                        </div>
                        <div className="bg-background/50 rounded-lg p-3">
                          <span className="text-white font-medium">Best For:</span>
                          <span className="text-muted-foreground ml-2">{style.bestFor}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="key-differences" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Scale className="w-7 h-7 text-primary" />
                  Key Differences: ENM vs Polyamory
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="p-4 text-left text-white font-bold">Aspect</th>
                        <th className="p-4 text-left text-white font-bold">Casual ENM</th>
                        <th className="p-4 text-left text-white font-bold">Polyamory</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-muted-foreground">
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium text-white">Primary Focus</td>
                        <td className="p-4">Sexual/physical exploration</td>
                        <td className="p-4">Romantic love and emotional bonds</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium text-white">Time Investment</td>
                        <td className="p-4">Often limited to encounters</td>
                        <td className="p-4">Significant ongoing commitment</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium text-white">Emotional Depth</td>
                        <td className="p-4">Usually shallow to moderate</td>
                        <td className="p-4">Deep, meaningful connections</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium text-white">Partner Integration</td>
                        <td className="p-4">Often kept separate from daily life</td>
                        <td className="p-4">Often integrated into life fabric</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium text-white">Jealousy Work</td>
                        <td className="p-4">Moderate—less emotional threat</td>
                        <td className="p-4">Intensive—love triggers deeper fears</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">Communication Needs</td>
                        <td className="p-4">Important but often simpler</td>
                        <td className="p-4">Crucial and complex</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="real-stories" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Quote className="w-7 h-7 text-primary" />
                  Real Stories of Transition
                </h2>
                <p className="text-muted-foreground mb-6">
                  These stories from real community members show that relationship styles can evolve—and that is not just okay, it is beautiful.
                </p>
                <div className="space-y-6">
                  {realStories.map((story, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Heart className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white">{story.name}</h3>
                          <p className="text-sm text-primary">{story.journey}</p>
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                        "{story.quote}"
                      </blockquote>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-green-400">Key Lesson:</strong> {story.lesson}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="finding-path" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Compass className="w-7 h-7 text-primary" />
                  Finding Your Path: Questions to Ask Yourself
                </h2>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <p className="text-muted-foreground mb-6">
                    There is no quiz that can tell you definitively which relationship style is right for you. But these questions can help clarify your desires and needs:
                  </p>
                  <div className="space-y-4">
                    {[
                      "When you imagine having connections with others, do you picture primarily physical encounters, or do you imagine building deep emotional bonds?",
                      "How do you feel about your partner falling in love with someone else? Is that exciting, neutral, or deeply uncomfortable?",
                      "Do you have the time, energy, and emotional bandwidth to maintain multiple full relationships?",
                      "Are you seeking variety and novelty, or are you seeking additional depth and love?",
                      "How important is it that your outside connections integrate into your daily life and social world?",
                      "Do you prefer clear structures and rules, or do you thrive in more fluid, evolving dynamics?",
                      "What does commitment mean to you? Can you be committed to multiple people romantically?"
                    ].map((question, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0 mt-1">
                          {idx + 1}
                        </span>
                        <p className="text-muted-foreground">{question}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="blending" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <RefreshCw className="w-7 h-7 text-primary" />
                  Blending Styles Successfully
                </h2>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-6">
                  <p className="text-muted-foreground mb-4">
                    Many people do not fit neatly into one category—and that is perfectly valid. Here is how to blend relationship styles successfully:
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: "Be Honest About What Each Relationship Is", desc: "Do not promise polyamory if you want casual ENM, and vice versa. Each person deserves to know what they are signing up for." },
                      { title: "Communicate Clearly With All Partners", desc: "Each partner should understand your overall relationship structure and where they fit within it." },
                      { title: "Allow for Evolution", desc: "A casual connection might develop into love. A romantic partner might become a friend. Hold space for change." },
                      { title: "Respect Each Relationship on Its Own Terms", desc: "Do not compare your swing partners to your romantic partners. Each connection has its own value." },
                      { title: "Check In Regularly", desc: "What works today might not work in six months. Regular relationship check-ins help you stay aligned." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-white">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                  <h3 className="font-bold text-amber-400 mb-3">Remember: You Do Not Have to Choose Forever</h3>
                  <p className="text-muted-foreground">
                    Your relationship style at 25 might be different from your style at 45. Life changes, you change, and your capacity for different types of connection changes. Give yourself permission to evolve. The goal is not to find the "right" label and stick to it—it is to build relationships that bring genuine fulfillment and joy to everyone involved.
                  </p>
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Continue Your Journey</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/lifestyle/relationships-communication" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">Communication Guide</h3>
                    <p className="text-sm text-muted-foreground">Master the art of open, honest relationship communication</p>
                  </Link>
                  <Link to="/lifestyle/jealousy-management" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">Jealousy Management</h3>
                    <p className="text-sm text-muted-foreground">Tools for transforming jealousy into growth</p>
                  </Link>
                  <Link to="/quiz" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">Take Our Quiz</h3>
                    <p className="text-sm text-muted-foreground">Discover your relationship style and preferences</p>
                  </Link>
                  <Link to="/guide/glossary" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">Lifestyle Glossary</h3>
                    <p className="text-sm text-muted-foreground">200+ terms explained for all relationship styles</p>
                  </Link>
                </div>
              </section>
            </article>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Your Community</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you are exploring ENM, polyamory, or something in between, SPICE connects you with like-minded individuals who understand your journey.
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

export default BlogENMvsPolyamory;