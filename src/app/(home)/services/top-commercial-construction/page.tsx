import ServicesCommercialHero from '@/sections/SevicesCommercialHero'
import React from 'react'
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";
import Script from 'next/script';


export const metadata = {
  title: "Commercial Construction Experts | Nepal’s Top Firm",
  description: "Discover RG Creations Nepal’s expertise in commercial construction, delivering innovative and high-quality office buildings.",
};

const page = () => {
  return (
    <>
    <head>
      <link
        rel="canonical"
        href="https://www.rgcreationsnepal.com/services/top-commercial-construction"
      />
    </head>
    <Script
  id="top-commercial-construction-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "url": "https://www.rgcreationsnepal.com/services/top-commercial-construction",
          "name": "Top Commercial Construction Services - RG Creations Nepal Pvt. Ltd.",
          "description": "RG Creations Nepal Pvt. Ltd. specializes in top commercial construction services, delivering innovative, sustainable, and efficient commercial buildings tailored to your business needs.",
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
            "description": "RG Creations Nepal is a leading construction and architecture firm known for delivering outstanding commercial building projects across Nepal."
          },
          "serviceType": "Commercial Construction",
          "areaServed": {
            "@type": "Country",
            "name": "Nepal"
          },
          "keywords": [
            "Commercial construction Nepal",
            "Top commercial builders Nepal",
            "Commercial building design Nepal",
            "Sustainable commercial construction",
            "RG Creations commercial projects",
            "Business infrastructure Nepal"
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What types of commercial projects does RG Creations Nepal handle?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We specialize in office buildings, retail spaces, malls, educational institutions, and other business infrastructure tailored to meet your operational needs."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide end-to-end commercial construction services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer full-service solutions from architectural design and project planning to engineering, construction, interior design, and final handover."
              }
            },
            {
              "@type": "Question",
              "name": "How do you ensure the sustainability of your commercial buildings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We integrate energy-efficient materials, green building practices, and smart infrastructure to reduce environmental impact and operational costs."
              }
            },
            {
              "@type": "Question",
              "name": "Can RG Creations assist with commercial construction permits and approvals?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Our team manages all legal, regulatory, and municipal processes to ensure smooth permit acquisition and construction compliance."
              }
            },
            {
              "@type": "Question",
              "name": "How long does a commercial construction project typically take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Timelines depend on project size and complexity, but standard commercial buildings can take anywhere from a few months to over a year to complete."
              }
            }
          ]
        }
      ]
    }),
  }}
/>

    <div className='overflow-hidden'>
        <ServicesCommercialHero />

         <section className="w-full container mx-auto">
        <div className=" py-20 bg-white">
          {/* Hero Section */}
          <section className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 h-[85vh]">
              {/* Image 1 */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 ">
                  <div className="w-full h-full  flex items-center justify-center">
                    <img
                      src="/s1.jpg"
                      alt="Top Commercial Construction "
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Image 2 */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <img
                      src="/s3.jpg"
                      alt="Top Commercial Construction"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Image 3 with Text Overlay */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-400">
                  <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
                    <img
                      src="/s2.jpg"
                      alt="Top Commercial Construction"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Section */}
          <section className="pt-12 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-8 col-span-2">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#333d49] leading-tight mb-6">
                      Commercial Construction
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We develop versatile commercial properties, including
                      office buildings, retail centers, hotels, and mixed-use
                      complexes. Understanding the diverse needs of businesses,
                      we deliver designs that maximize functionality,
                      flexibility, and brand identity. Our commercial projects
                      are engineered to enhance operational efficiency while
                      providing inviting, professional environments for clients,
                      employees, and visitors alike. From large-scale
                      developments to boutique commercial spaces, RG Creations
                      offers tailored solutions that support sustainable growth
                      and long-term value creation.
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
                        Quality Craftsmanship
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Uncompromising quality and exemplary craftsmanship are
                        hallmarks of our constructions. We prioritize precision
                        and excellence in every detail, ensuring that our
                        projects are enduring works of art.
                      </p>
                    </div>

                    {/* Operational Efficiency */}
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#133950] rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#333d49]">
                        Operational Efficiency
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Our dedication to project management efficiency ensures
                        timely completion, allowing clients to enjoy their
                        luxurious spaces sooner. We optimize timelines without
                        compromising quality.
                      </p>
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
                      Ready to bring your dream space to life? Schedule a consultation with our architectural expert today.<br/>
                        At RG Creations, we blend innovation with tradition to craft spaces that inspire. Let's discuss your vision and turn it into reality—with precision, creativity, and care.
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

    </div>
    </>
  )
}

export default page