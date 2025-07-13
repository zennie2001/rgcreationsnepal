"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiOutlineClose,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

const Project3DGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  // ✅ Single array for all images
  const projects = [
    {
      id: 1,
      category: "Image",
      image: "/ImageVideo/1.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 2,
      category: "Image",
      image: "/ImageVideo/2.jpg",
      title: "Luxury Hotel Lobby",
    },
    
    {
      id: 4,
      category: "Image",
      image: "/ImageVideo/4.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 5,
      category: "Image",
      image: "/ImageVideo/3.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 6,
      category: "Image",
      image: "/ImageVideo/6.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 7,
      category: "Image",
      image: "/ImageVideo/7.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 8,
      category: "Image",
      image: "/ImageVideo/8.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 9,
      category: "Image",
      image: "/ImageVideo/9.jpg",
      title: "Luxury Hotel Lobby",
    },
  ];

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + projects.length) % projects.length
      );
      setZoom(1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % projects.length);
      setZoom(1);
    }
  };

  return (
    <div>
      <section className="w-full py-24 mb-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-0 relative z-20">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                3D GALLERY
              </h2>
              <div className="w-16 h-1 bg-[#244d4d]"></div>
            </div>
            {/* Filter Tabs */}
            {/* <div className="flex flex-wrap gap-2 md:gap-4">
              <div className="px-4 py-2 text-sm md:text-base font-medium transition-all duration-300">
                <button className="text-[#244D4D]">Image</button>
                <span className="ml-4 text-gray-300">/ &nbsp; </span>
                <Link href={"/gallery/video"}>
                  <button className="text-gray-400 hover:text-[#244D4D]">
                    Video
                  </button>
                </Link>
              </div>
            </div> */}
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="relative cursor-pointer overflow-hidden bg-white shadow hover:shadow-lg  transition-all duration-300"
                onClick={() => {
                  setSelectedIndex(index);
                  setZoom(1);
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[550px] object-cover hover:scale-110 transition-all duration-300"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {project.category}
                    </p>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative max-w-[90vw] max-h-[90vh] overflow-hidden flex items-center justify-center">
            <img
              src={projects[selectedIndex].image}
              alt={projects[selectedIndex].title}
              className="object-contain max-w-full max-h-full transition-transform duration-300"
              style={{ transform: `scale(${zoom})` }}
            />
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setSelectedIndex(null)}
            >
              <AiOutlineClose />
            </button>
            {/* Zoom Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
              <button
                className="bg-white p-3 rounded-full shadow hover:bg-gray-200 transition"
                onClick={() => setZoom((z) => Math.min(z + 0.2, 3))}
              >
                <AiOutlineZoomIn className="text-xl text-gray-700" />
              </button>
              <button
                className="bg-white p-3 rounded-full shadow hover:bg-gray-200 transition"
                onClick={() => setZoom((z) => Math.max(z - 0.2, 1))}
              >
                <AiOutlineZoomOut className="text-xl text-gray-700" />
              </button>
            </div>
            {/* Navigation Arrows */}
            <button
              className="absolute left-4 text-white text-4xl bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
              onClick={handlePrev}
            >
              <AiOutlineLeft />
            </button>
            <button
              className="absolute right-4 text-white text-4xl bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
              onClick={handleNext}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project3DGallery;
