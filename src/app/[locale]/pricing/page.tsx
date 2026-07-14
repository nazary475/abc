import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PricingPage } from "@/components/pages/pricing-page";
import { PageSchemas } from "@/components/site/json-ld";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FaqSection } from "@/components/site/faq-section";
import { RelatedLinks } from "@/components/site/related-links";
import { FAQS } from "@/lib/seo";
import { Locale } from "@/i18n/routing";
import { getPageMetadata } from "@/lib/page-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const meta = getPageMetadata("pricing", currentLocale);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/pricing`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${locale}/pricing`,
      type: "website",
    },
    keywords: [
      "AI pricing",
      "AI engineering cost",
      "private AI pricing",
      "LLM development cost",
      "RAG system pricing",
      "AI consulting rates",
      "enterprise AI pricing",
      "academic AI services",
      "custom AI development cost",
      "on-prem AI deployment pricing",
    ],
  };
}

export default async function Pricing({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <PageSchemas path="/pricing" locale={locale} />
      <Breadcrumbs path="/pricing" />
      <PricingPage />
      <FaqSection
        faqs={FAQS.pricing}
        eyebrow="FAQ"
        title="Questions about pricing"
        intro="Common questions about costs, timelines, and what's included in each package."
      />
      <RelatedLinks current="/pricing" title="Continue exploring" eyebrow="Next" />
    </>
  );
}
