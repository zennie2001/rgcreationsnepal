import ServicesNightclubHero from '@/sections/ServicesNightclubHero'
import React from 'react'
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import Link from 'next/link';

export const metadata = {
  title: "Premium Nightclub Construction | Top Builder Nepal",
  description:
    "Meet the expert team behind RG Creations, a top construction company in Nepal committed to delivering quality and excellence.",
};

const page = () => {
  return (
    <main className='overflow-hidden'>

        <ServicesNightclubHero />

        <section className="w-full container mx-auto">
        <div className=" bg-white">
          {/* Main Content Section */}
          <section className="py-16 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-8 col-span-2">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#333d49] leading-tight mb-6">
                      Premium Nightclub Construction
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <i>Building Iconic Nightlife Destinations Across Nepal</i><br/><br/>
                      At RG Creations Nepal, we don’t just build nightclubs — we create immersive, high-energy destinations that captivate your guests from the moment they walk in. Our premium nightclub construction services are trusted by some of Nepal’s most successful hospitality brands, setting the benchmark for elegance, innovation, and functionality.
                        <br />
                      <br />From sleek VIP lounges and futuristic dance floors to intelligent soundproofing and mood lighting systems, every element is curated to deliver unforgettable experiences. Whether you're targeting high-end clientele or the vibrant youth crowd, RG Creations crafts venues that speak your brand’s language and stay relevant for years to come.
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
                        Our Services Include:
                      </h3>
                      <ul className="text-gray-600 text-sm list-disc list-inside leading-relaxed text-justify">
                         <li>Architectural planning and approval</li>
                        <li>Civil and structural construction</li>
                        <li>Electrical and lighting systems</li>
                        <li>HVAC and acoustic insulation</li>
                        <li>Interior decor and luxury finishes</li>
                      </ul>
                    </div>

                    {/* Operational Efficiency */}
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#133950] rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#333d49]">
                       Our Branding & Support Solutions:
                      </h3>
                      <ul className="list-disc text-gray-600 text-sm leading-relaxed list-inside">
                         <li>Club logo design, theme development, and signage</li>
                          <li>Social media setup and launch campaign support</li>
                          <li>Website and event booking system integration</li>
                          <li>Guidance on lighting/music branding for ambiance consistency</li>
                          <li>Post-launch maintenance and upgrades</li>
                      </ul>
                    </div>
                  </div>

                   
                </div>

                {/* Right Content - CTA Card */}
                <div className=" lg:pl-8 md:mt-20">
                  <div className="bg-[#133950] text-white p-8">
                    <h2 className="text-2xl font-bold mb-4">
                      Get an appointment with our Expert
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
               <div className='pt-10'>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#333d49] leading-tight mb-6">
                      Designing for Impact: Where Vision Meets Vibe
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      
                      Every great nightclub starts with a bold idea — and we know how to bring that idea to life. Our design team collaborates closely with you to develop visually striking concepts that reflect your brand identity while keeping flow, safety, and functionality at the core.
                       
                    </p>
                     <h3 className="text-xl font-semibold text-[#333d49] pt-6">
                       Key Design Highlights:
                      </h3>
                      <ul className="text-gray-600 text-sm list-disc list-inside leading-relaxed text-justify">
                           <li>Ambient and programmable LED lighting systems</li>
                            <li>Custom bar and stage structures</li>
                            <li>Premium acoustic treatments and sound system support</li>
                            <li>Luxury furniture and elegant space zoning</li>
                            <li>Interactive features like digital walls, themed decor, and more</li>
                      </ul>
                      <h3 className="text-xl font-semibold text-[#333d49] pt-6">
                       End-to-End Construction Services
                      </h3>
                       <p className="text-gray-600 text-sm leading-relaxed">
                        RG Creations Nepal offers complete turnkey nightclub construction, managing everything from permits and civil works to interiors and finishing touches. We work with certified engineers, architects, and interior designers to ensure that every detail matches the approved plan, timeline, and budget.
                       </p>
                  </div>
            </div>
          </section>
        </div>
      </section>

       <div className="w-full lg:h-[950px] h-[550px] px-8 bg-gray-100 relative flex flex-col items-center ">
      <h2 className="lg:text-5xl text-2xl font-bold text-[#133950] text-center mb-10 mt-16">
        Premium Nightclub Construction
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
          src="https://www.youtube.com/embed/KL6GjVHCRS0"
          title="Premium Furniture Supply"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div>
    </main>
  )
}

export default page
