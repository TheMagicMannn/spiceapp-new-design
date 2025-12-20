import { Apple, Play, Mail, Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/50">
      <div className="container mx-auto">
        {/* Download SPICE Section */}
        <div className="glass-card rounded-2xl p-8 mb-12 border-gradient text-center">
          <h3 className="text-2xl font-bold mb-4">Get the SPICE App</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Download SPICE on your mobile device and connect with the community on the go.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-3 px-5 py-3 rounded-xl glass-card border border-border/50 hover:bg-primary/10 transition-colors w-full sm:w-auto"
            >
              <Apple className="w-7 h-7 text-foreground" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-5 py-3 rounded-xl glass-card border border-border/50 hover:bg-primary/10 transition-colors w-full sm:w-auto"
            >
              <Play className="w-7 h-7 text-foreground" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* Multi-Column Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Column 1: New to the Lifestyle */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">New to the Lifestyle?</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/guide/newcomers" className="hover:text-foreground transition-colors">Start Here</Link></li>
              <li><Link to="/lifestyle/swingers-guide" className="hover:text-foreground transition-colors">Lifestyle Guides</Link></li>
              <li><Link to="/academy" className="hover:text-foreground transition-colors">Academy</Link></li>
              <li><Link to="/start/consent-basics" className="hover:text-foreground transition-colors">Consent Basics</Link></li>
              <li><Link to="/faq" className="hover:text-foreground transition-colors">Beginner FAQ</Link></li>
            </ul>
          </div>

          {/* Column 2: Deep Dives */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Deep Dives</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Latest Articles</Link></li>
              <li><Link to="/tools/app-comparisons" className="hover:text-foreground transition-colors">Tools</Link></li>
              <li><Link to="/guide/glossary" className="hover:text-foreground transition-colors">Glossary</Link></li>
              <li><Link to="/tools/app-comparisons" className="hover:text-foreground transition-colors">App Comparisons</Link></li>
            </ul>
          </div>

          {/* Column 3: Adventure */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Adventure</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/travel" className="hover:text-foreground transition-colors">Travel</Link></li>
              <li><Link to="/travel" className="hover:text-foreground transition-colors">Sexiest Cities</Link></li>
              <li><Link to="/travel/clubs-resorts" className="hover:text-foreground transition-colors">Clubs & Resorts</Link></li>
              <li><Link to="/travel/miami" className="hover:text-foreground transition-colors">Miami Guide</Link></li>
              <li><Link to="/travel/las-vegas" className="hover:text-foreground transition-colors">Vegas Guide</Link></li>
            </ul>
          </div>

          {/* Column 4: SPICE */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">SPICE</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About SPICE</Link></li>
              <li><Link to="/spice-app" className="hover:text-foreground transition-colors">Features</Link></li>
              <li><Link to="/about/safety-verification" className="hover:text-foreground transition-colors">Safety & Verification</Link></li>
              <li><Link to="/download" className="hover:text-foreground transition-colors">Join Waitlist</Link></li>
              <li><Link to="/" className="hover:text-foreground transition-colors">Launch Countdown</Link></li>
            </ul>
          </div>

          {/* Column 5: Support */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/support/help" className="hover:text-foreground transition-colors">Help Center</Link></li>
              <li><Link to="/guide/safety" className="hover:text-foreground transition-colors">Safety Resources</Link></li>
              <li><Link to="/legal/community-standards" className="hover:text-foreground transition-colors">Community Standards</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/support/report" className="hover:text-foreground transition-colors">Report an Issue</Link></li>
            </ul>
          </div>

          {/* Column 6: Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li><Link to="/newsletter" className="hover:text-foreground transition-colors">Newsletter Signup</Link></li>
              <li><a href="https://instagram.com/spiceapp" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                <Instagram className="w-4 h-4" /> Instagram
              </a></li>
              <li><a href="https://twitter.com/spiceapp" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                <Twitter className="w-4 h-4" /> X (Twitter)
              </a></li>
              <li><a href="https://facebook.com/spiceapp" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                <Facebook className="w-4 h-4" /> Facebook
              </a></li>
            </ul>
          </div>
        </div>

        {/* Full-Width Legal Row */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-muted-foreground">
            <Link to="/legal/community-standards" className="hover:text-foreground transition-colors">Community Standards</Link>
            <span className="text-muted-foreground/50">•</span>
            <Link to="/legal/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <span className="text-muted-foreground/50">•</span>
            <Link to="/legal/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <span className="text-muted-foreground/50">•</span>
            <Link to="/legal/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link>
          </div>

          {/* Logo and Copyright */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl font-black text-gradient">SPICE</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Built by the Community, for the Community
            </p>
            <p className="text-muted-foreground/60 text-xs">
              © {new Date().getFullYear()} SPICE — Premium lifestyle dating for 18+ verified members only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
