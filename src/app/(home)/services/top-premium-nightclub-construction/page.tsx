import ServicesNightclubHero from '@/sections/ServicesNightclubHero'
import React from 'react'
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import Link from 'next/link';

export const metadata = {
  title: "Premium Furniture Supply - RG Creations Nepal ",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};

const page = () => {
  return (
    <main className='overflow-hidden'>

        <ServicesNightclubHero />

        <section className="w-full container mx-auto">
        <div className=" py-20 bg-white">
          {/* Main Content Section */}
          <section className="py-16 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-8 col-span-2">
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                      Premium Nightclub Construction
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      At RG Creations Pvt. Ltd., we specialize in turning bold visions into iconic nightlife destinations. Our premium nightclub construction services are tailored to entrepreneurs, hospitality brands, and entertainment groups looking to create vibrant, unforgettable experiences. We go beyond conventional construction — we build atmospheres that pulse with energy, style, and exclusivity.
                      <br />
                      <br />From architectural planning to interior design, lighting, acoustics, and technology integration, our turnkey solutions are engineered to impress, perform, and endure.
                    </p>
                  </div>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Quality Craftsmanship */}
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#133950] rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Experience-Driven Design for Maximum Impact
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-justify">
                        We believe a nightclub is more than just a venue — it’s a lifestyle experience. Every space we design is carefully curated to guide customer flow, encourage interaction, and enhance comfort while delivering that unmistakable wow factor. Whether you envision a modern industrial vibe, luxury lounge ambiance, or high-tech dance arena, our team transforms your concept into reality with a strong focus on user experience.
                      </p>
                    </div>

                    {/* Operational Efficiency */}
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#133950] rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Comprehensive Services Include
                      </h3>
                      <ul className="list-disc text-gray-600 leading-relaxed pl-8">
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
                <div className=" lg:pl-8 md:mt-20">
                  <div className="bg-[#133950] text-white p-8">
                    <h2 className="text-2xl font-bold mb-4">
                      Get an appointment with our Expert
                    </h2>
                    <p className="pt-2">
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
    </main>
  )
}

export default page
