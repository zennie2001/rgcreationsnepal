import SectionHeader from "../components/SectionHeader";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";

const videoItems = [
  {
    thumbnail: "/blog1.jpg", // Replace with actual image path
    playIcon: true,
    title: "Master Cutlery Rambo II Non-Signature Edition Survival Rambo Knife",
  },
  {
    thumbnail: "/blog2.jpg", // Replace with actual image path
    playIcon: true,
    title: "Boker Tree Brand Classic Stag 2-Blade Trapper Pocket Knife",
  },
  {
    thumbnail: "/blog3.jpg", // Replace with actual image path
    playIcon: true,
    title: "Master Cutlery Rambo II Non-Signature Edition Sur...",
  },
];

export default function Youtube() {
  return (
    <section className="w-full bg-background py-12 text-white">
      <div className="container flex flex-col md:flex-row justify-between items-center mx-auto px-4">
        {/* Youtube section header */}
        <div className="">
          <p className="text-[#F65128] text-center md:text-left text-sm">
            Youtube
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left font-bold">
            Unboxing the Blade That's
            <br />
            Breaking the Rules
          </h2>
        </div>
        {/* Navigation arrows */}
        <div className=" my-2 flex space-x-2">
          <button className="bg-[#F65128] w-8 h-8 rounded flex items-center justify-center">
            <ArrowLeft size={16} />
          </button>
          <button className="bg-[#F65128] w-8 h-8 rounded flex items-center justify-center">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
      {/* Video carousel with navigation */}
      <div className="container relative mt-8 ">
        {/* Videos grid */}
        <div className="flex flex-col space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">

          {videoItems.map((item, index) => (
            <div key={index} className="relative mx-4 md:mx-0">

              {/* Video thumbnail */}
              <div className="relative aspect-video overflow-hidden rounded-md bg-gray-800">
                {/* Replace with actual image */}
                <div className="w-full h-48 bg-gray-700 relative">
                  {/* Play button overlay */}
                  {item.playIcon && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-background bg-opacity-50 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 border-t-4 border-r-4 border-b-4 border-l-0 border-gray-300 rounded-full transform rotate-90"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Video title */}
              <p className="text-xs mt-2 text-gray-300">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
