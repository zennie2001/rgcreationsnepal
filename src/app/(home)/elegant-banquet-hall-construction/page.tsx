import Banquet from '@/sections/Banquet'
import BanquetHero from '@/sections/BanquetHero'
import Script from 'next/script';
import React from 'react'

export const metadata = {
  title: "Elegant Banquet Construction | Top Builder Nepal",
  description:
    "RG Creations Nepal specializes in designing and constructing elegant banquet halls with luxurious finishes, functional layouts, and timeless architecture tailored to your vision.",
};


const page = () => {
  return (
    <>

    <Script
  id="elegant-banquet-hall-construction-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "url": "https://www.rgcreationsnepal.com/elegant-banquet-hall-construction",
      "name": "Elegant Banquet Hall Construction Services - RG Creations Nepal Pvt. Ltd.",
      "description": "RG Creations Nepal Pvt. Ltd. offers premium construction services for elegant banquet halls in Nepal. We blend architectural excellence with aesthetic interior design to create timeless venues for weddings, events, and celebrations.",
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
        "description": "RG Creations Nepal is a top-tier architectural and interior design firm in Nepal, known for building elegant, functional, and luxurious banquet halls and event venues."
      },
      "serviceType": "Elegant Banquet Hall Construction",
      "areaServed": {
        "@type": "Country",
        "name": "Nepal"
      },
      "keywords": [
        "Banquet hall construction Nepal",
        "Elegant event venue design Nepal",
        "Luxury banquet architecture Nepal",
        "Wedding hall construction Nepal",
        "RG Creations banquet design",
        "Premium banquet interior design Nepal"
      ]
    }),
  }}
/>



    <main className='overflow-hidden'>
      <BanquetHero/>
      <Banquet/>

      <div className="w-full lg:h-[950px] h-[550px] px-8 bg-gray-100 relative flex flex-col items-center justify-center">
      <h2 className="lg:text-5xl text-2xl font-bold text-[#133950] text-center mb-10">
        Elegant Banquet Hall &<br/> Event venues Construction
      </h2>

      <section
        className="
          relative 
          flex justify-center items-center
          lg:w-[1209px] lg:h-[600px] 
          md:w-[600px] w-[300px] h-[300px]
          rounded-xl overflow-hidden
        "
      >
        <iframe
        loading="lazy"
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/Vqq1rA8RkLA"
          title="Premium Furniture Supply"
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