"use client";
import React from "react";

const Collection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Left Column - Building Image */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Green rectangle decoration */}
              <div className="absolute -top-8 left-0 w-16 h-20 bg-darkGreen z-10"></div>
              <img
                src="/latest-image (1).jpg"
                alt="Traditional Building"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Middle Column - Interior Design */}
          <div className="lg:col-span-6">
            <img
              src="/latest-image (3).jpg"
              alt="Modern Interior Design"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Text */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Best &<br />
              Trendy
              <br />
              Designs
            </h2>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-6 text-right space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Modern design with new look
            </h3>
            <p className="text-gray-600 leading-relaxed">
              pictures doesn't hurt but let's pull the curtain back<br/> and be
              honest here for a minute. Architects communicate<br/> through their
              drawings - we aren't making art.
            </p>
            <button className="bg-darkGreen hover:bg-darkGreen text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Explore More
            </button>
          </div>

          {/* Right Column - Modern House Image */}
          <div className="lg:col-span-6">
            <img
              src="/latest-image (2).jpg"
              alt="Modern House Design"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Text Section */}
        <div className="flex justify-start  px-4 md:px-0 py-8 ">
          <div className="border-l-8  border-darkGreen pl-4">
            <div className="text-[#bfbfbf]/50 text-left">
              <span className="text-4xl md:text-6xl font-extrabold">LATEST DESIGN</span>
              <div className="mt-2">
                <span className="text-xl font-medium text-gray-800">
                  TRENDS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
