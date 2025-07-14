"use client"
import React, { useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full lg:h-[950px] h-[550px] bg-gray-900 relative flex flex-col items-center justify-center">
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
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted
          controls={isPlaying}
          src="/video1.mp4"
        ></video>

        {!isPlaying && (
          <div className="absolute inset-0">
            <img
              src="/GalleryHero.jpg" // Replace with your thumbnail
              alt="Sustainable construction"
              className="w-full h-full object-cover"
            />
            <button
              onClick={handlePlay}
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
