"use client";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const embedSrc = `https://www.youtube.com/embed/8-x2IvYZ9Og?autoplay=1&controls=1&loop=1&playlist=8-x2IvYZ9Og`;

  return (
    <div className="w-full lg:h-[950px] h-[550px] bg-[#333d49] relative flex flex-col items-center justify-center">
      <h2 className="lg:text-5xl text-3xl font-bold text-white text-center mb-10">
        Walk Through Your Vision <br className="hidden lg:block" />
        Before It’s Built
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
        {isPlaying ? (
          <iframe
            loading="lazy"
            src={embedSrc}
            title="My Video"
            className="w-full h-full object-cover"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/GalleryHero_11zon.jpg"
              alt="Kathmandu’s top architecture company"
              className="w-full h-full object-cover"
            />
            <button
              aria-label="Play Button"
              onClick={() => setIsPlaying(true)}
              className="
                absolute 
                top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2
                flex items-center justify-center 
                w-20 h-20 
                rounded-full 
                bg-white/30 hover:bg-white/50
                transition-colors duration-300
                text-white
              "
            >
              <FaPlay className="w-8 h-8" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Video;
