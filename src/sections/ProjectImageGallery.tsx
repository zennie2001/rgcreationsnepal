"use client";
import Link from "next/link";


const ProjectImageGallery = () => {
 

  const projects = [
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
              
                <div
                  className={`px-4 py-2 text-sm md:text-base font-medium transition-all duration-300`}>
                    
                     <button className='text-[#244D4D] '>Image</button> 
                    
                 
                    <span className="ml-4 text-gray-300">/ &nbsp; </span>
                    <Link href={'/gallery/video'}>
                    <button className='text-gray-400 hover:text-[#244D4D]'> Video</button> 
                    </Link>
                </div>
             
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className=" overflow-hidden shadow "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[504px] h-[599px] object-cover hover:scale-110 transition-all"
                />
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectImageGallery;
