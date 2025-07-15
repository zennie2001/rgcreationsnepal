"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'; 

const ProjectList = () => {
    const router = useRouter();
     const [activeFilter, setActiveFilter] = useState("All Project");
      
    
      const filters = ["All Project", "Building", "Interior", "Restaurant"];
    
      const projects = [
        {
      id: 1,
      category: "Interior",
      image: "/ImageVideo/Image1.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 2,
      category: "Interior",
      image: "/ImageVideo/Image2.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 3,
      category: "Building",
      image: "/ImageVideo/Image3.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 4,
      category: "Building",
      image: "/ImageVideo/Image4.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 5,
      category: "Restaurant",
      image: "/ImageVideo/Image5.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 6,
      category: "Restaurant",
      image: "/ImageVideo/Image6.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 7,
      category: "Restaurant",
      image: "/ImageVideo/Image7.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 8,
      category: "Building",
      image: "/ImageVideo/Image8.jpg",
      title: "Luxury Hotel Lobby",
    },
    {
      id: 9,
      category: "Interior",
      image: "/ImageVideo/Image9.jpg",
      title: "Luxury Hotel Lobby",
    },
      ];
    
      const filteredProjects =
        activeFilter === "All Project"
          ? projects
          : projects.filter(
              (project) => project.category === activeFilter
            );

    const handleClick = (id: number) => {
    router.push(`/projectss/completed/${id}`);
  };

  return (
    <section className="w-full py-14 bg-white relative overflow-hidden my-16">
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
                    ? "text-[#244D4D]"
                    : "text-gray-400"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
               onClick={() => handleClick(project.id)}
              className="cursor-pointer group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 "
            >
              <div className=" w-[504px] h-[599px]  overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[504px] h-[599px] object-cover group-hover:scale-110 transition-transform duration-500"
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

        </div>
        </section>

    
  )
}

export default ProjectList