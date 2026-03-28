"use client";

import React from "react";
import { User, Shield, Briefcase, Bell, CreditCard, ChevronRight, Globe, Save, Upload, Plus, X } from "lucide-react";
import { useLocale } from "@/providers/LocaleProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileSettingsPage() {
    const { t } = useLocale();

    return (
        <div className="flex-1 p-6 md:p-8 xl:p-10 w-full bg-[var(--ec-background)] min-h-screen">
            <div className="max-w-[1000px] mx-auto">
                <div className="flex flex-col gap-2 mb-8">
                    <h1 className="text-3xl font-black text-[var(--ec-on-surface)] tracking-tight">Account Settings</h1>
                    <p className="text-[var(--ec-on-surface-variant)] text-sm font-medium">Manage your professional identity, security preferences, and account settings.</p>
                </div>

                <Tabs defaultValue="profile" className="space-y-8">
                    <TabsList className="bg-[var(--ec-surface-container-low)] p-1 rounded-2xl h-14 w-full justify-start border border-border/10 overflow-x-auto no-scrollbar scroll-smooth">
                        <TabsTrigger
                            value="profile"
                            className="rounded-xl px-8 h-full data-[state=active]:bg-card data-[state=active]:text-[var(--ec-primary)] data-[state=active]:shadow-sm font-black text-xs uppercase tracking-widest gap-2 transition-all"
                        >
                            <User className="w-4 h-4" /> Profile Info
                        </TabsTrigger>
                        <TabsTrigger
                            value="expertise"
                            className="rounded-xl px-8 h-full data-[state=active]:bg-card data-[state=active]:text-[var(--ec-primary)] data-[state=active]:shadow-sm font-black text-xs uppercase tracking-widest gap-2 transition-all"
                        >
                            <Briefcase className="w-4 h-4" /> Professional & Pricing
                        </TabsTrigger>
                        <TabsTrigger
                            value="security"
                            className="rounded-xl px-8 h-full data-[state=active]:bg-card data-[state=active]:text-[var(--ec-primary)] data-[state=active]:shadow-sm font-black text-xs uppercase tracking-widest gap-2 transition-all"
                        >
                            <Shield className="w-4 h-4" /> Security & Privacy
                        </TabsTrigger>
                        <TabsTrigger
                            value="notifications"
                            className="rounded-xl px-8 h-full data-[state=active]:bg-card data-[state=active]:text-[var(--ec-primary)] data-[state=active]:shadow-sm font-black text-xs uppercase tracking-widest gap-2 transition-all"
                        >
                            <Bell className="w-4 h-4" /> Notifications
                        </TabsTrigger>
                    </TabsList>

                    {/* Profile Info Tab */}
                    <TabsContent value="profile" className="space-y-6 outline-none">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <aside className="space-y-4">
                                <h3 className="font-black text-[var(--ec-on-surface)]">Public Identity</h3>
                                <p className="text-xs text-[var(--ec-on-surface-variant)] leading-relaxed font-medium">
                                    This information will be displayed on your public profile page for potential clients to see.
                                </p>
                            </aside>
                            <Card className="md:col-span-2 bg-card rounded-3xl border border-border shadow-sm overflow-hidden">
                                <CardContent className="p-8 space-y-8">
                                    {/* Avatar Upload */}
                                    <div className="flex flex-col md:flex-row items-center gap-8">
                                        <div className="relative group">
                                            <Avatar className="w-32 h-32 rounded-3xl border-4 border-border/20 shadow-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                                                <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuCohucrTEg0gZyGOJWxEiHGqYvUZEzXPQuSAgdv25imZ2-B4OW_aC2sXZcU7Bb3szX900eSX596lNCygQ_mofR7KRdBOX2ieciN_U6Em85YVlH0a-Mf8whSPPdaP8GiTp92eO9qduIfp8tWyBIY0VRCJunH6hJ9hykmcDetKim5Za1_aO4mY3IQul0WgD7C1O97sp7IEcZ121lW58EkgnuLkpM0xBSj_o83cjIsgive8wS6s8cMUxA0GW_NDhM-asNPKQIi-2eW2g" />
                                                <AvatarFallback className="bg-[var(--ec-primary-container)]/10 text-[var(--ec-primary)] text-3xl font-black">SS</AvatarFallback>
                                            </Avatar>
                                            <button className="absolute -bottom-2 -right-2 bg-[var(--ec-primary)] text-white p-2.5 rounded-full border-4 border-card shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                                <Upload className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <div className="space-y-2 text-center md:text-left">
                                            <h4 className="font-bold text-[var(--ec-on-surface)]">Profile Portrait</h4>
                                            <p className="text-xs text-[var(--ec-on-surface-variant)] font-medium">JPG, PNG (max. 5MB). Professional headshot recommended.</p>
                                            <div className="flex gap-2 justify-center md:justify-start pt-2">
                                                <Button variant="outline" size="sm" className="rounded-xl font-bold border-border/40 h-9">Update</Button>
                                                <Button variant="ghost" size="sm" className="rounded-xl font-bold text-[var(--ec-error)] hover:bg-[var(--ec-error-container)]/10 h-9">Remove</Button>
                                            </div>
                                        </div>
                                    </div>

                                    <Separator className="bg-border/5" />

                                    {/* Form Fields */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="fullname" className="text-xs font-black uppercase tracking-widest text-[var(--ec-secondary)]">Full Name</Label>
                                            <Input id="fullname" defaultValue="Dr. Sarah Smith" className="bg-[var(--ec-surface-container-low)] border-none rounded-xl h-12 px-4 font-bold focus-visible:ring-1 focus-visible:ring-[var(--ec-primary)]" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="title" className="text-xs font-black uppercase tracking-widest text-[var(--ec-secondary)]">Professional Title</Label>
                                            <Input id="title" defaultValue="Technical Architect & Systems Consultant" className="bg-[var(--ec-surface-container-low)] border-none rounded-xl h-12 px-4 font-bold focus-visible:ring-1 focus-visible:ring-[var(--ec-primary)]" />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <Label htmlFor="bio" className="text-xs font-black uppercase tracking-widest text-[var(--ec-secondary)]">Biographical Summary</Label>
                                            <Textarea id="bio" defaultValue="Specializing in scaling distributed systems and implementing zero-trust security architectures. I help Series A+ startups bridge the gap between rapid feature delivery and architectural stability." className="bg-[var(--ec-surface-container-low)] border-none rounded-2xl min-h-[120px] p-4 font-medium focus-visible:ring-1 focus-visible:ring-[var(--ec-primary)] leading-relaxed" />
                                            <p className="text-[10px] text-[var(--ec-on-surface-variant)] text-right font-bold italic">Max 500 characters</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-end pt-4">
                                        <Button className="bg-[var(--ec-primary)] hover:bg-[var(--ec-primary)]/90 text-white font-black rounded-xl px-10 h-12 transition-all gap-2 shadow-lg shadow-[var(--ec-primary)]/20">
                                            <Save className="w-4 h-4" /> Save Changes
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Expertise & Pricing Tab */}
                    <TabsContent value="expertise" className="space-y-6 outline-none">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <aside className="space-y-4">
                                <h3 className="font-black text-[var(--ec-on-surface)]">Monetization & Skills</h3>
                                <p className="text-xs text-[var(--ec-on-surface-variant)] leading-relaxed font-medium">
                                    Set your consultation rates and showcase your technical expertise to match with relevant clients.
                                </p>
                            </aside>
                            <Card className="md:col-span-2 bg-card rounded-3xl border border-border shadow-sm overflow-hidden">
                                <CardContent className="p-8 space-y-8">
                                    {/* Pricing */}
                                    <div className="space-y-6">
                                        <h4 className="font-black text-sm uppercase tracking-tighter text-[var(--ec-primary)]">Pricing Strategy</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <Label htmlFor="base-rate" className="text-xs font-bold uppercase tracking-widest text-[var(--ec-secondary)]">Base Hourly Rate ($)</Label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-[var(--ec-on-surface-variant)]">$</span>
                                                    <Input id="base-rate" defaultValue="150" className="bg-[var(--ec-surface-container-low)] border-none rounded-xl h-12 pl-8 pr-4 font-black focus-visible:ring-1 focus-visible:ring-[var(--ec-primary)]" />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <Label htmlFor="emergency-rate" className="text-xs font-bold uppercase tracking-widest text-[var(--ec-secondary)]">Emergency Rate ($)</Label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-[var(--ec-on-surface-variant)]">$</span>
                                                    <Input id="emergency-rate" defaultValue="250" className="bg-[var(--ec-surface-container-low)] border-none rounded-xl h-12 pl-8 pr-4 font-black focus-visible:ring-1 focus-visible:ring-[var(--ec-primary)] text-[var(--ec-primary)]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Separator className="bg-border/5" />

                                    {/* Skills Selection */}
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center">
                                            <h4 className="font-black text-sm uppercase tracking-tighter text-[var(--ec-primary)]">Expertise & Specialties</h4>
                                            <Button variant="ghost" size="sm" className="h-8 text-[10px] uppercase font-black text-[var(--ec-primary)] hover:bg-[var(--ec-primary-container)]/10 gap-2">
                                                <Plus className="w-3 h-3" /> Add Skill
                                            </Button>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {["AWS Cloud Infrastructure", "Distributed Systems", "Zero-Trust Security", "Kubernetes", "System Architecture", "React/Next.js Architecture"].map((skill) => (
                                                <Badge key={skill} className="bg-[var(--ec-primary-container)]/5 text-[var(--ec-primary)] border border-[var(--ec-primary)]/20 px-4 py-2 rounded-xl flex items-center gap-3 font-bold text-xs group hover:bg-[var(--ec-primary)] hover:text-white transition-all duration-300">
                                                    {skill}
                                                    <X className="w-3 h-3 cursor-pointer opacity-40 group-hover:opacity-100" />
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex justify-end pt-4">
                                        <Button className="bg-[var(--ec-primary)] hover:bg-[var(--ec-primary)]/90 text-white font-black rounded-xl px-10 h-12 transition-all gap-2 shadow-lg shadow-[var(--ec-primary)]/20">
                                            <Save className="w-4 h-4" /> Save Pricing & Skills
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Security Tab (Simplified) */}
                    <TabsContent value="security" className="space-y-6 outline-none">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <aside className="space-y-4">
                                <h3 className="font-black text-[var(--ec-on-surface)]">Security & Access</h3>
                                <p className="text-xs text-[var(--ec-on-surface-variant)] leading-relaxed font-medium">
                                    Update your password and manage two-factor authentication for maximum account safety.
                                </p>
                            </aside>
                            <Card className="md:col-span-2 bg-card rounded-3xl border border-border shadow-sm overflow-hidden">
                                <CardHeader className="p-8 pb-4">
                                    <CardTitle className="text-lg font-black text-[var(--ec-on-surface)] uppercase tracking-tighter">Change Password</CardTitle>
                                </CardHeader>
                                <CardContent className="p-8 pt-0 space-y-6">
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold uppercase tracking-widest text-[var(--ec-secondary)]">Current Password</Label>
                                            <Input type="password" placeholder="••••••••" className="bg-[var(--ec-surface-container-low)] border-none rounded-xl h-12 px-4 focus-visible:ring-1 focus-visible:ring-[var(--ec-primary)]" />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label className="text-xs font-bold uppercase tracking-widest text-[var(--ec-secondary)]">New Password</Label>
                                                <Input type="password" placeholder="••••••••" className="bg-[var(--ec-surface-container-low)] border-none rounded-xl h-12 px-4 focus-visible:ring-1 focus-visible:ring-[var(--ec-primary)]" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-xs font-bold uppercase tracking-widest text-[var(--ec-secondary)]">Confirm New Password</Label>
                                                <Input type="password" placeholder="••••••••" className="bg-[var(--ec-surface-container-low)] border-none rounded-xl h-12 px-4 focus-visible:ring-1 focus-visible:ring-[var(--ec-primary)]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end pt-4">
                                        <Button className="bg-[var(--ec-on-surface)] text-white font-black rounded-xl px-10 h-12 hover:bg-[var(--ec-on-surface)]/90 transition-all border-none">
                                            Update Password
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
