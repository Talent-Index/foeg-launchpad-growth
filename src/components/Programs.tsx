import { TrendingUp, DollarSign, MessageSquare, GraduationCap, Code, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const Programs = () => {
  const programs = [
    {
      icon: TrendingUp,
      title: "Investor Matchmaking",
      description: "Connect with VCs and angel investors aligned with your vertical and stage.",
      color: "from-primary to-secondary",
    },
    {
      icon: DollarSign,
      title: "Grants Matchmaking",
      description: "Discover and apply for grants tailored to your startup's focus area.",
      color: "from-secondary to-primary",
    },
    {
      icon: MessageSquare,
      title: "Consultancy & Feedback",
      description: "Get real-time guidance from industry experts and successful founders.",
      color: "from-primary to-secondary",
    },
    {
      icon: GraduationCap,
      title: "Vertical Trainings",
      description: "Master-classes in Gaming, Infrastructure, Fintech, Health, Legal, and Compliance.",
      color: "from-secondary to-primary",
    },
    {
      icon: Code,
      title: "Mini Hacks",
      description: "Rapid prototyping sessions to validate ideas and build MVPs quickly.",
      color: "from-primary to-secondary",
    },
    {
      icon: Sparkles,
      title: "Hackathons",
      description: "Large-scale events to network, build, and compete with top talent.",
      color: "from-secondary to-primary",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Programs & Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to accelerate your startup from idea to product-market fit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="p-6 glass border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <program.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">{program.title}</h3>
              <p className="text-muted-foreground">{program.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
