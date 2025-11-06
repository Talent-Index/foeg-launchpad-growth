import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import foegLogo from "@/assets/foeg-logo.png";

const Footer = () => {
  const footerLinks = {
    Programs: ["Investor Matchmaking", "Grants Matchmaking", "Consultancy", "Training", "Hackathons"],
    Community: ["Girls Onchain", "Events", "Knowledge Sessions", "Founder Spotlight", "Partners"],
    Company: ["About Us", "Careers", "Blog", "Contact", "Press Kit"],
    Legal: ["Privacy Policy", "Terms of Service", "Code of Conduct", "Cookie Policy"],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "mailto:hello@foeglabs.com", label: "Email" },
  ];

  return (
    <footer className="bg-foeg-onyx py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={foegLogo} alt="FOEG Labs" className="h-10 w-10 rounded-lg" />
              <span className="text-xl font-display font-bold gradient-text">FOEG Labs</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Accelerating founders from hackathon to market. Building the future of Web3, one startup at a time.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FOEG Labs. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Contact:{" "}
            <a href="mailto:hello@foeglabs.com" className="text-primary hover:text-secondary transition-colors">
              hello@foeglabs.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
