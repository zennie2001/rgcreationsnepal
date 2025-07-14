"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { ChevronLeft, ChevronRight } from "lucide-react";

type Client = {
  name: string;
  logo: string;
};

const clients: (Client)[] = [
  
  { name: "Royal Empire", logo: "/logo/logo1(1).jpg" },
  { name: "Harshah Batika", logo: "/logo/logo1(2).jpg" },
  { name: "Deja vu", logo: "/logo/logo1(3).jpg" },
  { name: "Rambagh Mahal", logo: "/logo/logo1(4).jpg" },
  { name: "Boudha Heritage", logo: "/logo/logo1(5).jpg" },
  { name: "Taaj Heritage", logo: "/logo/logo1(6).jpg" },
  { name: "PANAS", logo: "/logo/logo1(7).jpg" },
  { name: "White Lotus", logo: "/logo/logo8.svg" },
  { name: "Utsav Kunj", logo: "/logo/logo9.svg" },
  { name: "Majestic Grand", logo: "/logo/majestic.svg" }
];

const LogoSlide = ({ logo, name }: { logo: string; name: string }) => (
  <div className="rounded-lg p-3 flex items-center justify-center hover:scale-105 transition-transform duration-300">
    <img src={logo} alt={name} className="h-20 md:h-28 object-contain" />
  </div>
);

const Deals: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const slidePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const slideNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="md:py-16 py-6 bg-[#333d49]">
      <div className="container mx-auto px-4 text-center relative">
        {/* Left Arrow inside container, vertically centered */}
        <button
          onClick={slidePrev}
          aria-label="Previous Slide"
          className="absolute lg:left-0 left-8 top-1/2 -translate-y-3/4 z-20 bg-white bg-opacity-20 hover:bg-opacity-40 text-white rounded-full p-3 transition"
          style={{ marginLeft: '-1.5rem' }} // adjust horizontal offset so it’s just outside logos
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow inside container, vertically centered */}
        <button
          onClick={slideNext}
          aria-label="Next Slide"
          className="absolute lg:right-0 right-8 top-1/2 -translate-y-3/4 z-20 bg-white bg-opacity-20 hover:bg-opacity-40 text-white rounded-full p-3 transition"
          style={{ marginRight: '-1.5rem' }} // adjust horizontal offset
        >
          <ChevronRight size={24} />
        </button>

        <Swiper
          modules={[Pagination]}
          pagination={false}
          spaceBetween={20}
          loop
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
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

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideToLoop(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? "bg-[#133950]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;
