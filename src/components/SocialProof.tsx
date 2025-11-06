const SocialProof = () => {
  // Partner/Host logos - these would be real logos in production
  const partners = [
    { name: "Partner 1", width: "w-32" },
    { name: "Partner 2", width: "w-28" },
    { name: "Partner 3", width: "w-36" },
    { name: "Partner 4", width: "w-32" },
    { name: "Partner 5", width: "w-28" },
    { name: "Partner 6", width: "w-32" },
    { name: "Partner 7", width: "w-36" },
    { name: "Partner 8", width: "w-28" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm font-semibold text-muted-foreground mb-12 uppercase tracking-wider">
          Trusted by Leading Organizations
        </h2>
        
        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-12">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className={`${partner.width} h-16 bg-card rounded-lg flex items-center justify-center flex-shrink-0 glass`}
              >
                <span className="text-xs text-muted-foreground font-semibold">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-display font-bold gradient-text mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Community Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold gradient-text mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Events Hosted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold gradient-text mb-2">30+</div>
            <div className="text-sm text-muted-foreground">Partner Organizations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold gradient-text mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Countries Represented</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
