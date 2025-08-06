
import React from 'react'
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import ServicesFirnitureHero from '@/sections/ServicesFurtinutreHero';
import Link from 'next/link';
import FurnitureVideo from '@/sections/FurnitureVideo';
import FurnitureImage from '@/sections/furnitureimage';
import Script from 'next/script';

export const metadata = {
  title: "Premium Furniture Supply | Nepal Construction Partner",
  description: "Discover RG Creations Nepal’s premium furniture solutions that complement our architectural and interior design projects.",
};

const page = () => {
  return (
    <>
    <head>
      <link
        rel="canonical"
        href="https://www.rgcreationsnepal.com/services/top-premium-furniture-supply"
      />
    </head>
      <Script
  id="top-premium-furniture-supply-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "url": "https://www.rgcreationsnepal.com/services/top-premium-furniture-supply",
          "name": "Top Premium Furniture Supply - RG Creations Nepal Pvt. Ltd.",
          "description": "RG Creations Nepal Pvt. Ltd. offers premium furniture supply services, delivering high-quality, custom, and stylish furniture solutions for residential, commercial, and hospitality projects across Nepal.",
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
            "description": "RG Creations Nepal is a leading company in premium furniture supply, offering customized, quality furniture solutions tailored to client needs in Nepal."
          },
          "serviceType": "Premium Furniture Supply",
          "areaServed": {
            "@type": "Country",
            "name": "Nepal"
          },
          "keywords": [
            "Premium furniture Nepal",
            "Furniture supply Kathmandu",
            "Custom furniture Nepal",
            "High-quality furniture Nepal",
            "Furniture supplier Nepal",
            "RG Creations furniture supply"
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What types of furniture does RG Creations Nepal supply?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We supply premium furniture for residential, commercial, and hospitality spaces including sofas, beds, dining sets, office furniture, and customized designs."
              }
            },
            {
              "@type": "Question",
              "name": "Can I request custom-made furniture from RG Creations Nepal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer fully customized furniture solutions based on your preferred styles, materials, dimensions, and usage requirements."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer delivery and installation services for furniture?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide professional delivery and on-site installation services across Nepal to ensure the furniture fits perfectly and is ready to use."
              }
            },
            {
              "@type": "Question",
              "name": "What makes your furniture supply service premium?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our furniture is crafted with high-quality materials, superior finishes, and attention to detail, offering both durability and design tailored to luxury environments."
              }
            },
            {
              "@type": "Question",
              "name": "Who can benefit from your premium furniture supply service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve homeowners, interior designers, architects, hospitality businesses, and commercial developers seeking stylish, functional, and premium-quality furniture."
              }
            }
          ]
        }
      ]
    }),
  }}
/>


    <div className='overflow-hidden'>
        <ServicesFirnitureHero />

        <section className="w-full container mx-auto">
        <div className=" pt-20 bg-white">
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
          <section className="pb-16 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-8 col-span-2">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#333d49] leading-tight mb-6">
                      Premium Furniture Supply
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        At RG Creations Pvt. Ltd., we supply premium furniture solutions that blend sophistication, comfort, and durability. Our curated collection is crafted to elevate residential, commercial, hospitality, and entertainment spaces with timeless style and world-class craftsmanship. Whether you're furnishing a luxury villa, an upscale office, or a high-end nightclub, we deliver bespoke furniture that complements your space and reflects your brand or lifestyle.                        <br/>
                        <br/>
                        From modern minimalist designs to opulent classics, every piece we offer is carefully selected for its quality, functionality, and visual appeal.

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
                        What We Offer:
                      </h3>
                      <ul className="list-disc text-sm text-gray-600 leading-relaxed text-justify pl-8">
                        <li>Residential Furniture</li>
                        <li>Office & Corporate Furniture</li>
                        <li>Hospitality & Nightclub Furniture</li>
                        <li>Retail & Display Fixtures</li>
                        <li>Custom-Made Solutions</li>
                      </ul>
                    </div>

                    {/* Operational Efficiency */}
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#133950] rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#333d49]">
                        Why Choose RG Creations for Furniture Supply?
                      </h3>
                      <ul className="list-disc text-sm text-gray-600 leading-relaxed pl-8">
                        <li>Direct Import from Global Manufacturers</li>
                        <li>Premium Finishes & Materials</li>
                        <li>Design + Supply Integration</li>
                        <li>Bulk Supply & Custom Orders</li>
                        <li>Timely Delivery & Assembly</li>
                       
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
            </div>
          </section>
        </div>
      </section>

      <FurnitureImage />

      <FurnitureVideo />

    </div>
    </>
  )
}

export default page