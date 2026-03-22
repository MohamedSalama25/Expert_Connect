"use client";

import React from "react";
import {
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Wallet,
    CreditCard,
    Calendar,
    Target,
    Download,
    ArrowRight,
    CircleDollarSign,
    Clock,
    ShieldCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {
    ComposedChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartConfig
} from "@/components/ui/chart";
import { useLocale } from "@/providers/LocaleProvider";
import { cn } from "@/lib/utils";
import { DataTable, Column } from "@/features/shared/components/DataTable";

export function EarningsPage() {
    const { t } = useLocale();
    const [activeFilter, setActiveFilter] = React.useState<"day" | "week" | "month" | "year">("week");

    const dataSets = {
        day: [
            { label: "08:00", earnings: 120, value1: 100, value2: 90 },
            { label: "10:00", earnings: 340, value1: 280, value2: 260 },
            { label: "12:00", earnings: 450, value1: 320, value2: 300 },
            { label: "14:00", earnings: 600, value1: 540, value2: 500 },
            { label: "16:00", earnings: 550, value1: 400, value2: 380 },
            { label: "18:00", earnings: 800, value1: 750, value2: 700 },
            { label: "20:00", earnings: 1200, value1: 950, value2: 880 },
        ],
        week: [
            { label: "Mon", earnings: 450, value1: 250, value2: 240 },
            { label: "Tue", earnings: 600, value1: 280, value2: 260 },
            { label: "Wed", earnings: 950, value1: 650, value2: 500 },
            { label: "Thu", earnings: 1280, value1: 580, value2: 540 },
            { label: "Fri", earnings: 900, value1: 350, value2: 320 },
            { label: "Sat", earnings: 980, value1: 320, value2: 300 },
            { label: "Sun", earnings: 1550, value1: 400, value2: 480 },
        ],
        month: [
            { label: "Oct 31", earnings: 450, value1: 250, value2: 240 },
            { label: "Nov 15", earnings: 600, value1: 280, value2: 260 },
            { label: "Dec 15", earnings: 950, value1: 650, value2: 500 },
            { label: "Jan 24", earnings: 1280, value1: 580, value2: 540 },
            { label: "Feb 15", earnings: 900, value1: 350, value2: 320 },
            { label: "Mar 15", earnings: 980, value1: 320, value2: 300 },
            { label: "Apr 24", earnings: 1000, value1: 400, value2: 480 },
            { label: "May 15", earnings: 1650, value1: 700, value2: 620 },
            { label: "Jun 23", earnings: 1150, value1: 750, value2: 700 },
            { label: "Jul 15", earnings: 1100, value1: 950, value2: 880 },
            { label: "Aug 15", earnings: 1510, value1: 600, value2: 560 },
            { label: "Sep 15", earnings: 1300, value1: 1250, value2: 920 },
            { label: "Oct 23", earnings: 1500, value1: 1000, value2: 950 },
            { label: "Nov 15", earnings: 1300, value1: 1350, value2: 1020 },
            { label: "Dec 15", earnings: 1680, value1: 1050, value2: 980 },
            { label: "CI 024", earnings: 1550, value1: 1510, value2: 1100 },
        ],
        year: [
            { label: "2019", earnings: 8500, value1: 7500, value2: 7000 },
            { label: "2020", earnings: 12000, value1: 11000, value2: 10500 },
            { label: "2021", earnings: 15500, value1: 14500, value2: 13800 },
            { label: "2022", earnings: 22000, value1: 20000, value2: 19500 },
            { label: "2023", earnings: 28500, value1: 27000, value2: 26200 },
            { label: "2024", earnings: 32840, value1: 31000, value2: 30200 },
        ]
    };

    return (
        <div className="flex-1 p-6 md:p-8 xl:p-10 w-full bg-[var(--ec-background)] min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
                    <div>
                        <h1 className="text-3xl font-black text-[var(--ec-on-surface)] tracking-tight mb-2">
                            {t.dashboard.earningsTitle}
                        </h1>
                        <p className="text-[var(--ec-on-surface-variant)] text-sm font-medium">
                            Comprehensive overview of your professional revenue and financial distributions.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="rounded-xl font-bold bg-card border-border/40 gap-2 h-11">
                            <Download className="w-4 h-4" /> Export CSV
                        </Button>
                        <Button className="rounded-xl font-black bg-[var(--ec-primary)] hover:bg-[var(--ec-primary)]/90 text-white shadow-lg shadow-[var(--ec-primary)]/20 px-8 h-11">
                            {t.dashboard.withdrawEarnings}
                        </Button>
                    </div>
                </div>

                {/* Top Financial Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card className="bg-card ambient-shadow border border-border relative overflow-hidden group">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-[var(--ec-primary-container)]/10 flex items-center justify-center text-[var(--ec-primary)]">
                                    <Wallet className="w-6 h-6" />
                                </div>
                                <Badge className="bg-[var(--ec-primary-container)]/20 text-[var(--ec-primary)] text-[10px] font-black border-none">+12%</Badge>
                            </div>
                            <p className="text-xs font-black text-[var(--ec-secondary)] uppercase tracking-[0.15em] mb-1">{t.dashboard.currentBalance}</p>
                            <h3 className="text-3xl font-black text-[var(--ec-on-surface)]">$12,840.50</h3>
                        </CardContent>
                    </Card>

                    <Card className="bg-card ambient-shadow border border-border">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-[var(--ec-tertiary-container)]/10 flex items-center justify-center text-[var(--ec-tertiary)]">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                            </div>
                            <p className="text-xs font-black text-[var(--ec-secondary)] uppercase tracking-[0.15em] mb-1">{t.dashboard.availableToWithdraw}</p>
                            <h3 className="text-3xl font-black text-[var(--ec-on-surface)]">$8,240.00</h3>
                        </CardContent>
                    </Card>

                    <Card className="bg-card ambient-shadow border border-border">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-[var(--ec-secondary-container)]/20 flex items-center justify-center text-[var(--ec-secondary)]">
                                    <Clock className="w-6 h-6" />
                                </div>
                            </div>
                            <p className="text-xs font-black text-[var(--ec-secondary)] uppercase tracking-[0.15em] mb-1">{t.dashboard.pendingClearance}</p>
                            <h3 className="text-3xl font-black text-[var(--ec-on-surface)]">$4,600.50</h3>
                        </CardContent>
                    </Card>

                    <Card className="bg-[var(--ec-on-surface)] text-white border-none relative overflow-hidden">
                        <CardContent className="p-6 relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-[var(--ec-primary)] flex items-center justify-center text-white">
                                    <Target className="w-6 h-6" />
                                </div>
                            </div>
                            <p className="text-xs font-black text-white/50 uppercase tracking-[0.15em] mb-1">Monthly Goal</p>
                            <h3 className="text-3xl font-black text-white">85% <span className="text-sm font-medium text-white/40">Reached</span></h3>
                            <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
                                <div className="h-full bg-[var(--ec-primary)] rounded-full w-[85%]" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Performance Visualization */}
                    <Card className="col-span-1 lg:col-span-8 bg-card ambient-shadow border border-border flex flex-col">
                        <CardHeader className="p-4 sm:p-6 lg:p-8 pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <CardTitle className="text-xl font-black text-[var(--ec-on-surface)]">Revenue Trajectory</CardTitle>
                                <CardDescription className="text-xs font-medium">Daily income distribution for the current billing cycle.</CardDescription>
                            </div>
                            <div className="flex bg-[var(--ec-surface-container-low)] p-1 rounded-xl border border-border/10">
                                {["day", "week", "month", "year"].map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setActiveFilter(filter as any)}
                                        className={cn(
                                            "px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all",
                                            activeFilter === filter
                                                ? "bg-[var(--ec-primary)]/10 text-[var(--ec-primary)] font-bold shadow-sm"
                                                : "text-[var(--ec-secondary)] hover:text-[var(--ec-on-surface)]"
                                        )}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </CardHeader>
                        <CardContent className="p-8 flex-grow flex flex-col min-h-[400px]">
                            <ChartContainer config={{
                                earnings: { label: "Earnings", color: "var(--ec-primary)" },
                                value1: { label: "Projected", color: "var(--ec-primary)" },
                                value2: { label: "Actual", color: "#c084fc" }
                            }} className="h-full w-full">
                                <ComposedChart
                                    data={dataSets[activeFilter]}
                                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                                >
                                    <defs>
                                        <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#0d9488" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#0d9488" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="var(--ec-outline-variant)" opacity={0.2} />
                                    <XAxis
                                        dataKey="label"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: 'var(--ec-secondary)', fontSize: 10, fontWeight: 700 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: 'var(--ec-secondary)', fontSize: 10, fontWeight: 700 }}
                                        tickFormatter={(value) => `$${value}`}
                                        domain={activeFilter === 'year' ? [0, 50000] : [0, 2000]}
                                        ticks={activeFilter === 'year' ? [0, 10000, 20000, 30000, 40000, 50000] : [0, 500, 1000, 1500, 2000]}
                                    />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <Area
                                        type="monotone"
                                        dataKey="earnings"
                                        stroke="#0d9488"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorEarnings)"
                                        dot={false}
                                    />
                                    <Bar dataKey="value2" fill="#e9d5ff" radius={[4, 4, 0, 0]} barSize={activeFilter === 'month' ? 12 : activeFilter === 'year' ? 32 : 24} />
                                    <Bar dataKey="value1" fill="#0d9488" radius={[4, 4, 0, 0]} barSize={activeFilter === 'month' ? 12 : activeFilter === 'year' ? 32 : 24} />
                                </ComposedChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>

                    {/* Secondary Insights */}
                    <div className="col-span-1 lg:col-span-4 space-y-8">
                        {/* Summary Widget */}
                        <Card className="bg-card ambient-shadow border border-border">
                            <CardHeader className="p-8 pb-4">
                                <CardTitle className="text-lg font-black text-[var(--ec-on-surface)] uppercase tracking-tight">Financial Insights</CardTitle>
                            </CardHeader>
                            <CardContent className="p-8 pt-0 space-y-6">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-4 rounded-2xl bg-[var(--ec-surface-container-low)] border border-border/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[var(--ec-primary)]/10 flex items-center justify-center text-[var(--ec-primary)]">
                                                <TrendingUp className="w-4 h-4" />
                                            </div>
                                            <span className="text-xs font-bold text-[var(--ec-secondary)]">{t.dashboard.avgEarningsPerSession}</span>
                                        </div>
                                        <span className="font-black text-[var(--ec-on-surface)]">$145.00</span>
                                    </div>
                                    <div className="flex justify-between items-center p-4 rounded-2xl bg-[var(--ec-surface-container-low)] border border-border/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[var(--ec-tertiary)]/10 flex items-center justify-center text-[var(--ec-tertiary)]">
                                                <ArrowUpRight className="w-4 h-4" />
                                            </div>
                                            <span className="text-xs font-bold text-[var(--ec-secondary)]">{t.dashboard.topPerformingSpecialty}</span>
                                        </div>
                                        <span className="font-black text-[var(--ec-on-surface)]">Cybersecurity</span>
                                    </div>
                                    <div className="flex justify-between items-center p-4 rounded-2xl bg-[var(--ec-surface-container-low)] border border-border/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                                                <Clock className="w-4 h-4" />
                                            </div>
                                            <span className="text-xs font-bold text-[var(--ec-secondary)]">Avg. Settlement</span>
                                        </div>
                                        <span className="font-black text-[var(--ec-on-surface)]">3.2 Days</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Payout Method */}
                        <Card className="bg-[var(--ec-primary-container)]/5 border border-[var(--ec-primary)]/10 shadow-lg shadow-[var(--ec-primary)]/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--ec-primary)]/5 rounded-full -mr-16 -mt-16 blur-xl" />
                            <CardContent className="p-8 space-y-6">
                                <div className="flex justify-between items-center">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-[var(--ec-primary)]">{t.dashboard.payoutMethod}</h4>
                                    <button className="text-[10px] font-black uppercase text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] transition-all underline underline-offset-4">Change</button>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-10 bg-[var(--ec-on-surface)] rounded-lg flex items-center justify-center text-white">
                                        <CreditCard className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-black text-[var(--ec-on-surface)]">•••• 4242</p>
                                        <p className="text-[10px] text-[var(--ec-secondary)] font-bold">Stripe Virtual Account</p>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-[var(--ec-primary)]/10 flex justify-between items-center">
                                    <div>
                                        <p className="text-[10px] text-[var(--ec-secondary)] font-bold uppercase tracking-widest">{t.dashboard.lastPayout}</p>
                                        <p className="text-sm font-black text-[var(--ec-on-surface)]">$4,280.00</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-[var(--ec-secondary)] font-bold uppercase tracking-widest">Date</p>
                                        <p className="text-sm font-black text-[var(--ec-on-surface)]">Oct 18</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Transaction History */}
                    <div className="col-span-12">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-black text-[var(--ec-on-surface)]">{t.dashboard.recentTransactions}</h3>
                            <Button variant="ghost" className="text-xs font-black text-[var(--ec-primary)] uppercase tracking-widest hover:bg-[var(--ec-primary-container)]/10 h-auto py-2 px-4 gap-2">
                                Full Statement <ArrowRight className="w-3 h-3" />
                            </Button>
                        </div>
                        <DataTable
                            data={[
                                { id: "EX-9283-01", client: "Elena Rodriguez", date: "Oct 24, 2024", type: "FinTech Legal", status: "Settled", amount: 150.00 },
                                { id: "EX-9283-02", client: "John Dasher", date: "Oct 23, 2024", type: "React Arch.", status: "Settled", amount: 220.00 },
                                { id: "EX-9283-03", client: "Sarah Jenkins", date: "Oct 22, 2024", type: "Cloud Security", status: "In Clearance", amount: 195.00 },
                                { id: "EX-9283-04", client: "Michael Kinsley", date: "Oct 22, 2024", type: "DB Optimization", status: "Settled", amount: 120.00 },
                                { id: "EX-9283-05", client: "Julian Vane", date: "Oct 21, 2024", type: "Legacy Audit", status: "Settled", amount: 350.00 },
                            ]}
                            columns={[
                                {
                                    key: "id",
                                    label: "Transaction ID",
                                    render: (item) => <span className="font-black text-xs text-[var(--ec-on-surface-variant)]">{item.id}</span>
                                },
                                {
                                    key: "client",
                                    label: t.dashboard.client,
                                    render: (item) => <span className="font-bold text-sm text-[var(--ec-on-surface)]">{item.client}</span>
                                },
                                {
                                    key: "date",
                                    label: t.dashboard.date,
                                    render: (item) => <span className="text-xs text-[var(--ec-on-surface-variant)]">{item.date}</span>
                                },
                                {
                                    key: "type",
                                    label: "Specialty",
                                    render: (item) => <Badge variant="outline" className="border-border/30 rounded-lg font-bold text-[10px] uppercase text-[var(--ec-secondary)]">{item.type}</Badge>
                                },
                                {
                                    key: "status",
                                    label: t.common.status,
                                    render: (item) => (
                                        item.status === "Settled" ? (
                                            <div className="flex items-center gap-2 text-[var(--ec-primary)] font-black text-[10px] uppercase tracking-widest">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--ec-primary)]" /> Settled
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2 text-[var(--ec-tertiary)] font-black text-[10px] uppercase tracking-widest">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--ec-tertiary)] animate-pulse" /> In Clearance
                                            </div>
                                        )
                                    )
                                },
                                {
                                    key: "amount",
                                    label: t.dashboard.amount,
                                    render: (item) => <div className="text-right font-black text-[var(--ec-on-surface)]">$ {item.amount.toFixed(2)}</div>
                                },
                            ]}
                            className="rounded-3xl border-none ambient-shadow"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
