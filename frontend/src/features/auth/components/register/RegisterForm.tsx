"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Lock, ArrowRight, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRegister } from "../../hooks/use-auth";
import { registerSchema, RegisterFormValues } from "../../Types";
import { useLocale } from "@/providers/LocaleProvider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AuthField } from "../shared/AuthShared";

export function RegisterForm() {
    const { t } = useLocale();
    const router = useRouter();
    const { mutate: registerUser, isPending, error } = useRegister();
    const ArrowIcon = ArrowRight;

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            role: "CLIENT",
        },
    });

    const userRole = watch("role");

    const onSubmit = (data: RegisterFormValues) => {
        registerUser(data, {
            onSuccess: (response) => {
                if (response.status === 'success') {
                    router.push('/login');
                }
            },
        });
    };

    const apiError = error?.response?.data?.message || error?.message;

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* API Error Message */}
            {apiError && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-xs font-bold animate-in fade-in slide-in-from-top-2">
                    {apiError}
                </div>
            )}

            {/* Role Selection */}
            <div className="space-y-2">
                <Label className="text-xs font-bold text-[var(--ec-secondary)] uppercase tracking-wider">{t.auth.expertOrClient}</Label>
                <div className="flex gap-2 p-1 bg-[var(--ec-surface-container-low)] rounded-xl">
                    <button
                        type="button"
                        onClick={() => setValue("role", "CLIENT")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold transition-all ${userRole === "CLIENT" ? "bg-[var(--ec-primary)] text-white shadow-md scale-[1.02]" : "text-[var(--ec-secondary)] hover:bg-[var(--ec-surface-container)]"
                            }`}
                    >
                        <User className="w-4 h-4" />
                        {t.auth.client}
                    </button>
                    <button
                        type="button"
                        onClick={() => setValue("role", "EXPERT")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold transition-all ${userRole === "EXPERT" ? "bg-[var(--ec-tertiary)] text-white shadow-md scale-[1.02]" : "text-[var(--ec-secondary)] hover:bg-[var(--ec-surface-container)]"
                            }`}
                    >
                        <Briefcase className="w-4 h-4" />
                        {t.auth.expert}
                    </button>
                </div>
            </div>

            <AuthField
                label={t.auth.fullName}
                icon={User}
                name="name"
                placeholder="John Doe"
                register={register}
                error={errors.name}
            />

            <AuthField
                label={t.auth.email}
                icon={Mail}
                name="email"
                type="email"
                placeholder="john@example.com"
                register={register}
                error={errors.email}
            />

            <AuthField
                label={t.auth.password}
                icon={Lock}
                name="password"
                type="password"
                placeholder="••••••••"
                register={register}
                error={errors.password}
            />

            <div className="flex items-start gap-3 py-2">
                <input type="checkbox" id="terms" required className="w-4 h-4 mt-1 rounded text-[var(--ec-primary)] focus:ring-[var(--ec-primary)] border-[var(--ec-outline)]" />
                <Label htmlFor="terms" className="text-xs text-[var(--ec-on-surface-variant)] leading-tight cursor-pointer">
                    {t.auth.agreeTerms}
                </Label>
            </div>

            <Button
                type="submit"
                disabled={isPending}
                className={`w-full py-6 rounded-xl text-white font-black text-base shadow-lg hover:shadow-xl active:scale-[0.98] transition-all mt-4 group ${userRole === "EXPERT" ? "bg-[var(--ec-tertiary)] hover:bg-[#6e4501]" : "signature-gradient"}`}
            >
                {isPending ? "Creating account..." : t.auth.signUpButton}
                {!isPending && (
                    <ArrowIcon className="w-4 h-4 ltr:ml-2 rtl:mr-2 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all rtl:-scale-x-100" />
                )}
            </Button>
        </form>
    );
}
