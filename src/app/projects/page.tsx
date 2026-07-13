import type { Metadata } from "next";
import { ProjectsPage } from "@/components/pages/projects-page";
import { PageSchemas } from "@/components/site/json-ld";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FaqSection } from "@/components/site/faq-section";
import { RelatedLinks } from "@/components/site/related-links";
import { FAQS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projects — Technical Case Studies in AI Engineering",
  description:
    "Representative AI engineering projects from Haal Lab, including GGUF Loader (offline LLM platform) and the Legal Intelligence System (semantic retrieval with BGE-M3). Each case study covers the problem, approach, and architecture shipped.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects — Technical Case Studies in AI Engineering",
    description:
      "Representative AI engineering projects from Haal Lab — GGUF Loader and the Legal Intelligence System. Problem, approach, and architecture for each.",
    url: "/projects",
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

export default function Projects() {
  return (
    <>
      <PageSchemas path="/projects" />
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
