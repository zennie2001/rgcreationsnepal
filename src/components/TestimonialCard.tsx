"use client";
import Image from "next/image";

const TestimonialCard = ({ name, description, image }: any) => (
  <section className="bg-gradient-to-r from-[#888888] to-[#9e9e9e] rounded-[24px]">
    <div className="relative z-10 m-4 bg-gradient-to-br from-[#adadad] to-[#d9d9d9] text-white px-8 py-10 rounded-[24px] max-w-4xl shadow-xl">
      <div className="text-darkGreen text-[80px] ">“</div>
      <p className="text-center text-black text-sm sm:text-base italic leading-relaxed mb-8">
        {description}
      </p>
      <div className="flex flex-col items-center">
        <Image
          width={80}
          height={80}
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full border-2 border-darkGreen mb-2"
        />
        <h3 className="text-sm md:text-base font-medium text-black uppercase tracking-wide">
          {name}
        </h3>
        <span className="text-xs md:text-sm text-black">Verified Customer</span>
      </div>
    </div>
  </section>
);

export default TestimonialCard;
