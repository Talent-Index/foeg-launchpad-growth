const metrics = [
  { value: "150+", label: "Builders supported across Africa" },
  { value: "12+", label: "Community-led programs" },
  { value: "5+", label: "Partner ecosystems" },
];

const SocialProof = () => {
  return (
    <section id="social-proof" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {metrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-display font-bold text-foreground">
                  {metric.value}
                </div>
                <p className="text-muted-foreground text-sm">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
