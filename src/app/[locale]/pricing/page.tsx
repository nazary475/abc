import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PricingPage } from "@/components/pages/pricing-page";
import { PageSchemas } from "@/components/site/json-ld";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FaqSection } from "@/components/site/faq-section";
import { RelatedLinks } from "@/components/site/related-links";
import { FAQS } from "@/lib/seo";
import { Locale } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Pricing — AI Engineering Packages for Every Stage",
  description:
    "Five pricing tiers from Haal Lab: Starter (€1,900), Explorer (€4,900), Professional (€14,900), Enterprise (€39,900+), and Research & Academic (custom). Production AI systems — not demos.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing — AI Engineering Packages for Every Stage",
    description:
      "Five pricing tiers from Haal Lab: Starter, Explorer, Professional, Enterprise, and Research & Academic. Production AI systems — not demos.",
    url: "/pricing",
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

export default async function Pricing({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <PageSchemas path="/pricing" />
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
