import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Fertility Reset | 21-Day Integrative Wellness Programme | ATMA",
  description:
    "Personalized fertility wellness support for couples preparing for a healthy pregnancy. Integrating Ayurveda, Functional Medicine, Naturopathy, Nutrition, and Yoga Therapy.",
  keywords: [
    "Fertility Reset",
    "21-day fertility programme",
    "Integrative fertility Kerala",
    "Ayurvedic preconception care",
    "Functional medicine fertility",
    "ATMA fertility wellness",
    "Dr Febin",
    "Dr Shakkeel",
    "Couples fertility programme",
  ],
  openGraph: {
    title: "The Fertility Reset | 21-Day Programme by ATMA",
    description:
      "A personalized whole-body approach to fertility wellness for couples preparing for a healthy pregnancy.",
    url: "https://atmawellness.com",
    siteName: "ATMA Wellness",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen font-sans bg-[#FAF9F6] text-[#192621] antialiased selection:bg-[#2D6A4F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
