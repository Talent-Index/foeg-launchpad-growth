import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import foegLogo from "@/assets/foeg-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center space-x-2">
            <img src={foegLogo} alt="FOEG Labs Logo" className="h-12 w-auto" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection("programs")} className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
              Programs
            </button>
            <button onClick={() => scrollToSection("events")} className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
              Events
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection("apply")} className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
              Apply
            </button>
            <Button onClick={() => scrollToSection("apply")} size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Join Residency
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass rounded-2xl p-6 space-y-4 bg-white/95">
            <button
              onClick={() => scrollToSection("programs")}
              className="block w-full text-left py-2 font-semibold text-secondary hover:text-primary transition-colors"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="block w-full text-left py-2 font-semibold text-secondary hover:text-primary transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 font-semibold text-secondary hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <Button onClick={() => scrollToSection("apply")} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Join Residency
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
