import CompletedProjects from '@/sections/CompletedProject'
import ProjectHero from '@/sections/ProjectHero'
import Script from 'next/script';
import React from 'react'

export const metadata = {
  title: "Completed Projects | Leading Construction Nepal",
  description: "Explore RG Creations Nepal’s completed projects showcasing innovative architecture and expert construction craftsmanship across Nepal.",
};

const page = () => {
  return (
    <>
     <Script
      id="completed-projects-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "url": "https://www.rgcreationsnepal.com/projectss/rg-creations-completed-projects",
          "name": "Completed Projects - RG Creations Nepal Pvt. Ltd.",
          "description": "Showcasing the completed architectural and construction projects by RG Creations Nepal Pvt. Ltd., delivering excellence across Nepal.",
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
            "Completed construction projects Nepal",
            "RG Creations completed projects",
            "Nepal architecture portfolio",
            "Finished building projects Nepal",
            "Premium completed projects Nepal"
          ]
        }),
      }}
    />
    <div className="overflow-hidden ">
        <ProjectHero />
        <CompletedProjects/>
    </div>
    </>
  )
}

export default page