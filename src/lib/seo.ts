/**
 * Centralized SEO + GEO data for Haal Lab.
 *
 * Used by:
 * - JSON-LD structured data (json-ld.tsx)
 * - Page metadata (layout.tsx, individual page.tsx files)
 * - Visible FAQ sections (faq-section.tsx)
 * - Breadcrumbs (breadcrumbs.tsx)
 * - llms.txt (generated from this data)
 *
 * GEO = Generative Engine Optimization. Optimizing for AI chatbots
 * (ChatGPT, Perplexity, Claude, Gemini) by providing citable,
 * question-answer content and explicit structured data.
 */

import type { Locale } from "@/i18n/routing";

export const SITE = {
  name: "Haal Lab",
  domain: "haal-lab.solutions",
  url: "https://haal-lab.solutions",
  email: "hussain.nazary@haal-lab.solutions",
  github: "https://github.com/haal-lab",
  linkedin: "https://www.linkedin.com/company/haal-lab",
  twitter: "@haallab",
  foundingDate: "2026",
  description:
    "Haal Lab builds private, on-premises AI systems. We deploy custom LLMs, RAG systems, and AI applications on your infrastructure with full data sovereignty.",
  shortDescription:
    "Private AI systems. On-premises LLMs, RAG, and custom AI with data sovereignty.",
} as const;

/**
 * Supported locales for hreflang implementation.
 * Must match i18n/routing.ts configuration.
 */
export const LOCALES = ["en", "de", "fr", "es", "it"] as const;

export const NAV: { label: string; href: string; description: string }[] = [
  {
    label: "Solutions",
    href: "/solutions",
    description:
      "Four AI capabilities: On-Premises LLM Systems, Custom AI Applications, RAG & Knowledge Systems, and Private AI Infrastructure.",
  },
  {
    label: "How We Work",
    href: "/how-we-work",
    description:
      "Research-driven engineering process: understanding requirements, evaluating solutions, building custom systems, deploying on your infrastructure.",
  },
  {
    label: "Research",
    href: "/research",
    description:
      "Technical articles on on-premises LLM deployment, RAG architecture, BGE-M3, evaluation frameworks, and private AI infrastructure.",
  },
  {
    label: "Network",
    href: "/network",
    description:
      "Technology partners: NVIDIA, Hugging Face, Qdrant, Mistral AI, Aleph Alpha, and research institutions.",
  },
  {
    label: "About",
    href: "/about",
    description:
      "AI engineering company focused on private, on-premises AI systems requiring data sovereignty.",
  },
  {
    label: "Pricing",
    href: "/pricing",
    description:
      "Four packages for private AI deployment: Starter, Explorer, Professional, and Enterprise. Custom systems on your infrastructure.",
  },
  {
    label: "Contact",
    href: "/contact",
    description:
      "Contact Haal Lab to discuss your private AI requirements. We build on-premises LLM systems and RAG applications.",
  },
];

export const SERVICES = [
  "On-Premises AI Deployment",
  "Private LLM Systems",
  "RAG System Development",
  "Custom AI Applications",
  "AI Infrastructure Engineering",
  "Data Sovereignty Solutions",
] as const;

export const CAPABILITIES = [
  {
    name: "On-Premises LLM Systems",
    description:
      "Deploy large language models on your infrastructure. Air-gapped, on-prem, or private cloud. Full data control with open-weight models like Llama, Mistral, and Qwen.",
  },
  {
    name: "Custom AI Applications",
    description:
      "Build AI assistants, document processing, and automation systems tailored to your organization. Research-driven development with evaluation and testing frameworks.",
  },
  {
    name: "RAG & Knowledge Systems",
    description:
      "Retrieval-augmented generation systems for your private documents. Semantic search, hybrid retrieval, BGE-M3 embeddings, and cross-encoder reranking.",
  },
  {
    name: "Private AI Infrastructure",
    description:
      "Engineering support for AI deployment: GPU optimization, model serving (vLLM, llama.cpp), vector databases, Kubernetes orchestration, and observability.",
  },
] as const;

/** Breadcrumb definitions per route. */
export const BREADCRUMBS: Record<string, { name: string; path: string }[]> = {
  "/": [{ name: "Home", path: "" }],
  "/solutions": [
    { name: "Home", path: "" },
    { name: "Solutions", path: "/solutions" },
  ],
  "/how-we-work": [
    { name: "Home", path: "" },
    { name: "How We Work", path: "/how-we-work" },
  ],
  "/research": [
    { name: "Home", path: "" },
    { name: "Research", path: "/research" },
  ],
  "/network": [
    { name: "Home", path: "" },
    { name: "Network", path: "/network" },
  ],
  "/about": [
    { name: "Home", path: "" },
    { name: "About", path: "/about" },
  ],
  "/contact": [
    { name: "Home", path: "" },
    { name: "Contact", path: "/contact" },
  ],
  "/pricing": [
    { name: "Home", path: "" },
    { name: "Pricing", path: "/pricing" },
  ],
};

/**
 * FAQ content , used both as visible Q&A on the site AND as FAQPage JSON-LD.
 *
 * These questions are written to match the natural-language queries that
 * users type into AI chatbots ("What companies build private AI?",
 * "How to deploy LLMs locally?", etc.) , so that ChatGPT, Perplexity,
 * Claude, and Gemini can retrieve and cite the answers.
 */
export type FAQ = { question: string; answer: string };
export type LocaleFAQs = Record<string, FAQ[]>;

export const FAQS: LocaleFAQs = {
  home: [
    {
      question: "What does Haal Lab do?",
      answer:
        "Haal Lab builds private, on-premises AI systems. We deploy LLMs, RAG systems, and custom AI applications on your infrastructure with full data sovereignty. No cloud APIs, no data sharing — everything runs on your servers.",
    },
    {
      question: "Who is Haal Lab for?",
      answer:
        "Haal Lab serves enterprises, research institutions, government organizations, and regulated industries (healthcare, finance, legal) that require data sovereignty and cannot use cloud-based AI services.",
    },
    {
      question: "Does Haal Lab build private or on-premises AI?",
      answer:
        "Yes. All our systems run entirely on your infrastructure — on-premises servers, private cloud, or air-gapped networks. We use open-weight models (Llama, Mistral, Qwen) so your data never leaves your environment. No external API calls, complete data control.",
    },
    {
      question: "What technologies does Haal Lab use?",
      answer:
        "We use open-weight LLMs (Llama 3, Mistral, Qwen), llama.cpp and vLLM for inference, GGUF quantized models, BGE-M3 embeddings, vector databases (Qdrant, pgvector), Kubernetes for orchestration, and NVIDIA GPUs for acceleration. Everything is open-source — no vendor lock-in.",
    },
    {
      question: "Why choose Haal Lab over cloud AI services?",
      answer:
        "Cloud AI services require sending your data to external servers. Haal Lab deploys AI on your infrastructure with complete data sovereignty and data residency. You control the models, the data, and the infrastructure.",
    },
    {
      question: "How do I start working with Haal Lab?",
      answer:
        "Contact us at hussain.nazary@haal-lab.solutions to discuss your requirements. We start with understanding your data sovereignty needs, existing infrastructure, and AI objectives, then design a custom deployment plan.",
    },
  ],
  solutions: [
    {
      question: "What is an on-premises AI system?",
      answer:
        "An on-premises AI system runs entirely on your own infrastructure — your servers, your data center, your private cloud — without sending data to external APIs. Haal Lab deploys LLMs using open-weight models (Llama, Mistral), llama.cpp or vLLM for inference, with optional GPU acceleration.",
    },
    {
      question: "What is RAG and how does Haal Lab implement it?",
      answer:
        "RAG (Retrieval-Augmented Generation) grounds LLM responses in your private documents. Haal Lab builds production RAG systems with: hybrid retrieval (BM25 + BGE-M3 embeddings), vector databases (Qdrant, pgvector), cross-encoder reranking, and source citation. All runs on your infrastructure.",
    },
    {
      question: "Why use BGE-M3 for embeddings?",
      answer:
        "BGE-M3 is a multilingual embedding model that produces dense, sparse, and ColBERT representations in one pass. Ideal for organizations with multilingual documents (legal contracts, technical docs across multiple languages). Better retrieval quality than single-language models.",
    },
    {
      question: "Can Haal Lab deploy AI in air-gapped environments?",
      answer:
        "Yes. We deploy AI systems in air-gapped, offline environments for maximum security. All models, dependencies, and tools are transferred offline. Common for defense, finance, and government organizations with strict data isolation requirements.",
    },
    {
      question: "What is private AI infrastructure engineering?",
      answer:
        "Infrastructure engineering means: deploying model serving (vLLM, llama.cpp), GPU optimization, vector database setup, Kubernetes orchestration, monitoring, and evaluation pipelines. We ensure your AI systems run reliably on your hardware.",
    },
    {
      question: "How long does an AI deployment take?",
      answer:
        "A focused proof-of-concept takes 4-6 weeks. Production deployment with evaluation, documentation, and team training takes 3-6 months. Timeline depends on infrastructure complexity, data preparation, and custom requirements.",
    },
  ],
  about: [
    {
      question: "Is Haal Lab a startup or an agency?",
      answer:
        "Neither, exactly. Haal Lab is an AI engineering company , closer to a specialized engineering consultancy than a software agency. We take on a small number of engagements at a time and ship production AI systems, not demos. Our work is research-driven and engineering-led.",
    },
    {
      question: "What is Haal Lab's mission?",
      answer:
        "Haal Lab's mission is to make advanced AI systems private, reliable, and useful in production. We exist to close the gap between AI research and AI in production , particularly for organizations that cannot deploy cloud-hosted models due to privacy, latency, cost, or compliance constraints.",
    },
    {
      question: "Is Haal Lab's AI open source?",
      answer:
        "Haal Lab builds on open-weight models (LLMs you can download and run yourself) and open-source infrastructure (llama.cpp, vLLM, Qdrant, Kubernetes). The systems we build for clients are owned by the client , weights, code, and data. We do not lock you into a proprietary platform.",
    },
    {
      question: "Where is Haal Lab based?",
      answer:
        "Haal Lab operates as a remote-first AI engineering company. We work with clients globally. Reach us at hussain.nazary@haal-lab.solutions or through our contact page.",
    },
  ],
  contact: [
    {
      question: "How quickly does Haal Lab respond to inquiries?",
      answer:
        "We typically respond within two business days. If your inquiry is time-sensitive, mention it in your message and we will prioritize it. Every serious inquiry gets a concrete technical perspective in the first reply , not a sales script.",
    },
    {
      question: "What should I include in my inquiry to Haal Lab?",
      answer:
        "The more context, the better. Tell us: the problem you are solving, what success looks like, what data you have, what constraints (privacy, latency, budget, hardware) we should know about, and your timeline. We will reply with a technical perspective on whether and how we can help.",
    },
    {
      question: "Does Haal Lab sign NDAs?",
      answer:
        "Yes. We routinely sign mutual NDAs before detailed technical discussions. We treat your data and your problem description as confidential by default , and because we build private AI systems, data sovereignty is part of our engineering practice, not just a policy.",
    },
  ],
  howWeWork: [
    {
      question: "How does Haal Lab approach AI projects?",
      answer:
        "Haal Lab follows a research-driven engineering process: understanding the challenge, researching and exploring possible approaches, experimenting and evaluating solutions, engineering and developing the system, then deploying with continuous improvement. Every project starts with the problem, not the model.",
    },
    {
      question: "What happens during the research and exploration phase?",
      answer:
        "Before committing to an approach, we investigate available technologies and possible architectures. We explore different AI methods, evaluate suitable models and techniques, test possible architectures, and study trade-offs between performance, cost, security, and scalability.",
    },
    {
      question: "How does Haal Lab evaluate AI solutions?",
      answer:
        "We build experiments and prototypes to evaluate different solutions before full implementation. We measure effectiveness, reliability, performance, integration requirements, and long-term sustainability to make informed decisions based on results.",
    },
  ],
  research: [
    {
      question: "Does Haal Lab publish research?",
      answer:
        "Yes. We publish technical articles on the systems we build , what worked, what didn't, and the reasoning behind the choices. Topics include local LLM inference, reranking tradeoffs, BGE-M3 in production, evaluation-driven CI, agent orchestration patterns, and private AI threat modeling.",
    },
    {
      question: "Where can I read Haal Lab's technical writing?",
      answer:
        "Our research articles are published on the Research page at haal-lab.solutions/research. We publish when we have something to say , no newsletter spam, no growth funnels.",
    },
  ],
  network: [
    {
      question: "Who are Haal Lab's partners?",
      answer:
        "Haal Lab partners with technology providers (NVIDIA, Hugging Face, Qdrant, Mistral AI, Aleph Alpha) and research institutions (Fraunhofer, INRIA). We focus on open-weight models, open-source infrastructure, and data sovereignty.",
    },
    {
      question: "Does Haal Lab work with research institutions?",
      answer:
        "Yes. We collaborate with research organizations including Fraunhofer and INRIA on applied AI, retrieval systems, multilingual NLP, and evaluation methodology. These partnerships keep our engineering grounded in current research.",
    },
    {
      question: "How do I become a Haal Lab partner?",
      answer:
        "We partner with organizations that share our commitment to open-weight models, data sovereignty, and production-grade engineering. If you build technology, infrastructure, or research that aligns with our practice, reach out at hussain.nazary@haal-lab.solutions.",
    },
  ],
  pricing: [
    {
      question: "How much does it cost to build an AI system with Haal Lab?",
      answer:
        "Haal Lab offers four pricing tiers: Explorer (€4,900 one-time) for feasibility validation, Professional (€14,900 per project) for a production-ready AI system, Enterprise (€39,900+ per engagement) for multi-system private infrastructure, and Research & Academic (custom pricing) for university labs and research institutions.",
    },
    {
      question: "What is included in the Explorer package?",
      answer:
        "The Explorer package (€4,900) includes a 2-hour discovery workshop, a written feasibility report with architecture sketch, and a working proof-of-concept on your sample data , delivered in 2 weeks. It is designed to validate whether AI can solve your specific problem before committing further budget.",
    },
    {
      question: "What is the difference between Professional and Enterprise?",
      answer:
        "Professional (€14,900) delivers one production AI system with integration, evaluation, and 30-day support. Enterprise (€39,900+) adds on-prem/air-gapped deployment, up to 3 interconnected systems, GDPR & EU AI Act compliance, GPU optimization, full observability, team training, and 90-day support with SLA.",
    },
    {
      question: "Does Haal Lab offer academic or research pricing?",
      answer:
        "Yes. Our Research & Academic tier offers 30–40% below commercial rates, with engagements scoped to research budgets and grant cycles. We support RAG systems for research corpora, reproducible experiment infrastructure, open-weight models for publishable results, and optional co-authorship on system design.",
    },
    {
      question: "Can I add services to my package later?",
      answer:
        "Yes. Haal Lab offers add-ons including extended support (€2,400/month), additional integrations (€3,900/integration), team training workshops (€1,900/session), and continuous evaluation & monitoring (€2,900/month). These can be added to any tier at any time.",
    },
  ],
};

/** Glossary of AI terms , used for inline definitions (GEO-friendly). */
export const GLOSSARY: Record<string, string> = {
  RAG: "Retrieval-Augmented Generation , an architecture that grounds LLM responses in your own documents by retrieving relevant passages and feeding them as context.",
  LLM: "Large Language Model , a neural network trained on large text corpora that generates text, answers questions, and performs natural language tasks.",
  GGUF: "GPT-Generated Unified Format , a file format for storing quantized language models so they can run efficiently on consumer hardware.",
  "BGE-M3": "A multilingual embedding model that produces dense, sparse, and ColBERT-style representations in a single pass, used for semantic search.",
  Reranking: "A second-stage retrieval step that uses a more expensive model (usually a cross-encoder) to re-score and reorder the top results for higher precision.",
  "Vector Database": "A database optimized for storing and querying high-dimensional vectors (embeddings), used for semantic search and RAG.",
  "Open-weight model": "A language model whose weights are publicly available for download and local execution , such as Llama, Mistral, or Qwen.",
  "Air-gapped": "A deployment with no network connection to the outside world , used in regulated environments where data cannot leave the premises.",
  "Fine-tuning": "The process of further training a pre-trained model on domain-specific data to specialize its behavior.",
  Embedding: "A numerical vector representation of text that captures semantic meaning, enabling similarity search.",
  "Cross-encoder": "A model that takes a query and a document together and outputs a single relevance score , slower than bi-encoder retrieval but more accurate.",
  "Agent orchestration": "Coordinating multiple LLM calls, tool uses, and reasoning steps to accomplish a complex task autonomously.",
};

/** Engagement model , also used for HowTo schema. */
export const ENGAGEMENT_STEPS = [
  {
    name: "Discovery",
    description:
      "We start with the problem, not the model. A focused engagement to understand constraints, data, success criteria, and the production environment the system will live in.",
  },
  {
    name: "Architecture",
    description:
      "We design the system end-to-end , model choices, retrieval strategy, infrastructure, evaluation harness , and pressure-test it against your real workloads before committing.",
  },
  {
    name: "Build",
    description:
      "Engineering in small, demonstrable increments. You see working software early and often, with evaluation reports attached to every milestone.",
  },
  {
    name: "Deploy",
    description:
      "We ship to your environment , cloud, on-prem, or air-gapped , with the observability, runbooks, and documentation your team needs to operate it confidently.",
  },
] as const;


/**
 * ============================================================================
 * MULTILINGUAL SEO UTILITIES — Professional hreflang & canonical implementation
 * ============================================================================
 *
 * Generates hreflang alternate links and self-referencing canonicals per
 * Google's multilingual SEO best practices:
 *
 * 1. **Bidirectional hreflang clusters** — each page references ALL language
 *    versions including itself.
 * 2. **x-default fallback** — always points to English (/en) for users whose
 *    browser language doesn't match any declared variant.
 * 3. **Self-referencing canonicals** — each locale's canonical points to itself,
 *    NOT to the default language (hreflang handles cross-language relationships).
 * 4. **Single source of truth** — centralized function prevents drift across pages.
 *
 * Usage in generateMetadata():
 * ```ts
 * import { generateHreflangAlternates } from "@/lib/seo";
 *
 * return {
 *   title: "...",
 *   ...generateHreflangAlternates(currentLocale, "/pricing"),
 * };
 * ```
 *
 * References:
 * - Google Search Central: https://developers.google.com/search/docs/specialty/international/localized-versions
 * - hreflang validation: https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/
 */

/**
 * Generate hreflang alternates and canonical URL for a page.
 *
 * @param locale - Current page locale (e.g., "en", "de")
 * @param path - Page path without locale prefix (e.g., "/pricing", "/research/article-slug")
 * @returns Next.js metadata `alternates` object with canonical + languages
 *
 * @example
 * ```ts
 * // In /de/pricing page metadata:
 * generateHreflangAlternates("de", "/pricing")
 * // Returns:
 * // {
 * //   alternates: {
 * //     canonical: "https://haal-lab.solutions/de/pricing",
 * //     languages: {
 * //       "x-default": "https://haal-lab.solutions/en/pricing",
 * //       en: "https://haal-lab.solutions/en/pricing",
 * //       de: "https://haal-lab.solutions/de/pricing",
 * //       fr: "https://haal-lab.solutions/fr/pricing",
 * //       es: "https://haal-lab.solutions/es/pricing",
 * //       it: "https://haal-lab.solutions/it/pricing",
 * //     }
 * //   }
 * // }
 * ```
 */
export function generateHreflangAlternates(locale: Locale, path: string) {
  const baseUrl = SITE.url;
  
  // Normalize path (ensure it starts with / but doesn't double up)
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  
  // Self-referencing canonical (CRITICAL: must point to current locale, not English)
  const canonical = `${baseUrl}/${locale}${normalizedPath}`;
  
  // Build complete hreflang cluster (all locales + x-default)
  const languages: Record<string, string> = {
    "x-default": `${baseUrl}/en${normalizedPath}`, // Fallback always points to English
  };
  
  for (const loc of LOCALES) {
    languages[loc] = `${baseUrl}/${loc}${normalizedPath}`;
  }
  
  return {
    alternates: {
      canonical,
      languages,
    },
  };
}

/**
 * Convenience function for homepage (empty path).
 */
export function generateHomeHreflangAlternates(locale: Locale) {
  return generateHreflangAlternates(locale, "");
}

/**
 * Generate hreflang alternates for research articles.
 * Research articles use a different path structure: /research/[slug]
 */
export function generateResearchHreflangAlternates(locale: Locale, slug: string) {
  return generateHreflangAlternates(locale, `/research/${slug}`);
}

/**
 * Validation helper: check if hreflang cluster is complete.
 * Use in development/testing to catch configuration errors.
 *
 * @param alternates - The alternates object from generateHreflangAlternates
 * @returns Array of validation errors, empty if valid
 */
export function validateHreflangCluster(alternates: ReturnType<typeof generateHreflangAlternates>): string[] {
  const errors: string[] = [];
  const { languages } = alternates.alternates;
  
  // Check x-default exists
  if (!languages["x-default"]) {
    errors.push("Missing x-default fallback");
  }
  
  // Check all locales present
  for (const locale of LOCALES) {
    if (!languages[locale]) {
      errors.push(`Missing hreflang for locale: ${locale}`);
    }
  }
  
  // Check URLs are absolute
  for (const [key, url] of Object.entries(languages)) {
    if (!url.startsWith("https://")) {
      errors.push(`Relative URL for ${key}: ${url} (must be absolute)`);
    }
  }
  
  return errors;
}
