"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const LatestProjects = () => {
  const [activeFilter, setActiveFilter] = useState("All Project");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filters = ["All Project", "Building", "Interior", "Restaurant"];

  const projects = [
    {
      id: 1,
      category: "Interior",
      image: "/rambagh.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 2,
      category: "Restaurant",
      image: "/taaj.jpg",
      title: "Fine Dining Restaurant",
    },
    {
      id: 3,
      category: "Interior",
      image: "/taj.jpg",
      title: "Grand Ballroom",
    },
    {
      id: 4,
      category: "Building",
      image: "/royal.jpg",
      title: "Modern Architecture",
    },
  ];

  const filteredProjects =
    activeFilter === "All Project"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className="w-full py-14 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-0 relative z-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              LATEST PROJECT
            </h2>
            <div className="w-16 h-1 bg-[#244d4d]"></div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            {filters.map((filter, index) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "text-gray-900 border-b-2 border-teal-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {filter}
                {index < filters.length - 1 && (
                  <span className="ml-4 text-gray-300">/</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Flex Layout */}
        <motion.div
          layout
          className="flex gap-4 flex-wrap md:flex-nowrap mb-12"
        >
          {filteredProjects.map((project, index) => {
            // Determine width depending on hover
            const isHovered = hoveredIndex === index;

            // if one is hovered:
            // - hovered = large width
            // - others = small width
            // else: all equal

            const widthClass =
              hoveredIndex === null
                ? "md:w-1/4 w-full" // default when nothing hovered
                : isHovered
                ? "w-[500px]"
                : "w-[200px]";

            return (
              <motion.div
                layout
                key={project.id}
                className={`group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${widthClass}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div className="w-full h-auto md:h-[518px]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500`}
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                    }}
                  />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {project.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button className="w-10 h-10 bg-[#244d4d] hover:bg-[#244d4d] text-white flex items-center justify-center transition-colors duration-300">
            <svg
              className="w-5 h-5"
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
          <button className="w-10 h-10 bg-gray-300 hover:bg-gray-400 text-gray-600 flex items-center justify-center transition-colors duration-300">
            <svg
              className="w-5 h-5"
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

        <div className="flex justify-end px-4 md:px-0 py-8">
          <div className="border-r-8 border-darkGreen pr-4">
            <div className="text-[#bfbfbf]/50 text-right">
              <span className="text-4xl md:text-6xl font-extrabold">
                AWESOME
              </span>
              <div className="mt-2">
                <span className="text-xl font-medium text-gray-800">
                  DESIGNS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
