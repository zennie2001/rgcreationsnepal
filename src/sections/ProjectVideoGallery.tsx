"use client";

import React from 'react';
import Link from 'next/link';

const ProjectVideoGallery = () => {
  const projects = [
    {
      id: 11,
      title: 'Smart construction',
      youtubeUrl: 'https://www.youtube.com/embed/Z4ERfjwOJcs',
    },
    {
      id: 12,
      title: 'Luxury Hotel Lobby Video',
      youtubeUrl: 'https://www.youtube.com/embed/tgPWNX0Modc',
    },
    {
      id: 13,
      title: 'Smart construction',
      youtubeUrl: 'https://www.youtube.com/embed/72Y7GQ_LTls',
    },
    {
      id: 14,
      title: 'Smart construction',
      youtubeUrl: 'https://www.youtube.com/embed/aRdZ5IrQenM',
    },
    
    {
      id: 15,
      title: 'Smart construction',
      youtubeUrl: 'https://www.youtube.com/embed/KL6GjVHCRS0',
    },
    {
      id: 16,
      title: 'Smart construction',
      youtubeUrl: 'https://www.youtube.com/embed/jEuvXUUV1bE',
    },
    {
      id: 17,
      title: 'Smart construction',
      youtubeUrl: 'https://www.youtube.com/embed/hS2KrcTFYYs',
    },
    {
      id: 18,
      title: 'Smart construction',
      youtubeUrl: 'https://www.youtube.com/embed/qCKsFSBQY7s',
    },
    {
      id: 19,
      title: 'Smart construction',
      youtubeUrl: 'https://www.youtube.com/embed/EzyavYAtHuM',
    },
    {
      id: 20,
      title: 'Smart construction',
      youtubeUrl: 'https://www.youtube.com/embed/6k-ds11dRAQ',
    },
    {
      id: 21,
      title: 'Smart construction',
      youtubeUrl: 'https://www.youtube.com/embed/SAKIGuUUQ5o',
    },
  ];

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
                <span className="ml-4 text-gray-300">/ &nbsp;</span>
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
            {projects.map((project) => (
              <div
                key={project.id}
                className="
                  rounded overflow-hidden shadow
                "
              >
                <iframe
                  loading="lazy"
                  src={`${project.youtubeUrl}?autoplay=0`}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[400px] rounded"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectVideoGallery;
