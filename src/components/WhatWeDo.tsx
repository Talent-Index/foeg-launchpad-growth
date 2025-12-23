import { Hammer, Users, TrendingUp } from "lucide-react";

const WHATSAPP_URL = "https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz";

const blocks = [
  {
    icon: Hammer,
    title: "Build",
    description: "Hackathons, dev camps, and workshops focused on real skills and real projects. Learn by shipping.",
  },
  {
    icon: Users,
    title: "Connect",
    description: "Community-led collaboration across roles and ecosystems. Find your people, find your partners.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "Long-term support through mentorship, visibility, and partnerships. From idea to opportunity.",
  },
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            How FOEG Labs works
          </h2>
          <p className="text-muted-foreground text-lg">
            Three pillars that power everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {blocks.map((block, index) => (
            <div 
              key={block.title}
              className="bg-background rounded-2xl p-8 space-y-4 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <block.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">
                {block.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {block.description}
              </p>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary text-sm font-medium hover:underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
