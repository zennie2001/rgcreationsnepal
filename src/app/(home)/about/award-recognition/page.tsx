import Script from "next/script";
import React from "react";

export default function page() {
  return (
    <>

     <Script
      id="award-recognition-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "url": "https://www.rgcreationsnepal.com/about/award-recognition",
          "name": "Award & Recognition - RG Creations Nepal Pvt. Ltd.",
          "description": "Explore the prestigious awards and recognitions received by RG Creations Nepal Pvt. Ltd., highlighting their excellence in architecture and construction services across Nepal.",
          "mainEntity": {
            "@type": "Organization",
            "name": "RG Creations Nepal Pvt. Ltd.",
            "url": "https://www.rgcreationsnepal.com",
            "logo": "https://www.rgcreationsnepal.com/logo.png",
            "award": [
              "Best Architecture Firm Nepal 2022",
              "Top Hospitality Design Award 2023",
              "Sustainable Building Award 2021",
              "Excellence in Construction Management 2020"
            ],
            "description": "RG Creations Nepal is renowned for innovative architecture, sustainable design, and high-quality construction, earning multiple awards and recognitions in Nepal's building industry."
          },
          "publisher": {
            "@type": "Organization",
            "name": "RG Creations Nepal Pvt. Ltd.",
            "url": "https://www.rgcreationsnepal.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.rgcreationsnepal.com/logo.png"
            }
          }
        }),
      }}
    />


    <main className="min-h-screen flex flex-col">
      {/* Top 80px gray section */}
      <div className="h-[120px] bg-gray-400 w-full" />

      {/* Remaining white section */}
      <div className="flex-1 bg-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          ⏳ Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl">
          This page is currently being updated. Please check back soon for the latest content.
        </p>
      </div>
    </main>
    </>
    
  );
}
