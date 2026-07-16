import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { NetworkPage } from "@/components/pages/network-page";
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
  const meta = getPageMetadata("network", currentLocale);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/network`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${locale}/network`,
      type: "website",
    },
    keywords: [
      "Haal Lab partners",
      "NVIDIA partner",
      "Hugging Face partner",
      "Qdrant partner",
      "Mistral AI partner",
      "Aleph Alpha partner",
      "European AI research",
      "Fraunhofer",
      "INRIA",
      "Gaia-X partner",
      "sovereign AI partners",
    ],
  };
}

export default async function Network({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  return (
    <>
      <PageSchemas path="/network" locale={locale} />
      <Breadcrumbs path="/network" />
      <NetworkPage />
      <FaqSection
        faqs={FAQS.network}
        eyebrow="FAQ"
        title="Questions about our network"
        intro="Who we partner with and how to join the network."
      />
      <RelatedLinks current="/network" title="Continue exploring" eyebrow="Next" />
    </>
  );
}
