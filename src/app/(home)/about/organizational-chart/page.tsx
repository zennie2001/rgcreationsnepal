import AboutOrgHero from '@/sections/AboutOrgHero'
import OrganizationalChart from '@/sections/OrganizationalChart'
import Script from 'next/script';
import React from 'react'

export const metadata = {
  title: "Organizational Chart | Architecture & Design Projects in Nepal",
  description:
    "View the organizational hierarchy of RG Creations Nepal to understand our leadership structure, team roles, and how we collaborate.",
};

const page = () => {
  return (
    <>

     <head>
  <link
    rel="canonical"
    href="https://www.rgcreationsnepal.com/about/organizational-chart"
  />
</head>

    <Script
  id="organizational-chart-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "url": "https://www.rgcreationsnepal.com/about/organizational-chart",
      "name": "Organizational Chart - RG Creations Nepal Pvt. Ltd.",
      "description": "Explore the organizational hierarchy of RG Creations Nepal Pvt. Ltd., showcasing the leadership structure, team roles, and collaborative workflow behind our architectural innovations.",
      "mainEntity": {
        "@type": "Organization",
        "name": "RG Creations Nepal Pvt. Ltd.",
        "url": "https://www.rgcreationsnepal.com",
        "logo": "https://www.rgcreationsnepal.com/logo.png",
        "description": "RG Creations Nepal is a leading architecture and construction firm known for innovative, sustainable, and client-focused projects delivered throughout Nepal.",
        "department": [
          {
            "@type": "Organization",
            "name": "Architecture Department",
            "description": "Responsible for architectural planning, concept design, and structural innovation."
          },
          {
            "@type": "Organization",
            "name": "Interior Design Department",
            "description": "Focuses on aesthetics, functionality, and client vision for interior spaces."
          },
          {
            "@type": "Organization",
            "name": "Project Management Department",
            "description": "Oversees project execution, timelines, and coordination among teams."
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

    
    
    <main className='overflow-hidden'>
      <AboutOrgHero />
      <OrganizationalChart/>
    </main>
    </>
  )
}

export default page