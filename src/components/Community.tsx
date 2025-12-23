import { Button } from "@/components/ui/button";

const TWITTER_URL = "https://twitter.com/FOEG_Labs";

const Community = () => {
  return (
    <section id="community" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Community is the foundation
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              FOEG Labs is built with the community, not around it. We prioritize long-term participation, trust, and shared growth.
            </p>
            <Button 
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
            >
              <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
                Join FOEG Labs
              </a>
            </Button>
          </div>

          {/* Subtle placeholder */}
          <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10" />
              <p className="text-sm">Community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
