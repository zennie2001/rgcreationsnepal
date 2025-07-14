"use client";
import React from "react";

const FurnitureVideo = () => {
  return (
    <div className="w-full lg:h-[950px] h-[550px] px-8 bg-gray-100 relative flex flex-col items-center justify-center">
      <h2 className="lg:text-5xl text-2xl font-bold text-[#133950] text-center mb-10">
        Premium Furniture Supply <br/> for Luxurious Spaces
      </h2>

      <section
        className="
          relative 
          flex justify-center items-center
          lg:w-[1209px] lg:h-[600px] 
          md:w-[600px] w-[300px] h-[300px]
          rounded-xl overflow-hidden
        "
      >
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/U0N8bFhPijQ"
          title="Premium Furniture Supply"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default FurnitureVideo;
