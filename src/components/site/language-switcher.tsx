"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe, Check, ChevronDown } from "lucide-react";
import { locales, localeNames, type Locale } from "@/i18n/routing";

/**
 * LanguageSwitcher — dropdown that lets visitors switch the site language.
 *
 * On selection, it rewrites the current URL to include the new locale prefix:
 *   English  → no prefix (haal-lab.solutions/...)
 *   Other    → /de/..., /fr/..., /es/..., /it/...
 *
 * Uses next-intl's useLocale + next/navigation's router.
 */
export function LanguageSwitcher() {
  const currentLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchTo = (nextLocale: Locale) => {
    setOpen(false);
    if (nextLocale === currentLocale) return;

    // Strip current locale prefix from pathname
    // With localePrefix: "always", every locale has a prefix (en, de, fr, es, it)
    let path = pathname;
    for (const loc of locales) {
      if (path === `/${loc}` || path.startsWith(`/${loc}/`)) {
        path = path.slice(`/${loc}`.length) || "/";
        break;
      }
    }
    // Remove trailing slash for clean prefixing
    if (path.endsWith("/") && path.length > 1) path = path.slice(0, -1);
    if (!path.startsWith("/")) path = "/" + path;

    // Build new path with the new locale prefix
    const newPath = `/${nextLocale}${path === "/" ? "" : path}`;
    router.push(newPath);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full border border-hl-border bg-hl-surface/40 px-3 py-1.5 text-xs font-medium text-hl-muted transition-colors hover:border-hl-cyan/40 hover:text-foreground"
        aria-label="Select language"
        aria-expanded={open}
      >
        <Globe className="h-3.5 w-3.5" />
        <span className="font-mono uppercase tracking-wider">{currentLocale}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-xl border border-hl-border bg-hl-surface/95 backdrop-blur-xl shadow-2xl z-50">
          <ul className="py-1">
            {locales.map((loc) => (
              <li key={loc}>
                <button
                  type="button"
                  onClick={() => switchTo(loc)}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-hl-surface-2 ${
                    loc === currentLocale ? "text-hl-cyan" : "text-foreground"
                  }`}
                >
                  <span>{localeNames[loc]}</span>
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-hl-muted">
                      {loc}
                    </span>
                    {loc === currentLocale && <Check className="h-3.5 w-3.5" />}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
