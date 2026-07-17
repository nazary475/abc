import { HeroSection } from "@/components/blocks/hero-section";
import {
  SolutionsSection,
  ArchitectureSection,
  WhySection,
  ContactCtaSection,
} from "@/components/blocks/home-sections";
import { TechnologySection } from "@/components/blocks/technology-section";
import { CaseStudySection } from "@/components/blocks/case-study-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <ArchitectureSection />
      <WhySection />
      <TechnologySection />
      <CaseStudySection />
      <ContactCtaSection />
    </>
  );
}
