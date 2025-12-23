import { Button } from "@/components/ui/button";

const TWITTER_URL = "https://twitter.com/FOEG_Labs";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-foreground">
            The frontier of ecosystem growth.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            FOEG Labs supports builders, founders, and ecosystem partners through community-led programs and hands-on learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              asChild
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base"
            >
              <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
                Join the community
              </a>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 rounded-full px-8 text-base"
            >
              <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
                Explore our programs
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
