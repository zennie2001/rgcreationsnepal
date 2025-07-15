
import knifeImage from "@/assets/images/image-about.jpg";
import PageHeader from "@/components/PageHeader";
import aboutSecondImage from "@/assets/images/about-blade2.jpg";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaPlus } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useState } from "react";
import craft1 from "@/assets/images/about-blade.jpg";
import craft2 from "@/assets/images/about-blade2.jpg";
import craft3 from "@/assets/images/image-about.jpg";
import { Check } from 'lucide-react';

const socialMedia = [
  {
    link: "facebook.com",
    icon: FaFacebookF,
  },
  {
    link: "instagram.com",
    icon: RiInstagramFill,
  },
  {
    link: "linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    link: "pinterest.com",
    icon: FaPinterest,
  },
];

export default function AboutPage() {
  

  return (
    <main className="w-full  overflow-hidden">
      <PageHeader title="About Us" link="/about" />
      <section className="flex_center container mx-auto flex-col w-full px-4 lg:px-0  lg:py-16 py-7 gap-16">
        <div className="flex flex-col lg:flex-row w-full container text-white px-5 py-4 lg:px-0  items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2  flex flex-col gap-6">
            <p className="text-darkGreen md:text-left text-center font-medium text-base md:text-lg -mb-4">
              About us
            </p>
            <h2 className="text-xl text-black sm:text-3xl md:text-4xl md:text-left text-center font-medium ">
              Crafted with Vision, Honed with <br className="hidden sm:block" />
              Purpose, Carried with Confidence
            </h2>
            <p className="text-black text-[13px] md:text-base md:text-left text-center leading-relaxed">
              Khukuriblades.com is a proud, Nepali-owned company devoted to
              preserving and promoting one of Nepal’s most iconic cultural
              treasures — the Khukuri. More than just a weapon, the Khukuri is a
              living symbol of Nepali identity, bravery, and craftsmanship. For
              centuries, it has represented the strength of the legendary Gurkha
              warriors, the rituals of mountain villages, and the deep-rooted
              pride of our ancestors. At Khukuriblades.com, we honor this
              heritage with every blade we forge.
            </p>
            <div className="flex flex-col md:text-left text-black text-center sm:flex-row gap-8 pt-4">
              <div className="flex-1">
                <h4 className="font-semibold  mb-2">
                  Engineered with Purpose.
                </h4>
                <p className="text-black  text-[13px] leading-relaxed">
                  From concept to creation, every knife we produce reflects our
                  commitment to quality, performance, and cutting-edge design.
                </p>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">A Legacy of Precision</h4>
                <p className="text-black text-[13px] leading-relaxed">
                  Born from a deep respect for mechanics and form, we set out to
                  redefine the automatic knife — delivering speed, safety, and
                  style.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-1/2 flex justify-center rounded-lg items-center">
            <Image
              src={knifeImage}
              alt="Crossed knives"
              className="w-[300px] sm:w-full rounded-lg h-auto object-cover"
            />
          </div>
        </div>
        <div className="flex_center lg:flex-row flex-col w-full lg:gap-8 gap-3">
          <div className="flex items-center lg:p-12 p-4 lg:gap-8 gap-2 bg-[#F5FBFF] lg:w-1/2 w-full rounded-md">
            <p className="lg:text-4xl text-3xl text-tertiary font-semibold  w-[40%] md:w-[20%]">
              1K +
            </p>
            <div className="flex flex-col lg:gap-3 gap-0">
              <p className="lg:text-2xl text-xl font-semibold">
                Satisfied Business Customers
              </p>
              <p className="text-text text-sm">
                Trusted by 1K + businesses all around the world
              </p>
            </div>
          </div>
          <div className="flex items-center lg:p-12 p-4 gap-8 bg-[#FFBF1C]/10 lg:w-1/2 w-full rounded-md">
            <p className="lg:text-4xl text-3xl text-quaternary font-semibold w-[30%] md:w-[20%]">
              15 +
            </p>
            <div className="flex flex-col lg:gap-3 gap-0">
              <p className="lg:text-2xl text-xl font-semibold">
                Years of Experience
              </p>
              <p className="text-text text-sm">
                Experience of over 15 years and counting
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="image container px-4 lg:px-0 flex_center w-full relative">
        <Image
          src={aboutSecondImage}
          alt="image"
          className="size-full object-contain"
        />
        <div className="absolute bottom-0 lg:flex_center hidden w-full  ">
          <div className="flex w-full h-16 bg-primary"></div>
        </div>
      </div>
      <section className="w-full flex_center container px-4 lg:px-0">
        <div className="flex pb-16 w-full">
          <div className="flex flex-col w-full lg:px-12 px-0 gap-4 lg:pt-0 pt-10">
            <h2 className="text-xl md:text-3xl font-semibold text-darkGreen">
              Our Mission
            </h2>
            <div className="w-full flex md:flex-row flex-col md:gap-8 gap-4">
              <p className="text-text w-full">
                To promote, preserve, and protect the traditional art of Khukuri
                making by empowering local artisans and delivering handcrafted
                blades that honor Nepali culture, history, and valor.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full lg:px-12 gap-4 pt-10 md:pt-0">
            <h2 className="text-xl md:text-3xl font-semibold text-darkGreen">
              Our Vision
            </h2>
            <div className="w-full flex md:flex-row flex-col md:gap-8 gap-4">
              <p className="text-text w-full">
                To become the global benchmark in authentic Khukuri
                craftsmanship—celebrated for our quality, integrity, and
                commitment to sustaining Nepal’s legendary blade-making
                heritage.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex_center lg:gap-12 gap-6 lg:px-24 px-4 lg:py-16 py-10 bg-lightGreen/70">
        <div className="flex container flex-col w-full gap-6">
          <h3 className=" text-xl md:text-3xl font-semibold text-center text-darkGreen">
            Whether you are a military history enthusiast, a collector, an
            outdoor adventurer, or simply someone who values authentic, handmade
            artistry, you’ll find that our Khukuris are not just tools or
            souvenirs — they are living relics of a warrior culture and a proud
            nation.
          </h3>
        </div>
      </section>

      <section className="flex_center flex-col container mx-auto px-4 lg:px-0 lg:py-16 py-10 lg:gap-12 gap-6">
        <div className="flex md:flex-row flex-col gap-2 justify-between my-10 w-full">
          <Image
            src={craft1}
            alt="image"
            className="md:w-[30%] w-full rounded-md shadow-lg hover:scale-110 transition-all duration-300 object-cover"
          />
          <Image
            src={craft3}
            alt="image"
            className="md:w-[30%] w-full rounded-md shadow-lg hover:scale-110 transition-all duration-300  object-cover"
          />
          <Image
            src={craft2}
            alt="image"
            className=" md:w-[30%] w-full rounded-md shadow-lg hover:scale-110 transition-all duration-300  object-cover"
          />
        </div>
        <div className="flex flex-col  gap-8  w-full">
          <div className="flex flex-col gap-8">
            <p className="text-text text-base text-justify">
              At{" "}
              <span className=" font-semibold text-darkGreen text-justify w-full">
                Khukuri Blades,
              </span>{" "}
              we are committed to bringing you the very best:
            </p>
            <ul>
              <li className="mb-2 flex items-center gap-2 text-black">
                <Check className="bg-green-600 text-white rounded-sm" size={16} />
                <span className="text-black">100% handmade in Nepal</span>{" "}
              </li>
              <li className="mb-2 flex items-center gap-2 text-black">
                <Check className="bg-green-600 text-white rounded-sm" size={16} />
                <span className="text-black">
                  Authentic designs based on historical and regional styles
                </span>{" "}
              </li>
              <li className="mb-2 flex items-center gap-2 text-black">
                <Check className="bg-green-600 text-white rounded-sm" size={16} />
                <span className="text-black">
                  Ethically sourced and artisan-empowered
                </span>{" "}
              </li>
              <li className="mb-2 flex items-center gap-2 text-black">
                <Check className="bg-green-600 text-white rounded-sm" size={16} />
                <span className="text-black">
                  Built for both beauty and performance
                </span>{" "}
              </li>

              <p>
                When you hold one of our Khukuris in your hand, you're not just
                holding a blade — you're holding a piece of Nepal’s soul.
              </p>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
