"use client";

import { TopNavbar, Footer } from "@/features/shared/components";
import {
  HeroSection,
  CategoriesSection,
  HowItWorksSection,
  FeaturedExpertsSection,
  CTASection,
} from "@/features/landing/components";

export default function HomePage() {
  return (
    <>
      <TopNavbar />
      <main>
        <HeroSection />
        <CategoriesSection />
        <HowItWorksSection />
        <FeaturedExpertsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
