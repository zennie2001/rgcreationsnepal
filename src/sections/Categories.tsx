import React from "react";

const WelcomeSection = () => {
  return (
    <section className="w-full py-40 bg-[#f6f7f8] overflow-hidden">
      {/* Background Text */}
      <div className="container mx-auto relative">
        <div className="absolute -right-60 bottom-10  text-black font-bold text-5xl md:text-7xl  leading-none pointer-events-none select-none">
          15 YEARS
        </div>

        {/* Experience Working Text */}
        <div className="absolute right-8 md:right-16 lg:right-24 bottom-8 md:bottom-16 text-gray-500 font-medium text-sm md:text-base tracking-wide z-10">
          EXPERIENCE WORKING
          <div className="w-16 h-0.5 bg-teal-600 mt-2"></div>
        </div>

        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
            <div className="relative z-10">
              <div className="relative">
                {/* Main Image Container */}
                <div className="bg-[#244d4d] p-6 md:p-8">
                  <div className="bg-white p-4 md:p-6">
                    <img
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
                      alt="Luxury restaurant interior"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-[#244d4d]"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-[#244d4d]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
