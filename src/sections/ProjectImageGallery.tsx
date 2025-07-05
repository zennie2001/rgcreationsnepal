"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const ProjectImageGallery = () => {
  const [hoveredIndexes, setHoveredIndexes] = useState<Record<string, number | null>>({
    row1: null,
    row2: null,
    row3: null,
  });

  const projects1 = [
    {
      id: 1,
      category: "Image",
      image: "/ImageVideo/Image1.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 2,
      category: "Image",
      image: "/ImageVideo/Image2.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 3,
      category: "Image",
      image: "/ImageVideo/Image3.jpg",
      title: "Luxury Hotel Lobby",
    },
  ];

  const projects2 = [
    {
      id: 4,
      category: "Image",
      image: "/ImageVideo/Image4.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 5,
      category: "Image",
      image: "/ImageVideo/Image5.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 6,
      category: "Image",
      image: "/ImageVideo/Image6.jpg",
      title: "Luxury Hotel Lobby",
    },
  ];

  const projects3 = [
    {
      id: 7,
      category: "Image",
      image: "/ImageVideo/Image7.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 8,
      category: "Image",
      image: "/ImageVideo/Image8.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 9,
      category: "Image",
      image: "/ImageVideo/Image9.jpg",
      title: "Luxury Hotel Lobby",
    },
  ];

  const renderRow = (
    projects: typeof projects1,
    rowKey: string
  ) => {
    return (
      <motion.div
        layout
        className="flex gap-4 flex-wrap md:flex-nowrap mb-12"
      >
        {projects.map((project, index) => {
          const isHovered = hoveredIndexes[rowKey] === index;

          const widthClass =
            hoveredIndexes[rowKey] === null
              ? "md:w-1/3 w-full"
              : isHovered
              ? "md:w-[500px] w-[360px]"
              : "md:w-[300px] w-[180px]";

          const heightClass =
            hoveredIndexes[rowKey] === null
              ? "md:h-[518px] h-[240px]"
              : isHovered
              ? "md:h-[518px] h-[300px]"
              : "md:h-[518px] h-[200px]";

          return (
            <motion.div
              layout
              key={project.id}
              className={`group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${widthClass} ${heightClass}`}
              onMouseEnter={() =>
                setHoveredIndexes((prev) => ({
                  ...prev,
                  [rowKey]: index,
                }))
              }
              onMouseLeave={() =>
                setHoveredIndexes((prev) => ({
                  ...prev,
                  [rowKey]: null,
                }))
              }
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.div className="w-full h-full">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                  }}
                />
              </motion.div>

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
    );
  };

  return (
    <div>
      <section className="w-full py-24 mb-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-0 relative z-20">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                PROJECT IMAGE GALLERY
              </h2>
              <div className="w-16 h-1 bg-[#244d4d]"></div>
            </div>
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 md:gap-4">
              <div className="px-4 py-2 text-sm md:text-base font-medium transition-all duration-300">
                <button className="text-[#244D4D]">Image</button>
                <span className="ml-4 text-gray-300">/ &nbsp; </span>
                <Link href={"/gallery/video"}>
                  <button className="text-gray-400 hover:text-[#244D4D]">
                    Video
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            {renderRow(projects1, "row1")}
            {renderRow(projects2, "row2")}
            {renderRow(projects3, "row3")}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectImageGallery;
