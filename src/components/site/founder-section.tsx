"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import {
  Reveal,
  SectionShell,
  Eyebrow,
  SectionHeading,
  Lead,
} from "@/components/blocks/primitives";

/**
 * FounderSection — showcases the founder with photo and bio.
 */
export function FounderSection() {
  return (
    <SectionShell className="border-t border-hl-border bg-hl-surface/30">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Content Column */}
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>Founder</Eyebrow>
            <SectionHeading className="mt-4">
              Building the future of private AI
            </SectionHeading>
            <Lead className="mt-6">
              Haal Lab was founded by Jaafar Najafi Rad, an AI engineer with a vision to
              make advanced AI systems accessible, private, and truly owned by the
              organizations that use them.
            </Lead>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 space-y-4">
              <p className="text-base leading-relaxed text-foreground/90">
                With deep expertise in machine learning, language models, and production AI
                systems, Jaafar recognized a critical gap: organizations needed AI solutions
                that respected data sovereignty, ran on their own infrastructure, and
                didn&apos;t compromise on capability or privacy.
              </p>
              <p className="text-base leading-relaxed text-foreground/90">
                Haal Lab embodies this vision — an engineering-first company building
                intelligent systems with open-weight models, transparent architectures, and
                a commitment to putting control back in the hands of those who deploy AI.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-5 py-3 text-sm font-semibold text-[#04141A] transition-all hover:bg-hl-cyan/90"
              >
                Learn more about us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-hl-border bg-hl-surface/40 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-hl-cyan/40 hover:text-hl-cyan"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Photo Column */}
        <div className="lg:col-span-5">
          <Reveal delay={0.15}>
            <div className="relative">
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl border border-hl-border bg-hl-surface/60 p-6 hl-card-glow">
                <div className="pointer-events-none absolute inset-0 hl-grid-bg-fine opacity-50" />
                
                {/* Photo Container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-hl-border bg-hl-surface-2">
                  {/* Placeholder for founder photo */}
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-hl-surface-2 to-hl-surface">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-hl-border bg-hl-surface-2">
                        <span className="text-4xl font-bold text-hl-cyan">JN</span>
                      </div>
                      <p className="font-mono text-xs uppercase tracking-wider text-hl-muted">
                        Photo Coming Soon
                      </p>
                    </div>
                  </div>
                  
                  {/* Uncomment this when photo is added */}
                  {/* <Image
                    src="/founder-jaafar-najafi-rad.jpg"
                    alt="Jaafar Najafi Rad - Founder of Haal Lab"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    priority
                  /> */}
                </div>

                {/* Info Card */}
                <div className="relative mt-4 rounded-xl border border-hl-border bg-hl-surface/80 p-4 backdrop-blur">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    Jaafar Najafi Rad
                  </h3>
                  <p className="mt-1 font-mono text-sm uppercase tracking-wider text-hl-cyan">
                    Founder · Haal Lab
                  </p>
                  
                  {/* Social Links */}
                  <div className="mt-4 flex items-center gap-2">
                    <a
                      href="https://www.linkedin.com/in/jaafar-najafi-rad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-hl-border bg-hl-surface-2 text-hl-muted transition-colors hover:border-hl-cyan/40 hover:text-hl-cyan"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="https://github.com/jaafarnajafirad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-hl-border bg-hl-surface-2 text-hl-muted transition-colors hover:border-hl-cyan/40 hover:text-hl-cyan"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href="mailto:hussain.nazary@haal-lab.solutions"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-hl-border bg-hl-surface-2 text-hl-muted transition-colors hover:border-hl-cyan/40 hover:text-hl-cyan"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-hl-cyan/10 blur-3xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
