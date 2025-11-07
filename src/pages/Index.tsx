import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ThreePillars from "@/components/ThreePillars";
import StatsByNumbers from "@/components/StatsByNumbers";
import Programs from "@/components/Programs";
import GirlsOnchain from "@/components/GirlsOnchain";
import PhotoGallery from "@/components/PhotoGallery";
import Events from "@/components/Events";
import PartnerEcosystem from "@/components/PartnerEcosystem";
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
      <Programs />
      <GirlsOnchain />
      <PhotoGallery />
      <Events />
      <PartnerEcosystem />
      <Testimonials />
      <PartnerCTA />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
