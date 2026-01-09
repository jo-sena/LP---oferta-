import HeroSection from "@/components/landing/HeroSection";
import ChaosSection from "@/components/landing/ChaosSection";
import TurnSection from "@/components/landing/TurnSection";
import ProductSection from "@/components/landing/ProductSection";
import AudienceSection from "@/components/landing/AudienceSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ChaosSection />
      <TurnSection />
      <ProductSection />
      <AudienceSection />
      <CTASection />
    </main>
  );
};

export default Index;
