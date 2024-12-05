import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google';
import "../globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import Link from "next/link";

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Reaction Nepal",
    template: "%s | Reaction Nepal",
  },
  description: "Reaction Nepal is a government-registered interdisciplinary organization with its headquarters in Putalisadak, Kathmandu, Nepal. Since its establishment in 2005, it has mainly aimed at providing education services to all seeking their study and career prospects in and out of the country.",
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
        <Footer />
        <div className="flex items-center justify-between w-full py-3 px-24 bg-[#03213C]">
          <p className="text-primary">
            © Copyright 2024 by Reaction Nepal Consultants Pvt. Ltd.
          </p>
          <div className="flex items-center text-primary gap-4">
            <Link href={'/'} className="hover:underline">
              Terms of use
            </Link>
            <div className="size-2 rounded-full bg-primary"></div>
            <Link href={'/'} className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
