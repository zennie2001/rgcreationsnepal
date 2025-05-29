"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { RefObject } from "react";

interface Props {
  name: string;
  description: string;
  prevRef?: RefObject<HTMLButtonElement>;
  nextRef?: RefObject<HTMLButtonElement>;
  onPrevClick?: () => void;
  onNextClick?: () => void;
}

const TestimonialCard = ({ name, description, prevRef, nextRef, onPrevClick, onNextClick }: Props) => (
  <section className="bg-gradient-to-r from-[#888888] to-[#9e9e9e] rounded-2xl shadow-inner w-full max-w-4xl p-4">
    <div className="relative flex flex-col justify-center items-center bg-gradient-to-br from-[#adadad] to-[#d9d9d9] rounded-2xl px-6 md:py-12">
      {/* Quote Icon */}
      <div className="text-darkGreen text-[80px]  leading-none -mb-6 pt-4">"</div>

      {/* Description */}
      <p className="text-sm sm:text-base text-black italic leading-7 text-center max-w-3xl">
        {description}
      </p>

      {/* Arrows (if present) */}
      {prevRef && nextRef && (
        <div className="flex justify-between w-full md:w-[90%] gap-10 md:mt-10">
          <button
            ref={prevRef}
            onClick={onPrevClick}
            className="text-black hover:text-darkGreen transition"
            aria-label="Previous"
          >
            <ArrowLeft size={24} />
          </button>
          {/* Name and Role */}
          <div className="my-4 md:my-10 text-center">
            <h3 className="text-black font-semibold text-xs sm:text-sm uppercase">
              {name}
            </h3>
            <p className="text-xs text-gray-700 mt-1">Founder of Technology</p>
          </div>
          <button
            ref={nextRef}
            onClick={onNextClick}
            className="text-black hover:text-darkGreen transition"
            aria-label="Next"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      )}
    </div>
  </section>
);

export default TestimonialCard;
