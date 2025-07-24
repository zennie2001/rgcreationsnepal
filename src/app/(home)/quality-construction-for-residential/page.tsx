
import React from 'react'
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import Link from 'next/link';
import QualityResidentialHero from '@/sections/QualityConstructionHero';

export const metadata = {
  title: "Luxurious Residential Developments Nepal ",
  description:
    "Discover luxurious residential developments by RG Creations, Nepal’s trusted name for high-end, custom-built homes.",
};

const page = () => {
  return (
    <div className='overflow-hidden'>
        <QualityResidentialHero/>
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
                      Quality Constructions for Residentials

                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        At RG Creations Pvt. Ltd., we redefine the essence of modern living through our luxurious residential developments. Combining architectural brilliance with refined aesthetics, we design and build exclusive homes and communities that offer unmatched comfort, functionality, and style. Each project is thoughtfully curated to meet the evolving lifestyle needs of urban dwellers, families, and discerning investors across Nepal.                        <br/>
                        <br/>From high-rise apartment towers to gated villa communities, our residential projects embody elegance, quality, and sustainability — delivering more than just a place to live, but a place to belong.

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
                        What Sets Our Residential Projects Apart
                      </h3>
                      <ul className="list-disc text-sm text-gray-600 leading-relaxed text-justify">
                        <li>Elegant Design Philosophy</li>
                        <li>Smart Living, Naturally</li>
                        <li>Premium Construction & Materials</li>
                        <li>Family-Centric Amenities</li>
                        <li>Security & Privacy First</li>
                      </ul>
                    </div>

                    {/* Operational Efficiency */}
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#133950] rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#333d49]">
                        Comprehensive Services Include
                      </h3>
                      <ul className="list-disc text-sm text-gray-600 leading-relaxed pl-8">
                        <li>Land development and master planning</li>
                        <li>Luxury apartment, villa, and duplex construction</li>
                        <li>Custom interior finishing and design consultation</li>
                        <li>Turnkey delivery, ready-to-move-in options</li>
                        <li>Lighting & Audio Integration</li>
                        <li>Landscape and exterior hardscape design</li>
                        <li>Legal and regulatory compliance management</li>
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
    </div>
  )
}

export default page