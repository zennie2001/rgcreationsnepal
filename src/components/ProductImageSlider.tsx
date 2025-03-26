"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { useState } from "react";

interface ProductImage {
  src: string;
}

interface ProductImageSliderProps {
  images: ProductImage[];
  productName: string;
}

export default function ProductImageSlider({
  images,
  productName,
}: ProductImageSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

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
        .swiper-pagination {
          position: absolute;
          bottom: 10px;
          left: 30%;
          transform: translateX(-5%);
          z-index: 10;
        }
        .thumbnail-swiper .swiper-slide-thumb-active img {
          border: 2px solid #ef001f;
          border-radius: 8px;
        }
        .main-swiper {
          width: 100%;
          max-width: 500px;
          margin: auto;
        }
        .thumbnail-swiper {
          width: 80%;
          height: 70px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
        }
        .thumbnail-swiper .swiper-button-next,
        .thumbnail-swiper .swiper-button-prev {
          width: 24px; /* Increased button size */
          height: 24px;
          background: rgba(255, 255, 255, 0.8); /* Slight transparency */
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          color: #ef001f;
          font-size: 16px;
          z-index: 50; /* Higher z-index to ensure visibility */
          cursor: pointer;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .thumbnail-swiper .swiper-button-next:after,
        .thumbnail-swiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }
        .thumbnail-swiper .swiper-button-next {
          right: 0px;
          top: 50px; /* Moves button slightly outside the container but still visible */
        }
        .thumbnail-swiper .swiper-button-prev {
          left: 0px;
          top: 50px;
        }
        .thumbnail-swiper .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        @media (max-width: 640px) {
          .thumbnail-swiper {
            width: 90%;
            max-width: 350px;
          }
          .thumbnail-swiper .swiper-button-next {
            right: -10px;
          }
          .thumbnail-swiper .swiper-button-prev {
            left: -10px;
          }
        }
        @media (max-width: 480px) {
          .thumbnail-swiper {
            width: 95%;
            max-width: 300px;
          }
          .thumbnail-swiper .swiper-button-next {
            right: -5px;
          }
          .thumbnail-swiper .swiper-button-prev {
            left: -5px;
          }
        }
      `}</style>

      <div className="flex flex-col gap-4">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Thumbs]}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper }}
          className="main-swiper relative h-auto"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Image
                src={image.src}
                alt={productName}
                width={400}
                height={400}
                className="rounded-lg shadow-lg w-full max-w-[450px] hover:scale-110 transition-all duration-300 h-auto object-cover"
                priority={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails */}
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Navigation, Thumbs]}
          spaceBetween={8}
          slidesPerView={4}
          watchSlidesProgress
          navigation={true}
          loop={true}
          className="thumbnail-swiper"
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 4,
            },
            480: {
              slidesPerView: 4,
              spaceBetween: 6,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <Image
                src={image.src}
                alt={`${productName} thumbnail ${index + 1}`}
                width={100}
                height={100}
                className="rounded-lg w-[85px] h-[65px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
