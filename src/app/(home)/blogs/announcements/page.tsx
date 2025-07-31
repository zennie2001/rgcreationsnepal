import Script from "next/script";
import React from "react";

export default function page() {
  return (
    <>
     <Script
      id="announcements-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "url": "https://www.rgcreationsnepal.com/blogs/announcements",
          "name": "Announcements - RG Creations Nepal Pvt. Ltd.",
          "description": "Stay updated with the latest announcements, news, and updates from RG Creations Nepal Pvt. Ltd., a top construction and architecture company in Nepal.",
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
    <div className="min-h-screen flex flex-col">
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
    </div>
    </>
  );
}
