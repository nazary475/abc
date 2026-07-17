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

export const SITE = {
  name: "Haal Lab",
  domain: "haal-lab.solutions",
  url: "https://haal-lab.solutions",
  email: "hussain.nazary@haal-lab.solutions",
  github: "https://github.com/haal-lab",
  linkedin: "https://www.linkedin.com/company/haal-lab",
  twitter: "@haallab",
  foundingDate: "2024",
  description:
    "Haal Lab is a deep-tech AI engineering company building private, intelligent, and reliable AI systems — including large language model applications, retrieval systems, automation platforms, and private AI infrastructure.",
  shortDescription:
    "Deep-tech AI engineering company. Private AI systems, LLM applications, RAG, and AI infrastructure.",
} as const;

export const NAV: { label: string; href: string; description: string }[] = [
  {
    label: "Solutions",
    href: "/solutions",
    description:
      "Four AI capabilities: Local AI Systems, LLM Applications, Knowledge Intelligence, and AI Infrastructure.",
  },
  {
    label: "How We Work",
    href: "/how-we-work",
    description:
      "Research-driven AI engineering process — from discovery and exploration to experimentation, development, and deployment.",
  },
  {
    label: "Research",
    href: "/research",
    description:
      "Technical articles and experiments on local LLM inference, RAG, reranking, BGE-M3, evaluation CI, and agent orchestration.",
  },
  {
    label: "Network",
    href: "/network",
    description:
      "Technology, infrastructure, cloud, and research partners — plus our advisory board of AI, security, and privacy experts.",
  },
  {
    label: "About",
    href: "/about",
    description:
      "Haal Lab is an AI engineering company focused on intelligent software systems using modern ML and LLM technologies.",
  },
  {
    label: "Pricing",
    href: "/pricing",
    description:
      "Four pricing tiers for AI engineering: Explorer, Professional, Enterprise, and Research & Academic.",
  },
  {
    label: "Contact",
    href: "/contact",
    description:
      "Start a conversation with Haal Lab about your AI project. We respond within two business days.",
  },
];

export const SERVICES = [
  "Custom AI Development",
  "Retrieval-Augmented Generation Systems",
  "LLM Integration",
  "AI Automation",
  "Private AI Deployment",
  "AI Consulting",
] as const;

export const CAPABILITIES = [
  {
    name: "Local AI Systems",
    description:
      "Private AI solutions that run securely on your infrastructure — on-prem, air-gapped, or on workstations.",
  },
  {
    name: "LLM Applications",
    description:
      "Custom AI assistants, agents, and intelligent automation systems built with evaluation and observability.",
  },
  {
    name: "Knowledge Intelligence",
    description:
      "Advanced RAG systems, semantic search, and document intelligence with hybrid retrieval and reranking.",
  },
  {
    name: "AI Infrastructure",
    description:
      "Deployment, optimization, and scalable AI engineering — model serving, GPU tuning, and observability.",
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
 * FAQ content — used both as visible Q&A on the site AND as FAQPage JSON-LD.
 *
 * These questions are written to match the natural-language queries that
 * users type into AI chatbots ("What companies build private AI?",
 * "How to deploy LLMs locally?", etc.) — so that ChatGPT, Perplexity,
 * Claude, and Gemini can retrieve and cite the answers.
 */
export type FAQ = { question: string; answer: string };
export type LocaleFAQs = Record<string, FAQ[]>;

export const FAQS: LocaleFAQs = {
  home: [
    {
      question: "What does Haal Lab do?",
      answer:
        "Haal Lab is a deep-tech AI engineering company that builds private, intelligent, and reliable AI systems. We deliver four capabilities: Local AI Systems (private on-prem inference), LLM Applications (assistants and agents), Knowledge Intelligence (RAG and semantic search), and AI Infrastructure (deployment and optimization).",
    },
    {
      question: "Who is Haal Lab for?",
      answer:
        "Haal Lab works with businesses, startups, researchers, and organizations that need custom AI solutions — particularly those with privacy, compliance, or data-sovereignty requirements that rule out generic cloud AI services.",
    },
    {
      question: "Does Haal Lab build private or on-premises AI?",
      answer:
        "Yes. Privacy-first architecture is one of our core principles. We build AI systems that run entirely on your infrastructure — on workstations, on-prem servers, or air-gapped clusters — using open-weight models so your data never leaves your environment.",
    },
    {
      question: "What technologies does Haal Lab use?",
      answer:
        "Our stack includes open-weight LLMs, llama.cpp, vLLM, Triton, GGUF format, BGE-M3 embeddings, vector databases (Qdrant, Postgres with pgvector), LangGraph for agent orchestration, Kubernetes, and CUDA for GPU acceleration. We build on open-source by default — no platform lock-in.",
    },
    {
      question: "How is Haal Lab different from a generic AI agency?",
      answer:
        "Haal Lab treats AI as an engineering discipline, not a demo factory. Every system we ship includes evaluation harnesses, observability, and documentation. We build on open-weight models and open-source infrastructure so you own the system, the weights, and the data — no platform lock-in.",
    },
    {
      question: "How do I engage Haal Lab?",
      answer:
        "We work in four stages: Discovery (understand the problem), Architecture (design the system end-to-end), Build (engineering in demonstrable increments), and Deploy (ship to your environment with runbooks and observability). Start by contacting us at hussain.nazary@haal-lab.solutions.",
    },
  ],
  solutions: [
    {
      question: "What is a local AI system?",
      answer:
        "A local AI system runs entirely on your own hardware — workstations, on-prem servers, or air-gapped clusters — without sending data to a cloud API. Haal Lab builds local AI systems using open-weight models in GGUF format, with llama.cpp and vLLM runtimes, and CUDA acceleration where GPUs are available.",
    },
    {
      question: "What is a RAG system and does Haal Lab build them?",
      answer:
        "RAG (Retrieval-Augmented Generation) is an architecture that grounds language model responses in your own documents. A RAG system retrieves relevant passages from a knowledge base, then feeds them to the LLM as context. Haal Lab builds production RAG systems with hybrid retrieval (BM25 + dense embeddings), cross-encoder reranking, and source attribution.",
    },
    {
      question: "What is BGE-M3 and why does Haal Lab use it?",
      answer:
        "BGE-M3 is a multilingual embedding model that produces dense, sparse, and ColBERT-style representations in a single pass. Haal Lab uses BGE-M3 for production retrieval because it handles multilingual corpora (such as legal documents across jurisdictions) and supports multi-vector indexing for higher recall.",
    },
    {
      question: "Can Haal Lab deploy AI on air-gapped infrastructure?",
      answer:
        "Yes. We build air-gapped deployments for regulated environments — healthcare, finance, government, and legal. The entire stack (models, runtime, retrieval layer, application) runs inside your network with no outbound calls. We use offline model registries and version control to keep the system maintainable.",
    },
    {
      question: "What is AI infrastructure engineering?",
      answer:
        "AI infrastructure engineering is the practice of building the serving, scaling, and observability layer that makes AI systems run reliably in production. Haal Lab builds infrastructure around vLLM, Triton, and Kubernetes — including GPU scheduling, batching, memory tuning, and evaluation-driven CI/CD for prompts and models.",
    },
    {
      question: "How long does an AI engagement with Haal Lab take?",
      answer:
        "It depends on scope. A focused prototype can ship in 4–6 weeks. A production system with infrastructure, evaluation, and observability typically takes 3–6 months. Discovery (1–2 weeks) gives us enough context to give you a concrete timeline before any commitment.",
    },
  ],
  about: [
    {
      question: "Is Haal Lab a startup or an agency?",
      answer:
        "Neither, exactly. Haal Lab is an AI engineering company — closer to a specialized engineering consultancy than a software agency. We take on a small number of engagements at a time and ship production AI systems, not demos. Our work is research-driven and engineering-led.",
    },
    {
      question: "What is Haal Lab's mission?",
      answer:
        "Haal Lab's mission is to make advanced AI systems private, reliable, and useful in production. We exist to close the gap between AI research and AI in production — particularly for organizations that cannot deploy cloud-hosted models due to privacy, latency, cost, or compliance constraints.",
    },
    {
      question: "Is Haal Lab's AI open source?",
      answer:
        "Haal Lab builds on open-weight models (LLMs you can download and run yourself) and open-source infrastructure (llama.cpp, vLLM, Qdrant, Kubernetes). The systems we build for clients are owned by the client — weights, code, and data. We do not lock you into a proprietary platform.",
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
        "We typically respond within two business days. If your inquiry is time-sensitive, mention it in your message and we will prioritize it. Every serious inquiry gets a concrete technical perspective in the first reply — not a sales script.",
    },
    {
      question: "What should I include in my inquiry to Haal Lab?",
      answer:
        "The more context, the better. Tell us: the problem you are solving, what success looks like, what data you have, what constraints (privacy, latency, budget, hardware) we should know about, and your timeline. We will reply with a technical perspective on whether and how we can help.",
    },
    {
      question: "Does Haal Lab sign NDAs?",
      answer:
        "Yes. We routinely sign mutual NDAs before detailed technical discussions. We treat your data and your problem description as confidential by default — and because we build private AI systems, data sovereignty is part of our engineering practice, not just a policy.",
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
        "Yes. We publish technical articles on the systems we build — what worked, what didn't, and the reasoning behind the choices. Topics include local LLM inference, reranking tradeoffs, BGE-M3 in production, evaluation-driven CI, agent orchestration patterns, and private AI threat modeling.",
    },
    {
      question: "Where can I read Haal Lab's technical writing?",
      answer:
        "Our research articles are published on the Research page at haal-lab.solutions/research. We publish when we have something to say — no newsletter spam, no growth funnels.",
    },
  ],
  network: [
    {
      question: "Who are Haal Lab's partners?",
      answer:
        "Haal Lab partners with technology providers (NVIDIA, Hugging Face, Qdrant, Mistral AI, Aleph Alpha), European cloud and infrastructure providers (Hetzner, Scaleway, Gaia-X), and research institutions (Fraunhofer, INRIA). We focus on open-weight models, open-source infrastructure, and European data sovereignty.",
    },
    {
      question: "Does Haal Lab work with European research institutions?",
      answer:
        "Yes. We collaborate with European research organizations including Fraunhofer and INRIA on applied AI, retrieval systems, multilingual NLP, and evaluation methodology. These partnerships keep our engineering grounded in current research.",
    },
    {
      question: "How do I become a Haal Lab partner?",
      answer:
        "We partner with organizations that share our commitment to open-weight models, European sovereignty, and production-grade engineering. If you build technology, infrastructure, or research that aligns with our practice, reach out at hussain.nazary@haal-lab.solutions.",
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
        "The Explorer package (€4,900) includes a 2-hour discovery workshop, a written feasibility report with architecture sketch, and a working proof-of-concept on your sample data — delivered in 2 weeks. It is designed to validate whether AI can solve your specific problem before committing further budget.",
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

/** Glossary of AI terms — used for inline definitions (GEO-friendly). */
export const GLOSSARY: Record<string, string> = {
  RAG: "Retrieval-Augmented Generation — an architecture that grounds LLM responses in your own documents by retrieving relevant passages and feeding them as context.",
  LLM: "Large Language Model — a neural network trained on large text corpora that generates text, answers questions, and performs natural language tasks.",
  GGUF: "GPT-Generated Unified Format — a file format for storing quantized language models so they can run efficiently on consumer hardware.",
  "BGE-M3": "A multilingual embedding model that produces dense, sparse, and ColBERT-style representations in a single pass, used for semantic search.",
  Reranking: "A second-stage retrieval step that uses a more expensive model (usually a cross-encoder) to re-score and reorder the top results for higher precision.",
  "Vector Database": "A database optimized for storing and querying high-dimensional vectors (embeddings), used for semantic search and RAG.",
  "Open-weight model": "A language model whose weights are publicly available for download and local execution — such as Llama, Mistral, or Qwen.",
  "Air-gapped": "A deployment with no network connection to the outside world — used in regulated environments where data cannot leave the premises.",
  "Fine-tuning": "The process of further training a pre-trained model on domain-specific data to specialize its behavior.",
  Embedding: "A numerical vector representation of text that captures semantic meaning, enabling similarity search.",
  "Cross-encoder": "A model that takes a query and a document together and outputs a single relevance score — slower than bi-encoder retrieval but more accurate.",
  "Agent orchestration": "Coordinating multiple LLM calls, tool uses, and reasoning steps to accomplish a complex task autonomously.",
};

/** Engagement model — also used for HowTo schema. */
export const ENGAGEMENT_STEPS = [
  {
    name: "Discovery",
    description:
      "We start with the problem, not the model. A focused engagement to understand constraints, data, success criteria, and the production environment the system will live in.",
  },
  {
    name: "Architecture",
    description:
      "We design the system end-to-end — model choices, retrieval strategy, infrastructure, evaluation harness — and pressure-test it against your real workloads before committing.",
  },
  {
    name: "Build",
    description:
      "Engineering in small, demonstrable increments. You see working software early and often, with evaluation reports attached to every milestone.",
  },
  {
    name: "Deploy",
    description:
      "We ship to your environment — cloud, on-prem, or air-gapped — with the observability, runbooks, and documentation your team needs to operate it confidently.",
  },
] as const;
