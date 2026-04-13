import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, Big_Shoulders } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Display font — bold contemporary editorial (used for headings)
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Hero font — heavy industrial condensed (used only in hero)
const hero = Big_Shoulders({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

// Body font — refined, neutral but characterful
const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Limitless Auto Collision | I-CAR Gold Class Collision Repair — San Fernando Valley",
  description:
    "I-CAR Gold Class certified collision repair in San Fernando Valley & Los Angeles. 8+ years, lifetime warranty, free estimates. Collision, PDR, mechanical, detailing, towing.",
  keywords:
    "auto collision repair, body shop, San Fernando Valley, Los Angeles, I-CAR Gold Class, paintless dent repair, auto body, lifetime warranty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${hero.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-black text-white font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
