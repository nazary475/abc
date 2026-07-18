"use client";

import { useState } from "react";
import { X, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocaleSuggestion } from "@/hooks/use-locale-detection";
import { localeNames } from "@/i18n/routing";
import { saveLocalePreference } from "@/lib/locale-detection";
import { useRouter, usePathname } from "next/navigation";

/**
 * LocaleSuggestionBanner — suggests switching to the user's browser language
 * if it differs from the currently displayed locale.
 * 
 * This banner only appears when:
 * 1. The user hasn't manually selected a language (no cookie preference)
 * 2. Their browser language differs from the current page language
 * 
 * The user can either:
 * - Accept: Switch to their browser language (and save preference)
 * - Dismiss: Stay on current language (dismissed until next session)
 */
export function LocaleSuggestionBanner() {
  const t = useTranslations("localeBanner");
  const { shouldSuggest, suggestedLocale, currentLocale } = useLocaleSuggestion();
  const [dismissed, setDismissed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  if (!shouldSuggest || !suggestedLocale || dismissed) {
    return null;
  }
  
  const handleAccept = () => {
    // Save preference
    saveLocalePreference(suggestedLocale);
    
    // Build new path with suggested locale
    let path = pathname;
    if (path === `/${currentLocale}` || path.startsWith(`/${currentLocale}/`)) {
      path = path.slice(`/${currentLocale}`.length) || "/";
    }
    if (path.endsWith("/") && path.length > 1) path = path.slice(0, -1);
    if (!path.startsWith("/")) path = "/" + path;
    
    const newPath = `/${suggestedLocale}${path === "/" ? "" : path}`;
    router.push(newPath);
  };
  
  const handleDismiss = () => {
    setDismissed(true);
  };
  
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="rounded-xl border border-hl-cyan/20 bg-hl-surface/95 backdrop-blur-xl shadow-2xl p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <Globe className="h-5 w-5 text-hl-cyan" />
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground mb-1">
              {t("title")}
            </p>
            <p className="text-xs text-hl-muted">
              {t("description")}{" "}
              <span className="font-medium text-foreground">
                {localeNames[suggestedLocale]}
              </span>
              ?
            </p>
            
            <div className="flex gap-2 mt-3">
              <button
                onClick={handleAccept}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-hl-cyan text-gray-900 font-bold hover:bg-hl-cyan/90 transition-colors"
              >
                {t("switchTo", { locale: localeNames[suggestedLocale] })}
              </button>
              <button
                onClick={handleDismiss}
                className="px-3 py-1.5 text-xs font-medium rounded-lg text-hl-muted hover:text-foreground hover:bg-hl-surface-2 transition-colors"
              >
                {t("stayIn", { locale: localeNames[currentLocale] })}
              </button>
            </div>
          </div>
          
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 text-hl-muted hover:text-foreground transition-colors"
            aria-label={t("dismiss")}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
