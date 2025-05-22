"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { useState, useRef } from "react";

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
  const thumbnailSwiperRef = useRef<any>(null);

  const handlePrevClick = () => {
    if (thumbnailSwiperRef.current) {
      thumbnailSwiperRef.current.slideToLoop(
        thumbnailSwiperRef.current.realIndex - 1
      );
    }
  };

  const handleNextClick = () => {
    if (thumbnailSwiperRef.current) {
      thumbnailSwiperRef.current.slideToLoop(
        thumbnailSwiperRef.current.realIndex + 1
      );
    }
  };

  return (
    <>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: darkGreen !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .swiper-pagination {
          position: absolute;
          bottom: 10px;
          left: 30%;
          transform: translateX(-2%);
          z-index: 10;
        }
        .thumbnail-swiper .swiper-slide-thumb-active img {
          border: 2px solid darkGreen;
          border-radius: 8px;
        }
        .main-swiper {
          width: 100%;
          max-width: 500px;
          margin: auto;
        }
        .thumbnail-container {
          position: relative;
          width: 80%;
          max-width: 400px;
          margin: auto;

          display: flex;
          align-items: center;
          justify-content: center;
        }
        .thumbnail-swiper {
          width: 100%;
          height: 70px;
        }
        .thumbnail-prev,
        .thumbnail-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 30px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          color: darkGreen;
          font-size: 18px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: opacity 0.3s ease-in-out;
          z-index: 50;
        }
        .thumbnail-prev {
          left: -40px;
        }
        .thumbnail-next {
          right: -40px;
        }
        .thumbnail-prev:hover,
        .thumbnail-next:hover {
          background: rgba(255, 255, 255, 1);
        }
        @media (max-width: 640px) {
          .thumbnail-container {
            width: 90%;
            max-width: 350px;
          }
          .thumbnail-prev {
            left: -30px;
          }
          .thumbnail-next {
            right: -30px;
          }
        }
        @media (max-width: 480px) {
          .thumbnail-container {
            width: 95%;
            max-width: 300px;
          }
          .thumbnail-prev {
            left: -10px;
          }
          .thumbnail-next {
            right: -10px;
          }
             .thumbnail-prev,
  .thumbnail-next {
    width: 20px; /* Reduce button width */
    height: 20px; /* Reduce button height */
    font-size: 12px; /* Reduce arrow size */
  }
     .thumbnail-swiper {
    width: 90%;  /* Reduce overall width */
    max-width: 280px; /* Make thumbnails narrower */
  }

  .thumbnail-swiper .swiper-slide {
    margin-right: 8px; /* Reduce space between images */
  }
}
}
        }
      `}</style>

      <div className="flex flex-col gap-4">
        {/* Main Image Swiper */}
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
                className="rounded-lg shadow-lg w-full max-w-[500px] hover:scale-110 transition-all duration-300 h-auto object-cover"
                priority={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails Swiper with Navigation Buttons */}
        <div className="thumbnail-container">
          <button onClick={handlePrevClick} className="thumbnail-prev">
            ❮
          </button>

          <Swiper
            onSwiper={setThumbsSwiper}
            onInit={(swiper) => (thumbnailSwiperRef.current = swiper)}
            modules={[Navigation, Thumbs]}
            spaceBetween={8}
            slidesPerView={4}
            loop={true} // ✅ Enables infinite loop
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

          <button onClick={handleNextClick} className="thumbnail-next">
            ❯
          </button>
        </div>
      </div>
    </>
  );
}
