"use client";

import Image from "next/image";

export default function ProjectListHero() {
  return (
    <div className="  w-full  flex flex-col justify-center gap-20 ">
      <div className="relative  w-full h-screen text-white">
        {/* Background Image */}
      <Image
        src="/harshah.jpg" // Replace with your actual image path
        alt="Hero Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center  items-center text-center h-full px-6">
        <div className=" text-center border-b-2 w-[500px] mb-8">
          <p className="uppercase tracking-wider text-base font-medium mb-4" >
            Projects
          </p>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-wider leading-loose max-w-3xl">
          Harshah Batika
        </h2>

       
      </div>
      </div>


      {/* Video section */}
        <div className="lg:px-[215px] lg:py-28 px-4 ">
            <div className=" w-full  lg:h-[667px] h-[350px]  rounded-lg overflow-hidden relative shadow-lg">
        <Image
            src="/harshah.jpg"
            alt="Hero Background"
            fill
            className="object-cover z-0"
            priority
        />

        {/* Overlay play button */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-yellow-400 bg-opacity-60 rounded-full w-20 h-20 flex items-center justify-center">
            <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M8 5v14l11-7z" />
            </svg>
            </div>
        </div>
        </div>
        </div>


      


    </div>
  );
}
