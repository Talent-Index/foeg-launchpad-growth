import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Loader2 } from "lucide-react";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Subscribed!",
      description: "You'll receive our weekly updates and event notifications.",
    });

    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto">
            <Mail className="h-8 w-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Stay in the Loop
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get weekly updates on events, founder spotlights, and Web3 ecosystem news delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
            />
            <Button type="submit" variant="secondary" disabled={isSubmitting} className="whitespace-nowrap">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>

          <p className="text-sm text-white/70">
            Join 5,000+ founders getting our weekly updates. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
