"use client";

import Link from "next/link";
import {
    LayoutGrid,
    Calendar,
    MessageCircle,
    Wallet,
    User,
    TrendingUp,
    CalendarCheck,
    Settings,
    HelpCircle,
    PanelLeftClose,
    PanelLeftOpen,
    Video,
} from "lucide-react";
import { useLocale } from "@/providers/LocaleProvider";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface SidebarProps {
    isCollapsed?: boolean;
    onToggle?: () => void;
    isMobileOpen?: boolean;
    onMobileClose?: () => void;
}

interface SidebarItem {
    icon: React.ElementType;
    labelKey: keyof typeof import("@/config/i18n/en").default.nav;
    href: string;
}

const navItems: SidebarItem[] = [
    { icon: LayoutGrid, labelKey: "dashboard", href: "/dashboard" },
    { icon: Calendar, labelKey: "appointments", href: "/dashboard/appointments" },
    { icon: MessageCircle, labelKey: "messages", href: "/dashboard/messages" },
    { icon: Wallet, labelKey: "billing", href: "/dashboard/billing" },
    { icon: User, labelKey: "profileNav", href: "/dashboard/profile" },
    { icon: TrendingUp, labelKey: "earnings", href: "/dashboard/earnings" },
    { icon: CalendarCheck, labelKey: "availability", href: "/dashboard/availability" },
];

const bottomItems: SidebarItem[] = [
    { icon: Settings, labelKey: "settings", href: "/dashboard/settings" },
    { icon: HelpCircle, labelKey: "help", href: "/dashboard/help" },
];

export function DashboardSidebar({ isCollapsed = false, onToggle, isMobileOpen = false, onMobileClose }: SidebarProps) {
    const { t } = useLocale();
    const pathname = usePathname();

    return (
        <aside className={cn(
            "h-screen flex flex-col fixed ltr:left-0 rtl:right-0 top-0 bg-[var(--ec-surface-container-low)] z-40 transition-all duration-300 ltr:border-r rtl:border-l border-[var(--ec-outline-variant)]/20 shadow-xl",
            isCollapsed ? "w-20" : "w-72",
            // Mobile: hidden by default, shown when isMobileOpen
            isMobileOpen ? "translate-x-0" : "ltr:-translate-x-full rtl:translate-x-full",
            "lg:ltr:translate-x-0 lg:rtl:translate-x-0"
        )}>
            {/* Header & Toggle */}
            <div className={cn("flex flex-col pt-8 pb-6", isCollapsed ? "items-center px-0" : "px-8")}>
                <div className={cn("flex items-center", isCollapsed ? "justify-center" : "justify-between")}>
                    {!isCollapsed && (
                        <Link href="/" className="text-2xl font-black text-[var(--ec-on-surface)] tracking-tighter truncate">
                            {t.common.brandName}
                        </Link>
                    )}
                    {onToggle && (
                        <button onClick={onToggle} className="p-2 text-[var(--ec-secondary)] hover:bg-[var(--ec-surface-container)] hover:text-[var(--ec-primary)] rounded-lg transition-colors">
                            {isCollapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5 ltr:rotate-0 rtl:rotate-180" />}
                        </button>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col h-full py-2 space-y-1">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    const linkContent = (
                        <Link
                            href={item.href}
                            className={cn(
                                "flex items-center py-3 font-semibold text-sm transition-all relative overflow-hidden group",
                                isCollapsed ? "justify-center mx-3 rounded-xl gap-0 hover:bg-[var(--ec-surface-container)] px-0" : "gap-3 ltr:rounded-l-full rtl:rounded-r-full ltr:ml-4 rtl:mr-4 ltr:pl-4 rtl:pr-4",
                                isActive && !isCollapsed && "bg-[var(--ec-surface-container-lowest)] text-[var(--ec-primary)] ltr:border-l-4 rtl:border-r-4 border-[var(--ec-primary)]",
                                isActive && isCollapsed && "bg-[var(--ec-primary-container)]/10 text-[var(--ec-primary)] border border-[var(--ec-primary)]/20",
                                !isActive && !isCollapsed && "text-[var(--ec-secondary)] hover:bg-[var(--ec-surface-container-lowest)]/50 border-transparent ltr:border-l-4 rtl:border-r-4",
                                !isActive && isCollapsed && "text-[var(--ec-secondary)]"
                            )}
                        >
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            {!isCollapsed && <span className="truncate">{t.nav[item.labelKey]}</span>}
                        </Link>
                    );

                    return isCollapsed ? (
                        <Tooltip key={item.labelKey}>
                            <TooltipTrigger render={<div className="cursor-pointer" />}>
                                {linkContent}
                            </TooltipTrigger>
                            <TooltipContent side="right" className="font-bold">
                                {t.nav[item.labelKey]}
                            </TooltipContent>
                        </Tooltip>
                    ) : (
                        <div key={item.labelKey}>{linkContent}</div>
                    );
                })}

                {/* Bottom Items */}
                <div className="mt-auto pb-8 space-y-1">
                    {!isCollapsed ? (
                        <button className="mx-8 mb-6 signature-gradient text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[var(--ec-primary)]/20 active:scale-95 transition-transform w-[calc(100%-4rem)] cursor-pointer">
                            {t.common.goLive}
                        </button>
                    ) : (
                        <Tooltip>
                            <TooltipTrigger render={<div className="cursor-pointer" />}>
                                <div className="mx-4 mb-6 signature-gradient text-white p-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[var(--ec-primary)]/20 active:scale-95 transition-transform cursor-pointer w-[calc(100%-2rem)]">
                                    <Video className="w-5 h-5 flex-shrink-0" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent side="right" className="font-bold">{t.common.goLive}</TooltipContent>
                        </Tooltip>
                    )}
                    {bottomItems.map((item) => {
                        const Icon = item.icon;
                        const linkContent = (
                            <Link
                                href={item.href}
                                className={cn(
                                    "flex items-center font-semibold text-sm transition-all text-[var(--ec-secondary)]",
                                    isCollapsed ? "justify-center mx-3 py-3 rounded-xl hover:bg-[var(--ec-surface-container)]" : "gap-3 ltr:pl-8 rtl:pr-8 py-3 hover:bg-[var(--ec-surface-container-lowest)]/50"
                                )}
                            >
                                <Icon className="w-5 h-5 flex-shrink-0" />
                                {!isCollapsed && <span className="truncate">{t.nav[item.labelKey]}</span>}
                            </Link>
                        );

                        return isCollapsed ? (
                            <Tooltip key={item.labelKey}>
                                <TooltipTrigger render={<div className="cursor-pointer" />}>{linkContent}</TooltipTrigger>
                                <TooltipContent side="right" className="font-bold">{t.nav[item.labelKey]}</TooltipContent>
                            </Tooltip>
                        ) : (
                            <div key={item.labelKey}>{linkContent}</div>
                        );
                    })}
                </div>
            </nav>
        </aside>
    );
}
