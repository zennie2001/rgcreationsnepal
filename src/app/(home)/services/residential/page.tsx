import NewPageHeader from "@/components/NewPageHeader";
import About from "@/sections/About";
import BlogDesign from "@/sections/Blog";
import MissionSection from "@/sections/Mission";
import NewsLetter from "@/sections/NewsLetter";
import Image from "next/image";
import React from "react";
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import Services from "@/sections/Services";

export default function RGMission() {
  return (
    <main>
      <NewPageHeader title="Residential Construction" />
      <div className="container mx-auto w-full py-10 bg-white">
        {/* Top Section */}

        <div className="min-h-screen bg-white">
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

                {/* Text Overlay */}
                <div className="absolute top-2 left-2  text-white p-4 rounded-lg max-w-xs">
                  <p className="text-sm leading-relaxed">
                    Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus
                    rutrum leo consequatur accumsan. Vivamus viverra ante
                    turpis.
                  </p>
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
                      Welcome to RG Creations. Unlock excellence through
                      Exceptional services.
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      A leading construction company specializing in building
                      diverse facilities, we bring expertise and innovation to
                      every project. Our portfolio includes banquets, hotels,
                      disco clubs, malls, hospitals, apartments, housing
                      complexes, schools, colleges, and more. With a commitment
                      to delivering quality craftsmanship, we cater to a wide
                      range of industries and ensure that every project meets
                      the highest standards of design, functionality, and
                      sustainability. Our services encompass various categories,
                      providing a comprehensive solution for all construction
                      needs.
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
                      <div className="w-12 h-12 bg-darkGreen rounded-lg flex items-center justify-center">
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
                <div className="lg:pl-8 md:mt-20">
                  <div className="bg-darkGreen text-white p-8">
                    <h2 className="text-2xl font-bold mb-4">
                      Get a appointment with our Expert
                    </h2>
                    <button className="my-14 inline-flex items-center justify-center w-12 h-12 bg-white rounded-full text-darkGreen hover:bg-gray-100 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Services />
      </div>
    </main>
  );
}
