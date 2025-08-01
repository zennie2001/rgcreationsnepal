import MediaCoverage from '@/sections/MediaCoverage';
import MediaHero from '@/sections/MediaHero'
import Script from 'next/script';
import React from 'react'


export const metadata = {
  title: "Media Coverage | Best Construction Company Nepal",
  description:
    "Explore news articles, press releases, and media features highlighting RG Creations Nepal’s achievements and projects in construction and architecture across Nepal.",
};




const page = () => {

  

  return (
    <>
     <Script
      id="media-coverage-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "url": "https://www.rgcreationsnepal.com/blogs/media-coverage",
          "name": "Media Coverage - RG Creations Nepal Pvt. Ltd.",
          "description": "Discover media coverage, news articles, interviews, and press releases about RG Creations Nepal Pvt. Ltd., a leading architecture and construction company in Nepal.",
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
    <div className='overflow-hidden mb-20'>

    <MediaHero />

     <MediaCoverage/>
    </div>
    </>
  )
}

export default page