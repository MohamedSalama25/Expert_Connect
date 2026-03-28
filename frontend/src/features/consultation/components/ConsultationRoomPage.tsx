"use client";

import Image from "next/image";
import {
    Mic,
    Video,
    MonitorUp,
    Users,
    Settings,
    PhoneOff,
    Send,
    Paperclip,
    Smile,
    Mic as MicIcon,
    BadgeCheck,
    FileEdit,
    Timer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLocale } from "@/providers/LocaleProvider";

export function ConsultationRoomPage() {
    const { t } = useLocale();

    return (
        <div className="flex h-screen w-full bg-[#0b1c30]">
            {/* Main Content Canvas (Video Stage) */}
            <main className="relative flex-grow flex flex-col items-center justify-center p-6 transition-all duration-300">
                <div className="relative w-full h-full bg-[#131b2e] rounded-xl overflow-hidden flex items-center justify-center shadow-2xl ring-1 ring-white/5">
                    {/* Large Video Stream of Expert */}
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRccPQeyjMfENmX3-HNhgeLY-ybKn2R7wY3kDxmzyyLDIT4_xo1iBMHMl-JoPm9wj831c_7z3inMtXB04ESkAi5TAEBmy8q0IYJ1Rb4bgV35uCUYy5n5CNX1rtaVNykp0G8wz6jksbvHK_CRupVy31hhaaee7UJPKnAwh3VUYyGazD23c6wtipTJ-4QWnk3H-10VfqF0wyunnTP15MNT6T4qgygRicF4-f2qdsdbYydPO82LHgnGoBAoAvk7ZukjDyt3zjoDqD7w"
                        alt="Dr. Sarah Smith Video Stream"
                        fill
                        className="object-cover opacity-90"
                        priority
                    />
                    <div className="absolute inset-0 video-gradient-overlay pointer-events-none"></div>

                    {/* Expert Name Label Overlay */}
                    <div className="absolute top-6 ltr:left-6 rtl:right-6 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                        <div className="w-3 h-3 bg-[var(--ec-primary)] rounded-full animate-pulse"></div>
                        <span className="text-white font-medium text-sm tracking-tight">
                            Dr. Sarah Smith ({t.consultation.expert})
                        </span>
                        <BadgeCheck className="w-4 h-4 text-white" />
                    </div>

                    {/* Self Stream (Smaller Inset Video) */}
                    <div className="absolute bottom-20 sm:bottom-6 ltr:right-3 rtl:left-3 sm:ltr:right-6 sm:rtl:left-6 w-40 sm:w-56 md:w-72 aspect-video bg-[#0b1c30] rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAShlefBZmeETzAMQc82cWjwqxJ-i_s400kV7HG08nh5jBHFu5A9M0ryYtFAVdbyeRSf3tOna9BXMbgrrA6tSt02olVWo4lhZ0oFkRoShCkopRe9eQPNuXkd4hgaELBWRwEQcyA3j2wH0oq18WXJM1vHYuwY8GNJNzIHTc2IL9Dtrp6GX1HqGJ3JDzgR-U2kO_UCeWgIikFvriyww0nCxJTHxURmfyLXpML9XDA9JL2ZI4vyWpC_F4tWS2ZYYyeGKzQTCg8zOiRNA"
                            alt="Self Stream"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-2 ltr:left-2 rtl:right-2 bg-black/40 px-2 py-0.5 rounded text-[10px] text-white">
                            {t.consultation.you} (John Doe)
                        </div>
                    </div>

                    {/* Central Control Bar */}
                    <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-4 bg-white/10 backdrop-blur-xl px-4 sm:px-8 py-3 sm:py-4 rounded-full border border-white/10 shadow-2xl">
                        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-90">
                            <Mic className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-90">
                            <Video className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-90">
                            <MonitorUp className="w-5 h-5" />
                        </button>
                        <div className="w-px h-8 bg-white/10 mx-2"></div>
                        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-90 relative">
                            <Users className="w-5 h-5" />
                            <span className="absolute top-1 ltr:right-1 rtl:left-1 w-4 h-4 bg-[var(--ec-primary)] text-[10px] flex items-center justify-center rounded-full">2</span>
                        </button>
                        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-90">
                            <Settings className="w-5 h-5" />
                        </button>
                        <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--ec-error)] text-white hover:bg-red-700 transition-all active:scale-95 shadow-lg shadow-[var(--ec-error)]/20">
                            <PhoneOff className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </main>

            {/* Sidebar - Chat */}
            <aside className="hidden lg:flex w-96 h-screen flex-col bg-[#131b2e] ltr:border-l rtl:border-r border-white/5 shadow-2xl">
                {/* Sidebar Header / Timer */}
                <div className="p-6 border-b border-white/5 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-white font-bold text-lg leading-tight">{t.consultation.sessionInfo}</h2>
                        <div className="bg-[var(--ec-tertiary)]/10 border border-[var(--ec-tertiary)]/20 px-3 py-1 rounded-full flex items-center gap-2">
                            <Timer className="w-4 h-4 text-[var(--ec-tertiary)]" />
                            <span className="text-[var(--ec-tertiary)] font-mono font-bold text-sm tracking-widest">24:18</span>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <span className="px-2 py-1 bg-[var(--ec-primary)]/20 text-[var(--ec-primary)] text-[10px] uppercase font-bold tracking-widest rounded">
                            {t.consultation.technicalTrust}
                        </span>
                        <span className="px-2 py-1 bg-[var(--ec-secondary)]/20 text-[var(--ec-secondary-fixed)] text-[10px] uppercase font-bold tracking-widest rounded">
                            {t.consultation.encrypted}
                        </span>
                    </div>
                </div>

                {/* Tab Navigation */}
                <nav className="flex px-4 border-b border-white/5">
                    <button className="flex-1 py-4 text-[var(--ec-primary)] font-bold text-xs uppercase tracking-widest border-b-2 border-[var(--ec-primary)] transition-colors">
                        {t.consultation.chat}
                    </button>
                    <button className="flex-1 py-4 text-[var(--ec-on-surface-variant)] font-medium text-xs uppercase tracking-widest hover:text-white transition-colors">
                        {t.consultation.notes}
                    </button>
                    <button className="flex-1 py-4 text-[var(--ec-on-surface-variant)] font-medium text-xs uppercase tracking-widest hover:text-white transition-colors">
                        {t.common.details}
                    </button>
                </nav>

                {/* Chat Messages Area */}
                <ScrollArea className="flex-grow">
                    <div className="p-6 space-y-6">
                        {/* System Message */}
                        <div className="text-center">
                            <span className="text-[10px] text-[var(--ec-on-surface-variant)] uppercase tracking-widest">
                                {t.consultation.consultationStarted.replace("{time}", "2:00 PM")}
                            </span>
                        </div>

                        {/* Expert Message */}
                        <div className="flex gap-3 max-w-[85%]">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOXCFng_DAfyDu2xIaSjCFcmLQb2cRHJwmZjODmNWzxwwp7lE-yAssG8rpS3WSVj-07LtKm3cpnGVURz3GyBKDom0urrxHouTBQ-DZIRk1lXIDcjVT2p1g0r_NvaOxaGofIfBg0YfN4YC1r90U3rurK21IiGXlzE-thnHV7FMlZ8KxduX9LNOWy1xEpa3BKvCP7-0okmSWFzGStq06Nsiqmb_4vyfUWaacMFJ6iWM5aVYMf89eMxSNgnPAcQFpXpJWDlzgds-MxA"
                                alt="Sarah Avatar"
                                width={32}
                                height={32}
                                className="rounded-full object-cover mt-1"
                            />
                            <div>
                                <div className="bg-white/5 p-4 rounded-xl ltr:rounded-tl-none rtl:rounded-tr-none border border-white/5">
                                    <p className="text-white text-sm leading-relaxed">
                                        Hello John! I&apos;ve reviewed your latest reports. Let&apos;s start by discussing the symptoms you noted on Tuesday.
                                    </p>
                                </div>
                                <span className="text-[10px] text-[var(--ec-on-surface-variant)] mt-1 block">2:02 PM</span>
                            </div>
                        </div>

                        {/* User Message */}
                        <div className="flex flex-row-reverse gap-3 max-w-[85%] ltr:ml-auto rtl:mr-auto">
                            <div className="w-8 h-8 rounded-full bg-[var(--ec-primary)]/20 flex items-center justify-center mt-1">
                                <Users className="w-4 h-4 text-[var(--ec-primary)]" />
                            </div>
                            <div className="flex flex-col ltr:items-end rtl:items-start">
                                <div className="bg-[var(--ec-primary)] p-4 rounded-xl ltr:rounded-tr-none rtl:rounded-tl-none shadow-lg shadow-[var(--ec-primary)]/10">
                                    <p className="text-white text-sm leading-relaxed">
                                        Sounds good, Dr. Smith. I&apos;ve also uploaded the new charts in the &apos;Details&apos; tab for you.
                                    </p>
                                </div>
                                <span className="text-[10px] text-[var(--ec-on-surface-variant)] mt-1 block">2:03 PM</span>
                            </div>
                        </div>

                        {/* Shared Document Notification */}
                        <div className="flex items-center gap-3 bg-[var(--ec-tertiary)]/10 p-3 rounded-lg border border-[var(--ec-tertiary)]/20">
                            <FileEdit className="w-5 h-5 text-[var(--ec-tertiary)]" />
                            <div>
                                <p className="text-xs font-bold text-white">New Shared Note Created</p>
                                <p className="text-[10px] text-[var(--ec-on-surface-variant)]">Click the &apos;Notes&apos; tab to collaborate</p>
                            </div>
                        </div>
                    </div>
                </ScrollArea>

                {/* Chat Input Area */}
                <div className="p-6 bg-white/[0.02] border-t border-white/5">
                    <div className="relative flex items-center">
                        <Input
                            className="w-full bg-white/5 border-none rounded-xl px-4 py-4 ltr:pr-12 rtl:pl-12 text-sm text-white focus-visible:ring-2 focus-visible:ring-[var(--ec-primary)]/50 placeholder:text-[var(--ec-on-surface-variant)]"
                            placeholder={t.consultation.typePlaceholder}
                        />
                        <button className="absolute ltr:right-3 rtl:left-3 w-8 h-8 bg-[var(--ec-primary)] rounded-lg flex items-center justify-center text-white hover:bg-[var(--ec-primary-container)] transition-colors active:scale-90">
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="flex gap-4 mt-3 px-2">
                        <button className="text-[var(--ec-on-surface-variant)] hover:text-white transition-colors">
                            <Paperclip className="w-5 h-5" />
                        </button>
                        <button className="text-[var(--ec-on-surface-variant)] hover:text-white transition-colors">
                            <Smile className="w-5 h-5" />
                        </button>
                        <button className="text-[var(--ec-on-surface-variant)] hover:text-white transition-colors">
                            <MicIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Floating Encryption Toast */}
            <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-[#0b1c30]/90 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 flex items-center gap-4 shadow-2xl z-50 pointer-events-none">
                <div className="w-2 h-2 bg-[var(--ec-primary)] rounded-full animate-ping"></div>
                <span className="text-white text-xs font-medium tracking-wide">{t.consultation.secureEncryption}</span>
            </div>
        </div>
    );
}
