"use client";

import { Search, UserSearch } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/providers/LocaleProvider";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";

export function HeroSection() {
    const { t } = useLocale();

    return (
        <section className="relative pt-24 pb-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="z-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--ec-on-surface)] leading-[1.1] tracking-tighter mb-8">
                        {t.landing.hero.title}{" "}
                        <span className="text-[var(--ec-primary)]">{t.landing.hero.highlight}</span>{" "}
                        {t.landing.hero.titleEnd}
                    </h1>
                    <p className="text-xl text-[var(--ec-on-surface-variant)] mb-12 max-w-xl leading-relaxed">
                        {t.landing.hero.subtitle}
                    </p>

                    {/* Global Search Bar */}
                    <div className="bg-[var(--ec-surface-container-lowest)] p-2 rounded-2xl shadow-xl shadow-[var(--ec-on-surface)]/5 flex flex-col md:flex-row gap-2 max-w-2xl ghost-border">
                        <div className="flex-1 flex items-center px-4 gap-3 bg-[var(--ec-surface-container-low)] rounded-xl">
                            <Search className="w-5 h-5 text-[var(--ec-secondary)]" />
                            <Input
                                className="bg-transparent border-none focus-visible:ring-0 shadow-none w-full py-4 text-[var(--ec-on-surface)] placeholder:text-[var(--ec-outline)]"
                                placeholder={t.landing.hero.searchPlaceholder}
                            />
                        </div>
                        <div className="flex-1 flex items-center px-4 gap-3 bg-[var(--ec-surface-container-low)] rounded-xl">
                            <UserSearch className="w-5 h-5 text-[var(--ec-secondary)]" />
                            <Input
                                className="bg-transparent border-none focus-visible:ring-0 shadow-none w-full py-4 text-[var(--ec-on-surface)] placeholder:text-[var(--ec-outline)]"
                                placeholder={t.landing.hero.searchExpertsPlaceholder}
                            />
                        </div>
                        <Button className="signature-gradient px-8 py-4 rounded-xl text-white font-bold hover:opacity-90 transition-opacity h-auto">
                            {t.common.findExpert}
                        </Button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative hidden lg:block">
                    <div className="absolute -top-12 ltr:-right-12 rtl:-left-12 w-96 h-96 bg-[var(--ec-primary-container)]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-2">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6pJwD8lbM--oCHbzKP6VwKXEXBGf1lwc3BbOdrrG9t-CQ5caxwvh_r9YYXemQoYDsTef5HHxrvPVz4Lxeb94oYqjOmSQacbL082542YASY6eyzQCfrgv8jeU2JTtOzIemaKRmR_RPcm7DlUV6wfcEy3asT2e8UN0l3IMB3CWV09DntUA6Nv1faKv9bKh7NEgAaniVIp0VhZqQGmkdi_MD-vZNI0PxY1cAzsV318SgApwowHRJaOI9WRJenE5XgaoucWRc1NPqnQ"
                            alt="Professional Expert"
                            width={600}
                            height={700}
                            className="w-full h-[600px] object-cover"
                            priority
                        />
                        {/* Glass overlay badge */}
                        <div className="absolute bottom-6 ltr:left-6 rtl:right-6 ltr:right-6 rtl:left-6 p-6 glass-panel rounded-2xl border border-white/20">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--ec-primary)] flex items-center justify-center text-white">
                                    <BadgeCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-[var(--ec-on-surface)]">Verified Excellence</p>
                                    <p className="text-sm text-[var(--ec-on-surface-variant)]">Top 1% Global Talent Pool</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
