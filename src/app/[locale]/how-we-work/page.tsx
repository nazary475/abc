import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { HowWeWorkPage } from "@/components/pages/how-we-work-page";
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
  const meta = getPageMetadata("howWeWork", currentLocale);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/how-we-work`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${locale}/how-we-work`,
      type: "website",
    },
    keywords: [
      "AI engineering process",
      "how Haal Lab works",
      "AI research-driven engineering",
      "AI experimentation",
      "AI deployment",
      "AI development process",
    ],
  };
}

export default async function HowWeWork({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  return (
    <>
      <PageSchemas path="/how-we-work" locale={locale} />
      <Breadcrumbs path="/how-we-work" />
      <HowWeWorkPage />
      <FaqSection
        faqs={FAQS.howWeWork}
        eyebrow="FAQ"
        title="Questions about our process"
        intro="How Haal Lab approaches AI engineering, from discovery to deployment."
      />
      <RelatedLinks current="/how-we-work" title="Continue exploring" eyebrow="Next" />
    </>
  );
}
