"use client";

import { Code2, Scale, Dumbbell, BarChart3, ArrowRight, ArrowLeft } from "lucide-react";
import { useLocale } from "@/providers/LocaleProvider";

const categories = [
    { icon: Code2, labelKey: "technology" as const, descKey: "technologyDesc" as const },
    { icon: Scale, labelKey: "legal" as const, descKey: "legalDesc" as const },
    { icon: Dumbbell, labelKey: "fitness" as const, descKey: "fitnessDesc" as const },
    { icon: BarChart3, labelKey: "business" as const, descKey: "businessDesc" as const },
];

export function CategoriesSection() {
    const { t, direction } = useLocale();
    const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

    return (
        <section className="py-24 bg-[var(--ec-surface-container-low)] px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
                    <div>
                        <span className="text-[var(--ec-primary)] font-bold tracking-widest uppercase text-xs">
                            {t.landing.categories.sectionLabel}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-[var(--ec-on-surface)]">
                            {t.landing.categories.sectionTitle}
                        </h2>
                    </div>
                    <button className="flex items-center gap-2 text-[var(--ec-primary)] font-bold hover:underline">
                        {t.common.viewAll} <ArrowIcon className="w-5 h-5" />
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <div
                                key={cat.labelKey}
                                className="bg-[var(--ec-surface-container-lowest)] p-8 rounded-3xl hover:translate-y-[-8px] transition-transform cursor-pointer border border-transparent hover:border-[var(--ec-primary)]/20 ambient-shadow"
                            >
                                <div className="w-16 h-16 bg-[var(--ec-primary)]/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Icon className="w-8 h-8 text-[var(--ec-primary)]" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-[var(--ec-on-surface)]">
                                    {t.landing.categories[cat.labelKey]}
                                </h3>
                                <p className="text-[var(--ec-on-surface-variant)] text-sm">
                                    {t.landing.categories[cat.descKey]}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
