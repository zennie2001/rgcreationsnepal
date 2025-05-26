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
  weight: "400", // Add required font weights
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "BLADE",
    template: "%s | BLADE",
  },
  description:
    "Blade is a specialized eCommerce website offering high-quality blades for industrial, culinary, and personal use. Shop a wide selection of durable, precision-crafted blades designed for performance and reliability. ",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
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
