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
        "Haal Lab works with businesses, startups, researchers, and organizations that need custom AI solutions , particularly those with privacy, compliance, or data-sovereignty requirements that rule out generic cloud AI services.",
    },
    {
      question: "Does Haal Lab build private or on-premises AI?",
      answer:
        "Yes. Privacy-first architecture is one of our core principles. We build AI systems that run entirely on your infrastructure , on workstations, on-prem servers, or air-gapped clusters , using open-weight models so your data never leaves your environment.",
    },
    {
      question: "What technologies does Haal Lab use?",
      answer:
        "Our stack includes open-weight LLMs, llama.cpp, vLLM, Triton, GGUF format, BGE-M3 embeddings, vector databases (Qdrant, Postgres with pgvector), LangGraph for agent orchestration, Kubernetes, and CUDA for GPU acceleration. We build on open-source by default , no platform lock-in.",
    },
    {
      question: "How is Haal Lab different from a generic AI agency?",
      answer:
        "Haal Lab treats AI as an engineering discipline, not a demo factory. Every system we ship includes evaluation harnesses, observability, and documentation. We build on open-weight models and open-source infrastructure so you own the system, the weights, and the data , no platform lock-in.",
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
        "A local AI system runs entirely on your own hardware , workstations, on-prem servers, or air-gapped clusters , without sending data to a cloud API. Haal Lab builds local AI systems using open-weight models in GGUF format, with llama.cpp and vLLM runtimes, and CUDA acceleration where GPUs are available.",
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
        "Yes. We build air-gapped deployments for regulated environments , healthcare, finance, government, and legal. The entire stack (models, runtime, retrieval layer, application) runs inside your network with no outbound calls. We use offline model registries and version control to keep the system maintainable.",
    },
    {
      question: "What is AI infrastructure engineering?",
      answer:
        "AI infrastructure engineering is the practice of building the serving, scaling, and observability layer that makes AI systems run reliably in production. Haal Lab builds infrastructure around vLLM, Triton, and Kubernetes , including GPU scheduling, batching, memory tuning, and evaluation-driven CI/CD for prompts and models.",
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
  projects: [
    {
      question: "What is GGUF Loader?",
      answer:
        "GGUF Loader is an offline AI platform built by Haal Lab that enables users to run large language models locally with privacy and control. It uses the GGUF model format, CUDA acceleration via llama.cpp, and includes a retrieval layer for grounded answers , all without sending data to a cloud API.",
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
  solutions: [
    {
      question: "Was ist ein lokales KI-System?",
      answer:
        "Ein lokales KI-System läuft vollständig auf Ihrer eigenen Hardware – Workstations, On-Prem-Servern oder Air-Gapped-Clustern – ohne Daten an eine Cloud-API zu senden. Haal Lab entwickelt lokale KI-Systeme mit Open-Weight-Modellen im GGUF-Format, llama.cpp- und vLLM-Laufzeiten und CUDA-Beschleunigung, wenn GPUs verfügbar sind.",
    },
    {
      question: "Was ist ein RAG-System und entwickelt Haal Lab solche?",
      answer:
        "RAG (Retrieval-Augmented Generation) ist eine Architektur, die Sprachmodellantworten in Ihren eigenen Dokumenten verankert. Ein RAG-System ruft relevante Passagen aus einer Wissensdatenbank ab und speist sie dem LLM als Kontext. Haal Lab entwickelt produktionsreife RAG-Systeme mit hybrider Suche (BM25 + dichte Embeddings), Cross-Encoder-Reranking und Quellenzuordnung.",
    },
    {
      question: "Was ist BGE-M3 und warum verwendet Haal Lab es?",
      answer:
        "BGE-M3 ist ein mehrsprachiges Embedding-Modell, das dichte, sparse und ColBERT-artige Darstellungen in einem einzigen Durchlauf erzeugt. Haal Lab verwendet BGE-M3 für die Produktions-Suche, da es mehrsprachige Korpora (wie juristische Dokumente über Rechtsordnungen hinweg) verarbeitet und Multi-Vektor-Indexierung für höhere Trefferquoten unterstützt.",
    },
    {
      question: "Kann Haal Lab KI auf Air-Gapped-Infrastruktur bereitstellen?",
      answer:
        "Ja. Wir entwickeln Air-Gapped-Bereitstellungen für regulierte Umgebungen – Gesundheit, Finanzen, Regierung und Recht. Der gesamte Stack (Modelle, Laufzeit, Suchschicht, Anwendung) läuft in Ihrem Netzwerk ohne ausgehende Aufrufe. Wir verwenden Offline-Modell-Registrierungen und Versionskontrolle, um das System wartbar zu halten.",
    },
    {
      question: "Was ist KI-Infrastruktur-Engineering?",
      answer:
        "KI-Infrastruktur-Engineering ist die Praxis des Aufbaus der Serving-, Scaling- und Observability-Schicht, die KI-Systeme zuverlässig in der Produktion betreibt. Haal Lab entwickelt Infrastruktur rund um vLLM, Triton und Kubernetes – einschließlich GPU-Scheduling, Batching, Memory-Tuning und evaluierungsbasiertem CI/CD für Prompts und Modelle.",
    },
    {
      question: "Wie lange dauert ein KI-Engagement mit Haal Lab?",
      answer:
        "Das hängt vom Umfang ab. Ein fokussierter Prototyp kann in 4–6 Wochen ausgeliefert werden. Ein Production-System mit Infrastruktur, Evaluierung und Observability dauert typischerweise 3–6 Monate. Discovery (1–2 Wochen) gibt uns genug Kontext, um Ihnen vor einer Verpflichtung einen konkreten Zeitplan zu geben.",
    },
  ],
  about: [
    {
      question: "Ist Haal Lab ein Startup oder eine Agentur?",
      answer:
        "Weder genau. Haal Lab ist ein KI-Engineering-Unternehmen – näher an einer spezialisierten Engineering-Beratung als an einer Software-Agentur. Wir übernehmen gleichzeitig nur eine kleine Anzahl von Engagements und liefern produktionsreife KI-Systeme, keine Demos. Unsere Arbeit ist forschungsbasiert und engineeringgeführt.",
    },
    {
      question: "Was ist die Mission von Haal Lab?",
      answer:
        "Die Mission von Haal Lab ist es, fortschrittliche KI-Systeme privat, zuverlässig und nützlich in der Produktion zu machen. Wir existieren, um die Lücke zwischen KI-Forschung und KI in der Produktion zu schließen – insbesondere für Organisationen, die cloud-hosting-Modelle wegen Datenschutz, Latenz, Kosten oder Compliance-Restriktionen nicht bereitstellen können.",
    },
    {
      question: "Ist die KI von Haal Lab Open Source?",
      answer:
        "Haal Lab baut auf Open-Weight-Modellen (LLMs, die Sie herunterladen und selbst ausführen können) und Open-Source-Infrastruktur (llama.cpp, vLLM, Qdrant, Kubernetes). Die Systeme, die wir für Kunden entwickeln, gehören dem Kunden – Weights, Code und Daten. Wir binden Sie nicht an eine proprietäre Platform.",
    },
    {
      question: "Wo ist Haal Lab ansässig?",
      answer:
        "Haal Lab agiert als Remote-First-KI-Engineering-Unternehmen. Wir arbeiten weltweit mit Kunden. Erreichen Sie uns unter hussain.nazary@haal-lab.solutions oder über unsere Kontaktseite.",
    },
  ],
  contact: [
    {
      question: "Wie schnell reagiert Haal Lab auf Anfragen?",
      answer:
        "Wir antworten in der Regel innerhalb von zwei Werktagen. Wenn Ihre Anfrage zeitkritisch ist, erwähnen Sie dies in Ihrer Nachricht, und wir werden sie priorisieren. Jede ernsthafte Anfrage erhält in der ersten Antwort eine konkrete technische Perspektive – kein Verkaufsskript.",
    },
    {
      question: "Was sollte ich in meine Anfrage an Haal Lab aufnehmen?",
      answer:
        "Je mehr Kontext, desto besser. Erzählen Sie uns: das Problem, das Sie lösen, wie Erfolg aussieht, welche Daten Sie haben, welche Einschränkungen (Datenschutz, Latenz, Budget, Hardware) wir kennen sollten, und Ihren Zeitplan. Wir antworten mit einer technischen Perspektive dazu, ob und wie wir helfen können.",
    },
    {
      question: "Unterschreibt Haal Lab NDAs?",
      answer:
        "Ja. Wir unterschreiben routinemäßig gegenseitige NDAs vor detaillierten technischen Diskussionen. Wir behandeln Ihre Daten und Ihre Problembeschreibung standardmäßig als vertraulich – und weil wir private KI-Systeme entwickeln, ist Datensouveränität Teil unserer Engineering-Praxis, nicht nur eine Richtlinie.",
    },
  ],
  projects: [
    {
      question: "Was ist GGUF Loader?",
      answer:
        "GGUF Loader ist eine Offline-KI-Plattform von Haal Lab, mit der Benutzer große Sprachmodelle lokal mit Privatsphäre und Kontrolle ausführen können. Sie verwendet das GGUF-Modellformat, CUDA-Beschleunigung über llama.cpp und enthält eine Suchschicht für fundierte Antworten – alles ohne Daten an eine Cloud-API zu senden.",
    },
    {
      question: "Was ist das Legal Intelligence System?",
      answer:
        "Das Legal Intelligence System ist eine semantische Retrieval-Plattform von Haal Lab für komplexe juristische Dokumentenanalyse. Sie verwendet BGE-M3-Embeddings, eine Vektordatenbank, Cross-Encoder-Reranking und OCR, um heterogene juristische Korpora (Verträge, Gesetze, Rechtsprechung) zu verarbeiten und die richtige Klausel mit Zitation zurückzugeben.",
    },
    {
      question: "Kann ich den Code oder Projekte von Haal Lab sehen?",
      answer:
        "Teile unserer Arbeit sind Open Source und auf GitHub unter github.com/haal-lab verfügbar. Kundengagements sind proprietär und gehören dem Kunden. Die Fallstudien auf unserer Projektseite beschreiben das Problem, den Ansatz und die Architektur repräsentativer Arbeit.",
    },
  ],
  research: [
    {
      question: "Veröffentlicht Haal Lab Forschung?",
      answer:
        "Ja. Wir veröffentlichen technische Artikel über die Systeme, die wir entwickeln – was funktioniert hat, was nicht, und die Gründe hinter den Entscheidungen. Themen umfassen lokale LLM-Inferenz, Reranking-Abwägungen, BGE-M3 in der Produktion, evaluierungsbasiertes CI, Agenten-Orchestrierungsmuster und Bedrohungsmodellierung für private KI.",
    },
    {
      question: "Wo kann ich die technischen Texte von Haal Lab lesen?",
      answer:
        "Unsere Forschungsartikel werden auf der Forschungsseite unter haal-lab.solutions/research veröffentlicht. Wir veröffentlichen, wenn wir etwas zu sagen haben – kein Newsletter-Spam, keine Growth-Funnels.",
    },
  ],
  network: [
    {
      question: "Wer sind die Partner von Haal Lab?",
      answer:
        "Haal Lab arbeitet mit Technologieanbietern (NVIDIA, Hugging Face, Qdrant, Mistral AI, Aleph Alpha), europäischen Cloud- und Infrastrukturprovidern (Hetzner, Scaleway, Gaia-X) und Forschungseinrichtungen (Fraunhofer, INRIA) zusammen. Wir konzentrieren uns auf Open-Weight-Modelle, Open-Source-Infrastruktur und europäische Datensouveränität.",
    },
    {
      question: "Arbeitet Haal Lab mit europäischen Forschungseinrichtungen zusammen?",
      answer:
        "Ja. Wir arbeiten mit europäischen Forschungsorganisationen einschließlich Fraunhofer und INRIA an angewandter KI, Retrieval-Systemen, mehrsprachigem NLP und Evaluierungsmethodik zusammen. Diese Partnerschaften halten unser Engineering in der aktuellen Forschung verankert.",
    },
    {
      question: "Wie werde ich Partner von Haal Lab?",
      answer:
        "Wir arbeiten mit Organisationen zusammen, die sich wie wir für Open-Weight-Modelle, europäische Souveränität und produktionsreifes Engineering engagieren. Wenn Sie Technologie, Infrastruktur oder Forschung entwickeln, die mit unserer Praxis übereinstimmt, kontaktieren Sie uns unter hussain.nazary@haal-lab.solutions.",
    },
  ],
  pricing: [
    {
      question: "Was kostet es, ein KI-System mit Haal Lab zu entwickeln?",
      answer:
        "Haal Lab bietet vier Preistiers: Explorer (€4.900 einmalig) zur Machbarkeitsvalidierung, Professional (€14.900 pro Projekt) für ein produktionsreifes KI-System, Enterprise (€39.900+ pro Engagement) für mehrsysteme private Infrastruktur und Research & Academic (individuelle Preise) für Universitätslaboratorien und Forschungseinrichtungen.",
    },
    {
      question: "Was ist im Explorer-Paket enthalten?",
      answer:
        "Das Explorer-Paket (€4.900) umfasst einen 2-stündigen Discovery-Workshop, einen schriftlichen Machbarkeitsbericht mit Architekturskizze und ein funktionierendes Proof-of-Concept auf Ihren Beispieldaten – geliefert in 2 Wochen. Es dient zur Validierung, ob AI Ihr spezifisches Problem lösen kann, bevor Sie weiteres Budget investieren.",
    },
    {
      question: "Was ist der Unterschied zwischen Professional und Enterprise?",
      answer:
        "Professional (€14.900) liefert ein Produktions-KI-System mit Integration, Evaluierung und 30-Tage-Support. Enterprise (€39.900+) ergänzt On-Prem-/Air-Gapped-Bereitstellung, bis zu 3 vernetzte Systeme, DSGVO- & EU-AI-Act-Compliance, GPU-Optimierung, vollständige Observability, Team-Schulung und 90-Tage-Support mit SLA.",
    },
    {
      question: "Bietet Haal Lab akademische oder Forschungspreise an?",
      answer:
        "Ja. Unsere Research & Academic Stufe bietet 30–40% unter kommerziellen Raten, mit Engagements, die auf Forschungsbudgets und Förderzyklen abgestimmt sind. Wir unterstützen RAG-Systeme für Forschungskorpora, reproduzierbare Experiment-Infrastruktur, Open-Weight-Modelle für publizierbare Ergebnisse und optionale Ko-Autorschaft bei Systemdesign.",
    },
    {
      question: "Kann ich später Dienstleistungen zu meinem Paket hinzufügen?",
      answer:
        "Ja. Haal Lab bietet Add-ons einschließlich erweitertem Support (€2.400/Monat), zusätzlichen Integrationen (€3.900/Integration), Team-Schulungsworkshops (€1.900/Sitzung) und kontinuierlicher Evaluierung & Überwachung (€2.900/Monat). Diese können jederzeit zu jedem Tier hinzugefügt werden.",
    },
  ],
  howWeWork: [
    {
      question: "Wie geht Haal Lab mit KI-Projekten vor?",
      answer:
        "Haal Lab folgt einem forschergetriebenen Engineering-Prozess: Die Herausforderung verstehen, verfügbare Ansätze erforschen und erkunden, Lösungen experimentell bewerten, das System entwickeln, dann mit kontinuierlicher Verbesserung bereitstellen. Jedes Projekt beginnt mit dem Problem, nicht mit dem Modell.",
    },
    {
      question: "Was passiert während der Forschungs- und Erkundungsphase?",
      answer:
        "Bevor wir uns für einen Ansatz entscheiden, untersuchen wir verfügbare Technologien und mögliche Architekturen. Wir erkunden verschiedene KI-Methoden, bewerten geeignete Modelle und Techniken, testen mögliche Architekturen und untersuchen Trade-offs zwischen Leistung, Kosten, Sicherheit und Skalierbarkeit.",
    },
    {
      question: "Wie bewertet Haal Lab KI-Lösungen?",
      answer:
        "Wir bauen Experimente und Prototypen, um verschiedene Lösungen vor der vollständigen Implementierung zu bewerten. Wir messen Wirksamkeit, Zuverlässigkeit, Leistung, Integrationsanforderungen und langfristige Nachhaltigkeit, um informierte Entscheidungen auf Basis von Ergebnissen zu treffen.",
    },
  ],
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
  solutions: [
    {
      question: "Qu'est-ce qu'un système d'IA local ?",
      answer:
        "Un système d'IA local s'exécute entièrement sur votre propre matériel – postes de travail, serveurs sur site ou clusters isolés – sans envoyer de données à une API cloud. Haal Lab construit des systèmes d'IA locaux en utilisant des modèles à poids ouverts au format GGUF, avec les runtimes llama.cpp et vLLM, et l'accélération CUDA lorsque des GPU sont disponibles.",
    },
    {
      question: "Qu'est-ce qu'un système RAG et Haal Lab en construit-il ?",
      answer:
        "RAG (Retrieval-Augmented Generation) est une architecture qui ancre les réponses du modèle de langage dans vos propres documents. Un système RAG récupère les passages pertinents d'une base de connaissances, puis les transmet au LLM comme contexte. Haal Lab construit des systèmes RAG de production avec recherche hybride (BM25 + embeddings denses), reclassement par cross-encoder et attribution des sources.",
    },
    {
      question: "Qu'est-ce que BGE-M3 et pourquoi Haal Lab l'utilise-t-il ?",
      answer:
        "BGE-M3 est un modèle d'embeddings multilingue qui produit des représentations denses, creuses et de type ColBERT en un seul passage. Haal Lab utilise BGE-M3 pour la recherche en production car il gère les corpus multilingues (comme les documents juridiques transjuridictionnels) et supporte l'indexation multi-vecteurs pour un rappel plus élevé.",
    },
    {
      question: "Haal Lab peut-il déployer l'IA sur une infrastructure isolée ?",
      answer:
        "Oui. Nous construisons des déploiements isolés pour les environnements réglementés – santé, finance, gouvernement et juridique. L'ensemble de la pile (modèles, runtime, couche de recherche, application) s'exécute dans votre réseau sans appels sortants. Nous utilisons des registres de modèles hors ligne et un contrôle de version pour maintenir le système.",
    },
    {
      question: "Qu'est-ce que l'ingénierie d'infrastructure IA ?",
      answer:
        "L'ingénierie d'infrastructure IA est la pratique de construction de la couche de service, d'éscalabilité et d'observabilité qui fait fonctionner les systèmes de manière fiable en production. Haal Lab construit une infrastructure autour de vLLM, Triton et Kubernetes – incluant l'ordonnancement GPU, le batching, l'ajustement mémoire et le CI/CD piloté par évaluation pour les prompts et les modèles.",
    },
    {
      question: "Combien de temps dure un engagement avec Haal Lab ?",
      answer:
        "Cela dépend de la portée. Un prototype ciblé peut être livré en 4–6 semaines. Un système de production avec infrastructure, évaluation et observabilité prend typiquement 3–6 mois. Discovery (1–2 semaines) nous donne suffisamment de contexte pour vous donner un calendrier concret avant tout engagement.",
    },
  ],
  about: [
    {
      question: "Haal Lab est-il une startup ou une agence ?",
      answer:
        "Ni l'un ni l'autre, exactement. Haal Lab est une entreprise d'ingénierie IA – plus proche d'un cabinet de conseil spécialisé en ingénierie que d'une agence logicielle. Nous prenons un petit nombre d'engagements à la fois et livrons des systèmes IA de production, pas des démos. Notre travail est guidé par la recherche et piloté par l'ingénierie.",
    },
    {
      question: "Quelle est la mission de Haal Lab ?",
      answer:
        "La mission de Haal Lab est de rendre les systèmes d'IA avancés privés, fiables et utiles en production. Nous existons pour combler le fossé entre la recherche en IA et l'IA en production – en particulier pour les organisations qui ne peuvent pas déployer des modèles hébergés dans le cloud en raison de contraintes de confidentialité, de latence, de coût ou de conformité.",
    },
    {
      question: "L'IA de Haal Lab est-elle open source ?",
      answer:
        "Haal Lab construit sur des modèles à poids ouverts (LLMs que vous pouvez télécharger et exécuter vous-même) et une infrastructure open-source (llama.cpp, vLLM, Qdrant, Kubernetes). Les systèmes que nous construisons pour les clients appartiennent au client – poids, code et données. Nous ne vous enfermons pas dans une plateforme propriétaire.",
    },
    {
      question: "Où est basé Haal Lab ?",
      answer:
        "Haal Lab opère en tant que entreprise d'ingénierie IA à distance. Nous travaillons avec des clients du monde entier. Contactez-nous à hussain.nazary@haal-lab.solutions ou via notre page de contact.",
    },
  ],
  contact: [
    {
      question: "À quelle vitesse Haal Lab répond-il aux demandes ?",
      answer:
        "Nous répondons généralement dans les deux jours ouvrables. Si votre demande est urgente, mentionnez-le dans votre message et nous la prioriserons. Chaque demande sérieuse obtient une perspective technique concrète dès la première réponse – pas un script de vente.",
    },
    {
      question: "Que dois-je inclure dans ma demande à Haal Lab ?",
      answer:
        "Plus il y a de contexte, mieux c'est. Dites-nous : le problème que vous résolvez, à quoi ressemble le succès, quelles données vous avez, quelles contraintes (confidentialité, latence, budget, matériels) nous devrait connaître, et votre calendrier. Nous répondrons avec une perspective technique sur la manière dont nous pouvons vous aider.",
    },
    {
      question: "Haal Lab signe-t-il des NDA ?",
      answer:
        "Oui. Nous signons routinièrement des NDA mutuels avant les discussions techniques détaillées. Nous traitons vos données et votre description de problème comme confidentielles par défaut – et parce que nous construisons des systèmes IA privés, la souveraineté des données fait partie de notre pratique d'ingénierie, pas seulement une politique.",
    },
  ],
  projects: [
    {
      question: "Qu'est-ce que GGUF Loader ?",
      answer:
        "GGUF Loader est une plateforme IA hors ligne construite par Haal Lab qui permet aux utilisateurs d'exécuter des grands modèles de langage localement avec confidentialité et contrôle. Elle utilise le format de modèle GGUF, l'accélération CUDA via llama.cpp, et comprend une couche de recherche pour des réponses fondées – le tout sans envoyer de données à une API cloud.",
    },
    {
      question: "Qu'est-ce que le Legal Intelligence System ?",
      answer:
        "Le Legal Intelligence System est une plateforme de récupération sémantique construite par Haal Lab pour l'analyse complexe de documents juridiques. Elle utilise les embeddings BGE-M3, une base de données vectorielle, le reclassement par cross-encoder et l'OCR pour ingérer des corpus juridiques hétérogènes (contrats, statuts, jurisprudence) et retourner la bonne clause avec citation.",
    },
    {
      question: "Puis-je voir le code ou les projets de Haal Lab ?",
      answer:
        "Une partie de notre travail est open source et disponible sur GitHub à github.com/haal-lab. Les engagements clients sont propriétaires et appartiennent au client. Les études de cas sur notre page Projets décrivent le problème, l'approche et l'architecture de travaux représentatifs.",
    },
  ],
  research: [
    {
      question: "Haal Lab publie-t-il des recherches ?",
      answer:
        "Oui. Nous publions des articles techniques sur les systèmes que nous construisons – ce qui a fonctionné, ce qui n'a pas fonctionné, et le raisonnement derrière les choix. Les sujets incluent l'inférence LLM locale, les compromis de reclassement, BGE-M3 en production, le CI piloté par évaluation, les modèles d'orchestration d'agents et la modélisation des menaces pour l'IA privée.",
    },
    {
      question: "Où puis-je lire les écrits techniques de Haal Lab ?",
      answer:
        "Nos articles de recherche sont publiés sur la page Recherche à haal-lab.solutions/research. Nous publions lorsque nous avons quelque chose à dire – pas de spam de newsletter, pas de tunnels de croissance.",
    },
  ],
  network: [
    {
      question: "Qui sont les partenaires de Haal Lab ?",
      answer:
        "Haal Lab s'associe avec des fournisseurs technologiques (NVIDIA, Hugging Face, Qdrant, Mistral AI, Aleph Alpha), des fournisseurs cloud et d'infrastructure européens (Hetzner, Scaleway, Gaia-X) et des institutions de recherche (Fraunhofer, INRIA). Nous nous concentrons sur les modèles à poids ouverts, l'infrastructure open-source et la souveraineté des données européenne.",
    },
    {
      question: "Haal Lab travaille-t-il avec des institutions de recherche européennes ?",
      answer:
        "Oui. Nous collaborons avec des organisations de recherche européennes dont Fraunhofer et INRIA sur l'IA appliquée, les systèmes de récupération, le NLP multilingue et la méthodologie d'évaluation. Ces partenariats ancrent notre ingénierie dans la recherche actuelle.",
    },
    {
      question: "Comment devenir partenaire de Haal Lab ?",
      answer:
        "Nous nous associons avec des organisations qui partagent notre engagement envers les modèles à poids ouverts, la souveraineté européenne et l'ingénierie de niveau production. Si vous développez de la technologie, de l'infrastructure ou de la recherche qui s'aligne avec notre pratique, contactez-nous à hussain.nazary@haal-lab.solutions.",
    },
  ],
  pricing: [
    {
      question: "Combien coûte la construction d'un système IA avec Haal Lab ?",
      answer:
        "Haal Lab propose quatre niveaux de prix : Explorer (4 900 € unique) pour la validation de faisabilité, Professional (14 900 € par projet) pour un système IA prêt pour la production, Enterprise (39 900 €+ par engagement) pour une infrastructure privée multi-systèmes, et Research & Academic (tarif personnalisé) pour les laboratoires universitaires et institutions de recherche.",
    },
    {
      question: "Qu'est-ce qui est inclus dans le forfait Explorer ?",
      answer:
        "Le forfait Explorer (4 900 €) comprend un atelier Discovery de 2 heures, un rapport de faisabilité écrit avec croquis d'architecture et une preuve de concept fonctionnelle sur vos données d'exemple – livrée en 2 semaines. Il est conçu pour valider si l'IA peut résoudre votre problème spécifique avant d'engager davantage de budget.",
    },
    {
      question: "Quelle est la différence entre Professional et Enterprise ?",
      answer:
        "Professional (14 900 €) fournit un système IA de production avec intégration, évaluation et support de 30 jours. Enterprise (39 900 €+) ajoute le déploiement sur site/isolé, jusqu'à 3 systèmes interconnectés, conformité RGPD et AI Act européen, optimisation GPU, observabilité complète, formation d'équipe et support de 90 jours avec SLA.",
    },
    {
      question: "Haal Lab propose-t-il des tarifs académiques ou de recherche ?",
      answer:
        "Oui. Notre niveau Research & Academic offre 30–40% de réduction par rapport aux tarifs commerciaux, avec des engagements adaptés aux budgets de recherche et cycles de subventions. Nous supportons les systèmes RAG pour les corpus de recherche, l'infrastructure d'expériences reproductibles, les modèles à poids ouverts pour des résultats publiables et la co-authorship optionnelle sur la conception système.",
    },
    {
      question: "Puis-je ajouter des services à mon forfait plus tard ?",
      answer:
        "Oui. Haal Lab propose des modules complémentaires incluant un support étendu (2 400 €/mois), des intégrations supplémentaires (3 900 €/intégration), des ateliers de formation d'équipe (1 900 €/session) et une évaluation et surveillance continues (2 900 €/mois). Ceux-ci peuvent être ajoutés à tout moment à tout niveau.",
    },
  ],
  howWeWork: [
    {
      question: "Comment Haal Lab aborde-t-il les projets IA ?",
      answer:
        "Haal Lab suit un processus d'ingénierie axé sur la recherche : comprendre le défi, rechercher et explorer les approches possibles, expérimenter et évaluer les solutions, concevoir et développer le système, puis déployer avec une amélioration continue. Chaque projet commence par le problème, pas par le modèle.",
    },
    {
      question: "Que se passe-t-il lors de la phase de recherche et d'exploration ?",
      answer:
        "Avant de nous engager sur une approche, nous étudions les technologies disponibles et les architectures possibles. Nous explorons différentes méthodes IA, évaluons les modèles et techniques adaptés, testons les architectures possibles et étudions les compromis entre performance, coût, sécurité et scalabilité.",
    },
    {
      question: "Comment Haal Lab évalue-t-il les solutions IA ?",
      answer:
        "Nous construisons des expériences et des prototypes pour évaluer différentes solutions avant l'implémentation complète. Nous mesurons l'efficacité, la fiabilité, les performances, les exigences d'intégration et la durabilité à long terme pour prendre des décisions éclairées basées sur les résultats.",
    },
  ],
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
  solutions: [
    {
      question: "¿Qué es un sistema de IA local?",
      answer:
        "Un sistema de IA local se ejecuta completamente en su propio hardware: estaciones de trabajo, servidores locales o clústeres aislados, sin enviar datos a una API en la nube. Haal Lab construye sistemas de IA locales utilizando modelos de pesos abiertos en formato GGUF, con runtimes de llama.cpp y vLLM, y aceleración CUDA cuando hay GPUs disponibles.",
    },
    {
      question: "¿Qué es un sistema RAG y Haal Lab los construye?",
      answer:
        "RAG (Retrieval-Augmented Generation) es una arquitectura que ancla las respuestas del modelo de lenguaje en sus propios documentos. Un sistema RAG recupera pasajes relevantes de una base de conocimientos y los alimenta al LLM como contexto. Haal Lab construye sistemas RAG de producción con búsqueda híbrida (BM25 + embeddings densos), reclasificación por cross-encoder y atribución de fuentes.",
    },
    {
      question: "¿Qué es BGE-M3 y por qué lo usa Haal Lab?",
      answer:
        "BGE-M3 es un modelo de embeddings multilingüe que produce representaciones densas, dispersas y de tipo ColBERT en una sola pasada. Haal Lab utiliza BGE-M3 para la búsqueda en producción porque maneja corpus multilingües (como documentos legales en diferentes jurisdicciones) y soporta indexación multi-vector para mayor recall.",
    },
    {
      question: "¿Puede Haal Lab desplegar IA en infraestructura aislada?",
      answer:
        "Sí. Construimos despliegues aislados para entornos regulados: salud, finanzas, gobierno y legal. Todo el stack (modelos, runtime, capa de recuperación, aplicación) se ejecuta dentro de su red sin llamadas salientes. Usamos registros de modelos offline y control de versiones para mantener el sistema mantenible.",
    },
    {
      question: "¿Qué es la ingeniería de infraestructura de IA?",
      answer:
        "La ingeniería de infraestructura de IA es la práctica de construir la capa de servicio, escalabilidad y observabilidad que hace que los sistemas de IA funcionen de manera confiable en producción. Haal Lab construye infraestructura alrededor de vLLM, Triton y Kubernetes, incluyendo programación de GPU, batching, ajuste de memoria e impulsado por evaluación CI/CD para prompts y modelos.",
    },
    {
      question: "¿Cuánto tiempo dura un compromiso con Haal Lab?",
      answer:
        "Depende del alcance. Un prototipo enfocado puede entregarse en 4–6 semanas. Un sistema de producción con infraestructura, evaluación y observabilidad típicamente toma 3–6 meses. Discovery (1–2 semanas) nos da suficiente contexto para darle un cronograma concreto antes de cualquier compromiso.",
    },
  ],
  about: [
    {
      question: "¿Es Haal Lab una startup o una agencia?",
      answer:
        "Ninguna de las dos, exactamente. Haal Lab es una empresa de ingeniería de IA – más cercana a una consultoría de ingeniería especializada que a una agencia de software. Aceptamos un pequeño número de compromisos a la vez y entregamos sistemas de IA de producción, no demos. Nuestro trabajo es guiado por la investigación y liderado por la ingeniería.",
    },
    {
      question: "¿Cuál es la misión de Haal Lab?",
      answer:
        "La misión de Haal Lab es hacer que los sistemas de IA avanzados sean privados, confiables y útiles en producción. Existimos para cerrar la brecha entre la investigación de IA y la IA en producción – particularmente para organizaciones que no pueden desplegar modelos alojados en la nube debido a restricciones de privacidad, latencia, costo o cumplimiento.",
    },
    {
      question: "¿La IA de Haal Lab es de código abierto?",
      answer:
        "Haal Lab construye sobre modelos de pesos abiertos (LLMs que puede descargar y ejecutar usted mismo) e infraestructura de código abierto (llama.cpp, vLLM, Qdrant, Kubernetes). Los sistemas que construimos para clientes son propiedad del cliente – pesos, código y datos. No lo bloqueamos en una plataforma propietaria.",
    },
    {
      question: "¿Dónde está ubicado Haal Lab?",
      answer:
        "Haal Lab opera como una empresa de ingeniería de IA remota. Trabajamos con clientes en todo el mundo. Contáctenos en hussain.nazary@haal-lab.solutions o a través de nuestra página de contacto.",
    },
  ],
  contact: [
    {
      question: "¿Qué tan rápido responde Haal Lab a las consultas?",
      answer:
        "Típicamente respondemos dentro de dos días hábiles. Si su consulta es urgente, mencínelo en su mensaje y la priorizaremos. Cada consulta seria obtiene una perspectiva técnica concreta en la primera respuesta – no un script de ventas.",
    },
    {
      question: "¿Qué debo incluir en mi consulta a Haal Lab?",
      answer:
        "Cuanto más contexto, mejor. Díganos: el problema que está resolviendo, cómo se ve el éxito, qué datos tiene, qué restricciones (privacidad, latenz, presupuesto, hardware) deberíamos conocer, y su cronograma. Responderemos con una perspectiva técnica sobre si y cómo podemos ayudar.",
    },
    {
      question: "¿Haal Lab firma NDAs?",
      answer:
        "Sí. Rutinariamente firmamos NDAs mutuos antes de discusiones técnicas detalladas. Tratamos sus datos y su descripción del problema como confidenciales por defecto – y porque construimos sistemas de IA privados, la soberanía de datos es parte de nuestra práctica de ingeniería, no solo una política.",
    },
  ],
  projects: [
    {
      question: "¿Qué es GGUF Loader?",
      answer:
        "GGUF Loader es una plataforma de IA sin conexión construida por Haal Lab que permite a los usuarios ejecutar grandes modelos de lenguaje localmente con privacidad y control. Utiliza el formato de modelo GGUF, aceleración CUDA a través de llama.cpp e incluye una capa de recuperación para respuestas fundamentadas – todo sin enviar datos a una API en la nube.",
    },
    {
      question: "¿Qué es el Legal Intelligence System?",
      answer:
        "El Legal Intelligence System es una plataforma de recuperación semántica construida por Haal Lab para el análisis complejo de documentos legales. Utiliza embeddings BGE-M3, una base de datos vectorial, reclasificación por cross-encoder y OCR para ingerir corpus legales heterogéneos (contratos, estatutos, jurisprudencia) y devolver la cláusula correcta con citación.",
    },
    {
      question: "¿Puedo ver el código o los proyectos de Haal Lab?",
      answer:
        "Parte de nuestro trabajo es de código abierto y está disponible en GitHub en github.com/haal-lab. Los compromisos con clientes son propietarios y pertenecen al cliente. Los estudios de caso en nuestra página de Proyectos describen el problema, el enfoque y la arquitectura de trabajo representativo.",
    },
  ],
  research: [
    {
      question: "¿Haal Lab publica investigaciones?",
      answer:
        "Sí. Publicamos artículos técnicos sobre los sistemas que construimos – lo que funcionó, lo que no, y el razonamiento detrás de las decisiones. Los temas incluyen inferencia local de LLM, compromisos de reclasificación, BGE-M3 en producción, CI impulsado por evaluación, patrones de orquestación de agentes y modelado de amenazas de IA privada.",
    },
    {
      question: "¿Dónde puedo leer los escritos técnicos de Haal Lab?",
      answer:
        "Nuestros artículos de investigación se publican en la página de Investigación en haal-lab.solutions/research. Publicamos cuando tenemos algo que decir – sin spam de newsletters, sin embudos de crecimiento.",
    },
  ],
  network: [
    {
      question: "¿Quiénes son los socios de Haal Lab?",
      answer:
        "Haal Lab se asocia con proveedores de tecnología (NVIDIA, Hugging Face, Qdrant, Mistral AI, Aleph Alpha), proveedores europeos de nube e infraestructura (Hetzner, Scaleway, Gaia-X) e instituciones de investigación (Fraunhofer, INRIA). Nos enfocamos en modelos de pesos abiertos, infraestructura de código abierto y soberanía de datos europea.",
    },
    {
      question: "¿Haal Lab trabaja con instituciones de investigación europeas?",
      answer:
        "Sí. Colaboramos con organizaciones de investigación europeas incluyendo Fraunhofer e INRIA en IA aplicada, sistemas de recuperación, NLP multilingüe y metodología de evaluación. Estas asociaciones mantienen nuestra ingeniería arraigada en la investigación actual.",
    },
    {
      question: "¿Cómo me convierto en socio de Haal Lab?",
      answer:
        "Nos asociamos con organizaciones que comparten nuestro compromiso con modelos de pesos abiertos, soberanía europea e ingeniería de nivel de producción. Si desarrolla tecnología, infraestructura o investigación que se alinea con nuestra práctica, contáctenos en hussain.nazary@haal-lab.solutions.",
    },
  ],
  pricing: [
    {
      question: "¿Cuánto cuesta construir un sistema de IA con Haal Lab?",
      answer:
        "Haal Lab ofrece cuatro niveles de precios: Explorer (€4,900 único) para validación de viabilidad, Professional (€14,900 por proyecto) para un sistema de IA listo para producción, Enterprise (€39,900+ por compromiso) para infraestructura privada multi-sistema, y Research & Academic (precios personalizados) para laboratorios universitarios e instituciones de investigación.",
    },
    {
      question: "¿Qué está incluido en el paquete Explorer?",
      answer:
        "El paquete Explorer (€4,900) incluye un taller Discovery de 2 horas, un informe de viabilidad escrito con boceto de arquitectura y una prueba de concepto funcional en sus datos de ejemplo – entregada en 2 semanas. Está diseñado para validar si la IA puede resolver su problema específico antes de comprometer más presupuesto.",
    },
    {
      question: "¿Cuál es la diferencia entre Professional y Enterprise?",
      answer:
        "Professional (€14,900) entrega un sistema de IA de producción con integración, evaluación y soporte de 30 días. Enterprise (€39,900+) agrega despliegue en sitio/aislado, hasta 3 sistemas interconectados, cumplimiento RGPD y Ley de IA de la UE, optimización de GPU, observabilidad completa, capacitación de equipo y soporte de 90 días con SLA.",
    },
    {
      question: "¿Haal Lab ofrece precios académicos o de investigación?",
      answer:
        "Sí. Nuestro nivel Research & Academic ofrece 30–40% por debajo de las tarifas comerciales, con compromisos adaptados a presupuestos de investigación y ciclos de subvenciones. Soportamos sistemas RAG para corpus de investigación, infraestructura de experimentos reproducibles, modelos de pesos abiertos para resultados publicables y co-autoría opcional en diseño de sistemas.",
    },
    {
      question: "¿Puedo agregar servicios a mi paquete después?",
      answer:
        "Sí. Haal Lab ofrece complementos incluyendo soporte extendido (€2,400/mes), integraciones adicionales (€3,900/integración), talleres de capacitación de equipo (€1,900/sesión) y evaluación y monitoreo continuos (€2,900/mes). Estos pueden agregarse a cualquier nivel en cualquier momento.",
    },
  ],
  howWeWork: [
    {
      question: "¿Cómo aborda Haal Lab los proyectos de IA?",
      answer:
        "Haal Lab sigue un proceso de ingeniería impulsado por la investigación: comprender el desafío, investigar y explorar posibles enfoques, experimentar y evaluar soluciones, diseñar y desarrollar el sistema, luego desplegar con mejora continua. Cada proyecto comienza con el problema, no con el modelo.",
    },
    {
      question: "¿Qué sucede durante la fase de investigación y exploración?",
      answer:
        "Antes de comprometernos con un enfoque, investigamos las tecnologías disponibles y las arquitecturas posibles. Exploramos diferentes métodos de IA, evaluamos modelos y técnicas adecuados, probamos arquitecturas posibles y estudiamos compromisos entre rendimiento, costo, seguridad y escalabilidad.",
    },
    {
      question: "¿Cómo evalúa Haal Lab las soluciones de IA?",
      answer:
        "Construimos experimentos y prototipos para evaluar diferentes soluciones antes de la implementación completa. Medimos efectividad, fiabilidad, rendimiento, requisitos de integración y sostenibilidad a largo plazo para tomar decisiones informadas basadas en resultados.",
    },
  ],
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
  solutions: [
    {
      question: "Cos'è un sistema di IA locale?",
      answer:
        "Un sistema di IA locale funziona interamente sul vostro hardware: workstation, server on-premise o cluster isolati, senza inviare dati a un'API cloud. Haal Lab costruisce sistemi di IA locali utilizzando modelli a pesi aperti in formato GGUF, con runtime llama.cpp e vLLM, e accelerazione CUDA quando sono disponibili GPU.",
    },
    {
      question: "Cos'è un sistema RAG e Haal Lab ne costruisce?",
      answer:
        "RAG (Retrieval-Augmented Generation) è un'architettura che ancorano le risposte del modello di linguaggio ai vostri documenti. Un sistema RAG recupera i passaggi rilevanti da una base di conoscenza e li alimenta al LLM come contesto. Haal Lab costruisce sistemi RAG di produzione con ricerca ibrida (BM25 + embeddings densi), riclassificazione cross-encoder e attribuzione delle fonti.",
    },
    {
      question: "Cos'è BGE-M3 e perché Haal Lab lo utilizza?",
      answer:
        "BGE-M3 è un modello di embedding multilingue che produce rappresentazioni dense, sparse e di tipo ColBERT in un singolo passaggio. Haal Lab utilizza BGE-M3 per la ricerca in produzione perché gestisce corpus multilingue (come documenti legali transgiurisdizionali) e supporta l'indicizzazione multi-vettore per un richiamo più elevato.",
    },
    {
      question: "Haal Lab può distribuire l'IA su infrastruttura isolata?",
      answer:
        "Sì. Costruiamo distribuzioni isolate per ambienti regolamentati: sanità, finanza, governo e legale. L'intero stack (modelli, runtime, livello di recupero, applicazione) funziona nella vostra rete senza chiamate in uscita. Utilizziamo registri di modelli offline e controllo versioni per mantenere il sistema manutenibile.",
    },
    {
      question: "Cos'è l'ingegneria di infrastruttura IA?",
      answer:
        "L'ingegneria di infrastruttura IA è la pratica di costruire il livello di servizio, scalabilità e osservabilità che fa funzionare i sistemi di IA in modo affidabile in produzione. Haal Lab costruisce infrastruttura attorno a vLLM, Triton e Kubernetes, inclusa la programmazione GPU, il batching, l'ottimizzazione della memoria e il CI/CD guidato dalla valutazione per prompt e modelli.",
    },
    {
      question: "Quanto dura un impegno con Haal Lab?",
      answer:
        "Dipende dalla portata. Un prototipo mirato può essere consegnato in 4–6 settimane. Un sistema di produzione con infrastruttura, valutazione e osservabilità richiede tipicamente 3–6 mesi. Discovery (1–2 settimane) ci dà abbastanza contesto per darvi una timeline concreta prima di qualsiasi impegno.",
    },
  ],
  about: [
    {
      question: "Haal Lab è una startup o un'agenzia?",
      answer:
        "Nessuna delle due, esattamente. Haal Lab è un'azienda di ingegneria IA – più vicina a una consulenza di ingegneria specializzata che a un'agenzia software. Accettiamo un piccolo numero di impegni alla volta e consegniamo sistemi IA di produzione, non demo. Il nostro lavoro è guidato dalla ricerca e diretto dall'ingegneria.",
    },
    {
      question: "Qual è la missione di Haal Lab?",
      answer:
        "La missione di Haal Lab è rendere i sistemi IA avanzati privati, affidabili e utili in produzione. Esistiamo per colmare il divario tra la ricerca sull'IA e l'IA in produzione – in particolare per le organizzazioni che non possono distribuire modelli ospitati nel cloud a causa di vincoli di privacy, latenza, costi o conformità.",
    },
    {
      question: "L'IA di Haal Lab è open source?",
      answer:
        "Haal Lab si basa su modelli a pesi aperti (LLM che potete scaricare ed eseguire voi stessi) e infrastruttura open-source (llama.cpp, vLLM, Qdrant, Kubernetes). I sistemi che costruiamo per i clienti appartengono al client – pesi, codice e dati. Non vi blocciamo in una piattaforma proprietaria.",
    },
    {
      question: "Dove ha sede Haal Lab?",
      answer:
        "Haal Lab opera come un'azienda di ingegneria IA da remoto. Lavoriamo con clienti in tutto il mondo. Contattateci a hussain.nazary@haal-lab.solutions o attraverso la nostra pagina contatti.",
    },
  ],
  contact: [
    {
      question: "Quanto velocemente Haal Lab risponde alle richieste?",
      answer:
        "Rispondiamo tipicamente entro due giorni lavorativi. Se la vostra richiesta è urgente, menzionatela nel vostro messaggio e la priorizzeremo. Ogni richiesta seria ottiene una prospettiva tecnica concreta nella prima risposta – non un copione di vendita.",
    },
    {
      question: "Cosa dovrei includere nella mia richiesta a Haal Lab?",
      answer:
        "Più contesto, meglio è. Diteci: il problema che state risolvendo, come appare il successo, quali dati avete, quali vincoli (privacy, latenza, budget, hardware) dovremmo conoscere, e la vostra timeline. Risponderemo con una prospettiva tecnica su se e come possiamo aiutarvi.",
    },
    {
      question: "Haal Lab firma NDA?",
      answer:
        "Sì. Facciamo routine di NDA reciproci prima delle discussioni tecniche dettagliate. Trattiamo i vostri dati e la descrizione del vostro problema come riservati per impostazione predefinita – e perché costruiamo sistemi IA privati, la sovranità dei dati è parte della nostra pratica di ingegneria, non solo una policy.",
    },
  ],
  projects: [
    {
      question: "Cos'è GGUF Loader?",
      answer:
        "GGUF Loader è una piattaforma IA offline costruita da Haal Lab che permette agli utenti di eseguire grandi modelli di linguaggio localmente con privacy e controllo. Utilizza il formato di modello GGUF, l'accelerazione CUDA tramite llama.cpp e include un livello di recupero per risposte fondate – tutto senza inviare dati a un'API cloud.",
    },
    {
      question: "Cos'è il Legal Intelligence System?",
      answer:
        "Il Legal Intelligence System è una piattaforma di recupero semantico costruita da Haal Lab per l'analisi complessa di documenti legali. Utilizza embedding BGE-M3, un database vettoriale, riclassificazione cross-encoder e OCR per ingerire corpus legali eterogenei (contratti, statuti, giurisprudenza) e restituire la clausola corretta con citazione.",
    },
    {
      question: "Posso vedere il codice o i progetti di Haal Lab?",
      answer:
        "Parte del nostro lavoro è open source e disponibile su GitHub su github.com/haal-lab. Gli impegni con i clienti sono proprietari e appartengono al client. Gli studi di caso nella nostra pagina Progetti descrivono il problema, l'approccio e l'architettura di lavoro rappresentativo.",
    },
  ],
  research: [
    {
      question: "Haal Lab pubblica ricerche?",
      answer:
        "Sì. Pubblichiamo articoli tecnici sui sistemi che costruiamo – cosa ha funzionato, cosa no, e il ragionamento dietro le scelte. Gli argomenti includono inferenza LLM locale, compromessi di riclassificazione, BGE-M3 in produzione, CI guidato dalla valutazione, pattern di orchestrazione agenti e modellazione delle minacce per l'IA privata.",
    },
    {
      question: "Dove posso leggere i scritti tecnici di Haal Lab?",
      answer:
        "I nostri articoli di ricerca sono pubblicati nella pagina Ricerca su haal-lab.solutions/research. Pubblichiamo quando abbiamo qualcosa da dire – nessuno spam di newsletter, nessun funnel di crescita.",
    },
  ],
  network: [
    {
      question: "Chi sono i partner di Haal Lab?",
      answer:
        "Haal Lab collabora con fornitori di tecnologia (NVIDIA, Hugging Face, Qdrant, Mistral AI, Aleph Alpha), fornitori europei di cloud e infrastrutture (Hetzner, Scaleway, Gaia-X) e istituzioni di ricerca (Fraunhofer, INRIA). Ci concentriamo su modelli a pesi aperti, infrastruttura open-source e sovranità dei dati europea.",
    },
    {
      question: "Haal Lab collabora con istituzioni di ricerca europee?",
      answer:
        "Sì. Collaboriamo con organizzazioni di ricerca europee tra cui Fraunhofer e INRIA su IA applicata, sistemi di recupero, NLP multilingue e metodologia di valutazione. Queste partnership mantengono la nostra ingegneria ancorata nella ricerca attuale.",
    },
    {
      question: "Come divento partner di Haal Lab?",
      answer:
        "Ci associamo con organizzazioni che condividono il nostro impegno per modelli a pesi aperti, sovranità europea e ingegneria di livello produzione. Se sviluppate tecnologia, infrastrutture o ricerca allineata con la nostra pratica, contattateci a hussain.nazary@haal-lab.solutions.",
    },
  ],
  pricing: [
    {
      question: "Quanto costa costruire un sistema di IA con Haal Lab?",
      answer:
        "Haal Lab offre quattro livelli di prezzo: Explorer (€4.900 una tantum) per la validazione della fattibilità, Professional (€14.900 per progetto) per un sistema di IA pronto per la produzione, Enterprise (€39.900+ per impegno) per infrastruttura privata multi-sistema, e Research & Academic (prezzi personalizzati) per laboratori universitari e istituzioni di ricerca.",
    },
    {
      question: "Cosa è incluso nel pacchetto Explorer?",
      answer:
        "Il pacchetto Explorer (€4.900) include un workshop Discovery di 2 ore, un rapporto di fattibilità scritto con bozza di architettura e una prova di concetto funzionante sui vostri dati di esempio – consegnata in 2 settimane. È progettato per validare se l'IA può risolvere il vostro problema specifico prima di impegnare ulteriore budget.",
    },
    {
      question: "Qual è la differenza tra Professional e Enterprise?",
      answer:
        "Professional (€14.900) fornisce un sistema di IA di produzione con integrazione, valutazione e supporto di 30 giorni. Enterprise (€39.900+) aggiunge distribuzione on-premise/isolata, fino a 3 sistemi interconnessi, conformità GDPR e AI Act europeo, ottimizzazione GPU, osservabilità completa, formazione del team e supporto di 90 giorni con SLA.",
    },
    {
      question: "Haal Lab offre tariffe accademiche o di ricerca?",
      answer:
        "Sì. Il nostro livello Research & Academic offre il 30–40% in meno rispetto alle tariffe commerciali, con impegni calibrati su budget di ricerca e cicli di grant. Supportiamo sistemi RAG per corpus di ricerca, infrastruttura di esperimenti riproducibili, modelli a pesi aperti per risultati pubblicabili e co-authorship opzionale sulla progettazione di sistemi.",
    },
    {
      question: "Posso aggiungere servizi al mio pacchetto in seguito?",
      answer:
        "Sì. Haal Lab offre add-on inclusi supporto esteso (€2.400/mese), integrazioni aggiuntive (€3.900/integrazione), workshop di formazione del team (€1.900/sessione) e valutazione e monitoraggio continuo (€2.900/mese). Questi possono essere aggiunti a qualsiasi livello in qualsiasi momento.",
    },
  ],
  howWeWork: [
    {
      question: "Come Haal Lab affronta i progetti IA?",
      answer:
        "Haal Lab segue un processo di ingegneria guidato dalla ricerca: comprendere la sfida, ricercare e esplorare approcci possibili, sperimentare e valutare soluzioni, progettare e sviluppare il sistema, poi distribuire con miglioramento continuo. Ogni progetto inizia con il problema, non con il modello.",
    },
    {
      question: "Cosa succede durante la fase di ricerca ed esplorazione?",
      answer:
        "Prima di impegnarci su un approccio, indaghiamo le tecnologie disponibili e le possibili architetture. Esploriamo diversi metodi IA, valutiamo modelli e tecniche adatti, testiamo possibili architetture e studiamo i compromessi tra prestazioni, costo, sicurezza e scalabilità.",
    },
    {
      question: "Come Haal Lab valuta le soluzioni IA?",
      answer:
        "Costruiamo esperimenti e prototipi per valutare diverse soluzioni prima dell'implementazione completa. Misuriamo efficacia, affidabilità, prestazioni, requisiti di integrazione e sostenibilità a lungo termine per prendere decisioni informate basate sui risultati.",
    },
  ],
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
