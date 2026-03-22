"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Download, CreditCard, Wallet, ArrowUpRight, ArrowDownLeft, Receipt, CheckCircle2, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DataTable, Column } from "@/features/shared/components/DataTable";

type TransactionStatus = "Completed" | "Processing" | "Failed";
type TransactionType = "Consultation" | "Withdrawal" | "Refund";

interface Transaction {
    id: string;
    transactionId: string;
    clientName: string;
    type: TransactionType;
    dateStr: string;
    amount: string;
    status: TransactionStatus;
}

const mockTransactions: Transaction[] = [
    {
        id: "1",
        transactionId: "TXN-8924194",
        clientName: "Alexandra Wright",
        type: "Consultation",
        dateStr: "Oct 31, 2024",
        amount: "+$120.00",
        status: "Completed",
    },
    {
        id: "2",
        transactionId: "TXN-8924195",
        clientName: "Bank Account (Visa •••• 4242)",
        type: "Withdrawal",
        dateStr: "Oct 28, 2024",
        amount: "-$1,500.00",
        status: "Completed",
    },
    {
        id: "3",
        transactionId: "TXN-8924196",
        clientName: "Mark Jenkins",
        type: "Consultation",
        dateStr: "Oct 24, 2024",
        amount: "+$150.00",
        status: "Completed",
    },
    {
        id: "4",
        transactionId: "TXN-8924197",
        clientName: "Michael Browy",
        type: "Refund",
        dateStr: "Oct 23, 2024",
        amount: "-$80.00",
        status: "Failed",
    },
    {
        id: "5",
        transactionId: "TXN-8924198",
        clientName: "Alexandre Hright",
        type: "Consultation",
        dateStr: "Oct 22, 2024",
        amount: "+$90.00",
        status: "Processing",
    },
    {
        id: "6",
        transactionId: "TXN-8924199",
        clientName: "Sarek renkins",
        type: "Consultation",
        dateStr: "Oct 21, 2024",
        amount: "+$200.00",
        status: "Completed",
    },
];

export function BillingPage() {
    const [currentPage, setCurrentPage] = useState(1);

    const columns: Column<Transaction>[] = [
        {
            key: "transactionId",
            label: "Transaction ID",
            render: (item) => (
                <span className="font-bold text-[var(--ec-on-surface)] opacity-80 uppercase tracking-widest text-xs">
                    {item.transactionId}
                </span>
            )
        },
        {
            key: "client",
            label: "Client / Destination",
            render: (item) => (
                <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${item.type === "Withdrawal" ? "bg-[var(--ec-tertiary-container)]/30 text-[var(--ec-tertiary)]" :
                        item.type === "Refund" ? "bg-[var(--ec-error-container)]/20 text-[var(--ec-error)]" : "bg-[var(--ec-primary-container)]/20 text-[var(--ec-primary)]"
                        }`}>
                        {item.type === "Withdrawal" ? <ArrowUpRight className="w-4 h-4" /> :
                            item.type === "Refund" ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowDownLeft className="w-4 h-4" />}
                    </div>
                    <span className="font-bold text-[var(--ec-on-surface)]">{item.clientName}</span>
                </div>
            )
        },
        {
            key: "type",
            label: "Type",
            render: (item) => (
                <span className="text-[var(--ec-on-surface-variant)] font-medium">
                    {item.type}
                </span>
            )
        },
        {
            key: "dateStr",
            label: "Date"
        },
        {
            key: "amount",
            label: "Amount",
            render: (item) => (
                <span className={`font-black tracking-tight ${item.amount.startsWith("+") ? "text-[var(--ec-primary)]" : "text-[var(--ec-on-surface)]"
                    }`}>
                    {item.amount}
                </span>
            )
        },
        {
            key: "status",
            label: "Status",
            render: (item) => {
                if (item.status === "Completed") {
                    return (
                        <div className="flex items-center gap-1.5 text-[var(--ec-primary)] text-sm font-bold bg-[var(--ec-primary-container)]/10 px-3 py-1 rounded-full w-fit border border-[var(--ec-primary)]/10">
                            <CheckCircle2 className="w-4 h-4 fill-current text-white/50" /> {item.status}
                        </div>
                    );
                } else if (item.status === "Processing") {
                    return (
                        <div className="flex items-center gap-1.5 text-amber-500 text-sm font-bold bg-amber-500/10 px-3 py-1 rounded-full w-fit border border-amber-500/20">
                            <Clock className="w-4 h-4" /> {item.status}
                        </div>
                    );
                } else {
                    return (
                        <div className="flex items-center gap-1.5 text-red-500 text-sm font-bold bg-red-500/10 px-3 py-1 rounded-full w-fit border border-red-500/20">
                            <Clock className="w-4 h-4" /> {item.status}
                        </div>
                    );
                }
            }
        },
        {
            key: "actions",
            label: "Actions",
            render: (item) => (
                <Button
                    variant="ghost"
                    className="hover:bg-[var(--ec-surface-container)] text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] font-bold text-xs px-4 h-8 transition-colors flex items-center gap-2"
                >
                    <Receipt className="w-4 h-4" /> Receipt
                </Button>
            )
        }
    ];

    return (
        <div className="flex-1 p-6 md:p-8 xl:p-10 w-full bg-[var(--ec-background)] min-h-screen">
            <div className="mb-6">
                <h1 className="text-3xl font-black text-[var(--ec-on-background)] tracking-tight mb-2">
                    Billing & Subscriptions
                </h1>
                <p className="text-[var(--ec-on-surface-variant)] text-sm font-medium">Welcome back, Dr. Sarah Smith. Here's what's happening today.</p>
            </div>

            {/* Top Overview Cards */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10 w-full">

                {/* Card 1: Platform Subscription */}
                <Card className="border border-border bg-card rounded-xl shadow-sm ambient-shadow">
                    <div className="border-b border-border p-4">
                        <h3 className="font-bold text-sm text-[var(--ec-on-surface)]">Platform Subscription</h3>
                    </div>
                    <CardContent className="p-8 flex flex-col items-center text-center">
                        <h2 className="text-5xl font-black text-[var(--ec-on-background)] tracking-tight mb-2">$1,840.50</h2>
                        <p className="text-xs text-[var(--ec-on-surface-variant)] font-bold tracking-widest uppercase mb-8">
                            Current balance
                        </p>
                        <p className="text-xs text-[var(--ec-on-surface-variant)] font-medium mb-8 uppercase tracking-wide">
                            NEXT BILLING DATE: <span className="font-black text-[var(--ec-on-background)] normal-case tracking-normal">Oct 24, 2024</span>
                        </p>
                        <Button className="w-full bg-[var(--ec-surface-container-highest)] text-[var(--ec-on-background)] font-bold rounded-xl py-6 relative transition-colors shadow-none text-base border border-[var(--ec-outline-variant)]/10">
                            Change Plan
                        </Button>
                    </CardContent>
                </Card>

                {/* Card 2: Payment Methods */}
                <Card className="border border-border bg-card rounded-xl shadow-sm ambient-shadow">
                    <div className="border-b border-border p-4">
                        <h3 className="font-bold text-sm text-[var(--ec-on-surface)]">Payment Methods</h3>
                    </div>
                    <CardContent className="p-6 flex flex-col h-[calc(100%-53px)]">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-medium text-[var(--ec-on-surface-variant)]">Add credit Card</span>
                            <Button className="bg-[#12b76a] hover:bg-[#0e9f5d] text-white px-5 py-2 h-auto text-xs font-bold rounded-lg border-none shadow-sm">
                                Add New Card
                            </Button>
                        </div>

                        <div className="w-full h-px bg-border/50 mb-4" />

                        {/* Select Input for Region */}
                        <div className="relative mb-6">
                            <div className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none z-10">
                                <span className="text-lg leading-none pt-0.5">🇪🇬</span>
                            </div>
                            <select className="w-full h-10 bg-transparent relative z-0 border-none rounded-lg text-sm text-[var(--ec-on-surface)] font-bold ltr:pl-10 rtl:pr-10 appearance-none outline-none ring-0">
                                <option>Local Egyptian</option>
                                <option>International</option>
                            </select>
                            <div className="absolute ltr:right-3 rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                                <ChevronDown className="w-4 h-4" />
                            </div>
                        </div>

                        {/* Credit Cards Grid */}
                        <div className="grid grid-cols-2 gap-3 mt-auto pt-2">
                            {/* Mastercard */}
                            <div className="bg-[#1e1f24] border border-white/5 rounded-[12px] p-5 text-white flex flex-col justify-between h-36 relative overflow-hidden shadow-2xl">
                                <div className="text-[12px] font-bold text-gray-300">Mastercard</div>
                                <div className="text-lg font-bold tracking-[0.2em] my-1">•••• 1234</div>
                                <div className="flex justify-between items-end">
                                    <div className="text-[11px] text-gray-400 font-medium tracking-wide">Dr. Sarah Smith</div>
                                    <div className="flex -space-x-2 opacity-90">
                                        <div className="w-6 h-6 rounded-full bg-red-500/90 mix-blend-normal z-0" />
                                        <div className="w-6 h-6 rounded-full bg-yellow-500/90 mix-blend-normal z-10" />
                                    </div>
                                </div>
                            </div>

                            {/* Visa */}
                            <div className="bg-gradient-to-br from-[#3b3a98] to-[#131252] border border-white/5 rounded-[12px] p-5 text-white flex flex-col justify-between h-36 relative overflow-hidden shadow-2xl">
                                <div className="text-right font-black italic text-2xl tracking-tighter leading-none h-6 pr-1">VISA</div>
                                <div className="text-lg font-bold tracking-[0.2em] my-1">•••• 5678</div>
                                <div className="flex justify-between items-end">
                                    <div className="text-[11px] text-gray-300/80 font-medium tracking-wide">Premium Client</div>
                                    <div className="flex -space-x-2 opacity-90">
                                        <div className="w-6 h-6 rounded-full bg-red-500/90 mix-blend-normal z-0" />
                                        <div className="w-6 h-6 rounded-full bg-yellow-500/90 mix-blend-normal z-10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            </div>

            {/* Transactions Section */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-black text-[var(--ec-on-surface)]">Transaction History</h3>
                <Button variant="outline" className="border border-border text-[var(--ec-secondary)] font-bold rounded-xl bg-card shadow-sm flex items-center gap-2 hover:bg-muted transition-colors">
                    <Download className="w-4 h-4" /> Export CSV
                </Button>
            </div>

            <DataTable
                columns={columns}
                data={mockTransactions}
                currentPage={currentPage}
                totalPages={12}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}
