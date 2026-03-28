"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLogin } from "../../hooks/use-auth";
import { loginSchema, LoginFormValues } from "../../Types";
import { useLocale } from "@/providers/LocaleProvider";
import { Button } from "@/components/ui/button";
import { AuthField } from "../shared/AuthShared";

export function LoginForm() {
    const { t, direction } = useLocale();
    const router = useRouter();
    const { mutate: login, isPending, error } = useLogin();
    const ArrowIcon = ArrowRight;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormValues) => {
        login(data, {
            onSuccess: (response) => {
                if (response.status === 'success') {
                    router.push('/dashboard');
                }
            },
        });
    };

    const apiError = error?.response?.data?.message || error?.message;

    return (
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* API Error Message */}
            {apiError && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-xs font-bold animate-in fade-in slide-in-from-top-2">
                    {apiError}
                </div>
            )}

            <AuthField
                label={t.auth.email}
                icon={Mail}
                name="email"
                type="email"
                placeholder="yours@example.com"
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
                rightElement={
                    <Link href="#" className="text-xs font-bold text-[var(--ec-primary)] hover:underline">
                        {t.auth.forgotPassword}
                    </Link>
                }
            />

            <Button
                type="submit"
                disabled={isPending}
                className="w-full py-6 rounded-xl signature-gradient text-white font-black text-base shadow-lg hover:shadow-xl active:scale-[0.98] transition-all mt-4 group"
            >
                {isPending ? "Signing in..." : t.auth.signInButton}
                {!isPending && (
                    <ArrowIcon className="w-4 h-4 ltr:ml-2 rtl:mr-2 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all rtl:-scale-x-100" />
                )}
            </Button>
        </form>
    );
}
