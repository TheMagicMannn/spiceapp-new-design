import { Shield, Lock, Apple, Play } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
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

        {/* Trust badges */}
        <div className="glass-card rounded-2xl p-6 mb-12 border-gradient">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-muted-foreground">Adults Only Platform</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border" />
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-primary" />
              <span className="text-muted-foreground">Your privacy and discretion are our top priorities</span>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/spice-app" className="hover:text-foreground transition-colors">SPICE App</Link></li>
              <li><Link to="/download" className="hover:text-foreground transition-colors">Download</Link></li>
              <li><Link to="/quiz" className="hover:text-foreground transition-colors">BDSM Quiz</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">SPICE Guide</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/guide/newcomers" className="hover:text-foreground transition-colors">For Newcomers</Link></li>
              <li><Link to="/guide/how-to" className="hover:text-foreground transition-colors">How To</Link></li>
              <li><Link to="/guide/glossary" className="hover:text-foreground transition-colors">Glossary</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/guide/community" className="hover:text-foreground transition-colors">Lifestyles</Link></li>
              <li><Link to="/guide/safety" className="hover:text-foreground transition-colors">Safety</Link></li>
              <li><Link to="/guide/self-care" className="hover:text-foreground transition-colors">Self Care</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-foreground transition-colors">Meet the Team</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Logo and copyright */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-3xl font-black text-gradient">SPICE</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Premium lifestyle community for 18+ verified members only.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            © {new Date().getFullYear()} SPICE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
