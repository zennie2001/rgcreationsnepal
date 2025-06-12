"use client";
import React, { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
}

interface Category {
  name: string;
  slug: string;
}

const BlogDesign: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const categories: Category[] = [
    { name: "Furniture", slug: "furniture" },
    { name: "Remote Spaces", slug: "remote-spaces" },
    { name: "Office Tech", slug: "office-tech" },
    { name: "Floor Plans", slug: "floor-plans" },
    { name: "Organization", slug: "organization" },
    { name: "Interior Design", slug: "interior-design" },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Rise of Smart Homes: Revolutionizing Technology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "FLOOR PLANS",
      image: "/blog1.jpg",
      date: "5.6.21",
    },
    {
      id: 2,
      title: "The Rise of Smart Homes: Revolutionizing Technology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "FURNITURE",
      image: "/blog2.jpg",
      date: "5.6.21",
    },
    {
      id: 3,
      title: "The Rise of Smart Homes: Revolutionizing Technology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "FLOOR PLANS",
      image: "/blog1.jpg",
      date: "5.6.21",
    },
    {
      id: 4,
      title: "The Rise of Smart Homes: Revolutionizing Technology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "FURNITURE",
      image: "/blog2.jpg",
      date: "5.6.21",
    },
    {
      id: 5,
      title: "The Rise of Smart Homes: Revolutionizing Technology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "FLOOR PLANS",
      image: "/blog1.jpg",
      date: "5.6.21",
    },
    {
      id: 6,
      title: "The Rise of Smart Homes: Revolutionizing Technology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "FURNITURE",
      image: "/blog2.jpg",
      date: "5.6.21",
    },
  ];

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter(
          (post) =>
            post.category.toLowerCase().replace(" ", "-") === activeCategory
        );

  const visiblePosts = filteredPosts.slice(currentSlide, currentSlide + 4);

  const nextSlide = () => {
    if (currentSlide + 4 < filteredPosts.length) {
      setCurrentSlide(currentSlide + 2);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(Math.max(0, currentSlide - 2));
    }
  };

  return (
    <div className="w-full container mx-auto bg-white py-10 pb-4 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center md:items-start mb-16">
          <div>
            <p className="text-darkGreen text-sm font-medium tracking-widest uppercase mb-2">
              BLOG
            </p>
            <p className="text-3xl md:text-5xl font-light text-gray-900">What's new?</p>
          </div>
          <button className="bg-darkGreen   text-white px-6 py-3 rounded-full text-xs md:text-sm font-medium hover:bg-teal-800 transition-colors">
            VIEW ALL BLOGS
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Sidebar - Categories */}
          <div className="w-64 flex-shrink-0">
            <p className="text-[#090b19] text-base font-medium tracking-widest uppercase mb-8">
              POPULAR CATEGORIES
            </p>
            <nav className="space-y-4">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => {
                    setActiveCategory(category.slug);
                    setCurrentSlide(0);
                  }}
                  className={`block text-left text-[#646464] border-b pb-2.5 border-gray-400 w-full hover:text-gray-900 transition-colors ${
                    activeCategory === category.slug
                      ? "text-gray-900 font-medium"
                      : ""
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Content - Blog Posts */}
          <div className="flex-1">
            <div className="relative">
              {/* Navigation Buttons */}
              <div className="absolute -top-12 right-0 flex gap-2 z-10">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide + 4 >= filteredPosts.length}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
                {visiblePosts.map((post, index) => (
                  <article key={post.id} className="group cursor-pointer">
                    <div className="aspect-video mb-6 overflow-hidden rounded-xs">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-xl font-medium text-gray-900 group-hover:text-teal-700 transition-colors leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="font-medium tracking-wider uppercase">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="flex justify-center mt-12">
                <div className="flex gap-2">
                  {Array.from({
                    length: Math.ceil(filteredPosts.length / 2),
                  }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index * 2)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        Math.floor(currentSlide / 2) === index
                          ? "bg-teal-700"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDesign;
