"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Logo } from "./logo";
import { Github, Linkedin, Mail, ArrowUpRight, ArrowRight } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const FOOTER_LINKS: { label: string; href: "/solutions" | "/how-we-work" | "/research" | "/network" | "/about" | "/contact" }[] = [
    { label: tNav("solutions"), href: "/solutions" },
    { label: tNav("howWeWork"), href: "/how-we-work" },
    { label: tNav("research"), href: "/research" },
    { label: tNav("network"), href: "/network" },
    { label: tNav("about"), href: "/about" },
    { label: tNav("contact"), href: "/contact" },
  ];

  return (
    <footer className="mt-auto border-t border-hl-border bg-hl-surface/40">
      {/* CTA Section */}
      <div className="border-b border-hl-border">
        <div className="hl-container hl-section-pad py-12 md:py-14">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              {t("readyToStart")}
            </h2>
            <p className="mt-4 max-w-2xl text-base text-hl-muted md:text-lg">
              Tell us about your requirements and goals. Our engineering team will evaluate the best approach.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-6 py-3.5 text-sm font-bold text-gray-900 transition-all hover:bg-hl-cyan/90 hover:shadow-[0_0_30px_-8px_rgba(96,165,250,0.5)]"
              >
                {t("contactHaalLab")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="mailto:contact@haal-lab.solutions"
                className="inline-flex items-center gap-2 rounded-full border border-hl-border bg-hl-surface/60 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-hl-cyan/40 hover:text-hl-cyan"
              >
                <Mail className="h-4 w-4" />
                contact@haal-lab.solutions
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hl-container hl-section-pad py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-hl-muted">
              {t("description")}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href="https://github.com/haal-lab" label="GitHub">
                <Github className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/company/haal-lab" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="mailto:hussain.nazary@haal-lab.solutions" label="Email">
                <Mail className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          {/* Pages */}
          <div className="md:col-span-3">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80">
              {t("pages")}
            </h2>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-hl-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="mb-3">
              <span className="inline-block rounded-full border-2 border-hl-cyan bg-hl-cyan/20 px-4 py-1 font-mono text-xs font-extrabold uppercase tracking-widest text-hl-cyan shadow-[0_0_16px_-4px_rgba(96,165,250,0.6)]">
                Founder
              </span>
            </div>
            <div className="flex items-start gap-4">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border-2 border-hl-border bg-hl-surface-2">
                <Image
                  src="/jaafar-najafi-rad.jpg"
                  alt="Jaafar Najafi Rad"
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">
                  Jaafar Najafi Rad
                </h3>
                <p className="mt-1 font-mono text-sm font-bold uppercase tracking-wider text-hl-cyan">
                  Phd, Smart Aerospace an autonomous System
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-hl-border pt-6 text-xs text-hl-muted sm:flex-row sm:items-center">
          <p>{t("rights", { year: new Date().getFullYear() })}</p>
          <p className="font-mono uppercase tracking-wider">
            Engineering Intelligent Systems
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const isExternal = !href.startsWith("mailto:") && !href.startsWith("/");
  return (
    <a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hl-border text-hl-muted transition-all hover:border-hl-cyan/50 hover:text-hl-cyan"
    >
      {children}
    </a>
  );
}
