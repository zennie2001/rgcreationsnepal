"use client"; // Required for Next.js App Router compatibility

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { id: 1, image: "/new-banner3.jpg" },
  { id: 2, image: "/new-banner2.jpg" },
  { id: 3, image: "/main-banner.jpg" },
];

const Hero = () => {
  return (
    <>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #ef001f !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .swiper-button-prev,
        .swiper-button-next {
          background: rgba(255, 255, 255, 0.4) !important;
          width: 40px !important;
          height: 40px !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 18px !important;
          color: #ef001f !important;
          font-weight: bold;
        }
      `}</style>
      <section className="w-full  h-[60vh] md:h-[100vh]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          className="w-full  h-[60vh] md:h-[100vh]"
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="relative w-full  h-[60vh] md:h-[100vh]"
            >
              <img
                src={slide.image}
                className="w-full h-[60vh] md:h-[100vh] object-cover"
                alt="Slide"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Hero;
