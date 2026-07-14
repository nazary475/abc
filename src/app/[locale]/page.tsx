import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { HomePage } from "@/components/pages/home-page";
import { PageSchemas } from "@/components/site/json-ld";
import { FaqSection } from "@/components/site/faq-section";
import { RelatedLinks } from "@/components/site/related-links";
import { FAQS } from "@/lib/seo";
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
  const meta = getPageMetadata("home", currentLocale);

  return {
    title: {
      default: meta.title,
      template: "%s · Haal Lab",
    },
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const localeFAQs = getFAQsByLocale(locale);

  return (
    <>
      <PageSchemas path="/" locale={locale} />
      <HomePage />
      <FaqSection
        faqs={localeFAQs.home || FAQS.home}
        eyebrow="FAQ"
        title="Frequently asked questions"
        intro="Answers to the questions we hear most often — from organizations evaluating AI engineering partners."
      />
      <RelatedLinks current="/" title="Explore Haal Lab" eyebrow="Continue" />
    </>
  );
}
