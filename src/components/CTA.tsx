import React from "react";
import PrimaryButton from "./UI/PrimaryButton";
import Image from "next/image";
import ctaImage from "@/assets/images/ctaimage.png";
import interviewImage from "@/assets/images/girlimage.png";

export default function CTA() {
  return (
    <div className="bg-bodyColor rounded-lg flex lg:flex-row lg:pt-0 lg:px-0 pt-4 px-4 flex-col gap-5 items-center">
      <div className="lg:pl-10 flex flex-col lg:items-start items-center">
        <p className="text-base font-bold text-tertiary lg:text-start text-center">
          About Us
        </p>
        <h1 className="lg:text-[40px] text-[30px] lg:leading-[46px] leading-[40px] py-3 font-semibold lg:text-start  text-darkGreen text-center">
          Prepare to Set Out on Your Adventure
        </h1>
        <p className="text-text lg:text-start text-center">
          Learn more, keep yourself updated, and begin your path to academic
          success.
        </p>
        <PrimaryButton text="Contac Us" className="mt-5" />
      </div>
      <div className="w-full lg:hidden block">
        <Image
          src={interviewImage}
          alt="page header image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-[70%] 2xl:w-[50%] lg:block hidden">
        <Image
          src={ctaImage}
          alt="page header image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
