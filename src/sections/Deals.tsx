"use client";
import { useState } from "react";
import Image from "next/image";
import knife from "@/assets/images/blade.png"

const productItems = [
  {
    id: 1,
    image: knife, // Replace with actual image path
    title: "Benchmade 9400 Osborne Auto, 3.4 S30V Satin Blade, Green Aluminum Handle",
    brand: "Benchmade",
    price: 899.00,
    originalPrice: 999.00,
    discount: "10%",
  },
  {
    id: 2,
    image: knife, // Replace with actual image path
    title: "Benchmade 9400 Osborne Auto, 3.4 S30V Satin Blade, Green Aluminum Handle",
    brand: "Benchmade",
    price: 899.00,
    originalPrice: 999.00,
    discount: "10%",
  },
  {
    id: 3,
    image: knife, // Replace with actual image path
    title: "SOG Flash AT XR Folding Knife",
    brand: "SOG",
    price: 79.99,
    originalPrice: 99.99,
    discount: "20%",
  },
  {
    id: 4,
    image: knife, // Replace with actual image path
    title: "Spyderco Paramilitary 2 Folding Knife",
    brand: "Spyderco",
    price: 169.99,
    originalPrice: 189.99,
    discount: "10%",
  }
];

export default function Deals() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === Math.ceil(productItems.length / 2) - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? Math.ceil(productItems.length / 2) - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-black py-16 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Hero image with overlay text */}
          <div className="md:w-1/2 relative mb-8 md:mb-0">
            <div className="relative h-96 md:h-full overflow-hidden">
              {/* Main image */}
              <div className="w-full h-full bg-gray-800 relative">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-gray-900 opacity-80"></div>
              </div>
              
              {/* Orange splash with text overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Orange splash background */}
                  <div className="absolute inset-0 w-64 h-40 bg-orange-500" style={{ 
                    clipPath: "polygon(15% 31%, 37% 14%, 85% 28%, 97% 64%, 82% 84%, 58% 92%, 14% 71%, 6% 49%)" 
                  }}></div>
                  
                  {/* Text */}
                  <div className="relative z-10 text-center px-12 py-10 text-white">
                    <h3 className="text-2xl font-bold">Premium Blades.</h3>
                    <h3 className="text-2xl font-bold">Killer Deals.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Products section */}
          <div className="md:w-1/2 md:pl-8">
            {/* Section header */}
            <div className="mb-8">
              <p className="text-orange-500 text-sm">Deals</p>
              <h2 className="text-3xl font-bold">Top Picks. Bottom Prices. Limited<br />Time.</h2>
            </div>
            
            {/* Product slider */}
            <div className="relative overflow-hidden">              
              <div 
                className="flex transition-transform duration-300 ease-in-out" 
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {productItems.map((product, index) => (
                  <div key={product.id} className="w-1/2 flex-shrink-0 px-2">
                    <div className="bg-gray-900 rounded-lg p-4 relative">
                      {/* Wishlist button */}
                      <button className="absolute top-3 right-3 text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      
                      {/* Product image */}
                      <div className="flex justify-center h-40 mb-4">
                        <div className="w-32 h-32 bg-gray-800"></div>
                      </div>
                      
                      {/* Product details */}
                      <h3 className="text-sm mb-1">{product.title}</h3>
                      <p className="text-xs text-gray-500 mb-3">{product.brand}</p>
                      
                      {/* Price section */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                        </div>
                        <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">-{product.discount}</span>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex gap-2">
                        <button className="flex-1 bg-gray-700 text-white py-2 px-4 rounded text-sm">
                          Buy Now
                        </button>
                        <button className="bg-orange-500 text-white p-2 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Pagination dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(productItems.length / 2) }).map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeSlide === index ? 'w-8 bg-orange-500' : 'w-2 bg-gray-400'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}