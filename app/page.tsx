import HeroSection from "@/components/home/HeroSection";
import TimberSpeciesSection from "@/components/home/TimberSpeciesSection";
import ProductsSection from "@/components/home/ProductsSection";
import ServicesSection from "@/components/home/ServicesSection";
import SourcingSection from "@/components/home/SourcingSection";
import FAQSection from "@/components/home/FAQSection";
import AboutSection from "@/components/home/AboutSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TimberSpeciesSection />
      <ProductsSection />
      <ServicesSection />
      <SourcingSection />
      <FAQSection />
      <AboutSection />
    </>
  );
}
