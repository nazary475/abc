import { PageHeader } from "@/components/blocks/page-header";
import { PartnersSection } from "@/components/site/partners-section";
import { AdvisorsSection } from "@/components/site/advisors-section";
import {
  Reveal,
  SectionShell,
  Eyebrow,
  SectionHeading,
  Lead,
} from "@/components/blocks/primitives";

/** NetworkPage — full partner list + full advisor bios. */
export function NetworkPage() {
  return (
    <>
      <PageHeader pageKey="network" />

      {/* Partners — full variant with descriptions */}
      <PartnersSection variant="full" />

      {/* Advisors — full variant with full bios */}
      <AdvisorsSection variant="full" />

      {/* Become a partner CTA */}
      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-hl-border bg-hl-surface/60 p-10 md:flex-row md:items-center md:justify-between md:p-14 hl-card-glow">
            <div>
              <Eyebrow>Partnership</Eyebrow>
              <SectionHeading className="mt-4">
                Build with us.
              </SectionHeading>
              <Lead className="mt-4">
                We partner with organizations that share our commitment to
                open-weight models, European sovereignty, and production-grade
                engineering. If that sounds like you, let&apos;s talk.
              </Lead>
            </div>
            <a
              href="mailto:hello@haal-lab.solutions"
              className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-6 py-3.5 text-sm font-semibold text-[#04141A] transition-all hover:bg-hl-cyan/90"
            >
              Become a partner
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
