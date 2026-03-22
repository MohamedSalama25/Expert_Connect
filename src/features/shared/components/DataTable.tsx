import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/providers/LocaleProvider";

export interface Column<T> {
    key: string;
    label: string;
    render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
    className?: string;
}

export function DataTable<T>({
    data,
    columns,
    currentPage = 1,
    totalPages = 1,
    onPageChange,
    className,
}: DataTableProps<T>) {
    const { direction } = useLocale();
    const isRtl = direction === "rtl";

    const renderPaginationInfo = () => {
        if (totalPages <= 1) return null;

        const getPageNumbers = () => {
            const pages = [];
            const showMax = 3;
            let start = Math.max(1, currentPage - 1);
            let end = Math.min(totalPages, start + showMax - 1);

            if (end - start + 1 < showMax && start > 1) {
                start = Math.max(1, end - showMax + 1);
            }

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
            return pages;
        };

        const pages = getPageNumbers();

        return (
            <div className="flex items-center gap-2 text-sm text-[var(--ec-on-surface-variant)] font-medium">
                <span>Previous</span>
                <button
                    onClick={() => onPageChange?.(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-1.5 rounded-md hover:bg-[var(--ec-surface-container)] disabled:opacity-50 transition-colors"
                >
                    {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                </button>

                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange?.(page)}
                        className={cn(
                            "w-8 h-8 rounded-md flex items-center justify-center text-sm transition-colors",
                            currentPage === page
                                ? "bg-[var(--ec-primary-container)] text-[var(--ec-primary)] font-bold border border-[var(--ec-primary)]/20"
                                : "hover:bg-[var(--ec-surface-container)]"
                        )}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => onPageChange?.(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-1.5 rounded-md hover:bg-[var(--ec-surface-container)] disabled:opacity-50 transition-colors"
                >
                    {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
            </div>
        );
    };

    return (
        <div className={cn("w-full bg-card rounded-2xl border border-[var(--ec-outline-variant)]/40 overflow-hidden shadow-sm", className)}>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow className="border-none hover:bg-transparent">
                            {columns.map((col) => (
                                <TableHead
                                    key={col.key}
                                    className="py-4 font-extrabold text-[var(--ec-secondary)] uppercase text-xs tracking-wider border-none"
                                >
                                    {col.label}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-32 text-center text-muted-foreground">
                                    No data available.
                                </TableCell>
                            </TableRow>
                        ) : (
                            data.map((row, rowIndex) => (
                                <TableRow
                                    key={rowIndex}
                                    className="hover:bg-[var(--ec-surface)]/50 transition-colors border-b border-[var(--ec-outline-variant)]/20 last:border-none"
                                >
                                    {columns.map((col) => (
                                        <TableCell key={col.key} className="py-4 text-[var(--ec-on-surface)] font-medium border-none align-middle">
                                            {col.render ? col.render(row) : (row as any)[col.key]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Footer / Pagination */}
            <div className="flex items-center justify-end p-4 border-t border-[var(--ec-outline-variant)]/30 bg-card">
                {renderPaginationInfo()}
            </div>
        </div>
    );
}
