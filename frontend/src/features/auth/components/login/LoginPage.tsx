"use client";

import Link from "next/link";
import { useLocale } from "@/providers/LocaleProvider";
import { AuthLayout } from "../AuthLayout";
import { AuthHeader, AuthSeparator, SocialAuth } from "../shared/AuthShared";
import { LoginForm } from "./LoginForm";

export function LoginPage() {
    const { t } = useLocale();

    return (
        <AuthLayout>
            <AuthHeader
                title={t.auth.welcomeBack}
                subtitle={t.auth.loginSubtitle}
            />

            <div className="space-y-6">
                <SocialAuth
                    googleText={t.auth.google}
                    appleText={t.auth.apple}
                />

                <AuthSeparator text={t.auth.orContinueWith} />

                <LoginForm />

                <p className="text-center text-sm font-medium text-[var(--ec-on-surface-variant)] mt-8">
                    {t.auth.noAccount}{" "}
                    <Link href="/register" className="text-[var(--ec-primary)] font-bold hover:underline">
                        {t.auth.signUp}
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
}
