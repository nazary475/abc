"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Reveal, Eyebrow, SectionHeading, Lead } from "@/components/blocks/primitives";
import { PARTNERS, PARTNER_CATEGORIES } from "@/lib/network";

/**
 * PartnersSection , logo grid showing technology, infrastructure, cloud,
 * and research partners.
 */
export function PartnersSection({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  const t = useTranslations("partners");
  const partners = variant === "compact" ? PARTNERS.slice(0, 8) : PARTNERS;

  return (
    <section
      className="hl-container hl-section-pad py-12 md:py-14 border-t border-hl-border"
      aria-labelledby="partners-heading"
    >
      <Reveal>
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <SectionHeading id="partners-heading" className="mt-4">
          {t("title")}
        </SectionHeading>
        <Lead className="mt-4">
          {t("lead")}
        </Lead>
      </Reveal>

      {variant === "full" && (
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {PARTNER_CATEGORIES.map((c, i) => (
              <span
                key={c}
                className={`inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider ${
                  i === 0
                    ? "border-hl-cyan/40 bg-hl-cyan/10 text-hl-cyan"
                    : "border-hl-border bg-hl-surface/40 text-hl-muted"
                }`}
              >
                {c}
              </span>
            ))}
            <span className="ml-auto font-mono text-[11px] uppercase tracking-wider text-hl-muted">
              {t("count", { count: PARTNERS.length })}
            </span>
          </div>
        </Reveal>
      )}

      <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hl-border bg-hl-border sm:grid-cols-3 lg:grid-cols-4">
        {partners.map((partner, i) => (
          <Reveal key={partner.id} delay={i * 0.03}>
            <Link
              href={partner.url as any}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col items-start gap-4 bg-hl-surface/80 p-6 transition-colors hover:bg-hl-surface-2"
              aria-label={`${partner.name} , ${partner.category} partner (opens in new tab)`}
            >
              <div className="flex w-full items-center justify-between">
                {partner.logoUrl ? (
                  <div className="flex h-12 w-20 items-center justify-center rounded-lg border border-hl-border bg-white p-2 transition-colors group-hover:border-hl-cyan/40">
                    <img
                      src={partner.logoUrl}
                      alt={`${partner.name} logo`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-hl-border bg-hl-surface-2 font-mono text-sm font-bold tracking-tight text-foreground/80 transition-colors group-hover:border-hl-cyan/40 group-hover:text-hl-cyan">
                    {partner.monogram}
                  </div>
                )}
                <span className="font-mono text-[10px] uppercase tracking-wider text-hl-muted/60">
                  {partner.category}
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-hl-cyan">
                  {partner.name}
                </h3>
                {variant === "full" && (
                  <p className="mt-1.5 text-xs leading-relaxed text-hl-muted">
                    {partner.description}
                  </p>
                )}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {variant === "compact" && (
        <Reveal delay={0.2}>
          <Link
            href="/network"
            className="group mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-hl-cyan"
          >
            {t("viewAll")}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </Reveal>
      )}
    </section>
  );
}
