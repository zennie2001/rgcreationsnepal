import type { Metadata } from "next";
// import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import Link from "next/link";
import { Inter } from "next/font/google";
import ToastProvider from "@/components/ToastContainer";
import Head from "next/head";

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
         <Head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RG Creations Nepal",
        "url": "https://rgcreationsnepal.com",
        "logo": "https://rgcreationsnepal.com/logo.png",
        "alternateName": [
          "Best architecture company Nepal",
          "Top architecture company Nepal",
          "Premium architecture company Nepal",
          "Elegant architecture company Nepal",
          "Highly recommended architecture company Nepal",
          "Nepal’s leading architecture company Nepal",
          "Kathmandu’s top architecture company Nepal",
          "Award‑winning architecture company Nepal",
          "Trusted architecture company Nepal",
          "Best banquet design company Nepal",
          "Top banquet design company Nepal",
          "Premium banquet design company Nepal",
          "Elegant banquet design company Nepal",
          "Famous banquet design company Nepal"
        ],
        "description":
          "RG Creations Nepal is a leading architecture and banquet design firm in Kathmandu and nationwide, known for premium, award‑winning, elegant and trusted architectural and banquet design services.",
        "foundingDate": "2008",
        "founders": [
          {
            "@type": "Person",
            "name": "Ram Giri",
            "jobTitle": "Executive Chairman"
          }
        ],
        "location": {
          "@type": "PostalAddress",
          "streetAddress": "Baluwatar",
          "addressLocality": "Kathmandu",
          "addressRegion": "Bagmati Province",
          "addressCountry": "Nepal"
        },
        "foundingLocation": "Kathmandu, Nepal",
        "areaServed": "Nepal",
        "numberOfEmployees": "200+",
        "slogan":
          "We don’t just build spaces; we create lasting impressions.",
        "memberOf": ["Link World Tech (R&D hub, Shenzhen, China)"],
        "award": [
          "Award‑winning architecture company Nepal",
          "Award‑winning banquet design company Nepal"
        ]
      })
    }}
  />
</Head>
      
      <body className={twMerge(jakarta.variable, "antialiased font-sans")}>
        <Header />
        {children}
        <ToastProvider />
        <Footer />
      </body>
    </html>
  );
}
