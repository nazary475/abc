import { HeroSection } from "@/components/blocks/hero-section";
import {
  SolutionsSection,
  ContactCtaSection,
} from "@/components/blocks/home-sections";
import { FounderSection } from "@/components/site/founder-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <FounderSection />
      <ContactCtaSection />
    </>
  );
}
