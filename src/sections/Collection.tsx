"use client";
import Link from "next/link";
import React from "react";

const Collection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-4">
      <div className="container mx-auto ">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Left Column - Building Image */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Green rectangle decoration */}
              {/* <div className="absolute -top-8 left-0 w-16 h-20 bg-[#133950] z-10"></div> */}
              <img
                src="harsa-batika2.jpg"
                alt="Highly recommended architecture company"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Middle Column - Interior Design */}
          <div className="lg:col-span-6">
            <img
              src="/about/middle-img.jpg"
              alt="Nepal’s leading architecture company "
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Text */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#333d49] leading-tight">
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
            <h3 className="text-2xl font-semibold text-left  text-gray-900">
             Stylish & Innovative Construction Designs

            </h3>
            <p className="text-gray-600 leading-relaxed text-left  ">
              At RG Creations Nepal, we blend creativity with functionality to deliver<br/> construction designs that are both modern and timeless. From bold <br/>interiors to smart architectural layouts, our projects reflect the latest<br/> trends with a focus on quality and innovation.

            </p>
            <Link href="/gallery/photo-gallery">
            <button className="bg-[#133950] hover:bg-darkGreen text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex justify-start">
              Explore More
            </button>
            </Link>
          </div>

          {/* Right Column - Modern House Image */}
          <div className="lg:col-span-6">
            <img
              src="/about/home-page-img.jpg"
              alt="Modern Interior Design"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Text Section */}
        <div className="flex justify-start  px-4 md:px-0 py-8 ">
          <div className="border-l-8  border-[#133950] pl-4">
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
