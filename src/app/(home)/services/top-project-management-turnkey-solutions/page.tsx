import React from 'react'
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import ServicesProjectHero from '@/sections/ServicesProjectHero';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: "Project Management & Turnkey Solutions Nepal",
  description: "Experience seamless project management and turnkey construction solutions with RG Creations, delivering quality architecture and hospitality projects across Nepal.",
};

const page = () => {
  return (
    <>
     <Script
      id="top-project-management-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "url": "https://www.rgcreationsnepal.com/services/top-project-management-turnkey-solutions",
          "name": "Top Project Management & Turnkey Solutions - RG Creations Nepal Pvt. Ltd.",
          "description": "RG Creations Nepal Pvt. Ltd. offers expert project management and turnkey construction solutions, delivering efficient, on-time, and budget-friendly construction projects across Nepal.",
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
            "description": "RG Creations Nepal specializes in project management and turnkey construction services, ensuring seamless delivery of residential, commercial, and hospitality projects."
          },
          "serviceType": "Project Management and Turnkey Construction Solutions",
          "areaServed": {
            "@type": "Country",
            "name": "Nepal"
          },
          "keywords": [
            "Project management Nepal",
            "Turnkey construction Nepal",
            "Construction management Nepal",
            "Turnkey solutions Nepal",
            "RG Creations project management"
          ]
        }),
      }}
    />
    <div className='overflow-hidden'>
        <ServicesProjectHero />

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
            <div className=" mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-8 col-span-2">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#333d49] leading-tight mb-6">
                     Project Management & Turnkey Solutions
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      At RG Creations Pvt. Ltd., we specialize in turning bold visions into iconic nightlife destinations. Our premium nightclub construction services are tailored to entrepreneurs, hospitality brands, and entertainment groups looking to create vibrant, unforgettable experiences. We go beyond conventional construction — we build atmospheres that pulse with energy, style, and exclusivity.
                        <br/>
                        <br/>From architectural planning to interior design, lighting, acoustics, and technology integration, our turnkey solutions are engineered to impress, perform, and endure.

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
                        Experience-Driven Design for Maximum Impact
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        We believe a nightclub is more than just a venue — it’s a lifestyle experience. Every space we design is carefully curated to guide customer flow, encourage interaction, and enhance comfort while delivering that unmistakable wow factor. Whether you envision a modern industrial vibe, luxury lounge ambiance, or high-tech dance arena, our team transforms your concept into reality with a strong focus on user experience.
                      </p>
                    </div>

                    {/* Operational Efficiency */}
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#133950] rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#333d49]">
                        Comprehensive Services Include
                      </h3>
                      <ul className="list-disc text-gray-600 text-sm leading-relaxed pl-8">
                        <li>Feasibility Study & Site Analysis</li>
                        <li>Architectural Design & 3D Visualization</li>
                        <li>Structural & MEP Works</li>
                        <li>Interior & Theme Development</li>
                        <li>Lighting & Audio Integration</li>
                        <li>Bar, Lounge & VIP Area Customization</li>
                        <li>Security, Access & Surveillance Systems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Content - CTA Card */}
                <div className="  lg:w-auto lg:pl-8 md:mt-20 ">
                  <div className="w-full bg-[#133950] text-white p-8">
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

       <div className="w-full lg:h-[950px] h-[550px] px-8 bg-gray-100 relative flex flex-col items-center pt-16">
      <h2 className="lg:text-5xl text-2xl font-bold text-[#133950] text-center mb-10">
        Project Management & Turnkey Solutions 
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
          src="https://www.youtube.com/embed/joYu4krAWZ4"
          title="Premium Furniture Supply"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div>

    </div>
    </>
  )
}

export default page