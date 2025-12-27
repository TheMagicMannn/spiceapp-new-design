import { MapPin, Users, Sun, Music, Sparkles, Palmtree, Building2, Waves, Mountain, Star, ChevronRight, Martini, Heart, Calendar, Plane } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState } from "react";
import { Link } from "react-router-dom";

const CityGuides = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Lifestyle City Guides - SPICE",
    "description": "Comprehensive city guides for swingers, lifestyle couples, and adventurous singles. Find clubs, events, and like-minded people in cities across the US.",
    "numberOfItems": 15
  };

  const cities = [
    {
      name: "Miami",
      state: "FL",
      slug: "miami",
      region: "southeast",
      icon: Sun,
      iconColor: "text-yellow-400",
      tagline: "The Sexiest City in America",
      description: "South Beach glamour meets lifestyle paradise. Home to legendary clubs like Trapeze and Miami Velvet. Year-round pool parties and nightlife.",
      image: "https://images.pexels.com/photos/3355788/pexels-photo-3355788.jpeg",
      members: "7,800+",
      clubs: 5,
      events: "Weekly",
      highlights: ["Trapeze Club", "South Beach", "Pool Parties", "Year-Round Scene"],
      featured: true
    },
    {
      name: "Las Vegas",
      state: "NV",
      slug: "las-vegas",
      region: "west",
      icon: Sparkles,
      iconColor: "text-purple-400",
      tagline: "What Happens in Vegas...",
      description: "The ultimate adult playground. Green Door, Whispers, Red Rooster and more. 24/7 entertainment and the most options anywhere.",
      image: "https://images.pexels.com/photos/415999/pexels-photo-415999.jpeg",
      members: "12,500+",
      clubs: 8,
      events: "Daily",
      highlights: ["Green Door", "24/7 Clubs", "Resort Takeovers", "Bachelor/Bachelorette"],
      featured: true
    },
    {
      name: "New Orleans",
      state: "LA",
      slug: "new-orleans",
      region: "southeast",
      icon: Music,
      iconColor: "text-purple-400",
      tagline: "Let the Good Times Roll",
      description: "French Quarter magic and Southern hospitality. Colette NOLA, jazz clubs, and the most unique party scene in America.",
      image: "https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg",
      members: "4,200+",
      clubs: 3,
      events: "Weekly",
      highlights: ["Colette NOLA", "French Quarter", "Mardi Gras", "Jazz Scene"],
      featured: true
    },
    {
      name: "Dallas",
      state: "TX",
      slug: "dallas",
      region: "southwest",
      icon: Star,
      iconColor: "text-yellow-500",
      tagline: "Everything's Bigger in Texas",
      description: "Big city energy with Southern charm. Home to Colette Dallas and Players Club. Thriving lifestyle community in the heart of DFW.",
      image: "https://images.pexels.com/photos/2026768/pexels-photo-2026768.jpeg",
      members: "6,100+",
      clubs: 4,
      events: "Weekly",
      highlights: ["Colette Dallas", "Players Club", "Upscale Scene", "Friendly Crowd"],
      featured: false
    },
    {
      name: "Los Angeles",
      state: "CA",
      slug: "los-angeles",
      region: "west",
      icon: Palmtree,
      iconColor: "text-green-400",
      tagline: "Celebrity Playground",
      description: "Exclusive clubs, beautiful people, and Hollywood glamour. Club Joi and Freedom Acres offer vastly different vibes.",
      image: "https://images.pexels.com/photos/2263683/pexels-photo-2263683.jpeg",
      members: "9,400+",
      clubs: 5,
      events: "Weekly",
      highlights: ["Club Joi", "Freedom Acres", "Exclusive Venues", "Beautiful Crowd"],
      featured: true
    },
    {
      name: "New York",
      state: "NY",
      slug: "new-york",
      region: "northeast",
      icon: Building2,
      iconColor: "text-blue-400",
      tagline: "The City That Never Sleeps",
      description: "Underground scenes and exclusive parties. From Manhattan sophistication to Brooklyn creativity. The most diverse scene anywhere.",
      image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg",
      members: "8,900+",
      clubs: 4,
      events: "Weekly",
      highlights: ["Bowery Bliss", "Chemistry NYC", "Underground Parties", "Exclusive Events"],
      featured: true
    },
    {
      name: "Orlando",
      state: "FL",
      slug: "orlando",
      region: "southeast",
      icon: Sparkles,
      iconColor: "text-blue-400",
      tagline: "Beyond the Theme Parks",
      description: "More than just Disney. Secrets Hideaway resort and a growing lifestyle scene make Orlando a surprise destination.",
      image: "https://images.pexels.com/photos/2416653/pexels-photo-2416653.jpeg",
      members: "5,600+",
      clubs: 2,
      events: "Weekly",
      highlights: ["Secrets Hideaway", "Resort Lifestyle", "Central Location", "Theme Events"],
      featured: false
    },
    {
      name: "Atlanta",
      state: "GA",
      slug: "atlanta",
      region: "southeast",
      icon: Heart,
      iconColor: "text-red-400",
      tagline: "The Capital of the South",
      description: "Southern hospitality meets urban energy. Trapeze Atlanta anchors a vibrant, diverse lifestyle community.",
      image: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg",
      members: "5,200+",
      clubs: 3,
      events: "Weekly",
      highlights: ["Trapeze Atlanta", "Diverse Community", "Southern Hospitality", "Growing Scene"],
      featured: false
    },
    {
      name: "Chicago",
      state: "IL",
      slug: "chicago",
      region: "midwest",
      icon: Building2,
      iconColor: "text-gray-400",
      tagline: "The Windy City's Secret Side",
      description: "Midwest's most sophisticated scene. Couples Choice leads a thriving community of adventurous Chicagoans.",
      image: "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg",
      members: "4,800+",
      clubs: 2,
      events: "Weekly",
      highlights: ["Couples Choice", "Sophisticated Crowd", "Theme Nights", "Four Seasons"],
      featured: false
    },
    {
      name: "Houston",
      state: "TX",
      slug: "houston",
      region: "southwest",
      icon: Waves,
      iconColor: "text-teal-400",
      tagline: "Space City Swingers",
      description: "Texas-sized fun in America's fourth-largest city. Colette Houston brings premium experiences to the Gulf Coast.",
      image: "https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg",
      members: "4,100+",
      clubs: 2,
      events: "Weekly",
      highlights: ["Colette Houston", "Diverse Population", "Gulf Coast Vibes", "Growing Community"],
      featured: false
    },
    {
      name: "Denver",
      state: "CO",
      slug: "denver",
      region: "west",
      icon: Mountain,
      iconColor: "text-emerald-400",
      tagline: "Mile High Adventures",
      description: "Mountain vibes and adventurous spirits. Scarlet Ranch offers a unique ranch-style experience unlike anywhere else.",
      image: "https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg",
      members: "3,400+",
      clubs: 2,
      events: "Bi-Weekly",
      highlights: ["Scarlet Ranch", "Outdoor Lifestyle", "Mountain Setting", "Adventurous Crowd"],
      featured: false
    },
    {
      name: "Phoenix",
      state: "AZ",
      slug: "phoenix",
      region: "southwest",
      icon: Sun,
      iconColor: "text-orange-400",
      tagline: "Desert Heat",
      description: "Year-round sunshine and a welcoming community. The Chalet leads Arizona's growing lifestyle scene.",
      image: "https://images.pexels.com/photos/3616766/pexels-photo-3616766.jpeg",
      members: "2,900+",
      clubs: 2,
      events: "Weekly",
      highlights: ["The Chalet", "Year-Round Sun", "Snowbird Season", "Desert Parties"],
      featured: false
    },
    {
      name: "San Diego",
      state: "CA",
      slug: "san-diego",
      region: "west",
      icon: Waves,
      iconColor: "text-blue-400",
      tagline: "America's Finest City",
      description: "Beach vibes and laid-back lifestyle. Thads and the San Diego scene offer a more casual West Coast experience.",
      image: "https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg",
      members: "3,800+",
      clubs: 2,
      events: "Weekly",
      highlights: ["Thads", "Beach Culture", "Laid-Back Vibe", "Navy Town"],
      featured: false
    },
    {
      name: "Austin",
      state: "TX",
      slug: "austin",
      region: "southwest",
      icon: Music,
      iconColor: "text-pink-400",
      tagline: "Keep Austin Weird",
      description: "Live music capital meets open-minded culture. Colette Austin attracts the city's creative, adventurous crowd.",
      image: "https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg",
      members: "2,800+",
      clubs: 1,
      events: "Weekly",
      highlights: ["Colette Austin", "Creative Crowd", "Live Music Scene", "Young Professionals"],
      featured: false
    },
    {
      name: "Cancún",
      state: "MX",
      slug: "cancun",
      region: "international",
      icon: Palmtree,
      iconColor: "text-green-400",
      tagline: "Paradise Found",
      description: "International destination for lifestyle travel. Desire Resorts, Temptation, and endless beach parties await.",
      image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg",
      members: "3,100+",
      clubs: 0,
      events: "Daily",
      highlights: ["Desire Resorts", "Temptation", "All-Inclusive", "Beach Paradise"],
      featured: true
    }
  ];

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'west', name: 'West Coast' },
    { id: 'southwest', name: 'Southwest' },
    { id: 'midwest', name: 'Midwest' },
    { id: 'southeast', name: 'Southeast' },
    { id: 'northeast', name: 'Northeast' },
    { id: 'international', name: 'International' }
  ];

  const filteredCities = cities.filter(city => {
    const matchesSearch = searchQuery === '' || 
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.state.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || city.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const featuredCities = cities.filter(c => c.featured);

  return (
    <>
      <SEO
        title="Lifestyle City Guides - Find Clubs & Events Near You | SPICE"
        description="Explore lifestyle city guides for swingers, ENM couples, and adventurous singles. Find clubs, events, and community in Miami, Las Vegas, New York, Dallas, and more."
        keywords="lifestyle city guide, swingers club by city, swinger events, lifestyle community, couples clubs near me"
        canonical="https://thespiceapp.com/travel/cities"
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
                <MapPin className="w-8 h-8 text-primary" />
                <Plane className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                City Guides
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Explore the best cities for lifestyle dating. Find clubs, events, and connect with local communities across {cities.length} destinations.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{cities.length}</div>
                  <div className="text-sm text-muted-foreground">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">85K+</div>
                  <div className="text-sm text-muted-foreground">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Clubs & Venues</div>
                </div>
              </div>
            </div>

            {/* Search & Filter */}
            <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search cities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

                {/* Region Filter */}
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => setSelectedRegion(region.id)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all ${
                        selectedRegion === region.id
                          ? 'bg-primary text-white'
                          : 'bg-background border border-border hover:border-primary/50'
                      }`}
                    >
                      {region.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Cities */}
            {selectedRegion === 'all' && searchQuery === '' && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-400" />
                  Featured Destinations
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredCities.map((city) => {
                    const IconComponent = city.icon;
                    return (
                      <Link
                        key={city.slug}
                        to={`/travel/${city.slug}`}
                        className="group relative bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                      >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={city.image} 
                            alt={city.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          
                          {/* Icon & Location */}
                          <div className="absolute bottom-4 left-4 flex items-center gap-3">
                            <div className={`p-2 bg-black/40 backdrop-blur-sm rounded-lg ${city.iconColor}`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="text-white">
                              <h3 className="text-xl font-bold">{city.name}</h3>
                              <p className="text-sm text-white/80">{city.state}</p>
                            </div>
                          </div>

                          {/* Members Badge */}
                          <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-sm font-bold rounded-full">
                            {city.members} members
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-5">
                          <p className="text-primary font-medium text-sm mb-2">{city.tagline}</p>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{city.description}</p>
                          
                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {city.highlights.slice(0, 3).map((h) => (
                              <span key={h} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                {h}
                              </span>
                            ))}
                          </div>
                          
                          {/* Stats */}
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Martini className="w-4 h-4" />
                              {city.clubs} clubs
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {city.events} events
                            </span>
                          </div>
                        </div>

                        {/* Hover Arrow */}
                        <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ChevronRight className="w-6 h-6 text-primary" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

            {/* All Cities */}
            <section>
              <h2 className="text-2xl font-bold mb-6">
                {selectedRegion === 'all' && searchQuery === '' ? 'All Cities' : `${filteredCities.length} Cities Found`}
              </h2>
              
              {filteredCities.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredCities.map((city) => {
                    const IconComponent = city.icon;
                    return (
                      <Link
                        key={city.slug}
                        to={`/travel/${city.slug}`}
                        className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-primary/50 transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 bg-primary/10 rounded-xl ${city.iconColor}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                              {city.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{city.state}</p>
                            <p className="text-sm text-primary mt-1">{city.members} members</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No cities found. Try a different search.</p>
                </div>
              )}
            </section>

            {/* CTA Section */}
            <section className="mt-12">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 border border-primary/30 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Don't See Your City?</h3>
                <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                  We're constantly adding new city guides. Download SPICE to connect with lifestyle members in your area.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    to="/download"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all gap-2"
                  >
                    Download SPICE Free
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <Link 
                    to="/travel/clubs-resorts"
                    className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary hover:bg-primary/10 font-semibold rounded-full transition-all gap-2"
                  >
                    Browse All Clubs
                    <Martini className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default CityGuides;
