"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Calendar as CalendarIcon, Filter, Bell, Settings, ChevronDown, User, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { DataTable, Column } from "@/features/shared/components/DataTable";
import { useLocale } from "@/providers/LocaleProvider";
import { AdvancedFilters } from "./components/AdvancedFilters";
import { CalendarWidget } from "./components/CalendarWidget";

type AppointmentStatus = "Confirmed" | "Cancelled" | "Pending";

interface Appointment {
    id: string;
    clientName: string;
    clientSubtitle: string;
    clientAvatar: string;
    sessionType: string;
    dateStr: string;
    duration: string;
    status: AppointmentStatus;
    actionType: "View Details" | "Reschedule" | "Join Room";
}

const mockAppointments: Appointment[] = [
    {
        id: "1",
        clientName: "Alexandra Wright",
        clientSubtitle: "October, 4 view poxy",
        clientAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRccPQeyjMfENmX3-HNhgeLY-ybKn2R7wY3kDxmzyyLDIT4_xo1iBMHMl-JoPm9wj831c_7z3inMtXB04ESkAi5TAEBmy8q0IYJ1Rb4bgV35uCUYy5n5CNX1rtaVNykp0G8wz6jksbvHK_CRupVy31hhaaee7UJPKnAwh3VUYyGazD23c6wtipTJ-4QWnk3H-10VfqF0wyunnTP15MNT6T4qgygRicF4-f2qdsdbYydPO82LHgnGoBAoAvk7ZukjDyt3zjoDqD7w",
        sessionType: "Consultation",
        dateStr: "Oct 31, 2024",
        duration: "43m",
        status: "Confirmed",
        actionType: "View Details"
    },
    {
        id: "2",
        clientName: "Alexandra Wright",
        clientSubtitle: "October, 4 view poxy",
        clientAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRccPQeyjMfENmX3-HNhgeLY-ybKn2R7wY3kDxmzyyLDIT4_xo1iBMHMl-JoPm9wj831c_7z3inMtXB04ESkAi5TAEBmy8q0IYJ1Rb4bgV35uCUYy5n5CNX1rtaVNykp0G8wz6jksbvHK_CRupVy31hhaaee7UJPKnAwh3VUYyGazD23c6wtipTJ-4QWnk3H-10VfqF0wyunnTP15MNT6T4qgygRicF4-f2qdsdbYydPO82LHgnGoBAoAvk7ZukjDyt3zjoDqD7w",
        sessionType: "Consultation",
        dateStr: "Oct 24, 2024",
        duration: "45m",
        status: "Confirmed",
        actionType: "Reschedule"
    },
    {
        id: "3",
        clientName: "Mark Jenkins",
        clientSubtitle: "October anweron any",
        clientAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAShlefBZmeETzAMQc82cWjwqxJ-i_s400kV7HG08nh5jBHFu5A9M0ryYtFAVdbyeRSf3tOna9BXMbgrrA6tSt02olVWo4lhZ0oFkRoShCkopRe9eQPNuXkd4hgaELBWRwEQcyA3j2wH0oq18WXJM1vHYuwY8GNJNzIHTc2IL9Dtrp6GX1HqGJ3JDzgR-U2kO_UCeWgIikFvriyww0nCxJTHxURmfyLXpML9XDA9JL2ZI4vyWpC_F4tWS2ZYYyeGKzQTCg8zOiRNA",
        sessionType: "Generic Consultor",
        dateStr: "Oct 04, 2024",
        duration: "45m",
        status: "Cancelled",
        actionType: "Join Room"
    },
    {
        id: "4",
        clientName: "Michael Browy",
        clientSubtitle: "Brother inconstalioas",
        clientAvatar: "",
        sessionType: "Generic Consultor",
        dateStr: "Oct 23, 2024",
        duration: "36m",
        status: "Cancelled",
        actionType: "Join Room"
    },
    {
        id: "5",
        clientName: "Alexandre Hright",
        clientSubtitle: "October anwaron any",
        clientAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOXCFng_DAfyDu2xIaSjCFcmLQb2cRHJwmZjODmNWzxwwp7lE-yAssG8rpS3WSVj-07LtKm3cpnGVURz3GyBKDom0urrxHouTBQ-DZIRk1lXIDcjVT2p1g0r_NvaOxaGofIfBg0YfN4YC1r90U3rurK21IiGXlzE-thnHV7FMlZ8KxduX9LNOWy1xEpa3BKvCP7-0okmSWFzGStq06Nsiqmb_4vyfUWaacMFJ6iWM5aVYMf89eMxSNgnPAcQFpXpJWDlzgds-MxA",
        sessionType: "Generic Consultor",
        dateStr: "Oct 22, 2026",
        duration: "46m",
        status: "Pending",
        actionType: "View Details"
    },
    {
        id: "6",
        clientName: "Sarek renkins",
        clientSubtitle: "October anwaron any",
        clientAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRccPQeyjMfENmX3-HNhgeLY-ybKn2R7wY3kDxmzyyLDIT4_xo1iBMHMl-JoPm9wj831c_7z3inMtXB04ESkAi5TAEBmy8q0IYJ1Rb4bgV35uCUYy5n5CNX1rtaVNykp0G8wz6jksbvHK_CRupVy31hhaaee7UJPKnAwh3VUYyGazD23c6wtipTJ-4QWnk3H-10VfqF0wyunnTP15MNT6T4qgygRicF4-f2qdsdbYydPO82LHgnGoBAoAvk7ZukjDyt3zjoDqD7w",
        sessionType: "Generic Consultor",
        dateStr: "Oct 23, 2024",
        duration: "30m",
        status: "Pending",
        actionType: "Reschedule"
    },
    {
        id: "7",
        clientName: "Dave Binsley",
        clientSubtitle: "October emdniersons",
        clientAvatar: "",
        sessionType: "Consultation",
        dateStr: "Oct 23, 2024",
        duration: "45m",
        status: "Confirmed",
        actionType: "Join Room"
    }
];

export function AppointmentsPage() {
    const { direction } = useLocale();
    const isRtl = direction === "rtl";
    const [currentPage, setCurrentPage] = useState(2);

    const columns: Column<Appointment>[] = [
        {
            key: "client",
            label: "Client",
            render: (item) => (
                <div className="flex items-center gap-3">
                    {item.clientAvatar ? (
                        <Image
                            src={item.clientAvatar}
                            alt={item.clientName}
                            width={36}
                            height={36}
                            className="rounded-full object-cover w-9 h-9"
                        />
                    ) : (
                        <div className="w-9 h-9 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold text-xs shrink-0">
                            {item.clientName.substring(0, 2).toUpperCase()}
                        </div>
                    )}
                    <div className="flex flex-col">
                        <span className="font-bold text-[var(--ec-on-surface)]">{item.clientName}</span>
                        <span className="text-[10px] text-[var(--ec-on-surface-variant)] block max-w-[120px] truncate">{item.clientSubtitle}</span>
                    </div>
                </div>
            )
        },
        { key: "sessionType", label: "Session Type" },
        { key: "dateStr", label: "Date" },
        { key: "duration", label: "Duration" },
        {
            key: "status",
            label: "Status",
            render: (item) => {
                let pillClass = "";

                if (item.status === "Confirmed") {
                    pillClass = "bg-[var(--ec-primary)] text-white";
                } else if (item.status === "Cancelled") {
                    pillClass = "bg-red-500/10 text-red-500 font-bold border border-red-500/20";
                } else {
                    pillClass = "bg-blue-500/10 text-blue-500 font-bold border border-blue-500/20";
                }

                return (
                    <span className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide ${pillClass}`}>
                        {item.status}
                    </span>
                );
            }
        },
        {
            key: "actions",
            label: "Actions",
            render: (item) => (
                <Button
                    variant="ghost"
                    className="bg-[var(--ec-primary-container)]/10 hover:bg-[var(--ec-primary-container)]/20 border-none text-[var(--ec-primary)] rounded-xl font-bold text-xs px-6 h-9 transition-colors w-28"
                >
                    {item.actionType}
                </Button>
            )
        }
    ];

    return (
        <div className="flex-1 p-6 md:p-8 xl:p-10 w-full bg-[var(--ec-background)] min-h-screen">
            <h1 className="text-3xl font-black text-[var(--ec-on-surface)] tracking-tight mb-8">
                All Appointments
            </h1>

            <div className="flex xl:flex-row flex-col gap-6 mb-8 w-full">
                <AdvancedFilters />
                <CalendarWidget />
            </div>

            <DataTable
                columns={columns}
                data={mockAppointments}
                currentPage={currentPage}
                totalPages={4}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}
