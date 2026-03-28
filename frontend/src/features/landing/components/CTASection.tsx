"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocale } from "@/providers/LocaleProvider";

export function CTASection() {
    const { t } = useLocale();

    return (
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Client CTA */}
                <div className="bg-[var(--ec-primary)] p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-[2.5rem] text-white relative overflow-hidden group">
                    <div className="absolute -bottom-24 ltr:-right-24 rtl:-left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-125"></div>
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-6 relative z-10">{t.landing.cta.clientTitle}</h3>
                    <p className="text-lg text-white/80 mb-10 max-w-sm relative z-10">{t.landing.cta.clientDesc}</p>
                    <Link
                        href="/register"
                        className="inline-flex items-center justify-center bg-white text-[var(--ec-primary)] px-10 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 active:scale-95 relative z-10 h-auto hover:bg-white/90"
                    >
                        {t.common.signUpAsClient}
                    </Link>
                </div>

                {/* Expert CTA */}
                <div className="bg-[var(--ec-on-surface)] p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-[2.5rem] text-white relative overflow-hidden group">
                    <div className="absolute -bottom-24 ltr:-right-24 rtl:-left-24 w-64 h-64 bg-[var(--ec-primary)]/20 rounded-full blur-3xl transition-transform group-hover:scale-125"></div>
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-6 relative z-10">{t.landing.cta.expertTitle}</h3>
                    <p className="text-lg text-white/80 mb-10 max-w-sm relative z-10">{t.landing.cta.expertDesc}</p>
                    <Link
                        href="/register"
                        className="inline-flex items-center justify-center signature-gradient text-white px-10 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 active:scale-95 relative z-10 h-auto"
                    >
                        {t.common.applyToJoin}
                    </Link>
                </div>
            </div>
        </section>
    );
}
