/**
 * Localized page metadata (titles and descriptions) for all pages.
 * Used to ensure each page has unique, descriptive, keyword-rich titles in the correct language.
 */

import { Locale } from "@/i18n/routing";

export interface PageMetadata {
  title: string;
  description: string;
  ogImage?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
}

export const PAGE_METADATA: Record<string, Record<Locale, PageMetadata>> = {
  home: {
    en: {
      title: "Haal Lab — Private AI Systems for European Organizations",
      description:
        "Haal Lab builds private, on-premises AI systems for European organizations. Deploy LLMs, RAG systems, and custom AI applications on your infrastructure with full data sovereignty.",
    },
    de: {
      title: "Haal Lab — Private KI-Systeme für europäische Organisationen",
      description:
        "Haal Lab entwickelt private, lokale KI-Systeme für europäische Organisationen. LLMs, RAG-Systeme und maßgeschneiderte KI-Anwendungen auf Ihrer Infrastruktur mit vollständiger Datensouveränität.",
    },
    fr: {
      title: "Haal Lab — Systèmes IA privés pour organisations européennes",
      description:
        "Haal Lab construit des systèmes IA privés sur site pour les organisations européennes. Déployez des LLMs, systèmes RAG et applications IA personnalisées sur votre infrastructure avec souveraineté des données.",
    },
    es: {
      title: "Haal Lab — Sistemas IA privados para organizaciones europeas",
      description:
        "Haal Lab construye sistemas IA privados locales para organizaciones europeas. Implemente LLMs, sistemas RAG y aplicaciones IA personalizadas en su infraestructura con soberanía de datos completa.",
    },
    it: {
      title: "Haal Lab — Sistemi IA privati per organizzazioni europee",
      description:
        "Haal Lab costruisce sistemi IA privati on-premise per organizzazioni europee. Implementa LLM, sistemi RAG e applicazioni IA personalizzate sulla tua infrastruttura con piena sovranità dei dati.",
    },
  },
  about: {
    en: {
      title: "About — Private AI Engineering for European Organizations",
      description:
        "Haal Lab is an AI engineering company focused on private, on-premises AI systems for European organizations. Research-driven approach to custom LLM applications, RAG systems, and data sovereignty.",
    },
    de: {
      title: "Über uns — Private KI-Engineering für europäische Organisationen",
      description:
        "Haal Lab ist ein KI-Engineering-Unternehmen, das sich auf private, lokale KI-Systeme für europäische Organisationen konzentriert. Forschungsgetriebener Ansatz für maßgeschneiderte LLM-Anwendungen, RAG-Systeme und Datensouveränität.",
    },
    fr: {
      title: "À propos — Ingénierie IA privée pour organisations européennes",
      description:
        "Haal Lab est une entreprise d'ingénierie IA axée sur les systèmes IA privés sur site pour les organisations européennes. Approche basée sur la recherche pour applications LLM personnalisées, systèmes RAG et souveraineté des données.",
    },
    es: {
      title: "Acerca de — Ingeniería IA privada para organizaciones europeas",
      description:
        "Haal Lab es una empresa de ingeniería IA enfocada en sistemas IA privados locales para organizaciones europeas. Enfoque impulsado por investigación para aplicaciones LLM personalizadas, sistemas RAG y soberanía de datos.",
    },
    it: {
      title: "Chi siamo — Ingegneria IA privata per organizzazioni europee",
      description:
        "Haal Lab è un'azienda di ingegneria IA focalizzata su sistemi IA privati on-premise per organizzazioni europee. Approccio guidato dalla ricerca per applicazioni LLM personalizzate, sistemi RAG e sovranità dei dati.",
    },
  },
  solutions: {
    en: {
      title: "Solutions — Private AI Capabilities for Your Infrastructure",
      description:
        "Four core AI capabilities: On-Premises LLM Systems, Custom AI Applications, RAG & Knowledge Systems, and Private AI Infrastructure. Deploy on your infrastructure with full data control.",
    },
    de: {
      title: "Lösungen — Private KI-Fähigkeiten für Ihre Infrastruktur",
      description:
        "Vier zentrale KI-Fähigkeiten: Lokale LLM-Systeme, maßgeschneiderte KI-Anwendungen, RAG & Wissenssysteme und private KI-Infrastruktur. Bereitstellung auf Ihrer Infrastruktur mit vollständiger Datenkontrolle.",
    },
    fr: {
      title: "Solutions — Capacités IA privées pour votre infrastructure",
      description:
        "Quatre capacités IA principales : systèmes LLM sur site, applications IA personnalisées, systèmes RAG et connaissance, et infrastructure IA privée. Déploiement sur votre infrastructure avec contrôle total des données.",
    },
    es: {
      title: "Soluciones — Capacidades IA privadas para su infraestructura",
      description:
        "Cuatro capacidades IA principales: sistemas LLM locales, aplicaciones IA personalizadas, sistemas RAG y conocimiento, e infraestructura IA privada. Despliegue en su infraestructura con control total de datos.",
    },
    it: {
      title: "Soluzioni — Capacità IA private per la tua infrastruttura",
      description:
        "Quattro capacità IA principali: sistemi LLM on-premise, applicazioni IA personalizzate, sistemi RAG e conoscenza, e infrastruttura IA privata. Distribuzione sulla tua infrastruttura con pieno controllo dei dati.",
    },
  },
  pricing: {
    en: {
      title: "Pricing — Private AI Engineering Packages for European Organizations",
      description:
        "Four packages for private AI deployment: Starter (€1,900), Explorer (€4,900), Professional (€14,900), Enterprise (€39,900+). Custom systems deployed on your infrastructure.",
    },
    de: {
      title: "Preise — Private KI-Engineering-Pakete für europäische Organisationen",
      description:
        "Vier Pakete für private KI-Bereitstellung: Starter (1.900 €), Explorer (4.900 €), Professional (14.900 €), Enterprise (39.900 €+). Maßgeschneiderte Systeme auf Ihrer Infrastruktur.",
    },
    fr: {
      title: "Tarifs — Packages d'ingénierie IA privée pour organisations européennes",
      description:
        "Quatre packages pour déploiement IA privé : Starter (1 900 €), Explorer (4 900 €), Professional (14 900 €), Enterprise (39 900 €+). Systèmes personnalisés déployés sur votre infrastructure.",
    },
    es: {
      title: "Precios — Paquetes de ingeniería IA privada para organizaciones europeas",
      description:
        "Cuatro paquetes para implementación IA privada: Starter (1.900 €), Explorer (4.900 €), Professional (14.900 €), Enterprise (39.900 €+). Sistemas personalizados implementados en su infraestructura.",
    },
    it: {
      title: "Prezzi — Pacchetti di ingegneria IA privata per organizzazioni europee",
      description:
        "Quattro pacchetti per distribuzione IA privata: Starter (1.900 €), Explorer (4.900 €), Professional (14.900 €), Enterprise (39.900 €+). Sistemi personalizzati distribuiti sulla tua infrastruttura.",
    },
  },
  howWeWork: {
    en: {
      title: "How We Work — Research-Driven Custom AI Development",
      description:
        "Haal Lab's engineering process: understanding your requirements, researching solutions, evaluating approaches, building custom systems, and deploying on your infrastructure.",
    },
    de: {
      title: "Wie wir arbeiten — Forschungsgetriebene maßgeschneiderte KI-Entwicklung",
      description:
        "Haal Labs Engineering-Prozess: Ihre Anforderungen verstehen, Lösungen erforschen, Ansätze bewerten, maßgeschneiderte Systeme entwickeln und auf Ihrer Infrastruktur bereitstellen.",
    },
    fr: {
      title: "Comment nous travaillons — Développement IA personnalisé basé sur la recherche",
      description:
        "Le processus d'ingénierie de Haal Lab : comprendre vos besoins, rechercher des solutions, évaluer les approches, construire des systèmes personnalisés et déployer sur votre infrastructure.",
    },
    es: {
      title: "Cómo trabajamos — Desarrollo IA personalizado impulsado por investigación",
      description:
        "El proceso de ingeniería de Haal Lab: comprender sus requisitos, investigar soluciones, evaluar enfoques, construir sistemas personalizados e implementar en su infraestructura.",
    },
    it: {
      title: "Come lavoriamo — Sviluppo IA personalizzato guidato dalla ricerca",
      description:
        "Il processo di ingegneria di Haal Lab: comprendere i tuoi requisiti, ricercare soluzioni, valutare approcci, costruire sistemi personalizzati e distribuire sulla tua infrastruttura.",
    },
  },
  research: {
    en: {
      title: "Research — Technical Articles on Private AI Deployment",
      description:
        "Technical articles on deploying LLMs on-premises, RAG system architecture, BGE-M3 embeddings, evaluation frameworks, and private AI infrastructure for European organizations.",
    },
    de: {
      title: "Forschung — Technische Artikel über private KI-Bereitstellung",
      description:
        "Technische Artikel über die lokale Bereitstellung von LLMs, RAG-Systemarchitektur, BGE-M3-Embeddings, Bewertungsframeworks und private KI-Infrastruktur für europäische Organisationen.",
    },
    fr: {
      title: "Recherche — Articles techniques sur le déploiement IA privé",
      description:
        "Articles techniques sur le déploiement de LLMs sur site, architecture de systèmes RAG, embeddings BGE-M3, frameworks d'évaluation et infrastructure IA privée pour organisations européennes.",
    },
    es: {
      title: "Investigación — Artículos técnicos sobre implementación IA privada",
      description:
        "Artículos técnicos sobre implementación local de LLMs, arquitectura de sistemas RAG, embeddings BGE-M3, frameworks de evaluación e infraestructura IA privada para organizaciones europeas.",
    },
    it: {
      title: "Ricerca — Articoli tecnici sulla distribuzione IA privata",
      description:
        "Articoli tecnici sulla distribuzione on-premise di LLM, architettura di sistemi RAG, embeddings BGE-M3, framework di valutazione e infrastruttura IA privata per organizzazioni europee.",
    },
  },
  network: {
    en: {
      title: "Network — European AI Technology Partners",
      description:
        "Haal Lab's European technology partners: NVIDIA for GPU infrastructure, Hugging Face for open-weight models, Qdrant for vector databases, Mistral AI, Aleph Alpha, Hetzner, Scaleway for European cloud, and research partners.",
    },
    de: {
      title: "Netzwerk — Europäische KI-Technologiepartner",
      description:
        "Haal Labs europäische Technologiepartner: NVIDIA für GPU-Infrastruktur, Hugging Face für Open-Weight-Modelle, Qdrant für Vektordatenbanken, Mistral AI, Aleph Alpha, Hetzner, Scaleway für europäische Cloud und Forschungspartner.",
    },
    fr: {
      title: "Réseau — Partenaires technologiques IA européens",
      description:
        "Partenaires technologiques européens de Haal Lab : NVIDIA pour infrastructure GPU, Hugging Face pour modèles open-weight, Qdrant pour bases vectorielles, Mistral AI, Aleph Alpha, Hetzner, Scaleway pour cloud européen et partenaires de recherche.",
    },
    es: {
      title: "Red — Socios tecnológicos IA europeos",
      description:
        "Socios tecnológicos europeos de Haal Lab: NVIDIA para infraestructura GPU, Hugging Face para modelos open-weight, Qdrant para bases vectoriales, Mistral AI, Aleph Alpha, Hetzner, Scaleway para nube europea y socios de investigación.",
    },
    it: {
      title: "Rete — Partner tecnologici IA europei",
      description:
        "Partner tecnologici europei di Haal Lab: NVIDIA per infrastruttura GPU, Hugging Face per modelli open-weight, Qdrant per database vettoriali, Mistral AI, Aleph Alpha, Hetzner, Scaleway per cloud europeo e partner di ricerca.",
    },
  },
  contact: {
    en: {
      title: "Contact — Start Your Private AI Project",
      description:
        "Contact Haal Lab to discuss your private AI requirements. We build on-premises LLM systems, RAG applications, and custom AI for European organizations. Email: hussain.nazary@haal-lab.solutions",
    },
    de: {
      title: "Kontakt — Starten Sie Ihr privates KI-Projekt",
      description:
        "Kontaktieren Sie Haal Lab, um Ihre privaten KI-Anforderungen zu besprechen. Wir entwickeln lokale LLM-Systeme, RAG-Anwendungen und maßgeschneiderte KI für europäische Organisationen. E-Mail: hussain.nazary@haal-lab.solutions",
    },
    fr: {
      title: "Contact — Démarrez votre projet IA privé",
      description:
        "Contactez Haal Lab pour discuter de vos besoins en IA privée. Nous construisons des systèmes LLM sur site, applications RAG et IA personnalisée pour organisations européennes. Email : hussain.nazary@haal-lab.solutions",
    },
    es: {
      title: "Contacto — Inicie su proyecto IA privado",
      description:
        "Contacte a Haal Lab para discutir sus requisitos de IA privada. Construimos sistemas LLM locales, aplicaciones RAG e IA personalizada para organizaciones europeas. Email: hussain.nazary@haal-lab.solutions",
    },
    it: {
      title: "Contatto — Avvia il tuo progetto IA privato",
      description:
        "Contatta Haal Lab per discutere i tuoi requisiti di IA privata. Costruiamo sistemi LLM on-premise, applicazioni RAG e IA personalizzata per organizzazioni europee. Email: hussain.nazary@haal-lab.solutions",
    },
  },
};

/**
 * Get localized metadata for a specific page and locale.
 */
export function getPageMetadata(page: keyof typeof PAGE_METADATA, locale: Locale): PageMetadata {
  const baseMetadata = PAGE_METADATA[page][locale];
  
  // Add default OG image if not specified
  return {
    ...baseMetadata,
    ogImage: baseMetadata.ogImage || {
      url: "https://haal-lab.solutions/og-image.png",
      width: 1200,
      height: 630,
      alt: "Haal Lab - Private AI Systems for European Organizations",
    },
  };
}
