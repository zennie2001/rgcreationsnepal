
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
    <head>
      <link
        rel="canonical"
        href="https://www.rgcreationsnepal.com/projectss/ongoing-projects"
      />
    </head>
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