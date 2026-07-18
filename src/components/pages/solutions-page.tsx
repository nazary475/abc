"use client";

import { Link } from "@/i18n/routing";
import {
  Cpu,
  MessagesSquare,
  Database,
  ServerCog,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/blocks/page-header";
import {
  Reveal,
  SectionShell,
  Eyebrow,
  SectionHeading,
  Lead,
} from "@/components/blocks/primitives";

const CAP_IDS = ["local-ai", "llm-applications", "knowledge-intelligence", "ai-infrastructure"] as const;
const ICONS: Record<string, LucideIcon> = {
  "local-ai": Cpu,
  "llm-applications": MessagesSquare,
  "knowledge-intelligence": Database,
  "ai-infrastructure": ServerCog,
};

export function SolutionsPage() {
  const t = useTranslations("solutions");

  return (
    <>
      <PageHeader pageKey="solutions" />

      {/* Capability deep-dives */}
      <div className="hl-container hl-section-pad divide-y divide-hl-border">
        {CAP_IDS.map((id, idx) => {
          const Icon = ICONS[id];
          const cap = t.raw(`caps.${id}`) as { title: string; tagline: string; overview: string; capabilities: string[]; stack: string[] };
          return (
            <section key={id} id={id} className="py-10 md:py-14">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <Reveal>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-hl-border bg-hl-surface-2 text-hl-cyan">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-hl-muted">
                        {String(idx + 1).padStart(2, "0")} / {t("capabilityLabel")}
                      </span>
                    </div>
                    <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                      {cap.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-hl-muted">
                      {cap.tagline}
                    </p>
                  </Reveal>
                </div>

                <div className="lg:col-span-7">
                  <Reveal delay={0.1}>
                    <p className="text-base leading-relaxed text-foreground/90">
                      {cap.overview}
                    </p>

                    <h3 className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-hl-muted">
                      {t("whatWeDeliver")}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {cap.capabilities.map((c: string) => (
                        <li key={c} className="flex items-start gap-3 text-sm text-foreground/90">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-hl-cyan" />
                          {c}
                        </li>
                      ))}
                    </ul>

                    <h3 className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-hl-muted">
                      {t("stackLabel")}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cap.stack.map((s: string) => (
                        <span
                          key={s}
                          className="inline-flex items-center rounded-full border border-hl-border bg-hl-surface-2 px-2.5 py-1 font-mono text-[11px] tracking-wide text-hl-muted"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Engagement model */}
      <SectionShell className="border-t border-hl-border bg-hl-surface/30">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow>{t("engagementEyebrow")}</Eyebrow>
            <SectionHeading className="mt-4">{t("engagementTitle")}</SectionHeading>
            <Lead className="mt-4">
              {t("engagementLead")}
            </Lead>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hl-border bg-hl-border md:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="h-full bg-hl-surface/80 p-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-hl-cyan">
                  {t(`engagementSteps.${i}.step`)}
                </span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                  {t(`engagementSteps.${i}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-hl-muted">
                  {t(`engagementSteps.${i}.description`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-hl-border bg-hl-surface/40 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {t("wantWalkthrough")}
              </h3>
              <p className="mt-1 text-sm text-hl-muted">
                {t("walkthroughDesc")}
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-5 py-3 text-sm font-bold text-gray-900 transition-all hover:bg-hl-cyan/90"
            >
              {t("bookCall")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
