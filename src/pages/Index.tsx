import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoItsFor from "@/components/WhoItsFor";
import WhatWeDo from "@/components/WhatWeDo";
import Community from "@/components/Community";
import SocialProof from "@/components/SocialProof";
import Partners from "@/components/Partners";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhoItsFor />
      <WhatWeDo />
      <Community />
      <SocialProof />
      <Partners />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
