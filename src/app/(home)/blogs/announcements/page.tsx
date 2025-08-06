import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Announcements | RG Creations Nepal Blog",
  description:
    "Stay updated with the latest announcements, news, and insights from RG Creations Nepal Pvt. Ltd., a leading construction firm in Nepal.",
};


export default function page() {
  return (
    <>
    <head>
      <link
        rel="canonical"
        href="https://www.rgcreationsnepal.com/blogs/announcements"
      />
    </head>
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
      <div className="flex-1 bg-white flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          📢 Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-4">
          Our <span className="font-semibold text-gray-800">Announcements</span> page is currently being updated.
        </p>
        <p className="text-md md:text-lg text-gray-500 max-w-xl">
          Stay tuned for important updates, event news, and the latest happenings. We’ll be back shortly with fresh content!
        </p>
      </div>

    </div>
    </>
  );
}
