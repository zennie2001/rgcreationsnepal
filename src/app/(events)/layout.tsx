import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/sections/Header";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
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
      </body>
    </html>
  );
}
