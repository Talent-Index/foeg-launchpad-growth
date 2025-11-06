import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "FOEG Labs connected me with the right investors at exactly the right time. The mentorship was invaluable, and I went from hackathon project to funded startup in 6 months.",
      author: "Alex Thompson",
      role: "Founder, ChainVerse",
      image: "AT",
    },
    {
      quote: "The Girls Onchain initiative gave me the confidence and network I needed to launch my Web3 company. The community support here is incredible.",
      author: "Maya Singh",
      role: "CEO, DecentralHealth",
      image: "MS",
    },
    {
      quote: "From legal compliance to technical architecture, FOEG Labs provided expert guidance every step of the way. They truly understand the challenges founders face.",
      author: "Jordan Lee",
      role: "Co-founder, GameFi Protocol",
      image: "JL",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">What Founders Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from founders who've built with FOEG Labs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 glass border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:scale-105"
            >
              <Quote className="h-10 w-10 text-primary mb-4 opacity-50" />
              <p className="text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
