"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { detectBestLocale, getCookieLocale } from "@/lib/locale-detection";

/**
 * LocaleRedirect — Client-side component that detects the best locale
 * and redirects the user accordingly.
 * 
 * This works with static export (GitHub Pages) since it runs in the browser.
 * 
 * Detection priority:
 * 1. Cookie preference (user previously selected a language)
 * 2. Browser language
 * 3. Browser timezone
 * 4. Default to English
 */
export function LocaleRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    // Check if user has a saved preference
    const cookieLocale = getCookieLocale();
    if (cookieLocale) {
      router.replace(`/${cookieLocale}`);
      return;
    }
    
    // Detect best locale from browser
    const locale = detectBestLocale();
    router.replace(`/${locale}`);
  }, [router]);
  
  // Show a minimal loading state while redirecting
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#080B12',
      color: '#E6EAF2',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <div style={{
        textAlign: 'center',
        padding: '2rem',
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '700',
          marginBottom: '1.5rem',
          color: '#E6EAF2',
        }}>
          Haal Lab — Engineering Intelligent Systems
        </h1>
        <div style={{
          width: '48px',
          height: '48px',
          border: '3px solid #1A2030',
          borderTopColor: '#00E0FF',
          borderRadius: '50%',
          margin: '0 auto 1.5rem',
          animation: 'spin 0.8s linear infinite',
        }} />
        <p style={{
          fontSize: '14px',
          color: '#8A93A6',
          margin: 0,
        }}>
          Loading...
        </p>
      </div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
