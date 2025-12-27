import { MapPin, Star, Users, Heart, ExternalLink, Shield, Clock, Check, ChevronRight, Martini, Moon, Flame, Crown, Search, Filter, Globe, Palmtree, Building2, X } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState, useMemo } from "react";

const ClubsResorts = () => {
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<'all' | 'club' | 'resort'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Swingers Clubs & Lifestyle Resorts Directory",
    "description": "Comprehensive directory of swingers clubs and lifestyle resorts across the United States. Find clubs by city with ratings, hours, and details.",
    "numberOfItems": 25
  };

  // Swingers Clubs & Resorts Data
  const venues = [
    // LAS VEGAS
    {
      name: "Green Door",
      city: "Las Vegas",
      state: "NV",
      type: "club" as const,
      tagline: "Vegas's Premier Adult Playground",
      description: "The largest and most famous lifestyle club in Las Vegas. Two massive floors featuring multiple themed rooms, dance floors, pools, and play areas. Open 24/7 on weekends. A must-visit for any lifestyle couple in Vegas.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
      features: ["24/7 Weekend Hours", "Pool & Hot Tub", "Multiple Dance Floors", "BYOB", "Couples & Singles", "Themed Rooms"],
      priceRange: "$40-80/person",
      hours: "Thu-Sun 24hrs, Mon-Wed 8PM-4AM",
      dressCode: "Upscale Sexy",
      rating: 4.7,
      reviews: 2400,
      link: "https://greendoorlasvegas.com",
      highlight: "Most Famous",
      established: "1996",
      amenities: ["Locker Rooms", "Showers", "Dance Floor", "Pool", "Hot Tub", "Private Rooms"]
    },
    {
      name: "Whispers",
      city: "Las Vegas",
      state: "NV",
      type: "club" as const,
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
      established: "2008",
      amenities: ["Locker Rooms", "Dance Floor", "Lounge Areas", "Private Rooms"]
    },
    {
      name: "Red Rooster",
      city: "Las Vegas",
      state: "NV",
      type: "club" as const,
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
      established: "1982",
      amenities: ["Pool", "Dance Floor", "Multiple Rooms"]
    },
    // MIAMI
    {
      name: "Trapeze",
      city: "Miami",
      state: "FL",
      type: "club" as const,
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
      established: "1990",
      amenities: ["Pool", "Hot Tub", "Dance Floor", "Locker Rooms", "Multiple Play Areas"]
    },
    {
      name: "Miami Velvet",
      city: "Miami",
      state: "FL",
      type: "club" as const,
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
      established: "2010",
      amenities: ["VIP Sections", "Premium Bar", "Dance Floor", "Private Rooms"]
    },
    {
      name: "Secrets Hideaway",
      city: "Kissimmee",
      state: "FL",
      type: "resort" as const,
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
      established: "2005",
      amenities: ["Rooms", "Multiple Pools", "Hot Tubs", "Restaurant", "Dance Floor", "Play Areas"]
    },
    // DALLAS / TEXAS
    {
      name: "Colette Dallas",
      city: "Dallas",
      state: "TX",
      type: "club" as const,
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
      established: "2012",
      amenities: ["Dance Floor", "Locker Rooms", "Lounge Areas", "Play Rooms"]
    },
    {
      name: "Players Club DFW",
      city: "Dallas",
      state: "TX",
      type: "club" as const,
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
      established: "2000",
      amenities: ["Dance Floor", "Multiple Play Areas", "Locker Rooms"]
    },
    {
      name: "Colette Houston",
      city: "Houston",
      state: "TX",
      type: "club" as const,
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
      established: "2015",
      amenities: ["Dance Floor", "Locker Rooms", "Lounge", "Play Areas"]
    },
    {
      name: "Colette Austin",
      city: "Austin",
      state: "TX",
      type: "club" as const,
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
      established: "2018",
      amenities: ["Dance Floor", "Locker Rooms", "Play Areas"]
    },
    // LOS ANGELES / CALIFORNIA
    {
      name: "Club Joi",
      city: "Los Angeles",
      state: "CA",
      type: "club" as const,
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
      established: "2008",
      amenities: ["Premium Bar", "Private Areas", "Luxury Amenities"]
    },
    {
      name: "Freedom Acres",
      city: "San Bernardino",
      state: "CA",
      type: "resort" as const,
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
      established: "1985",
      amenities: ["Pools", "Hot Tubs", "Camping", "RV Sites", "Dance Floor"]
    },
    {
      name: "Sea Mountain Inn",
      city: "Desert Hot Springs",
      state: "CA",
      type: "resort" as const,
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
      established: "1995",
      amenities: ["Rooms", "Mineral Pools", "Spa", "24/7 Access"]
    },
    // NEW YORK / NORTHEAST
    {
      name: "Bowery Bliss",
      city: "New York",
      state: "NY",
      type: "club" as const,
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
      established: "2016",
      amenities: ["Premium Bar", "Dance Floor", "Private Areas"]
    },
    {
      name: "Chemistry",
      city: "New York",
      state: "NY",
      type: "club" as const,
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
      established: "2019",
      amenities: ["Dance Floor", "Art Space", "Lounge"]
    },
    // ATLANTA
    {
      name: "Trapeze Atlanta",
      city: "Atlanta",
      state: "GA",
      type: "club" as const,
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
      established: "1998",
      amenities: ["Dance Floor", "Pool", "Themed Rooms", "Locker Rooms"]
    },
    // CHICAGO
    {
      name: "Couples Choice",
      city: "Chicago",
      state: "IL",
      type: "club" as const,
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
      established: "2005",
      amenities: ["Dance Floor", "Lounge", "Play Areas", "Locker Rooms"]
    },
    // NEW ORLEANS
    {
      name: "Colette New Orleans",
      city: "New Orleans",
      state: "LA",
      type: "club" as const,
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
      established: "2014",
      amenities: ["Dance Floor", "Lounge", "Play Areas"]
    },
    // DENVER
    {
      name: "Scarlet Ranch",
      city: "Denver",
      state: "CO",
      type: "resort" as const,
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
      established: "2002",
      amenities: ["Pool", "Hot Tubs", "Fire Pits", "Cabins", "Dance Floor"]
    },
    // PHOENIX
    {
      name: "The Chalet",
      city: "Phoenix",
      state: "AZ",
      type: "club" as const,
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
      established: "1999",
      amenities: ["Dance Floor", "Outdoor Area", "Play Areas"]
    },
    // SEATTLE
    {
      name: "Sapphire Seattle",
      city: "Seattle",
      state: "WA",
      type: "club" as const,
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
      established: "2012",
      amenities: ["Dance Floor", "Lounge", "Play Areas"]
    },
    // SAN DIEGO
    {
      name: "Thads",
      city: "San Diego",
      state: "CA",
      type: "club" as const,
      tagline: "San Diego's Legendary Venue",
      description: "A long-running San Diego institution with a loyal following. Large outdoor space, pools, and indoor facilities. Casual, friendly atmosphere with regular theme nights and events.",
      image: "https://images.pexels.com/photos/1729414/pexels-photo-1729414.jpeg",
      features: ["Outdoor Space", "Pool", "Casual Atmosphere", "BYOB", "Theme Nights", "Loyal Community"],
      priceRange: "$40-70/couple",
      hours: "Fri-Sat 9PM-3AM",
      dressCode: "Casual Sexy",
      rating: 4.3,
      reviews: 1200,
      link: "https://thads.com",
      highlight: "SD Classic",
      established: "1988",
      amenities: ["Pool", "Outdoor Area", "Dance Floor"]
    },
    // TAMPA
    {
      name: "Caliente Tampa",
      city: "Land O' Lakes",
      state: "FL",
      type: "resort" as const,
      tagline: "Florida's Premier Clothing-Optional Resort",
      description: "A full-service clothing-optional resort north of Tampa. Day passes and overnight stays available. Features pools, spa, restaurant, and regular lifestyle events. Perfect for Tampa Bay couples.",
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      features: ["Clothing-Optional", "Resort Amenities", "Day Passes", "Overnight Stays", "Restaurant", "Regular Events"],
      priceRange: "$75-200/night",
      hours: "Open Daily",
      dressCode: "Optional",
      rating: 4.4,
      reviews: 1650,
      link: "https://calientetampa.com",
      highlight: "Tampa's Best",
      established: "2000",
      amenities: ["Pools", "Spa", "Restaurant", "Rooms", "Event Space"]
    },
    // MINNEAPOLIS
    {
      name: "Bliss Minneapolis",
      city: "Minneapolis",
      state: "MN",
      type: "club" as const,
      tagline: "Twin Cities' Premier Club",
      description: "The top lifestyle destination in the Minneapolis-St. Paul area. Upscale venue with professional management, diverse crowd, and excellent facilities. Regular theme nights throughout the year.",
      image: "https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg",
      features: ["Twin Cities Best", "Upscale Venue", "Professional Staff", "BYOB", "Theme Nights", "Diverse Crowd"],
      priceRange: "$60-100/couple",
      hours: "Fri-Sat 9PM-3AM",
      dressCode: "Upscale Casual",
      rating: 4.5,
      reviews: 680,
      link: "https://blissminneapolis.com",
      highlight: "Midwest Gem",
      established: "2010",
      amenities: ["Dance Floor", "Lounge", "Play Areas", "Locker Rooms"]
    }
  ];

  // Get unique cities
  const cities = useMemo(() => {
    const citySet = new Set(venues.map(v => v.city));
    return ['all', ...Array.from(citySet).sort()];
  }, []);

  // Filter venues based on selections
  const filteredVenues = useMemo(() => {
    return venues.filter(venue => {
      const matchesCity = selectedCity === 'all' || venue.city === selectedCity;
      const matchesType = selectedType === 'all' || venue.type === selectedType;
      const matchesSearch = searchQuery === '' || 
        venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCity && matchesType && matchesSearch;
    });
  }, [selectedCity, selectedType, searchQuery]);

  // Popular cities for quick filter
  const popularCities = ['Las Vegas', 'Miami', 'Dallas', 'Los Angeles', 'New York', 'Atlanta', 'Chicago', 'New Orleans'];

  return (
    <>
      <SEO
        title="Swingers Clubs & Lifestyle Resorts Directory | SPICE"
        description="Find the best swingers clubs and lifestyle resorts near you. Comprehensive directory with ratings, hours, prices, and reviews. Search by city across the US."
        keywords="swingers club, lifestyle club, adult club, swinger resort, Green Door Las Vegas, Trapeze Miami, Colette clubs, lifestyle resort, couples club"
        canonical="https://thespiceapp.com/travel/clubs-resorts"
        structuredData={structuredData}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Martini className="w-8 h-8 text-primary" />
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Swingers Clubs & Resorts
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Find the best lifestyle clubs and resorts near you. {venues.length}+ venues across {cities.length - 1} cities with ratings, hours, and details.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{venues.filter(v => v.type === 'club').length}</div>
                  <div className="text-sm text-muted-foreground">Lifestyle Clubs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{venues.filter(v => v.type === 'resort').length}</div>
                  <div className="text-sm text-muted-foreground">Resorts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{cities.length - 1}</div>
                  <div className="text-sm text-muted-foreground">Cities</div>
                </div>
              </div>
            </div>

            {/* Search & Filters */}
            <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search clubs, cities, or states..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* City Dropdown */}
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="pl-12 pr-10 py-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none appearance-none cursor-pointer min-w-[200px]"
                  >
                    <option value="all">All Cities ({venues.length})</option>
                    {cities.filter(c => c !== 'all').map((city) => (
                      <option key={city} value={city}>
                        {city} ({venues.filter(v => v.city === city).length})
                      </option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>

                {/* Type Filter */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedType('all')}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${
                      selectedType === 'all'
                        ? 'bg-primary text-white'
                        : 'bg-background border border-border hover:border-primary/50'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelectedType('club')}
                    className={`px-4 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                      selectedType === 'club'
                        ? 'bg-primary text-white'
                        : 'bg-background border border-border hover:border-primary/50'
                    }`}
                  >
                    <Martini className="w-4 h-4" />
                    Clubs
                  </button>
                  <button
                    onClick={() => setSelectedType('resort')}
                    className={`px-4 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                      selectedType === 'resort'
                        ? 'bg-primary text-white'
                        : 'bg-background border border-border hover:border-primary/50'
                    }`}
                  >
                    <Palmtree className="w-4 h-4" />
                    Resorts
                  </button>
                </div>
              </div>

              {/* Popular City Tags */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm text-muted-foreground">Popular:</span>
                  {popularCities.map((city) => (
                    <button
                      key={city}
                      onClick={() => setSelectedCity(city)}
                      className={`px-3 py-1 text-sm rounded-full transition-all ${
                        selectedCity === city
                          ? 'bg-primary text-white'
                          : 'bg-primary/10 text-primary hover:bg-primary/20'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing <strong className="text-foreground">{filteredVenues.length}</strong> {filteredVenues.length === 1 ? 'venue' : 'venues'}
                {selectedCity !== 'all' && <span> in <strong className="text-foreground">{selectedCity}</strong></span>}
              </p>
              {(selectedCity !== 'all' || selectedType !== 'all' || searchQuery) && (
                <button
                  onClick={() => { setSelectedCity('all'); setSelectedType('all'); setSearchQuery(''); }}
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Clear filters
                </button>
              )}
            </div>

            {/* Club Etiquette Banner */}
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

            {/* Venues Grid */}
            {filteredVenues.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredVenues.map((venue) => (
                  <div key={venue.name} className="group bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img 
                        src={venue.image} 
                        alt={venue.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      
                      {/* Type Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full flex items-center gap-1">
                        {venue.type === 'club' ? <Martini className="w-3 h-3" /> : <Palmtree className="w-3 h-3" />}
                        {venue.highlight}
                      </div>
                      
                      {/* Rating */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-sm rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold">{venue.rating}</span>
                        <span className="text-white/70">({venue.reviews.toLocaleString()})</span>
                      </div>
                      
                      {/* Location */}
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center gap-1 text-sm font-medium">
                          <MapPin className="w-4 h-4" />
                          {venue.city}, {venue.state}
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-gradient-to-r from-primary to-purple-600 text-white text-sm font-bold rounded-lg">
                        {venue.priceRange}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {venue.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">Est. {venue.established}</p>
                        </div>
                        {venue.type === 'club' ? (
                          <Martini className="w-6 h-6 text-primary flex-shrink-0" />
                        ) : (
                          <Palmtree className="w-6 h-6 text-green-400 flex-shrink-0" />
                        )}
                      </div>
                      
                      <p className="text-sm text-primary font-medium mb-2">{venue.tagline}</p>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{venue.description}</p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {venue.features.slice(0, 4).map((feature) => (
                          <span key={feature} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                            {feature}
                          </span>
                        ))}
                        {venue.features.length > 4 && (
                          <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">
                            +{venue.features.length - 4} more
                          </span>
                        )}
                      </div>
                      
                      {/* Details */}
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{venue.hours}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Crown className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>Dress Code: <strong className="text-foreground">{venue.dressCode}</strong></span>
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <a 
                        href={venue.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-semibold rounded-xl transition-all group/btn"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Martini className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No venues found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
                <button
                  onClick={() => { setSelectedCity('all'); setSelectedType('all'); setSearchQuery(''); }}
                  className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-all"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Partner CTA */}
            <div className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 border border-pink-500/30 rounded-2xl p-8 text-center mb-12">
              <Moon className="w-10 h-10 text-pink-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Own a Lifestyle Club or Resort?</h3>
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

            {/* Back to Travel */}
            <div className="text-center">
              <a 
                href="/travel" 
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
                Back to Travel Guide
              </a>
            </div>

          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default ClubsResorts;
