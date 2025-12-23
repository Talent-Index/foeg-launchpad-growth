import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import foegLogo from "@/assets/foeg-logo.png";

const TWITTER_URL = "https://twitter.com/FOEG_Labs";

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

  const navLinks = [
    { label: "What We Do", id: "what-we-do" },
    { label: "Community", id: "community" },
    { label: "Programs", id: "who-its-for" },
    { label: "Partners", id: "partners" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("hero")} 
            className="flex items-center space-x-3"
          >
            <img src={foegLogo} alt="FOEG Labs Logo" className="h-10 w-auto" />
            <span className="font-display font-semibold text-lg text-foreground">
              FOEG Labs
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button 
              asChild
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
            >
              <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
                Join the Community
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-background border border-border rounded-lg p-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-2 font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button 
              asChild
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
            >
              <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
                Join the Community
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
