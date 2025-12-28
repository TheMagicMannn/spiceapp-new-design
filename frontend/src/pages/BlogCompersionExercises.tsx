import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, Sun, CheckCircle, BookOpen, Sparkles, Star, Quote, Target, RefreshCw, Lightbulb, PenLine, Music, Users, Brain, Eye } from "lucide-react";

const BlogCompersionExercises = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Compersion in Action: Real Exercises to Feel Genuine Joy for Your Partners Other Loves",
    "description": "Step-by-step practices, journaling prompts, and success stories for cultivating compersion in polyamorous relationships.",
    "author": { "@type": "Organization", "name": "SPICE" },
    "datePublished": "2025-12-28",
    "dateModified": "2025-12-28"
  };

  const exercises = [
    {
      name: "The Gratitude Bridge",
      difficulty: "Beginner",
      timeNeeded: "5-10 minutes daily",
      description: "Connect your partners happiness with your own wellbeing to build positive associations.",
      steps: [
        "When your partner shares something positive about their other relationship, pause before responding",
        "Notice any initial jealousy or discomfort without judgment",
        "Consciously think: 'My partner being happy makes my life better'",
        "Find one specific way their happiness benefits you (they are in a better mood, they learned something new, less pressure on you)",
        "Express genuine appreciation for them sharing with you"
      ],
      whyItWorks: "This reframes other relationships as additions to your life, not threats to it."
    },
    {
      name: "The Visualization Practice",
      difficulty: "Beginner",
      timeNeeded: "10-15 minutes",
      description: "Build compersion through guided mental imagery in a safe, controlled environment.",
      steps: [
        "Find a quiet, comfortable space and close your eyes",
        "Visualize your partner happy, laughing, glowing with joy",
        "Sit with the warm feeling of seeing them so content",
        "Gradually introduce the idea that another person is contributing to that joy",
        "Focus on your partners happiness, not the source",
        "When discomfort arises, return to the simple image of their joy",
        "End by sending them love and wishing them continued happiness"
      ],
      whyItWorks: "Visualization creates neural pathways that make real compersion easier to access."
    },
    {
      name: "The Letter to Your Metamour",
      difficulty: "Intermediate",
      timeNeeded: "20-30 minutes",
      description: "Write a letter (to send or not) expressing gratitude for your metamours role in your partners life.",
      steps: [
        "Start with what you appreciate about how they treat your partner",
        "Acknowledge specific ways they contribute to your partners happiness",
        "Recognize how your partner being happy with them benefits you",
        "Express any genuine gratitude you feel, even if small",
        "If appropriate, share the letter. If not, keep it for reflection"
      ],
      whyItWorks: "Writing crystallizes positive feelings and shifts perspective from threat to appreciation."
    },
    {
      name: "The Joy Detective",
      difficulty: "Intermediate",
      timeNeeded: "Ongoing practice",
      description: "Actively look for evidence of compersion in your daily life.",
      steps: [
        "Keep a compersion journal or notes on your phone",
        "Each time your partner mentions their other relationship, look for one positive detail",
        "Note any moment—however fleeting—where you felt happy for them",
        "Track patterns: What circumstances make compersion easier?",
        "Celebrate and reinforce positive moments"
      ],
      whyItWorks: "What we focus on expands. Looking for compersion helps you find it."
    },
    {
      name: "The Compassion Swap",
      difficulty: "Intermediate",
      timeNeeded: "15-20 minutes",
      description: "Build compersion by connecting with your partners experience empathetically.",
      steps: [
        "Ask your partner to share something wonderful about their other relationship",
        "As they speak, focus entirely on their emotions, not the facts",
        "Imagine how it feels to be them experiencing that joy",
        "Mirror their positive emotions as much as you can",
        "Share in their excitement as you would for any other good news"
      ],
      whyItWorks: "Empathy is a muscle. Practicing it around other relationships builds compersion."
    },
    {
      name: "The Abundance Meditation",
      difficulty: "Advanced",
      timeNeeded: "15-20 minutes",
      description: "Deep meditation practice to internalize that love is not a finite resource.",
      steps: [
        "Sit comfortably and focus on your breath",
        "Visualize love as an infinite, glowing energy surrounding you",
        "Feel how this love expands when shared, never diminishes",
        "Imagine your love for your partner, growing and radiating outward",
        "See their love expanding too, touching others while still fully present with you",
        "Notice that more love in the system means more love available to everyone",
        "Rest in the feeling of abundant, infinite love"
      ],
      whyItWorks: "Addresses the core fear driving jealousy: scarcity of love."
    }
  ];

  const journalPrompts = [
    "What specifically makes me happy about my partners happiness today?",
    "When was the last time I felt a genuine flash of compersion? What was happening?",
    "What would it feel like to be completely secure in my partners love while they love others?",
    "What gifts has my partners other relationship brought into our relationship?",
    "If I fully trusted that love is infinite, how would I feel right now?",
    "What do I appreciate about my metamour as a person, separate from their relationship with my partner?",
    "How has my partner grown from their other relationships in ways that benefit us?",
    "What would my most secure, loving self feel about my partners happiness with others?"
  ];

  const successStories = [
    {
      name: "Marcus",
      timeFrame: "6 months of practice",
      story: "I started with the visualization practice. At first, I could barely imagine my wife happy with someone else without feeling sick. But I kept at it, just 10 minutes a day. Around month three, something shifted. I was at work and she texted me excitedly about a date she had planned. Instead of dread, I felt... warm? It surprised me so much I actually cried. Now, two years in, I genuinely look forward to hearing about her other relationships. Its become one of the ways I feel close to her.",
      keyTakeaway: "Consistency matters more than intensity. Small daily practice creates lasting change."
    },
    {
      name: "Jordan & Sam",
      timeFrame: "1 year journey",
      story: "We were swingers who fell into polyamory unexpectedly. The jealousy hit us both hard. We started doing the gratitude bridge exercise together every night—sharing one thing we appreciated about each others other relationships. It felt forced at first, almost painful. But somewhere along the way, it became genuine. Last month, Sam's girlfriend got a promotion, and I was as excited as if it were my own partner. That is when I knew the work had paid off.",
      keyTakeaway: "Doing the exercises together as a couple accelerated our growth."
    },
    {
      name: "Priya",
      timeFrame: "8 months of journaling",
      story: "I am a solo poly person, and I struggled with compersion because I felt like I should already be good at it. The journal prompts helped me realize my jealousy was actually about my own fears of being disposable, not about my partners other relationships. Once I addressed that core wound, compersion came much more naturally. Now I help other solo poly folks with the same journey.",
      keyTakeaway: "Compersion blocks are often about our own wounds, not about our partners."
    }
  ];

  return (
    <>
      <SEO
        title="Compersion Exercises: Feel Genuine Joy for Your Partners Other Loves | SPICE"
        description="Practical exercises to cultivate compersion in polyamory. Step-by-step practices, journaling prompts, and real success stories for turning jealousy into celebration."
        keywords="compersion exercises, how to feel compersion, polyamory compersion, compersion practice, jealousy to compersion, poly compersion tips, compersion meditation, compersion journaling, feeling happy for partner, ENM compersion"
        canonical="https://thespiceapp.com/blog/compersion-exercises"
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
                Compersion in Action: Real Exercises to Feel Genuine Joy
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Step-by-step practices, journaling prompts, and success stories from poly folks who turned jealousy into celebration.
              </p>
            </div>

            {/* Featured Image */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-12 mb-12 text-center border border-primary/30">
              <Sun className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Cultivating Joy in Your Partners Joy</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                In This Guide
              </h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#what-is" className="text-primary hover:underline">→ What Is Compersion Really?</a></li>
                <li><a href="#exercises" className="text-primary hover:underline">→ 6 Compersion Exercises</a></li>
                <li><a href="#journaling" className="text-primary hover:underline">→ Journaling Prompts</a></li>
                <li><a href="#stories" className="text-primary hover:underline">→ Success Stories</a></li>
                <li><a href="#patience" className="text-primary hover:underline">→ A Note on Patience</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section id="what-is" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-7 h-7 text-primary" />
                  What Is Compersion Really?
                </h2>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-white">Compersion</strong> is often defined as the opposite of jealousy—feeling joy when your partner experiences happiness or love with someone else. But that definition can feel impossibly abstract when you are in the thick of jealousy.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Here is a more practical definition: <strong className="text-white">Compersion is the skill of connecting your partners happiness to your own sense of wellbeing.</strong> It is not the absence of jealousy—it is a separate, positive emotion that can coexist with jealousy, eventually outweighing it.
                  </p>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <p className="text-muted-foreground">
                      <strong className="text-green-400">Important:</strong> Compersion is not a requirement for ethical non-monogamy. You can have healthy poly relationships without ever feeling strong compersion. These exercises are for those who want to cultivate it—not because you must, but because it can enrich your experience.
                    </p>
                  </div>
                </div>
              </section>

              <section id="exercises" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Target className="w-7 h-7 text-primary" />
                  6 Compersion Exercises
                </h2>
                <div className="space-y-8">
                  {exercises.map((exercise, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
                      <div className="bg-primary/10 p-4 border-b border-border">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h3 className="text-xl font-bold text-white">{exercise.name}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">{exercise.difficulty}</span>
                            <span className="text-xs text-muted-foreground">{exercise.timeNeeded}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mt-2">{exercise.description}</p>
                      </div>
                      <div className="p-6">
                        <h4 className="font-bold text-white mb-3">Steps:</h4>
                        <ol className="space-y-2 mb-4">
                          {exercise.steps.map((step, sIdx) => (
                            <li key={sIdx} className="text-muted-foreground flex items-start gap-3">
                              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">
                                {sIdx + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                          <p className="text-sm text-muted-foreground">
                            <strong className="text-green-400">Why It Works:</strong> {exercise.whyItWorks}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="journaling" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <PenLine className="w-7 h-7 text-primary" />
                  Journaling Prompts for Compersion
                </h2>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <p className="text-muted-foreground mb-6">
                    Journaling helps process emotions and rewire thought patterns. Use these prompts regularly:
                  </p>
                  <div className="space-y-3">
                    {journalPrompts.map((prompt, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-background/50 rounded-lg p-3">
                        <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-muted-foreground italic">{prompt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="stories" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Quote className="w-7 h-7 text-primary" />
                  Success Stories
                </h2>
                <p className="text-muted-foreground mb-6">
                  Real experiences from people who developed compersion through practice:
                </p>
                <div className="space-y-6">
                  {successStories.map((story, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Star className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white">{story.name}</h3>
                          <p className="text-sm text-primary">{story.timeFrame}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 italic">"{story.story}"</p>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-green-400">Key Takeaway:</strong> {story.keyTakeaway}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="patience" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <RefreshCw className="w-7 h-7 text-primary" />
                  A Note on Patience
                </h2>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                  <p className="text-muted-foreground mb-4">
                    Compersion is not a light switch. For most people, it develops over months or years of consistent practice. Some things to remember:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Feeling jealousy alongside compersion is normal and does not mean you have failed",
                      "Progress is rarely linear—expect setbacks and do not let them discourage you",
                      "Some relationships may trigger compersion more easily than others",
                      "Your capacity for compersion may vary based on life stress, relationship security, and other factors",
                      "Celebrating small moments of compersion reinforces the neural pathways",
                      "If compersion never comes naturally, that is okay—it is not required for healthy poly"
                    ].map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Continue Your Journey</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/lifestyle/jealousy-management" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">Jealousy Management Guide</h3>
                    <p className="text-sm text-muted-foreground">Complete toolkit for processing jealousy</p>
                  </Link>
                  <Link to="/lifestyle/relationships-communication" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">Communication Guide</h3>
                    <p className="text-sm text-muted-foreground">Scripts for discussing compersion with partners</p>
                  </Link>
                </div>
              </section>
            </article>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Connect With Compersion-Minded Partners</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                SPICE brings together people who are committed to doing the emotional work of ethical non-monogamy.
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

export default BlogCompersionExercises;