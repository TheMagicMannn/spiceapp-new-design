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
      name: "Whispers",
      city: "Las Vegas",
      state: "NV",
      tagline: "Upscale Intimate Experience",
      description: "An elegant, upscale lifestyle club offering a more intimate experience than the mega-clubs. Known for its sophisticated crowd, excellent dance floor, and well-appointed play areas. Couples-focused atmosphere.",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
      features: ["Upscale Crowd", "Intimate Setting", "Dance Floor", "BYOB", "Couples Focused", "Private Rooms"],
      priceRange: "$60-100/couple",
      hours: "Fri-Sat 9PM-4AM",
      dressCode: "Upscale Sexy",
      rating: 4.6,
      reviews: 890,
      link: "https://whisperslv.com",
      highlight: "Most Upscale",
      established: "2008"
    },
    {
      name: "Red Rooster",
      city: "Las Vegas",
      state: "NV",
      tagline: "The Original Vegas Swinger Club",
      description: "One of the oldest and most established swinger clubs in America. A Vegas institution since 1982. More casual, house-party vibe with a diverse crowd. Great for first-timers looking for a relaxed introduction.",
      image: "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg",
      features: ["Historic Venue", "Relaxed Vibe", "House Party Feel", "BYOB", "All Experience Levels", "Pool Available"],
      priceRange: "$50-75/couple",
      hours: "Fri-Sat 9PM-5AM",
      dressCode: "Casual Sexy",
      rating: 4.3,
      reviews: 1650,
      link: "https://redroosterlv.com",
      highlight: "Classic",
      established: "1982"
    },
    // MIAMI
    {
      name: "Trapeze",
      city: "Miami",
      state: "FL",
      tagline: "South Florida's Legendary Club",
      description: "The crown jewel of Florida's lifestyle scene. Massive 10,000 sq ft facility with outdoor pool, multiple play areas, and legendary theme nights. Saturday nights are world-famous. A bucket-list destination.",
      image: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg",
      features: ["10,000 Sq Ft", "Outdoor Pool", "Theme Nights", "BYOB", "Dance Floor", "Couples & Singles"],
      priceRange: "$75-125/couple",
      hours: "Fri-Sat 9PM-3AM",
      dressCode: "Upscale Sexy",
      rating: 4.8,
      reviews: 3200,
      link: "https://trapezeclubmiami.com",
      highlight: "Legendary",
      established: "1990"
    },
    {
      name: "Miami Velvet",
      city: "Miami",
      state: "FL",
      tagline: "Ultra-Luxe Lifestyle Experience",
      description: "The most luxurious lifestyle club in Miami. Stunning modern design, bottle service, VIP areas, and an atmosphere that rivals the best nightclubs. Draws a beautiful, fashion-forward crowd. Premium experience.",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg",
      features: ["Ultra-Luxury", "Bottle Service", "VIP Areas", "Modern Design", "Beautiful Crowd", "Premium Sound"],
      priceRange: "$100-200/couple",
      hours: "Fri-Sat 10PM-4AM",
      dressCode: "Upscale Club Attire",
      rating: 4.7,
      reviews: 1800,
      link: "https://miamivelvetnightclub.com",
      highlight: "Most Luxurious",
      established: "2010"
    },
    {
      name: "Secrets Hideaway",
      city: "Kissimmee",
      state: "FL",
      tagline: "Orlando Area's Only Resort Club",
      description: "A unique lifestyle resort near Orlando with overnight accommodations, multiple pools, and club facilities. Perfect for weekend getaways. Features themed weekends, pool parties, and a welcoming atmosphere.",
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
      features: ["Resort Style", "Overnight Stays", "Multiple Pools", "Theme Weekends", "Restaurant", "Couples Only"],
      priceRange: "$100-175/night",
      hours: "Open Daily",
      dressCode: "Resort Casual",
      rating: 4.5,
      reviews: 2100,
      link: "https://secretsfl.com",
      highlight: "Resort Club",
      established: "2005"
    },
    // DALLAS / TEXAS
    {
      name: "Colette Dallas",
      city: "Dallas",
      state: "TX",
      tagline: "Nationally Acclaimed Club Experience",
      description: "Part of the renowned Colette chain known for premium experiences. Upscale venue with excellent facilities, professional management, and a sophisticated crowd. One of the best-run clubs in America.",
      image: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg",
      features: ["Colette Brand", "Premium Facilities", "Great Management", "BYOB", "New Members Welcome", "Regular Events"],
      priceRange: "$75-125/couple",
      hours: "Fri-Sat 9PM-3AM",
      dressCode: "Upscale Sexy",
      rating: 4.8,
      reviews: 1450,
      link: "https://coletteclubs.com/dallas",
      highlight: "Top Rated",
      established: "2012"
    },
    {
      name: "Players Club DFW",
      city: "Dallas",
      state: "TX",
      tagline: "DFW's Largest Lifestyle Club",
      description: "The biggest lifestyle club in the Dallas-Fort Worth metroplex. Large dance floor, multiple play areas, and a welcoming atmosphere for couples and singles. Regular theme nights and special events.",
      image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg",
      features: ["Large Venue", "Big Dance Floor", "Theme Nights", "BYOB", "Couples & Singles", "Party Atmosphere"],
      priceRange: "$50-80/couple",
      hours: "Fri-Sat 9PM-4AM",
      dressCode: "Sexy Attire",
      rating: 4.4,
      reviews: 1100,
      link: "https://playersclubdfw.com",
      highlight: "Largest in DFW",
      established: "2000"
    },
    {
      name: "Colette Houston",
      city: "Houston",
      state: "TX",
      tagline: "Houston's Premier Lifestyle Venue",
      description: "Another gem in the Colette collection. Spacious, beautifully designed club with a diverse, friendly crowd. Known for excellent theme parties, professional staff, and consistently great experiences.",
      image: "https://images.pexels.com/photos/3171770/pexels-photo-3171770.jpeg",
      features: ["Colette Brand", "Spacious Layout", "Diverse Crowd", "BYOB", "Theme Parties", "Professional Staff"],
      priceRange: "$75-125/couple",
      hours: "Fri-Sat 9PM-3AM",
      dressCode: "Upscale Sexy",
      rating: 4.7,
      reviews: 980,
      link: "https://coletteclubs.com/houston",
      highlight: "Premium",
      established: "2015"
    },
    {
      name: "Colette Austin",
      city: "Austin",
      state: "TX",
      tagline: "Keep Austin Weird... And Sexy",
      description: "The Austin outpost of the Colette brand brings premium lifestyle experiences to the Texas capital. Attracts Austin's open-minded, creative crowd. Excellent facilities and a fun, adventurous vibe.",
      image: "https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg",
      features: ["Colette Brand", "Creative Crowd", "Austin Vibe", "BYOB", "Well-Designed", "Friendly Atmosphere"],
      priceRange: "$75-125/couple",
      hours: "Fri-Sat 9PM-3AM",
      dressCode: "Upscale Sexy",
      rating: 4.6,
      reviews: 720,
      link: "https://coletteclubs.com/austin",
      highlight: "Austin Vibe",
      established: "2018"
    },
    // LOS ANGELES / CALIFORNIA
    {
      name: "Club Joi",
      city: "Los Angeles",
      state: "CA",
      tagline: "LA's Most Exclusive Lifestyle Club",
      description: "The most exclusive and upscale lifestyle club in Los Angeles. Members-only with a strict vetting process. Attracts entertainment industry professionals and LA's elite. Ultra-high-end facilities.",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
      features: ["Members Only", "Ultra Exclusive", "Vetting Process", "Industry Crowd", "Premium Everything", "Privacy Focused"],
      priceRange: "$200-500/couple",
      hours: "Sat 10PM-4AM",
      dressCode: "High Fashion",
      rating: 4.9,
      reviews: 650,
      link: "https://clubjoi.com",
      highlight: "Most Exclusive",
      established: "2008"
    },
    {
      name: "Freedom Acres",
      city: "San Bernardino",
      state: "CA",
      tagline: "SoCal's Premier Outdoor Club",
      description: "A unique outdoor lifestyle resort east of LA. Features pools, hot tubs, camping, and RV hookups. Perfect for weekend getaways. Day and night parties, theme events, and a relaxed atmosphere.",
      image: "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg",
      features: ["Outdoor Resort", "Pools & Hot Tubs", "Camping Available", "RV Hookups", "Theme Events", "Day Parties"],
      priceRange: "$50-100/couple",
      hours: "Weekends Only",
      dressCode: "Casual/Nude",
      rating: 4.4,
      reviews: 1400,
      link: "https://freedomacres.net",
      highlight: "Outdoor Resort",
      established: "1985"
    },
    {
      name: "Sea Mountain Inn",
      city: "Desert Hot Springs",
      state: "CA",
      tagline: "Nude Spa Resort & Club",
      description: "A clothing-optional resort and spa in the California desert. Mineral pools, massage services, and lifestyle-friendly atmosphere. Open 24/7 for overnight guests. A unique, relaxing experience.",
      image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
      features: ["24/7 Access", "Mineral Pools", "Spa Services", "Overnight Stays", "Clothing Optional", "Desert Setting"],
      priceRange: "$150-300/night",
      hours: "24/7 for guests",
      dressCode: "None Required",
      rating: 4.3,
      reviews: 890,
      link: "https://seamountaininn.com",
      highlight: "Spa Resort",
      established: "1995"
    },
    // NEW YORK / NORTHEAST
    {
      name: "Bowery Bliss",
      city: "New York",
      state: "NY",
      tagline: "NYC's Most Sophisticated Club",
      description: "A chic, sophisticated lifestyle club in Manhattan. Attracts NYC's fashionable, professional crowd. Intimate space with excellent music, premium drinks, and a sensual atmosphere. Highly vetted membership.",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
      features: ["Manhattan Location", "Sophisticated Crowd", "Vetted Members", "Premium Bar", "Fashion Forward", "Intimate Setting"],
      priceRange: "$150-250/couple",
      hours: "Sat 10PM-4AM",
      dressCode: "NYC Chic",
      rating: 4.6,
      reviews: 580,
      link: "https://bowerybliss.com",
      highlight: "NYC Elite",
      established: "2016"
    },
    {
      name: "Chemistry",
      city: "New York",
      state: "NY",
      tagline: "Brooklyn's Underground Scene",
      description: "A trendy, underground-style club in Brooklyn. Attracts artists, creatives, and adventurous professionals. Known for theme nights, art installations, and a younger, hipper crowd. Very NYC cool.",
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
      features: ["Brooklyn Vibe", "Creative Crowd", "Theme Nights", "Art Installations", "Younger Crowd", "Underground Feel"],
      priceRange: "$100-175/couple",
      hours: "Fri-Sat 10PM-4AM",
      dressCode: "Creative/Artsy",
      rating: 4.5,
      reviews: 420,
      link: "https://chemistrynyc.com",
      highlight: "Trendy",
      established: "2019"
    },
    // ATLANTA
    {
      name: "Trapeze Atlanta",
      city: "Atlanta",
      state: "GA",
      tagline: "Atlanta's Legendary Club",
      description: "Sister club to the famous Miami Trapeze. Large, well-established venue with excellent facilities, themed rooms, and a diverse, friendly crowd. One of the best clubs in the Southeast.",
      image: "https://images.pexels.com/photos/1449791/pexels-photo-1449791.jpeg",
      features: ["Trapeze Brand", "Large Venue", "Themed Rooms", "BYOB", "Diverse Crowd", "Great Music"],
      priceRange: "$65-100/couple",
      hours: "Fri-Sat 9PM-3AM",
      dressCode: "Upscale Sexy",
      rating: 4.6,
      reviews: 1900,
      link: "https://trapezeclubatlanta.com",
      highlight: "Southeast's Best",
      established: "1998"
    },
    // CHICAGO
    {
      name: "Couples Choice",
      city: "Chicago",
      state: "IL",
      tagline: "Chicago's Premier Destination",
      description: "The top lifestyle club in the Chicago area. Spacious venue with dance floor, lounge areas, and well-designed play spaces. Attracts a sophisticated Midwest crowd. Regular theme nights.",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
      features: ["Chicago's Best", "Spacious Venue", "Theme Nights", "BYOB", "Sophisticated Crowd", "Great Sound System"],
      priceRange: "$60-100/couple",
      hours: "Fri-Sat 9PM-3AM",
      dressCode: "Upscale Casual",
      rating: 4.5,
      reviews: 1100,
      link: "https://coupleschoice.com",
      highlight: "Chicago's #1",
      established: "2005"
    },
    // NEW ORLEANS
    {
      name: "Colette New Orleans",
      city: "New Orleans",
      state: "LA",
      tagline: "Big Easy's Sexiest Club",
      description: "The Colette brand brings its premium experience to New Orleans. Located near the French Quarter, this club combines NOLA's party spirit with upscale lifestyle amenities. Perfect for destination weekends.",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
      features: ["Colette Brand", "Near French Quarter", "NOLA Vibe", "BYOB", "Weekend Destination", "Party Atmosphere"],
      priceRange: "$75-125/couple",
      hours: "Fri-Sat 9PM-3AM",
      dressCode: "Upscale Sexy",
      rating: 4.7,
      reviews: 850,
      link: "https://coletteclubs.com/new-orleans",
      highlight: "NOLA Party",
      established: "2014"
    },
    // DENVER
    {
      name: "Scarlet Ranch",
      city: "Denver",
      state: "CO",
      tagline: "Colorado's Lifestyle Destination",
      description: "A unique ranch-style lifestyle club outside Denver. Indoor/outdoor facilities with a Western flair. Pools, hot tubs, fire pits, and themed cabins. Attracts Colorado's adventurous couples.",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      features: ["Ranch Setting", "Indoor/Outdoor", "Pools & Hot Tubs", "Fire Pits", "Theme Cabins", "Colorado Vibe"],
      priceRange: "$80-120/couple",
      hours: "Fri-Sat 8PM-2AM",
      dressCode: "Casual Sexy",
      rating: 4.5,
      reviews: 920,
      link: "https://scarletranch.com",
      highlight: "Unique Setting",
      established: "2002"
    },
    // PHOENIX
    {
      name: "The Chalet",
      city: "Phoenix",
      state: "AZ",
      tagline: "Arizona's Premier Club",
      description: "The best-known lifestyle club in Arizona. Large venue with multiple play areas, dance floor, and outdoor spaces. Known for a friendly, welcoming atmosphere and diverse crowd.",
      image: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg",
      features: ["Arizona's Best", "Large Venue", "Outdoor Spaces", "BYOB", "Welcoming Vibe", "Diverse Crowd"],
      priceRange: "$50-80/couple",
      hours: "Fri-Sat 9PM-3AM",
      dressCode: "Casual Sexy",
      rating: 4.4,
      reviews: 780,
      link: "https://thechaletonline.com",
      highlight: "Desert Oasis",
      established: "1999"
    },
    // SEATTLE
    {
      name: "Sapphire Seattle",
      city: "Seattle",
      state: "WA",
      tagline: "Pacific Northwest's Hidden Gem",
      description: "Seattle's upscale lifestyle club for open-minded couples. Modern design, great music, and a sophisticated Pacific Northwest crowd. Known for a friendly, inclusive atmosphere.",
      image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
      features: ["Modern Design", "Great Music", "PNW Crowd", "BYOB", "Inclusive Vibe", "Weekend Parties"],
      priceRange: "$75-100/couple",
      hours: "Sat 9PM-2AM",
      dressCode: "Upscale Casual",
      rating: 4.4,
      reviews: 540,
      link: "https://sapphireseattle.com",
      highlight: "PNW Best",
      established: "2012"
    }
  ];

  // Get unique cities from clubs
  const cities = ['all', ...Array.from(new Set(clubs.map(club => club.city))).sort()];

  // Filter clubs by selected city
  const filteredClubs = selectedCity === 'all' 
    ? clubs 
    : clubs.filter(club => club.city === selectedCity);

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

  const filterItems = (items: typeof cruises | typeof resorts | typeof takeovers, category: string) => {
    if (activeCategory === 'all') return items;
    if (category === 'cruises' && activeCategory === 'cruises') return items;
    if (category === 'resorts' && activeCategory === 'resorts') return items;
    if (category === 'takeovers' && activeCategory === 'takeovers') return items;
    return [];
  };

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

  // Render Club Card
  const renderClubCard = (club: typeof clubs[0]) => {
    return (
      <div key={club.name} className="group bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img 
            src={club.image} 
            alt={club.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          {/* Highlight Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full flex items-center gap-1">
            <Flame className="w-3 h-3" />
            {club.highlight}
          </div>
          
          {/* Rating */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-sm rounded-full flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold">{club.rating}</span>
            <span className="text-white/70">({club.reviews.toLocaleString()})</span>
          </div>
          
          {/* Location Badge */}
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center gap-1 text-sm font-medium">
              <MapPin className="w-4 h-4" />
              {club.city}, {club.state}
            </div>
          </div>
          
          {/* Price Badge */}
          <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-gradient-to-r from-primary to-purple-600 text-white text-sm font-bold rounded-lg">
            {club.priceRange}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {club.name}
              </h3>
              <p className="text-xs text-muted-foreground">Est. {club.established}</p>
            </div>
            <Martini className="w-6 h-6 text-primary flex-shrink-0" />
          </div>
          
          <p className="text-sm text-primary font-medium mb-2">{club.tagline}</p>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{club.description}</p>
          
          {/* Features */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {club.features.slice(0, 4).map((feature) => (
              <span key={feature} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                {feature}
              </span>
            ))}
            {club.features.length > 4 && (
              <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">
                +{club.features.length - 4} more
              </span>
            )}
          </div>
          
          {/* Club Details */}
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{club.hours}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Crown className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Dress Code: <strong className="text-foreground">{club.dressCode}</strong></span>
            </div>
          </div>
          
          {/* CTA Button */}
          <a 
            href={club.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-semibold rounded-xl transition-all group/btn"
          >
            <span>Visit Website</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <SEO
        title="Swinger Cruises, Lifestyle Resorts, Clubs & Hotel Takeovers 2026 | SPICE"
        description="Complete guide to swinger cruises, lifestyle resorts, swingers clubs, and hotel takeovers. Compare Bliss Cruise, Desire Resorts, Green Door, Trapeze, Colette clubs, and more. Find clubs in Las Vegas, Miami, Dallas, LA, NYC."
        keywords="swinger cruise, lifestyle resort, hotel takeover, swingers club, Bliss Cruise, Desire Riviera Maya, Hedonism II, Green Door Las Vegas, Trapeze Miami, Colette clubs, swinger vacation, lifestyle travel, couples vacation, adults only resort"
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
                <Martini className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Lifestyle Travel Guide 2026
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Your ultimate guide to swinger cruises, lifestyle resorts, hotel takeover events, and top-rated clubs. 
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
                  <div className="text-3xl font-bold text-primary">{clubs.length}+</div>
                  <div className="text-sm text-muted-foreground">Swingers Clubs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{cities.length - 1}</div>
                  <div className="text-sm text-muted-foreground">Cities Covered</div>
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
                <button 
                  onClick={() => { setActiveCategory('clubs'); setSelectedCity('all'); }}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                    activeCategory === 'clubs' 
                      ? 'bg-primary text-white' 
                      : 'bg-card/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Martini className="w-4 h-4" />
                  Clubs & Venues
                </button>
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

            {/* Swingers Clubs Section */}
            {(activeCategory === 'all' || activeCategory === 'clubs') && (
              <section className="mb-20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-xl">
                      <Martini className="w-7 h-7 text-pink-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">Swingers Clubs & Venues</h2>
                      <p className="text-muted-foreground">Top-rated lifestyle clubs across {cities.length - 1} cities</p>
                    </div>
                  </div>
                  
                  {/* City Filter */}
                  <div className="flex flex-wrap gap-2">
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="px-4 py-2 bg-card/70 border border-border rounded-xl text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer"
                    >
                      <option value="all">All Cities ({clubs.length} clubs)</option>
                      {cities.filter(c => c !== 'all').map((city) => (
                        <option key={city} value={city}>
                          {city} ({clubs.filter(c => c.city === city).length})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Info Banner for Clubs */}
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-xl p-6 mb-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="p-3 bg-pink-500/10 rounded-full flex-shrink-0">
                      <Shield className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Club Etiquette & Tips</h3>
                      <p className="text-sm text-muted-foreground">
                        Most clubs are BYOB (Bring Your Own Bottle). Arrive after 10 PM for best atmosphere. 
                        Always respect consent—"no" means "no." Couples are typically given priority entry. 
                        Check websites for event calendars and theme nights before visiting.
                      </p>
                    </div>
                  </div>
                </div>

                {/* City Quick Select Buttons */}
                {activeCategory === 'clubs' && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    <button
                      onClick={() => setSelectedCity('all')}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCity === 'all'
                          ? 'bg-pink-500 text-white'
                          : 'bg-card/50 border border-border hover:border-pink-500/50 text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Globe className="w-4 h-4 inline mr-1" />
                      All Cities
                    </button>
                    {['Las Vegas', 'Miami', 'Dallas', 'Los Angeles', 'New York', 'Atlanta', 'Chicago', 'New Orleans', 'Houston', 'Austin', 'Denver', 'Phoenix', 'Seattle'].map((city) => (
                      clubs.some(c => c.city === city) && (
                        <button
                          key={city}
                          onClick={() => setSelectedCity(city)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedCity === city
                              ? 'bg-pink-500 text-white'
                              : 'bg-card/50 border border-border hover:border-pink-500/50 text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {city}
                        </button>
                      )
                    ))}
                  </div>
                )}
                
                {/* Club Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredClubs.map((club) => renderClubCard(club))}
                </div>

                {/* No Results */}
                {filteredClubs.length === 0 && (
                  <div className="text-center py-12">
                    <Martini className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No clubs found in {selectedCity}. Try selecting a different city.</p>
                  </div>
                )}

                {/* Club Advertising Banner */}
                <div className="mt-8 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 border border-pink-500/30 rounded-2xl p-8 text-center">
                  <Moon className="w-10 h-10 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Own a Lifestyle Club?</h3>
                  <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                    Get featured on SPICE and reach 50,000+ verified lifestyle couples and singles. 
                    Premium listings include enhanced visibility, event promotion, and direct booking integration.
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all"
                  >
                    Partner With Us
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </section>
            )}

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
                  <a href="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all gap-2">
                    Download SPICE Free
                    <ChevronRight className="w-5 h-5" />
                  </a>
                  <a href="/travel/miami" className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary hover:bg-primary/10 font-semibold rounded-full transition-all gap-2">
                    Explore City Guides
                    <MapPin className="w-5 h-5" />
                  </a>
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
                <a href="/travel/miami" className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3">
                    <Sun className="w-8 h-8 text-yellow-400" />
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">Miami</h3>
                      <p className="text-sm text-muted-foreground">7,800+ members</p>
                    </div>
                  </div>
                </a>
                <a href="/travel/new-orleans" className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3">
                    <Music className="w-8 h-8 text-purple-400" />
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">New Orleans</h3>
                      <p className="text-sm text-muted-foreground">4,200+ members</p>
                    </div>
                  </div>
                </a>
                <a href="/travel/orlando" className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-blue-400" />
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">Orlando</h3>
                      <p className="text-sm text-muted-foreground">5,600+ members</p>
                    </div>
                  </div>
                </a>
                <a href="/travel/cancun" className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3">
                    <Palmtree className="w-8 h-8 text-green-400" />
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">Cancún</h3>
                      <p className="text-sm text-muted-foreground">3,100+ members</p>
                    </div>
                  </div>
                </a>
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
