import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about-page";
import { PageSchemas } from "@/components/site/json-ld";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FaqSection } from "@/components/site/faq-section";
import { RelatedLinks } from "@/components/site/related-links";
import { FAQS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About — An AI Engineering Company, Not an Agency",
  description:
    "Haal Lab is an AI engineering company focused on developing intelligent software systems using modern machine learning and language model technologies. Our mission, vision, and engineering principles.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — An AI Engineering Company, Not an Agency",
    description:
      "Haal Lab is an AI engineering company focused on developing intelligent software systems using modern ML and LLM technologies. Mission, vision, and principles.",
    url: "/about",
    type: "website",
  },
  keywords: [
    "about Haal Lab",
    "AI engineering company",
    "AI mission",
    "AI vision",
    "privacy-first AI",
    "research-driven AI",
    "engineering excellence",
    "open-weight AI",
    "AI consulting company",
    "custom AI development company",
  ],
};

export default function About() {
  return (
    <>
      <PageSchemas path="/about" />
      <Breadcrumbs path="/about" />
      <AboutPage />
      <FaqSection
        faqs={FAQS.about}
        eyebrow="FAQ"
        title="Questions about Haal Lab"
        intro="Who we are, how we work, and what we believe about AI engineering."
      />
      <RelatedLinks current="/about" title="Continue exploring" eyebrow="Next" />
    </>
  );
}
