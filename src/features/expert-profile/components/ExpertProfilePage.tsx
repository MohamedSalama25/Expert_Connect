"use client";

import Image from "next/image";
import { BadgeCheck, Star, Brain, GraduationCap, Briefcase, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useLocale } from "@/providers/LocaleProvider";

export function ExpertProfilePage() {
    const { t, locale } = useLocale();

    return (
        <div className="max-w-[1440px] mx-auto px-6 py-12">
            <div className="grid grid-cols-12 gap-8 items-start">
                {/* === Left Column: Profile & Info === */}
                <div className="col-span-12 lg:col-span-8 space-y-8">
                    {/* Profile Header */}
                    <Card className="border-none ambient-shadow bg-[var(--ec-surface-container-lowest)]">
                        <CardContent className="p-8 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
                            <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCohucrTEg0gZyGOJWxEiHGqYvUZEzXPQuSAgdv25imZ2-B4OW_aC2sXZcU7Bb3szX900eSX596lNCygQ_mofR7KRdBOX2ieciN_U6Em85YVlH0a-Mf8whSPPdaP8GiTp92eO9qduIfp8tWyBIY0VRCJunH6hJ9hykmcDetKim5Za1_aO4mY3IQul0WgD7C1O97sp7IEcZ121lW58EkgnuLkpM0xBSj_o83cjIsgive8wS6s8cMUxA0GW_NDhM-asNPKQIi-2eW2g"
                                    alt="Dr. Sarah Smith"
                                    fill
                                    className="object-cover rounded-xl shadow-lg transform -rotate-2"
                                />
                                <div className="absolute -bottom-2 ltr:-right-2 rtl:-left-2 bg-[var(--ec-primary)] text-white p-2 rounded-full border-4 border-[var(--ec-surface-container-lowest)]">
                                    <BadgeCheck className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="flex-grow space-y-4">
                                <div className="flex items-center gap-3 flex-wrap">
                                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--ec-on-surface)]">
                                        Dr. Sarah Smith
                                    </h1>
                                    <Badge className="bg-[var(--ec-primary-container)]/20 text-[var(--ec-on-primary-container)] text-xs font-bold uppercase tracking-widest border-none">
                                        {t.common.activeNow}
                                    </Badge>
                                </div>
                                <p className="text-xl text-[var(--ec-on-surface-variant)] font-medium leading-relaxed">
                                    Technical Architect &amp; Strategic Systems Consultant with 12+ years in Cloud Infrastructure.
                                </p>

                                {/* Stats Bento */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                                    <div className="bg-[var(--ec-surface-container-low)] p-4 rounded-lg">
                                        <span className="block text-[var(--ec-primary)] font-black text-2xl">1.2k+</span>
                                        <span className="text-xs font-bold uppercase tracking-tighter text-[var(--ec-secondary)]">
                                            {t.expertProfile.sessions}
                                        </span>
                                    </div>
                                    <div className="bg-[var(--ec-surface-container-low)] p-4 rounded-lg">
                                        <div className="flex items-center gap-1">
                                            <span className="block text-[var(--ec-tertiary)] font-black text-2xl">4.9</span>
                                            <Star className="w-4 h-4 text-[var(--ec-tertiary)] fill-current" />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-tighter text-[var(--ec-secondary)]">
                                            {t.expertProfile.rating}
                                        </span>
                                    </div>
                                    <div className="bg-[var(--ec-surface-container-low)] p-4 rounded-lg">
                                        <span className="block text-[var(--ec-primary)] font-black text-2xl">15y</span>
                                        <span className="text-xs font-bold uppercase tracking-tighter text-[var(--ec-secondary)]">
                                            {t.expertProfile.experience}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Expertise & Background */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="border-none ambient-shadow bg-[var(--ec-surface-container-lowest)]">
                            <CardContent className="p-8 space-y-4">
                                <div className="flex items-center gap-3 text-[var(--ec-primary)] mb-2">
                                    <Brain className="w-5 h-5" />
                                    <h2 className="text-xl font-bold">{t.expertProfile.expertise}</h2>
                                </div>
                                <p className="text-[var(--ec-on-surface-variant)] leading-relaxed">
                                    Specializing in scaling distributed systems and implementing zero-trust security architectures.
                                    I help Series A+ startups bridge the gap between rapid feature delivery and architectural stability.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {["AWS/GCP", "Kubernetes", "System Design"].map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-[var(--ec-surface-container)] text-[var(--ec-secondary)] text-sm font-semibold rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none ambient-shadow bg-[var(--ec-surface-container-lowest)]">
                            <CardContent className="p-8 space-y-4">
                                <div className="flex items-center gap-3 text-[var(--ec-primary)] mb-2">
                                    <GraduationCap className="w-5 h-5" />
                                    <h2 className="text-xl font-bold">{t.expertProfile.background}</h2>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <GraduationCap className="w-4 h-4 text-[var(--ec-secondary)] mt-0.5" />
                                        <div>
                                            <p className="font-bold text-sm">Ph.D. Computer Science</p>
                                            <p className="text-xs text-[var(--ec-on-surface-variant)]">Stanford University</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <Briefcase className="w-4 h-4 text-[var(--ec-secondary)] mt-0.5" />
                                        <div>
                                            <p className="font-bold text-sm">Lead Architect</p>
                                            <p className="text-xs text-[var(--ec-on-surface-variant)]">Global Tech Corp (5 yrs)</p>
                                        </div>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Reviews / Testimonials */}
                    <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
                            <h2 className="text-2xl font-bold tracking-tight text-[var(--ec-on-surface)]">
                                {t.expertProfile.testimonials}
                            </h2>
                            <button className="text-[var(--ec-primary)] font-bold text-sm hover:underline">
                                {t.expertProfile.viewAllReviews.replace("{count}", "148")}
                            </button>
                        </div>

                        <div className="space-y-4">
                            {/* Review 1 */}
                            <Card className="border-none ltr:border-l-4 rtl:border-r-4 border-[var(--ec-primary)]/20 bg-[var(--ec-surface-container-lowest)]">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[var(--ec-secondary-container)] flex items-center justify-center font-bold text-[var(--ec-on-secondary-container)]">
                                                JD
                                            </div>
                                            <div>
                                                <p className="font-bold">Jason D.</p>
                                                <p className="text-xs text-[var(--ec-on-surface-variant)]">CTO, FinTech Pulse</p>
                                            </div>
                                        </div>
                                        <div className="flex text-[var(--ec-tertiary)]">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <Star key={i} className="w-4 h-4 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-[var(--ec-on-surface-variant)] leading-relaxed">
                                        &quot;Sarah&apos;s insight into our infrastructure bottlenecks was transformative. We reduced our latency by 40% after just two sessions. Truly an expert&apos;s expert.&quot;
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Review 2 */}
                            <Card className="border-none ltr:border-l-4 rtl:border-r-4 border-[var(--ec-primary)]/20 bg-[var(--ec-surface-container-lowest)]">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[var(--ec-surface-container)] flex items-center justify-center font-bold text-[var(--ec-secondary)]">
                                                AM
                                            </div>
                                            <div>
                                                <p className="font-bold">Alice M.</p>
                                                <p className="text-xs text-[var(--ec-on-surface-variant)]">Engineering Manager</p>
                                            </div>
                                        </div>
                                        <div className="flex text-[var(--ec-tertiary)]">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <Star key={i} className="w-4 h-4 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-[var(--ec-on-surface-variant)] leading-relaxed">
                                        &quot;Practical, technical, and highly efficient. No fluff, just pure architectural value.&quot;
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* === Right Column: Scheduler === */}
                <div className="col-span-12 lg:col-span-4 sticky top-28">
                    <Card className="border-none ambient-shadow-lg overflow-hidden bg-[var(--ec-surface-container-lowest)]">
                        {/* Pricing Header */}
                        <div className="p-6 bg-[var(--ec-on-surface)] text-white">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold uppercase tracking-widest text-[var(--ec-primary-fixed-dim)]">
                                    {t.expertProfile.sessionFee}
                                </span>
                                <div className="ltr:text-right rtl:text-left">
                                    <span className="text-3xl font-black">$150</span>
                                    <span className="text-sm opacity-70">/{t.common.hr}</span>
                                </div>
                            </div>
                        </div>

                        {/* Scheduler */}
                        <div className="p-6 space-y-6">
                            {/* Calendar mini */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-2">
                                    <button className="p-1 rounded-full hover:bg-[var(--ec-surface-container)] text-[var(--ec-secondary)]">
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <span className="font-bold">November 2024</span>
                                    <button className="p-1 rounded-full hover:bg-[var(--ec-surface-container)] text-[var(--ec-secondary)]">
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Day headers */}
                                <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-black text-[var(--ec-secondary)] uppercase tracking-tighter">
                                    {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                                        <span key={d}>{d}</span>
                                    ))}
                                </div>

                                {/* Calendar days */}
                                <div className="grid grid-cols-7 gap-1">
                                    {[28, 29, 30].map((d) => (
                                        <div key={d} className="h-10 flex items-center justify-center text-[var(--ec-secondary)] opacity-30 text-xs">{d}</div>
                                    ))}
                                    {[1, 2, 3, 4].map((d) => (
                                        <div key={d} className="h-10 flex items-center justify-center text-xs hover:bg-[var(--ec-primary-container)]/10 rounded-md cursor-pointer font-bold">{d}</div>
                                    ))}
                                    <div className="h-10 flex items-center justify-center text-xs bg-[var(--ec-primary)] text-white rounded-md font-black shadow-md">5</div>
                                    {[6, 7].map((d) => (
                                        <div key={d} className="h-10 flex items-center justify-center text-xs hover:bg-[var(--ec-primary-container)]/10 rounded-md cursor-pointer font-bold">{d}</div>
                                    ))}
                                    <div className="h-10 flex items-center justify-center text-xs bg-[var(--ec-primary-container)]/20 text-[var(--ec-primary)] rounded-md font-bold">8</div>
                                    {[9, 10, 11].map((d) => (
                                        <div key={d} className="h-10 flex items-center justify-center text-xs hover:bg-[var(--ec-primary-container)]/10 rounded-md cursor-pointer font-bold">{d}</div>
                                    ))}
                                </div>
                            </div>

                            {/* Time Slots */}
                            <div className="space-y-3">
                                <p className="text-xs font-bold uppercase tracking-widest text-[var(--ec-secondary)]">
                                    {t.expertProfile.availableSlots} (Nov 5)
                                </p>
                                <div className="grid grid-cols-2 gap-2">
                                    {["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"].map((slot, i) => (
                                        <button
                                            key={slot}
                                            className={`py-2 text-sm font-bold rounded-lg border transition-all ${i === 2
                                                ? "bg-[var(--ec-primary-container)]/10 text-[var(--ec-primary)] border-2 border-[var(--ec-primary)]"
                                                : "border-[var(--ec-outline-variant)] hover:border-[var(--ec-primary)] hover:text-[var(--ec-primary)]"
                                                }`}
                                        >
                                            {slot}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-[var(--ec-on-surface-variant)] pt-2">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>{t.expertProfile.detectedTimezone} America/New_York (GMT-5)</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <Separator className="bg-[var(--ec-surface-container)]" />
                            <div className="space-y-3">
                                <Button className="w-full py-4 signature-gradient text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all h-auto">
                                    {t.common.bookCall}
                                </Button>
                                <Button variant="secondary" className="w-full py-4 bg-[var(--ec-surface-container-high)] text-[var(--ec-on-surface)] font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-[var(--ec-surface-container-highest)] transition-colors h-auto">
                                    <span className="w-2 h-2 rounded-full bg-[var(--ec-primary)] animate-pulse"></span>
                                    {t.common.instantCall}
                                </Button>
                            </div>
                        </div>

                        {/* Guarantee */}
                        <div className="p-6 bg-[var(--ec-surface-container-low)] text-center">
                            <p className="text-xs text-[var(--ec-secondary)] font-medium italic">
                                &quot;{t.expertProfile.satisfactionGuarantee}&quot;
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
