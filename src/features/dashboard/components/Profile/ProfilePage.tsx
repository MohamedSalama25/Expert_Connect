"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, BadgeCheck, Brain, History, School, Briefcase, Calendar, CheckCircle2, MoreVertical, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLocale } from "@/providers/LocaleProvider";

export function ProfilePage() {
    const { t } = useLocale();

    return (
        <div className="flex-1 p-6 md:p-8 xl:p-10 w-full bg-[var(--ec-background)] min-h-screen">
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-black text-[var(--ec-on-surface)] tracking-tight mb-2">
                            Professional Profile
                        </h1>
                        <p className="text-[var(--ec-on-surface-variant)] text-sm font-medium">Manage how your profile appears to potential clients across the platform.</p>
                    </div>
                    <Button className="bg-[var(--ec-primary)] hover:bg-[var(--ec-primary)]/90 text-white font-bold rounded-xl px-6 flex items-center gap-2">
                        <Edit2 className="w-4 h-4" /> Edit Profile
                    </Button>
                </div>

                <div className="grid grid-cols-12 gap-8 items-start">
                    {/* Left Column: Profile & Info */}
                    <div className="col-span-12 lg:col-span-8 space-y-8">
                        {/* Section 1: Profile Header */}
                        <Card className="bg-card p-8 rounded-3xl border border-border flex flex-col md:flex-row gap-8 items-start relative overflow-hidden shadow-sm">
                            <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCohucrTEg0gZyGOJWxEiHGqYvUZEzXPQuSAgdv25imZ2-B4OW_aC2sXZcU7Bb3szX900eSX596lNCygQ_mofR7KRdBOX2ieciN_U6Em85YVlH0a-Mf8whSPPdaP8GiTp92eO9qduIfp8tWyBIY0VRCJunH6hJ9hykmcDetKim5Za1_aO4mY3IQul0WgD7C1O97sp7IEcZ121lW58EkgnuLkpM0xBSj_o83cjIsgive8wS6s8cMUxA0GW_NDhM-asNPKQIi-2eW2g"
                                    alt="Expert Portrait"
                                    width={256}
                                    height={256}
                                    className="w-full h-full object-cover rounded-2xl shadow-lg transform -rotate-1"
                                />
                                <div className="absolute -bottom-2 -right-2 bg-[var(--ec-primary)] text-white p-2 rounded-full border-4 border-card shadow-lg">
                                    <BadgeCheck className="w-6 h-6 fill-current" />
                                </div>
                            </div>
                            <div className="flex-grow space-y-4">
                                <div className="flex items-center gap-3">
                                    <h1 className="text-3xl md:text-4xl font-black tracking-tight text-[var(--ec-on-surface)]">Dr. Sarah Smith</h1>
                                    <Badge className="bg-[var(--ec-primary-container)]/20 text-[var(--ec-primary)] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border-none">Active Now</Badge>
                                </div>
                                <p className="text-xl text-[var(--ec-on-surface-variant)] font-semibold leading-relaxed">Technical Architect & Strategic Systems Consultant with 12+ years in Cloud Infrastructure.</p>

                                {/* Stats Bento */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                                    <div className="bg-[var(--ec-surface-container-low)] p-4 rounded-xl border border-border/10">
                                        <span className="block text-[var(--ec-primary)] font-black text-2xl">1.2k+</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--ec-secondary)]">Sessions</span>
                                    </div>
                                    <div className="bg-[var(--ec-surface-container-low)] p-4 rounded-xl border border-border/10">
                                        <div className="flex items-center gap-1">
                                            <span className="block text-[var(--ec-tertiary)] font-black text-2xl">4.9</span>
                                            <Star className="w-4 h-4 text-[var(--ec-tertiary)] fill-current" />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--ec-secondary)]">Rating</span>
                                    </div>
                                    <div className="bg-[var(--ec-surface-container-low)] p-4 rounded-xl border border-border/10">
                                        <span className="block text-[var(--ec-primary)] font-black text-2xl">15y</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--ec-secondary)]">Experience</span>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Section 2: Expertise & Focus */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card className="bg-card p-8 rounded-3xl border border-border space-y-4 shadow-sm">
                                <div className="flex items-center gap-3 text-[var(--ec-primary)] mb-2">
                                    <Brain className="w-6 h-6" />
                                    <h2 className="text-xl font-black text-[var(--ec-on-surface)]">Expertise & Focus</h2>
                                </div>
                                <p className="text-[var(--ec-on-surface-variant)] text-sm leading-relaxed font-medium">
                                    Specializing in scaling distributed systems and implementing zero-trust security architectures. I help Series A+ startups bridge the gap between rapid feature delivery and architectural stability.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    <Badge variant="secondary" className="bg-[var(--ec-surface-container-high)] text-[var(--ec-secondary)] text-xs font-bold rounded-lg border-none px-3 py-1">AWS/GCP</Badge>
                                    <Badge variant="secondary" className="bg-[var(--ec-surface-container-high)] text-[var(--ec-secondary)] text-xs font-bold rounded-lg border-none px-3 py-1">Kubernetes</Badge>
                                    <Badge variant="secondary" className="bg-[var(--ec-surface-container-high)] text-[var(--ec-secondary)] text-xs font-bold rounded-lg border-none px-3 py-1">System Design</Badge>
                                </div>
                            </Card>

                            <Card className="bg-card p-8 rounded-3xl border border-border space-y-4 shadow-sm">
                                <div className="flex items-center gap-3 text-[var(--ec-primary)] mb-2">
                                    <History className="w-6 h-6" />
                                    <h2 className="text-xl font-black text-[var(--ec-on-surface)]">Background</h2>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--ec-surface-container-low)] flex items-center justify-center text-[var(--ec-secondary)] shrink-0">
                                            <School className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm text-[var(--ec-on-surface)]">Ph.D. Computer Science</p>
                                            <p className="text-xs text-[var(--ec-on-surface-variant)] font-medium">Stanford University</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--ec-surface-container-low)] flex items-center justify-center text-[var(--ec-secondary)] shrink-0">
                                            <Briefcase className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm text-[var(--ec-on-surface)]">Lead Architect</p>
                                            <p className="text-xs text-[var(--ec-on-surface-variant)] font-medium">Global Tech Corp (5 yrs)</p>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>

                        {/* Section 4: Reviews */}
                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 mb-4">
                                <h2 className="text-2xl font-black tracking-tight text-[var(--ec-on-surface)]">Client Testimonials</h2>
                                <button className="text-[var(--ec-primary)] font-bold text-sm hover:underline">View all 148 reviews</button>
                            </div>
                            <div className="space-y-4">
                                <Card className="bg-card p-6 rounded-2xl border border-border border-l-4 border-l-[var(--ec-primary)]/40 shadow-sm transition-all hover:translate-x-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[var(--ec-secondary-container)]/30 flex items-center justify-center font-black text-[var(--ec-primary)]">JD</div>
                                            <div>
                                                <p className="font-bold text-[var(--ec-on-surface)]">Jason D.</p>
                                                <p className="text-xs text-[var(--ec-on-surface-variant)] font-medium">CTO, FinTech Pulse</p>
                                            </div>
                                        </div>
                                        <div className="flex text-[var(--ec-tertiary)]">
                                            {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                        </div>
                                    </div>
                                    <p className="text-[var(--ec-on-surface-variant)] text-sm leading-relaxed italic font-medium">"Sarah's insight into our infrastructure bottlenecks was transformative. We reduced our latency by 40% after just two sessions. Truly an expert's expert."</p>
                                </Card>
                                <Card className="bg-card p-6 rounded-2xl border border-border border-l-4 border-l-[var(--ec-primary)]/40 shadow-sm transition-all hover:translate-x-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[var(--ec-secondary-container)]/30 flex items-center justify-center font-black text-[var(--ec-primary)]">AM</div>
                                            <div>
                                                <p className="font-bold text-[var(--ec-on-surface)]">Alice M.</p>
                                                <p className="text-xs text-[var(--ec-on-surface-variant)] font-medium">Engineering Manager</p>
                                            </div>
                                        </div>
                                        <div className="flex text-[var(--ec-tertiary)]">
                                            {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                        </div>
                                    </div>
                                    <p className="text-[var(--ec-on-surface-variant)] text-sm leading-relaxed italic font-medium">"Practical, technical, and highly efficient. No fluff, just pure architectural value."</p>
                                </Card>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Pricing & Quick Actions */}
                    <div className="col-span-12 lg:col-span-4 sticky top-28 space-y-6">
                        {/* Profile Strength Card */}
                        <Card className="bg-card rounded-3xl border border-border p-6 shadow-sm overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--ec-primary)]/5 rounded-full -mr-12 -mt-12" />
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-xs font-black uppercase tracking-widest text-[var(--ec-secondary)]">Profile Strength</h4>
                                <span className="text-[var(--ec-primary)] font-black text-sm">85%</span>
                            </div>
                            <div className="w-full h-2 bg-[var(--ec-surface-container-high)] rounded-full overflow-hidden mb-4">
                                <div className="h-full bg-[var(--ec-primary)] rounded-full w-[85%]" />
                            </div>
                            <p className="text-[10px] text-[var(--ec-on-surface-variant)] font-medium leading-relaxed">
                                Complete your <span className="text-[var(--ec-primary)] font-bold">Bio</span> and <span className="text-[var(--ec-primary)] font-bold">Certifications</span> to reach 100% and gain more visibility.
                            </p>
                        </Card>

                        <Card className="bg-card rounded-3xl border border-border overflow-hidden shadow-xl">
                            {/* Pricing Header */}
                            <div className="p-6 bg-[var(--ec-on-secondary-fixed)] text-white">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--ec-primary)]">{t.expertProfile.sessionFee}</span>
                                    <div className="text-right">
                                        <span className="text-4xl font-black">$150</span>
                                        <span className="text-sm opacity-70">/{t.common.hr}</span>
                                    </div>
                                </div>
                            </div>

                            <CardContent className="p-8 space-y-6">
                                <div className="space-y-4">
                                    <p className="text-sm font-bold text-[var(--ec-on-surface)] uppercase tracking-widest">Pricing Strategy</p>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center px-4 py-3 bg-[var(--ec-surface-container-low)] rounded-xl border border-border/5">
                                            <span className="text-sm font-medium text-[var(--ec-on-surface-variant)]">Basic Consultation</span>
                                            <span className="font-black text-[var(--ec-on-surface)]">$150</span>
                                        </div>
                                        <div className="flex justify-between items-center px-4 py-3 bg-[var(--ec-surface-container-low)] rounded-xl border border-border/5">
                                            <span className="text-sm font-medium text-[var(--ec-on-surface-variant)]">Emergency Fix</span>
                                            <span className="font-black text-[var(--ec-primary)]">$250</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-border/10">
                                    <p className="text-sm font-bold text-[var(--ec-on-surface)] uppercase tracking-widest mb-4">Live Availability</p>
                                    <div className="p-4 rounded-xl bg-[var(--ec-primary-container)]/10 border border-[var(--ec-primary)]/20 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-[var(--ec-primary)] animate-pulse shadow-[0_0_8px_var(--ec-primary)]" />
                                            <span className="text-sm font-bold text-[var(--ec-primary)]">{t.common.activeNow}</span>
                                        </div>
                                        <Button variant="ghost" size="sm" className="h-8 text-[10px] font-black uppercase text-[var(--ec-primary)] hover:bg-[var(--ec-primary-container)]/20">Change</Button>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4">
                                    <Button className="w-full py-6 signature-gradient text-white font-black rounded-xl shadow-lg hover:shadow-[var(--ec-primary)]/30 hover:-translate-y-0.5 transition-all text-sm uppercase tracking-widest border-none">
                                        Share Public Profile
                                    </Button>
                                    <Link href="/dashboard/settings" className="block w-full">
                                        <Button variant="ghost" className="w-full py-6 bg-[var(--ec-surface-container-high)] text-[var(--ec-on-surface)] font-black rounded-xl hover:bg-[var(--ec-surface-dim)] transition-colors text-sm uppercase tracking-widest">
                                            Profile Settings
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>

                            <div className="p-4 bg-[var(--ec-surface-container-low)] text-center">
                                <p className="text-[10px] text-[var(--ec-secondary)] font-black italic uppercase tracking-[0.2em]">Verified Professional</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
