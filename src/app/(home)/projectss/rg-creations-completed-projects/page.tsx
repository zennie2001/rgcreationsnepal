import CompletedProjects from '@/sections/CompletedProject'
import ProjectHero from '@/sections/ProjectHero'
import Script from 'next/script';
import React from 'react'

export const metadata = {
  title: "Completed Projects | Leading Construction Nepal",
  description: "Explore RG Creations Nepal’s completed projects showcasing innovative architecture and expert constructions.",
};

const page = () => {
  return (
    <>
    <head>
      <link
        rel="canonical"
        href="https://www.rgcreationsnepal.com/projectss/rg-creations-completed-projects"
      />
    </head>
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
          "alternateName": [
          "Best architecture company Nepal",
          "Top architecture company Nepal",
          "Premium architecture company Nepal",
          "Elegant architecture company Nepal",
          "Highly recommended architecture company Nepal",
          "Nepal’s leading architecture company Nepal",
          "Kathmandu’s top architecture company Nepal",
          "Award‑winning architecture company Nepal",
          "Trusted architecture company Nepal",
          "Best banquet design company Nepal",
          "Top banquet design company Nepal",
          "Premium banquet design company Nepal",
          "Elegant banquet design company Nepal",
          "Famous banquet design company Nepal",
           "Number 1 architect company in Nepal",
          "Best architects in Nepal",
          "Top architecture firms in Nepal",
          "Top 10 architecture companies in Nepal",
          "Best architecture company in Kathmandu",
          "Leading architect firm Nepal",
          "No.1 architecture company Nepal",
          "Award-winning architecture company in Nepal",
          "Best design and architecture company Nepal",
          "Best hospitality architecture firm in Nepal",
          "Commercial architect company Nepal",
          "Top rated architects Nepal",
          "Best interior and architecture firm Nepal",
          "Architecture company for hotel design in Nepal",
          "Premium architecture company Kathmandu",
          "Who is the best architect in Nepal?",
          "Top architects list Nepal 2025",
          ],
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