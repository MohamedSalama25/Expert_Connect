"use client";

import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/providers/LocaleProvider";

const experts = [
    {
        name: "Marcus Thorne",
        specialty: "Business Strategy",
        price: "$150",
        rating: 4.9,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCllBn0SCJXugIkqceSG_S95o_8mGlXdQsc6USomipZjPKngSS6P4-LnukvktYhxsOrAvl8OpHixg0-UZlhdMpV2H92uyjuJSxLj5elmexOWaKhzgB3yu8zO4vn9gMxduJY0B1MxHwgZfBdMov65EklNCM7CGgXRFUgOhIseUpnM5DCqtgvm0tOgL4uJUv2LCZz-KZO_-qNa_dV3fp2Q1DEeMOMVKXN_28JOXUjDMiBfZbEmKPSXb2-sOfLVYNv015rmpBJ5SXjgA",
    },
    {
        name: "Dr. Elena Rossi",
        specialty: "Data Architecture",
        price: "$220",
        rating: 5.0,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpKOBv6VMI7Zg7Jafp4lEMppBTnYG9QhVf_6J2xCc_dNE4uNleVINdS2FZISEhtkBPvPlFlC_PPsNtj91c9igK26L2i7y7g42UBjGyf7vmwpjD2FHp17iwsPfBv4kdPSkl0sOdDgPtQLhQwRXPsvmCfyCEH_abXiKDPdjR7-O69ps--YNFBCNSqYSHsBbuxiTizfKHVXYxwhCCmRjlRwdU7-I0jWAgxTxjLqCyKiMrz1VDxE0AxK7RGMzlCmFqpYMD-13CrKdBJw",
    },
    {
        name: "Julian Vane",
        specialty: "IP Law Expert",
        price: "$195",
        rating: 4.8,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUSlbb1Fwp1_KEiNz5DhOfQmTtD1VTb5b6l7Y84ESi41ahqlu1XXuWymjEFWkaizhgn-Utgyt8v1Hb1Gc3T5aOl8NYYd9MaX1YDYN84itAHdyJc9iTQ35jJKDTqDL9qJeItZ_Zix3eADTKmmCyH9JdjpFqkSb8zjtqXNjkDc95Y7sUSdyDQR3he_l1HjHlbvji_GvyVDL6nIm8GJcz7ZznAPzSRGl1uWXDNJkOVBJbApTbLM8Od75opUd5xFJ2KV2hJXYZZtDNpA",
    },
];

export function FeaturedExpertsSection() {
    const { t } = useLocale();

    return (
        <section className="py-24 bg-[var(--ec-on-surface)] text-white px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold">{t.landing.experts.title}</h2>
                    <div className="flex gap-2">
                        <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experts.map((expert) => (
                        <div key={expert.name} className="bg-[#131b2e] rounded-3xl overflow-hidden group">
                            <div className="relative h-72 overflow-hidden">
                                <Image
                                    src={expert.image}
                                    alt={expert.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 ltr:right-4 rtl:left-4 bg-[var(--ec-tertiary-container)] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 text-[var(--ec-on-tertiary-container)]">
                                    <Star className="w-3.5 h-3.5 fill-current" /> {expert.rating}
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-2xl font-bold">{expert.name}</h3>
                                        <p className="text-[var(--ec-primary-container)] font-medium">{expert.specialty}</p>
                                    </div>
                                    <p className="text-2xl font-bold text-white">
                                        {expert.price}
                                        <span className="text-sm font-normal text-white/50">/{t.common.hr}</span>
                                    </p>
                                </div>
                                <div className="flex gap-2 mt-6">
                                    <Button
                                        variant="ghost"
                                        className="flex-1 bg-white/10 hover:bg-white/20 py-3 rounded-xl font-bold text-white transition-colors"
                                    >
                                        {t.common.profile}
                                    </Button>
                                    <Button className="flex-1 signature-gradient py-3 rounded-xl font-bold shadow-lg shadow-[var(--ec-primary)]/20 text-white">
                                        {t.common.bookSession}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
