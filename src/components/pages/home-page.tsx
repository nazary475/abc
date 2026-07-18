import { HeroSection } from "@/components/blocks/hero-section";
import {
  SolutionsSection,
  ArchitectureSection,
  WhySection,
  ContactCtaSection,
} from "@/components/blocks/home-sections";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <ArchitectureSection />
      <WhySection />
      <ContactCtaSection />
    </>
  );
}
