"use client";

import { DashboardSidebar } from "@/features/shared/components";
import { DashboardPage } from "@/features/dashboard/components";
import { Footer } from "@/features/shared/components";

export default function DashboardRoute() {
    return (
        <>
            <DashboardPage />
            <Footer />
        </>
    );
}
