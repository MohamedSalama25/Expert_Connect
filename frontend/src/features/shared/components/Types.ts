import React, { ReactNode } from "react";

export interface DashboardNavbarProps {
    onMobileMenuToggle?: () => void;
}

export interface SidebarProps {
    isCollapsed?: boolean;
    onToggle?: () => void;
    isMobileOpen?: boolean;
    onMobileClose?: () => void;
}

export interface SidebarItem {
    icon: React.ElementType;
    labelKey: keyof typeof import("@/config/i18n/en").default.nav;
    href: string;
}

export interface Column<T> {
    key: string;
    label: string;
    render?: (item: T) => React.ReactNode;
}

export interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
    className?: string;
}
