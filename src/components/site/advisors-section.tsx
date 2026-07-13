"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Linkedin, Github } from "lucide-react";
import { Reveal, Eyebrow, SectionHeading, Lead } from "@/components/blocks/primitives";
import { ADVISORS } from "@/lib/network";

export function AdvisorsSection({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  const t = useTranslations("advisors");
  const advisors = variant === "compact" ? ADVISORS.slice(0, 3) : ADVISORS;

  return (
    <section
      className="hl-container hl-section-pad py-20 md:py-28 border-t border-hl-border bg-hl-surface/30"
      aria-labelledby="advisors-heading"
    >
      <Reveal>
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <SectionHeading id="advisors-heading" className="mt-4">
          {t("title")}
        </SectionHeading>
        <Lead className="mt-4">
          {t("lead")}
        </Lead>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {advisors.map((advisor, i) => (
          <Reveal key={advisor.id} delay={i * 0.06}>
            <article className="hl-card-hover group flex h-full flex-col rounded-2xl border border-hl-border bg-hl-surface/60 p-7 hl-card-glow">
              <div className="flex items-start gap-4">
                {/* Avatar placeholder — replace with <Image src={`/advisors/${advisor.id}.jpg`} /> */}
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-hl-border bg-gradient-to-br from-hl-cyan/20 to-[#6EA8FF]/20 font-mono text-base font-bold tracking-tight text-hl-cyan">
                  {advisor.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {advisor.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-hl-cyan">{advisor.role}</p>
                </div>
              </div>

              {variant === "full" && (
                <p className="mt-5 flex-1 text-sm leading-relaxed text-hl-muted">
                  {advisor.bio}
                </p>
              )}

              {variant === "compact" && (
                <p className="mt-5 flex-1 text-sm leading-relaxed text-hl-muted line-clamp-3">
                  {advisor.bio}
                </p>
              )}

              {/* Expertise tags */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {advisor.expertise.map((exp) => (
                  <span
                    key={exp}
                    className="inline-flex items-center rounded-full border border-hl-border bg-hl-surface-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-hl-muted"
                  >
                    {exp}
                  </span>
                ))}
              </div>

              {/* Social links */}
              {(advisor.linkedin || advisor.github) && (
                <div className="mt-5 flex items-center gap-2 border-t border-hl-border pt-4">
                  {advisor.linkedin && (
                    <Link
                      href={advisor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${advisor.name} on LinkedIn`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-hl-border text-hl-muted transition-all hover:border-hl-cyan/40 hover:text-hl-cyan"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                    </Link>
                  )}
                  {advisor.github && (
                    <Link
                      href={advisor.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${advisor.name} on GitHub`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-hl-border text-hl-muted transition-all hover:border-hl-cyan/40 hover:text-hl-cyan"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              )}
            </article>
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
