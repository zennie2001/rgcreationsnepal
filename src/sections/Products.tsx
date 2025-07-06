"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const LatestProjects = () => {
  const [activeFilter, setActiveFilter] = useState("All Project");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [playingIndexes, setPlayingIndexes] = useState<number[]>([]);

  const filters = ["All Project", "Completed Projects", "Ongoing Projects"];

  const projects = [
    {
      id: 1,
      category: "Completed Projects",
      image: "/rambagh.jpg",
      video: "/RGVideo2.mp4",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 2,
      category: "Completed Projects",
      image: "/taaj.jpg",
      video: "/RGVideo1.mp4",
      title: "Fine Dining Restaurant",
    },
    {
      id: 3,
      category: "Ongoing Projects",
      image: "/taj.jpg",
      video: "/Harshah.mp4",
      title: "Grand Ballroom",
    },
    {
      id: 4,
      category: "Completed Projects",
      image: "/royal.jpg",
      video: "/RGVideo3.mp4",
      title: "Modern Architecture",
    },
  ];

  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
      setPlayingIndexes((prev) => [...prev, index]);
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      setPlayingIndexes((prev) => prev.filter((i) => i !== index));
    }
  };

  const togglePlayPause = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setPlayingIndexes((prev) => [...prev, index]);
    } else {
      video.pause();
      setPlayingIndexes((prev) => prev.filter((i) => i !== index));
    }
  };

  const filteredProjects =
    activeFilter === "All Project"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="w-full py-14 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-0 relative z-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              LATEST PROJECTS
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

        {/* Projects Layout */}
        <motion.div
          layout
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          {filteredProjects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const isPlaying = playingIndexes.includes(index);

            // ✅ Only width shrinks
            const widthClass =
              hoveredIndex === null
                ? "w-full md:flex-1"
                : isHovered
                ? "w-full md:flex-[2]"
                : filteredProjects.length > 1
                  ? "w-full md:flex-[0.5]"
                  : "w-full md:flex-1";

            return (
              <motion.div
                layout
                key={project.id}
                className={`group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${widthClass} min-w-0`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleMouseEnter(index)}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="relative w-full h-[300px] md:h-[518px]">
                  {/* Image */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 ${
                      isHovered ? "opacity-0" : "opacity-100"
                    }`}
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                    }}
                  />

                  {/* Video */}
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={project.video}
                    muted
                    loop
                    playsInline
                    className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute left-4 bottom-4 text-white transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {project.category}
                    </p>
                  </div>

                  {/* Play/Pause Button */}
                  {isHovered && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlayPause(index);
                      }}
                      className="absolute right-4 bottom-4 bg-black/50 text-white px-3 py-1 rounded hover:bg-black/70 transition"
                    >
                      {isPlaying ? "Pause" : "Play"}
                    </button>
                  )}
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
