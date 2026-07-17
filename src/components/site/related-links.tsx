"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/blocks/primitives";

export function RelatedLinks({
  current,
  title,
  eyebrow,
}: {
  current: string;
  title?: string;
  eyebrow?: string;
}) {
  const t = useTranslations("relatedLinks");
  const tNav = useTranslations("nav");

  const ALL_PAGES: { href: "/solutions" | "/how-we-work" | "/research" | "/network" | "/about" | "/contact" | "/pricing"; label: string; description: string }[] = [
    { href: "/solutions", label: tNav("solutions"), description: "" },
    { href: "/how-we-work", label: tNav("howWeWork"), description: "" },
    { href: "/research", label: tNav("research"), description: "" },
    { href: "/network", label: tNav("network"), description: "" },
    { href: "/about", label: tNav("about"), description: "" },
    { href: "/pricing", label: tNav("pricing"), description: "" },
    { href: "/contact", label: tNav("contact"), description: "" },
  ];

  const related = ALL_PAGES.filter((p) => p.href !== current).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section
      className="hl-container hl-section-pad py-10 md:py-12 border-t border-hl-border bg-hl-surface/30"
      aria-label="Related pages"
    >
      <Reveal>
        <Eyebrow>{eyebrow || t("eyebrow")}</Eyebrow>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {title || t("title")}
        </h2>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {related.map((item, i) => (
          <Reveal key={item.href} delay={i * 0.06}>
            <Link
              href={item.href}
              className="hl-card-hover group flex h-full flex-col rounded-2xl border border-hl-border bg-hl-surface/60 p-7 hl-card-glow"
            >
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {item.label}
              </h3>
              <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-medium text-hl-cyan">
                {t("readMore")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
