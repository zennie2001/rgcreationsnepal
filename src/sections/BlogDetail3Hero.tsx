"use client";

import Image from "next/image";

export default function BlogDetail3Hero() {
  return (
    <section className="relative h-screen w-full text-white">
      {/* Background Image */}
      <Image
        src="/about/news2.jpg" // Replace with your actual image path
        alt="Nepal’s Best Premium Construction Company"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center  items-center text-center h-full px-6">
        {/* <div className=" text-center border-b-2 w-[500px] mb-8">
          <p className="uppercase tracking-wider text-base font-medium mb-4" >
            Blogs
          </p>
        </div> */}

        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wider  max-w-3xl">
           Nepal’s Best Premium Construction Company: Delivering Excellence for Budget-Savvy and Luxury Clients
          
        </h2>

         {/* <p className="max-w-xl text-sm md:text-base text-gray-200 mb-6">
          - 10 minute read - 1.6k views - 1.2k shares
        </p>  */}

        {/* <a
          href="#"
          className="bg-darkGreen text-white text-sm px-6 py-3 rounded-md font-medium transition"
        >
          GET STARTED
        </a> */}
      </div>
    </section>
  );
}
