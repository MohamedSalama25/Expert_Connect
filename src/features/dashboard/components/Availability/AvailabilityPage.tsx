"use client";

import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
    Calendar as CalendarIcon,
    ChevronLeft,
    ChevronRight,
    Bolt,
    Timer,
    RefreshCw,
    Coffee,
    PlusCircle,
    X,
    Info,
    Utensils,
    Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocale } from "@/providers/LocaleProvider";
import { cn } from "@/lib/utils";

interface TimeSlot {
    id: string;
    start: string;
    end: string;
    type: "available" | "available_light" | "break";
}

export function AvailabilityPage() {
    const { t, locale, direction } = useLocale();
    const calendarRef = useRef<any>(null);
    const [currentRange, setCurrentRange] = useState("Current Week");

    // Mock data matching the image exactly
    const [events, setEvents] = useState<TimeSlot[]>([
        // Row 1: 09:00 AM
        { id: "1", start: "2026-03-22T09:00:00", end: "2026-03-22T10:00:00", type: "available_light" },
        { id: "2", start: "2026-03-23T09:00:00", end: "2026-03-23T10:00:00", type: "available_light" },
        { id: "3", start: "2026-03-25T09:00:00", end: "2026-03-25T10:00:00", type: "available" },
        { id: "4", start: "2026-03-26T09:00:00", end: "2026-03-26T10:00:00", type: "available_light" },

        // Row 2: 10:00 AM
        { id: "1b", start: "2026-03-22T10:00:00", end: "2026-03-22T11:00:00", type: "available_light" },
        { id: "2b", start: "2026-03-23T10:00:00", end: "2026-03-23T11:00:00", type: "available_light" },
        { id: "3b", start: "2026-03-25T10:00:00", end: "2026-03-25T11:00:00", type: "available" },
        { id: "4b", start: "2026-03-26T10:00:00", end: "2026-03-26T11:00:00", type: "available_light" },

        // Row 3: 11:00 AM
        { id: "5", start: "2026-03-22T11:00:00", end: "2026-03-22T12:00:00", type: "available" },
        { id: "6", start: "2026-03-23T11:00:00", end: "2026-03-23T12:00:00", type: "available" },
        { id: "7", start: "2026-03-24T11:00:00", end: "2026-03-24T12:00:00", type: "available" },
        { id: "8", start: "2026-03-25T11:00:00", end: "2026-03-25T12:00:00", type: "available" },
        { id: "9", start: "2026-03-26T11:00:00", end: "2026-03-26T12:00:00", type: "available" },

        // Row 4: 12:00 PM
        { id: "10", start: "2026-03-22T12:00:00", end: "2026-03-22T13:00:00", type: "available" },
        { id: "11", start: "2026-03-23T12:00:00", end: "2026-03-23T13:00:00", type: "available" },
        { id: "12", start: "2026-03-24T12:00:00", end: "2026-03-24T13:00:00", type: "available" },
        { id: "13", start: "2026-03-25T12:00:00", end: "2026-03-25T13:00:00", type: "available" },
        { id: "14", start: "2026-03-26T12:00:00", end: "2026-03-26T13:00:00", type: "available" },

        // Row 5: 01:00 PM
        { id: "10b", start: "2026-03-22T13:00:00", end: "2026-03-22T14:00:00", type: "available" },
        { id: "11b", start: "2026-03-23T13:00:00", end: "2026-03-23T14:00:00", type: "available" },
        { id: "12b", start: "2026-03-24T13:00:00", end: "2026-03-24T14:00:00", type: "available" },
        { id: "13b", start: "2026-03-25T13:00:00", end: "2026-03-25T14:00:00", type: "available" },
        { id: "14b", start: "2026-03-26T13:00:00", end: "2026-03-26T14:00:00", type: "available" },

        // Row 6: 02:00 PM (Scheduled Break)
        { id: "b1", start: "2026-03-22T14:00:00", end: "2026-03-22T15:00:00", type: "break" },
        { id: "b2", start: "2026-03-23T14:00:00", end: "2026-03-23T15:00:00", type: "break" },
        { id: "b3", start: "2026-03-24T14:00:00", end: "2026-03-24T15:00:00", type: "break" },
        { id: "b4", start: "2026-03-25T14:00:00", end: "2026-03-25T15:00:00", type: "break" },
        { id: "b5", start: "2026-03-26T14:00:00", end: "2026-03-26T15:00:00", type: "break" },

        // Row 7: 03:00 PM
        { id: "15", start: "2026-03-22T15:00:00", end: "2026-03-22T16:00:00", type: "available" },
        { id: "16", start: "2026-03-23T15:00:00", end: "2026-03-23T16:00:00", type: "available" },
        { id: "17", start: "2026-03-24T15:00:00", end: "2026-03-24T16:00:00", type: "available" },
        { id: "19", start: "2026-03-26T15:00:00", end: "2026-03-26T16:00:00", type: "available" },

        // Row 8: 04:00 PM
        { id: "15b", start: "2026-03-22T16:00:00", end: "2026-03-22T17:00:00", type: "available" },
        { id: "16b", start: "2026-03-23T16:00:00", end: "2026-03-23T17:00:00", type: "available" },
        { id: "17b", start: "2026-03-24T16:00:00", end: "2026-03-24T17:00:00", type: "available" },
        { id: "19b", start: "2026-03-26T16:00:00", end: "2026-03-26T17:00:00", type: "available" },

        // Row 9: 05:00 PM
        { id: "20", start: "2026-03-22T17:00:00", end: "2026-03-22T18:00:00", type: "available" },
        { id: "21", start: "2026-03-23T17:00:00", end: "2026-03-23T18:00:00", type: "available" },
        { id: "22", start: "2026-03-24T17:00:00", end: "2026-03-24T18:00:00", type: "available" },
        { id: "23", start: "2026-03-25T17:00:00", end: "2026-03-25T18:00:00", type: "available" },
        { id: "24", start: "2026-03-26T17:00:00", end: "2026-03-26T18:00:00", type: "available" },
    ]);

    const handleSelect = (selectInfo: any) => {
        const calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();
        const newEvent: TimeSlot = {
            id: String(Date.now()),
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            type: "available",
        };
        setEvents([...events, newEvent]);
    };

    const handleEventClick = (clickInfo: any) => {
        if (confirm(`Delete this slot?`)) {
            setEvents(events.filter(e => e.id !== clickInfo.event.id));
        }
    };

    const handleEventChange = (changeInfo: any) => {
        const updatedEvents = events.map(e => {
            if (e.id === changeInfo.event.id) {
                return {
                    ...e,
                    start: changeInfo.event.startStr,
                    end: changeInfo.event.endStr,
                };
            }
            return e;
        });
        setEvents(updatedEvents as TimeSlot[]);
    };

    const nextTrip = () => {
        calendarRef.current.getApi().next();
    };

    const prevTrip = () => {
        calendarRef.current.getApi().prev();
    };

    return (
        <div className="flex-1 w-full bg-[#f8fafc] min-h-screen font-['Inter',sans-serif]">
            <main className="p-4 sm:p-6 lg:p-12 space-y-8 lg:space-y-10 max-w-7xl mx-auto w-full pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left Column: Weekly Calendar */}
                    <div className="lg:col-span-8 space-y-8">
                        <Card className="bg-white rounded-2xl lg:rounded-[2rem] p-4 sm:p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-slate-100 overflow-hidden">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 lg:mb-10">
                                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#00bfa5]">
                                        <CalendarIcon className="w-6 h-6" />
                                    </div>
                                    Weekly Availability
                                </h2>
                                <div className="flex items-center gap-4">
                                    <button onClick={prevTrip} className="p-2 hover:bg-slate-50 rounded-full text-slate-400">
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <Button variant="secondary" className="px-6 rounded-xl bg-[#eef2ff] text-[#4f46e5] font-black hover:bg-[#e0e7ff] h-11 border-none tracking-tight">
                                        Current Week
                                    </Button>
                                    <button onClick={nextTrip} className="p-2 hover:bg-slate-50 rounded-full text-slate-400">
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="availability-calendar-layout">
                                <style jsx global>{`
                                    .availability-calendar-layout .fc {
                                        font-family: inherit;
                                        border: none !important;
                                    }
                                    .availability-calendar-layout .fc-theme-standard td, 
                                    .availability-calendar-layout .fc-theme-standard th {
                                        border: none !important;
                                    }
                                    .availability-calendar-layout .fc-col-header {
                                        margin-bottom: 24px !important;
                                        border-bottom: 1px solid #f1f5f9 !important;
                                    }
                                    .availability-calendar-layout .fc-timegrid-slot {
                                        height: 54px !important;
                                    }
                                    .availability-calendar-layout .fc-timegrid-slot-label-cushion {
                                        font-size: 10px !important;
                                        font-weight: 800 !important;
                                        color: #94a3b8 !important;
                                        text-transform: uppercase;
                                        padding-right: 24px !important;
                                    }
                                    
                                    /* Grid Cell Style */
                                    .availability-calendar-layout .fc-timegrid-col {
                                        border-right: 1px solid #f8fafc !important;
                                    }

                                    /* Custom Event Styles */
                                    .availability-calendar-layout .fc-event {
                                        border: none !important;
                                        margin: 1px !important;
                                        border-radius: 6px !important;
                                        overflow: hidden !important;
                                        box-shadow: none !important;
                                    }
                                    .availability-calendar-layout .event-available {
                                        background: #00c49f !important; /* Solid Emerald/Teal */
                                    }
                                    .availability-calendar-layout .event-available-light {
                                        background: #cbf5ed !important; /* Mint */
                                    }
                                    .availability-calendar-layout .event-break {
                                        background: #f1f5f9 !important; /* Light Gray */
                                        display: flex !important;
                                        align-items: center !important;
                                        justify-content: center !important;
                                    }
                                    
                                    .availability-calendar-layout .fc-timegrid-col-events {
                                        margin: 0 !important;
                                    }
                                    .availability-calendar-layout .fc-timegrid-divider { display: none !important; }
                                    .availability-calendar-layout .fc-header-toolbar { display: none !important; }
                                    .availability-calendar-layout .fc-scrollgrid { border: none !important; }
                                `}</style>
                                <FullCalendar
                                    ref={calendarRef}
                                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                    initialView="timeGridWeek"
                                    editable={true}
                                    selectable={true}
                                    selectMirror={true}
                                    events={events}
                                    select={handleSelect}
                                    eventClick={handleEventClick}
                                    eventChange={handleEventChange}
                                    slotMinTime="09:00:00"
                                    slotMaxTime="18:00:00" // Matches 5PM being the last visible hour
                                    allDaySlot={false}
                                    height="auto"
                                    slotDuration="01:00:00"
                                    snapDuration="01:00:00"
                                    dayHeaderContent={(args: any) => (
                                        <div className="flex flex-col items-center py-2">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{args.date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                                            <span className={cn(
                                                "text-xl font-black mt-2",
                                                args.date.getDay() === 4 ? "text-[#00c49f]" : "text-slate-800"
                                            )}>
                                                {args.date.getDate()}
                                            </span>
                                        </div>
                                    )}
                                    eventClassNames={(arg) => `event-${arg.event.extendedProps.type}`}
                                    eventContent={(arg) => {
                                        if (arg.event.extendedProps.type === 'break') {
                                            return (
                                                <div className="flex items-center justify-center w-full h-full opacity-40 translate-y-[-2px]">
                                                    <Utensils className="w-4 h-4 text-slate-400" />
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                    slotLabelFormat={{
                                        hour: 'numeric',
                                        minute: '2-digit',
                                        omitZeroMinute: false,
                                        meridiem: 'short'
                                    }}
                                />
                            </div>

                            <div className="mt-8 lg:mt-12 flex flex-wrap gap-4 md:gap-8 text-[11px] text-slate-400 font-black uppercase tracking-widest">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-[#00c49f] rounded-md shadow-sm"></div>
                                    <span>Available</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-[#eef2ff] rounded-md border border-slate-100"></div>
                                    <span>Unavailable</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-[#f1f5f9] rounded-md border border-slate-100"></div>
                                    <span>Scheduled Break</span>
                                </div>
                            </div>
                        </Card>

                        {/* Instant Booking Toggle Card */}
                        <Card className="bg-[#eef2ff] rounded-2xl lg:rounded-[2.5rem] p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-none shadow-sm group">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#00c49f] shadow-[0_12px_24px_rgba(0,196,159,0.15)] group-hover:scale-105 transition-transform duration-300">
                                    <Bolt className="w-8 h-8 fill-current" />
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-800 text-lg">Instant Booking</h4>
                                    <p className="text-sm font-medium text-slate-500">Allow clients to book immediately without manual confirmation.</p>
                                </div>
                            </div>
                            <div className={cn(
                                "w-14 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300",
                                "bg-[#006b5f]"
                            )}>
                                <div className="bg-white w-6 h-6 rounded-full shadow-md transform translate-x-6"></div>
                            </div>
                        </Card>
                    </div>

                    {/* Right Column: Sidebar Controls */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Quick Actions */}
                        <Card className="bg-white rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-slate-100">
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Quick Actions</h3>
                            <div className="space-y-4">
                                <button className="w-full flex items-center gap-4 px-6 py-4 bg-[#f1f5f9]/40 hover:bg-[#f1f5f9] transition-all duration-300 rounded-2xl text-slate-700 font-bold text-sm group">
                                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#00c49f] group-hover:scale-110 transition-transform">
                                        <Timer className="w-5 h-5" />
                                    </div>
                                    Add Buffer Time
                                </button>
                                <button className="w-full flex items-center gap-4 px-6 py-4 bg-[#f1f5f9]/40 hover:bg-[#f1f5f9] transition-all duration-300 rounded-2xl text-slate-700 font-bold text-sm group">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#4f46e5] group-hover:rotate-12 transition-transform">
                                        <RefreshCw className="w-5 h-5" />
                                    </div>
                                    Sync Google Calendar
                                </button>
                                <button className="w-full flex items-center gap-4 px-6 py-4 bg-[#f1f5f9]/40 hover:bg-[#f1f5f9] transition-all duration-300 rounded-2xl text-slate-700 font-bold text-sm group">
                                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:rotate-12 transition-transform">
                                        <Coffee className="w-5 h-5" />
                                    </div>
                                    Set Lunch Break
                                </button>
                            </div>
                        </Card>

                        {/* Default Working Hours */}
                        <Card className="bg-white rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-slate-100">
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-8">Default Working Hours</h3>
                            <div className="space-y-6">
                                {["Mon", "Tue", "Wed"].map((day) => (
                                    <div key={day} className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-md bg-[#006b5f] flex items-center justify-center text-white shadow-sm">
                                                <div className="w-2.5 h-1.5 border-l-2 border-b-2 border-white -rotate-45 mb-0.5"></div>
                                            </div>
                                            <span className="text-md font-black text-slate-800">{day}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="bg-[#f1f5f9] px-4 py-2 rounded-xl text-xs font-bold text-slate-600">09:00</div>
                                            <span className="text-slate-300 font-bold">-</span>
                                            <div className="bg-[#f1f5f9] px-4 py-2 rounded-xl text-xs font-bold text-slate-600">17:00</div>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex items-center justify-between opacity-50">
                                    <div className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-md border-2 border-slate-200"></div>
                                        <span className="text-md font-black text-slate-800">Sat</span>
                                    </div>
                                    <span className="text-xs font-bold italic text-slate-400">Unavailable</span>
                                </div>
                            </div>
                        </Card>

                        {/* Custom Dates */}
                        <Card className="bg-white rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-slate-100">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Custom Dates</h3>
                                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-[#00c49f] cursor-pointer hover:scale-110 transition-all duration-300">
                                    <Plus className="w-4 h-4 stroke-[3]" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="p-5 bg-red-50/50 rounded-2xl flex items-center justify-between border-l-4 border-red-500 shadow-sm">
                                    <div>
                                        <p className="text-sm font-black text-red-700">Christmas Holiday</p>
                                        <p className="text-xs font-bold text-red-600/60 mt-1">Dec 24 - Dec 26</p>
                                    </div>
                                    <X className="w-4 h-4 text-red-300 cursor-pointer hover:text-red-500 transition-colors" />
                                </div>
                                <div className="p-5 bg-amber-50/50 rounded-2xl flex items-center justify-between border-l-4 border-amber-500 shadow-sm">
                                    <div>
                                        <p className="text-sm font-black text-amber-700">Expert Workshop</p>
                                        <p className="text-xs font-bold text-amber-600/60 mt-1">Jan 12 (09:00-12:00)</p>
                                    </div>
                                    <X className="w-4 h-4 text-amber-300 cursor-pointer hover:text-amber-700 transition-colors" />
                                </div>
                            </div>
                        </Card>
                    </aside>
                </div>

                {/* Footer Save Bar */}
                <div className="mt-8 lg:mt-12 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-2xl lg:rounded-[2.5rem] p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white border border-slate-800 transform hover:scale-[1.005] transition-transform duration-300">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-[#00c49f] shadow-inner">
                            <Info className="w-7 h-7 fill-current" />
                        </div>
                        <p className="text-md font-bold text-slate-200">You have unsaved changes to your Thursday schedule.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-stretch sm:items-center w-full sm:w-auto">
                        <button className="text-sm font-black text-slate-400 hover:text-white transition-colors uppercase tracking-widest">Discard</button>
                        <Button className="px-10 py-5 bg-[#00c49f] hover:bg-[#00a887] text-white font-black rounded-2xl shadow-[0_12px_32px_rgba(0,196,159,0.35)] transition-all h-auto border-none text-md">
                            Save Availability
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}
