"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "TAYLOR ROBERTS",
    role: "Co-manager associated",
    image: "/person-1.jpg",
    description:
      "typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.",
  },
  {
    name: "ROBERT WILLSON",
    role: "Co-manager associated",
    image: "/person-2.jpg",
    description:
      "typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.",
  },
  {
    name: "SARAH JOHNSON",
    role: "Co-manager associated",
    image: "/person-1.jpg",
    description:
      "typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.",
  },
];

const TestimonialCard = ({
  name,
  role,
  image,
  description,
}: {
  name: string;
  role: string;
  image: string;
  description: string;
}) => (
  <div className="bg-white rounded-sm p-8 shadow-xl max-w-xl mx-auto">
    <div className="relative inline-block">
      <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-green-900 z-0"></div>
      <img
        src={image}
        alt={name}
        className="w-16 h-16 object-cover relative flex-shrink-0"
      />
    </div>

    <div className="pt-4">
      <h3 className="font-bold text-sm text-gray-900 mb-1">{name}</h3>
      <p className="text-xs text-gray-600">{role}</p>
    </div>

    <div className="relative ">
      <Quote className="rotate-180 text-darkGreen fill-darkGreen my-4" size={16}/>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide">
            TESTIMONIALS
          </h2>
          <div className="w-12 h-0.5 bg-gray-400 mx-auto"></div>
        </div>

        {/* Testimonials Slider */}
        <div className="mb-16">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="px-4 md:px-0"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.slideTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-gray-800" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Clients Says Section */}
        <div className="border-l-8 border-darkGreen pl-2">
          <div className="text-[#bfbfbf]/50">
            <span className="text-6xl font-extrabold">CLIENTS</span>
            <div className="mt-2">
              <span className="text-xl font-medium text-gray-800">SAYS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
