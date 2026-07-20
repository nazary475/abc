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
    slogan: "Private AI Systems",
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
        areaServed: "Worldwide",
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
      "@id": `${SITE.url}/#founder`,
      name: "Ali-Zafar Najafi",
      givenName: "Ali-Zafar",
      familyName: "Najafi",
      jobTitle: "Founder & Chief Technology Officer",
      description: "Electrical Engineering graduate focused on artificial intelligence, machine learning systems, and computational solutions. Specializes in private AI deployment, RAG systems, and AI infrastructure engineering.",
      url: SITE.url,
      email: SITE.email,
      nationality: "Afghan",
      birthDate: "2001-05-14",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Electrical Engineering",
        description: "Electrical Engineering with focus on AI and machine learning",
      },
      knowsAbout: [
        "Artificial Intelligence Engineering",
        "Private AI Deployment",
        "Retrieval-Augmented Generation",
        "LLM Applications",
        "AI Infrastructure",
        "Machine Learning Systems",
        "Agentic AI",
        "On-Premises AI",
        "Data Sovereignty",
      ],
      sameAs: [
        SITE.github,
        SITE.linkedin,
        SITE.url,
      ],
      worksFor: {
        "@id": `${SITE.url}/#organization`,
      },
    },
    employee: [
      {
        "@type": "Person",
        name: "Hussain Nazary",
        jobTitle: "Chief Technology Officer",
        description: "AI Engineering & Private AI Systems",
        email: SITE.email,
        knowsAbout: [
          "Private AI Deployment",
          "LLM Engineering",
          "RAG Systems",
          "AI Infrastructure",
          "On-Premises AI",
        ],
      },
    ],
    knowsAbout: [
      "Private AI Systems",
      "Enterprise AI Infrastructure",
      "On-Premises AI Deployment",
      "Large Language Models",
      "LLM Applications",
      "LLM Deployment",
      "Retrieval-Augmented Generation (RAG)",
      "RAG Systems",
      "RAG Deployment",
      "Agentic AI",
      "AI Agents",
      "Agent Orchestration",
      "AI Automation Platform",
      "Enterprise AI Platform",
      "AI Data Sovereignty",
      "AI Compliance",
      "Custom LLM Applications",
      "AI Infrastructure Engineering",
      "Semantic Search Systems",
      "Vector Databases",
      "AI Evaluation and Testing",
      "Private LLM Deployment",
      "Air-Gapped AI Systems",
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
        serviceType: "Private AI Engineering Services",
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
      name: "Ali-Zafar Najafi",
      jobTitle: "Founder & Chief Technology Officer",
      url: `${SITE.url}/about`,
      worksFor: {
        "@id": `${SITE.url}/#organization`,
      },
    },
    copyrightYear: 2026,
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
      "Private AI Deployment",
      "On-Premises LLM Systems",
      "RAG System Development",
      "Custom AI Applications",
      "AI Infrastructure Engineering",
      "Data Sovereignty Solutions",
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
      audienceType: ["Enterprises", "Research Institutions", "Government Organizations", "Regulated Industries"],
      geographicArea: {
        "@type": "Place",
        name: "Worldwide",
      },
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
      name: "Private AI Systems",
      description: "Production-ready AI systems deployed on client infrastructure with data sovereignty",
    },
  };
}

/** Service platform schema — represents concrete AI engineering services. */
export function softwareApplicationSchema(locale: string) {
  const localePrefix = locale === "en" ? "en" : locale;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Haal Lab Private AI Platform",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Private AI Infrastructure",
    description:
      "On-premises AI platform requiring data sovereignty. Deploy LLMs, RAG systems, and custom AI applications on your own infrastructure.",
    url: `${SITE.url}/${localePrefix}`,
    operatingSystem: "Linux, Windows Server, macOS",
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
      "On-premises LLM deployment (no cloud required)",
      "Air-gapped infrastructure support",
      "RAG systems with private document processing",
      "Custom LLM application development",
      "Open-weight models (Llama, Mistral, Qwen)",
      "GDPR and EU AI Act compliance",
      "Data sovereignty and privacy controls",
      "Multi-language AI support (EN, DE, FR, ES, IT)",
      "Vector database integration (Qdrant, pgvector)",
      "GPU optimization for on-prem hardware",
      "Kubernetes deployment orchestration",
      "Evaluation and testing frameworks",
    ],
    softwareRequirements: "Linux or Windows Server, Docker, Kubernetes (optional), NVIDIA GPU (optional)",
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

/** Research-driven AI engineering process schema for How We Work page */
export function howWeWorkProcessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HowTo", "TechArticle"],
    "@id": `${SITE.url}/how-we-work#process`,
    name: "Haal Lab's Research-Driven AI Engineering Process",
    description:
      "A systematic approach to building AI systems: Understanding the Challenge, Research & Exploration, Experimentation & Evaluation, Engineering & Development, and Deployment & Continuous Improvement.",
    abstract:
      "Haal Lab believes successful AI systems are not created by applying the same solution to every organization. Every challenge has different requirements, data environments, security considerations, and operational goals.",
    
    // Process steps with detailed information
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Understanding the Challenge",
        text: "We begin by understanding the organization's objectives, existing processes, available resources, and the problem that needs to be solved.",
        itemListElement: [
          { "@type": "HowToDirection", text: "Business goals" },
          { "@type": "HowToDirection", text: "Operational challenges" },
          { "@type": "HowToDirection", text: "Existing knowledge and data sources" },
          { "@type": "HowToDirection", text: "Technical requirements" },
          { "@type": "HowToDirection", text: "Security and privacy considerations" },
        ],
        url: `${SITE.url}/how-we-work#understanding`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Research & Exploration",
        text: "Before committing to an approach, we investigate available technologies and possible architectures.",
        itemListElement: [
          { "@type": "HowToDirection", text: "Exploring different AI methods" },
          { "@type": "HowToDirection", text: "Evaluating suitable models and techniques" },
          { "@type": "HowToDirection", text: "Testing possible architectures" },
          { "@type": "HowToDirection", text: "Studying trade-offs between performance, cost, security, and scalability" },
        ],
        url: `${SITE.url}/how-we-work#research`,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Experimentation & Evaluation",
        text: "AI development requires careful testing. We build experiments and prototypes to evaluate different solutions before full implementation.",
        itemListElement: [
          { "@type": "HowToDirection", text: "Effectiveness" },
          { "@type": "HowToDirection", text: "Reliability" },
          { "@type": "HowToDirection", text: "Performance" },
          { "@type": "HowToDirection", text: "Integration requirements" },
          { "@type": "HowToDirection", text: "Long-term sustainability" },
        ],
        url: `${SITE.url}/how-we-work#experimentation`,
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Engineering & Development",
        text: "After identifying the most suitable approach, we design and develop the AI system according to the organization's environment and requirements.",
        itemListElement: [
          { "@type": "HowToDirection", text: "Practical" },
          { "@type": "HowToDirection", text: "Secure" },
          { "@type": "HowToDirection", text: "Maintainable" },
          { "@type": "HowToDirection", text: "Ready for real-world use" },
        ],
        url: `${SITE.url}/how-we-work#engineering`,
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Deployment & Continuous Improvement",
        text: "AI systems continue evolving after deployment. We support organizations in integrating AI into their workflows, monitoring performance, and improving capabilities as new requirements and technologies emerge.",
        url: `${SITE.url}/how-we-work#deployment`,
      },
    ],
    
    // Tools and technologies
    tool: [
      { "@type": "HowToTool", name: "Open-weight Language Models" },
      { "@type": "HowToTool", name: "Evaluation Frameworks" },
      { "@type": "HowToTool", name: "Observability Systems" },
      { "@type": "HowToTool", name: "Private Infrastructure" },
    ],
    
    // Author and publisher
    author: {
      "@id": `${SITE.url}/#organization`,
    },
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
    
    // Additional properties
    about: [
      {
        "@type": "Thing",
        name: "AI Engineering Methodology",
        description: "Systematic approach to building production AI systems",
      },
      {
        "@type": "Thing",
        name: "Research-Driven Development",
        description: "Evidence-based AI system design and implementation",
      },
    ],
    
    keywords: [
      "AI engineering process",
      "research-driven AI",
      "AI experimentation",
      "AI evaluation",
      "AI deployment",
      "AI continuous improvement",
      "AI methodology",
    ].join(", "),
    
    // Indicates this is a guide/methodology
    genre: ["Technology", "Methodology", "Process"],
    learningResourceType: ["Guide", "Methodology", "Process Documentation"],
    
    // Audience
    audience: {
      "@type": "Audience",
      audienceType: ["Business Leaders", "Technical Leaders", "Project Managers", "Engineering Teams"],
      educationalLevel: "Professional",
    },
    
    inLanguage: ["en", "de", "fr", "es", "it"],
    isAccessibleForFree: true,
    
    // Time estimate
    totalTime: "PT3M",
    
    // License
    license: "https://creativecommons.org/licenses/by-sa/4.0/",
  };
}

/** ItemList schema for the 5-phase process */
export function howWeWorkItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE.url}/how-we-work#phases`,
    name: "AI Engineering Process Phases",
    description: "The five phases of Haal Lab's research-driven AI engineering process",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Understanding the Challenge",
        description: "Understand the real problem before designing a solution",
        url: `${SITE.url}/how-we-work#understanding`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Research & Exploration",
        description: "Find the approach that best fits the organization's needs",
        url: `${SITE.url}/how-we-work#research`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Experimentation & Evaluation",
        description: "Make informed decisions based on results",
        url: `${SITE.url}/how-we-work#experimentation`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Engineering & Development",
        description: "Build practical, secure, and maintainable AI systems",
        url: `${SITE.url}/how-we-work#engineering`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Deployment & Continuous Improvement",
        description: "Create a long-term AI capability, not just a one-time implementation",
        url: `${SITE.url}/how-we-work#deployment`,
      },
    ],
  };
}

/** WebPage schema specifically for How We Work page */
export function howWeWorkWebPageSchema(locale: string) {
  const pageUrl = `${SITE.url}/${locale}/how-we-work`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "How We Work - Research-Driven AI Engineering",
    description:
      "Haal Lab's research-driven AI engineering process combines research, experimentation, engineering, and continuous evaluation to identify and build the most suitable AI approach for each organization.",
    
    isPartOf: {
      "@id": `${SITE.url}/#website`,
    },
    
    about: {
      "@type": "Thing",
      name: "AI Engineering Methodology",
      description: "Research-driven process for building production AI systems",
    },
    
    mainEntity: {
      "@id": `${SITE.url}/how-we-work#process`,
    },
    
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
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
          name: "How We Work",
          item: pageUrl,
        },
      ],
    },
    
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
    
    author: {
      "@id": `${SITE.url}/#organization`,
    },
    
    inLanguage: locale,
    
    datePublished: "2026-07-17",
    dateModified: "2026-07-18",
    
    keywords: [
      "AI engineering process",
      "research-driven AI",
      "AI methodology",
      "AI development lifecycle",
      "AI experimentation",
      "AI evaluation",
      "AI deployment",
    ].join(", "),
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
    copyrightYear: parseInt(opts.date.split('-')[0]),
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

  // How We Work page gets comprehensive process schemas
  if (path === "/how-we-work") {
    schemas.push(howWeWorkProcessSchema());
    schemas.push(howWeWorkItemListSchema());
    if (locale) {
      schemas.push(howWeWorkWebPageSchema(locale));
    }
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
