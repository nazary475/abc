import { SITE, BREADCRUMBS, FAQS, ENGAGEMENT_STEPS, CAPABILITIES, FAQ } from "@/lib/seo";
import { getFAQsByLocale } from "@/lib/seo-faqs";
import type { Locale } from "@/i18n/routing";

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
    employee: [
      {
        "@type": "Person",
        name: "Hussain Nazary",
        jobTitle: "Chief Technology Officer",
        description: "AI Engineer & CTO at Haal Lab",
        email: SITE.email,
        knowsAbout: [
          "Artificial Intelligence",
          "Machine Learning",
          "Large Language Models",
          "AI Engineering",
          "Full Stack Development",
        ],
      },
    ],
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
    author: {
      "@type": "Person",
      name: "Hussain Nazary",
      jobTitle: "Chief Technology Officer & AI Engineer",
      worksFor: {
        "@type": "Organization",
        name: SITE.name,
      },
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

/** SoftwareApplication schema — represents our AI platform capabilities. */
export function softwareApplicationSchema(locale: string) {
  const localePrefix = locale === "en" ? "en" : locale;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Haal Lab AI Platform",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Artificial Intelligence Platform",
    description:
      "Private AI systems platform for building LLM applications, RAG systems, and intelligent automation with on-premise deployment capabilities.",
    url: `${SITE.url}/${localePrefix}`,
    operatingSystem: "Linux, Windows, macOS",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "1900",
      highPrice: "39900",
      priceSpecification: [
        {
          "@type": "UnitPriceSpecification",
          price: "1900",
          priceCurrency: "EUR",
          name: "Starter Package",
        },
        {
          "@type": "UnitPriceSpecification",
          price: "4900",
          priceCurrency: "EUR",
          name: "Explorer Package",
        },
        {
          "@type": "UnitPriceSpecification",
          price: "14900",
          priceCurrency: "EUR",
          name: "Professional Package",
        },
        {
          "@type": "UnitPriceSpecification",
          price: "39900",
          priceCurrency: "EUR",
          name: "Enterprise Package",
        },
      ],
    },
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    featureList: [
      "Private on-premise AI deployment",
      "RAG (Retrieval-Augmented Generation) systems",
      "LLM application development",
      "Air-gapped deployment support",
      "Open-weight model integration",
      "GDPR & EU AI Act compliance",
      "Multi-language support",
      "Vector database integration",
      "GPU optimization",
      "Kubernetes orchestration",
    ],
    softwareRequirements: "Docker, Kubernetes (optional), GPU (optional)",
    releaseNotes: `${SITE.url}/${localePrefix}/research`,
    screenshot: `${SITE.url}/og-image.png`,
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

/** Article schema — for research articles with comprehensive SEO/GEO optimization. */
export function articleSchema(opts: {
  title: string;
  description: string;
  date: string;
  path: string;
  author?: string;
  tags?: string[];
  category?: string;
  readTime?: string;
  wordCount?: number;
}) {
  // Calculate word count from description if not provided
  const estimatedWordCount = opts.wordCount || Math.ceil(opts.description.split(" ").length * 50);
  
  return {
    "@context": "https://schema.org",
    "@type": ["Article", "TechArticle", "ScholarlyArticle"],
    headline: opts.title,
    description: opts.description,
    abstract: opts.description,
    datePublished: opts.date,
    dateModified: opts.date,
    
    author: {
      "@type": "Person",
      name: opts.author || "Haal Lab Team",
      url: SITE.url,
      jobTitle: "AI Engineering Team",
      worksFor: {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
      },
    },
    
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: { 
        "@type": "ImageObject", 
        url: `${SITE.url}/logo.svg`,
        width: 600,
        height: 600,
      },
    },
    
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}${opts.path}`,
    },
    
    // Enhanced properties for GEO
    keywords: opts.tags?.join(", "),
    articleSection: opts.category || "AI Engineering",
    articleBody: opts.description,
    wordCount: estimatedWordCount,
    
    // Time to read - helps AI understand article length
    timeRequired: opts.readTime || "PT15M",
    
    // Indicate this is technical/educational content
    genre: ["Technology", "Artificial Intelligence", "Engineering"],
    about: {
      "@type": "Thing",
      name: "Artificial Intelligence Engineering",
      description: "Practical AI deployment and LLM engineering",
    },
    
    // Educational value for AI indexing
    educationalUse: "Professional Development",
    learningResourceType: "Technical Article",
    
    // Indicate expertise level
    audience: {
      "@type": "Audience",
      audienceType: ["Developers", "Engineers", "Technical Leaders", "AI Practitioners"],
    },
    
    // Breadcrumb navigation
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Research",
          item: `${SITE.url}/research`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: opts.title,
          item: `${SITE.url}${opts.path}`,
        },
      ],
    },
    
    // Citation metadata for academic/research indexing
    citation: opts.tags?.map(tag => ({
      "@type": "CreativeWork",
      name: tag,
    })),
    
    // License information
    license: "https://creativecommons.org/licenses/by-sa/4.0/",
    
    // Indicate this is original research/content
    isBasedOn: SITE.url,
    inLanguage: ["en", "de", "fr"],
  };
}

/**
 * JsonLd — site-wide schemas (rendered in layout.tsx).
 * Per-page schemas are rendered by <PageSchema /> below.
 */
export function JsonLd({ locale }: { locale?: string }) {
  return (
    <>
      {locale && (
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('lang', '${locale}');`,
          }}
        />
      )}
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
      {locale && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema(locale)) }}
        />
      )}
    </>
  );
}

/**
 * PageSchema — renders per-page JSON-LD based on the current route.
 * Place this once per page (typically in the page.tsx file).
 */
export function PageSchemas({ path, locale }: { path: string; locale?: string }) {
  const schemas: object[] = [breadcrumbSchema(path)];

  // Get locale-specific FAQs
  const localeFAQs = locale ? getFAQsByLocale(locale) : FAQS;

  // Attach FAQ schema if this path has FAQs
  const faqKey = path === "/" ? "home" : path.slice(1);
  if (localeFAQs[faqKey] && localeFAQs[faqKey].length > 0) {
    schemas.push(faqSchema(localeFAQs[faqKey]));
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
