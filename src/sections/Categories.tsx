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
          <p className="text-4xl font-bold text-darkBlue leading-snug">
            With our knowledge <br /> we guarentee success
          </p>
          <p className="text-gray-600 max-w-2xl text-justify">
            To be the epitome of construction excellence, redefining the
            landscape with iconic structures that seamlessly blend innovation,
            luxury, and functionality. We envision a future where our projects,
            adorned with a royal touch, stand as timeless masterpieces, setting
            new benchmarks in the realms of hospitality, entertainment,
            healthcare, residential, and education.
          </p>
          <button className="bg-darkGreen text-white px-14 ms-6 md:ms-0 py-3 text-base rounded shadow hover:bg-green-800 transition">
            Learn more →
          </button>
        </div>

        {/* Right images */}
        <div className="w-full">
          {/* Responsive Column Layout for Small Screens */}
          <div className="flex flex-col md:hidden space-y-4">
            <div className="w-full h-80 p-4 bg-white border-white shadow-lg">
              <Image
                src="/img-rg1.png"
                alt="Notebook"
                width={600}
                height={320}
                className="rounded-lg w-full h-full object-cover p-3"
              />
            </div>
            <div className="w-full h-80 p-4 bg-white border-white shadow-lg">
              <Image
                src="/about2.jpg"
                alt="Construction Site"
                width={600}
                height={320}
                className="rounded-lg w-full h-full object-cover p-3"
              />
            </div>
          </div>

          {/* Original Absolute Layout for Medium and Up */}
          <div className="relative w-full h-[500px] hidden md:block">
            <div className="absolute top-0 right-0 w-96 h-80 p-4 bg-white border-white shadow-lg">
              <Image
                src="/img-rg1.png"
                alt="Notebook"
                layout="fill"
                objectFit="cover"
                className="rounded-lg p-3"
              />
            </div>
            <div className="absolute bottom-0 left-10 w-72 h-80 shadow-lg border-4 p-4 bg-white border-white">
              <Image
                src="/about2.jpg"
                alt="Construction Site"
                layout="fill"
                objectFit="cover"
                className="rounded-lg p-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
