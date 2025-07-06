"use client";

import Link from "next/link";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import BlogHero from "@/sections/BlogHero";

const blogs = [
  {
    id: 1,
    title: "SMALL & MINIMAL HOUSE ON PATERS ON HILL",
    description:
      "typefaces and layouts, and in appearance most of different generational content of dummy text is nonsensical typefaces dummy text is nonsensical.",
    category: "ARCHITECTURE",
    image: "/blog (2).jpg",
    date: "10 AUG 2023",
  },
  {
    id: 2,
    title: "MODERN LAKE HOUSE IN THE WOODS",
    description:
      "A modern retreat surrounded by nature and minimal design influence for solitude seekers.",
    category: "DESIGN",
    image: "/blog (2).jpg",
    date: "12 AUG 2023",
  },
  {
    id: 3,
    title: "FLOATING HOUSE ON THE RIVER",
    description:
      "Typefaces and layouts used in floating home projects designed for both function and beauty.",
    category: "LIFESTYLE",
    image: "/blog (2).jpg",
    date: "15 AUG 2023",
  },
  {
    id: 4,
    title: "SMALL & MINIMAL HOUSE ON PATERS ON HILL",
    description:
      "typefaces and layouts, and in appearance most of different generational content of dummy text is nonsensical typefaces dummy text is nonsensical.",
    category: "ARCHITECTURE",
    image: "/blog (2).jpg",
    date: "10 AUG 2023",
  },
  {
    id: 5,
    title: "SMALL & MINIMAL HOUSE ON PATERS ON HILL",
    description:
      "typefaces and layouts, and in appearance most of different generational content of dummy text is nonsensical typefaces dummy text is nonsensical.",
    category: "ARCHITECTURE",
    image: "/blog (2).jpg",
    date: "10 AUG 2023",
  },
  {
    id: 6,
    title: "SMALL & MINIMAL HOUSE ON PATERS ON HILL",
    description:
      "typefaces and layouts, and in appearance most of different generational content of dummy text is nonsensical typefaces dummy text is nonsensical.",
    category: "ARCHITECTURE",
    image: "/blog (2).jpg",
    date: "10 AUG 2023",
  },
  {
    id: 7,
    title: "SMALL & MINIMAL HOUSE ON PATERS ON HILL",
    description:
      "typefaces and layouts, and in appearance most of different generational content of dummy text is nonsensical typefaces dummy text is nonsensical.",
    category: "ARCHITECTURE",
    image: "/blog (2).jpg",
    date: "10 AUG 2023",
  },
  {
    id: 8,
    title: "SMALL & MINIMAL HOUSE ON PATERS ON HILL",
    description:
      "typefaces and layouts, and in appearance most of different generational content of dummy text is nonsensical typefaces dummy text is nonsensical.",
    category: "ARCHITECTURE",
    image: "/blog (2).jpg",
    date: "10 AUG 2023",
  },
  {
    id: 9,
    title: "SMALL & MINIMAL HOUSE ON PATERS ON HILL",
    description:
      "typefaces and layouts, and in appearance most of different generational content of dummy text is nonsensical typefaces dummy text is nonsensical.",
    category: "ARCHITECTURE",
    image: "/blog (2).jpg",
    date: "10 AUG 2023",
  },
  {
    id: 10,
    title: "SMALL & MINIMAL HOUSE ON PATERS ON HILL",
    description:
      "typefaces and layouts, and in appearance most of different generational content of dummy text is nonsensical typefaces dummy text is nonsensical.",
    category: "ARCHITECTURE",
    image: "/blog (2).jpg",
    date: "10 AUG 2023",
  },
  {
    id: 11,
    title: "SMALL & MINIMAL HOUSE ON PATERS ON HILL",
    description:
      "typefaces and layouts, and in appearance most of different generational content of dummy text is nonsensical typefaces dummy text is nonsensical.",
    category: "ARCHITECTURE",
    image: "/blog (2).jpg",
    date: "10 AUG 2023",
  },
  {
    id: 12,
    title: "SMALL & MINIMAL HOUSE ON PATERS ON HILL",
    description:
      "typefaces and layouts, and in appearance most of different generational content of dummy text is nonsensical typefaces dummy text is nonsensical.",
    category: "ARCHITECTURE",
    image: "/blog (2).jpg",
    date: "10 AUG 2023",
  },
];

function Blog() {
  return (
    <main className="overflow-hidden mb-16">
      <BlogHero />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-12 px-10 pt-16 mb-12">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            BLOGS LIST
          </h2>
          <div className="w-16 h-1 bg-[#244d4d]"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">Showing 1-{blogs.length} Blogs</span>
          <p className="flex items-center gap-1">
            Sort by:
            <span className="text-[#002C6D] flex items-center gap-1">
              Most Recent <FiChevronDown />
            </span>
          </p>
        </div>
      </div>

      {/* Blog Cards */}
      <Link href={'/blogs/details'}>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 px-10 lg:px-12">
        {blogs.map((blog) => (
          <article key={blog.id} className="group cursor-pointer h-full">
            <div className="relative rounded-sm h-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>

              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="
                  w-[276.6946105957031px] h-[439px]
                  sm:w-[276.6946105957031px] sm:h-[439px]
                  md:w-full md:h-full
                  mx-auto
                  object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                "
              />

              {/* Overlay Content */}
              <div className="absolute top-1/2  left-16 transform -translate-y-1/2 text-white rounded-sm max-w-md z-20">
               
                <div className="border-[16px] border-[#244d4d] py-6 pl-6  lg:pr-6 pr-1 ">
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                    {blog.title}
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed mb-4">
                    {blog.description}
                  </p>
                  <button className="text-xs font-medium tracking-widest hover:underline">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      </Link>
    </main>
  );
}

export default Blog;
