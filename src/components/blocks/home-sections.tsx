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

function buildDetailContent(t: ReturnType<typeof useTranslations>, cardKey: string): React.ReactNode {
  const phase1Items = (t.raw(`${cardKey}.phase1Items`) as string[]) || [];
  const phase2Items = (t.raw(`${cardKey}.phase2Items`) as string[]) || [];
  const phase3Items = (t.raw(`${cardKey}.phase3Items`) as string[]) || [];
  const impact1Items = (t.raw(`${cardKey}.impact1Items`) as string[]) || [];
  const impact2Items = (t.raw(`${cardKey}.impact2Items`) as string[]) || [];
  const impact3Items = (t.raw(`${cardKey}.impact3Items`) as string[]) || [];
  const impact4Items = (t.raw(`${cardKey}.impact4Items`) as string[]) || [];
  const impact5Items = (t.raw(`${cardKey}.impact5Items`) as string[]) || [];
  const phase1ApproachItems = (t.raw(`${cardKey}.phase1ApproachItems`) as string[]) || [];

  const renderList = (items: string[]) => (
    <ul className="mt-1 list-disc pl-5 space-y-1">
      {items.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
    </ul>
  );

  return (
    <div className="space-y-6 text-sm leading-relaxed text-hl-muted max-h-[70vh] overflow-y-auto pr-2">
      <p>{t(`${cardKey}.detailIntro1`)}</p>
      <p>{t(`${cardKey}.detailIntro2`)}</p>

      <h4 className="text-foreground font-semibold text-base">{t(`${cardKey}.phaseTitle`)}</h4>

      <div>
        <p className="font-semibold text-foreground">{t(`${cardKey}.phase1Title`)}</p>
        <p>{t(`${cardKey}.phase1Desc`)}</p>
        {renderList(phase1Items)}
        {phase1ApproachItems.length > 0 && (
          <>
            <p className="mt-3">{t(`${cardKey}.phase1Approach`)}</p>
            {renderList(phase1ApproachItems)}
          </>
        )}
      </div>

      <div>
        <p className="font-semibold text-foreground">{t(`${cardKey}.phase2Title`)}</p>
        <p>{t(`${cardKey}.phase2Desc`)}</p>
        {renderList(phase2Items)}
      </div>

      <div>
        <p className="font-semibold text-foreground">{t(`${cardKey}.phase3Title`)}</p>
        <p>{t(`${cardKey}.phase3Desc`)}</p>
        {renderList(phase3Items)}
      </div>

      <h4 className="text-foreground font-semibold text-base">{t(`${cardKey}.impactTitle`)}</h4>

      <div>
        <p className="font-semibold text-foreground">{t(`${cardKey}.impact1Title`)}</p>
        {renderList(impact1Items)}
      </div>
      <div>
        <p className="font-semibold text-foreground">{t(`${cardKey}.impact2Title`)}</p>
        {renderList(impact2Items)}
      </div>
      <div>
        <p className="font-semibold text-foreground">{t(`${cardKey}.impact3Title`)}</p>
        {renderList(impact3Items)}
      </div>
      <div>
        <p className="font-semibold text-foreground">{t(`${cardKey}.impact4Title`)}</p>
        {renderList(impact4Items)}
      </div>
      <div>
        <p className="font-semibold text-foreground">{t(`${cardKey}.impact5Title`)}</p>
        {renderList(impact5Items)}
      </div>
    </div>
  );
}

function getSolutions(t: ReturnType<typeof useTranslations>): Solution[] {
  return [
    {
      icon: MessagesSquare,
      title: t("cards.card1.title"),
      description: t("cards.card1.description"),
      bullets: [],
      detailContent: buildDetailContent(t, "cards.card1"),
    },
    {
      icon: Database,
      title: t("cards.card2.title"),
      description: t("cards.card2.description"),
      bullets: [],
      detailContent: buildDetailContent(t, "cards.card2"),
    },
    {
      icon: ServerCog,
      title: t("cards.card3.title"),
      description: t("cards.card3.description"),
      bullets: [],
      detailContent: buildDetailContent(t, "cards.card3"),
    },
    {
      icon: Brain,
      title: t("cards.card4.title"),
      description: t("cards.card4.description"),
      bullets: [],
      detailContent: buildDetailContent(t, "cards.card4"),
    },
  ];
}

export function SolutionsSection() {
  const t = useTranslations("solutions");
  const SOLUTIONS = getSolutions(t);

  return (
    <SectionShell id="solutions">
      <SectionHeader
        eyebrow={t("eyebrow")}
        heading={t("title")}
        lead={t("lead")}
      />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
                      {t("moreInfo")}
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
            {t("ctaTitle")}
          </h3>
          <p className="max-w-2xl text-sm text-hl-muted">
            {t("ctaDescription")}
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-6 py-3 text-sm font-bold text-gray-900 transition-all hover:bg-hl-cyan/90 hover:shadow-[0_0_30px_-8px_rgba(96,165,250,0.5)]"
          >
            {t("ctaButton")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Reveal>
    </SectionShell>
  );
}

/* ---------------- Featured Projects ---------------- */

function getProjects(t: ReturnType<typeof useTranslations>) {
  return [
    {
      name: t("projectsList.item1.name"),
      description: t("projectsList.item1.description"),
      tags: (t.raw("projectsList.item1.tags") as string[]) || [],
      metrics: [
        { label: t("projectsList.item1.metrics.label1"), value: t("projectsList.item1.metrics.value1") },
        { label: t("projectsList.item1.metrics.label2"), value: t("projectsList.item1.metrics.value2") },
        { label: t("projectsList.item1.metrics.label3"), value: t("projectsList.item1.metrics.value3") },
      ],
      accent: "from-[#4AF3F8]/20 to-transparent",
    },
    {
      name: t("projectsList.item2.name"),
      description: t("projectsList.item2.description"),
      tags: (t.raw("projectsList.item2.tags") as string[]) || [],
      metrics: [
        { label: t("projectsList.item2.metrics.label1"), value: t("projectsList.item2.metrics.value1") },
        { label: t("projectsList.item2.metrics.label2"), value: t("projectsList.item2.metrics.value2") },
        { label: t("projectsList.item2.metrics.label3"), value: t("projectsList.item2.metrics.value3") },
      ],
      accent: "from-[#29C4F8]/20 to-transparent",
    },
  ];
}

export function ProjectsSection() {
  const t = useTranslations("projects");
  const PROJECTS = getProjects(t);

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
                      {String(i + 1).padStart(2, "0")} {t("projectsList.projectPrefix")}
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

const WHY_ICONS = [Search, Settings2, Shield];

function getWhyItems(t: ReturnType<typeof useTranslations>) {
  return [
    { icon: Search, title: t("items.item1.title"), description: t("items.item1.description") },
    { icon: Settings2, title: t("items.item2.title"), description: t("items.item2.description") },
    { icon: Shield, title: t("items.item3.title"), description: t("items.item3.description") },
  ];
}

export function WhySection() {
  const t = useTranslations("why");
  const WHY = getWhyItems(t);

  return (
    <SectionShell id="why" className="border-y border-hl-border bg-hl-surface/30">
      <SectionHeader
        eyebrow={t("sectionEyebrow")}
        heading={t("sectionHeading")}
        lead={t("sectionLead")}
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

const SERVICE_ICONS = [Cpu, FileSearch, GitBranch, Layers, ServerCog, FlaskConical];

function getServices(t: ReturnType<typeof useTranslations>) {
  return [
    { icon: Cpu, title: t("services.items.item1.title"), description: t("services.items.item1.description") },
    { icon: FileSearch, title: t("services.items.item2.title"), description: t("services.items.item2.description") },
    { icon: GitBranch, title: t("services.items.item3.title"), description: t("services.items.item3.description") },
    { icon: Layers, title: t("services.items.item4.title"), description: t("services.items.item4.description") },
    { icon: ServerCog, title: t("services.items.item5.title"), description: t("services.items.item5.description") },
    { icon: FlaskConical, title: t("services.items.item6.title"), description: t("services.items.item6.description") },
  ];
}

export function ServicesSection() {
  const t = useTranslations("services");
  const SERVICES = getServices(t);

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
  const t = useTranslations("architecture");

  return (
    <SectionShell id="architecture">
      <SectionHeader
        eyebrow={t("eyebrow")}
        heading={t("heading")}
        lead={t("lead")}
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
              {t("description")}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-hl-border bg-hl-surface/60 px-6 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-hl-cyan/40 hover:text-hl-cyan"
            >
              {t("ctaButton")}
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
              {(["focus", "approach", "delivery", "method"] as const).map((key) => (
                <div key={key}>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-hl-muted">
                    {t(`details.${key}.label`)}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{t(`details.${key}.value`)}</dd>
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
