import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const Products = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/villa.jpg" // Replace with your image in public folder
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center px-6 md:px-20">
        <div className="text-white max-w-xl space-y-6">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            We’re innovating the way <br />
            companies reinvent their <br />
            office spaces for the <br />
            remote workforce.
          </h1>

          {/* Circle Button */}
          <button className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
            <FaPlay className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
