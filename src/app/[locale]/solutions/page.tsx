import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { SolutionsPage } from "@/components/pages/solutions-page";
import { PageSchemas } from "@/components/site/json-ld";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FaqSection } from "@/components/site/faq-section";
import { RelatedLinks } from "@/components/site/related-links";
import { GlossarySection } from "@/components/site/glossary-section";
import { FAQS, generateHreflangAlternates } from "@/lib/seo";
import { getFAQsByLocale } from "@/lib/seo-faqs";
import { Locale } from "@/i18n/routing";
import { getPageMetadata } from "@/lib/page-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const meta = getPageMetadata("solutions", currentLocale);

  return {
    title: meta.title,
    description: meta.description,
    ...generateHreflangAlternates(currentLocale, "/solutions"),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${locale}/solutions`,
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
}

export default async function Solutions({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("solutions");
  const localeFAQs = getFAQsByLocale(locale);

  return (
    <>
      <PageSchemas path="/solutions" locale={locale} />
      <Breadcrumbs path="/solutions" />
      <SolutionsPage />
      <GlossarySection />
      <FaqSection
        faqs={localeFAQs.solutions || FAQS.solutions}
        eyebrow={t("faqEyebrow")}
        title={t("faqTitle")}
        intro={t("faqIntro")}
      />
      <RelatedLinks current="/solutions" title="Continue exploring" eyebrow="Next" />
    </>
  );
}
