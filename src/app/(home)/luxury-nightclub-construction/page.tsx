import Nightclub from '@/sections/NIghtclub'
import NightclubHero from '@/sections/NightclubHero'
import Script from 'next/script';
import React from 'react'

export const metadata = {
  title: "Luxury Nightclub Construction | Top Builder Nepal",
  description:
    "RG Creations Nepal delivers cutting-edge luxury nightclub construction with stylish designs, premium finishes, and exceptional craftsmanship to create unforgettable nightlife venues.",
};

const page = () => {
  return (
    <>
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