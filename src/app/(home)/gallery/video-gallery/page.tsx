
import ProjectVideoGallery from '@/sections/ProjectVideoGallery'
import VideoGalleryHero from '@/sections/VideoGalleryHero'
import Script from 'next/script';
import React from 'react'

export const metadata = {
  title: "Video Gallery | Top Architecture & Interior Design",
  description:
    "Watch captivating videos showcasing RG Creations Nepal’s architectural and interior design projects, innovation, and client successes.",
};

const page = () => {
  return (
    <>
    <head>
      <link
        rel="canonical"
        href="https://www.rgcreationsnepal.com/gallery/video-gallery"
      />
    </head>
    <Script
      id="video-gallery-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoGallery",
          "name": "Video Gallery - RG Creations Nepal Pvt. Ltd.",
          "url": "https://www.rgcreationsnepal.com/gallery/video-gallery",
          "description": "Explore the video gallery of RG Creations Nepal Pvt. Ltd., showcasing our architectural and construction projects across Nepal.",
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
    <div className='overflow-hidden'>
        <VideoGalleryHero/>
        <ProjectVideoGallery />
    </div>
    </>
  )
}

export default page