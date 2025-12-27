import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, Sparkles, Users, Shield, Target, Lightbulb, Rocket, Star, Quote, ArrowRight } from "lucide-react";

const OurStory = () => {
  const timeline = [
    {
      year: "The Problem",
      title: "We Saw a Gap in the Market",
      description: "As active members of the lifestyle community, we experienced firsthand the frustrations of existing platforms: fake profiles, poor verification, judgmental environments, and apps that treated our community as an afterthought. We knew there had to be a better way.",
      icon: Lightbulb,
      color: "text-amber-500",
      bgColor: "bg-amber-500/20"
    },
    {
      year: "The Vision",
      title: "Built By the Community, For the Community",
      description: "We envisioned a platform where swingers, kinksters, and ethically non-monogamous individuals could connect authentically—without fear of judgment, catfishing, or privacy breaches. A place designed specifically for our unique needs.",
      icon: Target,
      color: "text-purple-500",
      bgColor: "bg-purple-500/20"
    },
    {
      year: "The Build",
      title: "Creating Something Different",
      description: "We assembled a team of lifestyle community members, developers, and safety experts. Every feature was designed with input from real users. The BDSM compatibility quiz, dual verification system, and educational resources—all born from community feedback.",
      icon: Rocket,
      color: "text-blue-500",
      bgColor: "bg-blue-500/20"
    },
    {
      year: "Today",
      title: "SPICE is Here",
      description: "After years of development and countless hours of community testing, SPICE is ready to transform how the lifestyle community connects. We're not just another dating app—we're a movement toward safer, more authentic connections.",
      icon: Star,
      color: "text-pink-500",
      bgColor: "bg-pink-500/20"
    }
  ];

  const founders = [
    {
      quote: "We built SPICE because we were tired of settling for apps that didn't understand our community. Every feature exists because we wished it existed when we were looking for connections.",
      author: "SPICE Founding Team",
      role: "Lifestyle Community Members & Tech Enthusiasts"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Real verification, 24/7 moderation, and zero tolerance for bad actors. Your safety is non-negotiable."
    },
    {
      icon: Heart,
      title: "Authentic Connections",
      description: "No bots, no fakes, no games. Just real people seeking real connections in our community."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Every feature is shaped by community feedback. This is your platform—we just built it."
    },
    {
      icon: Sparkles,
      title: "Judgment-Free",
      description: "Celebrate your desires openly. SPICE is a space where all consensual lifestyles are welcomed and respected."
    }
  ];

  return (
    <>
      <SEO
        title="Our Story | How SPICE Was Built for the Lifestyle Community | SPICE"
        description="Discover the story behind SPICE—built by lifestyle community members who were frustrated with existing dating apps. Learn how we're creating the safest, most authentic platform for swingers, BDSM, and ENM communities."
        keywords="SPICE story, lifestyle app founders, about SPICE team, why SPICE was created, lifestyle dating app story, SPICE mission"
        canonical="https://thespiceapp.com/about/our-story"
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
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Story</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Built By the Community,<br />For the Community
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                SPICE wasn't created in a boardroom by people who don't understand our lifestyle. 
                It was born from real frustration, real experience, and a real desire to give our community something better.
              </p>
            </div>

            {/* Opening Statement */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 border border-primary/30 rounded-2xl p-8 md:p-12 mb-16 text-center">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                "We were swingers looking for swingers. Kinksters looking for compatible partners. 
                Polyamorous people seeking authentic connections. And every app we tried let us down."
              </blockquote>
              <p className="text-muted-foreground">
                — The SPICE Founding Team
              </p>
            </div>

            {/* The Journey Timeline */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-10 text-center">Our Journey</h2>
              <div className="space-y-6">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center`}>
                            <Icon className={`w-8 h-8 ${item.color}`} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className={`text-sm font-bold ${item.color} mb-2`}>{item.year}</div>
                          <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What We Believe */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4 text-center">What We Believe</h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                These aren't just corporate values on a wall. They're promises we make to our community every day.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                          <p className="text-muted-foreground text-sm">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Why We're Different */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Why We're Different</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Verification Required<br />
                    <span className="text-xs">No exceptions. Ever.</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">
                    Active Moderation<br />
                    <span className="text-xs">Human + AI protection</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">0</div>
                  <div className="text-sm text-muted-foreground">
                    Tolerance for Bad Actors<br />
                    <span className="text-xs">Permanent device bans</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-border">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Features No Other App Has</h3>
                    <p className="text-sm text-muted-foreground">
                      BDSM Compatibility Quiz • Dual Verification • Local Events Calendar • 60+ Educational Guides
                    </p>
                  </div>
                  <Link 
                    to="/about/why-different"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold whitespace-nowrap"
                  >
                    See Full Comparison
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Founder Quote */}
            <div className="bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-primary/20 border border-purple-500/30 rounded-2xl p-8 md:p-12 mb-16">
              <div className="max-w-3xl mx-auto text-center">
                <Quote className="w-10 h-10 text-purple-400 mx-auto mb-6 opacity-50" />
                <blockquote className="text-lg md:text-xl mb-6 leading-relaxed">
                  "{founders[0].quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-purple-400">{founders[0].author}</div>
                  <div className="text-sm text-muted-foreground">{founders[0].role}</div>
                </div>
              </div>
            </div>

            {/* Our Promise */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Promise to You</h2>
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="p-1 bg-green-500/20 rounded-full mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">We will never sell your data.</span> Your privacy is sacred, and we treat it that way.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-1 bg-green-500/20 rounded-full mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">We will always listen to our community.</span> Your feedback directly shapes our roadmap.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-1 bg-green-500/20 rounded-full mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">We will never compromise on safety.</span> Verification and moderation aren't optional—they're essential.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-1 bg-green-500/20 rounded-full mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">We will remain judgment-free.</span> All consensual lifestyles are celebrated here.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-1 bg-green-500/20 rounded-full mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">We will keep innovating.</span> The best lifestyle app today should be even better tomorrow.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Join Us CTA */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <h2 className="text-3xl font-bold mb-4">Be Part of Our Story</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                SPICE is more than an app—it's a community. Join thousands of lifestyle enthusiasts 
                who are already experiencing the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/download" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all"
                >
                  Download SPICE Free
                </Link>
                <Link 
                  to="/about" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-background/50 hover:bg-background/80 border border-border font-semibold rounded-full transition-all"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default OurStory;
