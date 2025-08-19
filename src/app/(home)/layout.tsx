import type { Metadata } from "next";
// import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import { Inter } from "next/font/google";
import ToastProvider from "@/components/ToastContainer";


const jakarta = Inter({
  subsets: ["latin"],
  weight: ["400","500","600","700","800","900"], // Add required font weights
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Best Architecture & Construction for Hotels & Clubs",
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
      <head>
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7TCGPVGPF8"></script>
         <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7TCGPVGPF8');
            `,
          }}
        />
      </head>
        
      
      <body className={twMerge(jakarta.variable, "antialiased font-sans overflow-y-scroll  scrollbar-visible ")}>
        
        <Header />
        {children}
        <ToastProvider />
        <Footer />
        
      </body>
    </html>
  );
}
