import { Rocket, Users, TrendingUp } from "lucide-react";

const ThreePillars = () => {
  const pillars = [
    {
      icon: Rocket,
      title: "Acceleration",
      description: "From hackathon prototype to market-ready product with expert guidance every step of the way.",
    },
    {
      icon: TrendingUp,
      title: "Matchmaking",
      description: "Connect with investors and grants tailored to your vertical—Gaming, Fintech, Health Tech, and more.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a vibrant ecosystem of founders, mentors, and partners across Africa and beyond.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Designed to make <span className="gradient-text">growth accessible</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            FOEG Labs provides everything early-stage founders need to accelerate from idea to funded startup
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:scale-[1.02] text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
