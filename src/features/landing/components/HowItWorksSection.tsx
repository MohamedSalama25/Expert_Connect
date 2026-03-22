"use client";

import { useLocale } from "@/providers/LocaleProvider";

const steps = [
    { stepKey: "step1Title" as const, descKey: "step1Desc" as const, num: "1" },
    { stepKey: "step2Title" as const, descKey: "step2Desc" as const, num: "2" },
    { stepKey: "step3Title" as const, descKey: "step3Desc" as const, num: "3" },
];

export function HowItWorksSection() {
    const { t } = useLocale();

    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[var(--ec-on-surface)]">
                    {t.landing.howItWorks.title}
                </h2>
                <p className="text-[var(--ec-on-surface-variant)] max-w-2xl mx-auto">
                    {t.landing.howItWorks.subtitle}
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 relative">
                {/* Connective Line */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[var(--ec-outline-variant)]/20 -z-10"></div>

                {steps.map((step) => (
                    <div key={step.num} className="bg-[var(--ec-surface)] p-8 text-center flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full signature-gradient flex items-center justify-center text-white text-3xl font-black mb-8 border-8 border-[var(--ec-surface)]">
                            {step.num}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-[var(--ec-on-surface)]">
                            {t.landing.howItWorks[step.stepKey]}
                        </h3>
                        <p className="text-[var(--ec-on-surface-variant)]">
                            {t.landing.howItWorks[step.descKey]}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
