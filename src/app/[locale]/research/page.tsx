import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ResearchPage } from "@/components/pages/research-page";
import { PageSchemas } from "@/components/site/json-ld";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FaqSection } from "@/components/site/faq-section";
import { RelatedLinks } from "@/components/site/related-links";
import { FAQS } from "@/lib/seo";
import { Locale } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Research — Technical Notes from the Engineering Floor",
  description:
    "Articles, experiments, and AI insights from the Haal Lab team. Technical writing on local LLM inference, reranking, BGE-M3, evaluation-driven CI, agent orchestration, and private AI threat modeling.",
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: "Research — Technical Notes from the Engineering Floor",
    description:
      "Articles, experiments, and AI insights from the Haal Lab team — local LLM stacks, reranking, BGE-M3, evaluation CI, agent patterns, and private AI security.",
    url: "/research",
    type: "website",
  },
  keywords: [
    "AI research",
    "AI engineering blog",
    "local LLM inference",
    "reranking",
    "BGE-M3",
    "evaluation CI",
    "agent orchestration",
    "private AI security",
    "RAG",
    "llama.cpp",
    "vLLM",
    "GGUF",
    "AI threat modeling",
    "production AI",
  ],
};

export default async function Research({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  return (
    <>
      <PageSchemas path="/research" />
      <Breadcrumbs path="/research" />
      <ResearchPage />
      <FaqSection
        faqs={FAQS.research}
        eyebrow="FAQ"
        title="Questions about our research"
        intro="Where to find our technical writing and what we cover."
      />
      <RelatedLinks current="/research" title="Continue exploring" eyebrow="Next" />
    </>
  );
}
