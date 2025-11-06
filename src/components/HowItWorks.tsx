import { FileText, Hammer, CheckCircle2, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Apply",
      description: "Submit your application with your startup idea, team info, and vertical focus.",
      number: "01",
    },
    {
      icon: Hammer,
      title: "Build",
      description: "Access resources, mentorship, and training to develop your product.",
      number: "02",
    },
    {
      icon: CheckCircle2,
      title: "Validate",
      description: "Test your MVP with real users, gather feedback, and iterate quickly.",
      number: "03",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Secure funding, go to market, and scale your startup with our support.",
      number: "04",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your journey from idea to funded startup in four clear steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-20 group-hover:opacity-40 transition-opacity" />
              )}

              <div className="relative glass rounded-2xl p-8 hover:shadow-[var(--shadow-hover)] transition-all duration-300">
                <div className="absolute -top-4 -right-4 text-6xl font-display font-bold text-primary/10">
                  {step.number}
                </div>

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                    <step.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
