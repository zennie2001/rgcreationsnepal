import Gallery3DHero from '@/sections/Gallery3dHero'
import Project3DGallery from '@/sections/Project3DGallery';
import Script from 'next/script';

import React from 'react'

export const metadata = {
  title: "3D Gallery | Top Architecture Visualization",
  description:
    "Explore RG Creations Nepal’s 3D gallery showcasing realistic architectural visualizations, immersive designs and commercial projects.",
};

const page = () => {
  return (
    <>
    <head>
      <link
        rel="canonical"
        href="https://www.rgcreationsnepal.com/gallery/3d-gallery"
      />
    </head>
     <Script
      id="3d-gallery-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "3D Gallery - RG Creations Nepal Pvt. Ltd.",
          "url": "https://www.rgcreationsnepal.com/gallery/3d-gallery",
          "description": "Explore the 3D architectural visualizations and models by RG Creations Nepal Pvt. Ltd., showcasing innovative design and construction projects.",
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
        <Gallery3DHero/>
        <Project3DGallery/>
    </div>
    </>
  )
}

export default page