import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ThreePillars from "@/components/ThreePillars";
import StatsByNumbers from "@/components/StatsByNumbers";
import PartnerEcosystem from "@/components/PartnerEcosystem";
import Programs from "@/components/Programs";
import GirlsOnchain from "@/components/GirlsOnchain";
import MeetTheTeam from "@/components/MeetTheTeam";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import PartnerCTA from "@/components/PartnerCTA";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ThreePillars />
      <StatsByNumbers />
      <PartnerEcosystem />
      <Programs />
      <GirlsOnchain />
      <MeetTheTeam />
      <Events />
      <Testimonials />
      <PartnerCTA />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
