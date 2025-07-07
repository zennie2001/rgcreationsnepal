import Link from "next/link";
import React from "react";

const Specialization: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-0">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            OUR
            <br />
            SPECIALIZATION
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
            AT RG CREATIONS PVT. LTD., WE EXCEL AT CRAFTING EXCEPTIONAL SPACES
            DEFINED BY LUXURY, INNOVATION, AND IMPECCABLE DESIGN. WE SPECIALIZE
            IN BUILDING TOP-CLASS NIGHTCLUBS, LUXURIOUS RESIDENTIAL
            DEVELOPMENTS, AND COMMERCIAL PROJECTS THAT SET NEW STANDARDS ACROSS
            NEPAL'S HOSPITALITY AND REAL ESTATE SECTORS.
          </p>
        </div>

        {/* Premium Nightclub Section */}
        <div className="mb-10">
          <div className="grid grid-cols-1 bg-[#f6f7f8] lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden">
              <img
                src="/about/nightclub.jpg "
                alt="Premium Nightclub Interior"
                className="w-full h-96 object-cover hover:scale-110 duration-300 transition-all rounded-sm shadow-lg"
              />
            </div>
            <div className="lg:pl-8">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                PREMIUM NIGHTCLUB
                <br />
                CONSTRUCTION
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 text-justify">
                DESIGNING AND BUILDING WORLD-CLASS NIGHTCLUBS FEATURING FLAWLESS
                ARCHITECTURE, CUTTING-EDGE ACOUSTICS, AND IMMERSIVE LIGHTING TO
                CREATE UNFORGETTABLE NIGHTLIFE EXPERIENCES.
              </p>
              <Link href={'/nightclub'}>
              <button className="text-gray-500 text-sm font-medium tracking-widest hover:text-black transition-colors">
                READ MORE
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Luxurious Residential Section */}
        <div className="mb-10">
          <div className="grid grid-cols-1 bg-[#f6f7f8] lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 lg:pr-8">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                LUXURIOUS RESIDENTIAL
                <br />
                DEVELOPMENTS
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 text-justify">
                CREATING ELEGANT, HIGH-END HOMES AND APARTMENT COMPLEXES THAT
                COMBINE TIMELESS DESIGN, COMFORT, AND MODERN FUNCTIONALITY.
              </p>
              <Link href={'/hotel'}>
              <button className="text-gray-500 text-sm font-medium tracking-widest hover:text-black transition-colors">
                READ MORE
              </button>
              </Link>
            </div>
            <div className="order-1 lg:order-2 overflow-hidden">
              <img
                src="/about (2).jpg"
                alt="Luxurious Residential Interior"
                className="w-full h-96 object-cover hover:scale-110 duration-300 transition-all rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Commercial Construction Section */}
        <div className="mb-10">
          <div className="grid grid-cols-1 bg-[#f6f7f8] lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden">
              <img
                src="/about (3).jpg"
                alt="Commercial Construction Site"
                className="w-full h-96 object-cover hover:scale-110 duration-300 transition-all rounded-sm shadow-lg"
              />
            </div>
            <div className="lg:pl-8">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                COMMERCIAL
                <br />
                CONSTRUCTION
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 text-justify">
                DEVELOPING OFFICE BUILDINGS, RETAIL SPACES, HOTELS, AND OTHER
                COMMERCIAL PROJECTS TAILORED TO MEET YOUR BUSINESS GOALS AND
                ENHANCE OPERATIONAL SUCCESS.
              </p>
              <Link href={'/hotel'}>
              <button className="text-gray-500 text-sm font-medium tracking-widest hover:text-black transition-colors">
                READ MORE
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Architectural & Interior Design Section */}
        <div className="mb-10">
          <div className="grid grid-cols-1 bg-[#f6f7f8] lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 lg:pr-8">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                ARCHITECTURAL &<br />
                INTERIOR DESIGN
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 text-justify">
                PROVIDING INNOVATIVE DESIGNS FOR HOSPITALITY VENUES, LUXURY
                BOUTIQUE HOTELS, EXCLUSIVE RESIDENCES, AND COMMERCIAL PROPERTIES
                - EACH CUSTOMIZED TO YOUR VISION.
              </p>
               <Link href={'/services'}>
              <button className="text-gray-500 text-sm font-medium tracking-widest hover:text-black transition-colors">
                READ MORE
              </button>
              </Link>
            </div>
            <div className="order-1 overflow-hidden lg:order-2">
              <img
               src="/about/20(1).jpg"
                alt="Modern Interior Design"
                className="w-full h-96 hover:scale-110 duration-300 transition-all object-cover rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Premium Furniture Supply Section */}
        <div className="mb-10">
          <div className="grid grid-cols-1 bg-[#f6f7f8] lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden">
              <img
               src="/about (5).jpg"
                alt="Premium Furniture Collection"
                className="w-full h-96 hover:scale-110 duration-300 transition-all object-cover rounded-sm shadow-lg"
              />
            </div>
            <div className="lg:pl-8">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                PREMIUM FURNITURE
                <br />
                SUPPLY
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                PROVIDING EXCLUSIVE, HIGH-QUALITY FURNITURE COLLECTIONS THAT
                BLEND STYLE, COMFORT, AND DURABILITY, PERFECT FOR UPSCALE
                ENVIRONMENTS.
              </p>
              <Link href={'/services'}>
              <button className="text-gray-500 text-sm font-medium tracking-widest hover:text-black transition-colors">
                READ MORE
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Nightclub Equipment Supply Section */}
        <div className="mb-10">
          <div className="grid grid-cols-1 bg-[#f6f7f8] lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 lg:pr-8">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                NIGHTCLUB EQUIPMENT
                <br />
                SUPPLY
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                SUPPLYING STATE-OF-THE-ART SOUND SYSTEMS, DYNAMIC LIGHTING, AND
                SPECIALIZED NIGHTCLUB GEAR THAT ELEVATE ENTERTAINMENT VENUES.
              </p>
              <Link href={'/nightclub'}>
              <button className="text-gray-500 text-sm font-medium tracking-widest hover:text-black transition-colors">
                READ MORE
              </button>
              </Link>
            </div>
            <div className="order-1 overflow-hidden lg:order-2">
              <img
                src="/about (7).jpg"
                alt="DJ Equipment and Sound Systems"
                className="w-full h-96 hover:scale-110 duration-300 transition-all object-cover rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Project Management & Turnkey Solutions Section */}
        <div>
          <div className="grid grid-cols-1 bg-[#f6f7f8] lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden">
              <img
                src="/about (6).jpg"
                alt="Project Management Planning"
                className="w-full h-96 hover:scale-110 duration-300 transition-all object-cover rounded-sm shadow-lg"
              />
            </div>
            <div className="lg:pl-8">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                PROJECT MANAGEMENT &<br />
                TURNKEY SOLUTIONS
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                ENSURING SEAMLESS PROJECT DELIVERY FROM CONCEPT TO COMPLETION -
                ON TIME, WITHIN BUDGET, AND BEYOND EXPECTATIONS.
              </p>
               <Link href={'/services'}>
              <button className="text-gray-500 text-sm font-medium tracking-widest hover:text-black transition-colors">
                READ MORE
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
