import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PartnerCTA = () => {
  const scrollToNewsletter = () => {
    document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-foeg-purple/20 to-foeg-gold/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Want FOEG to power your <span className="gradient-text">ecosystem?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partner with us to bring world-class acceleration, matchmaking, and training to your community.
            Let's build the future of Web3 together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" onClick={scrollToNewsletter} className="text-base group">
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToNewsletter} className="text-base">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
