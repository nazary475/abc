"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Cpu,
  MessagesSquare,
  Database,
  ServerCog,
  ShieldCheck,
  FlaskConical,
  Layers,
  ArrowRight,
  ArrowUpRight,
  GitBranch,
  FileSearch,
  type LucideIcon,
} from "lucide-react";
import {
  Reveal,
  Eyebrow,
  SectionHeading,
  Lead,
  Tag,
  SectionShell,
  SectionHeader,
} from "@/components/blocks/primitives";

/* ---------------- Solutions section ---------------- */

const SOLUTIONS: {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
}[] = [
  {
    icon: Cpu,
    title: "Local AI Systems",
    description: "Private AI solutions that run securely on your infrastructure.",
    bullets: ["On-prem inference", "Air-gapped deployment", "Data sovereignty"],
  },
  {
    icon: MessagesSquare,
    title: "LLM Applications",
    description: "Custom AI assistants, agents, and intelligent automation systems.",
    bullets: ["Agent orchestration", "Tool-augmented LLMs", "Workflow automation"],
  },
  {
    icon: Database,
    title: "Knowledge Intelligence",
    description: "Advanced RAG systems, semantic search, and document intelligence.",
    bullets: ["Hybrid retrieval", "Reranking pipelines", "Document understanding"],
  },
  {
    icon: ServerCog,
    title: "AI Infrastructure",
    description: "Deployment, optimization, and scalable AI engineering.",
    bullets: ["Model serving", "GPU optimization", "Observability"],
  },
];

export function SolutionsSection() {
  const t = useTranslations("solutions");

  return (
    <SectionShell id="solutions">
      <SectionHeader
        eyebrow={t("eyebrow")}
        heading={t("title")}
        lead={t("lead")}
      />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SOLUTIONS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <article className="hl-card-hover group flex h-full flex-col rounded-2xl border border-hl-border bg-hl-surface/60 p-6 hl-card-glow">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-hl-border bg-hl-surface-2 text-hl-cyan">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-hl-muted">
                {s.description}
              </p>
              <ul className="mt-4 space-y-1.5">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-hl-muted/80"
                  >
                    <span className="h-1 w-1 rounded-full bg-hl-cyan/60" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/solutions"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground opacity-0 transition-all group-hover:opacity-100"
              >
                {t("learnMore")}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Featured Projects ---------------- */

const PROJECTS: {
  name: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accent: string;
}[] = [
  {
    name: "GGUF Loader",
    description:
      "An offline AI platform enabling users to run large language models locally with privacy and control. Built around the GGUF format with CUDA acceleration and retrieval-augmented generation.",
    tags: ["Python", "LLMs", "GGUF", "RAG", "CUDA"],
    metrics: [
      { label: "Runtime", value: "Local" },
      { label: "Stack", value: "CUDA" },
      { label: "Mode", value: "Offline" },
    ],
    accent: "from-[#00E0FF]/20 to-transparent",
  },
  {
    name: "Legal Intelligence System",
    description:
      "A semantic retrieval system designed for complex document analysis and knowledge discovery. Combines BGE-M3 embeddings, vector search, reranking, and OCR over heterogeneous legal corpora.",
    tags: ["BGE-M3", "Vector Database", "Reranking", "OCR"],
    metrics: [
      { label: "Embedder", value: "BGE-M3" },
      { label: "Pipeline", value: "Rerank" },
      { label: "Sources", value: "OCR" },
    ],
    accent: "from-[#6EA8FF]/20 to-transparent",
  },
];

export function ProjectsSection() {
  const t = useTranslations("projects");

  return (
    <SectionShell id="projects" className="border-y border-hl-border bg-hl-surface/30">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={t("title")}
          lead={t("lead")}
        />
        <Reveal delay={0.2}>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-hl-cyan"
          >
            {t("viewAll")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <article className="hl-card-hover group relative h-full overflow-hidden rounded-2xl border border-hl-border bg-hl-surface/60 p-8 hl-card-glow">
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${p.accent}`} />
              <div className={`pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br ${p.accent} blur-3xl`} />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-hl-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-hl-cyan" />
                      {String(i + 1).padStart(2, "0")} / Project
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                      {p.name}
                    </h3>
                  </div>
                  <Link
                    href="/projects"
                    aria-label={`Open ${p.name} case study`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hl-border text-hl-muted transition-all group-hover:border-hl-cyan/40 group-hover:text-hl-cyan"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-hl-muted">
                  {p.description}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-hl-border pt-5">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-hl-muted">
                        {m.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground">{m.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Why Haal Lab ---------------- */

const WHY: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "Building AI systems where your data remains under your control. We design for local execution, encrypted pipelines, and zero data leakage by default — never as an afterthought.",
  },
  {
    icon: FlaskConical,
    title: "Research Driven",
    description:
      "Transforming modern AI research into practical solutions. We track the frontier — from retrieval architectures to inference acceleration — and translate it into engineering that ships.",
  },
  {
    icon: Layers,
    title: "Engineering Excellence",
    description:
      "Designing reliable AI systems from prototype to production. Observability, evaluation, and reproducibility are built into every layer of the stack we deliver.",
  },
];

export function WhySection() {
  const t = useTranslations("why");

  return (
    <SectionShell id="why">
      <SectionHeader
        eyebrow={t("eyebrow")}
        heading={t("title")}
        lead={t("lead")}
      />

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.1}>
            <article className="relative h-full rounded-2xl border border-hl-border bg-hl-surface/40 p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-hl-border bg-hl-surface-2 text-hl-cyan">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                {w.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-hl-muted">
                {w.description}
              </p>
              <span className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-wider text-hl-muted/50">
                0{i + 1}
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Services ---------------- */

const SERVICES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Cpu,
    title: "Custom AI Development",
    description:
      "Bespoke AI systems designed from first principles — from problem framing to deployed model pipelines.",
  },
  {
    icon: FileSearch,
    title: "Retrieval-Augmented Generation",
    description:
      "Production RAG systems with hybrid retrieval, reranking, and evaluation harnesses you can trust.",
  },
  {
    icon: GitBranch,
    title: "LLM Integration",
    description:
      "Embedding language models into your products with tooling, guardrails, and observability.",
  },
  {
    icon: Layers,
    title: "AI Automation",
    description:
      "Agent-based automation that handles real workflows — not just demos — with human-in-the-loop safety.",
  },
  {
    icon: ServerCog,
    title: "Private AI Deployment",
    description:
      "On-prem and air-gapped deployment of open models, tuned for your hardware and your data boundaries.",
  },
  {
    icon: FlaskConical,
    title: "AI Consulting",
    description:
      "Architecture review, feasibility studies, and roadmap design for organizations adopting AI seriously.",
  },
];

export function ServicesSection() {
  const t = useTranslations("services");

  return (
    <SectionShell id="services" className="border-t border-hl-border bg-hl-surface/30">
      <SectionHeader
        eyebrow={t("eyebrow")}
        heading={t("title")}
        lead={t("lead")}
      />

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hl-border bg-hl-border sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <article className="group flex h-full flex-col bg-hl-surface/80 p-7 transition-colors hover:bg-hl-surface-2">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-hl-border bg-hl-surface-2 text-hl-cyan">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-hl-muted/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-hl-muted">
                {s.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- About (homepage teaser) ---------------- */

export function AboutTeaserSection() {
  const t = useTranslations("aboutTeaser");

  return (
    <SectionShell id="about">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <SectionHeading className="mt-4">
              {t("title")}
            </SectionHeading>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-foreground/90">
              {t("body1")}
            </p>
            <p className="mt-5 text-base leading-relaxed text-hl-muted">
              {t("body2")}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-hl-border pt-8 sm:grid-cols-4">
              {[
                { label: "Focus", value: "Private AI" },
                { label: "Stack", value: "LLM · RAG · Infra" },
                { label: "Engineering", value: "End-to-end" },
                { label: "Approach", value: "Research-led" },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-hl-muted">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-hl-cyan"
            >
              {t("readMission")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------------- Contact CTA (homepage) ---------------- */

export function ContactCtaSection() {
  const t = useTranslations("contactCta");

  return (
    <SectionShell id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-hl-border bg-hl-surface/60 p-10 md:p-16 hl-card-glow">
          <div className="pointer-events-none absolute inset-0 hl-grid-bg-fine opacity-50" />
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-hl-cyan/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#6EA8FF]/10 blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Eyebrow>{t("eyebrow")}</Eyebrow>
              <SectionHeading className="mt-4">
                {t("title")}
              </SectionHeading>
              <Lead className="mt-4">
                {t("lead")}
              </Lead>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-hl-cyan px-6 py-3.5 text-sm font-semibold text-[#04141A] transition-all hover:bg-hl-cyan/90 hover:shadow-[0_0_40px_-8px_rgba(0,224,255,0.6)]"
                >
                  {t("contactUs")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="mailto:hello@haal-lab.solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-hl-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-hl-cyan/40 hover:text-hl-cyan"
                >
                  hello@haal-lab.solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
