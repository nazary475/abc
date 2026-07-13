import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

/**
 * Request-level i18n configuration for next-intl.
 *
 * In next-intl 4.x with static rendering, the locale is set via
 * setRequestLocale() in each page/layout. This config reads it via
 * requestLocale and loads the corresponding messages.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale is a Promise in next-intl 4.x
  const requested = await requestLocale;
  const locale = routing.locales.includes(requested as any)
    ? (requested as string)
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
