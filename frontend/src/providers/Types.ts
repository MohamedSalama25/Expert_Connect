import { Locale } from "@/config/i18n/types";
import type { TranslationKeys } from "@/config/i18n/en";
import React from "react";

export interface LocaleContextType {
    locale: Locale;
    direction: "ltr" | "rtl";
    t: TranslationKeys;
    setLocale: (locale: Locale) => void;
    toggleLocale: () => void;
}

export interface LocaleProviderProps {
    children: React.ReactNode;
}
