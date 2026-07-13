import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ContactPage } from "@/components/pages/contact-page";
import { PageSchemas } from "@/components/site/json-ld";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FaqSection } from "@/components/site/faq-section";
import { FAQS } from "@/lib/seo";
import { Locale } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Contact — Start a Conversation with Haal Lab",
  description:
    "Tell us what you are trying to build. Haal Lab responds to every serious inquiry with a concrete technical perspective — usually within two business days. Email: hello@haal-lab.solutions",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — Start a Conversation with Haal Lab",
    description:
      "Tell us what you are trying to build. We respond within two business days. Email: hello@haal-lab.solutions",
    url: "/contact",
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

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  return (
    <>
      <PageSchemas path="/contact" />
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
