"use client";



const CompletedProjects = () => {
  // ✅ Single array for all images
  const projects = [
    {
      id: 1,
      category: "Image",
      image: "/ImageVideo/Image1.jpg",
      title: "Harshah Batika",
      description:
        "Harshah Batika, a escape from the city’s hustle and bustle and discovering all-in-one party venue, nestled in a serene and family-friendly location.",
    },
    {
      id: 2,
      category: "Image",
      image: "/ImageVideo/Image2.jpg",
      title: "Modern Suite Interior",
      description:
        "Harshah Batika, a escape from the city’s hustle and bustle and discovering all-in-one party venue, nestled in a serene and family-friendly location.",
    },
    {
      id: 4,
      category: "Image",
      image: "/ImageVideo/Image4.jpg",
      title: "Banquet Hall Design",
      description:
        "Harshah Batika, a escape from the city’s hustle and bustle and discovering all-in-one party venue, nestled in a serene and family-friendly location."
    },
    {
      id: 5,
      category: "Image",
      image: "/ImageVideo/Image5.jpg",
      title: "Nightclub Lighting",
      description:
        "Harshah Batika, a escape from the city’s hustle and bustle and discovering all-in-one party venue, nestled in a serene and family-friendly location.",
    },
    {
      id: 6,
      category: "Image",
      image: "/ImageVideo/Image6.jpg",
      title: "Luxury Outdoor Pool",
      description:
        "A serene outdoor pool area surrounded by modern architecture and landscaping.",
    },
    {
      id: 7,
      category: "Image",
      image: "/ImageVideo/Image7.jpg",
      title: "Restaurant Interior",
      description:
        "An inviting restaurant interior blending warmth and modern sophistication.",
    },
    {
      id: 8,
      category: "Image",
      image: "/ImageVideo/Image8.jpg",
      title: "Hotel Reception Area",
      description:
        "A contemporary reception area offering a luxurious welcome experience.",
    },
    {
      id: 9,
      category: "Image",
      image: "/ImageVideo/Image9.jpg",
      title: "VIP Lounge Design",
      description:
        "Exclusive VIP lounge with plush seating and bespoke interior details.",
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
                Completed Projects
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

export default CompletedProjects;
