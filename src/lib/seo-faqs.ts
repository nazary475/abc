/**
 * Multilingual FAQ content for all pages.
 * Used for both visible Q&A sections and FAQPage JSON-LD schema.
 */

export type FAQ = { question: string; answer: string };
export type LocaleFAQs = Record<string, FAQ[]>;

/** English FAQs */
export const FAQS_EN: Record<string, FAQ[]> = {
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
  projects: [
    {
      question: "What is GGUF Loader?",
      answer:
        "GGUF Loader is an offline AI platform built by Haal Lab that enables users to run large language models locally with privacy and control. It uses the GGUF model format, CUDA acceleration via llama.cpp, and includes a retrieval layer for grounded answers — all without sending data to a cloud API.",
    },
    {
      question: "What is the Legal Intelligence System?",
      answer:
        "The Legal Intelligence System is a semantic retrieval platform built by Haal Lab for complex legal document analysis. It uses BGE-M3 embeddings, a vector database, cross-encoder reranking, and OCR to ingest heterogeneous legal corpora (contracts, statutes, case law) and return the right clause with citation.",
    },
    {
      question: "Can I see Haal Lab's code or projects?",
      answer:
        "Some of our work is open source and available on GitHub at github.com/haal-lab. Client engagements are proprietary and owned by the client. The case studies on our Projects page describe the problem, approach, and architecture of representative work.",
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

/** German FAQs */
export const FAQS_DE: Record<string, FAQ[]> = {
  home: [
    {
      question: "Was macht Haal Lab?",
      answer:
        "Haal Lab ist ein Deep-Tech-KI-Engineering-Unternehmen, das private, intelligente und zuverlässige KI-Systeme entwickelt. Wir bieten vier Kompetenzbereiche: Lokale KI-Systeme (private On-Prem-Inferenz), LLM-Anwendungen (Assistenten und Agenten), Wissensintelligenz (RAG und semantische Suche) und KI-Infrastruktur (Bereitstellung und Optimierung).",
    },
    {
      question: "Für wen ist Haal Lab geeignet?",
      answer:
        "Haal Lab arbeitet mit Unternehmen, Startups, Forschern und Organisationen zusammen, die maßgeschneiderte KI-Lösungen benötigen – insbesondere solche mit Datenschutz-, Compliance- oder Datensouveränitätsanforderungen, die generische Cloud-KI-Dienste ausschließen.",
    },
    {
      question: "Erstellt Haal Lab private oder On-Premises-KI?",
      answer:
        "Ja. Privacy-First-Architektur ist eines unserer Kernprinzipien. Wir entwickeln KI-Systeme, die vollständig auf Ihrer Infrastruktur laufen – auf Workstations, On-Prem-Servern oder Air-Gapped-Clustern – unter Verwendung von Open-Weight-Modellen, sodass Ihre Daten niemals Ihre Umgebung verlassen.",
    },
    {
      question: "Welche Technologien verwendet Haal Lab?",
      answer:
        "Unser Stack umfasst Open-Weight-LLMs, llama.cpp, vLLM, Triton, GGUF-Format, BGE-M3-Embeddings, Vektordatenbanken (Qdrant, Postgres mit pgvector), LangGraph für Agenten-Orchestrierung, Kubernetes und CUDA für GPU-Beschleunigung. Wir setzen standardmäßig auf Open-Source – kein Platform-Lock-in.",
    },
    {
      question: "Wie unterscheidet sich Haal Lab von einer generischen KI-Agentur?",
      answer:
        "Haal Lab behandelt KI als Ingenieurdisziplin, nicht als Demo-Fabrik. Jedes System, das wir ausliefern, umfasst Evaluierungs-Harnesses, Observability und Dokumentation. Wir bauen auf Open-Weight-Modellen und Open-Source-Infrastruktur auf, sodass Sie das System, die Weights und die Daten besitzen – kein Platform-Lock-in.",
    },
    {
      question: "Wie engagiere ich Haal Lab?",
      answer:
        "Wir arbeiten in vier Phasen: Discovery (Problem verstehen), Architecture (System End-to-End entwerfen), Build (Engineering in nachweisbaren Schritten) und Deploy (in Ihre Umgebung mit Runbooks und Observability ausliefern). Kontaktieren Sie uns unter hussain.nazary@haal-lab.solutions.",
    },
  ],
  solutions: [],
  about: [],
  contact: [],
  projects: [],
  research: [],
  network: [],
  pricing: [],
};

/** French FAQs */
export const FAQS_FR: Record<string, FAQ[]> = {
  home: [
    {
      question: "Que fait Haal Lab ?",
      answer:
        "Haal Lab est une entreprise d'ingénierie IA deep-tech qui construit des systèmes d'IA privés, intelligents et fiables. Nous offrons quatre capacités : Systèmes d'IA locaux (inférence privée sur site), Applications LLM (assistants et agents), Intelligence de la connaissance (RAG et recherche sémantique) et Infrastructure IA (déploiement et optimisation).",
    },
    {
      question: "À qui s'adresse Haal Lab ?",
      answer:
        "Haal Lab travaille avec des entreprises, des startups, des chercheurs et des organisations qui ont besoin de solutions IA personnalisées – en particulier celles ayant des exigences en matière de confidentialité, de conformité ou de souveraineté des données qui excluent les services IA cloud génériques.",
    },
    {
      question: "Haal Lab construit-il de l'IA privée ou sur site ?",
      answer:
        "Oui. L'architecture privacy-first est l'un de nos principes fondamentaux. Nous construisons des systèmes d'IA qui s'exécutent entièrement sur votre infrastructure – sur des postes de travail, des serveurs sur site ou des clusters isolés – en utilisant des modèles à poids ouverts afin que vos données ne quittent jamais votre environnement.",
    },
    {
      question: "Quelles technologies Haal Lab utilise-t-il ?",
      answer:
        "Notre stack comprend des LLM à poids ouverts, llama.cpp, vLLM, Triton, le format GGUF, les embeddings BGE-M3, des bases de données vectorielles (Qdrant, Postgres avec pgvector), LangGraph pour l'orchestration d'agents, Kubernetes et CUDA pour l'accélération GPU. Nous construisons sur l'open-source par défaut – pas de verrouillage de plateforme.",
    },
    {
      question: "En quoi Haal Lab diffère-t-il d'une agence IA générique ?",
      answer:
        "Haal Lab traite l'IA comme une discipline d'ingénierie, pas comme une usine à démos. Chaque système que nous livrons comprend des harnais d'évaluation, de l'observabilité et de la documentation. Nous construisons sur des modèles à poids ouverts et une infrastructure open-source afin que vous possédiez le système, les poids et les données – pas de verrouillage de plateforme.",
    },
    {
      question: "Comment puis-je engager Haal Lab ?",
      answer:
        "Nous travaillons en quatre étapes : Discovery (comprendre le problème), Architecture (concevoir le système de bout en bout), Build (ingénierie par incréments démontrables) et Deploy (livrer dans votre environnement avec runbooks et observabilité). Contactez-nous à hussain.nazary@haal-lab.solutions.",
    },
  ],
  solutions: [],
  about: [],
  contact: [],
  projects: [],
  research: [],
  network: [],
  pricing: [],
};

/** Spanish FAQs */
export const FAQS_ES: Record<string, FAQ[]> = {
  home: [
    {
      question: "¿Qué hace Haal Lab?",
      answer:
        "Haal Lab es una empresa de ingeniería de IA de alta tecnología que construye sistemas de IA privados, inteligentes y confiables. Ofrecemos cuatro capacidades: Sistemas de IA locales (inferencia privada en las instalaciones), Aplicaciones LLM (asistentes y agentes), Inteligencia de conocimiento (RAG y búsqueda semántica) e Infraestructura de IA (implementación y optimización).",
    },
    {
      question: "¿Para quién es Haal Lab?",
      answer:
        "Haal Lab trabaja con empresas, startups, investigadores y organizaciones que necesitan soluciones de IA personalizadas, especialmente aquellas con requisitos de privacidad, cumplimiento o soberanía de datos que descartan los servicios de IA en la nube genéricos.",
    },
    {
      question: "¿Haal Lab construye IA privada o en las instalaciones?",
      answer:
        "Sí. La arquitectura orientada a la privacidad es uno de nuestros principios fundamentales. Construimos sistemas de IA que se ejecutan completamente en su infraestructura: en estaciones de trabajo, servidores locales o clústeres aislados, utilizando modelos de pesos abiertos para que sus datos nunca salgan de su entorno.",
    },
    {
      question: "¿Qué tecnologías utiliza Haal Lab?",
      answer:
        "Nuestro stack incluye LLM de pesos abiertos, llama.cpp, vLLM, Triton, formato GGUF, embeddings BGE-M3, bases de datos vectoriales (Qdrant, Postgres con pgvector), LangGraph para orquestación de agentes, Kubernetes y CUDA para aceleración GPU. Construimos sobre código abierto por defecto: sin bloqueo de plataforma.",
    },
    {
      question: "¿En qué se diferencia Haal Lab de una agencia de IA genérica?",
      answer:
        "Haal Lab trata la IA como una disciplina de ingeniería, no como una fábrica de demos. Cada sistema que entregamos incluye arneses de evaluación, observabilidad y documentación. Construimos sobre modelos de pesos abiertos e infraestructura de código abierto para que usted posea el sistema, los pesos y los datos: sin bloqueo de plataforma.",
    },
    {
      question: "¿Cómo puedo contratar a Haal Lab?",
      answer:
        "Trabajamos en cuatro etapas: Discovery (entender el problema), Architecture (diseñar el sistema de extremo a extremo), Build (ingeniería en incrementos demostrables) y Deploy (entregar en su entorno con runbooks y observabilidad). Contáctenos en hussain.nazary@haal-lab.solutions.",
    },
  ],
  solutions: [],
  about: [],
  contact: [],
  projects: [],
  research: [],
  network: [],
  pricing: [],
};

/** Italian FAQs */
export const FAQS_IT: Record<string, FAQ[]> = {
  home: [
    {
      question: "Cosa fa Haal Lab?",
      answer:
        "Haal Lab è un'azienda di ingegneria IA deep-tech che costruisce sistemi di IA privati, intelligenti e affidabili. Offriamo quattro capacità: Sistemi di IA locali (inferenza privata on-premise), Applicazioni LLM (assistenti e agenti), Intelligenza della conoscenza (RAG e ricerca semantica) e Infrastruttura IA (distribuzione e ottimizzazione).",
    },
    {
      question: "Per chi è Haal Lab?",
      answer:
        "Haal Lab lavora con aziende, startup, ricercatori e organizzazioni che necessitano di soluzioni IA personalizzate, in particolare quelle con requisiti di privacy, conformità o sovranità dei dati che escludono i servizi IA cloud generici.",
    },
    {
      question: "Haal Lab costruisce IA privata o on-premise?",
      answer:
        "Sì. L'architettura privacy-first è uno dei nostri principi fondamentali. Costruiamo sistemi di IA che funzionano interamente sulla vostra infrastruttura: su workstation, server on-premise o cluster isolati, utilizzando modelli a pesi aperti in modo che i vostri dati non lascino mai il vostro ambiente.",
    },
    {
      question: "Quali tecnologie utilizza Haal Lab?",
      answer:
        "Il nostro stack include LLM a pesi aperti, llama.cpp, vLLM, Triton, formato GGUF, embedding BGE-M3, database vettoriali (Qdrant, Postgres con pgvector), LangGraph per l'orchestrazione degli agenti, Kubernetes e CUDA per l'accelerazione GPU. Costruiamo su open-source per impostazione predefinita: nessun lock-in di piattaforma.",
    },
    {
      question: "In che modo Haal Lab è diverso da un'agenzia IA generica?",
      answer:
        "Haal Lab tratta l'IA come una disciplina ingegneristica, non come una fabbrica di demo. Ogni sistema che consegniamo include harness di valutazione, osservabilità e documentazione. Costruiamo su modelli a pesi aperti e infrastruttura open-source in modo che tu possieda il sistema, i pesi e i dati: nessun lock-in di piattaforma.",
    },
    {
      question: "Come posso coinvolgere Haal Lab?",
      answer:
        "Lavoriamo in quattro fasi: Discovery (comprendere il problema), Architecture (progettare il sistema end-to-end), Build (ingegneria in incrementi dimostrabili) e Deploy (consegnare nel vostro ambiente con runbook e osservabilità). Contattateci all'indirizzo hussain.nazary@haal-lab.solutions.",
    },
  ],
  solutions: [],
  about: [],
  contact: [],
  projects: [],
  research: [],
  network: [],
  pricing: [],
};

/** Get FAQs by locale */
export function getFAQsByLocale(locale: string): Record<string, FAQ[]> {
  switch (locale) {
    case "de":
      return FAQS_DE;
    case "fr":
      return FAQS_FR;
    case "es":
      return FAQS_ES;
    case "it":
      return FAQS_IT;
    default:
      return FAQS_EN;
  }
}
