import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import miniHackCover from "@/assets/events/mini-hack-cover.png";
import gameJamCover from "@/assets/events/game-jam-cover.jpg";
import agiTrackCover from "@/assets/events/agi-track-cover.jpg";
import starknetCover from "@/assets/events/starknet-basecamp-cover.jpg";

const WHATSAPP_URL = "https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-foreground">
              The frontier of ecosystem growth.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              FOEG Labs supports builders, founders, and communities to grow ideas into real products, teams, and opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                asChild
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Join the Community
                </a>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 rounded-full px-8 text-base"
              >
                <Link to="/events">
                  View Events
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - Image collage */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[550px] animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {/* Main large image */}
            <div className="absolute top-0 right-0 w-[65%] h-[60%] z-10">
              <img 
                src={starknetCover} 
                alt="Starknet Basecamp Africa event"
                className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-background"
              />
            </div>
            
            {/* Second image - overlapping left */}
            <div className="absolute top-[15%] left-0 w-[50%] h-[45%] z-20 transform -rotate-3">
              <img 
                src={miniHackCover} 
                alt="Mini Hack event"
                className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-background"
              />
            </div>
            
            {/* Third image - bottom right */}
            <div className="absolute bottom-0 right-[5%] w-[55%] h-[45%] z-15 transform rotate-2">
              <img 
                src={gameJamCover} 
                alt="Game Jam VII Dojo event"
                className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-background"
              />
            </div>
            
            {/* Fourth image - bottom left, smaller */}
            <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[35%] z-25 transform -rotate-2">
              <img 
                src={agiTrackCover} 
                alt="AGI Track at Nairobi Blockchain Week"
                className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
