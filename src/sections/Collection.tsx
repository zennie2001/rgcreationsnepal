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
    image:
      "/harshah.jpg",
  },
  {
    id: 2,
    title: "Royal Palace Hotel",
    description:
      "A luxurious 5-star hotel complex featuring traditional Nepalese architecture blended with modern amenities, offering guests an unforgettable experience in the heart of Kathmandu.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    title: "Mountain View Residences",
    description:
      "Premium residential complex with stunning Himalayan views, featuring modern apartments designed for comfort and sustainability, perfect for families seeking luxury living.",
    image:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 4,
    title: "Heritage Shopping Center",
    description:
      "A contemporary shopping destination that celebrates Nepal's rich cultural heritage while providing modern retail spaces and entertainment facilities for the whole family.",
    image:
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const Collection: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto w-full relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Best Construction Company in Kathmandu
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Our Projects
          </h2>
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
              delay: 5000,
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
                      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        {project.title}
                      </h3>
                      <div className="w-20 h-1 bg-darkGreen rounded-full"></div>
                      <p className="text-darkGreen/60 font-semibold text-lg md:text-xl leading-relaxed">
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
