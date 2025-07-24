"use client";

import Image from "next/image";

export default function ServicesProjectHero() {
  return (
    <section className="relative h-screen w-full text-white">
      {/* Background Image */}
      <Image
        src="/2224.jpg" // Replace with your actual image path
        alt="Turnkey construction services"
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
           Project Management &<br className="lg:hidden block" /> Turnkey Solutions
          </p>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-wider  max-w-3xl">
           {/* <br className="hidden md:block" />  */}
           Unlock Lasting Value Through<br className="hidden md:block" />  Tailored Hospitality Solutions

        </h2>

        {/* <p className="max-w-xl text-sm md:text-base text-gray-200 mb-6">
          Lorem ipsum dolor sit amet consectetur. Consequat ornare morbi aliquet
          porta convallis ultricies imperdiet.
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
