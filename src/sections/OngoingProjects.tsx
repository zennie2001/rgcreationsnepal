"use client";



const OngoingProjects = () => {
  // ✅ Single array for all images
  const projects = [
    {
      id: 1,
      category: "Image",
      image: "/ImageVideo/6.jpg",
      title: "Ramalaya Batika",
      description:
        "Ramalaya Batika is an upcoming five- star luxury hotel in Pokhara, designed to blend traditional Nepali elegance with modern sophistication. Currently under development, it promises stunning architecture, world-class amenities, and a serene atmosphere. Once complete, Ramalaya Batika will offer an unforgettable experience for leisure, events, and business in the heart of Nepal's most scenic city.",
    },
    {
      id: 2,
      category: "Image",
      image: "/ImageVideo/legend.png",
      title: "Legend Nepal Club",
      description:
        "Legend Nepal Club is an upcoming nightclub in Kathmandu, currently under construction. Designed to offer an unparalleled nightlife experience, the club will feature exciting music, a lively atmosphere, and unforgettable events. Once completed, it will become a top destination for those seeking entertainment and fun, bringing people together for vibrant nights of celebration.",
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
                Ongoing Projects
              </h2>
              <div className="w-16 h-1 bg-[#244d4d]"></div>
            </div>
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative group overflow-hidden rounded-lg shadow hover:shadow-lg cursor-pointer transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[550px] object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition duration-300 flex flex-col justify-center items-center p-4">
                  <div className="opacity-0 group-hover:opacity-100 text-center transition duration-300">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OngoingProjects;
