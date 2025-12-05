import { Shield, Lock } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
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
