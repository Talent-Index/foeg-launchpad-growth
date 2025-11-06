import { Button } from "@/components/ui/button";
import { Users, Heart, Sparkles } from "lucide-react";
import girlsOnchain from "@/assets/girls-onchain.jpeg";

const GirlsOnchain = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">Girls Onchain Initiative</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Empowering Women in <span className="gradient-text">Web3</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Join a vibrant community of female founders, developers, and leaders shaping the future of blockchain technology. Get exclusive access to mentorship, resources, and networking opportunities.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Dedicated Mentorship</h4>
                  <p className="text-sm text-muted-foreground">Connect with experienced women leaders in Web3</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Women-Only Events</h4>
                  <p className="text-sm text-muted-foreground">Exclusive workshops, hackathons, and networking sessions</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="mt-6">
              Join Girls Onchain
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <img
              src={girlsOnchain}
              alt="Girls Onchain community event with women in Web3"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GirlsOnchain;
