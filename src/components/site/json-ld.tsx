import { SITE, BREADCRUMBS, FAQS, ENGAGEMENT_STEPS, CAPABILITIES, FAQ } from "@/lib/seo";

/**
 * JSON-LD structured data for search engines and AI chatbots.
 *
 * Schemas emitted:
 * - Organization (site-wide, in layout.tsx)
 * - WebSite (site-wide, in layout.tsx)
 * - ProfessionalService (site-wide, in layout.tsx)
 * - BreadcrumbList (per page)
 * - FAQPage (per page, where FAQ content exists)
 * - HowTo (solutions page — engagement model)
 * - Article (research page — individual articles)
 *
 * These schemas help Google show rich results, help Bing index content,
 * and help AI chatbots (ChatGPT, Perplexity, Claude, Gemini) retrieve
 * and cite our content.
 */

type PageSchema =
  | { type: "breadcrumb"; path: string }
  | { type: "faq"; faqs: FAQ[] }
  | { type: "howTo" }
  | { type: "article"; title: string; description: string; date: string; path: string };

/** Organization schema — used in layout.tsx. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.svg`,
    email: SITE.email,
    description: SITE.description,
    foundingDate: SITE.foundingDate,
    sameAs: [SITE.github, SITE.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE.email,
      contactType: "sales",
      availableLanguage: ["English"],
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Private AI Deployment",
      "AI Infrastructure",
      "Knowledge Intelligence",
      "Semantic Search",
      "LLM Applications",
      "AI Automation",
      "Machine Learning Engineering",
    ],
  };
}

/** WebSite schema — used in layout.tsx. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    description: SITE.shortDescription,
  };
}

/** ProfessionalService schema — used in layout.tsx. */
export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    areaServed: "Worldwide",
    serviceType: [
      "Custom AI Development",
      "Retrieval-Augmented Generation Systems",
      "LLM Integration",
      "AI Automation",
      "Private AI Deployment",
      "AI Consulting",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Engineering Services",
      itemListElement: CAPABILITIES.map((c) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: c.name,
          description: c.description,
        },
      })),
    },
  };
}

/** BreadcrumbList schema — per page. */
export function breadcrumbSchema(path: string) {
  const crumbs = BREADCRUMBS[path] || BREADCRUMBS["/"];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path}`,
    })),
  };
}

/** FAQPage schema — per page. Critical for AI chatbot retrieval (GEO). */
export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** HowTo schema — for the engagement model on the solutions page. */
export function howToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Haal Lab engages on AI projects",
    description:
      "A four-stage engagement model for AI engineering projects: Discovery, Architecture, Build, Deploy.",
    step: ENGAGEMENT_STEPS.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.description,
    })),
  };
}

/** Article schema — for research articles. */
export function articleSchema(opts: {
  title: string;
  description: string;
  date: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    dateModified: opts.date,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo.svg` },
    },
    mainEntityOfPage: `${SITE.url}${opts.path}`,
  };
}

/**
 * JsonLd — site-wide schemas (rendered in layout.tsx).
 * Per-page schemas are rendered by <PageSchema /> below.
 */
export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema()) }}
      />
    </>
  );
}

/**
 * PageSchema — renders per-page JSON-LD based on the current route.
 * Place this once per page (typically in the page.tsx file).
 */
export function PageSchemas({ path }: { path: string }) {
  const schemas: object[] = [breadcrumbSchema(path)];

  // Attach FAQ schema if this path has FAQs
  const faqKey = path === "/" ? "home" : path.slice(1);
  if (FAQS[faqKey]) {
    schemas.push(faqSchema(FAQS[faqKey]));
  }

  // Solutions page also gets the HowTo schema
  if (path === "/solutions") {
    schemas.push(howToSchema());
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
