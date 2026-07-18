"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  FileSearch,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Workflow,
  Database,
  Target,
  BookOpen,
  Users,
  Zap,
} from "lucide-react";
import {
  Reveal,
  SectionShell,
  SectionHeader,
  Tag,
} from "@/components/blocks/primitives";

type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  contextTitle: string;
  contextItems: string[];
  challengeTitle: string;
  challengeItems: string[];
  approachTitle: string;
  approachItems: string[];
  considerationsTitle: string;
  considerationsItems: string[];
  outcomeTitle: string;
  outcomeItems: string[];
  accentGradient: string;
};

function getCaseStudies(t: ReturnType<typeof useTranslations>): CaseStudy[] {
  return [
    {
      id: "knowledge-discovery",
      eyebrow: t("studies.study1.eyebrow"),
      title: t("studies.study1.title"),
      description: t("studies.study1.description"),
      tags: (t.raw("studies.study1.tags") as string[]) || [],
      contextTitle: t("contextTitle"),
      contextItems: (t.raw("studies.study1.contextItems") as string[]) || [],
      challengeTitle: t("challengeTitle"),
      challengeItems: (t.raw("studies.study1.challengeItems") as string[]) || [],
      approachTitle: t("approachTitle"),
      approachItems: (t.raw("studies.study1.approachItems") as string[]) || [],
      considerationsTitle: t("considerationsTitle"),
      considerationsItems: (t.raw("studies.study1.considerationsItems") as string[]) || [],
      outcomeTitle: t("outcomeTitle"),
      outcomeItems: (t.raw("studies.study1.outcomeItems") as string[]) || [],
      accentGradient: "from-hl-cyan/20 to-transparent",
    },
    {
      id: "intelligent-assistance",
      eyebrow: t("studies.study2.eyebrow"),
      title: t("studies.study2.title"),
      description: t("studies.study2.description"),
      tags: (t.raw("studies.study2.tags") as string[]) || [],
      contextTitle: t("contextTitle"),
      contextItems: (t.raw("studies.study2.contextItems") as string[]) || [],
      challengeTitle: t("challengeTitle"),
      challengeItems: (t.raw("studies.study2.challengeItems") as string[]) || [],
      approachTitle: t("approachTitle"),
      approachItems: (t.raw("studies.study2.approachItems") as string[]) || [],
      considerationsTitle: t("considerationsTitle"),
      considerationsItems: (t.raw("studies.study2.considerationsItems") as string[]) || [],
      outcomeTitle: t("outcomeTitle"),
      outcomeItems: (t.raw("studies.study2.outcomeItems") as string[]) || [],
      accentGradient: "from-[#6EA8FF]/20 to-transparent",
    },
    {
      id: "secure-infrastructure",
      eyebrow: t("studies.study3.eyebrow"),
      title: t("studies.study3.title"),
      description: t("studies.study3.description"),
      tags: (t.raw("studies.study3.tags") as string[]) || [],
      contextTitle: t("contextTitle"),
      contextItems: (t.raw("studies.study3.contextItems") as string[]) || [],
      challengeTitle: t("challengeTitle"),
      challengeItems: (t.raw("studies.study3.challengeItems") as string[]) || [],
      approachTitle: t("approachTitle"),
      approachItems: (t.raw("studies.study3.approachItems") as string[]) || [],
      considerationsTitle: t("considerationsTitle"),
      considerationsItems: (t.raw("studies.study3.considerationsItems") as string[]) || [],
      outcomeTitle: t("outcomeTitle"),
      outcomeItems: (t.raw("studies.study3.outcomeItems") as string[]) || [],
      accentGradient: "from-[#29C4F8]/20 to-transparent",
    },
    {
      id: "specialized-models",
      eyebrow: t("studies.study4.eyebrow"),
      title: t("studies.study4.title"),
      description: t("studies.study4.description"),
      tags: (t.raw("studies.study4.tags") as string[]) || [],
      contextTitle: t("contextTitle"),
      contextItems: (t.raw("studies.study4.contextItems") as string[]) || [],
      challengeTitle: t("challengeTitle"),
      challengeItems: (t.raw("studies.study4.challengeItems") as string[]) || [],
      approachTitle: t("approachTitle"),
      approachItems: (t.raw("studies.study4.approachItems") as string[]) || [],
      considerationsTitle: t("considerationsTitle"),
      considerationsItems: (t.raw("studies.study4.considerationsItems") as string[]) || [],
      outcomeTitle: t("outcomeTitle"),
      outcomeItems: (t.raw("studies.study4.outcomeItems") as string[]) || [],
      accentGradient: "from-[#4AF3F8]/20 to-transparent",
    },
  ];
}

export function CaseStudySection() {
  const t = useTranslations("caseStudies");
  const CASE_STUDIES = getCaseStudies(t);

  return (
    <SectionShell id="case-studies" className="border-t border-hl-border bg-hl-surface/30">
      <SectionHeader
        eyebrow={t("eyebrow")}
        heading={t("heading")}
        lead={t("lead")}
      />

      <div className="mt-14 space-y-8">
        {CASE_STUDIES.map((study, index) => (
          <Reveal key={study.id} delay={index * 0.1}>
            <CaseStudyCard study={study} index={index} />
          </Reveal>
        ))}
      </div>

      {/* Bottom CTA */}
      <Reveal delay={0.5}>
        <div className="mt-12 rounded-2xl border border-hl-border bg-hl-surface/40 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                {t("ctaTitle")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-hl-muted">
                {t("ctaDescription")}
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-6 py-3 text-sm font-bold text-gray-900 transition-all hover:bg-hl-cyan/90 hover:shadow-[0_0_30px_-8px_rgba(96,165,250,0.5)] md:shrink-0"
            >
              {t("ctaButton")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const icons = [BookOpen, Workflow, ShieldCheck, Target];
  const Icon = icons[index % icons.length];

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-hl-border bg-hl-surface/60 transition-all hover:border-hl-cyan/40 hl-card-glow">
      {/* Header */}
      <div className="relative border-b border-hl-border bg-hl-surface/40 p-8 md:p-10">
        <div className={`absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br ${study.accentGradient} blur-3xl`} />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-hl-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-hl-cyan" />
                {study.eyebrow}
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {study.title}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-hl-muted">
                {study.description}
              </p>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-hl-border bg-hl-surface-2 text-hl-cyan transition-colors group-hover:border-hl-cyan/40">
              <Icon className="h-6 w-6" />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Context */}
        <CaseStudyContentBlock
          title={study.contextTitle}
          items={study.contextItems}
          icon={FileSearch}
        />

        {/* Challenge */}
        <CaseStudyContentBlock
          title={study.challengeTitle}
          items={study.challengeItems}
          icon={Database}
        />

        {/* Engineering Approach */}
        <CaseStudyContentBlock
          title={study.approachTitle}
          items={study.approachItems}
          icon={Zap}
          className="md:col-span-2 lg:col-span-1"
        />

        {/* Technical Considerations */}
        <CaseStudyContentBlock
          title={study.considerationsTitle}
          items={study.considerationsItems}
          icon={Users}
          className="md:col-span-2 lg:col-span-2"
        />

        {/* Outcome */}
        <CaseStudyContentBlock
          title={study.outcomeTitle}
          items={study.outcomeItems}
          icon={CheckCircle2}
        />
      </div>
    </article>
  );
}

function CaseStudyContentBlock({
  title,
  items,
  icon: Icon,
  className = "",
}: {
  title: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}) {
  return (
    <div className={`border-b border-r border-hl-border p-6 last:border-b-0 md:last:border-b lg:border-b ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-hl-border bg-hl-surface-2 text-hl-cyan">
        <Icon className="h-4 w-4" />
      </div>
      <h4 className="mt-4 text-base font-bold tracking-tight text-foreground">
        {title}
      </h4>
      <ul className="mt-3 space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-hl-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-hl-cyan/60" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
