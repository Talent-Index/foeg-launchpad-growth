const partners = [
  { name: "BuidlGuidl", url: "https://buidlguidl.com/" },
  { name: "Cartridge", url: "https://cartridge.gg/" },
  { name: "Avalanche", url: "https://www.avax.network/" },
  { name: "Team1", url: "https://www.team1.network/" },
  { name: "CloudPlexo", url: "https://www.cloudplexo.com/" },
];

const Partners = () => {
  return (
    <section id="partners" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-foreground">
          Partner ecosystem
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-lg font-medium"
            >
              {partner.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
