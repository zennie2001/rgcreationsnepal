
import React from 'react'
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import ServicesFirnitureHero from '@/sections/ServicesFurtinutreHero';
import Link from 'next/link';
import FurnitureVideo from '@/sections/FurnitureVideo';
import FurnitureImage from '@/sections/furnitureimage';

export const metadata = {
  title: "Premium Furniture Supply | Nepal Construction Partner",
  description:"Experience cutting-edge architectural and interior design solutions by RG Creations, leaders in Nepal’s construction industry."};

const page = () => {
  return (
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
          <section className="py-16 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-8 col-span-2">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#333d49] leading-tight mb-6">
                      Premium Furniture Supply
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
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
                      <h3 className="text-xl font-semibold text-gray-900">
                        What We Offer:
                      </h3>
                      <ul className="list-disc text-gray-600 leading-relaxed text-justify pl-8">
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
                      <h3 className="text-xl font-semibold text-gray-900">
                        Why Choose RG Creations for Furniture Supply?
                      </h3>
                      <ul className="list-disc text-gray-600 leading-relaxed pl-8">
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

      <FurnitureImage />

      <FurnitureVideo />

    </div>
  )
}

export default page