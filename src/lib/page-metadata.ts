/**
 * Localized page metadata (titles and descriptions) for all pages.
 * Used to ensure each page has unique, descriptive, keyword-rich titles in the correct language.
 */

import { Locale } from "@/i18n/routing";

export interface PageMetadata {
  title: string;
  description: string;
}

export const PAGE_METADATA: Record<string, Record<Locale, PageMetadata>> = {
  home: {
    en: {
      title: "Haal Lab — Engineering Intelligent Systems for the Future",
      description:
        "Haal Lab is a deep-tech AI engineering company building private, intelligent, and reliable AI systems — large language model applications, retrieval systems, automation platforms, and private AI infrastructure.",
    },
    de: {
      title: "Haal Lab — Entwicklung intelligenter Systeme für die Zukunft",
      description:
        "Haal Lab ist ein Deep-Tech-KI-Engineering-Unternehmen, das private, intelligente und zuverlässige KI-Systeme entwickelt — Sprachmodellanwendungen, Retrieval-Systeme, Automatisierungsplattformen und private KI-Infrastruktur.",
    },
    fr: {
      title: "Haal Lab — Ingénierie de systèmes intelligents pour l'avenir",
      description:
        "Haal Lab est une entreprise d'ingénierie IA deep-tech qui construit des systèmes IA privés, intelligents et fiables — applications de modèles de langage, systèmes de récupération, plateformes d'automatisation et infrastructure IA privée.",
    },
    es: {
      title: "Haal Lab — Ingeniería de sistemas inteligentes para el futuro",
      description:
        "Haal Lab es una empresa de ingeniería de IA deep-tech que construye sistemas de IA privados, inteligentes y confiables — aplicaciones de modelos de lenguaje, sistemas de recuperación, plataformas de automatización e infraestructura de IA privada.",
    },
    it: {
      title: "Haal Lab — Ingegnerizzazione di sistemi intelligenti per il futuro",
      description:
        "Haal Lab è un'azienda di ingegneria IA deep-tech che costruisce sistemi IA privati, intelligenti e affidabili — applicazioni di modelli linguistici, sistemi di recupero, piattaforme di automazione e infrastruttura IA privata.",
    },
  },
  about: {
    en: {
      title: "About — An AI Engineering Company, Not an Agency",
      description:
        "Haal Lab is an AI engineering company focused on developing intelligent software systems using modern machine learning and language model technologies. Our mission, vision, and engineering principles.",
    },
    de: {
      title: "Über uns — Ein KI-Engineering-Unternehmen, keine Agentur",
      description:
        "Haal Lab ist ein KI-Engineering-Unternehmen, das sich auf die Entwicklung intelligenter Softwaresysteme mit modernen Technologien für maschinelles Lernen und Sprachmodelle konzentriert. Unsere Mission, Vision und Engineering-Prinzipien.",
    },
    fr: {
      title: "À propos — Une entreprise d'ingénierie IA, pas une agence",
      description:
        "Haal Lab est une entreprise d'ingénierie IA axée sur le développement de systèmes logiciels intelligents utilisant des technologies modernes d'apprentissage automatique et de modèles de langage. Notre mission, vision et principes d'ingénierie.",
    },
    es: {
      title: "Acerca de — Una empresa de ingeniería de IA, no una agencia",
      description:
        "Haal Lab es una empresa de ingeniería de IA enfocada en el desarrollo de sistemas de software inteligentes utilizando tecnologías modernas de aprendizaje automático y modelos de lenguaje. Nuestra misión, visión y principios de ingeniería.",
    },
    it: {
      title: "Chi siamo — Un'azienda di ingegneria IA, non un'agenzia",
      description:
        "Haal Lab è un'azienda di ingegneria IA focalizzata sullo sviluppo di sistemi software intelligenti utilizzando tecnologie moderne di apprendimento automatico e modelli linguistici. La nostra missione, visione e principi di ingegneria.",
    },
  },
  solutions: {
    en: {
      title: "Solutions — AI Capabilities Engineered for Production",
      description:
        "Four interlocking AI capabilities from Haal Lab: Local AI Systems, LLM Applications, Knowledge Intelligence, and AI Infrastructure. Each can be delivered standalone or composed into a unified platform.",
    },
    de: {
      title: "Lösungen — KI-Fähigkeiten für die Produktion entwickelt",
      description:
        "Vier ineinandergreifende KI-Fähigkeiten von Haal Lab: Lokale KI-Systeme, LLM-Anwendungen, Wissensintelligenz und KI-Infrastruktur. Jede kann eigenständig geliefert oder zu einer einheitlichen Plattform kombiniert werden.",
    },
    fr: {
      title: "Solutions — Capacités IA conçues pour la production",
      description:
        "Quatre capacités IA interconnectées de Haal Lab : systèmes IA locaux, applications LLM, intelligence des connaissances et infrastructure IA. Chacune peut être livrée de manière autonome ou composée en une plateforme unifiée.",
    },
    es: {
      title: "Soluciones — Capacidades de IA diseñadas para producción",
      description:
        "Cuatro capacidades de IA interconectadas de Haal Lab: sistemas de IA locales, aplicaciones LLM, inteligencia de conocimiento e infraestructura de IA. Cada una puede entregarse de forma independiente o componerse en una plataforma unificada.",
    },
    it: {
      title: "Soluzioni — Capacità IA progettate per la produzione",
      description:
        "Quattro capacità IA interconnesse di Haal Lab: sistemi IA locali, applicazioni LLM, intelligenza della conoscenza e infrastruttura IA. Ognuna può essere fornita autonomamente o composta in una piattaforma unificata.",
    },
  },
  pricing: {
    en: {
      title: "Pricing — AI Engineering Packages for Every Stage",
      description:
        "Five pricing tiers from Haal Lab: Starter (€1,900), Explorer (€4,900), Professional (€14,900), Enterprise (€39,900+), and Research & Academic (custom). Production AI systems — not demos.",
    },
    de: {
      title: "Preise — KI-Engineering-Pakete für jede Phase",
      description:
        "Fünf Preisstufen von Haal Lab: Starter (1.900 €), Explorer (4.900 €), Professional (14.900 €), Enterprise (39.900 €+) und Forschung & Akademisch (individuell). Produktions-KI-Systeme — keine Demos.",
    },
    fr: {
      title: "Tarifs — Packages d'ingénierie IA pour chaque étape",
      description:
        "Cinq niveaux de tarification de Haal Lab : Starter (1 900 €), Explorer (4 900 €), Professional (14 900 €), Enterprise (39 900 €+) et Recherche & Académique (sur mesure). Systèmes IA de production — pas de démos.",
    },
    es: {
      title: "Precios — Paquetes de ingeniería de IA para cada etapa",
      description:
        "Cinco niveles de precios de Haal Lab: Starter (1.900 €), Explorer (4.900 €), Professional (14.900 €), Enterprise (39.900 €+) e Investigación y Académico (personalizado). Sistemas de IA de producción — no demos.",
    },
    it: {
      title: "Prezzi — Pacchetti di ingegneria IA per ogni fase",
      description:
        "Cinque livelli di prezzo di Haal Lab: Starter (1.900 €), Explorer (4.900 €), Professional (14.900 €), Enterprise (39.900 €+) e Ricerca e Accademica (personalizzato). Sistemi IA di produzione — non demo.",
    },
  },
  projects: {
    en: {
      title: "Projects — Technical Case Studies in AI Engineering",
      description:
        "Representative AI engineering projects from Haal Lab, including GGUF Loader (offline LLM platform) and the Legal Intelligence System (semantic retrieval with BGE-M3). Each case study covers the problem, approach, and architecture shipped.",
    },
    de: {
      title: "Projekte — Technische Fallstudien im KI-Engineering",
      description:
        "Repräsentative KI-Engineering-Projekte von Haal Lab, einschließlich GGUF Loader (Offline-LLM-Plattform) und Legal Intelligence System (semantisches Retrieval mit BGE-M3). Jede Fallstudie behandelt das Problem, den Ansatz und die gelieferte Architektur.",
    },
    fr: {
      title: "Projets — Études de cas techniques en ingénierie IA",
      description:
        "Projets d'ingénierie IA représentatifs de Haal Lab, notamment GGUF Loader (plateforme LLM hors ligne) et Legal Intelligence System (récupération sémantique avec BGE-M3). Chaque étude de cas couvre le problème, l'approche et l'architecture livrée.",
    },
    es: {
      title: "Proyectos — Estudios de caso técnicos en ingeniería de IA",
      description:
        "Proyectos de ingeniería de IA representativos de Haal Lab, incluidos GGUF Loader (plataforma LLM sin conexión) y Legal Intelligence System (recuperación semántica con BGE-M3). Cada estudio de caso cubre el problema, el enfoque y la arquitectura entregada.",
    },
    it: {
      title: "Progetti — Casi studio tecnici nell'ingegneria IA",
      description:
        "Progetti di ingegneria IA rappresentativi di Haal Lab, tra cui GGUF Loader (piattaforma LLM offline) e Legal Intelligence System (recupero semantico con BGE-M3). Ogni caso studio copre il problema, l'approccio e l'architettura fornita.",
    },
  },
  research: {
    en: {
      title: "Research — Technical Notes from the Engineering Floor",
      description:
        "Articles, experiments, and AI insights from the Haal Lab team. Technical writing on local LLM inference, reranking, BGE-M3, evaluation-driven CI, agent orchestration, and private AI threat modeling.",
    },
    de: {
      title: "Forschung — Technische Notizen aus der Engineering-Abteilung",
      description:
        "Artikel, Experimente und KI-Einblicke vom Haal Lab-Team. Technische Beiträge zu lokaler LLM-Inferenz, Reranking, BGE-M3, evaluationsgesteuerter CI, Agentenorchestrierung und privater KI-Bedrohungsmodellierung.",
    },
    fr: {
      title: "Recherche — Notes techniques de l'atelier d'ingénierie",
      description:
        "Articles, expériences et insights IA de l'équipe Haal Lab. Écrits techniques sur l'inférence LLM locale, le reclassement, BGE-M3, la CI pilotée par évaluation, l'orchestration d'agents et la modélisation des menaces IA privées.",
    },
    es: {
      title: "Investigación — Notas técnicas del piso de ingeniería",
      description:
        "Artículos, experimentos e insights de IA del equipo de Haal Lab. Escritura técnica sobre inferencia LLM local, reordenación, BGE-M3, CI impulsada por evaluación, orquestación de agentes y modelado de amenazas de IA privada.",
    },
    it: {
      title: "Ricerca — Note tecniche dal piano di ingegneria",
      description:
        "Articoli, esperimenti e approfondimenti IA dal team di Haal Lab. Scrittura tecnica su inferenza LLM locale, riclassificazione, BGE-M3, CI guidata da valutazione, orchestrazione di agenti e modellazione delle minacce IA private.",
    },
  },
  network: {
    en: {
      title: "Network — Partners & Advisors",
      description:
        "Haal Lab's technology, infrastructure, cloud, and research partners — including NVIDIA, Hugging Face, Qdrant, Mistral AI, Aleph Alpha, Hetzner, Scaleway, Gaia-X, Fraunhofer, and INRIA — plus our advisory board of AI, security, privacy, and product experts.",
    },
    de: {
      title: "Netzwerk — Partner & Berater",
      description:
        "Haal Labs Technologie-, Infrastruktur-, Cloud- und Forschungspartner — darunter NVIDIA, Hugging Face, Qdrant, Mistral AI, Aleph Alpha, Hetzner, Scaleway, Gaia-X, Fraunhofer und INRIA — sowie unser Beirat aus KI-, Sicherheits-, Datenschutz- und Produktexperten.",
    },
    fr: {
      title: "Réseau — Partenaires et conseillers",
      description:
        "Partenaires technologiques, d'infrastructure, cloud et de recherche de Haal Lab — notamment NVIDIA, Hugging Face, Qdrant, Mistral AI, Aleph Alpha, Hetzner, Scaleway, Gaia-X, Fraunhofer et INRIA — ainsi que notre conseil consultatif composé d'experts en IA, sécurité, confidentialité et produits.",
    },
    es: {
      title: "Red — Socios y asesores",
      description:
        "Socios de tecnología, infraestructura, nube e investigación de Haal Lab — incluidos NVIDIA, Hugging Face, Qdrant, Mistral AI, Aleph Alpha, Hetzner, Scaleway, Gaia-X, Fraunhofer e INRIA — además de nuestro consejo asesor de expertos en IA, seguridad, privacidad y productos.",
    },
    it: {
      title: "Rete — Partner e consulenti",
      description:
        "Partner tecnologici, infrastrutturali, cloud e di ricerca di Haal Lab — tra cui NVIDIA, Hugging Face, Qdrant, Mistral AI, Aleph Alpha, Hetzner, Scaleway, Gaia-X, Fraunhofer e INRIA — oltre al nostro comitato consultivo di esperti in IA, sicurezza, privacy e prodotti.",
    },
  },
  contact: {
    en: {
      title: "Contact — Start a Conversation with Haal Lab",
      description:
        "Tell us what you are trying to build. Haal Lab responds to every serious inquiry with a concrete technical perspective — usually within two business days. Email: hussain.nazary@haal-lab.solutions",
    },
    de: {
      title: "Kontakt — Beginnen Sie ein Gespräch mit Haal Lab",
      description:
        "Erzählen Sie uns, was Sie entwickeln möchten. Haal Lab antwortet auf jede seriöse Anfrage mit einer konkreten technischen Perspektive — normalerweise innerhalb von zwei Werktagen. E-Mail: hussain.nazary@haal-lab.solutions",
    },
    fr: {
      title: "Contact — Entamez une conversation avec Haal Lab",
      description:
        "Dites-nous ce que vous essayez de construire. Haal Lab répond à chaque demande sérieuse avec une perspective technique concrète — généralement dans les deux jours ouvrables. Email : hussain.nazary@haal-lab.solutions",
    },
    es: {
      title: "Contacto — Inicie una conversación con Haal Lab",
      description:
        "Cuéntenos qué está tratando de construir. Haal Lab responde a cada consulta seria con una perspectiva técnica concreta — generalmente dentro de dos días hábiles. Email: hussain.nazary@haal-lab.solutions",
    },
    it: {
      title: "Contatto — Avvia una conversazione con Haal Lab",
      description:
        "Dicci cosa stai cercando di costruire. Haal Lab risponde a ogni richiesta seria con una prospettiva tecnica concreta — di solito entro due giorni lavorativi. Email: hussain.nazary@haal-lab.solutions",
    },
  },
};

/**
 * Get localized metadata for a specific page and locale.
 */
export function getPageMetadata(page: keyof typeof PAGE_METADATA, locale: Locale): PageMetadata {
  return PAGE_METADATA[page][locale];
}
