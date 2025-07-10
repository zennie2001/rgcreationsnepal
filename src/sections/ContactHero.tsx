"use client";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative h-screen w-full text-white">
      {/* Background Image */}
      <Image
        src="/contactus.jpg" // Replace with your actual image path
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
            Contact Us
          </p>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wider  max-w-3xl">
          Let’s Build Something Extraordinary Together <br className="hidden md:block" /> 
         
        </h1>

        {/* <p className="max-w-xl text-sm md:text-base text-gray-200 mb-6">
          At RG Creations Nepal, we believe that every great structure begins with a strong conversation. Whether you're planning a luxury residence, a commercial complex, or an interior transformation, our expert team is here to guide you from concept to creation.
        </p> */}

        <a
          href="/book-appointment"
          className="bg-[#133950] text-white text-sm px-6 py-3 rounded-md font-medium transition"
        >
          GET STARTED
        </a>
      </div>
    </section>
  );
}
