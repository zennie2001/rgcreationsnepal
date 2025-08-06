import Nightclub from '@/sections/NIghtclub'
import NightclubHero from '@/sections/NightclubHero'
import Script from 'next/script';
import React from 'react'

export const metadata = {
  title: "Luxury Nightclub Construction | Top Builder Nepal",
  description:
    "RG Creations Nepal delivers cutting-edge luxury nightclub construction with stylish designs to create unforgettable nightlife venues.",
};

const page = () => {
  return (
    <>
    <head>
      <link
        rel="canonical"
        href="https://www.rgcreationsnepal.com/luxury-nightclub-construction"
      />
    </head>
    <Script
  id="luxury-nightclub-construction-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "url": "https://www.rgcreationsnepal.com/luxury-nightclub-construction",
      "name": "Luxury Nightclub Construction Services - RG Creations Nepal Pvt. Ltd.",
      "description": "RG Creations Nepal Pvt. Ltd. specializes in high-end, luxurious nightclub construction services. We combine architecture, interior design, lighting, and structural excellence to build unforgettable nightlife spaces in Nepal.",
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
        "description": "RG Creations Nepal is Nepal’s leading architectural and interior design firm, specializing in luxury construction projects, including high-end nightclubs, lounges, and hospitality venues."
      },
      "serviceType": "Luxury Nightclub Construction",
      "areaServed": {
        "@type": "Country",
        "name": "Nepal"
      },
      "keywords": [
        "Luxury nightclub construction Nepal",
        "High-end nightclub design Nepal",
        "Club architecture Nepal",
        "Nightlife venue construction Nepal",
        "Interior design for nightclubs",
        "RG Creations Nepal club design"
      ]
    }),
  }}
/>

   <main className='overflow-hidden'>
      <NightclubHero />
      <Nightclub />


     <div className="w-full lg:h-[950px] h-auto px-8 bg-gray-100 relative flex flex-col items-center  pt-12">
      <h2 className="lg:text-5xl text-2xl font-bold text-[#133950] text-center mb-16">
        Luxury Nightclub Construction
      </h2>

      <section
        className="
          grid 
          grid-cols-1 
          lg:grid-cols-2 
          gap-8 
          w-full 
          max-w-[1209px]
        "
      >
        <iframe
        loading="lazy"
          className="w-full h-[250px] md:h-[400px] lg:h-[500px] rounded-xl"
          src="https://www.youtube.com/embed/KL6GjVHCRS0"
          title="Luxury Nightclub Casino Construction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
        loading="lazy"
          className="w-full h-[250px] md:h-[400px] lg:h-[500px] rounded-xl"
          src="https://www.youtube.com/embed/nUAGfEXMyjc"
          title="Luxury Nightclub Casino Construction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div>


    </main>

    </>
   
  )
}

export default page