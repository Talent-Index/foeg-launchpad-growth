import buidlguidlLogo from "@/assets/partners/buidlguidl.svg";

const PartnerEcosystem = () => {
  const partners = [
    {
      name: "BuidlGuidl",
      logo: buidlguidlLogo,
      url: "https://buidlguidl.com/",
    },
    {
      name: "Cartridge",
      logo: null, // Text fallback
      url: "https://cartridge.gg/",
    },
    {
      name: "Avalanche",
      logo: null, // Text fallback
      url: "https://www.avax.network/",
    },
    {
      name: "Team1",
      logo: null, // Text fallback
      url: "https://www.team1.network/",
    },
    {
      name: "CloudPlexo",
      logo: null, // Text fallback
      url: "https://www.cloudplexo.com/",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Partner Ecosystem</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations across Web3, gaming, fintech, and beyond
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center h-16 px-6 py-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              aria-label={`Visit ${partner.name} website`}
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-8 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              ) : (
                <span className="text-lg font-semibold text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300">
                  {partner.name}
                </span>
              )}
            </a>
          ))}
          
          {/* Placeholder for additional partners */}
          <div className="flex items-center justify-center h-16 px-6 py-4 rounded-xl border-2 border-dashed border-border/50">
            <span className="text-sm text-muted-foreground/50 text-center">
              Add confirmed partner<br />logo + link
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerEcosystem;
