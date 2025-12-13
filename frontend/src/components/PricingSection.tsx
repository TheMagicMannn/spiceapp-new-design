import { Check, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const freeFeatures = [
  "Create solo or couple profiles",
  "Browse & discover profiles",
  "20-50 daily likes",
  "Unlimited messaging with matches",
  "Add desires & interests (200+ options)",
  "Basic AI compatibility matching",
  "Human verification & badges",
  "Group chats & community access",
];

const vipFeatures = [
  { text: "Unlimited likes", highlight: "no daily limit" },
  { text: "See who liked you", highlight: "instant visibility" },
  { text: "Hyper-Match™ AI Engine", highlight: "full compatibility scoring (0-100)" },
  { text: "Hidden Gems", highlight: "AI surfaces highly compatible matches daily" },
  { text: "Advanced filters", highlight: "exact preferences, dynamics & aesthetics" },
  { text: "Incognito Mode", highlight: "browse privately" },
  { text: "Private Photos & Videos", highlight: "grant/revoke access" },
  { text: "Travel Mode", highlight: "connect anywhere" },
  { text: "10× profile boost", highlight: "increased visibility" },
  { text: "Events access", highlight: "discover, RSVP, host" },
  { text: "Couple profiles", highlight: "link & activity logs" },
];

const PricingSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-gradient">Membership</span> Options
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the experience that's right for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Free tier */}
          <div className="glass-card rounded-3xl p-8 border-gradient feature-card">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Free Membership</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-gradient">$0</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="glass" size="lg" className="w-full">
              Get Started Free
            </Button>
          </div>

          {/* VIP tier */}
          <div className="relative glass-card rounded-3xl p-8 border-2 border-primary/50 feature-card glow-pink">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2">
                <Crown className="w-4 h-4" />
                MOST POPULAR
              </div>
            </div>

            <div className="mb-6 pt-2">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                VIP Membership
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-gradient">$16.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                or $149.99/year <span className="text-primary font-semibold">(save 26%)</span>
              </p>
            </div>

            <p className="text-sm text-primary font-medium mb-4">Everything in Free, plus:</p>

            <ul className="space-y-3 mb-8">
              {vipFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/90">
                    <span className="font-semibold">{feature.text}</span>
                    <span className="text-muted-foreground"> - {feature.highlight}</span>
                  </span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="w-full">
              <Sparkles className="w-5 h-5" />
              Get VIP Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
