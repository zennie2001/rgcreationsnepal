"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import blade from "@/assets/images/blade.png"

// Define categories to match the image
const categories = [
  {
    id: 1,
    type: "Knife",
    title: "Pocket Knives",
    image: blade,
    size: "wide", // This is the wider card in the layout
  },
  {
    id: 2,
    type: "Knife",
    title: "Survival Knives",
    image: blade, // Replace with your actual knife image path
    size: "normal",
  },
  {
    id: 3,
    type: "Knife",
    title: "Machetes",
    image: blade, // Replace with your actual knife image path
    size: "normal",
  },
  {
    id: 4,
    type: "Knife",
    title: "Tactical Knives",
    image: blade, // Replace with your actual knife image path
    size: "normal",
  },
  {
    id: 5,
    type: "Knife",
    title: "Pocket Knives",
    image: blade, // Replace with your actual knife image path
    size: "wide", // This is the wider card in the second row
  },
  {
    id: 6,
    type: "Knife",
    title: "Boot Knives",
    image: blade, // Replace with your actual knife image path
    size: "normal",
  },
];

const Collection = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-12 lg:px-16">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-[#ff5533] mb-2">Top Categories</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Sorted by Purpose, Defined by<br />
            Precision, Chosen by You
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* First row */}
          <div className="lg:col-span-2 md:col-span-2 col-span-1">
            <CategoryCard 
              category={categories[0]} 
              showButton={true} 
              className="h-64 md:h-72"
            />
          </div>
          <div className="col-span-1">
            <CategoryCard 
              category={categories[1]} 
              className="h-64 md:h-72"
            />
          </div>

          {/* Second row */}
          <div className="col-span-1">
            <CategoryCard 
              category={categories[2]} 
              className="h-64 md:h-72"
            />
          </div>
          <div className="col-span-1">
            <CategoryCard 
              category={categories[3]} 
              className="h-64 md:h-72"
            />
          </div>
          <div className="lg:col-span-1 md:col-span-2 col-span-1">
            <CategoryCard 
              category={categories[5]} 
              className="h-64 md:h-72"
            />
          </div>

          {/* Third row - only shows on mobile */}
          <div className="lg:hidden md:hidden col-span-1">
            <CategoryCard 
              category={categories[4]} 
              showButton={true} 
              className="h-64"
            />
          </div>

          {/* Wide card for desktop/tablet - third row */}
          <div className="hidden md:block lg:col-span-2 md:col-span-2">
            <CategoryCard 
              category={categories[4]} 
              showButton={true} 
              className="h-64 md:h-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Category Card Component
const CategoryCard = ({ category, showButton = false, className = "" }:any) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden relative ${className}`}>
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/* Category Type */}
        <div>
          <p className="text-[#ff5533] font-medium">{category.type}</p>
        </div>
        
        {/* Category Title */}
        <div>
          <h3 className="text-gray-600 text-2xl md:text-3xl font-medium mb-4">
            {category.title}
          </h3>
          
          {/* Shop Now Button - Only shown if showButton is true */}
          {showButton && (
            <button className="bg-gray-800 text-white flex items-center gap-2 px-4 py-2 rounded text-sm">
              SHOP NOW
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>

      {/* The knife image with red glow effect */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
        <div className="relative">
          {/* Red glow effect */}
          <div className="absolute -bottom-6 w-32 h-8 bg-[#ff5533] opacity-30 blur-xl rounded-full"></div>
          
          {/* Knife image */}
          <img 
            src={category.image.src || "https://via.placeholder.com/300"} 
            alt={category.title}
            className="h-32 w-32 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;