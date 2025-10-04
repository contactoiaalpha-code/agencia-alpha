import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AgentsSection } from "@/components/sections/AgentsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AgentsSection />
      <CaseStudiesSection />
      <AboutUsSection />
      <ContactSection />
    </>
  );
}
