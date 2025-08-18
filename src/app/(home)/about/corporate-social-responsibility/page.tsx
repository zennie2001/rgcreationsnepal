
import AboutResponsibilityHero from "@/sections/AboutResponsibilityHero";
import SocialResponsibilites from "@/sections/SocialResponsibility";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Corporate Social Responsibility | RG Creations Nepal",
  description:
    "Discover how RG Creations Nepal drives positive change through community empowerment, and socially responsible initiatives that shape a better future.",
};

export default function page() {
  return (
    <>
    <head>
  <link
    rel="canonical"
    href="https://www.rgcreationsnepal.com/about/corporate-social-responsibility"
  />
</head>
     <Script
      id="corporate-social-responsibility-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "url": "https://www.rgcreationsnepal.com/about/corporate-social-responsibility",
          "name": "Case Studies - RG Creations Nepal Pvt. Ltd.",
          "description": "Detailed case studies showcasing RG Creations Nepal Pvt. Ltd.'s successful architecture and construction projects, highlighting innovation, client satisfaction, and sustainable design across Nepal.",
          "mainEntity": {
            "@type": "Organization",
            "name": "RG Creations Nepal Pvt. Ltd.",
            "url": "https://www.rgcreationsnepal.com",
            "logo": "https://www.rgcreationsnepal.com/logo.png",
            "description": "RG Creations Nepal is a leading architecture and construction firm known for innovative, sustainable, and client-focused projects delivered throughout Nepal.",
            "hasPart": [
              {
                "@type": "CreativeWork",
                "name": "Luxury Resort Development",
                "description": "Comprehensive architectural and construction services delivered for a premier luxury resort, integrating sustainable design and smart technology."
              },
              {
                "@type": "CreativeWork",
                "name": "Banquet Hall Renovation",
                "description": "Successful renovation project improving aesthetics, acoustics, and functionality for a top banquet hall in Kathmandu."
              },
              {
                "@type": "CreativeWork",
                "name": "Nightclub Interior Design",
                "description": "Innovative lighting and acoustics design creating immersive guest experiences in a high-profile Kathmandu nightclub."
              }
            ]
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

     <main className="overflow-hidden">
      
      <AboutResponsibilityHero/>
      <SocialResponsibilites/>

      

        

     

    
    </main>
    </>
   
  );
}
