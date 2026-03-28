export type Locale = "en" | "ar";

export type Direction = "ltr" | "rtl";

export interface LocaleConfig {
  locale: Locale;
  direction: Direction;
  fontFamily: string;
  label: string;
  nativeLabel: string;
}

export const LOCALES: Record<Locale, LocaleConfig> = {
  en: {
    locale: "en",
    direction: "ltr",
    fontFamily: "Inter",
    label: "English",
    nativeLabel: "English",
  },
  ar: {
    locale: "ar",
    direction: "rtl",
    fontFamily: "Alexandria",
    label: "Arabic",
    nativeLabel: "العربية",
  },
};

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE_NAME = "ec_locale";
