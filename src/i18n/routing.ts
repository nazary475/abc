import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

/**
 * Internationalization routing configuration for Haal Lab.
 *
 * Supported locales: English (default), German, French, Spanish, Italian.
 * These cover the most widely spoken official languages of the EU.
 *
 * URL structure (localePrefix: "always" — required for static export):
 *   /en/...      → English
 *   /de/...      → German
 *   /fr/...      → French
 *   /es/...      → Spanish
 *   /it/...      → Italian
 *
 * The root path (/) redirects to /en/ (the default locale).
 */

export const locales = ["en", "de", "fr", "es", "it"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  de: "🇩🇪",
  fr: "🇫🇷",
  es: "🇪🇸",
  it: "🇮🇹",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});

// Create navigation utilities that automatically handle locale prefixes.
// Use these instead of next/link and next/navigation in components.
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
