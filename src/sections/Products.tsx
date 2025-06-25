"use client";
import React, { useState } from "react";

const LatestProjects = () => {
  const [activeFilter, setActiveFilter] = useState("All Project");

  const filters = ["All Project", "Building", "Interior", "Restaurant"];

  const projects = [
    {
      id: 1,
      category: "Interior",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 2,
      category: "Restaurant",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      title: "Fine Dining Restaurant",
    },
    {
      id: 3,
      category: "Interior",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
      title: "Grand Ballroom",
    },
    {
      id: 4,
      category: "Building",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      title: "Modern Architecture",
    },
  ];

  const filteredProjects =
    activeFilter === "All Project"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute right-0 bottom-0 text-gray-100 font-bold text-8xl md:text-9xl lg:text-[12rem] xl:text-[15rem] leading-none pointer-events-none select-none">
        AWESOME
      </div>

      {/* Designs Text */}
      <div className="absolute right-8 md:right-16 lg:right-24 bottom-8 md:bottom-16 text-gray-500 font-medium text-sm md:text-base tracking-wide z-10">
        DESIGNS
        <div className="w-16 h-0.5 bg-[#244d4d] mt-2"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Special S Badge for first project */}
              {index === 0 && (
                <div className="absolute top-4 left-4 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                  S
                </div>
              )}

              <div className="w-80 h-[420px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

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
      </div>
    </section>
  );
};

export default LatestProjects;
