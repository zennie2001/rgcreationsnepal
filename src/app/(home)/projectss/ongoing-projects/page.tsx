
import OngoingProjects from '@/sections/OngoingProjects';
import ProjectOnGoingHero from '@/sections/ProjectOngoingHero'
import Script from 'next/script';
import React from 'react'

export const metadata = {
  title: "Ongoing Projects | Top Architecture Firm Nepal",
  description:"Explore RG Creations’ ongoing projects showcasing innovative architecture and construction expertise across Nepal."};

const page = () => {
  return (
    <>
     <Script
      id="ongoing-projects-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "url": "https://www.rgcreationsnepal.com/projectss/ongoing-projects",
          "name": "Ongoing Projects - RG Creations Nepal Pvt. Ltd.",
          "description": "Explore the ongoing projects by RG Creations Nepal Pvt. Ltd., showcasing premium architectural and construction developments across Nepal.",
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
              },
              {
                "@type": "ContactPoint",
                "telephone": "+977-01-4524806",
                "contactType": "office",
                "areaServed": "NP",
                "availableLanguage": ["English", "Nepali"]
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Baluwatar",
              "addressLocality": "Kathmandu",
              "postalCode": "44600",
              "addressCountry": "NP"
            }
          },
          "keywords": [
            "Ongoing construction projects Nepal",
            "RG Creations ongoing projects",
            "Nepal architecture projects",
            "Active building projects Nepal",
            "Premium construction developments Nepal"
          ]
        }),
      }}
    />
    <div className="overflow-hidden ">
       <ProjectOnGoingHero />
        <OngoingProjects />
    </div>
    </>
  )
}

export default page