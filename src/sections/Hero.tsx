"use client"; // Required for Next.js App Router compatibility

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { id: 1, image: "/main-banner.jpg" },
  { id: 2, image: "/new-banner.jpg" },
  { id: 3, image: "/new-banner2.jpg" },
];

const Hero = () => {
  return (
    <section className="w-full h-[100vh]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-[100vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-[100vh]">
            <img
              src={slide.image}
              className="w-full h-[100vh] object-cover"
              alt="Slide"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
