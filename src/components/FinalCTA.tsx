import { Button } from "@/components/ui/button";

const TWITTER_URL = "https://twitter.com/FOEG_Labs";

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Ready to build, learn, or contribute?
          </h2>
          <Button 
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 text-base"
          >
            <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
              Join FOEG Labs
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
