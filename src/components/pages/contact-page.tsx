import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/blocks/page-header";
import {
  Reveal,
  SectionShell,
  Eyebrow,
} from "@/components/blocks/primitives";
import { EnterpriseContactForm } from "./enterprise-contact-form";

export function ContactPage() {
  return (
    <>
      <PageHeader pageKey="contact" />

      <SectionShell className="border-t border-hl-border">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Form column */}
          <div className="lg:col-span-7">
            <Reveal>
              <EnterpriseContactForm />
            </Reveal>
          </div>

          {/* Side column */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <div className="rounded-2xl border border-hl-border bg-hl-surface/60 p-7">
                  <Eyebrow>Direct</Eyebrow>
                  <h2 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                    Email
                  </h2>
                  <a
                    href="mailto:contact@haal-lab.solutions"
                    className="group mt-2 inline-flex items-center gap-2 text-base text-hl-cyan hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    contact@haal-lab.solutions
                  </a>
                  <p className="mt-4 text-sm leading-relaxed text-hl-muted">
                    For AI project inquiries, technical discussions, and partnerships. Our engineering team reviews every message.
                  </p>
                </div>

                <div className="rounded-2xl border border-hl-border bg-hl-surface/60 p-7">
                  <Eyebrow>Channels</Eyebrow>
                  <h2 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                    Elsewhere
                  </h2>
                  <ul className="mt-4 space-y-3">
                    <ChannelRow
                      href="https://github.com/haal-lab"
                      icon={<Github className="h-4 w-4" />}
                      label="GitHub"
                      handle="@haal-lab"
                    />
                    <ChannelRow
                      href="https://www.linkedin.com/company/haal-lab"
                      icon={<Linkedin className="h-4 w-4" />}
                      label="LinkedIn"
                      handle="Haal Lab"
                    />
                    <ChannelRow
                      href="mailto:contact@haal-lab.solutions"
                      icon={<Mail className="h-4 w-4" />}
                      label="Email"
                      handle="contact@haal-lab.solutions"
                    />
                  </ul>
                </div>

                <div className="rounded-2xl border border-hl-border bg-hl-surface/40 p-7">
                  <Eyebrow>Response time</Eyebrow>
                  <p className="mt-4 text-sm leading-relaxed text-hl-muted">
                    We typically reply within{" "}
                    <span className="text-foreground">two business days</span>. If your
                    inquiry is time-sensitive, mention it in the form — we will prioritize
                    accordingly.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionShell>
    </>
  );
}

function ChannelRow({
  href,
  icon,
  label,
  handle,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  handle: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        className="group flex items-center gap-3 rounded-lg border border-transparent p-2 -mx-2 transition-colors hover:border-hl-border hover:bg-hl-surface-2"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-hl-border bg-hl-surface-2 text-hl-muted transition-colors group-hover:text-hl-cyan">
          {icon}
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-medium text-foreground">{label}</span>
          <span className="text-xs text-hl-muted">{handle}</span>
        </span>
        <ArrowRight className="ml-auto h-4 w-4 text-hl-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
      </a>
    </li>
  );
}
