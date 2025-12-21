import { GraduationCap, BookOpen, Users, Target, TrendingUp, CheckCircle, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const Academy = () => {
  const learningPaths = [
    { level: "Beginner", title: "Lifestyle 101", modules: 8, desc: "Perfect for those new to swinging, BDSM, or ENM. Covers basics, safety, communication, and first steps.", color: "green" },
    { level: "Intermediate", title: "Expanding Horizons", modules: 12, desc: "For those with some experience. Dive deeper into dynamics, advanced communication, and navigating challenges.", color: "primary" },
    { level: "Advanced", title: "Mastery & Leadership", modules: 10, desc: "Become a community leader. Advanced dynamics, teaching others, and deepening your practice.", color: "purple" },
  ];

  const topics = [
    "Consent & Communication Fundamentals",
    "BDSM Basics & Safety",
    "Swinging for Couples",
    "Polyamory & ENM Structures",
    "Jealousy Management Tools",
    "Advanced BDSM Dynamics",
    "Community Building & Leadership",
    "Sexual Health & Safety Practices"
  ];

  return (
    <>
      <SEO
        title="SPICE Academy: Structured Lifestyle Education & Learning Modules"
        description="Comprehensive learning paths for lifestyle dating. Structured modules covering consent, BDSM, swinging, polyamory, communication, and safety. From beginner to advanced."
        keywords="lifestyle education, swinger training, BDSM academy, polyamory learning, ENM courses, lifestyle modules, consent training"
        canonical="https://thespiceapp.com/academy"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/20 rounded-full">
                  <GraduationCap className="w-16 h-16 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                SPICE Academy
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Structured learning paths for lifestyle education. Master consent, communication, BDSM, swinging, and polyamory through guided modules.
              </p>
            </div>

            <div className="mb-16">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Sparkles className="w-10 h-10 text-yellow-500" />
                  <h2 className="text-2xl font-bold">30+ Learning Modules</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  From complete beginner to advanced practitioner - structured education for your journey
                </p>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Learning Paths</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {learningPaths.map((path, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                    <div className="mb-4">
                      <span className={`text-xs font-bold bg-${path.color}-500/20 text-${path.color}-500 px-3 py-1 rounded-full`}>
                        {path.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{path.desc}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>{path.modules} modules</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {topics.map((topic, index) => (
                    <div key={index} className="flex items-start gap-3 bg-background/50 border border-border/50 rounded-lg p-4">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Start Your Learning Journey</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <a href="/guide/newcomers" className="bg-background/50 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all">
                    <h3 className="font-bold text-primary mb-2">Beginner Guides</h3>
                    <p className="text-sm text-muted-foreground mb-3">Start here if you're new</p>
                    <span className="text-primary text-sm font-semibold">Read Guides →</span>
                  </a>
                  <a href="/quiz" className="bg-background/50 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all">
                    <h3 className="font-bold text-primary mb-2">BDSM Quiz</h3>
                    <p className="text-sm text-muted-foreground mb-3">Discover your kink profile</p>
                    <span className="text-primary text-sm font-semibold">Take Quiz →</span>
                  </a>
                  <a href="/lifestyle/swingers-guide" className="bg-background/50 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all">
                    <h3 className="font-bold text-primary mb-2">Swingers Guide</h3>
                    <p className="text-sm text-muted-foreground mb-3">Complete swinging education</p>
                    <span className="text-primary text-sm font-semibold">Read Guide →</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <h2 className="text-3xl font-bold mb-4">Join the Academy</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Download SPICE to access all Academy modules, quizzes, and learning paths
              </p>
              <a href="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                Download SPICE Free
              </a>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default Academy;