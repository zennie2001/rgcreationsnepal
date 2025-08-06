import MediaCoverage from '@/sections/MediaCoverage';
import MediaHero from '@/sections/MediaHero'
import Script from 'next/script';
import React from 'react'


export const metadata = {
  title: "Media Coverage | Best Construction Company Nepal",
  description:
    "Explore news articles, press releases, and media features of RG Creations Nepal’s achievements and projects in construction and architecture.",
};




const page = () => {

  

  return (
    <>
    <head>
      <link
        rel="canonical"
        href="https://www.rgcreationsnepal.com/blogs/media-coverage"
      />
    </head>
    <Script
  id="media-coverage-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
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
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What type of media coverage does RG Creations Nepal receive?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "RG Creations Nepal is featured in news articles, interviews, press releases, and industry publications highlighting our architecture and construction projects."
              }
            },
            {
              "@type": "Question",
              "name": "Where can I find the latest press releases about RG Creations Nepal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Latest press releases are available on our media coverage blog page and through our official website."
              }
            },
            {
              "@type": "Question",
              "name": "Does RG Creations Nepal participate in interviews and industry events?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our leadership team regularly participates in interviews, panel discussions, and industry events to share insights about the construction sector."
              }
            },
            {
              "@type": "Question",
              "name": "How can I get media inquiries or interview requests?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Media inquiries and interview requests can be directed to our customer service contact via phone or email provided on our website."
              }
            },
            {
              "@type": "Question",
              "name": "Are your media features available in both English and Nepali?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide media content and coverage in both English and Nepali languages."
              }
            }
          ]
        }
      ]
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