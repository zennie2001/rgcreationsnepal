
import React from 'react'
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import ServicesEquipmentHero from '@/sections/ServicesEquipHero';
import Link from 'next/link';

const page = () => {
  return (
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
          <section className="py-16 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-8 col-span-2">
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                      Nightclub Equipment Supply
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        At RG Creations Pvt. Ltd., we are your trusted partner for sourcing and supplying world-class nightclub equipment tailored to elevate the energy, performance, and profitability of nightlife venues across Nepal. From lighting and sound systems to DJ consoles and special effects, we provide everything you need to create a fully immersive and unforgettable nightclub experience.                        <br/>
                        
                        <br/>
                        We work closely with global manufacturers and maintain a direct import channel through our office in Gonjau, China, ensuring access to the latest technology, competitive pricing, and uncompromising quality.

                    </p>
                  </div>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Quality Craftsmanship */}
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-darkGreen rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Our Nightclub Equipment Portfolio Includes:
                      </h3>
                      <ul className="list-disc text-gray-600 leading-relaxed text-justify pl-8">
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
                      <div className="w-12 h-12 bg-darkGreen rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Why Choose RG Creations?
                      </h3>
                      <ul className="list-disc text-gray-600 leading-relaxed pl-8">
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
                <div className="lg:pl-8 md:mt-20">
                  <div className="bg-darkGreen text-white p-8">
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

    </div>
  )
}

export default page