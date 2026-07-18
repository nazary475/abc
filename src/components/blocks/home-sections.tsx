"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Cpu,
  MessagesSquare,
  Database,
  ServerCog,
  Brain,
  ShieldCheck,
  FlaskConical,
  Layers,
  ArrowRight,
  ArrowUpRight,
  GitBranch,
  FileSearch,
  Search,
  Settings2,
  Shield,
  Info,
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
import { ModelSchematic } from "@/components/visuals/model-schematic";
import { ArchitectureDiagram } from "@/components/visuals/architecture-diagram";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/* ---------------- Solutions section ---------------- */

type Solution = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  hasDiagram?: boolean;
  detailContent?: React.ReactNode;
};

const SOLUTIONS: Solution[] = [
  {
    icon: MessagesSquare,
    title: "AI Agents & Business Automation",
    description: "Automate the workflows slowing your organization down.\n\nWe build private AI agents that analyze your processes, identify automation opportunities, and handle repetitive tasks inside your existing environment.\n\nReduce operational costs. Increase team speed. Keep control of your data.",
    bullets: [],
    detailContent: (
      <div className="space-y-6 text-sm leading-relaxed text-hl-muted max-h-[70vh] overflow-y-auto pr-2">
        <p>We analyze your existing workflows to identify processes where AI can reduce manual effort, improve response times, and increase operational efficiency.</p>
        <p>Our process starts by understanding how your teams work: the repetitive tasks they perform, the information they use, the systems they depend on, and where delays or unnecessary costs occur. We then design and deploy private AI agents that automate specific tasks while keeping your organization in control.</p>

        <h4 className="text-foreground font-semibold text-base">How we build automation systems</h4>

        <div>
          <p className="font-semibold text-foreground">1. Workflow analysis</p>
          <p>We study your business processes to identify:</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>Time-consuming manual tasks</li>
            <li>Repetitive decision processes</li>
            <li>Information bottlenecks</li>
            <li>Areas where employees spend time searching, reviewing, or processing data</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-foreground">2. AI system design</p>
          <p>We design agents around your actual operations:</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>Connect only to approved internal systems</li>
            <li>Define what the AI can access and execute</li>
            <li>Create workflows with human approval where required</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-foreground">3. Private deployment</p>
          <p>The AI system runs within your infrastructure or trusted private environment:</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>Your business data remains under your control</li>
            <li>No dependency on external AI platforms</li>
            <li>Your team controls access, operations, and future changes</li>
          </ul>
        </div>

        <h4 className="text-foreground font-semibold text-base">Business impact</h4>

        <div>
          <p className="font-semibold text-foreground">Reduce costs</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>Automate repetitive tasks</li>
            <li>Reduce time spent on manual processing</li>
            <li>Allow teams to focus on higher-value activities</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-foreground">Increase speed</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>Faster access to information</li>
            <li>Faster execution of routine workflows</li>
            <li>Shorter response and processing times</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-foreground">Protect your data</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>AI systems can run inside your own environment</li>
            <li>Data access is controlled by your organization</li>
            <li>Sensitive information does not need to leave your infrastructure</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-foreground">Create competitive advantage</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>Build AI capabilities around your unique workflows</li>
            <li>Preserve operational knowledge</li>
            <li>Create systems competitors cannot simply purchase from a vendor</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-foreground">Maintain ownership</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>Your organization controls the deployment, data, and operations</li>
            <li>The system is built around your requirements, not a third-party platform</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: Database,
    title: "Knowledge Intelligence Systems",
    description: "Turn your organization's information into a strategic advantage.\n\nWe build private AI systems that understand your documents, research, and internal knowledge — helping your teams find trusted answers instantly.\n\nMake better decisions with the knowledge you already own.",
    bullets: [],
  },
  {
    icon: ServerCog,
    title: "Private AI Infrastructure",
    description: "Adopt AI without giving up control.\n\nWe deploy AI systems inside your infrastructure or private environment, keeping your data, security, and operations under your control.\n\nEnterprise AI without external dependency.",
    bullets: [],
  },
  {
    icon: Brain,
    title: "Custom AI Models & Training",
    description: "Build AI capabilities designed specifically for your organization.\n\nWe fine-tune and train AI models for specialized tasks where general-purpose AI is not accurate, efficient, or private enough.\n\nCreate unique AI capabilities around your data and expertise.",
    bullets: [],
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

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <article className="hl-card-hover group flex h-full flex-col rounded-2xl border border-hl-border bg-hl-surface/60 p-6 hl-card-glow">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-hl-border bg-hl-surface-2 text-hl-cyan">
                  <s.icon className="h-5 w-5" />
                </div>
                {s.hasDiagram && <ModelSchematic />}
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-hl-muted whitespace-pre-line">
                {s.description}
              </p>
              {s.detailContent && (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-hl-cyan transition-colors hover:text-hl-cyan/80">
                      <Info className="h-4 w-4" />
                      More info
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{s.title}</DialogTitle>
                    </DialogHeader>
                    {s.detailContent}
                  </DialogContent>
                </Dialog>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      {/* CTA after services */}
      <Reveal delay={0.4}>
        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-hl-border bg-hl-surface/40 p-8 text-center">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            Need an AI system tailored to your organization?
          </h3>
          <p className="max-w-2xl text-sm text-hl-muted">
            Tell us about your requirements, technical environment, and goals. We'll evaluate
            the most appropriate approach.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-6 py-3 text-sm font-bold text-gray-900 transition-all hover:bg-hl-cyan/90 hover:shadow-[0_0_30px_-8px_rgba(96,165,250,0.5)]"
          >
            Request Technical Discussion
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Reveal>
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
      "A platform that lets you run powerful AI models on your own computer , no internet needed, no data sent anywhere. Just install and go.",
    tags: ["Python", "AI Models", "Offline", "Private"],
    metrics: [
      { label: "Runs", value: "On your PC" },
      { label: "Internet", value: "Not needed" },
      { label: "Data sent", value: "None" },
    ],
    accent: "from-[#4AF3F8]/20 to-transparent",
  },
  {
    name: "Legal Intelligence System",
    description:
      "A smart search tool for legal documents. Ask a question in plain language and get the exact paragraph , with the source document cited , even across thousands of files.",
    tags: ["Smart Search", "Multilingual", "Citations", "Document AI"],
    metrics: [
      { label: "Searches", value: "In plain language" },
      { label: "Results", value: "With sources" },
      { label: "Languages", value: "Multi" },
    ],
    accent: "from-[#29C4F8]/20 to-transparent",
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
            href="/how-we-work"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-hl-cyan"
          >
            {t("viewAll")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
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
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                      {p.name}
                    </h3>
                  </div>
                  <Link
                    href="/how-we-work"
                    aria-label={`Open ${p.name} case study`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hl-border text-hl-muted transition-all group-hover:border-hl-cyan/40 group-hover:text-hl-cyan"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <p className="mt-4 text-sm font-medium leading-relaxed text-hl-muted">
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

/* ---------------- Why Haal Lab (Premium version) ---------------- */

const WHY: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Search,
    title: "Research Before Building",
    description:
      "Every AI project starts with understanding, not implementation.\n\nWe study your organization's objectives, workflows, data environment, existing systems, and constraints before choosing an approach.\n\nHaal Lab evaluates different technologies, experiments with possible methods, and identifies the most suitable path based on evidence, ensuring the final system is designed around your actual needs.",
  },
  {
    icon: Settings2,
    title: "Engineered for Your Environment",
    description:
      "AI systems succeed when they fit naturally into the organization using them.\n\nWe design and develop solutions around your infrastructure, operational requirements, and security expectations, rather than forcing your organization to adapt to a predefined technology.\n\nFrom architecture to deployment, every decision is made with your environment and long-term goals in mind.",
  },
  {
    icon: Shield,
    title: "Your Data. Your Infrastructure. Your AI.",
    description:
      "AI should create independence, not dependency.\n\nHaal Lab builds systems where organizations maintain ownership of their data, control over their infrastructure, and visibility into how their AI capabilities operate.\n\nYour knowledge stays yours. Your AI capabilities stay yours.",
  },
];

export function WhySection() {
  return (
    <SectionShell id="why" className="border-y border-hl-border bg-hl-surface/30">
      <SectionHeader
        eyebrow="Why HAAL Lab"
        heading="Why Organizations Choose HAAL Lab"
        lead="Three commitments that shape everything we build , and every relationship we have with clients."
      />

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.1}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-hl-border bg-hl-surface/60 p-8 hl-card-glow transition-all hover:border-hl-cyan/40">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-hl-cyan/10 to-transparent blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-hl-border bg-hl-surface-2 text-hl-cyan transition-colors group-hover:border-hl-cyan/40">
                    <w.icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-hl-muted/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground">
                  {w.title}
                </h3>
                <div className="mt-3 space-y-3">
                  {w.description.split("\n\n").map((paragraph, j) => (
                    <p key={j} className="text-base leading-relaxed text-justify text-hl-muted">
                      {paragraph}
                    </p>
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

/* ---------------- Services ---------------- */

const SERVICES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Cpu,
    title: "Custom AI Development",
    description:
      "AI systems built specifically for your business problem , not generic tools repackaged.",
  },
  {
    icon: FileSearch,
    title: "Smart Document Search",
    description:
      "AI that reads your documents and answers questions with sources you can verify.",
  },
  {
    icon: GitBranch,
    title: "AI Integration",
    description:
      "We connect AI capabilities into your existing software , safely and reliably.",
  },
  {
    icon: Layers,
    title: "Workflow Automation",
    description:
      "AI that handles repetitive tasks so your team can focus on higher-value work.",
  },
  {
    icon: ServerCog,
    title: "Private AI Setup",
    description:
      "We install and configure AI to run entirely on your own computers , no cloud required.",
  },
  {
    icon: FlaskConical,
    title: "AI Advisory",
    description:
      "Not sure where to start? We help you understand what AI can do for your business , in plain language.",
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

      <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hl-border bg-hl-border sm:grid-cols-2 lg:grid-cols-3">
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
              <p className="mt-2 text-sm font-medium leading-relaxed text-hl-muted">
                {s.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Architecture Visual ---------------- */

export function ArchitectureSection() {
  return (
    <SectionShell id="architecture">
      <SectionHeader
        eyebrow="Architecture"
        heading="From Data to Intelligence"
        lead="A modern AI knowledge platform transforms your documents, databases, and data sources into actionable intelligence."
      />

      <div className="mt-14">
        <Reveal>
          <div className="hidden md:block relative aspect-[2/1] w-full overflow-hidden rounded-3xl border border-hl-border bg-hl-surface/60 p-8 hl-card-glow md:p-12">
            <div className="absolute inset-0 hl-grid-bg-fine opacity-50" />
            <div className="absolute inset-0 hl-radial-glow opacity-40" />
            <div className="relative h-full">
              <ArchitectureDiagram />
            </div>
          </div>
        </Reveal>

        {/* CTA below diagram */}
        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-col items-center gap-4 text-center">
            <p className="max-w-2xl text-sm leading-relaxed text-hl-muted">
              Every system we build is designed for your specific data sources, workflows, and
              requirements. No generic solutions.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-hl-border bg-hl-surface/60 px-6 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-hl-cyan/40 hover:text-hl-cyan"
            >
              Discuss Your Architecture
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ---------------- About (homepage teaser) ---------------- */

export function AboutTeaserSection() {
  const t = useTranslations("aboutTeaser");

  return (
    <SectionShell id="about">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
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
                { label: "Approach", value: "Built for you" },
                { label: "Delivery", value: "End-to-end" },
                { label: "Method", value: "Research-led" },
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
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-hl-cyan px-6 py-3.5 text-sm font-bold text-gray-900 transition-all hover:bg-hl-cyan/90 hover:shadow-[0_0_40px_-8px_rgba(96,165,250,0.6)]"
                >
                  {t("contactUs")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="mailto:hussain.nazary@haal-lab.solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-hl-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-hl-cyan/40 hover:text-hl-cyan"
                >
                  hussain.nazary@haal-lab.solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
