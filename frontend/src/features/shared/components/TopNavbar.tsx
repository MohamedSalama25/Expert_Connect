"use client";

import Link from "next/link";
import { Globe, Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLocale } from "@/providers/LocaleProvider";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function TopNavbar() {
    const { t, toggleLocale, locale } = useLocale();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="bg-[var(--ec-surface)]/95 backdrop-blur-md sticky top-0 z-50 border-b border-[var(--ec-surface-container-low)]/10">
            <div className="flex justify-between items-center w-full px-6 py-4 max-w-[1440px] mx-auto">
                {/* Logo + Nav Links */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-2xl font-black text-[var(--ec-on-surface)] tracking-tighter">
                        {t.common.brandName}
                    </Link>
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/"
                            className="text-[var(--ec-primary)] font-bold border-b-2 border-[var(--ec-primary)] transition-colors duration-300 pb-0.5"
                        >
                            {t.nav.specialties}
                        </Link>
                        <Link
                            href="/"
                            className="text-[var(--ec-secondary)] font-medium hover:text-[var(--ec-primary)] transition-colors duration-300"
                        >
                            {t.nav.howItWorks}
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-[var(--ec-secondary)] font-medium hover:text-[var(--ec-primary)] transition-colors duration-300"
                        >
                            {t.nav.pricing}
                        </Link>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-2 ltr:mr-4 rtl:ml-4">
                        <button
                            onClick={toggleLocale}
                            className="p-2 text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-colors rounded-lg hover:bg-[var(--ec-surface-container)] cursor-pointer"
                            title={locale === "en" ? "العربية" : "English"}
                        >
                            <Globe className="w-5 h-5" />
                        </button>
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2 text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-colors rounded-lg hover:bg-[var(--ec-surface-container)] cursor-pointer"
                            >
                                <Sun className="w-5 h-5 hidden dark:block" />
                                <Moon className="w-5 h-5 block dark:hidden" />
                            </button>
                        )}
                    </div>
                    <Link
                        href="/login"
                        className="px-5 py-2 text-sm text-[var(--ec-secondary)] font-semibold hover:text-[var(--ec-primary)] transition-colors hidden sm:inline-flex items-center justify-center rounded-lg"
                    >
                        {t.common.signIn}
                    </Link>
                    <Link
                        href="/register"
                        className="px-6 py-2 text-sm signature-gradient text-white rounded-xl font-bold transition-transform active:scale-95 shadow-lg shadow-[var(--ec-primary)]/20 hidden sm:inline-flex hover:opacity-90 items-center justify-center"
                    >
                        {t.common.joinAsExpert}
                    </Link>

                    {/* Mobile Menu */}
                    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                        <SheetTrigger className="md:hidden p-2 text-[var(--ec-secondary)]">
                            <Menu className="w-6 h-6" />
                        </SheetTrigger>
                        <SheetContent side={locale === "ar" ? "right" : "left"} className="w-80 bg-[var(--ec-surface)]">
                            <div className="flex flex-col gap-6 pt-8">
                                <Link href="/" className="text-2xl font-black text-[var(--ec-on-surface)] tracking-tighter">
                                    {t.common.brandName}
                                </Link>
                                <div className="flex flex-col gap-4">
                                    <Link href="/" className="text-[var(--ec-primary)] font-bold text-lg">{t.nav.specialties}</Link>
                                    <Link href="/" className="text-[var(--ec-secondary)] font-medium text-lg hover:text-[var(--ec-primary)]">{t.nav.howItWorks}</Link>
                                    <Link href="/pricing" className="text-[var(--ec-secondary)] font-medium text-lg hover:text-[var(--ec-primary)]">{t.nav.pricing}</Link>
                                </div>
                                <div className="flex flex-col gap-3 mt-4">
                                    <Link
                                        href="/login"
                                        className="w-full py-2 border border-[var(--ec-outline-variant)] text-[var(--ec-secondary)] font-medium rounded-lg text-center hover:bg-[var(--ec-surface-container)] transition-colors"
                                    >
                                        {t.common.signIn}
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="w-full py-2 signature-gradient text-white font-bold rounded-lg text-center hover:opacity-90 transition-opacity"
                                    >
                                        {t.common.joinAsExpert}
                                    </Link>
                                </div>
                                <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-[var(--ec-outline-variant)]/10">
                                    <button
                                        onClick={toggleLocale}
                                        className="flex items-center gap-3 text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-colors"
                                    >
                                        <Globe className="w-5 h-5" />
                                        <span className="font-medium">{locale === "en" ? "العربية" : "English"}</span>
                                    </button>
                                    {mounted && (
                                        <button
                                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                            className="flex items-center gap-3 text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-colors"
                                        >
                                            <div className="hidden dark:flex items-center gap-3">
                                                <Sun className="w-5 h-5" />
                                                <span className="font-medium">Light Mode</span>
                                            </div>
                                            <div className="flex dark:hidden items-center gap-3">
                                                <Moon className="w-5 h-5" />
                                                <span className="font-medium">Dark Mode</span>
                                            </div>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
