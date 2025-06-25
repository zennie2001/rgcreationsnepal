"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";

import TestimonialCard from "@/components/TestimonialCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const blogs = [
  {
    name: "Gurkha Blade Enthusiast",
    description: `The craftsmanship of the Khukuris from this site is simply unparalleled. Each blade is a testament to authentic Gurkha tradition, offering superb balance and a razor-sharp edge that excels in both utility and display. The craftsmanship of the Khukuris from this site is simply unparalleled. `,
  },
  {
    name: "Outdoor Adventurer",
    description: `I rely on my Khukuri for all my outdoor expeditions. Its robust construction and incredible versatility make it the ultimate tool for camping, bushcraft, and survival. It truly holds up to the toughest challenges. I rely on my Khukuri for all my outdoor expeditions. `,
  },
  {
    name: "Collector of Fine Edges",
    description: `As a collector, I seek authenticity and quality, and these Khukuris deliver on every front. The historical accuracy and meticulous attention to detail in each piece are remarkable, making them true highlights of my collection. As a collector, I seek authenticity and quality, and these Khukuris deliver on every front. `,
  },
  {
    name: "Martial Arts Practitioner",
    description: `The training Khukuri is perfectly weighted and balanced, providing an ideal feel for practicing traditional movements. Its durability ensures it can withstand rigorous training, making it an essential part of my martial arts regimen. The training Khukuri is perfectly weighted and balanced, providing an ideal feel for practicing traditional movements. `,
  },
];

export default function Testimonials() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <main className="bg-primary md:py-6">
      <section className="container font-jakarta text-white px-4">
        
        <div className="mb-10">
          <p className="text-darkGreen text-center md:text-left md:text-lg text-base">
            Testimonials
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-black text-center md:text-left font-semibold">
            Trusted by Thousands.
            <br />
            Carried with Confidence.
          </h2>
        </div>

        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="max-w-4xl mx-auto"
        >
          {blogs.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                name={testimonial.name}
                description={testimonial.description}
                prevRef={prevRef}
                nextRef={nextRef}
                onPrevClick={() => swiperRef.current?.slidePrev()}
                onNextClick={() => swiperRef.current?.slideNext()}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
