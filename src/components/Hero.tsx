import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Target, TrendingUp } from "lucide-react";
import dojoGameJam from "@/assets/dojo-game-jam.jpeg";

const Hero = () => {
  const stats = [
    { icon: Rocket, label: "Active Startups", value: "150+", color: "text-primary" },
    { icon: Target, label: "Funding Secured", value: "$25M+", color: "text-secondary" },
    { icon: TrendingUp, label: "Success Rate", value: "87%", color: "text-primary" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foeg-onyx via-foeg-onyx to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(138,79,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
      </div>

      {/* Hero Image with Parallax Effect */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={dojoGameJam}
          alt="Dojo Game Jam VII in partnership with FOEG Labs - Community of founders and developers"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Accelerating founders from{" "}
            <span className="gradient-text">hackathon to market</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Get matched with investors and grants, receive expert consultancy with real-time feedback, and access vertical-specific training in gaming, infrastructure, fintech, health, legal, and compliance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={() => scrollToSection("apply")} className="text-base group">
              Apply to Residency
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("programs")} className="text-base">
              Explore Programs
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:scale-105"
              >
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-display font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
