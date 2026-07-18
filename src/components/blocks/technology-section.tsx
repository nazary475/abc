"use client";

import { useTranslations } from "next-intl";
import {
  Brain,
  Search,
  Database,
  ShieldCheck,
  FileSearch,
  Layers,
  LineChart,
  Lock,
  FileText,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  Reveal,
  SectionShell,
  SectionHeader,
} from "@/components/blocks/primitives";

type Technology = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const TECHNOLOGIES: Technology[] = [
  {
    icon: Brain,
    title: "Large Language Models",
    description:
      "Advanced transformer-based models for understanding and generating human language at scale.",
  },
  {
    icon: Sparkles,
    title: "Retrieval-Augmented Generation",
    description:
      "Combine neural generation with precise information retrieval for factual, verifiable responses.",
  },
  {
    icon: Database,
    title: "Vector Search",
    description:
      "High-dimensional semantic search enabling AI to find meaning across millions of documents.",
  },
  {
    icon: FileSearch,
    title: "Enterprise Search",
    description:
      "Production-grade search systems with relevance tuning, filtering, and source attribution.",
  },
  {
    icon: LineChart,
    title: "Model Evaluation",
    description:
      "Rigorous testing frameworks to measure accuracy, relevance, and performance over time.",
  },
  {
    icon: Layers,
    title: "AI Infrastructure",
    description:
      "Scalable, reliable deployment architectures from single servers to distributed clusters.",
  },
  {
    icon: ShieldCheck,
    title: "Observability",
    description:
      "Comprehensive monitoring, logging, and alerting for production AI systems.",
  },
  {
    icon: Lock,
    title: "Security & Privacy",
    description:
      "End-to-end encryption, access controls, and data isolation for sensitive workloads.",
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    description:
      "Extract structure, meaning, and relationships from PDFs, contracts, and unstructured text.",
  },
  {
    icon: Search,
    title: "Knowledge Discovery",
    description:
      "Surface insights, patterns, and connections hidden across your organization's data.",
  },
];

export function TechnologySection() {
  return (
    <SectionShell id="technology">
      <SectionHeader
        eyebrow="Technology Stack"
        heading="Technology Foundations"
        lead="Production-grade AI systems built on proven technologies , not experimental frameworks."
      />

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hl-border bg-hl-border sm:grid-cols-2 lg:grid-cols-3">
        {TECHNOLOGIES.map((tech, i) => (
          <Reveal key={tech.title} delay={i * 0.04}>
            <article className="group relative flex h-full flex-col bg-hl-surface/90 p-6 transition-colors hover:bg-hl-surface-2">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-hl-border bg-hl-surface-2 text-hl-cyan transition-colors group-hover:border-hl-cyan/40">
                  <tech.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-hl-muted/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">
                {tech.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-hl-muted">
                {tech.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
