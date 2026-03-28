"use client";

import React from "react";
import Image from "next/image";
import { Edit, Video, Phone, MoreVertical, Paperclip, Smile, Send, Search, FileText, Download, CheckCheck, Mic } from "lucide-react";
import { Input } from "@/components/ui/input";

export function MessagesPage() {
    return (
        <div className="flex-1 flex overflow-hidden h-[calc(100vh-73px)] border-t border-[var(--ec-outline-variant)]/20">
            {/* Conversations List */}
            <aside className="hidden lg:flex w-80 flex-shrink-0 bg-[var(--ec-surface-container-low)] flex-col border-r border-[var(--ec-outline-variant)]/20 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
                <div className="p-6 pb-2">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-[var(--ec-on-background)] tracking-tight">Messages</h2>
                        <button className="p-2 bg-[var(--ec-primary)] text-[var(--ec-on-primary)] rounded-lg hover:brightness-110 shadow-md shadow-[var(--ec-primary)]/10 transition-all active:scale-95 flex items-center justify-center">
                            <Edit className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="relative mb-4">
                        <Search className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--ec-outline)]" />
                        <Input
                            placeholder="Search conversations..."
                            className="w-full ltr:pl-9 rtl:pr-9 py-2 bg-[var(--ec-surface-container-highest)]/50 border-none rounded-xl text-xs focus-visible:ring-1 focus-visible:ring-[var(--ec-primary)]/30 text-[var(--ec-on-surface)]"
                        />
                    </div>

                    <div className="flex gap-1 p-1 bg-[var(--ec-surface-container-highest)] rounded-xl mb-4">
                        <button className="flex-1 py-1.5 px-2 bg-[var(--ec-surface-container-lowest)] rounded-lg text-[11px] font-bold shadow-sm text-[var(--ec-primary)]">All Chats</button>
                        <button className="flex-1 py-1.5 px-2 text-[11px] font-semibold text-[var(--ec-secondary)] hover:bg-[var(--ec-surface-container-high)]/50 transition-colors rounded-lg">Experts</button>
                        <button className="flex-1 py-1.5 px-2 text-[11px] font-semibold text-[var(--ec-secondary)] hover:bg-[var(--ec-surface-container-high)]/50 transition-colors rounded-lg">Groups</button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-3 space-y-1 pb-4 no-scrollbar">
                    {/* Active Chat */}
                    <div className="p-3 bg-[var(--ec-surface-container-lowest)] rounded-xl flex items-center gap-4 cursor-pointer hover:bg-[var(--ec-surface-container-lowest)] transition-all shadow-sm ring-1 ring-[var(--ec-primary)]/20 group">
                        <div className="relative shrink-0">
                            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu2z0uSPQ6gHY3nHBbAAl66menA0SY00nqLYNqDNfNuVvjcWs8RjfupjNThYMoOheIPvhZaOf_t831iniat5vqAJde7J2HW-JftJ8YnSIxF5PyUqSB7LH_Op8_5Dn5drEh97rn_7m_BOczjZJr87pmhc59CV70P9Zz6joAED423IIC-a2M153zPfSJ_WgIlRkfETodqHIzx60c8g6OQ9jXzOccxxCRwb3uPhtGaqLJRYm80-V05w1Iy1Az0nix7fFKdivWQDL2vw" width={48} height={48} className="w-12 h-12 rounded-xl object-cover ring-2 ring-transparent" alt="Dr. Marcus Thorne" />
                            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-[var(--ec-surface-container-lowest)] rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center mb-0.5">
                                <h3 className="font-bold text-sm text-[var(--ec-on-background)] truncate">Dr. Marcus Thorne</h3>
                                <span className="text-[10px] text-[var(--ec-primary)] font-bold">12:45 PM</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[11px] text-[var(--ec-on-surface-variant)] truncate font-medium max-w-[140px]">The strategy for the next quarter is ready...</p>
                                <div className="bg-[var(--ec-primary)] text-[var(--ec-on-primary)] text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">2</div>
                            </div>
                        </div>
                    </div>

                    {/* Other Chats */}
                    <div className="p-3 rounded-xl flex items-center gap-4 cursor-pointer hover:bg-[var(--ec-surface-container)] transition-all group">
                        <div className="relative shrink-0">
                            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc9fjo1sP3Y4WN787yZt3Jf95suUiI8YM5cmEtX90Bqztw8vc73i5BPxj9fBnfXjNVj7ocV9wSFh01Vo5zjvbkuFpM-KWj-6aGs1DxBT_SowFDE_N9QrlRF9k5rBxWYLoqoeqQPIkI2DtgzIsbr0J549Syt2aKpGLVZIG4VUshLR_yAe3wAAn89p8oz1rg00mnhMs8-D0H26uRAVXqbgQ2wRtIrM-CSqehx68cyh-uF3An25YlOc-mCQSmYgtE3L0vC4_YTmoF2Q" width={48} height={48} className="w-12 h-12 rounded-xl object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Sarah Jenkins" />
                            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[var(--ec-outline)] border-2 border-[var(--ec-surface-container-low)] rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <h3 className="font-bold text-sm text-[var(--ec-on-surface-variant)] group-hover:text-[var(--ec-on-background)] transition-colors truncate">Sarah Jenkins</h3>
                                <span className="text-[10px] text-[var(--ec-outline-variant)] font-medium">Yesterday</span>
                            </div>
                            <p className="text-[11px] text-[var(--ec-outline)] truncate">Thank you for the advice, it helped!</p>
                        </div>
                    </div>

                    <div className="p-3 rounded-xl flex items-center gap-4 cursor-pointer hover:bg-[var(--ec-surface-container)] transition-all group">
                        <div className="relative shrink-0">
                            <div className="w-12 h-12 rounded-xl bg-[var(--ec-tertiary-container)]/20 flex items-center justify-center text-[var(--ec-tertiary)] font-bold text-lg opacity-90 group-hover:opacity-100 transition-opacity">
                                LE
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <h3 className="font-bold text-sm text-[var(--ec-on-surface-variant)] group-hover:text-[var(--ec-on-background)] transition-colors truncate">Legal Experts Group</h3>
                                <span className="text-[10px] text-[var(--ec-outline-variant)] font-medium">2 days ago</span>
                            </div>
                            <p className="text-[11px] text-[var(--ec-outline)] truncate"><span className="font-bold text-[var(--ec-on-surface-variant)]">You:</span> I'll check the documents shortly.</p>
                        </div>
                    </div>

                    <div className="p-3 rounded-xl flex items-center gap-4 cursor-pointer hover:bg-[var(--ec-surface-container)] transition-all group">
                        <div className="relative shrink-0">
                            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEX4RXPFG1A-8WMOGROPYdyap2_8wsmqjzRiyxMPr9oMEAmbHx4ndhZX-PXQODdsTq6VMc2QMbEuJJhs77qhyV27gj9rAC-f_PZ1J5i-s17XFCu1BWGYgr6YnDz4kkvKrZVXSH0suVgrSqMP3yzFoQqkeTYAop5ELeqIUwKhdgj13iudxN2bHtdhWh3w-jWHI_Yhp6OsROsbcAIQF85Im9rQosIWYLqsax0T6W7-RowowHuWxsnHu01afl7_Qnx9znxoT7pjay2g" width={48} height={48} className="w-12 h-12 rounded-xl object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Michael Chen" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <h3 className="font-bold text-sm text-[var(--ec-on-surface-variant)] group-hover:text-[var(--ec-on-background)] transition-colors truncate">Michael Chen</h3>
                                <span className="text-[10px] text-[var(--ec-outline-variant)] font-medium">Monday</span>
                            </div>
                            <p className="text-[11px] text-[var(--ec-outline)] truncate">How was your weekend session?</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Active Chat Window */}
            <section className="flex-1 flex flex-col bg-[var(--ec-surface)] relative max-h-full">
                {/* Chat Header */}
                <header className="h-[76px] px-8 flex items-center justify-between border-b border-[var(--ec-outline-variant)]/10 bg-[var(--ec-surface-container-lowest)]/80 backdrop-blur-md z-10 shrink-0 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu2z0uSPQ6gHY3nHBbAAl66menA0SY00nqLYNqDNfNuVvjcWs8RjfupjNThYMoOheIPvhZaOf_t831iniat5vqAJde7J2HW-JftJ8YnSIxF5PyUqSB7LH_Op8_5Dn5drEh97rn_7m_BOczjZJr87pmhc59CV70P9Zz6joAED423IIC-a2M153zPfSJ_WgIlRkfETodqHIzx60c8g6OQ9jXzOccxxCRwb3uPhtGaqLJRYm80-V05w1Iy1Az0nix7fFKdivWQDL2vw" width={48} height={48} className="w-[42px] h-[42px] rounded-xl object-cover ring-2 ring-[var(--ec-surface-container-lowest)] shadow-sm" alt="Dr. Marcus Thorne" />
                            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[var(--ec-surface-container-lowest)]"></span>
                        </div>
                        <div>
                            <h3 className="font-black text-[var(--ec-on-surface)] text-base leading-tight tracking-tight">Dr. Marcus Thorne</h3>
                            <div className="flex items-center gap-1 mt-0.5">
                                <span className="text-[11px] text-[var(--ec-primary)] font-bold">Active Now</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--ec-secondary)] hover:bg-[var(--ec-surface-container-high)] hover:text-[var(--ec-primary)] transition-colors active:scale-95">
                            <Video className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--ec-secondary)] hover:bg-[var(--ec-surface-container-high)] hover:text-[var(--ec-primary)] transition-colors active:scale-95">
                            <Phone className="w-4 h-4 text-inherit" style={{ transform: 'scaleX(-1)' }} />
                        </button>
                        <div className="w-px h-6 bg-[var(--ec-outline-variant)]/30 mx-1"></div>
                        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--ec-secondary)] hover:bg-[var(--ec-surface-container-high)] transition-colors active:scale-95">
                            <MoreVertical className="w-5 h-5" />
                        </button>
                    </div>
                </header>

                {/* Chat Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 bg-[var(--ec-surface)] no-scrollbar">

                    {/* Date Divider */}
                    <div className="flex justify-center my-6">
                        <span className="px-4 py-1.5 bg-[var(--ec-surface-container-high)]/50 text-[10px] font-extrabold text-[var(--ec-outline)] uppercase tracking-widest rounded-full shadow-sm">
                            Today, Oct 24
                        </span>
                    </div>

                    {/* Message Received */}
                    <div className="flex items-end gap-3 max-w-[85%] md:max-w-[70%]">
                        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu2z0uSPQ6gHY3nHBbAAl66menA0SY00nqLYNqDNfNuVvjcWs8RjfupjNThYMoOheIPvhZaOf_t831iniat5vqAJde7J2HW-JftJ8YnSIxF5PyUqSB7LH_Op8_5Dn5drEh97rn_7m_BOczjZJr87pmhc59CV70P9Zz6joAED423IIC-a2M153zPfSJ_WgIlRkfETodqHIzx60c8g6OQ9jXzOccxxCRwb3uPhtGaqLJRYm80-V05w1Iy1Az0nix7fFKdivWQDL2vw" width={32} height={32} className="w-8 h-8 rounded-full mb-1 object-cover" alt="Sender" />
                        <div>
                            <div className="bg-[var(--ec-surface-container-lowest)] text-[var(--ec-on-surface)] text-sm p-4 rounded-2xl rounded-bl-sm shadow-sm border border-[var(--ec-outline-variant)]/10 font-medium">
                                Hello Alex! I've reviewed your latest project proposal. The data modeling section is particularly strong, but we might need to adjust the scaling projections.
                            </div>
                            <span className="text-[10px] text-[var(--ec-outline)] font-bold mt-1.5 ml-1 inline-block">10:12 AM</span>
                        </div>
                    </div>

                    {/* Message Sent */}
                    <div className="flex items-end gap-3 max-w-[85%] md:max-w-[70%] ltr:ml-auto rtl:mr-auto flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-[var(--ec-primary-container)]/20 flex items-center justify-center text-[10px] font-bold text-[var(--ec-primary)] mb-1 shrink-0">ME</div>
                        <div className="flex flex-col items-end">
                            <div className="bg-[var(--ec-primary)] signature-gradient text-[var(--ec-on-primary)] text-sm p-4 rounded-2xl rounded-br-sm shadow-md shadow-[var(--ec-primary)]/10 font-medium">
                                Thank you, Dr. Thorne. I was concerned about the scaling too. Do you think we should look at decentralized alternatives?
                            </div>
                            <div className="flex items-center gap-1 mt-1.5 ltr:mr-1 rtl:ml-1">
                                <span className="text-[10px] text-[var(--ec-outline)] font-bold">10:15 AM</span>
                                <CheckCheck className="w-3.5 h-3.5 text-[var(--ec-primary)]" />
                            </div>
                        </div>
                    </div>

                    {/* Message Received with Attachment */}
                    <div className="flex items-end gap-3 max-w-[85%] md:max-w-[70%]">
                        <div className="w-8 shrink-0"></div>
                        <div className="space-y-2 w-full">
                            <div className="bg-[var(--ec-surface-container-lowest)] text-[var(--ec-on-surface)] text-sm p-4 rounded-2xl rounded-bl-sm shadow-sm border border-[var(--ec-outline-variant)]/10 font-medium w-fit">
                                Exactly what I was thinking. I've drafted a comparison report for you.
                            </div>

                            {/* Attachment Card */}
                            <div className="flex items-center justify-between p-3 bg-[var(--ec-surface-container-lowest)] border border-[var(--ec-outline-variant)]/20 rounded-xl shadow-sm hover:border-[var(--ec-primary)]/50 transition-colors cursor-pointer w-72">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[var(--ec-primary-container)]/10 rounded-lg flex items-center justify-center text-[var(--ec-primary)]">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-[var(--ec-on-surface)] truncate w-40">Scale_Comparison_v2.pdf</p>
                                        <p className="text-[10px] text-[var(--ec-outline)] font-medium">1.2 MB • PDF Document</p>
                                    </div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-[var(--ec-surface-container)] flex items-center justify-center text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] hover:bg-[var(--ec-primary-container)]/20 transition-colors">
                                    <Download className="w-4 h-4" />
                                </div>
                            </div>

                            <span className="text-[10px] text-[var(--ec-outline)] font-bold mt-1.5 ml-1 inline-block">10:20 AM</span>
                        </div>
                    </div>

                    {/* Typing Indicator */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 flex-shrink-0"></div>
                        <div className="bg-[var(--ec-surface-container-high)]/50 px-4 py-3 rounded-full flex gap-1.5 w-fit animate-pulse">
                            <span className="w-1.5 h-1.5 bg-[var(--ec-primary)]/40 rounded-full"></span>
                            <span className="w-1.5 h-1.5 bg-[var(--ec-primary)]/70 rounded-full"></span>
                            <span className="w-1.5 h-1.5 bg-[var(--ec-primary)] rounded-full"></span>
                        </div>
                    </div>
                </div>

                {/* Message Input Area */}
                <footer className="p-3 sm:p-4 md:p-6 bg-[var(--ec-surface-container-lowest)] border-t border-[var(--ec-outline-variant)]/10 shrink-0">
                    <div className="relative bg-[var(--ec-surface-container-low)] border border-[var(--ec-outline-variant)]/10 rounded-2xl p-2 flex items-end gap-2 shadow-inner focus-within:ring-1 focus-within:ring-[var(--ec-primary)]/30 transition-all">
                        <button className="w-10 h-10 shrink-0 flex items-center justify-center text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] hover:bg-[var(--ec-surface-container-high)]/50 rounded-xl transition-colors">
                            <Paperclip className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 shrink-0 flex items-center justify-center text-[var(--ec-secondary)] hover:text-[var(--ec-primary)] hover:bg-[var(--ec-surface-container-high)]/50 rounded-xl transition-colors">
                            <Smile className="w-5 h-5" />
                        </button>
                        <textarea
                            className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-3 px-2 text-[var(--ec-on-surface)] placeholder:text-[var(--ec-outline)] resize-none font-medium h-11"
                            placeholder="Type your message..."
                            rows={1}
                        />
                        <button className="w-12 h-11 shrink-0 flex items-center justify-center bg-[var(--ec-primary)] text-[var(--ec-on-primary)] rounded-[14px] shadow-lg shadow-[var(--ec-primary)]/20 hover:brightness-110 active:scale-95 transition-all">
                            <Send className="w-5 h-5 ltr:ml-1 rtl:mr-1" />
                        </button>
                    </div>
                    <div className="flex justify-between items-center mt-3 px-2">
                        <div className="flex gap-4">
                            <button className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--ec-outline-variant)] uppercase tracking-wider hover:text-[var(--ec-primary)] transition-colors">
                                <Mic className="w-3.5 h-3.5" /> Voice Note
                            </button>
                        </div>
                        <p className="text-[10px] text-[var(--ec-outline-variant)] font-medium">Press Enter to send</p>
                    </div>
                </footer>
            </section>
        </div>
    );
}
