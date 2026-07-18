import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { HowWeWorkPage } from "@/components/pages/how-we-work-page";
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
  const meta = getPageMetadata("howWeWork", currentLocale);

  const siteUrl = "https://haal-lab.solutions";
  const pageUrl = `${siteUrl}/${locale}/how-we-work`;
  const ogImageUrl = `${siteUrl}/og-image.png`;

  return {
    title: meta.title,
    description: meta.description,
    
    // Hreflang alternates + self-referencing canonical (professional multilingual SEO)
    ...generateHreflangAlternates(currentLocale, "/how-we-work"),
    
    // Keywords for search engines
    keywords: [
      "AI engineering process",
      "how Haal Lab works",
      "AI research-driven engineering",
      "AI experimentation",
      "AI deployment",
      "AI development process",
      "AI methodology",
      "research-driven AI",
      "AI evaluation",
      "AI continuous improvement",
      "AI systems development",
      "AI architecture design",
      "LLM development process",
      "RAG system development",
      "private AI development",
      "AI engineering methodology",
      "AI project lifecycle",
      "AI discovery phase",
      "AI prototyping",
      "production AI systems",
    ],
    
    // Open Graph metadata
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: pageUrl,
      siteName: "Haal Lab",
      locale: locale,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Haal Lab - Research-Driven AI Engineering Process",
          type: "image/png",
        },
      ],
    },
    
    // Twitter Card metadata
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      site: "@haallab",
      creator: "@haallab",
      images: [ogImageUrl],
    },
    
    // Additional meta tags
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    
    // Verification and classification
    category: "Technology",
    classification: "AI Engineering Services",
    
    // Author and ownership
    authors: [
      { name: "Haal Lab", url: siteUrl },
      { name: "Hussain Nazary", url: `${siteUrl}/about` },
    ],
    
    creator: "Haal Lab",
    publisher: "Haal Lab",
    
    // Additional metadata
    other: {
      "article:publisher": "https://www.linkedin.com/company/haal-lab",
      "article:author": "Hussain Nazary",
      "og:site_name": "Haal Lab",
      "og:locale:alternate": ["en_US", "de_DE", "fr_FR", "es_ES", "it_IT"].join(","),
      "application-name": "Haal Lab",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "apple-mobile-web-app-title": "Haal Lab",
      "format-detection": "telephone=no",
      "mobile-web-app-capable": "yes",
      "theme-color": "#000000",
    },
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
