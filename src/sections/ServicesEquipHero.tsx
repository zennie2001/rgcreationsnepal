"use client";

import Image from "next/image";

export default function ServicesEquipmentHero() {
  return (
    <section className="relative h-screen w-full text-white">
      {/* Background Image */}
      <Image
        src="/about (7).jpg" // Replace with your actual image path
        alt="Premium Nightclub Equipment"
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
           Nightclub Equipment <br className="lg:hidden block" /> Supply
          </p>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold mb-4 tracking-wider leading-loose max-w-3xl">
           {/* <br className="hidden md:block" />  */}
           Unmatched Sound, Lighting, and Special Effects Solutions – Empowering Nightlife Venues in Nepal with Cutting-Edge Technology for Immersive Entertainment Experiences

        </h1>

        {/* <p className="max-w-xl text-sm md:text-base text-gray-200 mb-6">
          Lorem ipsum dolor sit amet consectetur. Consequat ornare morbi aliquet
          porta convallis ultricies imperdiet.
        </p> */}

        <a
          href="#"
          className="bg-[#133950] text-white text-sm px-6 py-3 rounded-md font-medium transition"
        >
          GET STARTED
        </a>
      </div>
    </section>
  );
}
