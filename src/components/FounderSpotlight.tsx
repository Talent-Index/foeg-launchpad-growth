import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import workshopTable from "@/assets/workshop-table.jpeg";

const FounderSpotlight = () => {
  const spotlights = [
    {
      image: workshopTable,
      name: "Sarah Chen",
      title: "Secured $2M Seed Round",
      win: "Built a DeFi protocol that reached 10K users in 3 months",
      link: "#",
    },
    {
      image: workshopTable,
      name: "Marcus Rodriguez",
      title: "Acquired by Major Platform",
      win: "Created an NFT marketplace with $5M in transaction volume",
      link: "#",
    },
    {
      image: workshopTable,
      name: "Aisha Patel",
      title: "Won Top Hackathon Prize",
      win: "Developed an AI-powered health tech solution for underserved communities",
      link: "#",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <span className="text-sm font-semibold">Weekly Feature</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Founder Spotlight</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating the wins of our incredible FOEG Labs community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {spotlights.map((spotlight, index) => (
            <Card
              key={index}
              className="overflow-hidden glass border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={spotlight.image}
                  alt={`Founder spotlight: ${spotlight.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-1">{spotlight.name}</h3>
                <p className="text-primary font-semibold mb-3">{spotlight.title}</p>
                <p className="text-sm text-muted-foreground mb-4">{spotlight.win}</p>

                <a
                  href={spotlight.link}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors"
                >
                  Read Full Story
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderSpotlight;
