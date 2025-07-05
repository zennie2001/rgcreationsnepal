"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const clients = [
  { name: "Harshah Batika", logo: "/logo (1).png" },
  { name: "Taaj Palace", logo: "/logo (2).png" },
  { name: "Rambagh Mahal", logo: "/logo (3).png" },
  { name: "Royal Empire", logo: "/logo (4).png" },
  { name: "Déjà Vu", logo: "/logo (5).png" },
];

const LogoSlide = ({ logo, name }: { logo: string; name: string }) => (
  <div className="rounded-lg p-3 flex items-center justify-center hover:scale-105 transition-transform duration-300">
    <img src={logo} alt={name} className="h-20 object-contain" />
  </div>
);

const Deals: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="md:py-16 py-6 bg-white">
      <div className="container mx-auto px-4 text-center">

        {/* Slider for small screens only */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={false} // disable default pagination
            spaceBetween={20}
            slidesPerView={2}
            loop
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} 
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="px-4"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <LogoSlide logo={client.logo} name={client.name} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.slideToLoop(index)} // use slideToLoop for looping
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-gray-800" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid for medium and larger screens */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="rounded-lg p-3 flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 md:h-32 object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Deals;
