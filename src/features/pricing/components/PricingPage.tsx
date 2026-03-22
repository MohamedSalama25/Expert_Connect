"use client";

import React, { useState } from "react";
import { Check, X, Shield, Zap, Building2, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useLocale } from "@/providers/LocaleProvider";
import { cn } from "@/lib/utils";

interface PlanFeature {
    text: string;
    included: boolean;
}

interface PricingPlan {
    name: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
    cta: string;
    popular?: boolean;
    features: PlanFeature[];
}

export function PricingPage() {
    const { t } = useLocale();
    const [isYearly, setIsYearly] = useState(false);

    const plans: PricingPlan[] = [
        {
            name: "Starter",
            description: "For individuals exploring the platform.",
            price: { monthly: 0, yearly: 0 },
            cta: "Start for Free",
            features: [
                { text: "2 Consultations per month", included: true },
                { text: "Access to Public Experts", included: true },
                { text: "Standard Chat Support", included: true },
                { text: "Detailed Analytics", included: false },
                { text: "Priority Support", included: false },
            ]
        },
        {
            name: "Professional",
            description: "For professionals scaling their network.",
            price: { monthly: 49, yearly: 39 },
            cta: "Go Professional",
            popular: true,
            features: [
                { text: "Unlimited Consultations", included: true },
                { text: "Priority Expert Matchmaking", included: true },
                { text: "Full Session Recording", included: true },
                { text: "Advanced Analytics Dashboard", included: true },
                { text: "24/7 Premium Support", included: true },
            ]
        },
        {
            name: "Enterprise",
            description: "Custom solutions for global teams.",
            price: { monthly: 0, yearly: 0 }, // Custom
            cta: "Contact Sales",
            features: [
                { text: "White Label Integration", included: true },
                { text: "Dedicated Account Manager", included: true },
                { text: "Single Sign-On (SSO)", included: true },
                { text: "Custom Legal Agreements", included: true },
                { text: "Unlimited Team Members", included: true },
            ]
        }
    ];

    const comparisons = [
        { feature: "Global Expert Network", starter: true, pro: true, enterprise: true },
        { feature: "Video Conferencing", starter: true, pro: true, enterprise: true },
        { feature: "Session Transcripts", starter: false, pro: true, enterprise: true },
        { feature: "API Access", starter: false, pro: false, enterprise: true },
        { feature: "Custom Branding", starter: "—", pro: "Basic", enterprise: "Advanced" },
        { feature: "Team Seats", starter: "1", pro: "Up to 5", enterprise: "Unlimited" },
    ];

    return (
        <div className="bg-[var(--ec-background)] min-h-screen py-24 px-6 overflow-hidden relative">
            {/* Background Ornaments */}
            <div className="absolute top-0 ltr:left-0 rtl:right-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[var(--ec-primary)]/5 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-[var(--ec-primary)]/3 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto space-y-24">
                {/* Header Section */}
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <Badge variant="outline" className="text-[var(--ec-primary)] border-[var(--ec-primary)]/20 px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest bg-[var(--ec-primary-container)]/5">
                        Pricing Plans
                    </Badge>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[var(--ec-on-surface)] tracking-tighter leading-[1.1]">
                        Transparent Pricing for <br />
                        <span className="signature-gradient-text">Global Expertise</span>
                    </h1>
                    <p className="text-[var(--ec-on-surface-variant)] text-lg font-medium leading-relaxed">
                        Connect with the world's leading minds through flexible plans designed for teams of all sizes and individuals with big ambitions.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4 pt-8">
                        <span className={cn("text-sm font-bold transition-colors", !isYearly ? "text-[var(--ec-on-surface)]" : "text-[var(--ec-on-surface-variant)]")}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-14 h-8 bg-[var(--ec-surface-container-high)] rounded-full p-1 relative transition-colors focus:ring-2 focus:ring-[var(--ec-primary)]/20"
                        >
                            <div className={cn(
                                "w-6 h-6 bg-[var(--ec-primary)] rounded-full shadow-md transition-all duration-300 transform",
                                isYearly ? "ltr:translate-x-6 rtl:-translate-x-6" : "translate-x-0"
                            )} />
                        </button>
                        <div className="flex items-center gap-3">
                            <span className={cn("text-sm font-bold transition-colors", isYearly ? "text-[var(--ec-on-surface)]" : "text-[var(--ec-on-surface-variant)]")}>Yearly</span>
                            <Badge className="bg-[var(--ec-primary-container)]/10 text-[var(--ec-primary)] border-none font-black text-[10px] uppercase tracking-tighter px-2">Save 20%</Badge>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-center">
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            className={cn(
                                "bg-card relative rounded-[2.5rem] border transition-all duration-500 hover:translate-y-[-8px] group flex flex-col",
                                plan.popular ? "border-[var(--ec-primary)]/40 shadow-2xl shadow-[var(--ec-primary)]/10 md:scale-105 z-10 p-2" : "border-border/40 shadow-xl p-0"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--ec-primary)] text-white px-6 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-lg border-4 border-card">
                                    Most Popular
                                </div>
                            )}

                            <CardHeader className="p-8 pt-10 space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <CardTitle className="text-2xl font-black text-[var(--ec-on-surface)]">{plan.name}</CardTitle>
                                        <CardDescription className="text-sm font-medium leading-relaxed">{plan.description}</CardDescription>
                                    </div>
                                    <div className="w-12 h-12 rounded-2xl bg-[var(--ec-surface-container-low)] flex items-center justify-center text-[var(--ec-primary)]">
                                        {plan.name === "Starter" && <Zap className="w-6 h-6" />}
                                        {plan.name === "Professional" && <Shield className="w-6 h-6" />}
                                        {plan.name === "Enterprise" && <Building2 className="w-6 h-6" />}
                                    </div>
                                </div>
                                <div className="pt-4">
                                    {plan.name === "Enterprise" ? (
                                        <span className="text-4xl font-black text-[var(--ec-on-surface)]">Custom</span>
                                    ) : (
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-scale-500 text-5xl font-black text-[var(--ec-on-surface)] transition-all">
                                                ${isYearly ? plan.price.yearly : plan.price.monthly}
                                            </span>
                                            <span className="text-[var(--ec-on-surface-variant)] font-bold text-sm uppercase tracking-widest">/mo</span>
                                        </div>
                                    )}
                                </div>
                            </CardHeader>

                            <CardContent className="p-8 pt-0 space-y-5 flex-grow">
                                <Separator className="bg-border/5 mb-8" />
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className={cn(
                                            "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                                            feature.included ? "bg-[var(--ec-primary-container)]/10 text-[var(--ec-primary)]" : "bg-[var(--ec-surface-container-high)] text-[var(--ec-secondary)]/30"
                                        )}>
                                            {feature.included ? <Check className="w-3 h-3 stroke-[3]" /> : <X className="w-3 h-3 stroke-[3]" />}
                                        </div>
                                        <span className={cn(
                                            "text-sm font-medium",
                                            feature.included ? "text-[var(--ec-on-surface-variant)]" : "text-[var(--ec-on-surface-variant)]/40 line-through"
                                        )}>
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </CardContent>

                            <CardFooter className="p-8 pt-4">
                                <Button
                                    className={cn(
                                        "w-full h-14 rounded-2xl font-black text-sm uppercase tracking-widest transition-all",
                                        plan.popular ? "signature-gradient text-white shadow-lg shadow-[var(--ec-primary)]/30 hover:shadow-[var(--ec-primary)]/50" : "bg-[var(--ec-surface-container-high)] text-[var(--ec-on-surface)] hover:bg-[var(--ec-surface-dim)]"
                                    )}
                                >
                                    {plan.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Detailed Comparison */}
                <div className="pt-12 space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-black text-[var(--ec-on-surface)]">Compare every feature</h2>
                        <p className="text-[var(--ec-on-surface-variant)] font-medium">Get a transparent look at what's included in each plan.</p>
                    </div>

                    <Card className="bg-card rounded-[2.5rem] border border-border/40 shadow-xl overflow-hidden">
                        <CardContent className="p-0">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-[var(--ec-surface-container-low)]/50">
                                            <th className="p-8 text-left text-xs font-black uppercase tracking-widest text-[var(--ec-secondary)]">Core Capabilities</th>
                                            <th className="p-8 text-center text-xs font-black uppercase tracking-widest text-[var(--ec-secondary)]">Starter</th>
                                            <th className="p-8 text-center text-xs font-black uppercase tracking-widest text-[var(--ec-primary)]">Professional</th>
                                            <th className="p-8 text-center text-xs font-black uppercase tracking-widest text-[var(--ec-secondary)]">Enterprise</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/5">
                                        {comparisons.map((row, i) => (
                                            <tr key={i} className="hover:bg-[var(--ec-surface-container-lowest)]/50 transition-colors">
                                                <td className="p-8 text-sm font-bold text-[var(--ec-on-surface)]">{row.feature}</td>
                                                <td className="p-8 text-center">
                                                    {typeof row.starter === 'boolean' ? (
                                                        row.starter ? <Check className="w-5 h-5 mx-auto text-[var(--ec-primary)]/40" /> : <span className="text-[var(--ec-on-surface-variant)]/20">—</span>
                                                    ) : <span className="text-xs font-black text-[var(--ec-secondary)]">{row.starter}</span>}
                                                </td>
                                                <td className="p-8 text-center bg-[var(--ec-primary-container)]/5">
                                                    {typeof row.pro === 'boolean' ? (
                                                        row.pro ? <Check className="w-5 h-5 mx-auto text-[var(--ec-primary)]" /> : <span className="text-[var(--ec-on-surface-variant)]/20">—</span>
                                                    ) : <span className="text-xs font-black text-[var(--ec-primary)]">{row.pro}</span>}
                                                </td>
                                                <td className="p-8 text-center">
                                                    {typeof row.enterprise === 'boolean' ? (
                                                        row.enterprise ? <Check className="w-5 h-5 mx-auto text-[var(--ec-secondary)]" /> : <span className="text-[var(--ec-on-surface-variant)]/20">—</span>
                                                    ) : <span className="text-xs font-black text-[var(--ec-secondary)]">{row.enterprise}</span>}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Footer CTA */}
                <div className="bg-[var(--ec-on-secondary-fixed)] rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--ec-primary)]/5 rounded-full -mr-48 -mt-48 blur-3xl group-hover:scale-125 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--ec-primary)]/5 rounded-full -ml-32 -mb-32 blur-3xl group-hover:scale-125 transition-transform duration-700" />

                    <div className="relative space-y-6">
                        <div className="w-20 h-20 bg-white/5 rounded-3xl mx-auto flex items-center justify-center text-[var(--ec-primary)]">
                            <HelpCircle className="w-10 h-10" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Still have questions?</h2>
                        <p className="text-white/60 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                            Our team is here to help you find the perfect solution for your specific technical needs.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                            <Button className="h-14 px-10 signature-gradient text-white font-black rounded-2xl gap-3 text-sm uppercase tracking-widest hover:opacity-90">
                                Talk to Sales <ArrowRight className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" className="h-14 px-10 bg-white/5 text-white font-black rounded-2xl hover:bg-white/10 text-sm uppercase tracking-widest border border-white/10">
                                View Documentation
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


