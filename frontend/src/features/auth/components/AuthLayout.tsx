"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/providers/LocaleProvider";
import { BadgeCheck, ShieldAlert, Sparkles, User, GraduationCap } from "lucide-react";
import { AuthLayoutProps } from "../Types";

export function AuthLayout({ children }: AuthLayoutProps) {
    const { t } = useLocale();

    return (
        <div className="flex min-h-screen bg-[var(--ec-surface)]">
            {/* Left side: Form container */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-32 relative z-10 w-full lg:w-1/2">
                {/* Brand Logo */}
                <div className="absolute top-8 ltr:left-8 rtl:right-8 sm:ltr:left-12 sm:rtl:right-12">
                    <Link href="/" className="text-2xl font-black text-[var(--ec-primary)] tracking-tighter hover:opacity-80 transition-opacity">
                        {t.common.brandName}
                    </Link>
                </div>

                {/* Dynamic Form Content */}
                <div className="w-full max-w-md mx-auto relative mt-12 mb-12">
                    <div className="absolute -top-12 -left-12 w-48 h-48 bg-[var(--ec-primary-container)]/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                    {children}
                </div>
            </div>

            {/* Right side: Branding/Visuals (Hidden on smaller screens) */}
            <div className="hidden lg:flex flex-1 relative bg-[var(--ec-on-surface)] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRccPQeyjMfENmX3-HNhgeLY-ybKn2R7wY3kDxmzyyLDIT4_xo1iBMHMl-JoPm9wj831c_7z3inMtXB04ESkAi5TAEBmy8q0IYJ1Rb4bgV35uCUYy5n5CNX1rtaVNykp0G8wz6jksbvHK_CRupVy31hhaaee7UJPKnAwh3VUYyGazD23c6wtipTJ-4QWnk3H-10VfqF0wyunnTP15MNT6T4qgygRicF4-f2qdsdbYydPO82LHgnGoBAoAvk7ZukjDyt3zjoDqD7w"
                        alt="Expert Consultation"
                        fill
                        className="object-cover opacity-40 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ec-on-surface)] via-transparent to-[var(--ec-on-surface)]/80"></div>
                    <div className="absolute inset-0 bg-[var(--ec-primary)]/10 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-center px-16 xl:px-24 w-full self-center">
                    <h2 className="text-4xl xl:text-5xl font-extrabold text-white mb-6 leading-tight">
                        Elevate Your <span className="text-[var(--ec-primary-fixed)]">Expertise</span><br />
                        Expand Your <span className="text-[var(--ec-tertiary-fixed)]">Impact</span>
                    </h2>
                    <p className="text-lg text-white/80 mb-12 max-w-xl leading-relaxed">
                        The global gold standard for professional consultation. We match the world's most innovative minds with clients seeking strategic architectural success.
                    </p>

                    <div className="space-y-6 max-w-lg">
                        <div className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-full bg-[var(--ec-primary-fixed)]/20 flex items-center justify-center flex-shrink-0">
                                <BadgeCheck className="w-5 h-5 text-[var(--ec-primary-fixed)]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Top Tier Network</h4>
                                <p className="text-sm text-white/60 leading-relaxed">Join an exclusive pool of verified elites in Technology, Law, and Business.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-full bg-[var(--ec-tertiary-fixed)]/20 flex items-center justify-center flex-shrink-0">
                                <ShieldAlert className="w-5 h-5 text-[var(--ec-tertiary-fixed)]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Uncompromising Privacy</h4>
                                <p className="text-sm text-white/60 leading-relaxed">End-to-end encrypted sessions and secure billing guarantee your safety.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-full bg-[var(--ec-secondary-fixed)]/20 flex items-center justify-center flex-shrink-0">
                                <Sparkles className="w-5 h-5 text-[var(--ec-secondary-fixed)]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Flawless Experience</h4>
                                <p className="text-sm text-white/60 leading-relaxed">A specialized high-fidelity canvas tailored for deep professional consulting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
