import Hotel from '@/sections/Hotel';
import HotelHero from '@/sections/HotelHero'
import Script from 'next/script';
import React from 'react'

export const metadata = {
  title: "Hotel Resort Construction | Top Builder Nepal",
  description:
    "RG Creations Nepal specializes in hotel and resort construction, delivering luxurious, sustainable, and innovative hospitality spaces.",
};


const page = () => {
  return (
    <>
    <head>
      <link
        rel="canonical"
        href="https://www.rgcreationsnepal.com/hotel-resort-construction"
      />
    </head>
    <Script
  id="hotel-resort-construction-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "url": "https://www.rgcreationsnepal.com/hotel-resort-construction",
      "name": "Hotel & Resort Construction Services - RG Creations Nepal Pvt. Ltd.",
      "description": "RG Creations Nepal Pvt. Ltd. provides specialized hotel and resort construction services across Nepal. We design and build world-class hospitality spaces that combine luxury, comfort, and architectural elegance.",
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
      "provider": {
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
        },
        "foundingDate": "2016",
        "description": "RG Creations Nepal is a premier architectural and interior design company in Nepal, known for delivering luxury hotels, boutique resorts, and hospitality projects that exceed expectations."
      },
      "serviceType": "Hotel and Resort Construction",
      "areaServed": {
        "@type": "Country",
        "name": "Nepal"
      },
      "keywords": [
        "Hotel construction Nepal",
        "Resort construction company Nepal",
        "Hospitality architecture Nepal",
        "Luxury resort design Nepal",
        "Boutique hotel construction Nepal",
        "RG Creations hotel and resort"
      ]
    }),
  }}
/>


    <main className='overflow-hidden'>
        <HotelHero />
       <Hotel />
    </main>
    </>
    
  )
}

export default page