const PartnerEcosystem = () => {
  const partners = [
    "Avalanche", "Team1 Kenya", "Beyond the Code", "Lido Nation", "Intersect",
    "Lovelaces", "Blockchain Centre Kenya", "Women Connect", "DOJO",
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

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-12">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 glass rounded-xl px-8 py-6 min-w-[200px] flex items-center justify-center"
              >
                <span className="text-lg font-semibold text-muted-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerEcosystem;
