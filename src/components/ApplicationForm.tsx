import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2 } from "lucide-react";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 5 business days.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  if (isSuccess) {
    return (
      <section id="apply" className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-12 glass border-border text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-3xl font-display font-bold mb-4">Application Received!</h3>
            <p className="text-lg text-muted-foreground">
              Thank you for applying to FOEG Labs. Our team will review your application and reach out within 5 business days.
            </p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Apply to the Residency</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take the first step toward accelerating your startup journey
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8 glass border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" placeholder="John Doe" required disabled={isSubmitting} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" placeholder="john@example.com" required disabled={isSubmitting} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stage">Startup Stage *</Label>
              <Select required disabled={isSubmitting}>
                <SelectTrigger id="stage">
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="idea">Idea Stage</SelectItem>
                  <SelectItem value="prototype">Prototype/MVP</SelectItem>
                  <SelectItem value="early">Early Traction</SelectItem>
                  <SelectItem value="growth">Growth Stage</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vertical">Vertical Focus *</Label>
              <Select required disabled={isSubmitting}>
                <SelectTrigger id="vertical">
                  <SelectValue placeholder="Select vertical" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gaming">Gaming</SelectItem>
                  <SelectItem value="infrastructure">Infrastructure</SelectItem>
                  <SelectItem value="fintech">Fintech/DeFi</SelectItem>
                  <SelectItem value="health">Health Tech</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country *</Label>
              <Input id="country" placeholder="United States" required disabled={isSubmitting} />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              By submitting, you agree to our Terms of Service and Privacy Policy
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ApplicationForm;
