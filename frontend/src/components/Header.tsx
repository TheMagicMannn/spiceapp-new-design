import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Navigation structure
const navigationItems = [
  { name: "Home", path: "/" },
  {
    name: "About SPICE",
    items: [
      { name: "Our Story", path: "/about", description: "Learn about SPICE's mission" },
      { name: "Features", path: "/spice-app", description: "AI Matching, Verification & More" },
      { name: "Safety & Verification", path: "/about/safety-verification", description: "How we keep you safe" },
      { name: "AI Matching Explained", path: "/about/ai-matching", description: "Smart compatibility matching" },
      { name: "Why We're Different", path: "/about/why-different", description: "What makes SPICE unique" },
      { name: "Meet the Team", path: "/team", description: "The people behind SPICE" },
    ]
  },
  {
    name: "Start Here",
    items: [
      { name: "Beginner Guides", path: "/guide/newcomers", description: "New to the lifestyle? Start here" },
      { name: "Consent Basics", path: "/start/consent-basics", description: "Foundation of healthy exploration" },
      { name: "Lifestyle Etiquette", path: "/start/etiquette", description: "Do's and don'ts" },
      { name: "Common Myths", path: "/start/myths", description: "Misconceptions debunked" },
      { name: "Lifestyle Newbies FAQ", path: "/start/beginner-faq", description: "Questions from beginners" },
    ]
  },
  {
    name: "Lifestyle Guides",
    items: [
      { name: "Hotwifing & Stag/Vixen", path: "/lifestyle/hotwifing-guide", description: "Complete guide to hotwifing" },
      { name: "Swingers Guide", path: "/lifestyle/swingers-guide", description: "Etiquette, parties, clubs" },
      { name: "BDSM & Kink Dynamics", path: "/guide/community", description: "Roles, play types, safety" },
      { name: "ENM & Polyamory", path: "/lifestyle/enm-polyamory-guide", description: "Structures, agreements, tools" },
      { name: "Relationships & Communication", path: "/lifestyle/relationships-communication", description: "Opening up, boundaries" },
      { name: "Jealousy Management", path: "/lifestyle/jealousy-management", description: "Emotional tools & strategies" },
    ]
  },
  {
    name: "Learn",
    items: [
      { name: "Academy Overview", path: "/academy", description: "Structured learning paths" },
      { name: "Learning Modules", path: "/academy/modules", description: "Guided learning paths" },
      { name: "BDSM Quiz", path: "/quiz", description: "Discover your preferences" },
      { name: "Consent Modules", path: "/academy/consent", description: "Deep dive into consent" },
      { name: "Guided Journeys", path: "/academy/journeys", description: "Beginner to advanced" },
    ]
  },
  {
    name: "Blog",
    items: [
      { name: "Latest Articles", path: "/blog", description: "Newest content" },
      { name: "Swingers", path: "/blog/swingers", description: "Swinging lifestyle articles" },
      { name: "Hotwifing", path: "/blog/hotwifing", description: "Hotwife & stag/vixen stories" },
      { name: "BDSM & Kink", path: "/blog/bdsm", description: "Kink education & guides" },
      { name: "ENM & Poly", path: "/blog/enm", description: "Non-monogamy insights" },
      { name: "Consent & Safety", path: "/blog/consent", description: "Safe practices" },
      { name: "Travel Stories", path: "/blog/travel", description: "Lifestyle destinations" },
      { name: "Relationships", path: "/blog/relationships", description: "Intimacy & connection" },
    ]
  },
  {
    name: "Tools",
    items: [
      { name: "Glossary", path: "/guide/glossary", description: "A-Z lifestyle terms" },
      { name: "App Comparisons", path: "/tools/app-comparisons", description: "Why SPICE wins" },
      { name: "Feature Comparison", path: "/tools/feature-comparison", description: "Side-by-side comparison" },
      { name: "STI Resources", path: "/tools/sti-resources", description: "Sexual health & safety" },
    ]
  },
  {
    name: "Travel",
    items: [
      { name: "Sexiest Cities", path: "/travel", description: "Top lifestyle destinations" },
      { name: "Miami", path: "/travel/miami", description: "Complete Miami guide" },
      { name: "Las Vegas", path: "/travel/las-vegas", description: "Vegas lifestyle scene" },
      { name: "New York", path: "/travel/new-york", description: "NYC lifestyle community" },
      { name: "New Orleans", path: "/travel/new-orleans", description: "NOLA nightlife & events" },
      { name: "Orlando", path: "/travel/orlando", description: "Theme parks & lifestyle" },
      { name: "Cancun & Playa", path: "/travel/cancun", description: "Mexico hotspots" },
      { name: "International", path: "/travel/international", description: "Global destinations" },
      { name: "Clubs & Resorts", path: "/travel/clubs-resorts", description: "Directory of venues" },
    ]
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isPathActive = (item: any) => {
    if (item.path) {
      return location.pathname === item.path;
    }
    if (item.items) {
      return item.items.some((subItem: any) => location.pathname === subItem.path);
    }
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gradient">SPICE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive = isPathActive(item);
              
              // Simple link (no submenu)
              if (!item.items) {
                return (
                  <Link
                    key={item.name}
                    to={item.path!}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                      isActive
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              }

              // Dropdown menu
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1",
                      isActive
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {item.name}
                    <ChevronDown 
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        activeDropdown === item.name && "rotate-180"
                      )} 
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0, 
                          scale: 1,
                        }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-[400px] rounded-xl overflow-hidden"
                        style={{
                          boxShadow: "0 0 30px rgba(255, 77, 109, 0.3), 0 0 60px rgba(155, 135, 245, 0.2)",
                        }}
                      >
                        <div className="bg-popover/95 backdrop-blur-xl border border-primary/30 rounded-xl p-2">
                          {/* Animated glow border */}
                          <motion.div
                            className="absolute inset-0 rounded-xl"
                            animate={{
                              background: [
                                "linear-gradient(0deg, rgba(255,77,109,0.4) 0%, rgba(155,135,245,0.4) 100%)",
                                "linear-gradient(120deg, rgba(255,77,109,0.4) 0%, rgba(155,135,245,0.4) 100%)",
                                "linear-gradient(240deg, rgba(255,77,109,0.4) 0%, rgba(155,135,245,0.4) 100%)",
                                "linear-gradient(360deg, rgba(255,77,109,0.4) 0%, rgba(155,135,245,0.4) 100%)",
                              ]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            style={{
                              filter: "blur(8px)",
                              zIndex: -1,
                            }}
                          />
                          
                          <ul className="space-y-1 relative z-10">
                            {item.items.map((subItem, index) => (
                              <motion.li
                                key={subItem.path}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  to={subItem.path}
                                  className={cn(
                                    "block select-none rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105",
                                    location.pathname === subItem.path && "bg-accent/50"
                                  )}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="text-sm font-medium leading-none mb-1">{subItem.name}</div>
                                  <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Join Waitlist CTA */}
            <Link
              to="/download"
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all ml-2 hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Join Waitlist
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden py-4 border-t border-border/50 max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="flex flex-col gap-2">
                {navigationItems.map((item) => {
                  // Simple link
                  if (!item.items) {
                    return (
                      <Link
                        key={item.name}
                        to={item.path!}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          "px-4 py-3 rounded-lg text-sm font-medium transition-all",
                          location.pathname === item.path
                            ? "bg-primary/20 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  }

                  // Dropdown section
                  const isOpen = activeDropdown === item.name;
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="w-full px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 flex items-center justify-between transition-all"
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            isOpen && "rotate-180"
                          )} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-2 space-y-1">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className={cn(
                                    "block px-4 py-2 text-sm rounded-md transition-colors",
                                    location.pathname === subItem.path
                                      ? "bg-accent/50 text-foreground"
                                      : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                                  )}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Mobile CTA */}
                <Link
                  to="/download"
                  onClick={() => setIsMenuOpen(false)}
                  className="mx-4 mt-4 px-4 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full text-center transition-all"
                >
                  Join Waitlist
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
