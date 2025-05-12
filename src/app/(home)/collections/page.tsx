"use client";
import React, { useState } from "react";
import {
  FiHeart,
  FiSliders,
  FiChevronDown,
  FiChevronUp,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import Hero from "@/sections/Hero";
import FAQ from "../faqs/page";
import NewsLetter from "@/sections/NewsLetter";
import productItems from "@/constants/products";
import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";

// Types
interface FilterOption {
  label: string;
  count: number;
}

// Colors for the color selector
const colors = [
  "green",
  "red",
  "yellow",
  "orange",
  "cyan",
  "blue",
  "purple",
  "pink",
  "white",
  "gray",
];

const KnivesCollectionPage: React.FC = () => {
  // State for filters
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 200]);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    "Price Range": true,
    Ratings: true,
    Availability: true,
    Style: true,
    "Blade Length": true,
    "Handle Material": true,
    "Blade Finish": true,
    "Scabbard Type": true,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Most Popular");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Toggle filter sections
  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Handle price range change
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (e.target.id === "min-price") {
      setPriceRange([value, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], value]);
    }
  };

  // Filter options data with the new categories
  const filterOptions: { [key: string]: FilterOption[] } = {
    Style: [
      { label: "Modern", count: 42 },
      { label: "Traditional", count: 35 },
      { label: "Tactical", count: 28 },
      { label: "Historical Replica", count: 15 },
      { label: "Custom Design", count: 20 },
    ],
    "Blade Length": [
      { label: "Under 3 inches (Small)", count: 32 },
      { label: "3–5 inches (Medium)", count: 45 },
      { label: "6–9 inches (Large)", count: 28 },
      { label: "10–15 inches (Extra Large)", count: 17 },
      { label: "Over 15 inches (Oversized/Swords)", count: 10 },
    ],
    "Handle Material": [
      { label: "Wood", count: 30 },
      { label: "Micarta", count: 22 },
      { label: "G10 Composite", count: 25 },
      { label: "Bone or Horn", count: 15 },
      { label: "Rubberized Grip", count: 20 },
      { label: "Metal", count: 18 },
      { label: "Leather Wrapped", count: 12 },
    ],
    "Blade Finish": [
      { label: "Mirror Polish", count: 24 },
      { label: "Satin Finish", count: 32 },
      { label: "Stonewashed", count: 18 },
      { label: "Black Oxide/Coated", count: 22 },
      { label: "Acid Etched", count: 14 },
      { label: "Damascus Patterned", count: 16 },
      { label: "Raw/Forge Finish", count: 10 },
    ],
    "Scabbard Type": [
      { label: "Leather Scabbard", count: 28 },
      { label: "Wooden Sheath", count: 18 },
      { label: "Kydex Sheath", count: 24 },
      { label: "Nylon Case", count: 20 },
      { label: "No Scabbard", count: 15 },
      { label: "Decorative Display Sheath", count: 10 },
    ],
  };

  const ratings = [5, 4, 3, 2, 1];

  return (
    <main className="overflow-hidden">
      <Hero />
      <section className="min-h-screen bg-background text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Filters */}
            <div className="w-full md:w-64 flex-shrink-0 hidden md:block">
              <div className="bg-gray-900 border-2 border-gray-400 rounded-lg p-4 sticky top-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <button className="text-white">
                    <FiSliders size={20} />
                  </button>
                </div>

                {/* Price Range */}
                <div className="border-b border-gray-300 py-4">
                  <button
                    className="flex justify-between items-center w-full text-left mb-2"
                    onClick={() => toggleSection("Price Range")}
                  >
                    <h3 className="font-medium">Price Range</h3>
                    {openSections["Price Range"] ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </button>

                  {openSections["Price Range"] && (
                    <div className="mt-2">
                      <div className="relative pt-5 pb-2">
                        <div className="h-1 bg-gray-700 rounded">
                          <div
                            className="absolute h-1 bg-secondary rounded"
                            style={{
                              left: `${
                                ((priceRange[0] - 0) / (300 - 0)) * 100
                              }%`,
                              width: `${
                                ((priceRange[1] - priceRange[0]) / (300 - 0)) *
                                100
                              }%`,
                            }}
                          ></div>
                        </div>
                        <div
                          className="absolute w-4 h-4 bg-white rounded-full -mt-1.5 cursor-pointer"
                          style={{
                            left: `${((priceRange[0] - 0) / (300 - 0)) * 100}%`,
                          }}
                        ></div>
                        <div
                          className="absolute w-4 h-4 bg-white rounded-full -mt-1.5 cursor-pointer"
                          style={{
                            left: `${((priceRange[1] - 0) / (300 - 0)) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Ratings */}
                <div className="border-b border-gray-300 py-4">
                  <button
                    className="flex justify-between items-center w-full text-left mb-2"
                    onClick={() => toggleSection("Ratings")}
                  >
                    <h3 className="font-medium">Ratings</h3>
                    {openSections["Ratings"] ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </button>

                  {openSections["Ratings"] && (
                    <div className="space-y-2 mt-2">
                      {ratings.map((rating) => (
                        <div
                          key={rating}
                          className="flex justify-between items-center"
                        >
                          <div className="flex">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <span
                                  key={i}
                                  className={`text-lg ${
                                    i < rating
                                      ? "text-yellow-400"
                                      : "text-gray-600"
                                  }`}
                                >
                                  ★
                                </span>
                              ))}
                          </div>
                          <span className="text-xs text-gray-400">(125)</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Availability */}
                <div className="border-b border-gray-300 py-4">
                  <button
                    className="flex justify-between items-center w-full text-left mb-2"
                    onClick={() => toggleSection("Availability")}
                  >
                    <h3 className="font-medium">Availability</h3>
                    {openSections["Availability"] ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </button>

                  {openSections["Availability"] && (
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center justify-between">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="h-5 w-5 text-secondary rounded border-gray-700 bg-gray-800"
                          />
                          <span className="ml-2 text-sm">In Stock</span>
                        </label>
                        <span className="text-xs text-gray-400">(218)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-secondary rounded border-gray-700 bg-gray-800"
                          />
                          <span className="ml-2 text-sm">Out Of Stock</span>
                        </label>
                        <span className="text-xs text-gray-400">(28)</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Style */}
                <div className="border-b border-gray-300 py-4">
                  <button
                    className="flex justify-between items-center w-full text-left mb-2"
                    onClick={() => toggleSection("Style")}
                  >
                    <h3 className="font-medium">Style</h3>
                    {openSections["Style"] ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </button>

                  {openSections["Style"] && (
                    <div className="space-y-2 mt-2">
                      {filterOptions["Style"].map((style) => (
                        <div
                          key={style.label}
                          className="flex justify-between items-center"
                        >
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="h-4 w-4 text-secondary rounded border-gray-700 bg-gray-800"
                            />
                            <span className="ml-2 text-sm">{style.label}</span>
                          </label>
                          <span className="text-xs text-gray-400">
                            ({style.count})
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Blade Length */}
                <div className="border-b border-gray-300 py-4">
                  <button
                    className="flex justify-between items-center w-full text-left mb-2"
                    onClick={() => toggleSection("Blade Length")}
                  >
                    <h3 className="font-medium">Blade Length</h3>
                    {openSections["Blade Length"] ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </button>

                  {openSections["Blade Length"] && (
                    <div className="space-y-2 mt-2">
                      {filterOptions["Blade Length"].map((length) => (
                        <div
                          key={length.label}
                          className="flex justify-between items-center"
                        >
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="h-4 w-4 text-secondary rounded border-gray-700 bg-gray-800"
                            />
                            <span className="ml-2 text-sm">{length.label}</span>
                          </label>
                          <span className="text-xs text-gray-400">
                            ({length.count})
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Handle Material */}
                <div className="border-b border-gray-300 py-4">
                  <button
                    className="flex justify-between items-center w-full text-left mb-2"
                    onClick={() => toggleSection("Handle Material")}
                  >
                    <h3 className="font-medium">Handle Material</h3>
                    {openSections["Handle Material"] ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </button>

                  {openSections["Handle Material"] && (
                    <div className="space-y-2 mt-2">
                      {filterOptions["Handle Material"].map((material) => (
                        <div
                          key={material.label}
                          className="flex justify-between items-center"
                        >
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="h-4 w-4 text-secondary rounded border-gray-700 bg-gray-800"
                            />
                            <span className="ml-2 text-sm">
                              {material.label}
                            </span>
                          </label>
                          <span className="text-xs text-gray-400">
                            ({material.count})
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Blade Finish */}
                <div className="border-b border-gray-300 py-4">
                  <button
                    className="flex justify-between items-center w-full text-left mb-2"
                    onClick={() => toggleSection("Blade Finish")}
                  >
                    <h3 className="font-medium">Blade Finish</h3>
                    {openSections["Blade Finish"] ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </button>

                  {openSections["Blade Finish"] && (
                    <div className="space-y-2 mt-2">
                      {filterOptions["Blade Finish"].map((finish) => (
                        <div
                          key={finish.label}
                          className="flex justify-between items-center"
                        >
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="h-4 w-4 text-secondary rounded border-gray-700 bg-gray-800"
                            />
                            <span className="ml-2 text-sm">{finish.label}</span>
                          </label>
                          <span className="text-xs text-gray-400">
                            ({finish.count})
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Scabbard Type */}
                <div className="py-4">
                  <button
                    className="flex justify-between items-center w-full text-left mb-2"
                    onClick={() => toggleSection("Scabbard Type")}
                  >
                    <h3 className="font-medium">Scabbard Type</h3>
                    {openSections["Scabbard Type"] ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </button>

                  {openSections["Scabbard Type"] && (
                    <div className="space-y-2 mt-2">
                      {filterOptions["Scabbard Type"].map((scabbard) => (
                        <div
                          key={scabbard.label}
                          className="flex justify-between items-center"
                        >
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="h-4 w-4 text-secondary rounded border-gray-700 bg-gray-800"
                            />
                            <span className="ml-2 text-sm">
                              {scabbard.label}
                            </span>
                          </label>
                          <span className="text-xs text-gray-400">
                            ({scabbard.count})
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button className="mt-4 w-full bg-secondary rounded-full hover:bg-orange-600 text-white py-2 transition duration-200">
                  Apply Filter
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="mb-6">
                <h1 className="md:text-2xl text-xl font-medium text-secondary">
                  Collections
                </h1>
                <div className="flex flex-col md:flex-row gap-2 justify-between items-start md:items-center mt-2">
                  <span className="text-sm text-gray-400">
                    Showing 1-{productItems.length} of {productItems.length}{" "}
                    Products
                  </span>
                  <div className="relative">
                    <button
                      className="flex items-center bg-transparent text-sm text-secondary"
                      onClick={() => setShowSortDropdown(!showSortDropdown)}
                    >
                      Sort by: {sortBy} <FiChevronDown className="ml-1" />
                    </button>
                    {showSortDropdown && (
                      <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-md shadow-lg z-10">
                        <ul className="py-1">
                          {[
                            "Most Popular",
                            "Price: Low to High",
                            "Price: High to Low",
                            "Newest",
                          ].map((option) => (
                            <li key={option}>
                              <button
                                className={`block px-4 py-2 text-sm w-full text-left ${
                                  sortBy === option
                                    ? "text-secondary"
                                    : "text-white hover:bg-gray-800"
                                }`}
                                onClick={() => {
                                  setSortBy(option);
                                  setShowSortDropdown(false);
                                }}
                              >
                                {option}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {productItems.map((product) => (
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
                        <Link
                          href="/collections/details"
                          className="bg-gray-700 text-center hover:bg-gray-600 text-white py-2 px-4 rounded flex-grow"
                        >
                          Buy Now
                        </Link>
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

              {/* Pagination */}
              <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-2">
                <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md flex items-center">
                  <FiChevronLeft className="mr-1" /> Previous
                </button>
                <div className="flex gap-2">
                  {[1, 2, 3, "...", 9, 10].map((page, index) => (
                    <button
                      key={index}
                      className={`w-8 h-8 flex items-center justify-center rounded-md ${
                        currentPage === page
                          ? "bg-secondary text-white"
                          : "bg-gray-800 hover:bg-gray-700 text-white"
                      }`}
                      onClick={() =>
                        typeof page === "number" && setCurrentPage(page)
                      }
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button className="bg-secondary hover:bg-orange-600 text-white py-2 px-4 rounded-md flex items-center">
                  Next <FiChevronRight className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsLetter />
    </main>
  );
};

export default KnivesCollectionPage;
