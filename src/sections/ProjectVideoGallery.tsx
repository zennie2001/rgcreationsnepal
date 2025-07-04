import Link from 'next/link';
import React from 'react';

const ProjectVideoGallery = () => {
  const projects = [
    {
      id: 11,
      image: "/ImageVideo/Video1.jpg",
      title: "Luxury Hotel Lobby Video",
      width: 1023,
      height: 570,
    },
    {
      id: 12,
      image: "/ImageVideo/Video2.jpg",
      title: "Luxury Hotel Lobby Video",
      width: 504,
      height: 570,
    },
    {
      id: 13,
      image: "/ImageVideo/Video3.jpg",
      title: "Luxury Hotel Lobby Video",
      width: 1566,
      height: 699,
    },
    {
      id: 14,
      image: "/ImageVideo/Video4.jpg",
      title: "Luxury Hotel Lobby Video",
      width: 762,
      height: 699,
    },
    {
      id: 15,
      image: "/ImageVideo/Video5.jpg",
      title: "Luxury Hotel Lobby Video",
      width: 762,
      height: 699,
    },
  ];

  const areaClasses = [
    'area-video1',
    'area-video2',
    'area-video3',
    'area-video4',
    'area-video5',
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
                <Link href={'/gallery/photo'}>
                  <button className='text-gray-400 hover:text-[#244D4D]'>Image</button>
                </Link>
                <span className="ml-4 text-gray-300">/ &nbsp; </span>
                <button className='text-[#244D4D]'>Video</button>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="
            grid grid-cols-1
            sm:grid-cols-2
            gap-8
            lg:video-gallery-grid
          ">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`
                  rounded overflow-hidden shadow
                  ${areaClasses[index]}
                `}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`
                    w-full h-[200px] object-cover
                    lg:w-[${project.width}px] lg:h-[${project.height}px]
                  `}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectVideoGallery;
