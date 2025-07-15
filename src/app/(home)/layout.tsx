import type { Metadata } from "next";
// import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import Link from "next/link";
import { Inter } from "next/font/google";
import ToastProvider from "@/components/ToastContainer";

const jakarta = Inter({
  subsets: ["latin"],
  weight: ["400","500","600","700","800","900"], // Add required font weights
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Top-Rated Construction Company for Nightclubs, Hotels & Banquets",
    template: "%s ",
  },
  description:
    "RG Creations is a leading construction company in Nepal, specializing in residential and commercial projects. We are committed to delivering high-quality construction services with a focus on innovation, sustainability, and customer satisfaction.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
