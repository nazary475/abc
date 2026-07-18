"use client";

import { useTranslations } from "next-intl";
import {
  Search,
  Layers,
  Code,
  Rocket,
  LineChart,
  ArrowRight,
} from "lucide-react";
import {
  Reveal,
  SectionShell,
  SectionHeader,
} from "@/components/blocks/primitives";

const PHASE_ICONS = [Search, Layers, Code, Rocket, LineChart];

function getProcessPhases(t: ReturnType<typeof useTranslations>) {
  return [
    { icon: Search, title: t("phases.phase1.title"), description: t("phases.phase1.description") },
    { icon: Layers, title: t("phases.phase2.title"), description: t("phases.phase2.description") },
    { icon: Code, title: t("phases.phase3.title"), description: t("phases.phase3.description") },
    { icon: Rocket, title: t("phases.phase4.title"), description: t("phases.phase4.description") },
    { icon: LineChart, title: t("phases.phase5.title"), description: t("phases.phase5.description") },
  ];
}

export function ProcessSection() {
  const t = useTranslations("process");
  const PROCESS_PHASES = getProcessPhases(t);

  return (
    <SectionShell id="process" className="border-y border-hl-border bg-hl-surface/30">
      <SectionHeader
        eyebrow={t("eyebrow")}
        heading={t("heading")}
        lead={t("lead")}
      />

      <div className="mt-14 relative">
        {/* Visual process flow */}
        <div className="relative">
          {PROCESS_PHASES.map((phase, i) => (
            <Reveal key={phase.title} delay={i * 0.1}>
              <div className="relative flex gap-6 pb-12 last:pb-0">
                {/* Timeline connector */}
                <div className="relative flex flex-col items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-hl-cyan/40 bg-hl-surface/80 text-hl-cyan backdrop-blur">
                    <phase.icon className="h-6 w-6" />
                  </div>
                  {i < PROCESS_PHASES.length - 1 && (
                    <div className="absolute top-14 h-full w-px bg-gradient-to-b from-hl-border via-hl-border to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-hl-muted">
                      Phase {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-hl-border" />
                  </div>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                    {phase.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-hl-muted">
                    {phase.description}
                  </p>

                  {/* Arrow indicator for non-last items */}
                  {i < PROCESS_PHASES.length - 1 && (
                    <div className="mt-4 flex items-center gap-2 text-hl-muted/60">
                      <ArrowRight className="h-4 w-4" />
                      <span className="font-mono text-xs uppercase tracking-wider">
                        {t("next")}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Call to action */}
        <Reveal delay={0.6}>
          <div className="mt-8 rounded-2xl border border-hl-border bg-hl-surface/60 p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {t("ctaTitle")}
                </h3>
                <p className="mt-1 text-sm text-hl-muted">
                  {t("ctaDescription")}
                </p>
              </div>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-6 py-3 text-sm font-bold text-gray-900 transition-all hover:bg-hl-cyan/90 hover:shadow-[0_0_30px_-8px_rgba(96,165,250,0.5)] md:shrink-0"
              >
                {t("ctaButton")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
