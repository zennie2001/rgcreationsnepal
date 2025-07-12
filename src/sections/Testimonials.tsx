"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Quote } from "lucide-react";

// Types
type UserTestimonial = {
  name: string;
  rating: number;
  time: string;
  image: string;
  description: string;
};

type VideoTestimonial = {
  name: string;
  videoUrl: string;
};

// User testimonials
const testimonials: UserTestimonial[] = [
  {
    name: "Saurav Bhattrai",
    rating: 5,
    time: "2 months ago",
    image: "review/unnamed1.png",
    description:
      "Recently I had plan to build a new house for my family. I was seeking for a unique design for my house. I seeked to many architects and engineers for my design. I was not satisfied with the Designs. I finally found RG Creations a perfect place for Construction works. I am very much satisfied with the design and suggestions made by the team. I am very much happy with this organization for engineering works.",
  },
  {
    name: "Aagya Bhnadari",
    rating: 5,
    time: "4 weeks ago",
    image: "review/unnamed2.png",
    description:
      "Great designs in RG creations. I have seen the potential in the team of architect, designers, logistic, marketers, editor, field staffs everyone, from developing the projects from concept to launch. Highly recommended consultant for any commercial project.",
  },
  {
    name: "Bishal Baral",
    rating: 5,
    time: "6 days ago",
    image: "review/unnamed3.png",
    description:
      "Venue, Pricing, Food quality, Cleanliness Hospitality and Service all are awesome. My rating is 9/10",
  },
  {
    name: "Sudeep Acharya",
    rating: 5,
    time: "3 months ago",
    image: "review/unnamed4.png",
    description:
      "I had an excellent experience working with RG creation . From start to finish, their team demonstrated professionalism, expertise, and a strong commitment to quality. The project was completed on time and within budget, exceeding my expectations. Their attention to detail and craftsmanship were outstanding, and they maintained clear communication throughout the entire process. I highly recommend RG creation for anyone looking for a reliable and skilled construction company!",
  },
];

// Video testimonials
const videoTestimonials: VideoTestimonial[] = [
  {
    name: "John Doe",
    videoUrl: "https://www.youtube.com/embed/Bj_luIBQ7n0",
  },
  {
    name: "Jane Smith",
    videoUrl: "https://www.youtube.com/embed/bjQEJf2MUm0",
  },
  {
    name: "Michael Johnson",
    videoUrl: "https://www.youtube.com/embed/6fRTBd98gGk",
  },
  {
    name: "Michael Johnson",
    videoUrl: "https://www.youtube.com/embed/uH8RtWx-nRI",
  },
];

// User testimonial card
const TestimonialCard = ({
  name,
  rating,
  time,
  image,
  description,
}: UserTestimonial) => {
  const [expanded, setExpanded] = useState(false);

  const CLAMP_CHAR_LIMIT = 200;
  const isLong = description.length > CLAMP_CHAR_LIMIT;

  const displayedText = expanded
    ? description
    : isLong
    ? description.slice(0, CLAMP_CHAR_LIMIT) + "..."
    : description;

  return (
    <div className="bg-white rounded-sm p-8 shadow-xl max-w-xl mx-auto h-[400px] flex flex-col justify-between">
      <div>
        <div className="relative inline-block">
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-[#133950] z-0"></div>
          <img
            src={image}
            alt={name}
            className="w-16 h-16 object-cover relative flex-shrink-0 rounded-full"
          />
        </div>

        <div className="pt-4">
          <h3 className="font-bold text-sm text-gray-900 mb-1">{name}</h3>
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-1">
            <div className="flex items-center text-yellow-500">
              {Array.from({ length: rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span>{time}</span>
          </div>
        </div>

        <div className="relative mt-4">
          <Quote
            className="rotate-180 text-[#133950] fill-[#133950] mb-2"
            size={16}
          />
          <p className="text-sm text-gray-700 leading-relaxed">
            {displayedText}
          </p>
          {isLong && !expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="mt-2 text-xs text-darkGreen font-semibold hover:underline"
            >
              Read more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Video testimonial card
const VideoTestimonialCard = ({
  name,
  videoUrl,
}: VideoTestimonial) => {
  return (
    <div className="bg-white rounded-sm p-4 shadow-xl max-w-xl mx-auto h-[400px] flex flex-col justify-between">
      <iframe
        src={videoUrl}
        title={name}
        className="w-full h-full rounded-md mb-4"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

// Main component
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tab, setTab] = useState<"user" | "video">("user");
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="lg:flex justify-between mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide">
              TESTIMONIALS
            </h2>
            <div className="w-12 h-0.5 bg-gray-400"></div>
          </div>
          <div className="flex gap-4 mt-4 lg:mt-0">
            <button
              onClick={() => {
                setTab("user");
                setActiveIndex(0);
                swiperRef.current?.slideTo(0);
              }}
              className={`px-4 py-2 rounded ${
                tab === "user"
                  ? "bg-[#133950] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              User Testimonial
            </button>
            <button
              onClick={() => {
                setTab("video");
                setActiveIndex(0);
                swiperRef.current?.slideTo(0);
              }}
              className={`px-4 py-2 rounded ${
                tab === "video"
                  ? "bg-[#133950] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Video Testimonial
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
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
            {tab === "user" &&
              testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard {...item} />
                </SwiperSlide>
              ))}

            {tab === "video" &&
              videoTestimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <VideoTestimonialCard {...item} />
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Custom Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {(tab === "user" ? testimonials : videoTestimonials).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => swiperRef.current?.slideTo(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? "bg-gray-800" : "bg-gray-300"
                  }`}
                ></button>
              )
            )}
          </div>
        </div>

        {/* Clients Says Section */}
        <div className="border-l-8 border-[#133950] pl-2">
          <div className="text-[#bfbfbf]/50">
            <span className="text-6xl font-extrabold">CLIENTS</span>
            <div className="mt-2">
              <span className="text-xl font-medium text-gray-800">
                SAYS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
