"use client";

import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import Cookies from "js-cookie";
import en from "@/config/i18n/en";
import ar from "@/config/i18n/ar";
import {
    Locale,
    LOCALES,
    DEFAULT_LOCALE,
    LOCALE_COOKIE_NAME,
} from "@/config/i18n/types";
import type { TranslationKeys } from "@/config/i18n/en";
import { LocaleContextType, LocaleProviderProps } from "./Types";

const translations: Record<Locale, TranslationKeys> = { en, ar };

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: LocaleProviderProps) {
    const [locale, setLocaleState] = useState<Locale>(() => {
        if (typeof window !== "undefined") {
            const cookieLocale = Cookies.get(LOCALE_COOKIE_NAME) as Locale | undefined;
            if (cookieLocale && LOCALES[cookieLocale]) return cookieLocale;
        }
        return DEFAULT_LOCALE;
    });

    const config = LOCALES[locale];

    const setLocale = useCallback((newLocale: Locale) => {
        Cookies.set(LOCALE_COOKIE_NAME, newLocale, {
            expires: 365,
            sameSite: "lax",
        });
        setLocaleState(newLocale);
    }, []);

    const toggleLocale = useCallback(() => {
        setLocale(locale === "en" ? "ar" : "en");
    }, [locale, setLocale]);

    // Update html dir and lang attributes
    useEffect(() => {
        document.documentElement.setAttribute("dir", config.direction);
        document.documentElement.setAttribute("lang", locale);
    }, [locale, config.direction]);

    const value: LocaleContextType = {
        locale,
        direction: config.direction,
        t: translations[locale],
        setLocale,
        toggleLocale,
    };

    return (
        <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
    );
}

export function useLocale(): LocaleContextType {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error("useLocale must be used within a LocaleProvider");
    }
    return context;
}
