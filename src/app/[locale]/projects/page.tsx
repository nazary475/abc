import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ProjectsPage } from "@/components/pages/projects-page";
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
  const meta = getPageMetadata("projects", currentLocale);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/projects`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${locale}/projects`,
      type: "website",
    },
    keywords: [
      "AI projects",
      "GGUF Loader",
      "Legal Intelligence System",
      "BGE-M3",
      "vector database",
      "RAG",
      "CUDA",
      "local LLM",
      "semantic retrieval",
      "AI case study",
      "offline AI platform",
      "legal AI",
      "document intelligence",
    ],
  };
}

export default async function Projects({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  return (
    <>
      <PageSchemas path="/projects" locale={locale} />
      <Breadcrumbs path="/projects" />
      <ProjectsPage />
      <FaqSection
        faqs={FAQS.projects}
        eyebrow="FAQ"
        title="Questions about our projects"
        intro="Details on GGUF Loader, the Legal Intelligence System, and how to access our work."
      />
      <RelatedLinks current="/projects" title="Continue exploring" eyebrow="Next" />
    </>
  );
}
