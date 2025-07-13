
import React from 'react'
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import ServicesInteriorHero from '@/sections/ServicesInteriorHero';
import Link from 'next/link';

export const metadata = {
  title: "Architectural And Interior Design - RG Creations Nepal ",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};

const page = () => {
  return (
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
          <section className="py-16 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-8 col-span-2">
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                      Architectural & Interior Design
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
At RG Creations Pvt. Ltd., we bring visions to life through distinctive architectural and interior design services that blend creativity, functionality, and elegance. Whether you're building from the ground up or transforming an existing space, our team of architects and interior designers ensures every detail aligns with your identity, purpose, and lifestyle.                        <br/>

                    <br/>
                    We don’t just design buildings — we craft experiences. From the flow of natural light to the textures underfoot, every element is intentionally selected to create cohesive, inspiring, and efficient environments that stand the test of time.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 py-4">
                        Our Design Philosophy
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-justify">
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
                        <h3 className="text-xl font-semibold text-gray-900">
                        Our Architectural Design Services Include:
                      </h3>
                      <ul className="list-disc text-gray-600 leading-relaxed pl-8">
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
                      <h3 className="text-xl font-semibold text-gray-900">
                        Our Interior Design Expertise Covers:

                      </h3>
                      <ul className="list-disc text-gray-600 leading-relaxed pl-8">
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