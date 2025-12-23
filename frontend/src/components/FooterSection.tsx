import { Apple, Play, Mail, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

// Custom Reddit icon since lucide-react doesn't have one
const RedditIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
);

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
              <li><Link to="/lifestyle" className="hover:text-foreground transition-colors">Lifestyle Guides</Link></li>
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
              <li><a href="https://www.instagram.com/the_spice_app?igsh=YzViN3Zzam43cjRl&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                <Instagram className="w-4 h-4" /> Instagram
              </a></li>
              <li><a href="https://twitter.com/spiceapp" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                <Twitter className="w-4 h-4" /> X (Twitter)
              </a></li>
              <li><a href="https://facebook.com/spiceapp" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                <Facebook className="w-4 h-4" /> Facebook
              </a></li>
              <li><a href="https://www.reddit.com/r/SPICEAPP/s/Q2TTLkxqWT" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                <RedditIcon className="w-4 h-4" /> Reddit
              </a></li>
              <li><a href="https://youtube.com/@spiceapp" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
                <Youtube className="w-4 h-4" /> YouTube
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
