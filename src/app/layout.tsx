import { Inter, Alexandria } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const alexandria = Alexandria({ subsets: ["arabic", "latin"], display: "swap", variable: "--font-alexandria" });

import "./globals.css";
import { LocaleProvider } from "@/providers/LocaleProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "ExpertConnect | Find, Book, and Consult with Verified Experts",
  description:
    "Access elite professional guidance from over 150+ specialties. Secure, instantaneous, and tailored to your growth. The global gold standard for professional consultation.",
  keywords: [
    "expert consultation",
    "book expert",
    "verified experts",
    "professional guidance",
    "online consultation",
    "video consultation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${alexandria.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <LocaleProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
