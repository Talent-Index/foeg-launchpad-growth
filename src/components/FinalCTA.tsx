import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz";

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Ready to build, learn, or contribute?
          </h2>
          <p className="text-muted-foreground text-lg">
            Join a growing community of builders shaping what's next.
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 text-base"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Join the Community
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
