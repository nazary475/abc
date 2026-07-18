import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { AboutPage } from "@/components/pages/about-page";
import { PageSchemas } from "@/components/site/json-ld";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FaqSection } from "@/components/site/faq-section";
import { RelatedLinks } from "@/components/site/related-links";
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
  const meta = getPageMetadata("about", currentLocale);

  return {
    title: meta.title,
    description: meta.description,
    ...generateHreflangAlternates(currentLocale, "/about"),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://haal-lab.solutions/${locale}/about`,
      type: "website",
      images: [meta.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: meta.ogImage.url,
          alt: meta.ogImage.alt,
        },
      ],
    },
    keywords: [
      "about Haal Lab",
      "AI engineering company",
      "AI mission",
      "AI vision",
      "privacy-first AI",
      "research-driven AI",
      "engineering excellence",
      "open-weight AI",
      "AI consulting company",
      "custom AI development company",
    ],
  };
}

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("aboutPage");
  const localeFAQs = getFAQsByLocale(locale);
  return (
    <>
      <PageSchemas path="/about" locale={locale} />
      <Breadcrumbs path="/about" />
      <AboutPage />
      <FaqSection
        faqs={localeFAQs.about || FAQS.about}
        eyebrow={t("faqEyebrow")}
        title={t("faqTitle")}
        intro={t("faqIntro")}
      />
      <RelatedLinks current="/about" title="Continue exploring" eyebrow="Next" />
    </>
  );
}
