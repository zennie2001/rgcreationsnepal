import ServicesCommercialHero from '@/sections/SevicesCommercialHero'
import React from 'react'
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";


export const metadata = {
  title: "Commercial Construction - RG Creations Nepal ",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};

const page = () => {
  return (
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
                      alt="Image 1"
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
                      alt="Image 1"
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
                      alt="Image 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Section */}
          <section className="py-16 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-8 col-span-2">
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                      Commercial Construction
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
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
                      <h3 className="text-xl font-semibold text-gray-900">
                        Quality Craftsmanship
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
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
                      <h3 className="text-xl font-semibold text-gray-900">
                        Operational Efficiency
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
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