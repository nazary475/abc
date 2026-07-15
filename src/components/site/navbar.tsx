"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";

export function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const NAV_ITEMS: { label: string; href: "/solutions" | "/projects" | "/research" | "/network" | "/pricing" | "/about" }[] = [
    { label: t("solutions"), href: "/solutions" },
    { label: t("projects"), href: "/projects" },
    { label: t("research"), href: "/research" },
    { label: t("network"), href: "/network" },
    { label: t("pricing"), href: "/pricing" },
    { label: t("about"), href: "/about" },
  ];

  const isActive = (href: string) => {
    // Strip locale prefix from pathname for comparison
    let path = pathname;
    if (locale !== "en" && path.startsWith(`/${locale}`)) {
      path = path.slice(`/${locale}`.length) || "/";
    }
    return path === href || path === `${href}/`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "border-b border-hl-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="hl-container hl-section-pad flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-foreground"
                      : "text-hl-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-hl-cyan" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            asChild
            className="group hidden items-center gap-1.5 rounded-full bg-hl-cyan px-5 py-2.5 text-sm font-semibold text-[#04141A] shadow-sm hover:bg-hl-cyan/90 hover:shadow-[0_0_30px_-8px_rgba(0,224,255,0.5)] lg:inline-flex"
          >
            <Link href="/contact">
              {t("discussProject")}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={t("toggleNav")}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-hl-border text-foreground md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-hl-border bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="hl-container hl-section-pad flex flex-col py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMobile}
                  className={`block w-full py-3 text-left text-base font-medium ${
                    isActive(item.href) ? "text-hl-cyan" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2 border-t border-hl-border pt-4">
              <Button
                asChild
                className="w-full justify-center rounded-full bg-hl-cyan font-semibold text-[#04141A] hover:bg-hl-cyan/90"
              >
                <Link href="/contact" onClick={closeMobile}>
                  {t("discussProject")}
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
