import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      category: "Explore Service",
      title: "Mechanical Engineering",
      link: "Read",
    },
    {
      id: 2,
      category: "Explore Service",
      title: "Mechanical Engineering",
      link: "Read",
    },
    {
      id: 3,
      category: "Explore Service",
      title: "Mechanical Engineering",
      link: "Read",
    },
    {
      id: 4,
      category: "Explore Service",
      title: "Mechanical Engineering",
      link: "Read",
    },
    {
      id: 5,
      category: "Explore Service",
      title: "Mechanical Engineering",
      link: "Read",
    },
    {
      id: 6,
      category: "Explore Service",
      title: "Mechanical Engineering",
      link: "Read",
    },
    {
      id: 7,
      category: "Explore Service",
      title: "Mechanical Engineering",
      link: "Read",
    },
    {
      id: 8,
      category: "Explore Service",
      title: "Mechanical Engineering",
      link: "Read",
    },
    {
      id: 9,
      category: "Explore Service",
      title: "Mechanical Engineering",
      link: "Read",
    },
    {
      id: 10,
      category: "Explore Service",
      title: "Mechanical Engineering",
      link: "Read",
    },
    {
      id: 11,
      category: "Explore Service",
      title: "Mechanical Engineering",
      link: "Read",
    },
    {
      id: 12,
      category: "Explore Service",
      title: "Mechanical Engineering",
      link: "Read",
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
          Other Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white  overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Teal Header Bar */}
              <div className="h-2 bg-darkGreen"></div>

              {/* Card Content */}
              <div className="p-6 pb-14 pt-8">
                <p className="text-sm text-gray-500 mb-3">{service.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>
                <button className="text-sm font-semibold text-gray-900 hover:text-darkGreen transition-colors duration-200">
                  {service.link}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
