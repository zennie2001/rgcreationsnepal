import Link from "next/link";
import React from "react";

const WelcomeSection = () => {
  return (
    <section className="w-full pt-12 pb-12 bg-[#f6f7f8] ">
      {/* Background Text */}
      <div className="container mx-auto relative">
        <div className="container px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
            {/* Left Content */}
            <div className="space-y-8 z-10 relative">
              <div className="space-y-4">
                <p className="text-sm text-gray-600 uppercase tracking-widest font-medium">
                  Welcome to RG Creations Nepal
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#333d49] leading-tight">
                  Top-Rated <span className="text-[#333d49]">Architecture</span>
                  <br />
                  Firm in Nepal– Your 
                  <br />
                  Vision, Our Design
                </h2>
              </div>

              <div className="space-y-6  lg:w-[450px]">
                <p className="text-gray-700 text-sm  lg:leading-relaxed pb-4 text-justify">
                  AT RG CREATIONS PVT. LTD., WE DON'T JUST DESIGN BUILDINGS—WE
                  CRAFT ENVIRONMENTS THAT INSPIRE, ENGAGE, AND ELEVATE. BASED IN
                  KATHMANDU, NEPAL AND BACKED BY OVER 15 YEARS OF HANDS-ON
                  INDUSTRY EXPERIENCE, WE SPECIALIZE IN ARCHITECTURAL AND
                  INTERIOR DESIGN WITH A STRONG FOCUS ON THE HOSPITALITY,
                  NIGHTLIFE, AND COMMERCIAL SECTORS.
                </p>

                <Link href={'/about/about-us'} aria-label="Learn more about our company on the About page">
                <button className="bg-[#133950] hover:bg-teal-800 text-white px-4 py-2 mb-20 font-medium text-sm tracking-wide uppercase transition-colors duration-300">
                 Explore Our Company
                </button>
                </Link>
              </div>
            </div>

            {/* Right Content - Image with Frame */}
            <div className="relative z-10 md:me-20 ">
              <div>
                {/* Main Image Container */}
                <div className="border-[#333d49] border-[24px] w-full h-60 md:h-72 p-4 md:p-6">
                  <img
                    src="/about/mission.jpg"
                    alt="Trusted architecture company  "
                    className=" absolute -top-14 left-14 object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end px-4 md:px-0 pt-8  ">
          <div className="border-r-8  border-[#133950] pr-4">
            <div className="text-[#bfbfbf]/50 text-right">
              <span className="text-4xl md:text-6xl font-extrabold">15 YEARS</span>
              <div className="mt-2">
                <span className="text-xl font-medium text-gray-800">EXPERIENCE WORKING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
