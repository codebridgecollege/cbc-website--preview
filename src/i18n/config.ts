export const staticLocale = "en" as const;
export const locales = [staticLocale] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = staticLocale;

export const localeNames: Record<Locale, string> = {
  en: "English",
};
