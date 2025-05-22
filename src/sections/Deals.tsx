"use client";
import { useState } from "react";
import { Heart } from "lucide-react";
import productItems from "@/constants/products";

export default function Deals() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = () => {
    setActiveSlide((prev) =>
      prev === Math.ceil(productItems.length / 2) - 1 ? 0 : prev + 1
    );
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? Math.ceil(productItems.length / 2) - 1 : prev - 1
    );
  };

  return (
    <section className="w-full bg-primary py-16 text-white overflow-hidden">
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
                  <div
                    className="absolute inset-0 w-64 h-40 bg-darkGreen"
                    style={{
                      clipPath:
                        "polygon(15% 31%, 37% 14%, 85% 28%, 97% 64%, 82% 84%, 58% 92%, 14% 71%, 6% 49%)",
                    }}
                  ></div>

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
              <p className="text-darkGreen text-center md:text-left text-sm">
                Deals
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left font-bold">
                Top Picks. Bottom Prices. Limited
                <br />
                Time.
              </h2>
            </div>

            {/* Product slider */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {productItems.map((product) => (
                  <div
                    key={product.id}
                    className="w-full md:w-1/2 flex-shrink-0 px-2"
                  >
                    <div className="bg-zinc-900 rounded-lg overflow-hidden">
                      {/* Product Image */}
                      <div className="relative">
                        {product.image && (
                          <img
                            src={product.image.src}
                            alt={product.name}
                            className="w-full aspect-square object-cover"
                          />
                        )}
                        {/* Wishlist Button */}
                        <button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full">
                          <Heart size={20} color="white" />
                        </button>
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <p className="text-gray-400 text-sm">{product.brand}</p>
                        <h3 className="font-medium text-white mt-1 mb-4 line-clamp-2">
                          {product.name}
                        </h3>

                        {/* Price */}
                        <div className="flex items-center gap-2">
                          <span className="text-white font-bold">
                            ${product.salePrice.toFixed(2)}
                          </span>
                          <span className="text-gray-400 line-through text-sm">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                          <span className="text-gray-400 text-sm">
                            -{product.discount}%
                          </span>
                        </div>

                        {/* Buy Now Button */}
                        <div className="flex mt-4 gap-2">
                          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded flex-grow">
                            Buy Now
                          </button>
                          <button className="bg-darkGreen hover:bg-[#e64a2e] text-white p-2 rounded">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-shopping-cart"
                            >
                              <circle cx="8" cy="21" r="1" />
                              <circle cx="19" cy="21" r="1" />
                              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(productItems.length / 2) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      activeSlide === index
                        ? "w-8 bg-darkGreen"
                        : "w-2 bg-gray-400"
                    }`}
                  ></button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
