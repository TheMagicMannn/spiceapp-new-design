import { Check } from "lucide-react";

const desires = [
  "Swingers",
  "Polyamorous",
  "Kink & BDSM",
  "Ethical non-monogamy",
  "Hotwifing / cuckolding",
  "Solo explorers",
  "Queer, trans, non-binary",
  "Ace & demi",
  "All dynamics & roles",
];

const DesireTagsSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            One App. <span className="text-gradient">Every Flavor</span> of Desire.
          </h2>
          <p className="text-xl text-muted-foreground">
            SPICE isn't just for one crowd. It's for <span className="text-primary font-semibold">every</span> crowd.
          </p>
        </div>

        {/* Desire tags grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {desires.map((desire, index) => (
            <div
              key={desire}
              className="glass-card rounded-full px-6 py-3 flex items-center gap-3 feature-card border-gradient group cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="font-medium">{desire}</span>
            </div>
          ))}
        </div>

        {/* Highlight box */}
        <div className="glass-card rounded-3xl p-8 md:p-10 text-center border-gradient max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient">200+ desires.</span> Every dynamic. Every body. Every identity.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Mark what you love, what you're curious about, and what's a hard no — the app listens. 
            SPICE doesn't judge. It just helps you find the people who are into the exact same thing, 
            verifies they're real, and makes sure they actually show up.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesireTagsSection;
