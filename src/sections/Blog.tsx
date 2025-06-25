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
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "18 AUG 2023",
    },
    {
      id: 2,
      title: "TITLE OF FIRST BLOG POST",
      description:
        "Modern interior design concepts that blend functionality with aesthetic appeal.",
      category: "INTERIOR DESIGN",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "15 AUG 2023",
    },
    {
      id: 3,
      title: "SMALL & MINIMAL HOUSE ON PATERS ON HILL",
      description:
        "typefaces and layouts, and in appearance most of different generational content of dummy text is nonsensical typefaces dummy text is nonsensical.",
      category: "ARCHITECTURE",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    <div className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            LATEST BLOG
          </h2>
          <div className="w-16 h-1 bg-black"></div>
        </div>

        {/* Category Filter */}
        {/* <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setActiveCategory(category.slug)}
              className={`px-6 py-2 text-sm font-medium transition-colors ${
                activeCategory === category.slug
                  ? "bg-[#244d4d] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              } rounded-full border`}
            >
              {category.name}
            </button>
          ))}
        </div> */}

        {/* Blog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* Left Column - Regular Posts */}
          <div className="space-y-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer relative">
                <div className="relative  rounded-sm">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay Card */}
                  <div className="absolute bottom-4 -left-4 bg-[#244d4d]  text-white px-4 rounded-sm max-w-sm">
                    <div className="text-xs font-medium rotate-90 origin-top-left  my-2 opacity-75">
                      {post.date}
                    </div>
                    <h3 className="text-lg font-bold leading-tight mb-2">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column - Featured Post */}
          {featuredPost && (
            <div className="relative">
              <article className="group cursor-pointer h-full">
                <div className="relative overflow-hidden rounded-sm h-full min-h-[500px]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Large Overlay Card */}
                  <div className="absolute bottom-8 right-8 bg-[#244d4d] text-white p-6 rounded-sm max-w-md">
                    <div className="text-xs font-medium mb-3 opacity-75">
                      {featuredPost.date}
                    </div>
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
              </article>
            </div>
          )}
        </div>

        {/* Large "BLOG POST" Text Overlay */}
        <div className="relative mt-16">
          <div className="absolute right-0 top-0 text-gray-200 text-8xl md:text-9xl font-bold leading-none opacity-50 pointer-events-none select-none">
            BLOG
          </div>
          <div className="absolute right-0 top-20 md:top-24 text-gray-400 text-2xl md:text-3xl font-medium opacity-50 pointer-events-none select-none">
            POST
          </div>
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-16">
          <button className="bg-[#244d4d] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#244d4d] transition-colors">
            VIEW ALL BLOGS
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ModernBlogDesign;
