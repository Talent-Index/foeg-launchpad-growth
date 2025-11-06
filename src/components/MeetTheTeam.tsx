import { Card } from "@/components/ui/card";

const MeetTheTeam = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="glass border-border p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                  Meet the <span className="gradient-text">Team</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  FOEG Labs was founded by a team of serial entrepreneurs, investors, and Web3 pioneers who understand
                  the challenges of building in emerging markets. Our mission is simple: make world-class acceleration
                  accessible to every founder, regardless of location or background.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With decades of combined experience launching startups, securing funding, and scaling across Africa,
                  we've built the ecosystem we wish existed when we started.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
                <div className="relative glass rounded-2xl p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6" />
                  <h3 className="text-2xl font-display font-bold mb-2">FOEG Labs Team</h3>
                  <p className="text-muted-foreground">Frontier of Ecosystem Growth</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
