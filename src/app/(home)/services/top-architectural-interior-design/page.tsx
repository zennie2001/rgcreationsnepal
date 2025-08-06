
import React from 'react'
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import ServicesInteriorHero from '@/sections/ServicesInteriorHero';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: "Architectural & Interior Design | Nepal Leaders",
  description:"We are an elegant architecture company in Nepal, offering creative, sustainable, and modern architectural solutions for banquet halls and resorts."};

const page = () => {
  return (
    <>
    <head>
      <link
        rel="canonical"
        href="https://www.rgcreationsnepal.com/services/top-architectural-interior-design"
      />
    </head>
    <Script
  id="top-architectural-interior-design-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "url": "https://www.rgcreationsnepal.com/services/top-architectural-interior-design",
          "name": "Top Architectural & Interior Design Services - RG Creations Nepal Pvt. Ltd.",
          "description": "RG Creations Nepal Pvt. Ltd. offers premier architectural and interior design services that blend creativity, functionality, and sustainability to craft inspiring spaces.",
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
            "description": "RG Creations Nepal is a leading architectural and interior design firm in Nepal, known for innovative, sustainable, and client-focused design solutions."
          },
          "serviceType": "Architectural and Interior Design",
          "areaServed": {
            "@type": "Country",
            "name": "Nepal"
          },
          "keywords": [
            "Architectural design Nepal",
            "Interior design Nepal",
            "Top interior designers Nepal",
            "Sustainable architecture Nepal",
            "Creative interior solutions Nepal",
            "RG Creations interior design"
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What architectural and interior design services do you offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer complete architectural planning, space optimization, 3D visualization, theme-based interior styling, furniture design, and material selection tailored to your project goals."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide turnkey interior design solutions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, RG Creations Nepal offers turnkey interior solutions, managing every aspect from concept to execution, including layout design, lighting, furnishings, and decor."
              }
            },
            {
              "@type": "Question",
              "name": "Can you help with sustainable and eco-friendly architectural designs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We integrate sustainable materials, passive design strategies, and energy-efficient systems to create environmentally conscious spaces."
              }
            },
            {
              "@type": "Question",
              "name": "How involved will I be in the design process?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We prioritize client collaboration. You'll be involved at every key stage—from concept development to final approvals—to ensure the design reflects your vision and lifestyle."
              }
            },
            {
              "@type": "Question",
              "name": "What types of spaces do you specialize in designing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We design residential homes, commercial offices, showrooms, hospitality spaces, and high-end retail interiors, focusing on function, aesthetics, and brand identity."
              }
            }
          ]
        }
      ]
    }),
  }}
/>

    <div className='overflow-hidden'>
        <ServicesInteriorHero />

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
                      Architectural & Interior Design
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
At RG Creations Pvt. Ltd., we bring visions to life through distinctive architectural and interior design services that blend creativity, functionality, and elegance. Whether you're building from the ground up or transforming an existing space, our team of architects and interior designers ensures every detail aligns with your identity, purpose, and lifestyle.                        <br/>

                    <br/>
                    We don’t just design buildings — we craft experiences. From the flow of natural light to the textures underfoot, every element is intentionally selected to create cohesive, inspiring, and efficient environments that stand the test of time.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-[#333d49] py-4">
                        Our Design Philosophy
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        We believe great design is the harmony of form, function, and feeling. Our approach focuses on intelligent spatial planning, aesthetic innovation, and user-centered design that reflects both personality and practicality.
                        Whether it’s a luxury villa, a commercial tower, a nightclub, or a retail outlet, we design each space to tell a story — your story.
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
                        Our Architectural Design Services Include:
                      </h3>
                      <ul className="list-disc text-sm text-gray-600 leading-relaxed pl-8">
                        <li>Conceptual Design & 3D Rendering</li>
                        <li>Site Planning & Master Layouts</li>
                        <li>Structural & MEP Integration</li>
                        <li>Sustainable Design Solutions</li>
                        </ul>
                    </div>

                    {/* Operational Efficiency */}
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#133950] rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#333d49]">
                        Our Interior Design Expertise Covers:

                      </h3>
                      <ul className="list-disc text-sm  text-gray-600 leading-relaxed pl-8">
                        <li>Residential Interiors</li>
                        <li>Commercial & Office Interiors</li>
                        <li>Hospitality & Nightlife Interiors</li>
                        <li>Retail Spaces & Showrooms</li>
                        
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

      <div className="w-full lg:h-[950px] h-[550px] px-8 bg-gray-100 relative flex flex-col items-center pt-16">
      <h2 className="lg:text-5xl text-2xl font-bold text-[#133950] text-center mb-10">
        Architectural & Interior  Design
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
          src="https://www.youtube.com/embed/hS2KrcTFYYs"
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