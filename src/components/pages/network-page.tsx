import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/blocks/page-header";
import { PartnersSection } from "@/components/site/partners-section";
import {
  Reveal,
  SectionShell,
  Eyebrow,
  SectionHeading,
  Lead,
} from "@/components/blocks/primitives";

/** NetworkPage — full partner list. */
export function NetworkPage() {
  const t = useTranslations("networkPage");

  return (
    <>
      <PageHeader pageKey="network" />

      {/* Partners — full variant with descriptions */}
      <PartnersSection variant="full" />

      {/* Become a partner CTA */}
      <SectionShell className="border-t border-hl-border">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-hl-border bg-hl-surface/60 p-10 md:flex-row md:items-center md:justify-between md:p-14 hl-card-glow">
            <div>
              <Eyebrow>{t("partnershipEyebrow")}</Eyebrow>
              <SectionHeading className="mt-4">
                {t("partnershipHeading")}
              </SectionHeading>
              <Lead className="mt-4">
                {t("partnershipLead")}
              </Lead>
            </div>
            <a
              href="mailto:hussain.nazary@haal-lab.solutions"
              className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-6 py-3.5 text-sm font-bold text-gray-900 transition-all hover:bg-hl-cyan/90"
            >
              {t("becomePartner")}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
