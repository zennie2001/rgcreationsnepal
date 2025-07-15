"use client";
import React from "react";

const EquipmentVideo = () => {
  return (
    <div className="w-full lg:h-[950px] h-[550px] px-8 bg-gray-100 relative flex flex-col items-center justify-center">
      <h2 className="lg:text-5xl text-2xl font-bold text-[#133950] text-center mb-10">
        Premium Equipment Supply <br />
        for Nightclubs
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
        loading="lazy"
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/nUAGfEXMyjc?autoplay=0&modestbranding=1&rel=0"
          title="Premium Nightclubs Equipment Supply"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default EquipmentVideo;
