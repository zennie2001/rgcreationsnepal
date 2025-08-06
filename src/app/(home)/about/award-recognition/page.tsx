import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Awards & Recognition | Top Architecture Firm Nepal",
  description:
    "Discover how RG Creations Nepal has been recognized for excellence in architecture, hospitality design, and integrated construction.",
};

export default function page() {
  return (
    <>

    <head>
  <link
    rel="canonical"
    href="https://www.rgcreationsnepal.com/about/award-recognition"
  />
</head>

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

<main className="min-h-screen flex flex-col bg-white">
  {/* Top banner section */}
  <div className="h-[120px] bg-gray-400 w-full flex items-center justify-center">
    {/* <h2 className="text-2xl font-semibold text-gray-800 tracking-wide">
      Awards & Recognition
    </h2> */}
  </div>

  {/* Coming Soon message */}
  <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16">
  <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
    ⏳ Coming Soon
  </h1>
  <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-6">
    Our <span className="font-semibold text-gray-800">Awards & Recognition</span> section is currently under construction.
  </p>
  <p className="text-md md:text-lg text-gray-500 max-w-xl">
    We’re excited to share the milestones, honors, and achievements that reflect our passion and dedication to excellence. Please check back soon.
  </p>
</div>

</main>

    </>
    
  );
}
