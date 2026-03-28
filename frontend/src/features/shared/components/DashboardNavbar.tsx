"use client";

import Image from "next/image";
import { Search, Bell, Globe, Sun, Moon, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLocale } from "@/providers/LocaleProvider";
import { useTheme } from "next-themes";

import { DashboardNavbarProps } from "./Types";

export function DashboardNavbar({ onMobileMenuToggle }: DashboardNavbarProps) {
    const { toggleLocale } = useLocale();
    const { theme, setTheme } = useTheme();

    return (
        <header className="sticky top-0 z-30 flex justify-between items-center w-full px-4 md:px-10 py-4 md:py-5 bg-[var(--ec-surface-container-low)] border-b border-[var(--ec-outline-variant)]/30 shadow-sm backdrop-blur-md gap-3">
            {/* Mobile menu button */}
            <button
                onClick={onMobileMenuToggle}
                className="lg:hidden p-2 text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] hover:bg-[var(--ec-surface-container)] rounded-lg transition-colors flex-shrink-0"
            >
                <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4 bg-[var(--ec-surface-container-low)] px-4 py-2 rounded-xl w-full max-w-md ghost-border relative hidden sm:flex">
                <Search className="w-5 h-5 text-[var(--ec-secondary)] absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2" />
                <Input
                    className="bg-transparent border-none focus-visible:ring-0 shadow-none text-sm placeholder:text-[var(--ec-secondary)]/60 ltr:pl-8 rtl:pr-8 py-0 h-auto"
                    placeholder="Search sessions, clients..."
                />
            </div>
            <div className="flex items-center gap-3 md:gap-6 ltr:ml-auto rtl:mr-auto">
                <div className="flex items-center gap-2 md:gap-4">
                    <button className="relative p-2 text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-colors">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 ltr:right-2 rtl:left-2 w-2 h-2 bg-[var(--ec-error)] rounded-full"></span>
                    </button>
                    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-colors cursor-pointer hidden sm:block">
                        <Sun className="w-5 h-5 hidden dark:block" />
                        <Moon className="w-5 h-5 block dark:hidden" />
                    </button>
                    <button onClick={toggleLocale} className="p-2 text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-colors cursor-pointer hidden sm:block">
                        <Globe className="w-5 h-5" />
                    </button>
                </div>
                <div className="h-8 w-[1px] bg-[var(--ec-outline-variant)]/30 mx-1 md:mx-2 hidden sm:block"></div>
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="ltr:text-right rtl:text-left hidden md:block">
                        <p className="text-sm font-bold text-[var(--ec-on-surface)] leading-tight">Dr. Sarah Smith</p>
                        <p className="text-xs text-[var(--ec-on-surface-variant)] font-medium">Expert Psychiatrist</p>
                    </div>
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnuZ7bs2TC60loBQUroBm0Hrz1l6gbhT_CcfdMI48ysv7ELMKDbpFCbIMt1zym94l-v_wYHOTDS-XNdGPwJeoWwPTNKBXjcwaWhP7-24cQGhR8wJXNEBpiIH9enCs97zpkO-zcPA60nxCXsbcZ7PQSwHKXvDsPVyrHIIyeXDRSVDvVP_DIUUWjjtAkvwZcT4IxE6engkNoR8780EdBMZb47pzgKZ9ivx9yUj5OkWv4duVUJpToFuRBI54B0pzuMhhfuQlc5x_WyA"
                        alt="Dr. Sarah Smith"
                        width={40}
                        height={40}
                        className="rounded-xl object-cover ring-2 ring-[var(--ec-primary)]/10 group-hover:ring-[var(--ec-primary)]/30 transition-all flex-shrink-0"
                    />
                </div>
            </div>
        </header>
    );
}
