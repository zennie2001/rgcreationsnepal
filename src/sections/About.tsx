import React from "react";

const About: React.FC = () => {
  return (
    <>
      <section className="relative container mx-auto my-10 w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/banner-1.png"
            alt="Interior Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center text-white">
          <p className="uppercase text-sm tracking-widest mb-4">
            Explore Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            See what we can do together.
          </h1>
          <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            View All Services
          </button>
        </div>
      </section>
      {/* Stats Section */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-[#f3f6fc] max-w-6xl mx-auto -mt-10 text-center py-8 text-gray-800 px-4">
        <div>
          <p className="text-3xl font-bold">40+</p>
          <p className="uppercase text-xs tracking-widest mt-2">
            Different Services
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold">100+</p>
          <p className="uppercase text-xs tracking-widest mt-2">
            Projects Completed
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold">15+</p>
          <p className="uppercase text-xs tracking-widest mt-2">
            Years of Experience
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold">98%</p>
          <p className="uppercase text-xs tracking-widest mt-2">Success Rate</p>
        </div>
      </div>
    </>
  );
};

export default About;
