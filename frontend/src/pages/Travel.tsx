import { Ship, Hotel, Palmtree, MapPin, Calendar, Star, Users, Heart, ExternalLink, Shield, Sparkles, PartyPopper, Plane, DollarSign, Clock, Check, ChevronRight, Sun, Waves, Music, Martini } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState } from "react";
import { Link } from "react-router-dom";

const Travel = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cruises' | 'resorts' | 'takeovers'>('all');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    "name": "Lifestyle Travel Guide: Swinger Cruises, Resorts & Hotel Takeovers",
    "description": "Complete guide to lifestyle travel including swinger cruises, adults-only resorts, and hotel takeover events for couples and singles.",
    "keywords": "swinger cruise, lifestyle resort, hotel takeover, Desire Riviera Maya, Hedonism II, Bliss Cruise"
  };

  const cruises = [
    {
      name: "Bliss Cruise",
      tagline: "The Ultimate Lifestyle Cruise Experience",
      description: "The world's largest lifestyle cruise, sailing the Caribbean with 3,000+ like-minded passengers. Full ship charters featuring themed parties, world-class entertainment, and clothing-optional decks.",
      image: "https://images.pexels.com/photos/6746785/pexels-photo-6746785.jpeg",
      features: ["Full Ship Charter", "3,000+ Guests", "Caribbean Itineraries", "Themed Nightly Parties", "Playrooms Available"],
      priceRange: "$2,500 - $8,000",
      duration: "7 nights",
      nextSailing: "February 2026",
      rating: 4.9,
      reviews: 2800,
      link: "https://blisscruise.com",
      highlight: "Most Popular"
    },
    {
      name: "Desire Cruises",
      tagline: "Intimate Luxury on the High Seas",
      description: "Boutique lifestyle cruises by Original Group, featuring smaller ships (300-600 guests), all-inclusive luxury, Mediterranean and Caribbean sailings. Clothing-optional throughout.",
      image: "https://images.pexels.com/photos/12427203/pexels-photo-12427203.jpeg",
      features: ["Boutique Ships", "All-Inclusive", "Sensual Entertainment", "Couples-Focused", "Premium Suites"],
      priceRange: "$4,000 - $12,000",
      duration: "7-10 nights",
      nextSailing: "April 2026",
      rating: 4.8,
      reviews: 1400,
      link: "https://desirecruises.com",
      highlight: "Luxury Pick"
    },
    {
      name: "Temptation Caribbean Cruise",
      tagline: "Adults-Only Party Cruise",
      description: "The ultimate playground at sea for adventurous adults. Party atmosphere with world-renowned DJs, topless-optional pool deck, and a playful, flirty environment.",
      image: "https://images.pexels.com/photos/8651513/pexels-photo-8651513.jpeg",
      features: ["Party Atmosphere", "Top DJs", "Topless-Optional", "Singles Welcome", "5-Night Voyages"],
      priceRange: "$1,800 - $5,500",
      duration: "5-7 nights",
      nextSailing: "February 2026",
      rating: 4.7,
      reviews: 1900,
      link: "https://temptationcruises.com",
      highlight: "Best for Singles"
    }
  ];

  const resorts = [
    {
      name: "Desire Riviera Maya Resort",
      location: "Puerto Morelos, Mexico",
      tagline: "The World's Premier Couples-Only Lifestyle Resort",
      description: "The iconic all-inclusive lifestyle resort on the Riviera Maya. Clothing-optional beaches, sensual theme nights, playrooms, and world-class dining. Adults 21+ only.",
      image: "https://images.pexels.com/photos/35334560/pexels-photo-35334560.jpeg",
      features: ["All-Inclusive", "Clothing-Optional", "Beachfront", "Playrooms", "Theme Nights", "Couples Only"],
      priceRange: "$600 - $1,200/night",
      rating: 4.9,
      reviews: 4200,
      link: "https://www.desire-experience.com/riviera-maya",
      highlight: "#1 Rated"
    },
    {
      name: "Hedonism II",
      location: "Negril, Jamaica",
      tagline: "Where Anything Goes",
      description: "The legendary adults-only resort in Jamaica. Two sides: Nude and Prude. Famous for its party atmosphere, beach parties, and clothing-optional lifestyle. Singles and couples welcome.",
      image: "https://images.pexels.com/photos/35334558/pexels-photo-35334558.jpeg",
      features: ["All-Inclusive", "Nude Beach", "Singles Welcome", "Party Vibes", "Water Sports", "Live Entertainment"],
      priceRange: "$350 - $700/night",
      duration: "3+ nights minimum",
      rating: 4.6,
      reviews: 5800,
      link: "https://www.hedonism.com",
      highlight: "Legendary"
    },
    {
      name: "Desire Pearl Resort",
      location: "Puerto Morelos, Mexico",
      tagline: "Intimate Luxury Redefined",
      description: "Sister resort to Desire Riviera Maya with a more intimate, boutique atmosphere. 88 suites, adults 21+, clothing-optional throughout. Romantic and sensual ambiance.",
      image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg",
      features: ["Boutique Resort", "88 Suites", "Ultra-Romantic", "Couples Focused", "Gourmet Dining", "Spa Services"],
      priceRange: "$700 - $1,400/night",
      rating: 4.8,
      reviews: 2100,
      link: "https://www.desire-experience.com/pearl",
      highlight: "Most Intimate"
    },
    {
      name: "Temptation Cancun Resort",
      location: "Cancun, Mexico",
      tagline: "Adults-Only Playground",
      description: "A topless-optional, adults-only resort known for its party atmosphere. Pool parties, themed events, and a lively social scene. Great for couples and singles looking for fun.",
      image: "https://images.pexels.com/photos/8158615/pexels-photo-8158615.jpeg",
      features: ["Topless-Optional", "Pool Parties", "Singles Welcome", "Entertainment", "Beachfront", "Multiple Bars"],
      priceRange: "$300 - $600/night",
      rating: 4.5,
      reviews: 7200,
      link: "https://www.temptation-experience.com",
      highlight: "Best Value"
    }
  ];

  const takeovers = [
    {
      name: "LLV Club Events",
      organizer: "Luxury Lifestyle Vacations",
      tagline: "Premium Hotel Takeover Experiences",
      description: "LLV hosts exclusive hotel takeovers at luxury resorts across Jamaica, Mexico, and the Dominican Republic. Full property takeovers with 300-1000 lifestyle couples.",
      image: "https://images.pexels.com/photos/35329487/pexels-photo-35329487.jpeg",
      features: ["Full Hotel Takeover", "Luxury Resorts", "Themed Parties", "Playrooms", "Couples Only"],
      priceRange: "$3,500 - $8,000",
      duration: "5-7 nights",
      nextEvent: "Monthly Events",
      rating: 4.8,
      reviews: 1600,
      link: "https://llvclub.com",
      highlight: "Top Rated"
    },
    {
      name: "Young Swingers Week",
      organizer: "YSW Events",
      tagline: "For Lifestyle Couples Under 45",
      description: "Hotel takeovers specifically designed for younger lifestyle couples (under 45). Held at Hedonism II Jamaica multiple times per year. High-energy, party-focused.",
      image: "https://images.pexels.com/photos/1024989/pexels-photo-1024989.jpeg",
      features: ["Age-Specific (Under 45)", "Jamaica Location", "High Energy", "Theme Nights", "Couples Focused"],
      priceRange: "$2,800 - $5,500",
      duration: "7 nights",
      nextEvent: "April & October",
      rating: 4.9,
      reviews: 890,
      link: "https://youngswingersweek.com",
      highlight: "Younger Crowd"
    },
    {
      name: "Naughty Events",
      organizer: "Naughty Events LLC",
      tagline: "Upscale Lifestyle Travel",
      description: "Premium hotel takeovers and group trips to lifestyle-friendly destinations. Known for sophisticated crowd, quality over quantity, and excellent event organization.",
      image: "https://images.pexels.com/photos/12427203/pexels-photo-12427203.jpeg",
      features: ["Upscale Crowd", "Quality Events", "Multiple Destinations", "Theme Parties", "Great Organization"],
      priceRange: "$2,500 - $6,000",
      duration: "4-7 nights",
      nextEvent: "Various Dates",
      rating: 4.7,
      reviews: 720,
      link: "https://naughtyevents.com",
      highlight: "Upscale"
    },
    {
      name: "Couples Cruise",
      organizer: "Couples Cruise LLC",
      tagline: "Intimate Group Experiences",
      description: "Smaller, more intimate hotel takeovers and group travel experiences. Focus on quality connections, 100-300 couples per event. Great for first-timers.",
      image: "https://images.pexels.com/photos/35334560/pexels-photo-35334560.jpeg",
      features: ["Intimate Groups", "First-Timer Friendly", "Quality Connections", "Meet & Greets", "Couples Only"],
      priceRange: "$2,000 - $5,000",
      duration: "4-7 nights",
      nextEvent: "Quarterly",
      rating: 4.6,
      reviews: 540,
      link: "https://couplescruise.com",
      highlight: "First-Timer Friendly"
    }
  ];

  const tips = [
    {
      icon: Calendar,
      title: "Book Early",
      description: "Popular cruises and takeovers sell out 6-12 months in advance. Book early for best cabin/room selection."
    },
    {
      icon: Users,
      title: "Travel Insurance",
      description: "Always purchase travel insurance. Many lifestyle events have strict cancellation policies."
    },
    {
      icon: Shield,
      title: "Verify Authenticity",
      description: "Book directly through official websites or reputable travel agents specializing in lifestyle travel."
    },
    {
      icon: Heart,
      title: "Set Expectations",
      description: "Discuss boundaries with your partner before you go. These trips are about connection, not pressure."
    },
    {
      icon: Sparkles,
      title: "Pack Smart",
      description: "Bring themed outfits, swimwear (or none!), and comfortable evening attire. Most events have dress codes."
    },
    {
      icon: Ship,
      title: "First Timer? Start Small",
      description: "Consider a resort stay before a cruise. Resorts let you come and go; cruises are immersive for 7+ days."
    }
  ];

  const renderCard = (item: typeof cruises[0] | typeof resorts[0] | typeof takeovers[0], type: 'cruise' | 'resort' | 'takeover') => {
    const isCruise = type === 'cruise';
    const isResort = type === 'resort';
    const isTakeover = type === 'takeover';
    
    return (
      <div key={item.name} className="group bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Highlight Badge */}
          {'highlight' in item && item.highlight && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              {item.highlight}
            </div>
          )}
          
          {/* Rating */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-sm rounded-full flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold">{item.rating}</span>
            <span className="text-white/70">({item.reviews.toLocaleString()})</span>
          </div>
          
          {/* Price Badge */}
          <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-gradient-to-r from-primary to-purple-600 text-white text-sm font-bold rounded-lg">
            {item.priceRange}
          </div>
          
          {/* Location/Duration */}
          <div className="absolute bottom-4 left-4 text-white">
            {'location' in item && (
              <div className="flex items-center gap-1 text-sm">
                <MapPin className="w-4 h-4" />
                {item.location}
              </div>
            )}
            {'duration' in item && (
              <div className="flex items-center gap-1 text-sm mt-1">
                <Clock className="w-4 h-4" />
                {item.duration}
              </div>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              {'organizer' in item && (
                <p className="text-sm text-muted-foreground">by {item.organizer}</p>
              )}
            </div>
            {isCruise && <Ship className="w-6 h-6 text-primary" />}
            {isResort && <Palmtree className="w-6 h-6 text-primary" />}
            {isTakeover && <Hotel className="w-6 h-6 text-primary" />}
          </div>
          
          <p className="text-sm text-primary font-medium mb-3">{item.tagline}</p>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{item.description}</p>
          
          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-4">
            {item.features.slice(0, 4).map((feature) => (
              <span key={feature} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                {feature}
              </span>
            ))}
            {item.features.length > 4 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                +{item.features.length - 4} more
              </span>
            )}
          </div>
          
          {/* Next Event/Sailing */}
          {'nextSailing' in item && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Next Sailing: <strong className="text-foreground">{item.nextSailing}</strong></span>
            </div>
          )}
          {'nextEvent' in item && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Next Event: <strong className="text-foreground">{item.nextEvent}</strong></span>
            </div>
          )}
          
          {/* CTA Button */}
          <a 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-semibold rounded-xl transition-all group/btn"
          >
            <span>Learn More & Book</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <SEO
        title="Swinger Cruises, Lifestyle Resorts & Hotel Takeovers 2026 | SPICE"
        description="Complete guide to swinger cruises, lifestyle resorts, and hotel takeovers. Compare Bliss Cruise, Desire Resorts, Hedonism II, LLV events, and more. Book your lifestyle vacation."
        keywords="swinger cruise, lifestyle resort, hotel takeover, Bliss Cruise, Desire Riviera Maya, Hedonism II, swinger vacation, lifestyle travel, couples vacation, adults only resort"
        canonical="https://thespiceapp.com/travel"
        structuredData={structuredData}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Ship className="w-6 h-6 text-primary" />
                <Palmtree className="w-6 h-6 text-primary" />
                <Hotel className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Lifestyle Travel Guide 2026
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Your ultimate guide to swinger cruises, lifestyle resorts, and hotel takeover events. 
                Discover the best experiences for couples and adventurous singles.
              </p>
              
              {/* Stats Bar */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Lifestyle Cruises</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">Premium Resorts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">Takeover Events</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Swingers Clubs</div>
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                <button 
                  onClick={() => setActiveCategory('all')}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                    activeCategory === 'all' 
                      ? 'bg-primary text-white' 
                      : 'bg-card/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  All Experiences
                </button>
                <button 
                  onClick={() => setActiveCategory('cruises')}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                    activeCategory === 'cruises' 
                      ? 'bg-primary text-white' 
                      : 'bg-card/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Ship className="w-4 h-4" />
                  Cruises
                </button>
                <button 
                  onClick={() => setActiveCategory('resorts')}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                    activeCategory === 'resorts' 
                      ? 'bg-primary text-white' 
                      : 'bg-card/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Palmtree className="w-4 h-4" />
                  Resorts
                </button>
                <button 
                  onClick={() => setActiveCategory('takeovers')}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                    activeCategory === 'takeovers' 
                      ? 'bg-primary text-white' 
                      : 'bg-card/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Hotel className="w-4 h-4" />
                  Hotel Takeovers
                </button>
                <Link 
                  to="/travel/clubs-resorts"
                  className="px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 bg-card/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                >
                  <Martini className="w-4 h-4" />
                  Clubs & Venues
                </Link>
              </div>
            </div>

            {/* Why Lifestyle Travel Section */}
            <section className="mb-20">
              <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Plane className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Why Choose Lifestyle Travel?</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-background/50 border border-border/50 rounded-xl p-5">
                    <Users className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold text-lg mb-2">Pre-Vetted Community</h3>
                    <p className="text-sm text-muted-foreground">Everyone at these events is there for the same reasons—no awkward explanations needed.</p>
                  </div>
                  <div className="bg-background/50 border border-border/50 rounded-xl p-5">
                    <Shield className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold text-lg mb-2">Safe Environment</h3>
                    <p className="text-sm text-muted-foreground">Professional events with security, consent policies, and judgment-free atmospheres.</p>
                  </div>
                  <div className="bg-background/50 border border-border/50 rounded-xl p-5">
                    <PartyPopper className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold text-lg mb-2">Themed Experiences</h3>
                    <p className="text-sm text-muted-foreground">Nightly theme parties, costumes, entertainment, and activities designed for connection.</p>
                  </div>
                  <div className="bg-background/50 border border-border/50 rounded-xl p-5">
                    <Sun className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold text-lg mb-2">All-Inclusive Luxury</h3>
                    <p className="text-sm text-muted-foreground">Food, drinks, entertainment, and activities included—focus on fun, not logistics.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cruises Section */}
            {(activeCategory === 'all' || activeCategory === 'cruises') && (
              <section className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl">
                    <Ship className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">Lifestyle Cruises</h2>
                    <p className="text-muted-foreground">Full ship charters for the ultimate lifestyle vacation</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cruises.map((cruise) => renderCard(cruise, 'cruise'))}
                </div>
              </section>
            )}

            {/* Resorts Section */}
            {(activeCategory === 'all' || activeCategory === 'resorts') && (
              <section className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl">
                    <Palmtree className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">Lifestyle Resorts</h2>
                    <p className="text-muted-foreground">Year-round adults-only tropical destinations</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {resorts.map((resort) => renderCard(resort, 'resort'))}
                </div>
              </section>
            )}

            {/* Hotel Takeovers Section */}
            {(activeCategory === 'all' || activeCategory === 'takeovers') && (
              <section className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl">
                    <Hotel className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">Hotel Takeovers</h2>
                    <p className="text-muted-foreground">Exclusive group events at luxury resorts</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {takeovers.map((takeover) => renderCard(takeover, 'takeover'))}
                </div>
              </section>
            )}

            {/* Clubs & Resorts CTA Banner */}
            <section className="mb-20">
              <div className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 border border-pink-500/30 rounded-2xl p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="p-4 bg-pink-500/20 rounded-2xl">
                    <Martini className="w-12 h-12 text-pink-400" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Swingers Clubs & Venues</h2>
                    <p className="text-muted-foreground max-w-xl">
                      Explore 25+ lifestyle clubs across 15 cities. Search by location, read reviews, and find the perfect venue for your next adventure.
                    </p>
                  </div>
                  <Link 
                    to="/travel/clubs-resorts"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all whitespace-nowrap"
                  >
                    Browse Clubs
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Comparison Banner */}
            <section className="mb-20">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-8 md:p-10 border border-primary/30">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Cruise vs. Resort vs. Takeover</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">Not sure which is right for you? Here's a quick comparison.</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card/70 backdrop-blur-sm rounded-xl p-6 border border-border">
                    <Ship className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold mb-3">Cruises</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Largest events (2,000-3,000 guests)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Multiple destinations in one trip</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Full immersion experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Best for: Experienced lifestyle couples</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-1 text-sm">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="font-medium">$1,800 - $12,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card/70 backdrop-blur-sm rounded-xl p-6 border border-border">
                    <Palmtree className="w-10 h-10 text-green-400 mb-4" />
                    <h3 className="text-xl font-bold mb-3">Resorts</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Year-round availability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Come and go as you please</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>More flexible stay lengths</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Best for: First-timers or shorter trips</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-1 text-sm">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="font-medium">$300 - $1,400/night</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card/70 backdrop-blur-sm rounded-xl p-6 border border-border">
                    <Hotel className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-xl font-bold mb-3">Takeovers</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Mid-size groups (100-1,000 couples)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>More intimate than cruises</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Age/interest specific options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Best for: Finding your tribe</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-1 text-sm">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="font-medium">$2,000 - $8,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tips Section */}
            <section className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">First-Timer Tips</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Essential advice for your first lifestyle travel experience</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tips.map((tip, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <tip.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-primary/30 via-purple-500/30 to-pink-500/30 rounded-2xl p-8 md:p-12 border border-primary/40 text-center">
                <Waves className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Adventure?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Connect with 50,000+ verified lifestyle couples and singles on SPICE. 
                  Find travel partners, get recommendations, and join group trips.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all gap-2">
                    Download SPICE Free
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <Link to="/travel/cities" className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary hover:bg-primary/10 font-semibold rounded-full transition-all gap-2">
                    Explore City Guides
                    <MapPin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* City Guides Teaser */}
            <section>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Explore City Guides</h2>
                <p className="text-muted-foreground">Detailed guides to the sexiest cities for lifestyle dating</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link to="/travel/miami" className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3">
                    <Sun className="w-8 h-8 text-yellow-400" />
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">Miami</h3>
                      <p className="text-sm text-muted-foreground">7,800+ members</p>
                    </div>
                  </div>
                </Link>
                <Link to="/travel/new-orleans" className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3">
                    <Music className="w-8 h-8 text-purple-400" />
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">New Orleans</h3>
                      <p className="text-sm text-muted-foreground">4,200+ members</p>
                    </div>
                  </div>
                </Link>
                <Link to="/travel/orlando" className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-blue-400" />
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">Orlando</h3>
                      <p className="text-sm text-muted-foreground">5,600+ members</p>
                    </div>
                  </div>
                </Link>
                <Link to="/travel/cancun" className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3">
                    <Palmtree className="w-8 h-8 text-green-400" />
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">Cancún</h3>
                      <p className="text-sm text-muted-foreground">3,100+ members</p>
                    </div>
                  </div>
                </Link>
              </div>
              
              {/* View All Cities Link */}
              <div className="text-center mt-6">
                <Link 
                  to="/travel/cities" 
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  View All 15 Cities
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </section>

          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default Travel;
