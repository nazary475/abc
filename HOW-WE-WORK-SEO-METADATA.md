# How We Work Page - Complete SEO Metadata & JSON-LD Schemas

## Overview
This document describes all meta tags, Open Graph tags, Twitter Cards, and JSON-LD structured data implemented for the "How We Work" page at Haal Lab.

---

## 1. Basic Meta Tags

### Title Tag
```html
<title>How We Work — Research-Driven AI Engineering</title>
```

### Meta Description
```html
<meta name="description" content="Haal Lab's research-driven AI engineering process — from discovery and exploration to experimentation, development, and continuous deployment." />
```

### Keywords
```html
<meta name="keywords" content="AI engineering process, how Haal Lab works, AI research-driven engineering, AI experimentation, AI deployment, AI development process, AI methodology, research-driven AI, AI evaluation, AI continuous improvement, AI systems development, AI architecture design, LLM development process, RAG system development, private AI development, AI engineering methodology, AI project lifecycle, AI discovery phase, AI prototyping, production AI systems" />
```

### Canonical URL
```html
<link rel="canonical" href="https://haal-lab.solutions/en/how-we-work" />
```

### Language Alternates
```html
<link rel="alternate" hreflang="en" href="https://haal-lab.solutions/en/how-we-work" />
<link rel="alternate" hreflang="de" href="https://haal-lab.solutions/de/how-we-work" />
<link rel="alternate" hreflang="fr" href="https://haal-lab.solutions/fr/how-we-work" />
<link rel="alternate" hreflang="es" href="https://haal-lab.solutions/es/how-we-work" />
<link rel="alternate" hreflang="it" href="https://haal-lab.solutions/it/how-we-work" />
```

---

## 2. Open Graph Meta Tags

Complete Open Graph implementation for rich social media previews:

```html
<meta property="og:title" content="How We Work — Research-Driven AI Engineering" />
<meta property="og:description" content="Haal Lab's research-driven AI engineering process — from discovery and exploration to experimentation, development, and continuous deployment." />
<meta property="og:url" content="https://haal-lab.solutions/en/how-we-work" />
<meta property="og:site_name" content="Haal Lab" />
<meta property="og:locale" content="en" />
<meta property="og:locale:alternate" content="en_US,de_DE,fr_FR,es_ES,it_IT" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://haal-lab.solutions/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Haal Lab - Research-Driven AI Engineering Process" />
<meta property="og:image:type" content="image/png" />
<meta property="article:publisher" content="https://www.linkedin.com/company/haal-lab" />
<meta property="article:author" content="Hussain Nazary" />
```

---

## 3. Twitter Card Meta Tags

Complete Twitter Card implementation for rich Twitter/X previews:

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="How We Work — Research-Driven AI Engineering" />
<meta name="twitter:description" content="Haal Lab's research-driven AI engineering process — from discovery and exploration to experimentation, development, and continuous deployment." />
<meta name="twitter:site" content="@haallab" />
<meta name="twitter:creator" content="@haallab" />
<meta name="twitter:image" content="https://haal-lab.solutions/og-image.png" />
```

---

## 4. Robots & Indexing Meta Tags

```html
<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
```

---

## 5. Additional Meta Tags

### Classification & Category
```html
<meta name="category" content="Technology" />
<meta name="classification" content="AI Engineering Services" />
```

### Mobile & PWA
```html
<meta name="application-name" content="Haal Lab" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-title" content="Haal Lab" />
<meta name="format-detection" content="telephone=no" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="theme-color" content="#000000" />
```

### Author Information
```html
<meta name="author" content="Haal Lab" />
<meta name="creator" content="Haal Lab" />
<meta name="publisher" content="Haal Lab" />
```

---

## 6. JSON-LD Structured Data Schemas

### 6.1 BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://haal-lab.solutions"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "How We Work",
      "item": "https://haal-lab.solutions/how-we-work"
    }
  ]
}
```

### 6.2 FAQPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Haal Lab approach AI projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Haal Lab follows a research-driven engineering process: understanding the challenge, researching and exploring possible approaches, experimenting and evaluating solutions, engineering and developing the system, then deploying with continuous improvement. Every project starts with the problem, not the model."
      }
    },
    {
      "@type": "Question",
      "name": "What happens during the research and exploration phase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Before committing to an approach, we investigate available technologies and possible architectures. We explore different AI methods, evaluate suitable models and techniques, test possible architectures, and study trade-offs between performance, cost, security, and scalability."
      }
    },
    {
      "@type": "Question",
      "name": "How does Haal Lab evaluate AI solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build experiments and prototypes to evaluate different solutions before full implementation. We measure effectiveness, reliability, performance, integration requirements, and long-term sustainability to make informed decisions based on results."
      }
    }
  ]
}
```

### 6.3 HowTo + TechArticle Schema (Main Process)

```json
{
  "@context": "https://schema.org",
  "@type": ["HowTo", "TechArticle"],
  "@id": "https://haal-lab.solutions/how-we-work#process",
  "name": "Haal Lab's Research-Driven AI Engineering Process",
  "description": "A systematic approach to building AI systems: Understanding the Challenge, Research & Exploration, Experimentation & Evaluation, Engineering & Development, and Deployment & Continuous Improvement.",
  "abstract": "Haal Lab believes successful AI systems are not created by applying the same solution to every organization. Every challenge has different requirements, data environments, security considerations, and operational goals.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Understanding the Challenge",
      "text": "We begin by understanding the organization's objectives, existing processes, available resources, and the problem that needs to be solved.",
      "itemListElement": [
        { "@type": "HowToDirection", "text": "Business goals" },
        { "@type": "HowToDirection", "text": "Operational challenges" },
        { "@type": "HowToDirection", "text": "Existing knowledge and data sources" },
        { "@type": "HowToDirection", "text": "Technical requirements" },
        { "@type": "HowToDirection", "text": "Security and privacy considerations" }
      ],
      "url": "https://haal-lab.solutions/how-we-work#understanding"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Research & Exploration",
      "text": "Before committing to an approach, we investigate available technologies and possible architectures.",
      "itemListElement": [
        { "@type": "HowToDirection", "text": "Exploring different AI methods" },
        { "@type": "HowToDirection", "text": "Evaluating suitable models and techniques" },
        { "@type": "HowToDirection", "text": "Testing possible architectures" },
        { "@type": "HowToDirection", "text": "Studying trade-offs between performance, cost, security, and scalability" }
      ],
      "url": "https://haal-lab.solutions/how-we-work#research"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Experimentation & Evaluation",
      "text": "AI development requires careful testing. We build experiments and prototypes to evaluate different solutions before full implementation.",
      "itemListElement": [
        { "@type": "HowToDirection", "text": "Effectiveness" },
        { "@type": "HowToDirection", "text": "Reliability" },
        { "@type": "HowToDirection", "text": "Performance" },
        { "@type": "HowToDirection", "text": "Integration requirements" },
        { "@type": "HowToDirection", "text": "Long-term sustainability" }
      ],
      "url": "https://haal-lab.solutions/how-we-work#experimentation"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Engineering & Development",
      "text": "After identifying the most suitable approach, we design and develop the AI system according to the organization's environment and requirements.",
      "itemListElement": [
        { "@type": "HowToDirection", "text": "Practical" },
        { "@type": "HowToDirection", "text": "Secure" },
        { "@type": "HowToDirection", "text": "Maintainable" },
        { "@type": "HowToDirection", "text": "Ready for real-world use" }
      ],
      "url": "https://haal-lab.solutions/how-we-work#engineering"
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Deployment & Continuous Improvement",
      "text": "AI systems continue evolving after deployment. We support organizations in integrating AI into their workflows, monitoring performance, and improving capabilities as new requirements and technologies emerge.",
      "url": "https://haal-lab.solutions/how-we-work#deployment"
    }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Open-weight Language Models" },
    { "@type": "HowToTool", "name": "Evaluation Frameworks" },
    { "@type": "HowToTool", "name": "Observability Systems" },
    { "@type": "HowToTool", "name": "Private Infrastructure" }
  ],
  "author": {
    "@id": "https://haal-lab.solutions/#organization"
  },
  "publisher": {
    "@id": "https://haal-lab.solutions/#organization"
  },
  "about": [
    {
      "@type": "Thing",
      "name": "AI Engineering Methodology",
      "description": "Systematic approach to building production AI systems"
    },
    {
      "@type": "Thing",
      "name": "Research-Driven Development",
      "description": "Evidence-based AI system design and implementation"
    }
  ],
  "keywords": "AI engineering process, research-driven AI, AI experimentation, AI evaluation, AI deployment, AI continuous improvement, AI methodology",
  "genre": ["Technology", "Methodology", "Process"],
  "learningResourceType": ["Guide", "Methodology", "Process Documentation"],
  "audience": {
    "@type": "Audience",
    "audienceType": ["Business Leaders", "Technical Leaders", "Project Managers", "Engineering Teams"],
    "educationalLevel": "Professional"
  },
  "inLanguage": ["en", "de", "fr", "es", "it"],
  "isAccessibleForFree": true,
  "totalTime": "PT3M",
  "license": "https://creativecommons.org/licenses/by-sa/4.0/"
}
```

### 6.4 ItemList Schema (Process Phases)

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://haal-lab.solutions/how-we-work#phases",
  "name": "AI Engineering Process Phases",
  "description": "The five phases of Haal Lab's research-driven AI engineering process",
  "numberOfItems": 5,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Understanding the Challenge",
      "description": "Understand the real problem before designing a solution",
      "url": "https://haal-lab.solutions/how-we-work#understanding"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Research & Exploration",
      "description": "Find the approach that best fits the organization's needs",
      "url": "https://haal-lab.solutions/how-we-work#research"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Experimentation & Evaluation",
      "description": "Make informed decisions based on results",
      "url": "https://haal-lab.solutions/how-we-work#experimentation"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Engineering & Development",
      "description": "Build practical, secure, and maintainable AI systems",
      "url": "https://haal-lab.solutions/how-we-work#engineering"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Deployment & Continuous Improvement",
      "description": "Create a long-term AI capability, not just a one-time implementation",
      "url": "https://haal-lab.solutions/how-we-work#deployment"
    }
  ]
}
```

### 6.5 WebPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://haal-lab.solutions/en/how-we-work#webpage",
  "url": "https://haal-lab.solutions/en/how-we-work",
  "name": "How We Work - Research-Driven AI Engineering",
  "description": "Haal Lab's research-driven AI engineering process combines research, experimentation, engineering, and continuous evaluation to identify and build the most suitable AI approach for each organization.",
  "isPartOf": {
    "@id": "https://haal-lab.solutions/#website"
  },
  "about": {
    "@type": "Thing",
    "name": "AI Engineering Methodology",
    "description": "Research-driven process for building production AI systems"
  },
  "mainEntity": {
    "@id": "https://haal-lab.solutions/how-we-work#process"
  },
  "breadcrumb": {
    "@id": "https://haal-lab.solutions/en/how-we-work#breadcrumb",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://haal-lab.solutions"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "How We Work",
        "item": "https://haal-lab.solutions/en/how-we-work"
      }
    ]
  },
  "publisher": {
    "@id": "https://haal-lab.solutions/#organization"
  },
  "author": {
    "@id": "https://haal-lab.solutions/#organization"
  },
  "inLanguage": "en",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-18",
  "keywords": "AI engineering process, research-driven AI, AI methodology, AI development lifecycle, AI experimentation, AI evaluation, AI deployment"
}
```

---

## 7. Additional Site-Wide Schemas

These schemas are included on all pages (including How We Work) via the layout:

### 7.1 Organization Schema
- Comprehensive organization data with legal identifiers (SIRET, RCS)
- Contact information
- Founder and employee details
- Service offerings
- Partners and capabilities

### 7.2 WebSite Schema
- Site-wide search action
- Multi-language support
- Publisher and author information

### 7.3 ProfessionalService Schema
- Detailed service catalog
- Pricing information
- Service areas and offerings

### 7.4 SoftwareApplication Schema
- AI platform capabilities
- Pricing tiers
- Feature list
- Technical requirements

---

## 8. SEO Benefits

### For Search Engines (Google, Bing)
1. **Rich Results**: Enhanced search listings with process steps, FAQs, and breadcrumbs
2. **Knowledge Graph**: Better understanding of Haal Lab's methodology
3. **Featured Snippets**: Eligible for position zero with structured FAQ content
4. **Rich Cards**: Process visualization in search results

### For AI Chatbots (ChatGPT, Perplexity, Claude, Gemini)
1. **Citable Content**: FAQPage schema provides direct Q&A for AI responses
2. **Structured Process**: HowTo schema enables step-by-step guidance
3. **Entity Recognition**: Organization and author entities linked across schemas
4. **Context Understanding**: Multiple schema types provide comprehensive context

### For Social Media
1. **Rich Previews**: Beautiful cards on LinkedIn, Twitter, Facebook
2. **Consistent Branding**: Unified images and messaging
3. **Click-Through Optimization**: Compelling descriptions and visuals

---

## 9. Validation & Testing

### Recommended Testing Tools

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test URL: https://haal-lab.solutions/en/how-we-work

2. **Schema.org Validator**
   - URL: https://validator.schema.org/
   - Validates JSON-LD syntax

3. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Tests Open Graph tags

4. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Tests Twitter Card implementation

5. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/
   - Tests LinkedIn preview

---

## 10. Localization Support

All metadata is fully localized across 5 languages:
- **English (en)**: Primary language
- **German (de)**: Deutsche version
- **French (fr)**: Version française
- **Spanish (es)**: Versión española
- **Italian (it)**: Versione italiana

Each language has:
- Translated title and description
- Language-specific canonical URL
- hreflang alternates
- Locale-specific Open Graph tags
- Localized JSON-LD schemas

---

## 11. Performance Considerations

- All JSON-LD schemas are server-side rendered
- No client-side JavaScript required for SEO
- Optimized for Core Web Vitals
- Progressive enhancement approach

---

## 12. Maintenance Notes

### When to Update

1. **Process Changes**: Update HowTo schema steps
2. **FAQ Updates**: Modify FAQPage schema in seo.ts
3. **New Services**: Update Organization schema offerings
4. **Contact Changes**: Update contact information across schemas
5. **Pricing Updates**: Sync with pricing page schemas

### Files to Maintain

- `/src/app/[locale]/how-we-work/page.tsx` - Meta tags
- `/src/components/site/json-ld.tsx` - JSON-LD schemas
- `/src/lib/seo.ts` - FAQ content
- `/src/lib/page-metadata.ts` - Localized metadata

---

## Summary

The "How We Work" page now includes:
- ✅ Complete HTML meta tags (title, description, keywords)
- ✅ Full Open Graph implementation (10+ tags)
- ✅ Twitter Card tags (6 tags)
- ✅ Robots and indexing directives
- ✅ 5 comprehensive JSON-LD schemas
- ✅ Multi-language support (5 languages)
- ✅ Mobile and PWA meta tags
- ✅ Author and publisher information
- ✅ Canonical URLs and alternates
- ✅ Optimized for search engines and AI chatbots

This implementation follows Google's structured data guidelines, Schema.org best practices, and is optimized for both traditional SEO and Generative Engine Optimization (GEO).
