import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ContactPage } from "@/components/pages/contact-page";
import { PageSchemas } from "@/components/site/json-ld";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FaqSection } from "@/components/site/faq-section";
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
  const meta = getPageMetadata("contact", currentLocale);

  return {
    title: meta.title,
    description: meta.description,
    ...generateHreflangAlternates(currentLocale, "/contact"),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${locale}/contact`,
      type: "website",
    },
    keywords: [
      "contact Haal Lab",
      "AI consulting inquiry",
      "AI project inquiry",
      "hire AI engineers",
      "AI development services",
      "private AI consultation",
      "RAG system development",
      "LLM application development",
      "AI infrastructure consulting",
    ],
  };
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  return (
    <>
      <PageSchemas path="/contact" locale={locale} />
      <Breadcrumbs path="/contact" />
      <ContactPage />
      <FaqSection
        faqs={FAQS.contact}
        eyebrow="FAQ"
        title="Questions about working with us"
        intro="Response times, what to include in your inquiry, NDAs, and how we handle your data."
      />
    </>
  );
}
