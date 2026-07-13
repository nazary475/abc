import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SolutionsPage } from "@/components/pages/solutions-page";
import { PageSchemas } from "@/components/site/json-ld";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FaqSection } from "@/components/site/faq-section";
import { RelatedLinks } from "@/components/site/related-links";
import { GlossarySection } from "@/components/site/glossary-section";
import { FAQS } from "@/lib/seo";
import { Locale } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Solutions — AI Capabilities Engineered for Production",
  description:
    "Four interlocking AI capabilities from Haal Lab: Local AI Systems, LLM Applications, Knowledge Intelligence, and AI Infrastructure. Each can be delivered standalone or composed into a unified platform.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Solutions — AI Capabilities Engineered for Production",
    description:
      "Four interlocking AI capabilities from Haal Lab: Local AI Systems, LLM Applications, Knowledge Intelligence, and AI Infrastructure.",
    url: "/solutions",
    type: "website",
  },
  keywords: [
    "AI solutions",
    "local AI systems",
    "LLM applications",
    "knowledge intelligence",
    "RAG systems",
    "AI infrastructure",
    "private AI deployment",
    "custom AI development",
    "on-prem AI",
    "air-gapped AI",
    "GGUF",
    "BGE-M3",
    "vLLM",
    "llama.cpp",
    "vector database",
    "agent orchestration",
  ],
};

export default async function Solutions({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <PageSchemas path="/solutions" />
      <Breadcrumbs path="/solutions" />
      <SolutionsPage />
      <GlossarySection />
      <FaqSection
        faqs={FAQS.solutions}
        eyebrow="FAQ"
        title="Questions about our capabilities"
        intro="Common questions about local AI, RAG, BGE-M3, air-gapped deployment, and AI infrastructure."
      />
      <RelatedLinks current="/solutions" title="Continue exploring" eyebrow="Next" />
    </>
  );
}
