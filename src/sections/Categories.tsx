import React from "react";
import Image from "next/image";

const Categories = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        {/* Left content */}
        <div className="space-y-6">
          <p className="text-sm text-darkGreen uppercase tracking-widest">
            About Us
          </p>
          <h2 className="text-4xl font-bold text-darkBlue leading-snug">
            With our knowledge <br /> we guarentee success
          </h2>
          <p className="text-gray-600 max-w-md">
            To be the epitome of construction excellence, redefining the
            landscape with iconic structures that seamlessly blend innovation,
            luxury, and functionality. We envision a future where our projects,
            adorned with a royal touch, stand as timeless masterpieces, setting
            new benchmarks in the realms of hospitality, entertainment,
            healthcare, residential, and education.
          </p>
          <button className="bg-darkGreen text-white px-6 py-3 rounded shadow hover:bg-green-800 transition">
            Learn more →
          </button>
        </div>

        {/* Right images */}
        <div className="relative w-full h-[400px]">
          <div className="absolute top-0 right-0 w-60 h-40 shadow-lg">
            <Image
              src="/about1.jpg"
              alt="Notebook"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-72 h-52 shadow-lg border-4 border-white">
            <Image
              src="/about2.jpg"
              alt="Construction Site"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
