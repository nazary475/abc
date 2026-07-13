"use client";

import { useTranslations } from "next-intl";
import { Reveal, Eyebrow, SectionHeading, Lead } from "@/components/blocks/primitives";

/**
 * PageHeader — top hero band for inner pages.
 * Reads translated strings from the "pageHeaders.{pageKey}" namespace.
 */
export function PageHeader({ pageKey }: { pageKey: string }) {
  const t = useTranslations(`pageHeaders.${pageKey}`);

  return (
    <header className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="pointer-events-none absolute inset-0 hl-radial-glow opacity-70" />
      <div className="pointer-events-none absolute inset-0 hl-grid-bg opacity-40" />
      <div className="hl-container hl-section-pad relative">
        <Reveal>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <SectionHeading as="h1" className="mt-5 max-w-4xl">
            {t("title")}
          </SectionHeading>
        </Reveal>
        {t("lead") && (
          <Reveal delay={0.16}>
            <Lead className="mt-5">{t("lead")}</Lead>
          </Reveal>
        )}
        {t("meta") && (
          <Reveal delay={0.24}>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-hl-muted">
              {t("meta")}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
