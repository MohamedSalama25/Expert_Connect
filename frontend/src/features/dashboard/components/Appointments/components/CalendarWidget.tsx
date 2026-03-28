import React from "react";
import { Calendar } from "@/components/ui/calendar";

export function CalendarWidget() {
    return (
        <div className="bg-card rounded-3xl p-6 border border-border shadow-sm w-full xl:w-[320px] flex-shrink-0 flex items-center justify-center">
            <Calendar
                mode="single"
                selected={new Date()}
                className="w-full flex justify-center scale-95 origin-center"
                classNames={{
                    head_cell: "text-[10px] uppercase font-bold text-muted-foreground w-9 font-normal",
                    cell: "text-center text-sm p-0 w-9 h-9 flex items-center justify-center relative focus-within:relative focus-within:z-20",
                    day: "h-8 w-8 p-0 font-medium hover:bg-muted rounded-full",
                    day_selected: "bg-[var(--ec-primary)] text-white hover:bg-[var(--ec-primary)] hover:text-white focus:bg-[var(--ec-primary)] focus:text-white rounded-full font-bold shadow-md",
                    caption_label: "font-black text-sm text-[var(--ec-on-surface)]",
                    nav_button: "h-7 w-7 bg-transparent hover:bg-muted p-0 rounded-full opacity-50 hover:opacity-100",
                }}
            />
        </div>
    );
}
