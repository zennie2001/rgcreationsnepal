"use client";

import BlogCard from "@/components/BlogCard"; // This will be imported from a separate file
import Link from "next/link";
import Hero from "@/sections/Hero";
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

import FAQ from "../faqs/page";
import NewsLetter from "@/sections/NewsLetter";
import productItems from "@/constants/products";
import Image from "next/image";
import { Heart } from "lucide-react";

interface FilterOption {
  label: string;
  count: number;
}

function Blog() {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      image: "/blog-image.jpg",
      category: "News",
      title: "10 Best Rescue Knives You Can Buy in 2024",
      description:
        "Disaster can strike anytime, anywhere. Your car might suddenly careen off the road before landing...",
      author: "Olivia Rhye",
      date: "20 Jan 2022",
    },
    {
      id: 2,
      image: "/blog-image.jpg",
      category: "News",
      title: "10 Best Rescue Knives You Can Buy in 2024",
      description:
        "Disaster can strike anytime, anywhere. Your car might suddenly careen off the road before landing...",
      author: "Olivia Rhye",
      date: "20 Jan 2022",
    },
    {
      id: 3,
      image: "/blog-image.jpg",
      category: "News",
      title: "10 Best Rescue Knives You Can Buy in 2024",
      description:
        "Disaster can strike anytime, anywhere. Your car might suddenly careen off the road before landing...",
      author: "Olivia Rhye",
      date: "20 Jan 2022",
    },
    {
      id: 1,
      image: "/blog-image.jpg",
      category: "News",
      title: "10 Best Rescue Knives You Can Buy in 2024",
      description:
        "Disaster can strike anytime, anywhere. Your car might suddenly careen off the road before landing...",
      author: "Olivia Rhye",
      date: "20 Jan 2022",
    },
    {
      id: 2,
      image: "/blog-image.jpg",
      category: "News",
      title: "10 Best Rescue Knives You Can Buy in 2024",
      description:
        "Disaster can strike anytime, anywhere. Your car might suddenly careen off the road before landing...",
      author: "Olivia Rhye",
      date: "20 Jan 2022",
    },
    {
      id: 3,
      image: "/blog-image.jpg",
      category: "News",
      title: "10 Best Rescue Knives You Can Buy in 2024",
      description:
        "Disaster can strike anytime, anywhere. Your car might suddenly careen off the road before landing...",
      author: "Olivia Rhye",
      date: "20 Jan 2022",
    },
    {
      id: 1,
      image: "/blog-image.jpg",
      category: "News",
      title: "10 Best Rescue Knives You Can Buy in 2024",
      description:
        "Disaster can strike anytime, anywhere. Your car might suddenly careen off the road before landing...",
      author: "Olivia Rhye",
      date: "20 Jan 2022",
    },
    {
      id: 2,
      image: "/blog-image.jpg",
      category: "News",
      title: "10 Best Rescue Knives You Can Buy in 2024",
      description:
        "Disaster can strike anytime, anywhere. Your car might suddenly careen off the road before landing...",
      author: "Olivia Rhye",
      date: "20 Jan 2022",
    },
    {
      id: 3,
      image: "/blog-image.jpg",
      category: "News",
      title: "10 Best Rescue Knives You Can Buy in 2024",
      description:
        "Disaster can strike anytime, anywhere. Your car might suddenly careen off the road before landing...",
      author: "Olivia Rhye",
      date: "20 Jan 2022",
    },
  ];
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 200]);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    "Price Range": true,
    Ratings: true,
    Availability: true,
    Brands: true,
    "Blade Material": true,
    "Blade Colors": true,
    "Handle Material": true,
    "Handle Colors": true,
    "Lock Type": true,
    Categories: true,
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

  // Filter options data
  const filterOptions: { [key: string]: FilterOption[] } = {
    "Blade Material": [
      { label: "1095", count: 12 },
      { label: "12C27", count: 8 },
      { label: "14C28N", count: 15 },
      { label: "14C28N-D2", count: 6 },
      { label: "3Cr13", count: 10 },
    ],
    "Handle Material": [
      { label: "Aluminum", count: 18 },
      { label: "Bone, Wood", count: 7 },
      { label: "Carbon Fiber", count: 9 },
      { label: "FRN", count: 12 },
      { label: "G-10", count: 16 },
    ],
    "Lock Type": [
      { label: "Blade Lock", count: 14 },
      { label: "Button Lock", count: 8 },
      { label: "Frame Lock", count: 11 },
      { label: "Liner Lock", count: 9 },
      { label: "Lockback", count: 7 },
    ],
    Brands: [
      { label: "Hogue", count: 8 },
      { label: "WE Knife", count: 12 },
      { label: "Ka-bar Knives", count: 9 },
      { label: "Schrade", count: 7 },
      { label: "Spyderco", count: 15 },
      { label: "White Deer", count: 6 },
      { label: "Kershaw Knives", count: 10 },
    ],
  };

  const ratings = [5, 4, 3, 2, 1];

  const categories = [
    "Engraved Knives",
    "Folding Knives",
    "Fixed Blade",
    "Throwing",
    "Hunting",
    "Tools",
  ];

  return (
    <main>
      <Hero />
      <section className="w-full bg-gradient-to-br from-black to-neutral-900 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="md:text-3xl text-xl font-bold text-secondary">
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

          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// This is just the interface for the blog card that will be imported
// The actual implementation will be in a separate file
export default Blog;
