import { Flame, Users, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            What is <span className="text-gradient">SPICE</span>? How is it different?
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </div>

        {/* Main content card */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border-gradient feature-card">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 rounded-xl bg-primary/20 text-primary shrink-0">
              <Flame className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                SPICE: The dating app that actually gets it...
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                because it was built by people who LIVE it.
              </p>
            </div>
          </div>

          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              Tired of vanilla apps run by clueless corporates? SPICE isn't that. We're the app created 
              <span className="text-primary font-semibold"> BY the community, FOR the community</span> — 
              built by people who actually understand the lifestyle, from the curious newcomers to the 
              seasoned veterans who live it every day.
            </p>
            
            <p className="text-lg">
              Whether you're a couple looking to add some heat to the bedroom, a single searching for 
              that perfect play partner who shares your exact interests, or a seasoned explorer seeking 
              real connections (not endless "hey" messages from tourists) — 
              <span className="text-gradient font-semibold"> SPICE turns up the heat.</span>
            </p>

            <div className="glass-card rounded-xl p-6 mt-8 border-primary/20">
              <p className="text-xl font-semibold text-center">
                This isn't just another dating app. This is <span className="text-primary">YOUR playground</span>, 
                built by people who've been in the playroom.
              </p>
            </div>
          </div>
        </div>

        {/* Stats/highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Users, label: "Community Built", desc: "By people who understand" },
            { icon: Shield, label: "100% Verified", desc: "Real people, real connections" },
            { icon: Flame, label: "200+ Desires", desc: "Find your exact match" },
          ].map((item, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 text-center feature-card border-gradient"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-1">{item.label}</h4>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
