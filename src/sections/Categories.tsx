import React from "react";

const WelcomeSection = () => {
  return (
    <section className="w-full py-20 bg-[#f6f7f8] overflow-hidden">
      {/* Background Text */}
      <div className="container mx-auto relative">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
            {/* Left Content */}
            <div className="space-y-8 z-10 relative">
              <div className="space-y-4">
                <p className="text-sm text-gray-600 uppercase tracking-widest font-medium">
                  WELCOME
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  WE ARE <span className="text-[#244d4d]">CREATIVE</span>
                  <br />
                  BUILDING - DESIGN
                  <br />
                  COMPANY
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 text-base leading-relaxed max-w-xl">
                  AT RG CREATIONS PVT. LTD., WE DON'T JUST DESIGN BUILDINGS—WE
                  CRAFT ENVIRONMENTS THAT INSPIRE, ENGAGE, AND ELEVATE. BASED IN
                  KATHMANDU, NEPAL AND BACKED BY OVER 15 YEARS OF HANDS-ON
                  INDUSTRY EXPERIENCE, WE SPECIALIZE IN ARCHITECTURAL AND
                  INTERIOR DESIGN WITH A STRONG FOCUS ON THE HOSPITALITY,
                  NIGHTLIFE, AND COMMERCIAL SECTORS.
                </p>

                <button className="bg-[#244d4d] hover:bg-teal-800 text-white px-8 py-3 font-medium text-sm tracking-wide uppercase transition-colors duration-300">
                  READ MORE
                </button>
              </div>
            </div>

            {/* Right Content - Image with Frame */}
            <div className="relative z-10 me-20">
              <div>
                {/* Main Image Container */}
                <div className="border-[#244d4d] border-[24px] w-full h-60 md:h-72 p-4 md:p-6">
                  <img
                    src="/welcome.jpg"
                    alt="Luxury restaurant interior"
                    className=" absolute -top-14 left-14 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end  ">
          <div className="border-r-8  border-darkGreen pr-4">
            <div className="text-[#bfbfbf]/50 text-right">
              <span className="text-6xl font-extrabold">15 YEARS</span>
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
