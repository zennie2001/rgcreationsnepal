
import GalleryHero from '@/sections/GalleryHero'
import ProjectImageGallery from '@/sections/ProjectImageGallery'
import Script from 'next/script';
import React from 'react'

export const metadata = {
  title: "Photo Gallery | RG Creations Nepal",
  description:
    "Browse stunning photos of RG Creations Nepal’s completed projects, including luxury resorts, banquet halls, clubs, and architectural masterpieces across Nepal.",
};

const page = () => {
  return (
    <>
     <Script
      id="photo-gallery-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Photo Gallery - RG Creations Nepal Pvt. Ltd.",
          "url": "https://www.rgcreationsnepal.com/gallery/photo-gallery",
          "description": "Explore the photo gallery of RG Creations Nepal Pvt. Ltd., showcasing our architectural and construction projects across Nepal.",
          "mainEntity": {
            "@type": "Organization",
            "name": "RG Creations Nepal Pvt. Ltd.",
            "url": "https://www.rgcreationsnepal.com",
            "logo": "https://www.rgcreationsnepal.com/logo.png",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+977-9802357231",
                "contactType": "customer service",
                "areaServed": "NP",
                "availableLanguage": ["English", "Nepali"]
              }
            ]
          }
        }),
      }}
    />
    <div className="overflow-hidden ">
      <GalleryHero/>
      <ProjectImageGallery/>
    </div>
    </>
  )
}

export default page