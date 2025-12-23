import { Code, Lightbulb, Heart, Users } from "lucide-react";

const personas = [
  {
    icon: Code,
    title: "Builders",
    description: "Practical learning and shipping",
  },
  {
    icon: Lightbulb,
    title: "Founders",
    description: "From idea to product",
  },
  {
    icon: Heart,
    title: "Girls & Women",
    description: "Inclusive access to tech ecosystems",
  },
  {
    icon: Users,
    title: "Recruiters & Investors",
    description: "Early access to talent and teams",
  },
];

const WhoItsFor = () => {
  return (
    <section id="who-its-for" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-foreground">
          Built for people shaping what's next
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="text-center space-y-4"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-muted flex items-center justify-center">
                <persona.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">
                {persona.title}
              </h3>
              <p className="text-muted-foreground">
                {persona.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
