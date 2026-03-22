"use client";

import Link from "next/link";
import { useState } from "react";
import { User, GraduationCap, Mail, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import { useLocale } from "@/providers/LocaleProvider";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "./AuthLayout";

export function RegisterPage() {
    const { t, direction } = useLocale();
    const [userType, setUserType] = useState<"client" | "expert">("client");
    const ArrowIcon = direction === "rtl" ? ArrowRight : ArrowRight;

    return (
        <AuthLayout>
            <div className="mb-8 text-center lg:text-start lg:ltr:text-left lg:rtl:text-right">
                <h1 className="text-3xl font-black text-[var(--ec-on-surface)] tracking-tight mb-2">
                    {t.auth.createAccount}
                </h1>
                <p className="text-[var(--ec-on-surface-variant)] text-sm font-medium">
                    {t.auth.registerSubtitle}
                </p>
            </div>

            <div className="space-y-6">
                {/* User Type Selector */}
                <div className="space-y-3">
                    <Label className="text-xs font-bold text-[var(--ec-secondary)] uppercase tracking-wider">{t.auth.expertOrClient}</Label>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => setUserType("client")}
                            className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all group ${userType === "client"
                                    ? "border-[var(--ec-primary)] bg-[var(--ec-primary-container)]/10"
                                    : "border-[var(--ec-outline-variant)]/40 hover:border-[var(--ec-primary)]/50 bg-[var(--ec-surface-container-low)]"
                                }`}
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${userType === "client" ? "bg-[var(--ec-primary)] text-white" : "bg-[var(--ec-surface-container)] text-[var(--ec-secondary)] group-hover:bg-[var(--ec-primary)]/10 group-hover:text-[var(--ec-primary)]"
                                }`}>
                                <User className="w-5 h-5" />
                            </div>
                            <span className={`text-xs font-bold text-center ${userType === "client" ? "text-[var(--ec-primary)]" : "text-[var(--ec-secondary)]"}`}>
                                {t.auth.client}
                            </span>
                            {userType === "client" && <CheckCircle2 className="w-5 h-5 absolute top-2 ltr:right-2 rtl:left-2 text-[var(--ec-primary)] fill-current" />}
                        </button>
                        <button
                            onClick={() => setUserType("expert")}
                            className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all group ${userType === "expert"
                                    ? "border-[var(--ec-tertiary)] bg-[var(--ec-tertiary-container)]/10"
                                    : "border-[var(--ec-outline-variant)]/40 hover:border-[var(--ec-tertiary)]/50 bg-[var(--ec-surface-container-low)]"
                                }`}
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${userType === "expert" ? "bg-[var(--ec-tertiary)] text-white" : "bg-[var(--ec-surface-container)] text-[var(--ec-secondary)] group-hover:bg-[var(--ec-tertiary)]/10 group-hover:text-[var(--ec-tertiary)]"
                                }`}>
                                <GraduationCap className="w-5 h-5" />
                            </div>
                            <span className={`text-xs font-bold text-center ${userType === "expert" ? "text-[var(--ec-tertiary)]" : "text-[var(--ec-secondary)]"}`}>
                                {t.auth.expert}
                            </span>
                            {userType === "expert" && <CheckCircle2 className="w-5 h-5 absolute top-2 ltr:right-2 rtl:left-2 text-[var(--ec-tertiary)] fill-current" />}
                        </button>
                    </div>
                </div>

                {/* Form Fields */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-1.5 relative">
                        <Label className="text-xs font-bold text-[var(--ec-secondary)] uppercase tracking-wider">{t.auth.fullName}</Label>
                        <div className="relative">
                            <User className="w-5 h-5 absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 text-[var(--ec-secondary)]/50" />
                            <Input
                                type="text"
                                placeholder="John Doe"
                                className="py-5 ltr:pl-10 rtl:pr-10 rounded-xl bg-[var(--ec-surface-container-low)] border-none focus-visible:ring-[var(--ec-primary)]/30 transition-shadow"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5 relative">
                        <Label className="text-xs font-bold text-[var(--ec-secondary)] uppercase tracking-wider">{t.auth.email}</Label>
                        <div className="relative">
                            <Mail className="w-5 h-5 absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 text-[var(--ec-secondary)]/50" />
                            <Input
                                type="email"
                                placeholder="yours@example.com"
                                className="py-5 ltr:pl-10 rtl:pr-10 rounded-xl bg-[var(--ec-surface-container-low)] border-none focus-visible:ring-[var(--ec-primary)]/30 transition-shadow"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5 relative">
                        <Label className="text-xs font-bold text-[var(--ec-secondary)] uppercase tracking-wider">{t.auth.password}</Label>
                        <div className="relative">
                            <Lock className="w-5 h-5 absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 text-[var(--ec-secondary)]/50" />
                            <Input
                                type="password"
                                placeholder="••••••••"
                                className="py-5 ltr:pl-10 rtl:pr-10 rounded-xl bg-[var(--ec-surface-container-low)] border-none focus-visible:ring-[var(--ec-primary)]/30 transition-shadow"
                            />
                        </div>
                    </div>

                    <div className="flex items-start gap-3 py-2">
                        <input type="checkbox" id="terms" className="w-4 h-4 mt-1 rounded text-[var(--ec-primary)] focus:ring-[var(--ec-primary)] border-[var(--ec-outline)]" />
                        <Label htmlFor="terms" className="text-xs text-[var(--ec-on-surface-variant)] leading-tight cursor-pointer">
                            {t.auth.agreeTerms}
                        </Label>
                    </div>

                    <Button className={`w-full py-6 rounded-xl text-white font-black text-base shadow-lg hover:shadow-xl active:scale-[0.98] transition-all mt-4 group ${userType === "expert" ? "bg-[var(--ec-tertiary)] hover:bg-[#6e4501]" : "signature-gradient"
                        }`}>
                        {t.auth.signUpButton}
                        <ArrowIcon className="w-4 h-4 ltr:ml-2 rtl:mr-2 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all rtl:-scale-x-100" />
                    </Button>
                </form>

                <p className="text-center text-sm font-medium text-[var(--ec-on-surface-variant)] mt-6">
                    {t.auth.alreadyHaveAccount}{" "}
                    <Link href="/login" className="text-[var(--ec-primary)] font-bold hover:underline">
                        {t.auth.signInButton}
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
}
