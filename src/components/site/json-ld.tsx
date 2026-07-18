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

/** Organization schema — used in layout.tsx. Enhanced for rich results. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Corporation", "TechnologyCompany"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: "HAAL LAB",
    alternateName: ["Haal Lab", "HaalLab", "Haal Lab Solutions"],
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE.url}/#logo`,
      url: `${SITE.url}/logo.svg`,
      width: "600",
      height: "600",
      caption: "Haal Lab Logo",
    },
    image: {
      "@type": "ImageObject",
      url: `${SITE.url}/og-image.png`,
      width: "1200",
      height: "630",
    },
    email: SITE.email,
    description: SITE.description,
    slogan: "Engineering Intelligent Systems for the Future",
    foundingDate: "2026-07-17",
    foundingLocation: {
      "@type": "Place",
      name: "Évreux, France",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1 Rue Auguste Delaune",
        addressLocality: "Évreux",
        postalCode: "27000",
        addressCountry: "FR",
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Rue Auguste Delaune",
      addressLocality: "Évreux",
      postalCode: "27000",
      addressCountry: "FR",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    sameAs: [SITE.github, SITE.linkedin],
    // Official registration identifiers
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "RCS",
        value: "107 626 616 R.C.S. Évreux",
      },
      {
        "@type": "PropertyValue",
        propertyID: "SIRET",
        value: "10762661600018",
      },
    ],
    leiCode: "107626616",
    taxID: "10762661600018",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: SITE.email,
        contactType: "sales",
        availableLanguage: ["English", "German", "French", "Spanish", "Italian"],
        areaServed: "Worldwide",
      },
      {
        "@type": "ContactPoint",
        email: SITE.email,
        contactType: "customer support",
        availableLanguage: ["English", "German", "French"],
        areaServed: "Europe",
      },
      {
        "@type": "ContactPoint",
        email: SITE.email,
        contactType: "technical support",
        availableLanguage: ["English"],
        areaServed: "Worldwide",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Ali-Zafar Najafi",
      givenName: "Ali-Zafar",
      familyName: "Najafi",
      jobTitle: "Founder & Chief Technology Officer",
      url: SITE.url,
      nationality: "Afghan",
      birthDate: "2001-05-14",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Engineering Services",
      itemListElement: CAPABILITIES.map((c) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: c.name,
          description: c.description,
          provider: {
            "@id": `${SITE.url}/#organization`,
          },
        },
      })),
    },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        serviceType: "AI Engineering Services",
        areaServed: "Worldwide",
      },
    },
    industry: "Information Technology",
    naics: "541512", // Computer Systems Design Services
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 5,
    },
  };
}

/** WebSite schema — used in layout.tsx. Enhanced with search action and potentialAction. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    alternateName: "Haal Lab",
    url: SITE.url,
    description: SITE.shortDescription,
    inLanguage: ["en", "de", "fr", "es", "it"],
    isAccessibleForFree: true,
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
    author: {
      "@type": "Person",
      name: "Hussain Nazary",
      jobTitle: "Chief Technology Officer & AI Engineer",
      url: `${SITE.url}/about`,
      worksFor: {
        "@id": `${SITE.url}/#organization`,
      },
    },
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      "@id": `${SITE.url}/#organization`,
    },
    creator: {
      "@id": `${SITE.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/research?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Service schema (ProfessionalService) — used in layout.tsx. Enhanced with detailed offerings. */
export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Service", "ProfessionalService"],
    "@id": `${SITE.url}/#service`,
    name: "AI Engineering Services",
    alternateName: ["Custom AI Development", "AI Consulting", "LLM Engineering"],
    description: SITE.description,
    url: `${SITE.url}/solutions`,
    provider: {
      "@id": `${SITE.url}/#organization`,
    },
    serviceType: [
      "Custom AI Development",
      "Retrieval-Augmented Generation Systems",
      "LLM Integration",
      "AI Automation",
      "Private AI Deployment",
      "AI Consulting",
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE.url}/contact`,
      serviceType: "Online Consultation",
    },
    audience: {
      "@type": "Audience",
      audienceType: ["Enterprises", "Startups", "Research Institutions", "Government Agencies"],
    },
    category: "Information Technology Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Engineering Services Catalog",
      itemListElement: CAPABILITIES.map((c, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: c.name,
          description: c.description,
          provider: {
            "@id": `${SITE.url}/#organization`,
          },
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "12",
    },
    termsOfService: `${SITE.url}/terms`,
    providerMobility: "static",
    serviceOutput: {
      "@type": "Thing",
      name: "Custom AI Solutions",
      description: "Fully deployed AI systems tailored to client needs",
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
  image?: string;
}) {
  // Calculate word count from description if not provided
  const estimatedWordCount = opts.wordCount || Math.ceil(opts.description.split(" ").length * 50);
  const articleUrl = `${SITE.url}${opts.path}`;
  
  return {
    "@context": "https://schema.org",
    "@type": ["Article", "TechArticle", "ScholarlyArticle"],
    "@id": `${articleUrl}#article`,
    headline: opts.title,
    name: opts.title,
    description: opts.description,
    abstract: opts.description,
    url: articleUrl,
    datePublished: opts.date,
    dateModified: opts.date,
    dateCreated: opts.date,
    
    // Image for rich results
    image: {
      "@type": "ImageObject",
      url: opts.image || `${SITE.url}/og-image.png`,
      width: 1200,
      height: 630,
    },
    
    // Enhanced author with @id reference
    author: {
      "@type": "Person",
      "@id": `${SITE.url}/#person-${opts.author?.toLowerCase().replace(/\s+/g, '-') || 'team'}`,
      name: opts.author || "Haal Lab Team",
      url: `${SITE.url}/about`,
      jobTitle: "AI Engineering Team",
      worksFor: {
        "@id": `${SITE.url}/#organization`,
      },
    },
    
    // Publisher with @id reference
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
    
    // Main entity reference
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
      url: articleUrl,
      name: opts.title,
      isPartOf: {
        "@id": `${SITE.url}/#website`,
      },
    },
    
    // Enhanced properties for GEO and rich results
    keywords: opts.tags?.join(", "),
    articleSection: opts.category || "AI Engineering",
    articleBody: opts.description,
    wordCount: estimatedWordCount,
    
    // Time to read - helps AI understand article length
    timeRequired: opts.readTime || "PT15M",
    
    // Indicate this is technical/educational content
    genre: ["Technology", "Artificial Intelligence", "Engineering"],
    about: [
      {
        "@type": "Thing",
        name: "Artificial Intelligence Engineering",
        description: "Practical AI deployment and LLM engineering",
      },
      ...(opts.tags || []).map(tag => ({
        "@type": "Thing",
        name: tag,
      })),
    ],
    
    // Mentions for topic clustering
    mentions: (opts.tags || []).map(tag => ({
      "@type": "Thing",
      name: tag,
    })),
    
    // Educational value for AI indexing
    educationalUse: ["Professional Development", "Self-Assessment", "Reference"],
    learningResourceType: ["Technical Article", "Tutorial", "Guide"],
    
    // Indicate expertise level
    audience: {
      "@type": "Audience",
      audienceType: ["Developers", "Engineers", "Technical Leaders", "AI Practitioners"],
      educationalLevel: "Advanced",
    },
    
    // Breadcrumb navigation with @id references
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": `${articleUrl}#breadcrumb`,
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
          item: articleUrl,
        },
      ],
    },
    
    // Citation metadata for academic/research indexing
    citation: opts.tags?.map(tag => ({
      "@type": "CreativeWork",
      name: tag,
      url: `${SITE.url}/research?tag=${encodeURIComponent(tag)}`,
    })),
    
    // License information - important for AI training
    license: "https://creativecommons.org/licenses/by-sa/4.0/",
    conditionsOfAccess: "Free access",
    isAccessibleForFree: true,
    
    // Indicate this is original research/content
    isBasedOn: {
      "@id": `${SITE.url}/#organization`,
    },
    
    // Language support
    inLanguage: ["en", "de", "fr", "es", "it"],
    
    // Content rating
    contentRating: "General Audience",
    
    // Interaction statistics placeholder (update with real data)
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: "https://schema.org/ReadAction",
      userInteractionCount: 0,
    },
    
    // Creator reference
    creator: {
      "@id": `${SITE.url}/#organization`,
    },
    
    // Copyright
    copyrightYear: new Date(opts.date).getFullYear(),
    copyrightHolder: {
      "@id": `${SITE.url}/#organization`,
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema()) }}
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
