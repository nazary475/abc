import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ResearchPage } from "@/components/pages/research-page";
import { PageSchemas } from "@/components/site/json-ld";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FaqSection } from "@/components/site/faq-section";
import { RelatedLinks } from "@/components/site/related-links";
import { FAQS, generateHreflangAlternates } from "@/lib/seo";
import { Locale } from "@/i18n/routing";
import { getPageMetadata } from "@/lib/page-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const meta = getPageMetadata("research", currentLocale);

  return {
    title: meta.title,
    description: meta.description,
    ...generateHreflangAlternates(currentLocale, "/research"),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${locale}/research`,
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
}

export default async function Research({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  return (
    <>
      <PageSchemas path="/research" locale={locale} />
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
