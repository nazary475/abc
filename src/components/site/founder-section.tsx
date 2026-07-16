"use client";

import Image from "next/image";
import {
  Reveal,
  SectionShell,
} from "@/components/blocks/primitives";

/**
 * FounderSection — compact showcase of the founder with photo and brief bio.
 */
export function FounderSection() {
  return (
    <SectionShell className="border-t border-hl-border bg-hl-surface/30">
      <div>
        <Reveal>
            <div className="relative">
              <div className="mb-5">
                <span className="inline-block rounded-full border-2 border-hl-cyan bg-hl-cyan/20 px-6 py-2.5 font-mono text-sm font-extrabold uppercase tracking-widest text-hl-cyan shadow-[0_0_20px_-4px_rgba(96,165,250,0.6)]">
                  Founder
                </span>
              </div>
              <div className="relative overflow-hidden rounded-3xl border-2 border-hl-border bg-hl-surface/60 p-8 hl-card-glow">
                {/* Photo Container - Even larger size */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-hl-border bg-hl-surface-2">
                  <Image
                    src="/jaafar-najafi-rad.jpg"
                    alt="Jaafar Najafi Rad - Founder of Haal Lab"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 55vw"
                    priority
                  />
                </div>

                {/* Info Card - Name and Title */}
                <div className="relative mt-6 rounded-2xl border-2 border-hl-border bg-hl-surface/80 p-6 backdrop-blur">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    Jaafar Najafi Rad
                  </h3>
                  <p className="mt-2 font-mono text-xl font-bold uppercase tracking-wider text-hl-cyan md:text-2xl">
                    Phd, Smart Aerospace an autonomous System
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

      </div>
    </SectionShell>
  );
}
