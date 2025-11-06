import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Programs from "@/components/Programs";
import GirlsOnchain from "@/components/GirlsOnchain";
import HowItWorks from "@/components/HowItWorks";
import FounderSpotlight from "@/components/FounderSpotlight";
import Events from "@/components/Events";
import KnowledgeSessions from "@/components/KnowledgeSessions";
import Testimonials from "@/components/Testimonials";
import ApplicationForm from "@/components/ApplicationForm";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SocialProof />
      <Programs />
      <GirlsOnchain />
      <HowItWorks />
      <FounderSpotlight />
      <Events />
      <KnowledgeSessions />
      <Testimonials />
      <ApplicationForm />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
