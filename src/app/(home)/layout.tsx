import type { Metadata } from "next";
// import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import Link from "next/link";
import {Inter } from "next/font/google";
import ToastProvider from "@/components/ToastContainer";

const jakarta = Inter({
  subsets: ["latin"],
  weight: "400", // Add required font weights
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Star Laxmi",
    template: "%s | Star Laxmi",
  },
  description:
    "Star Laxmi Jewellery LLC, a leading gold supplier, specializes in high-quality 24K gold for wholesale and retail buyers, ensuring purity, authenticity, and competitive pricing.",
  icons: {
    icon: "/assets/star-laxmi-favicon.png",
    apple: "/assets/star-laxmi-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(jakarta.variable, "antialiased font-sans")}>
        <Header />
        {children}
        <ToastProvider />
        <Footer />
      </body>
    </html>
  );
}
