import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { HomePage } from "@/components/pages/home-page";
import { PageSchemas } from "@/components/site/json-ld";
import { FaqSection } from "@/components/site/faq-section";
import { RelatedLinks } from "@/components/site/related-links";
import { FAQS } from "@/lib/seo";
import { Locale } from "@/i18n/routing";

export const metadata: Metadata = {
  title: {
    default: "Haal Lab — Engineering Intelligent Systems for the Future",
    template: "%s · Haal Lab",
  },
  description:
    "Haal Lab is a deep-tech AI engineering company building private, intelligent, and reliable AI systems — large language model applications, retrieval systems, automation platforms, and private AI infrastructure.",
  openGraph: {
    title: "Haal Lab — Engineering Intelligent Systems for the Future",
    description:
      "A deep-tech AI engineering company building private, intelligent, and reliable AI systems — LLM applications, retrieval systems, automation platforms, and private AI infrastructure.",
    type: "website",
  },
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <PageSchemas path="/" />
      <HomePage />
      <FaqSection
        faqs={FAQS.home}
        eyebrow="FAQ"
        title="Frequently asked questions"
        intro="Answers to the questions we hear most often — from organizations evaluating AI engineering partners."
      />
      <RelatedLinks current="/" title="Explore Haal Lab" eyebrow="Continue" />
    </>
  );
}
