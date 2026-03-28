"use client";

import Image from "next/image";
import {
    Search,
    Bell,
    Globe,
    TrendingUp,
    Users,
    Star,
    Timer,
    MoreVertical,
    CheckCircle2,
    Ban,
    Lightbulb,
    Video,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useLocale } from "@/providers/LocaleProvider";
import { useRouter } from "next/navigation";

export function DashboardPage() {
    const { t } = useLocale();
    const router = useRouter();

    const handleJoinRoom = (sessionId: string) => {
        router.push(`/consultation/${sessionId}`);
    };

    return (
        <>


            {/* Dashboard Content */}
            <div className="px-4 sm:px-6 md:px-10 py-6 md:py-8 max-w-[1440px] mx-auto">
                <div className="mb-10">
                    <h1 className="text-3xl font-black text-[var(--ec-on-surface)] tracking-tight mb-2">
                        {t.dashboard.title}
                    </h1>
                    <p className="text-[var(--ec-on-surface-variant)]">
                        {t.dashboard.welcomeBack.replace("{name}", "Sarah")}
                    </p>
                </div>

                {/* Bento Grid: Overview Widgets */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                    {/* Earnings Widget */}
                    <Card className="col-span-1 lg:col-span-7 bg-card ambient-shadow border border-border">
                        <CardContent className="p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-xs font-bold text-[var(--ec-secondary)] uppercase tracking-widest mb-1">
                                        {t.dashboard.totalEarnings}
                                    </p>
                                    <h2 className="text-4xl font-black text-[var(--ec-on-surface)]">$12,840.50</h2>
                                    <p className="text-sm text-[var(--ec-primary)] font-bold flex items-center gap-1 mt-1">
                                        <TrendingUp className="w-4 h-4" /> +14.2% {t.dashboard.fromLastMonth}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1 text-xs font-bold rounded-lg bg-secondary text-secondary-foreground">
                                        {t.dashboard.week}
                                    </button>
                                    <button className="px-3 py-1 text-xs font-bold rounded-lg bg-primary text-primary-foreground">
                                        {t.dashboard.month}
                                    </button>
                                </div>
                            </div>

                            {/* Bar Chart Visualization */}
                            <div className="h-40 w-full flex items-end gap-2 px-2 mt-4">
                                {[40, 60, 55, 80, 70, 95, 45].map((h, i) => (
                                    <div
                                        key={i}
                                        className={`flex-1 rounded-t-lg transition-colors ${i === 5
                                            ? "bg-[var(--ec-primary)]"
                                            : "bg-[var(--ec-surface-container)] hover:bg-[var(--ec-primary-container)]/80"
                                            }`}
                                        style={{ height: `${h}%` }}
                                    ></div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Countdown Widget */}
                    <Card className="col-span-1 lg:col-span-5 border-none signature-gradient text-white relative overflow-hidden">
                        <CardContent className="p-8 relative z-10 flex flex-col h-full">
                            <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">
                                {t.dashboard.nextSessionIn}
                            </p>
                            <div className="flex gap-4 items-center my-4">
                                <div className="text-center">
                                    <span className="text-5xl font-black">24</span>
                                    <p className="text-[10px] font-bold uppercase opacity-70">{t.common.min}</p>
                                </div>
                                <span className="text-4xl font-light opacity-50">:</span>
                                <div className="text-center">
                                    <span className="text-5xl font-black">12</span>
                                    <p className="text-[10px] font-bold uppercase opacity-70">{t.common.sec}</p>
                                </div>
                            </div>
                            <div className="mt-auto pt-6 border-t border-white/20">
                                <p className="text-sm font-medium opacity-90 mb-1">{t.dashboard.sessionWith}</p>
                                <p className="text-xl font-bold">Alexander Wright</p>
                                <p className="text-sm opacity-80">General Consultation • 45m</p>
                                <Button
                                    onClick={() => handleJoinRoom("alexander-wright")}
                                    className="mt-6 w-full py-4 bg-white text-[var(--ec-primary)] rounded-xl font-black shadow-xl active:scale-95 transition-transform h-auto hover:bg-white/90"
                                >
                                    {t.common.joinRoom.toUpperCase()}
                                </Button>
                            </div>
                        </CardContent>
                        <Video className="absolute ltr:-right-8 rtl:-left-8 -bottom-8 w-48 h-48 opacity-10 pointer-events-none" />
                    </Card>

                    {/* Stats Bar */}
                    <div className="col-span-1 lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        <Card className="bg-card ambient-shadow border border-border">
                            <CardContent className="p-6 flex items-center gap-5">
                                <div className="w-14 h-14 rounded-full bg-[var(--ec-primary-container)]/20 flex items-center justify-center text-[var(--ec-primary)]">
                                    <Users className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[var(--ec-secondary)] uppercase tracking-widest">{t.dashboard.totalSessions}</p>
                                    <h3 className="text-2xl font-black text-[var(--ec-on-surface)]">1,248</h3>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-card ambient-shadow border border-border">
                            <CardContent className="p-6 flex items-center gap-5">
                                <div className="w-14 h-14 rounded-full bg-[var(--ec-tertiary-container)]/20 flex items-center justify-center text-[var(--ec-tertiary)]">
                                    <Star className="w-7 h-7 fill-current" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[var(--ec-secondary)] uppercase tracking-widest">{t.dashboard.averageRating}</p>
                                    <h3 className="text-2xl font-black text-[var(--ec-on-surface)]">4.92 / 5.0</h3>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-card ambient-shadow border border-border">
                            <CardContent className="p-6 flex items-center gap-5">
                                <div className="w-14 h-14 rounded-full bg-[var(--ec-secondary-container)]/30 flex items-center justify-center text-[var(--ec-secondary)]">
                                    <Timer className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[var(--ec-secondary)] uppercase tracking-widest">{t.dashboard.hrsConsulted}</p>
                                    <h3 className="text-2xl font-black text-[var(--ec-on-surface)]">842.5h</h3>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Bottom Sections Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    {/* Upcoming Sessions */}
                    <div className="col-span-1 lg:col-span-8">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-black text-[var(--ec-on-surface)]">{t.dashboard.upcomingSessions}</h3>
                            <button className="text-sm font-bold text-[var(--ec-primary)] hover:underline">{t.common.viewCalendar}</button>
                        </div>
                        <div className="space-y-4">
                            {/* Session Row 1 */}
                            <Card className="bg-card ambient-shadow border border-border hover:bg-muted transition-colors">
                                <CardContent className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5X6aljj29eSO4tAV__vcVA3VBztZr15Ys5NmyUocm99FZZrEI65yehwJMkDUcB8Du7uYI29YnrmOrIlYYRdh7k6FhS1NmzPdcv2Liyv-IdXLtx0okHJMjLJoEkR5Lin2jqaWRht-iwwNhNptUrMNV4Eh7Ch-Zs7c6nc1QWpnsXMFwASsRqZI51evcysqoDw7SVYIFe4Ko5zKppynNC7t4IN-YobrQl8NPVQUIleUWJ4G-2_qoiUecsmaH3niG3fErQCaOxf2gvA" alt="Alexander Wright" width={48} height={48} className="rounded-lg object-cover" />
                                        <div>
                                            <p className="font-bold text-[var(--ec-on-surface)]">Alexander Wright</p>
                                            <p className="text-xs text-[var(--ec-on-surface-variant)] font-medium">10:30 AM - 11:15 AM (45m)</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block text-center px-4 ltr:border-x rtl:border-x border-[var(--ec-outline-variant)]/20">
                                        <span className="text-xs font-bold text-[var(--ec-secondary)] uppercase tracking-widest block mb-1">{t.common.status}</span>
                                        <Badge className="bg-[var(--ec-primary-container)]/20 text-[var(--ec-primary)] text-[10px] font-bold border-none">{t.common.readyToJoin}</Badge>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button className="p-2 text-[var(--ec-secondary)] hover:text-[var(--ec-on-surface)]"><MoreVertical className="w-5 h-5" /></button>
                                        <Button
                                            onClick={() => handleJoinRoom("alexander-wright")}
                                            className="px-6 py-2 signature-gradient text-white rounded-lg text-sm font-bold shadow-md opacity-90 hover:opacity-100 transition-opacity"
                                        >
                                            {t.common.joinRoom}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Session Row 2 */}
                            <Card className="bg-card ambient-shadow border border-border hover:bg-muted transition-colors">
                                <CardContent className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHACb13DiNY3bbWf4u2xehemookbqYuRaC3msioW4ZbosALOVPR6DzerrNJs3WHpN0ivahWluSRgjbCVZDmaCEQN4hb_qPQx_DFE1IwKKP-CSlmUZjAXG-9S0uadNQRe8r7erMa6UDKcrQZ7EOtFaf9fzvwp7VED2RdpOVmav_oNjL6NaVGqWm3JFRWXdi3TrRvBQMeGw85HCzbuxaubimt9a8T7BiOR5NuJRDK9yksogNmi3gqQbh3rZUIlo4wT_sO7FgMZAkiw" alt="Sarah Jenkins" width={48} height={48} className="rounded-lg object-cover" />
                                        <div>
                                            <p className="font-bold text-[var(--ec-on-surface)]">Sarah Jenkins</p>
                                            <p className="text-xs text-[var(--ec-on-surface-variant)] font-medium">01:00 PM - 02:00 PM (1h)</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block text-center px-4 ltr:border-x rtl:border-x border-[var(--ec-outline-variant)]/20">
                                        <span className="text-xs font-bold text-[var(--ec-secondary)] uppercase tracking-widest block mb-1">{t.common.status}</span>
                                        <Badge className="bg-[var(--ec-surface-container)] text-[var(--ec-secondary)] text-[10px] font-bold border-none">{t.common.confirmed}</Badge>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button className="p-2 text-[var(--ec-secondary)] hover:text-[var(--ec-on-surface)]"><MoreVertical className="w-5 h-5" /></button>
                                        <Button variant="secondary" className="px-6 py-2 bg-[var(--ec-surface-container-high)] text-[var(--ec-on-surface)] rounded-lg text-sm font-bold">
                                            {t.common.details}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Session Row 3 */}
                            <Card className="bg-card ambient-shadow border border-border hover:bg-muted transition-colors">
                                <CardContent className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-[var(--ec-secondary-container)] flex items-center justify-center text-[var(--ec-secondary)] font-bold">MK</div>
                                        <div>
                                            <p className="font-bold text-[var(--ec-on-surface)]">Michael Kinsley</p>
                                            <p className="text-xs text-[var(--ec-on-surface-variant)] font-medium">03:30 PM - 04:00 PM (30m)</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block text-center px-4 ltr:border-x rtl:border-x border-[var(--ec-outline-variant)]/20">
                                        <span className="text-xs font-bold text-[var(--ec-secondary)] uppercase tracking-widest block mb-1">{t.common.status}</span>
                                        <Badge className="bg-[var(--ec-surface-container)] text-[var(--ec-secondary)] text-[10px] font-bold border-none">{t.common.confirmed}</Badge>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button className="p-2 text-[var(--ec-secondary)] hover:text-[var(--ec-on-surface)]"><MoreVertical className="w-5 h-5" /></button>
                                        <Button variant="secondary" className="px-6 py-2 bg-[var(--ec-surface-container-high)] text-[var(--ec-on-surface)] rounded-lg text-sm font-bold">
                                            {t.common.details}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Past Sessions Table */}
                        <div className="mt-12">
                            <h3 className="text-xl font-black text-[var(--ec-on-surface)] mb-6">{t.dashboard.recentHistory}</h3>
                            <Card className="bg-card ambient-shadow border border-border overflow-hidden">
                                <Table>
                                    <TableHeader className="bg-[var(--ec-surface-container-low)]">
                                        <TableRow className="border-none">
                                            <TableHead className="text-xs font-bold text-[var(--ec-secondary)] uppercase tracking-widest">{t.dashboard.client}</TableHead>
                                            <TableHead className="text-xs font-bold text-[var(--ec-secondary)] uppercase tracking-widest">{t.dashboard.date}</TableHead>
                                            <TableHead className="text-xs font-bold text-[var(--ec-secondary)] uppercase tracking-widest">{t.dashboard.amount}</TableHead>
                                            <TableHead className="text-xs font-bold text-[var(--ec-secondary)] uppercase tracking-widest">{t.expertProfile.rating}</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow className="hover:bg-[var(--ec-surface)]/50 transition-colors border-[var(--ec-outline-variant)]/10">
                                            <TableCell className="font-bold text-sm">Elena Rodriguez</TableCell>
                                            <TableCell className="text-xs text-[var(--ec-on-surface-variant)]">Oct 24, 2024</TableCell>
                                            <TableCell className="text-sm font-bold">$120.00</TableCell>
                                            <TableCell>
                                                <div className="flex text-[var(--ec-tertiary)]">
                                                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow className="hover:bg-[var(--ec-surface)]/50 transition-colors border-[var(--ec-outline-variant)]/10">
                                            <TableCell className="font-bold text-sm">John D.</TableCell>
                                            <TableCell className="text-xs text-[var(--ec-on-surface-variant)]">Oct 23, 2024</TableCell>
                                            <TableCell className="text-sm font-bold">$150.00</TableCell>
                                            <TableCell>
                                                <div className="flex text-[var(--ec-tertiary)]">
                                                    {[1, 2, 3, 4].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                                    <Star className="w-4 h-4" />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                    </div>

                    {/* Availability Sidebar Widget */}
                    <div className="col-span-1 lg:col-span-4 space-y-8">
                        <Card className="bg-card ambient-shadow border border-border">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-black text-[var(--ec-on-surface)] mb-6">{t.dashboard.expertAvailability}</h3>
                                <div className="space-y-4">
                                    {[
                                        { day: "monday", short: "M", available: true, slots: 4 },
                                        { day: "tuesday", short: "T", available: false, booked: true },
                                        { day: "wednesday", short: "W", available: true, slots: 2 },
                                        { day: "thursday", short: "T", available: false, outOfOffice: true },
                                    ].map((item) => (
                                        <div
                                            key={item.day}
                                            className={`flex items-center justify-between p-3 rounded-lg ${item.available
                                                ? "bg-[var(--ec-primary-container)]/10 border border-[var(--ec-primary)]/10"
                                                : item.outOfOffice
                                                    ? "bg-[var(--ec-surface-container-low)] opacity-60"
                                                    : "bg-[var(--ec-surface-container-low)]"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold ${item.available ? "bg-[var(--ec-primary)]" : "bg-[var(--ec-secondary)]"
                                                    }`}>
                                                    {item.short}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-[var(--ec-on-surface)]">
                                                        {t.days[item.day as keyof typeof t.days]}
                                                    </p>
                                                    <p className={`text-[10px] font-bold uppercase ${item.available ? "text-[var(--ec-primary)]" : "text-[var(--ec-on-surface-variant)]"
                                                        }`}>
                                                        {item.available
                                                            ? `${item.slots} ${t.dashboard.slotsAvailable}`
                                                            : item.outOfOffice
                                                                ? t.dashboard.outOfOffice
                                                                : t.dashboard.fullyBooked}
                                                    </p>
                                                </div>
                                            </div>
                                            {item.available ? (
                                                <CheckCircle2 className="w-5 h-5 text-[var(--ec-primary)] fill-current" />
                                            ) : !item.outOfOffice ? (
                                                <Ban className="w-5 h-5 text-[var(--ec-secondary)] opacity-20" />
                                            ) : null}
                                        </div>
                                    ))}
                                </div>
                                <Button variant="secondary" className="w-full mt-8 py-3 bg-[var(--ec-surface-container-high)] text-[var(--ec-on-surface)] font-bold rounded-xl text-sm hover:bg-[var(--ec-surface-dim)] transition-colors h-auto">
                                    {t.dashboard.editAllShifts}
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Earning Optimization Tip */}
                        <Card className="border-none border border-[var(--ec-tertiary)]/10 bg-[var(--ec-tertiary-container)]/10">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Lightbulb className="w-5 h-5 text-[var(--ec-tertiary)] flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-bold text-[var(--ec-on-tertiary-container)] mb-1">{t.dashboard.earningOptimization}</p>
                                        <p className="text-xs text-[var(--ec-on-tertiary-container)]/80 leading-relaxed">{t.dashboard.earningOptimizationDesc}</p>
                                        <button className="mt-3 text-xs font-black text-[var(--ec-tertiary)] uppercase tracking-widest hover:underline">
                                            {t.dashboard.applyRecommendation}
                                        </button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
