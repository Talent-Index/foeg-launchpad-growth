import { ArrowRight } from "lucide-react";

const TWITTER_URL = "https://twitter.com/FOEG_Labs";

const blocks = [
  {
    title: "Build",
    description: "Hands-on programs focused on real skills and real projects.",
  },
  {
    title: "Connect",
    description: "Community-led collaboration across roles and ecosystems.",
  },
  {
    title: "Grow",
    description: "Long-term support through mentorship, visibility, and partnerships.",
  },
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-foreground">
          How FOEG Labs works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {blocks.map((block, index) => (
            <div
              key={index}
              className="space-y-4"
            >
              <h3 className="text-2xl font-display font-semibold text-foreground">
                {block.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {block.description}
              </p>
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
