import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Navigation structure for new mega menu
const aboutSpiceItems = [
  { name: "Our Story", path: "/about", description: "Learn about SPICE's mission" },
  { name: "Features", path: "/spice-app", description: "AI Matching, Verification & More" },
  { name: "Safety & Verification", path: "/about/safety-verification", description: "How we keep you safe" },
  { name: "AI Matching Explained", path: "/about/ai-matching", description: "Smart compatibility matching" },
  { name: "Why We're Different", path: "/about/why-different", description: "What makes SPICE unique" },
];

const startHereItems = [
  { name: "Beginner Guides", path: "/guide/newcomers", description: "New to the lifestyle? Start here" },
  { name: "Consent Basics", path: "/start/consent-basics", description: "Foundation of healthy exploration" },
  { name: "Lifestyle Etiquette", path: "/start/etiquette", description: "Do's and don'ts" },
  { name: "Common Myths", path: "/start/myths", description: "Misconceptions debunked" },
  { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
];

const lifestyleGuidesItems = [
  { name: "Hotwifing & Stag/Vixen", path: "/lifestyle/hotwifing-guide", description: "Complete guide to hotwifing" },
  { name: "Swingers Guide", path: "/lifestyle/swingers-guide", description: "Etiquette, parties, clubs" },
  { name: "BDSM & Kink Dynamics", path: "/guide/community", description: "Roles, play types, safety" },
  { name: "ENM & Polyamory", path: "/lifestyle/enm-polyamory-guide", description: "Structures, agreements, tools" },
  { name: "Relationships & Communication", path: "/lifestyle/relationships-communication", description: "Opening up, boundaries" },
  { name: "Jealousy Management", path: "/lifestyle/jealousy-management", description: "Emotional tools & strategies" },
];

const learnItems = [
  { name: "Academy Overview", path: "/academy", description: "Structured learning paths" },
  { name: "Learning Modules", path: "/academy/modules", description: "Guided learning paths" },
  { name: "BDSM Quiz", path: "/quiz", description: "Discover your preferences" },
  { name: "Consent Modules", path: "/academy/consent", description: "Deep dive into consent" },
  { name: "Guided Journeys", path: "/academy/journeys", description: "Beginner to advanced" },
];

const blogItems = [
  { name: "Latest Articles", path: "/blog", description: "Newest content" },
  { name: "Swingers", path: "/blog/swingers", description: "Swinging lifestyle articles" },
  { name: "Hotwifing", path: "/blog/hotwifing", description: "Hotwife & stag/vixen stories" },
  { name: "BDSM & Kink", path: "/blog/bdsm", description: "Kink education & guides" },
  { name: "ENM & Poly", path: "/blog/enm", description: "Non-monogamy insights" },
  { name: "Consent & Safety", path: "/blog/consent", description: "Safe practices" },
  { name: "Travel Stories", path: "/blog/travel", description: "Lifestyle destinations" },
  { name: "Relationships", path: "/blog/relationships", description: "Intimacy & connection" },
];

const toolsItems = [
  { name: "Glossary", path: "/guide/glossary", description: "A-Z lifestyle terms" },
  { name: "App Comparisons", path: "/tools/app-comparisons", description: "Why SPICE wins" },
  { name: "Feature Comparison", path: "/tools/feature-comparison", description: "Side-by-side comparison" },
  { name: "STI Resources", path: "/tools/sti-resources", description: "Sexual health & safety" },
];

const travelItems = [
  { name: "Sexiest Cities", path: "/travel", description: "Top lifestyle destinations" },
  { name: "Miami", path: "/travel/miami", description: "Complete Miami guide" },
  { name: "Las Vegas", path: "/travel/las-vegas", description: "Vegas lifestyle scene" },
  { name: "New York", path: "/travel/new-york", description: "NYC lifestyle community" },
  { name: "New Orleans", path: "/travel/new-orleans", description: "NOLA nightlife & events" },
  { name: "Orlando", path: "/travel/orlando", description: "Theme parks & lifestyle" },
  { name: "Cancun & Playa", path: "/travel/cancun", description: "Mexico hotspots" },
  { name: "International", path: "/travel/international", description: "Global destinations" },
  { name: "Clubs & Resorts", path: "/travel/clubs-resorts", description: "Directory of venues" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
            <Link
              to="/"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                location.pathname === "/"
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              Home
            </Link>

            {/* About SPICE Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium bg-transparent",
                      location.pathname.startsWith("/about")
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    About SPICE
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-4 bg-popover">
                      {aboutSpiceItems.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className={cn(
                                "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
                                location.pathname === item.path && "bg-accent/50"
                              )}
                            >
                              <div className="text-sm font-medium leading-none mb-1">{item.name}</div>
                              <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Start Here Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium bg-transparent",
                      location.pathname.startsWith("/start")
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    Start Here
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-4 bg-popover">
                      {startHereItems.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className={cn(
                                "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
                                location.pathname === item.path && "bg-accent/50"
                              )}
                            >
                              <div className="text-sm font-medium leading-none mb-1">{item.name}</div>
                              <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Lifestyle Guides Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium bg-transparent",
                      location.pathname.startsWith("/lifestyle")
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    Lifestyle Guides
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-4 bg-popover">
                      {lifestyleGuidesItems.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className={cn(
                                "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
                                location.pathname === item.path && "bg-accent/50"
                              )}
                            >
                              <div className="text-sm font-medium leading-none mb-1">{item.name}</div>
                              <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Learn Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium bg-transparent",
                      location.pathname.startsWith("/academy")
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    Learn
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-4 bg-popover">
                      {learnItems.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className={cn(
                                "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
                                location.pathname === item.path && "bg-accent/50"
                              )}
                            >
                              <div className="text-sm font-medium leading-none mb-1">{item.name}</div>
                              <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Blog Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium bg-transparent",
                      location.pathname.startsWith("/blog")
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    Blog
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-4 bg-popover">
                      {blogItems.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className={cn(
                                "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
                                location.pathname === item.path && "bg-accent/50"
                              )}
                            >
                              <div className="text-sm font-medium leading-none mb-1">{item.name}</div>
                              <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Tools Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium bg-transparent",
                      location.pathname.startsWith("/tools")
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    Tools
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-4 bg-popover">
                      {toolsItems.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className={cn(
                                "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
                                location.pathname === item.path && "bg-accent/50"
                              )}
                            >
                              <div className="text-sm font-medium leading-none mb-1">{item.name}</div>
                              <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Travel Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium bg-transparent",
                      location.pathname.startsWith("/travel")
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    Travel
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-4 bg-popover max-h-[400px] overflow-y-auto">
                      {travelItems.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className={cn(
                                "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
                                location.pathname === item.path && "bg-accent/50"
                              )}
                            >
                              <div className="text-sm font-medium leading-none mb-1">{item.name}</div>
                              <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Join Waitlist CTA */}
            <Link
              to="/download"
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all ml-2"
            >
              <Download className="w-4 h-4" />
              Join Waitlist
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50"
              >
                Home
              </Link>
              
              {/* Mobile menu items - simplified for mobile */}
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase">About SPICE</div>
              {aboutSpiceItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-6 py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase mt-2">Start Here</div>
              {startHereItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-6 py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase mt-2">Lifestyle Guides</div>
              {lifestyleGuidesItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-6 py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/download"
                onClick={() => setIsMenuOpen(false)}
                className="mx-4 mt-4 px-4 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full text-center"
              >
                Join Waitlist
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
