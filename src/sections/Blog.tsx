"use client";
import React, { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  featured?: boolean;
}

interface Category {
  name: string;
  slug: string;
}

const ModernBlogDesign: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories: Category[] = [
    { name: "All", slug: "all" },
    { name: "Architecture", slug: "architecture" },
    { name: "Interior Design", slug: "interior-design" },
    { name: "Construction", slug: "construction" },
    { name: "Furniture", slug: "furniture" },
    { name: "Commercial", slug: "commercial" },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "TITLE OF FIRST BLOG POST",
      description:
        "Exploring modern architectural trends and innovative design solutions for contemporary living spaces.",
      category: "ARCHITECTURE",
      image: "/blog (1).jpg",
      date: "18 AUG 2023",
    },
    {
      id: 2,
      title: "TITLE OF FIRST BLOG POST",
      description:
        "Modern interior design concepts that blend functionality with aesthetic appeal.",
      category: "INTERIOR DESIGN",
      image: "/blog (3).jpg",
      date: "15 AUG 2023",
    },
    {
      id: 3,
      title: "SMALL & MINIMAL HOUSE ON PATERS ON HILL",
      description:
        "typefaces and layouts, and in appearance most of different generational content of dummy text is nonsensical typefaces dummy text is nonsensical.",
      category: "ARCHITECTURE",
      image: "/blog (2).jpg",
      date: "10 AUG 2023",
      featured: true,
    },
  ];

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter(
          (post) =>
            post.category.toLowerCase().replace(" ", "-") === activeCategory
        );

  const regularPosts = filteredPosts.filter((post) => !post.featured);
  const featuredPost = filteredPosts.find((post) => post.featured);

  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-0">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            LATEST BLOG
          </h2>
          <div className="w-16 h-1 bg-black"></div>
        </div>

        {/* Blog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative">
          {/* Left Column - Regular Posts */}
          <div className="h-full flex flex-col justify-between gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group cursor-pointer relative h-full sm:h-[250px] flex-1"
              >
                <div className="relative rounded-sm h-full">
                  <div className="absolute inset-0 bg-black/30 overflow-hidden z-10 rounded-sm"></div>
                  
                  {/* ✅ UPDATED - LEFT IMAGE SIZE */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="
                      w-[327px] h-[250px]
                      sm:w-[327px] sm:h-[250px]
                      md:w-full md:h-full
                      mx-auto
                      object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                    "
                  />

                  {/* Overlay Card */}
                  <div className="absolute bottom-4  -left-4 bg-[#244d4d] text-white h-24 px-4 rounded-sm max-w-sm z-20">
                    <div className="text-[10px] ms-2 font-medium rotate-90 origin-top-left my-4 opacity-75">
                      {post.date}
                    </div>
                    <h3 className="text-lg font-bold ms-4 leading-tight -my-2 mb-2">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column - Featured Post */}
          {featuredPost && (
            <div className="relative h-full">
              <article className="group cursor-pointer h-full">
                <div className="relative rounded-sm h-full">
                  <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>
                  
                  {/* ✅ UPDATED - RIGHT IMAGE SIZE */}
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="
                      w-[276.6946105957031px] h-[439px]
                      sm:w-[276.6946105957031px] sm:h-[439px]
                      md:w-full md:h-full
                      mx-auto
                      object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                    "
                  />

                  {/* Large Overlay Card */}
                  <div className="absolute  top-1/2 lg:left-60 md:left-60 left-16 transform -translate-y-1/2  text-white  rounded-sm max-w-md z-20">
                    <div className="transform text-xs font-medium mb-3 -rotate-90 lg:-translate-x-52 lg:-translate-y-20 -translate-x-36   opacity-75">
                      {featuredPost.date}
                    </div>
                    <div className="border-[16px] border-[#244d4d] py-6 pl-6 lg:pb-36 lg:pr-6 pr-1 md:py-16">
                      <h3 className="text-2xl font-bold leading-tight mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-sm opacity-90 leading-relaxed mb-4">
                      {featuredPost.description}
                    </p>
                    <button className="text-xs font-medium tracking-widest hover:underline">
                      READ MORE
                    </button>
                    </div>
                  </div>




                </div>
              </article>
            </div>
          )}
        </div>

        <div className="flex justify-end px-4 md:px-0 py-8">
          <div className="border-r-8 border-darkGreen pr-4">
            <div className="text-[#bfbfbf]/50 text-right">
              <span className="text-4xl md:text-6xl font-extrabold">BLOG</span>
              <div className="mt-2">
                <span className="text-xl font-medium text-gray-800">POST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernBlogDesign;
