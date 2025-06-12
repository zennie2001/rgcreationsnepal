"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Harsh Batika",
    description:
      "Harshan Batika, a escape from the city's hustle and bustle and discovering all-in-one party venue, nestled in a serene and family-friendly location.",
    image: "/harshah.jpg",
  },
  {
    id: 2,
    title: "Rambagh Mahal",
    description:
      "Rambagh Mahal, a luxury and one of the largest banquet venue. We specialize in making your special occasions truly memorable.",
    image: "/rambagh.jpg",
  },
  {
    id: 3,
    title: "Bouddha Heritage",
    description:
      "Bouddha Heritage, a luxury and premium banquet venue. The high-class interior and royal touch add a touch of elegance and grandeur to the overall ambiance.",
    image: "/bouddha.jpg",
  },
  {
    id: 4,
    title: "Taaj Reception",
    description:
      "Taaj Reception, the best venue in town is a captivating blend of elegance, functionality, and ambiance. From the moment you step through its doors, you're enveloped in an atmosphere of sophistication and charm.",
    image: "/taj.jpg",
  },
];

const Collection: React.FC = () => {
  return (
    <div className="min-h-screen pt-10 md:pt-20 pb-10 px-4">
      <div className="container mx-auto w-full relative">
        {/* Header */}
        <div className="text-center mb-6 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Best Construction Company in Kathmandu
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Our Projects
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We take pride in our track record, having successfully constructed
            over 100 houses, the majority of which are luxurious bungalows.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative bg-white rounded-sm  overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
              renderBullet: (index: number, className: string) => {
                return `<span class="${className} w-3 h-3 bg-gray-300 rounded-full mx-1 cursor-pointer transition-all duration-300 hover:bg-gray-500"></span>`;
              },
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-[300px] md:h-[500px]"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col absolute left-[500px]  justify-center my-28 p-8 md:py-12 lg:py-16 bg-white/70">
                    <div className="space-y-6">
                      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        {project.title}
                      </h1>
                      <div className="w-20 h-1 bg-darkGreen rounded-full"></div>
                      <p className="text-[#909090] font-medium text-lg md:text-xl leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute bottom-8 left-8 z-10 flex items-center space-x-4">
            <button className="swiper-button-prev-custom group flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full  hover:bg-white transition-all duration-300 hover:scale-110">
              <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
            </button>
            <button className="swiper-button-next-custom group flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full  hover:bg-white transition-all duration-300 hover:scale-110">
              <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
            </button>

            {/* Custom Pagination */}
            <div className="swiper-pagination-custom flex items-center ml-4"></div>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background-color: #3b82f6 !important;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default Collection;
