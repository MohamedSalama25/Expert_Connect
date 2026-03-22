"use client";

import Link from "next/link";
import { Share2, Globe2 } from "lucide-react";
import { useLocale } from "@/providers/LocaleProvider";

export function Footer() {
    const { t } = useLocale();

    return (
        <footer className="bg-[var(--ec-surface)] border-t border-[var(--ec-surface-container-low)]">
            <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Column */}
                <div className="md:col-span-1">
                    <span className="text-xl font-bold text-[var(--ec-on-surface)] mb-6 block">
                        {t.common.brandName}
                    </span>
                    <p className="text-[var(--ec-secondary)] text-sm leading-relaxed mb-6">
                        {t.footer.description}
                    </p>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-[var(--ec-surface-container)] flex items-center justify-center text-[var(--ec-primary)] cursor-pointer hover:bg-[var(--ec-primary)] hover:text-white transition-colors">
                            <Share2 className="w-5 h-5" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[var(--ec-surface-container)] flex items-center justify-center text-[var(--ec-primary)] cursor-pointer hover:bg-[var(--ec-primary)] hover:text-white transition-colors">
                            <Globe2 className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Links Columns */}
                <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-[var(--ec-on-surface)]">{t.footer.platform}</h4>
                        <Link href="/" className="text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-colors text-sm">{t.footer.aboutUs}</Link>
                        <Link href="/" className="text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-colors text-sm">{t.footer.expertFaq}</Link>
                        <Link href="/" className="text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-colors text-sm">{t.footer.howItWorks}</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-[var(--ec-on-surface)]">{t.footer.legal}</h4>
                        <Link href="/" className="text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-colors text-sm">{t.footer.termsOfService}</Link>
                        <Link href="/" className="text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-colors text-sm">{t.footer.privacyPolicy}</Link>
                        <Link href="/" className="text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-colors text-sm">{t.footer.contactSupport}</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-[var(--ec-on-surface)]">{t.footer.community}</h4>
                        <Link href="/" className="text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-colors text-sm">{t.footer.caseStudies}</Link>
                        <Link href="/" className="text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-colors text-sm">{t.footer.expertBlog}</Link>
                        <Link href="/" className="text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-colors text-sm">{t.footer.events}</Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-8 py-6 border-t border-[var(--ec-surface-container-low)]/20 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm tracking-wide text-[var(--ec-secondary)]">
                    {t.footer.copyright}
                </p>
                <div className="flex gap-6">
                    <span className="text-xs text-[var(--ec-secondary)]/60">{t.footer.systemOperational}</span>
                    <span className="text-xs text-[var(--ec-secondary)]/60">{t.footer.version}</span>
                </div>
            </div>
        </footer>
    );
}
