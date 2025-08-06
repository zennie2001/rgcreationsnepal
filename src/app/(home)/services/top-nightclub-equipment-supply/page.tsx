
import React from 'react'
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import ServicesEquipmentHero from '@/sections/ServicesEquipHero';
import Link from 'next/link';
import EquipmentVideo from '@/sections/EquipmentVideo';
import Script from 'next/script';

export const metadata = {
  title: "Nightclub Equipment Supply | Trusted Nepal Supplier",
  description:"Get quality nightclub equipment from RG Creations, a trusted supplier supporting Nepal’s hospitality and entertainment construction sectors."};

const page = () => {
  return (
    <>
    <head>
      <link
        rel="canonical"
        href="https://www.rgcreationsnepal.com/services/top-nightclub-equipment-supply"
      />
    </head>
    <Script
  id="top-nightclub-equipment-supply-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "url": "https://www.rgcreationsnepal.com/services/top-nightclub-equipment-supply",
          "name": "Top Nightclub Equipment Supply - RG Creations Nepal Pvt. Ltd.",
          "description": "RG Creations Nepal Pvt. Ltd. specializes in supplying premium nightclub equipment, offering state-of-the-art sound, lighting, and DJ gear tailored for Nepal’s nightlife venues.",
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
            "description": "RG Creations Nepal is a trusted supplier of nightclub equipment, delivering high-quality sound, lighting, and DJ systems to enhance Nepal’s entertainment venues."
          },
          "serviceType": "Nightclub Equipment Supply",
          "areaServed": {
            "@type": "Country",
            "name": "Nepal"
          },
          "keywords": [
            "Nightclub equipment Nepal",
            "Sound system supplier Nepal",
            "Lighting equipment Nepal",
            "DJ gear Nepal",
            "Entertainment venue equipment Nepal",
            "RG Creations nightclub supply"
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What types of nightclub equipment does RG Creations Nepal supply?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We supply advanced sound systems, dynamic lighting setups, DJ consoles, LED walls, stage effects, and more for nightclubs and entertainment venues."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide installation services for nightclub equipment?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer complete installation, configuration, and testing services to ensure all equipment functions flawlessly in your venue."
              }
            },
            {
              "@type": "Question",
              "name": "Can your equipment be customized based on venue size and theme?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We tailor equipment packages to match the acoustics, design, and branding of your nightclub for optimal performance and aesthetics."
              }
            },
            {
              "@type": "Question",
              "name": "Is your equipment suitable for both indoor and outdoor clubs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we supply equipment suitable for both indoor and open-air venues, ensuring durability and performance regardless of the setting."
              }
            },
            {
              "@type": "Question",
              "name": "Who can benefit from your nightclub equipment supply service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our services are ideal for nightclub owners, event organizers, hospitality investors, lounge operators, and entertainment venue developers across Nepal."
              }
            }
          ]
        }
      ]
    }),
  }}
/>

    <div className='overflow-hidden'>
        <ServicesEquipmentHero/>

        <section className="w-full container mx-auto">
        <div className=" py-20 bg-white">
          {/* Hero Section */}
          {/* <section className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 h-[85vh]">
              Image 1
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 ">
                  <div className="w-full h-full  flex items-center justify-center">
                    <img
                      src="/s1.jpg"
                      alt="Image 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              Image 2
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <img
                      src="/s3.jpg"
                      alt="Image 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              Image 3 with Text Overlay
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-400">
                  <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
                    <img
                      src="/s2.jpg"
                      alt="Image 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* Main Content Section */}
          <section className=" px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-8 col-span-2">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#333d49] leading-tight mb-6">
                      Nightclub Equipment Supply
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        At RG Creations Pvt. Ltd., we are your trusted partner for sourcing and supplying world-class nightclub equipment tailored to elevate the energy, performance, and profitability of nightlife venues across Nepal. From lighting and sound systems to DJ consoles and special effects, we provide everything you need to create a fully immersive and unforgettable nightclub experience.                        <br/>
                        
                        <br/>
                        We work closely with global manufacturers and maintain a direct import channel through our office in Gonjau, China, ensuring access to the latest technology, competitive pricing, and uncompromising quality.

                    </p>
                  </div>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Quality Craftsmanship */}
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#133950] rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#333d49]">
                        Our Nightclub Equipment Portfolio Includes:
                      </h3>
                      <ul className="list-disc text-gray-600 text-sm leading-relaxed text-justify pl-8">
                        <li>DJ Consoles & Booths</li>
                        <li>Professional Sound Systems</li>
                        <li>Lighting & Visual Effects</li>
                        <li>Special FX & Atmosphere Machines</li>
                        <li>Visuals & Projection</li>
                        <li>Control Systems & Software</li>
                        <li>Rigging & Mounting Hardware</li>
                    </ul>
                    </div>

                    {/* Operational Efficiency */}
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#133950] rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#333d49]">
                        Why Choose RG Creations?
                      </h3>
                      <ul className="list-disc text-sm text-gray-600 leading-relaxed pl-8">
                        <li>End-to-End Supply</li>
                        <li>Direct Import & Competitive Pricing</li>
                        <li>Expert Installation & Calibration</li>
                        <li>Customized Equipment Packages</li>
                        <li>After-Sales Support</li>
                        
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Content - CTA Card */}
                <div className=" lg:pl-8 md:mt-20">
                  <div className="bg-[#133950] text-white p-8">
                    <h2 className="text-2xl font-bold mb-4">
                      Get a appointment with our Expert
                    </h2>
                    <p className="pt-2 text-sm">
                      Cras tincidunt tellus at mi tristique rhoncus. Etiam
                      dapibus rutrum leo consectetur accumsan. Vivamus viverra
                      ante turpis.
                    </p>
                    <Link
                        href="/book-appointment"
                        className="my-10 inline-flex items-center justify-center w-12 h-12 bg-white text-darkGreen hover:bg-gray-100 transition-colors"
                        >
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>


              <div className=" pt-12
                grid 
                grid-cols-2 
                lg:grid-cols-4 
                gap-4
              ">
                <div className="overflow-hidden">
                  <img
                    src="/about/light1.jpg"
                    alt="Premium Nightclub Equipment"
                    className="w-auto h-80 object-cover rounded-sm hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="overflow-hidden">
                  <img
                    src="/about/equip1.jpg"
                    alt="Premium Nightclub Equipment"
                    className="w-auto h-80 object-cover rounded-sm hover:scale-110 transition-transform duration-300 bg-white"
                  />
                </div>

                <div className="overflow-hidden">
                  <img
                    src="/about/equip3.jpg"
                    alt="Premium Nightclub Equipment"
                    className="w-64 h-auto object-cover rounded-sm hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="overflow-hidden">
                  <img
                    src="/about/equip2.jpg"
                    alt="Premium Nightclub Equipment"
                    className="w-64 h-auto object-cover rounded-sm hover:scale-110 transition-transform duration-300 "
                  />
                </div>
              </div>

            </div>
          </section>
        </div>
      </section>

      <EquipmentVideo/>

    </div>
    </>
  )
}

export default page