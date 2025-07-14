"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const ProjectVideoGallery = () => {
  const projects = [
    {
      id: 11,
      image: '/about/news3.jpg',
      title: 'Smart construction',
      width: 1023,
      height: 570,
      youtubeUrl: 'https://www.youtube.com/embed/Z4ERfjwOJcs',
    },
    {
      id: 12,
      image: '/main-slider2.jpg',
      title: 'Luxury Hotel Lobby Video',
      width: 504,
      height: 570,
      youtubeUrl: 'https://www.youtube.com/embed/tgPWNX0Modc',
    },
    {
      id: 13,
      image: '/about/rgcreations1(1).jpg',
      title: 'Smart construction',
      width: 1566,
      height: 699,
      youtubeUrl: 'https://www.youtube.com/embed/72Y7GQ_LTls',
    },
    {
      id: 14,
      image: '/ImageVideo/Video4.jpg',
      title: 'Smart construction',
      width: 762,
      height: 699,
      youtubeUrl: 'https://www.youtube.com/embed/aRdZ5IrQenM',
    },
    {
      id: 15,
      image: '/dejavu.png',
      title: 'Smart construction',
      width: 762,
      height: 699,
      youtubeUrl: 'https://www.youtube.com/embed/KL6GjVHCRS0',
    },
  ];

  const areaClasses = [
    'area-video1',
    'area-video2',
    'area-video3',
    'area-video4',
    'area-video5',
  ];

  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  return (
    <div>
      <section className="w-full py-24 mb-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-0 relative z-20">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                PROJECT VIDEO GALLERY
              </h2>
              <div className="w-16 h-1 bg-[#244d4d]"></div>
            </div>
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 md:gap-4">
              <div className="px-4 py-2 text-sm md:text-base font-medium transition-all duration-300">
                <Link href="/gallery/photo">
                  <button className="text-gray-400 hover:text-[#244D4D]">
                    Image
                  </button>
                </Link>
                <span className="ml-4 text-gray-300">/ &nbsp; </span>
                <button className="text-[#244D4D]">Video</button>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div
            className="
              grid grid-cols-1
              sm:grid-cols-2
              gap-8
              lg:video-gallery-grid
            "
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`
                  rounded overflow-hidden shadow cursor-pointer
                  ${areaClasses[index]}
                `}
                onClick={() =>
                  setActiveVideoId(
                    activeVideoId === project.id ? null : project.id
                  )
                }
              >
                {activeVideoId === project.id ? (
                  <iframe
                    src={project.youtubeUrl + "?autoplay=1"}
                    title={project.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-[400px] rounded"
                  ></iframe>
                ) : (
                  <div className="relative w-full h-[400px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-40 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectVideoGallery;
