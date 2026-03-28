import { TopNavbar, Footer } from "@/features/shared/components";
import { ExpertProfilePage } from "@/features/expert-profile/components";

export default function ExpertProfileRoute() {
    return (
        <>
            <TopNavbar />
            <ExpertProfilePage />
            <Footer />
        </>
    );
}
