import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Plane, MapPin, Star, DollarSign, Calendar, Sun, Ship, Building, Heart, CheckCircle, BookOpen } from "lucide-react";

const BlogSwingingVacation = () => {
  return (
    <>
      <SEO
        title="Planning the Ultimate Swinger Vacation: Top Resorts, Cruises & Destinations 2025-2026 | SPICE"
        description="Complete guide to swinger vacations. Reviews of Desire Resort, Hedonism II, Bliss Cruise, and more. Tips for booking, budgeting, and making the most of lifestyle travel."
        keywords="swinger vacation, lifestyle resorts, Desire Resort, Hedonism II, Bliss Cruise, adult only resorts, swinger travel, lifestyle cruises, swinger destinations 2025"
        canonical="https://thespiceapp.com/blog/swinging-vacation-guide"
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
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">SWINGERS</span>
                <span className="text-xs text-muted-foreground">20 min read</span>
                <span className="text-xs text-muted-foreground">Updated January 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Planning the Ultimate Swinger Vacation: Top Resorts, Cruises, and Destinations for 2025-2026
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From Caribbean paradises to European hotspots—your complete guide to the best lifestyle travel destinations, with insider tips on booking, budgeting, and what to expect.
              </p>
            </div>

            {/* Featured Section */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-12 mb-12 text-center border border-primary/30">
              <Plane className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Your Passport to Lifestyle Paradise</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                In This Guide
              </h2>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li><a href="#why-vacation" className="hover:text-primary">→ Why a Lifestyle Vacation?</a></li>
                <li><a href="#desire-resorts" className="hover:text-primary">→ Desire Resorts (Mexico)</a></li>
                <li><a href="#hedonism" className="hover:text-primary">→ Hedonism II (Jamaica)</a></li>
                <li><a href="#temptation" className="hover:text-primary">→ Temptation Resort</a></li>
                <li><a href="#cruises" className="hover:text-primary">→ Lifestyle Cruises</a></li>
                <li><a href="#european" className="hover:text-primary">→ European Destinations</a></li>
                <li><a href="#budget" className="hover:text-primary">→ Budgeting Tips</a></li>
                <li><a href="#booking" className="hover:text-primary">→ Booking Strategies</a></li>
                <li><a href="#packing" className="hover:text-primary">→ What to Pack</a></li>
                <li><a href="#firsttimers" className="hover:text-primary">→ First-Timer Tips</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section id="why-vacation" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Sun className="w-8 h-8 text-yellow-500" />
                  Why Take a Lifestyle Vacation?
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  There's something magical about exploring the swinging lifestyle in a dedicated environment. Away from the stresses of daily life, surrounded by like-minded couples, you can truly relax into the experience. Whether you're seasoned swingers or just getting started, a lifestyle vacation offers:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-bold text-primary mb-2">Freedom & Acceptance</h4>
                    <p className="text-sm text-muted-foreground">Everyone is there for the same reason. No judgment, no explaining. Just be yourselves.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-bold text-primary mb-2">Built-In Social Scene</h4>
                    <p className="text-sm text-muted-foreground">Meet couples from around the world. Instant community without awkward introductions.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-bold text-primary mb-2">Romantic Reconnection</h4>
                    <p className="text-sm text-muted-foreground">Focus on your relationship without kids, work, or household responsibilities.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-bold text-primary mb-2">Safe Exploration</h4>
                    <p className="text-sm text-muted-foreground">Professional venues with clear rules, security, and a culture of consent.</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  If you're new to swinging, start with our <Link to="/blog/swinging-101-beginners-guide" className="text-primary hover:underline">Swinging 101 Guide</Link> to understand the basics before booking your trip.
                </p>
              </section>

              <section id="desire-resorts" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Building className="w-8 h-8 text-blue-500" />
                  Desire Resorts (Riviera Maya, Mexico)
                </h2>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-muted-foreground ml-2">Top-Rated Lifestyle Resort</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The gold standard in lifestyle resorts. Desire offers two distinct properties—<strong>Desire Riviera Maya Pearl</strong> (sensual, elegant) and <strong>Desire Riviera Maya Resort</strong> (playful, adventurous)—both offering clothing-optional beaches, playrooms, and an upscale atmosphere.
                  </p>

                  <h4 className="font-bold text-white mb-3">What Makes Desire Special:</h4>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Gourmet dining:</strong> Multiple restaurants with world-class cuisine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Nightly entertainment:</strong> Themed parties, shows, and games</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Playroom:</strong> Tasteful, private spaces for couples who want to play</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Sin Room:</strong> More adventurous play space (Desire RM)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Jacuzzi lounge:</strong> Signature social hub for meeting couples</span>
                    </li>
                  </ul>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-card/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-4 h-4 text-green-500" />
                        <span className="font-bold text-sm">Price Range</span>
                      </div>
                      <p className="text-sm text-muted-foreground">$400-700/night all-inclusive</p>
                    </div>
                    <div className="bg-card/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="font-bold text-sm">Best Time to Book</span>
                      </div>
                      <p className="text-sm text-muted-foreground">6-12 months in advance</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-yellow-400">Pro Tip:</strong> Book during "takeover" weeks when lifestyle groups charter the resort. You'll meet hundreds of couples and enjoy exclusive events. Check SDC, SLS, or Kasidie for organized trips.
                  </p>
                </div>
              </section>

              <section id="hedonism" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Sun className="w-8 h-8 text-orange-500" />
                  Hedonism II (Negril, Jamaica)
                </h2>

                <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-muted-foreground ml-2">The Legendary Party Resort</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The original adult playground, Hedonism II has been going strong since 1976. Known for its wild parties, uninhibited atmosphere, and Jamaica's famous Seven Mile Beach. More party-focused than Desire, with a younger, more diverse crowd.
                  </p>

                  <h4 className="font-bold text-white mb-3">The Hedo Experience:</h4>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Two sides:</strong> "Prude" (clothing required) and "Nude" (clothing optional)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Nude beach:</strong> Miles of pristine sand with ocean play</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Playrooms:</strong> Mirror Room, Romping Shop, private cabanas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Nightly toga parties:</strong> Legendary themed events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Water sports:</strong> Kayaking, paddleboarding, snorkeling included</span>
                    </li>
                  </ul>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-card/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-4 h-4 text-green-500" />
                        <span className="font-bold text-sm">Price Range</span>
                      </div>
                      <p className="text-sm text-muted-foreground">$250-450/night all-inclusive</p>
                    </div>
                    <div className="bg-card/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-bold text-sm">Location</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Negril, Jamaica (MBJ airport)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Hedo vs. Desire:</strong> Hedo is more "party" while Desire is more "sensual." Hedo attracts a broader crowd including singles; Desire is couples-only. Choose Hedo for energy and adventure; Desire for romance and sophistication.
                  </p>
                </div>
              </section>

              <section id="temptation" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-pink-500" />
                  Temptation Resort (Cancun, Mexico)
                </h2>

                <div className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6 mb-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Perfect for couples dipping their toes into the lifestyle. Temptation is "topless-optional" rather than fully nude, creating a more approachable entry point. Think sexy spring break for adults—party vibes with a sensual edge.
                  </p>

                  <h4 className="font-bold text-white mb-3">Why Choose Temptation:</h4>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li>• Sexy Pool with DJs, games, and topless sunbathing</li>
                    <li>• Bash Bar with live entertainment nightly</li>
                    <li>• Theme nights (Glow Party, White Party, etc.)</li>
                    <li>• More mainstream crowd—great for "testing the waters"</li>
                    <li>• Quiet Pool for relaxation away from the party</li>
                  </ul>

                  <div className="bg-card/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      <span className="font-bold text-sm">Price Range</span>
                    </div>
                    <p className="text-sm text-muted-foreground">$200-350/night all-inclusive</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Note: Temptation doesn't have playrooms—it's more about flirting and sexy energy than actual swinging. Great for couples who want to feel naughty without the pressure of play.
                </p>
              </section>

              <section id="cruises" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Ship className="w-8 h-8 text-cyan-500" />
                  Lifestyle Cruises: The Ultimate Floating Party
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Imagine 3,000+ lifestyle couples on a full ship takeover. Cruises offer something resorts can't: variety. Different ports, massive venues, world-class entertainment, and an incredible sense of community.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-cyan-400 mb-3">Bliss Cruise</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      The premier lifestyle cruise experience. Full ship charters on Celebrity and Royal Caribbean vessels. Known for production-quality events, couples-only policy, and exceptional organization.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Sails from Florida to Caribbean destinations</li>
                      <li>• Theme nights with elaborate costumes</li>
                      <li>• Playrooms converted from ship lounges</li>
                      <li>• Price: $2,000-5,000/person for 4-7 nights</li>
                    </ul>
                  </div>

                  <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-purple-400 mb-3">Desire Cruises</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      From the same company as Desire Resorts. More intimate ship sizes (300-600 guests) with the same upscale, sensual atmosphere you'd expect from the brand.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Greek Islands, Mediterranean, Caribbean itineraries</li>
                      <li>• Smaller, more intimate environment</li>
                      <li>• Clothing-optional decks</li>
                      <li>• Price: $3,000-7,000/person for 7 nights</li>
                    </ul>
                  </div>

                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-green-400 mb-3">Couples Cruise</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Newer entrant with competitive pricing. Full ship charters focusing on the sexy, fun atmosphere without being as "intense" as some other cruises.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Focus on fun and connection, less on play</li>
                      <li>• Great for lifestyle-curious couples</li>
                      <li>• Caribbean destinations</li>
                      <li>• Price: $1,500-3,500/person for 4-7 nights</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-yellow-400">Cruise Booking Tip:</strong> Lifestyle cruises sell out 12-18 months in advance. Book as early as possible for best cabin selection. Many cruises offer payment plans to spread the cost.
                  </p>
                </div>
              </section>

              <section id="european" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-red-500" />
                  European Hotspots
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Europe has a more relaxed attitude toward sexuality, reflected in its lifestyle scene. While not as "resort-focused" as the Americas, European destinations offer unique experiences.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-bold text-primary mb-2">Cap d'Agde (France)</h4>
                    <p className="text-sm text-muted-foreground">The world's largest naturist village with a notorious "swingers quarter." Entire streets of clubs, bars, and beaches. Peak season: July-August.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-bold text-primary mb-2">Ibiza (Spain)</h4>
                    <p className="text-sm text-muted-foreground">Famous party island with several lifestyle clubs. Es Paradis and Amnesia host special events. Combine clubbing with lifestyle.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-bold text-primary mb-2">Berlin (Germany)</h4>
                    <p className="text-sm text-muted-foreground">KitKatClub is legendary. Europe's most open-minded city for all alternative lifestyles. Year-round scene.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h4 className="font-bold text-primary mb-2">Amsterdam (Netherlands)</h4>
                    <p className="text-sm text-muted-foreground">Fun4Two is one of Europe's largest swingers clubs. Liberal attitude makes for comfortable exploration.</p>
                  </div>
                </div>
              </section>

              <section id="budget" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-green-500" />
                  Budgeting Your Lifestyle Vacation
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Lifestyle travel can be expensive, but smart planning helps. Here's what to budget for a week-long trip:
                </p>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Sample Budget: 7 Nights at Desire</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Resort (all-inclusive)</span>
                      <span className="font-bold">$3,500 - $5,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Flights (2 people from US)</span>
                      <span className="font-bold">$600 - $1,200</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Transfers/Transportation</span>
                      <span className="font-bold">$100 - $200</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Sexy outfits & costumes</span>
                      <span className="font-bold">$200 - $500</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Spa treatments</span>
                      <span className="font-bold">$150 - $300</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Tips & extras</span>
                      <span className="font-bold">$200 - $400</span>
                    </div>
                    <div className="flex justify-between items-center py-2 bg-primary/10 rounded-lg px-3">
                      <span className="font-bold text-white">Total Estimate</span>
                      <span className="font-bold text-primary">$4,750 - $7,600</span>
                    </div>
                  </div>
                </div>

                <h4 className="font-bold text-white mb-4">Money-Saving Tips:</h4>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Book during shoulder season (May, October) for 20-30% savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Use credit card points for flights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Join resort loyalty programs for perks and upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Book early for best rates and room selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Consider 4-night stays instead of full weeks</span>
                  </li>
                </ul>
              </section>

              <section id="booking" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-purple-500" />
                  Booking Strategies for 2025-2026
                </h2>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">When to Book What:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li><strong>Lifestyle Cruises:</strong> 12-18 months ahead (they sell out fast!)</li>
                    <li><strong>Desire during takeover weeks:</strong> 8-12 months ahead</li>
                    <li><strong>Desire regular weeks:</strong> 4-6 months ahead</li>
                    <li><strong>Hedonism II:</strong> 2-4 months ahead (more availability)</li>
                    <li><strong>European clubs/events:</strong> Check specific event calendars</li>
                  </ul>
                </div>

                <h4 className="font-bold text-white mb-4">Recommended Booking Channels:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Direct from resort:</strong> Best price guarantee, loyalty points</li>
                  <li>• <strong>SDC/SLS/Kasidie travel sections:</strong> Group trips with built-in social</li>
                  <li>• <strong>Travel agents specializing in lifestyle:</strong> Personalized service, group rates</li>
                  <li>• <strong>Resort-sponsored groups:</strong> Often include exclusive events</li>
                </ul>
              </section>

              <section id="packing" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">What to Pack for a Lifestyle Vacation</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-pink-400 mb-4">For Her</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Multiple bikinis (you'll change often)</li>
                      <li>✓ Sexy evening wear for theme nights</li>
                      <li>✓ Heels that you can dance in</li>
                      <li>✓ Lingerie for playroom and private time</li>
                      <li>✓ Cover-ups and wraps</li>
                      <li>✓ Comfortable day outfits</li>
                      <li>✓ Sexy costumes for themes</li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-blue-400 mb-4">For Him</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Multiple swim trunks</li>
                      <li>✓ Linen pants and nice shirts</li>
                      <li>✓ Dress shoes for evenings</li>
                      <li>✓ Themed costume pieces</li>
                      <li>✓ Comfortable loafers</li>
                      <li>✓ Casual day wear</li>
                      <li>✓ Nice underwear</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-6">
                  <h4 className="font-bold text-white mb-4">Don't Forget:</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <li>✓ Condoms (your preferred brand)</li>
                    <li>✓ Lube</li>
                    <li>✓ Any toys you love</li>
                    <li>✓ Sunscreen (lots of it)</li>
                    <li>✓ After-sun lotion</li>
                    <li>✓ Motion sickness meds (cruises)</li>
                    <li>✓ Any prescriptions</li>
                    <li>✓ Passport (international travel)</li>
                  </ul>
                </div>
              </section>

              <section id="firsttimers" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">First-Timer Tips</h2>

                <div className="space-y-4 mb-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                    <h4 className="font-bold text-green-400 mb-2">1. Start with a Resort, Not a Cruise</h4>
                    <p className="text-sm text-muted-foreground">Resorts let you ease in at your own pace. Cruises are more intense with thousands of couples and packed schedules.</p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                    <h4 className="font-bold text-green-400 mb-2">2. No Pressure to Play</h4>
                    <p className="text-sm text-muted-foreground">Many couples attend lifestyle resorts just for the vibe. It's completely acceptable to watch, socialize, and not participate in play.</p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                    <h4 className="font-bold text-green-400 mb-2">3. Discuss Expectations Beforehand</h4>
                    <p className="text-sm text-muted-foreground">What are you hoping to experience? What are your boundaries? Have this conversation before you leave. Read our guide on <Link to="/blog/swinging-soft-full-swap" className="text-primary hover:underline">Soft Swap vs. Full Swap</Link>.</p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                    <h4 className="font-bold text-green-400 mb-2">4. Arrive with an Open Mind</h4>
                    <p className="text-sm text-muted-foreground">You might not meet your "dream couple." Focus on the overall experience—the freedom, the connection, the adventure.</p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                    <h4 className="font-bold text-green-400 mb-2">5. Check In with Each Other Daily</h4>
                    <p className="text-sm text-muted-foreground">Quick morning and evening check-ins. "How are you feeling? What would you like today?" Communication is everything.</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  For more on navigating your first experience, see our <Link to="/blog/swinging-101-beginners-guide" className="text-primary hover:underline">Swinging 101 Guide</Link> and <Link to="/blog/swinging-jealousy-tools" className="text-primary hover:underline">Jealousy Management Tools</Link>.
                </p>
              </section>

              {/* Final Section */}
              <section className="mb-12">
                <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30">
                  <h3 className="text-2xl font-bold mb-4 text-center">Ready to Book Your Adventure?</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    A lifestyle vacation can be transformative for your relationship. Whether you choose a sensual resort, legendary party destination, or floating paradise, you're in for an unforgettable experience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/blog/swinging-etiquette-rules"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all"
                    >
                      Learn Lifestyle Etiquette
                    </Link>
                    <Link
                      to="/blog/swinging-health-safety"
                      className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition-all"
                    >
                      Health & Safety Guide
                    </Link>
                  </div>
                </div>
              </section>

              {/* Related Articles */}
              <section>
                <h3 className="text-2xl font-bold mb-6">Continue Your Swinging Journey</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/blog/swinging-101-beginners-guide" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <span className="text-xs text-primary">SWINGERS</span>
                    <h4 className="font-bold group-hover:text-primary transition-colors mt-1">Swinging 101: The Complete Beginner's Guide</h4>
                    <p className="text-sm text-muted-foreground mt-2">Everything you need to know to start your swinging journey.</p>
                  </Link>
                  <Link to="/blog/swinging-mistakes-avoid" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <span className="text-xs text-primary">SWINGERS</span>
                    <h4 className="font-bold group-hover:text-primary transition-colors mt-1">Biggest Mistakes New Swingers Make</h4>
                    <p className="text-sm text-muted-foreground mt-2">Learn from others' mistakes and avoid common pitfalls.</p>
                  </Link>
                  <Link to="/blog/swinging-finding-couples" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <span className="text-xs text-primary">SWINGERS</span>
                    <h4 className="font-bold group-hover:text-primary transition-colors mt-1">Finding Your Perfect Match</h4>
                    <p className="text-sm text-muted-foreground mt-2">Best ways to meet other swingers in 2025.</p>
                  </Link>
                  <Link to="/blog/swinging-health-safety" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <span className="text-xs text-primary">SWINGERS</span>
                    <h4 className="font-bold group-hover:text-primary transition-colors mt-1">Health, Safety & Consent Guide</h4>
                    <p className="text-sm text-muted-foreground mt-2">Non-negotiables for responsible swinging.</p>
                  </Link>
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

export default BlogSwingingVacation;
