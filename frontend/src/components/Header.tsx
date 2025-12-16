import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Download } from "lucide-react";
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

const mainNavItems = [
  { name: "Home", path: "/" },
  { name: "SPICE App", path: "/spice-app" },
  { name: "About Us", path: "/about" },
  { name: "Meet the Team", path: "/team" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/contact" },
];

const guideItems = [
  { name: "For the Interested/Curious", path: "/guide/newcomers", description: "New to the lifestyle? Start here" },
  { name: "How To", path: "/guide/how-to", description: "Step-by-step guides & tips" },
  { name: "Community & Lifestyles", path: "/guide/community", description: "ENM, BDSM, Swingers, Poly & more" },
  { name: "Glossary", path: "/guide/glossary", description: "Learn the terminology" },
  { name: "BDSM Quiz", path: "/quiz", description: "Discover your preferences" },
  { name: "Safety", path: "/guide/safety", description: "Online & dating safety" },
  { name: "Self Care Resources", path: "/guide/self-care", description: "Mental health & support" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
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
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  location.pathname === item.path
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* SPICE Guide Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium bg-transparent",
                      location.pathname.startsWith("/guide") || location.pathname === "/quiz"
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    SPICE Guide
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-4 bg-popover">
                      {guideItems.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className={cn(
                                "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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

            {/* Download SPICE */}
            <Link
              to="/download"
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                location.pathname === "/download"
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/20 text-primary hover:bg-primary/30"
              )}
            >
              <Download className="w-4 h-4" />
              Download SPICE
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
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                    location.pathname === item.path
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.name}
                </Link>
              ))}

              {/* SPICE Guide Accordion */}
              <div className="border-t border-border/50 pt-2 mt-2">
                <button
                  onClick={() => setIsGuideOpen(!isGuideOpen)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                    location.pathname.startsWith("/guide") || location.pathname === "/quiz"
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  SPICE Guide
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isGuideOpen && "rotate-180")} />
                </button>
                {isGuideOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    {guideItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          "block px-4 py-2 rounded-lg text-sm transition-all duration-300",
                          location.pathname === item.path
                            ? "bg-primary/20 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Download SPICE */}
              <Link
                to="/download"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium bg-primary/20 text-primary hover:bg-primary/30 transition-all duration-300 mt-2"
              >
                <Download className="w-4 h-4" />
                Download SPICE
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
