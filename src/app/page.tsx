import { redirect } from "next/navigation";

/**
 * Root page — redirects to the default locale (English at /en/).
 *
 * With localePrefix: "always" (required for static export), every locale
 * gets a URL prefix including English. The root path redirects to /en/.
 *
 * For visitors with browser language preferences, a client-side redirect
 * could be added here to detect and redirect to their preferred locale.
 * For now, we default to English.
 */
export default function RootPage() {
  redirect("/en");
}
