"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Mail, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import { HeroVisual } from "@/components/visuals/hero-visual";
import { Reveal } from "@/components/blocks/primitives";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 hl-radial-glow" />
      <div className="pointer-events-none absolute inset-0 hl-grid-bg opacity-60" />

      <div className="hl-container hl-section-pad relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Copy column */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-hl-border bg-hl-surface/60 px-3 py-1.5 backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hl-cyan opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-hl-cyan" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-hl-muted">
                  {t("badge")}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]">
                <span className="hl-text-gradient">{t("title1")}</span>
                <br />
                <span className="hl-text-gradient">{t("title2")}</span>{" "}
                <span className="hl-text-cyan-gradient">{t("title3")}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-hl-muted md:text-lg">
                {t("subtitle")}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-6 py-3.5 text-sm font-semibold text-[#04141A] transition-all hover:bg-hl-cyan/90 hover:shadow-[0_0_40px_-8px_rgba(0,224,255,0.6)]"
                >
                  {t("discussProject")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-hl-border bg-hl-surface/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-hl-cyan/40 hover:text-hl-cyan"
                >
                  {t("exploreWork")}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { icon: ShieldCheck, label: t("feature1") },
                  { icon: Terminal, label: t("feature2") },
                  { icon: Sparkles, label: t("feature3") },
                ].map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 text-xs text-hl-muted"
                  >
                    <Icon className="h-3.5 w-3.5 text-hl-cyan" />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Visual column */}
          <div className="lg:col-span-6">
            <Reveal delay={0.2}>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-hl-border bg-hl-surface/40 backdrop-blur hl-card-glow"
              >
                <div className="absolute inset-0 hl-grid-bg-fine opacity-50" />
                <div className="absolute inset-0 p-4">
                  <HeroVisual />
                </div>
                <div className="absolute left-4 top-4 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-hl-muted">
                    haal-lab · data-to-intelligence
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute bottom-4 right-4 rounded-lg border border-hl-border bg-background/80 px-3 py-2 backdrop-blur"
                >
                  <p className="font-mono text-[10px] uppercase tracking-wider text-hl-muted">
                    Your data
                  </p>
                  <p className="font-mono text-sm font-bold text-hl-cyan">→ Intelligence</p>
                </motion.div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
