import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { VacationMode } from "@/components/VacationMode";
import { DesignShowcase } from "@/components/DesignShowcase";
import { ProductSelector } from "@/components/ProductSelector";
import { TrustSection } from "@/components/TrustSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <HowItWorks />
      <VacationMode />
      <DesignShowcase />
      <ProductSelector />
      <TrustSection />
    </main>
  );
};

export default Index;
