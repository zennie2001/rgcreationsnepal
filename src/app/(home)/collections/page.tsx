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
import { useCartStore } from "@/app/(home)/store/useCartStore";
import { toast } from "react-toastify";

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
  "black",
  "gray",
];

const KnivesCollectionPage: React.FC = () => {
  const formatSlug = (name: string) => name.toLowerCase().replace(/ /g, "-");
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
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: any) => {
    addItem(product);
    toast.success("Added to cart!");
  };

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

  const ratings = [5, 4, 3, 2, 1];

  return (
    <main className="overflow-hidden">
      <Hero />
      <section className="min-h-screen bg-primary text-black">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Filters */}
            <div className="w-full md:w-64 flex-shrink-0 hidden md:block">
              <div className="bg-primary border-2 border-gray-400 rounded-lg p-4 sticky top-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <button className="text-black">
                    <FiSliders size={20} />
                  </button>
                </div>

                {/* Price Range */}
                <div className="border-b border-lightGreen py-4">
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
                            className="absolute h-1 bg-darkGreen rounded"
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
                          className="absolute w-4 h-4 bg-black rounded-full -mt-1.5 cursor-pointer"
                          style={{
                            left: `${((priceRange[0] - 0) / (300 - 0)) * 100}%`,
                          }}
                        ></div>
                        <div
                          className="absolute w-4 h-4 bg-black rounded-full -mt-1.5 cursor-pointer"
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
                <div className="border-b border-lightGreen py-4">
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
                          <span className="text-xs text-gray-500">(125)</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Availability */}
                <div className="border-b border-lightGreen py-4">
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
                            className="h-5 w-5 text-darkGreen rounded border-gray-700 bg-gray-800"
                          />
                          <span className="ml-2 text-sm">In Stock</span>
                        </label>
                        <span className="text-xs text-gray-500">(218)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-darkGreen rounded border-gray-700 bg-gray-800"
                          />
                          <span className="ml-2 text-sm">Out Of Stock</span>
                        </label>
                        <span className="text-xs text-gray-500">(28)</span>
                      </div>
                    </div>
                  )}
                </div>

                <button className="mt-4 w-full bg-darkGreen rounded-full  text-white py-2 transition duration-200">
                  Apply Filter
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Sort and Filter Controls */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <div className="relative">
                    <button
                      className="flex items-center gap-2 text-sm font-medium"
                      onClick={() => setShowSortDropdown(!showSortDropdown)}
                    >
                      {sortBy}
                      {showSortDropdown ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </button>
                    {showSortDropdown && (
                      <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        {[
                          "Most Popular",
                          "Price: Low to High",
                          "Price: High to Low",
                          "Newest First",
                        ].map((option) => (
                          <button
                            key={option}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                            onClick={() => {
                              setSortBy(option);
                              setShowSortDropdown(false);
                            }}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Showing {productItems.length} products
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productItems.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md"
                  >
                    <Link href={`/collections/${formatSlug(product.name)}`}>
                      <div className="relative aspect-square">
                        <img
                          src={product.image.src}
                          alt={product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </Link>
                    <div className="p-4">
                      <Link href={`/collections/${formatSlug(product.name)}`}>
                        <h3 className="text-lg font-medium mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm mb-2">
                        {product.brand}
                      </p>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-bold">
                          ${product.salePrice.toFixed(2)}
                        </span>
                        <span className="text-gray-500 line-through text-sm">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                        <span className="text-white bg-[#1c1c1c] px-2 py-1 rounded-sm text-sm">
                          -{product.discount}%
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-xl"
                        >
                          Add To Cart
                        </button>
                        <button className="bg-darkGreen w-12 h-12 flex items-center justify-center rounded-xl">
                          <Heart size={20} color="white" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-2">
                  <button
                    className="p-2 rounded-full hover:bg-gray-100"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <FiChevronLeft />
                  </button>
                  <span className="text-sm">
                    Page {currentPage} of {Math.ceil(productItems.length / 9)}
                  </span>
                  <button
                    className="p-2 rounded-full hover:bg-gray-100"
                    onClick={() =>
                      setCurrentPage((prev) =>
                        Math.min(prev + 1, Math.ceil(productItems.length / 9))
                      )
                    }
                    disabled={currentPage === Math.ceil(productItems.length / 9)}
                  >
                    <FiChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <NewsLetter />
    </main>
  );
};

export default KnivesCollectionPage;
