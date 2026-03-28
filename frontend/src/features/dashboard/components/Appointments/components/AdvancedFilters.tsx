import React from "react";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AdvancedFilters() {
    return (
        <div className="bg-card rounded-3xl p-6 border border-border flex-1 shadow-sm">
            <h3 className="text-[var(--ec-on-surface)] font-extrabold text-sm mb-4">Advanced Filters</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[var(--ec-on-surface-variant)]">Date Range</label>
                    <div className="relative">
                        <CalendarIcon className="w-4 h-4 absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            defaultValue="Oct 20, 2024 - Oct 26, 2024"
                            className="ltr:pl-9 rtl:pr-9 bg-muted border-border rounded-xl h-10 text-sm focus-visible:ring-[var(--ec-primary)]/20"
                        />
                        <CalendarIcon className="w-4 h-4 absolute ltr:right-3 rtl:left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[var(--ec-on-surface-variant)]">Client Name</label>
                    <Input
                        placeholder="Client Name"
                        className="bg-muted border-border rounded-xl h-10 text-sm focus-visible:ring-[var(--ec-primary)]/20 placeholder:text-muted-foreground"
                    />
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[var(--ec-on-surface-variant)]">Session Status</label>
                    <div className="relative">
                        <select className="w-full h-10 bg-muted border border-border rounded-xl text-sm px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--ec-primary)]/20 text-[var(--ec-on-surface)]">
                            <option>All</option>
                            <option>Confirmed</option>
                            <option>Pending</option>
                            <option>Cancelled</option>
                        </select>
                        <ChevronDown className="w-4 h-4 absolute ltr:right-3 rtl:left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                    </div>
                </div>
            </div>

            <Button className="mt-6 bg-[var(--ec-primary)] hover:bg-[var(--ec-primary)]/90 text-white font-bold rounded-xl px-6">
                Filter
            </Button>
        </div>
    );
}
