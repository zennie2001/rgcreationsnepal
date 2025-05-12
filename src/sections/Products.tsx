"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import products  from "@/constants/products";




// Filter tabs
const filterTabs = [
  { id: "featured", label: "Featured Products" },
  { id: "new", label: "New Arrivals" },
  { id: "bestseller", label: "Best Seller" },
];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("featured");

  return (
    <section className="w-full bg-background text-white py-16 px-6 md:px-12 lg:px-16">
      <div className="container mx-auto md:text-left text-center">
        {/* Product Range Heading */}
        <div className="mb-12">
          <p className="text-[#ff5533] mb-2">Product Range</p>
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium ">
            Engineered to Cut, Styled to
            <br />
            Stand Out, Ready for Anything
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 md:px-6 md:py-2 text-sm md:text-lg rounded-full transition-colors ${
                activeFilter === tab.id
                  ? "bg-[#ff5533] text-white"
                  : "bg-gray-600 text-white hover:bg-gray-500"
              }`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.slice(0,4).map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 rounded-lg overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image.src}
                  alt={product.name}
                  className="w-full aspect-square object-cover "
                />
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
                  <button className="bg-[#ff5533] hover:bg-[#e64a2e] text-white p-2 rounded">
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
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          <div className="w-8 h-2 rounded-full bg-[#ff5533]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Products;
