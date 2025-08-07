"use client";

import Image from "next/image";

export default function AboutOrgHero() {
  return (
    <section className="relative h-screen w-full text-white">
      {/* Background Image */}
      <Image
        src="/3_11zon.jpg" // Replace with your actual image path
        alt="Corporate Hierarchy Structure"
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
           Organizational Chart
          </p>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold mb-4 tracking-wider  max-w-3xl">
         Organization Hierarchy <br className="hidden md:block" /> 
            Structure
        </h1>

        {/* <p className="max-w-xl text-sm md:text-base text-gray-200 mb-6">
          Lorem ipsum dolor sit amet consectetur. Consequat ornare morbi aliquet
          porta convallis ultricies imperdiet.
        </p> */}
{/* 
        <a
          href={'/about/about-us'}
          className="bg-darkGreen text-white text-sm px-6 py-3 rounded-md font-medium transition"
        >
          GET STARTED
        </a> */}
      </div>
    </section>
  );
}
