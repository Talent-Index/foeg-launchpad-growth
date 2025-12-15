import { useEffect, useRef, useState } from "react";

const StatsByNumbers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { value: 150, label: "Builders Engaged", suffix: "+" },
    { value: 12, label: "In-Person Sessions Hosted", suffix: "" },
    { value: 3, label: "Active Community Channels", suffix: "" },
    { value: 25, label: "Projects Supported", suffix: "+" },
    { value: 8, label: "Mentors & Reviewers", suffix: "" },
    { value: 5, label: "Partner Ecosystems", suffix: "" },
    { value: 2, label: "Cities Reached", suffix: "" },
    { value: 20, label: "Founder 1:1 Support Calls", suffix: "+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return (
      <span className="text-4xl md:text-5xl font-display font-bold gradient-text">
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-foeg-purple/10 to-foeg-blue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">FOEG by the Numbers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building Africa's largest startup acceleration ecosystem
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2 p-4">
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground/70 mt-12 max-w-xl mx-auto italic">
          Early-stage estimates based on internal tracking. Metrics will be updated as reporting tightens.
        </p>
      </div>
    </section>
  );
};

export default StatsByNumbers;
