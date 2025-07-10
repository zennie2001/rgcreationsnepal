"use client";
import AboutHero from "@/sections/AboutHero";
import Deals from "@/sections/Deals";
import FAQ from "@/app/(home)/faqs/page";
import Image from "next/image";
import AboutChairmanHero from "@/sections/AboutChairmanHero";

const safetyItems = [
  {
    title: "Rigorous Safety Protocols",
    description:
      "Implementing comprehensive health and safety measures on all project sites to prevent accidents and ensure well-being.",
  },
  {
    title: "Employee Training",
    description:
      "Regular safety training and awareness programs equip our team with the knowledge and skills to work safely and responsibly.",
  },
  {
    title: "Compliance & Regulations",
    description:
      "Strict adherence to local and international health and safety laws, regulations, and best practices.",
  },
  {
    title: "Risk Management",
    description:
      "Proactive identification, assessment, and mitigation of potential hazards throughout the project lifecycle.",
  },
  {
    title: "Safe Work Environment",
    description:
      "Ensuring that all equipment, tools, and materials are handled and maintained in accordance with safety guidelines.",
  },
  {
    title: "Emergency Preparedness",
    description:
      "Establishing clear procedures and communication plans to respond efficiently to emergencies or incidents.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <AboutChairmanHero />
      <div className="">
        <section className="px-8   py-12  md:py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-32 items-center">
          <div className="lg:pl-12 md:pl-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Building Beyond Structures - 
              <br className="hidden lg:block" />
              Crafting a Legacy for Nepal
            </h2>
            <p className="text-gray-700 text-base mb-4 pr-4">
              It is with great pride and purpose that I welcome you to RG Creations Nepal—a company built on a foundation of trust, creativity, and uncompromising quality. From day one, our mission has been clear: to raise the standard of construction in Nepal by delivering premium, future-ready spaces that inspire, perform, and endure.
            </p>
            <p className="text-gray-700 text-base mb-4 pr-4">
              Whether it’s the electrifying ambiance of a world-class nightclub, the sophistication of a luxurious residence, or the refined functionality of a commercial property, we approach every project with passion and precision. Our work on LOD Nepal, ranked #44 in DJ Mag’s Top 100 Clubs 2025, stands as a global example of what Nepali vision and expertise can achieve.
            </p>
            <p className="text-gray-700 text-base pr-4">
             But construction is only part of our story. At RG Creations, we are equally committed to interior design, premium furniture supply, and sustainable architecture—providing full-spectrum solutions that transform ideas into iconic realities.
            </p>
            <p className="text-gray-700 text-base pr-4">
             As Chairman, I believe our true success lies not just in what we build, but in how we uplift our people, empower the next generation, and contribute to the future of Nepal. Thank you for being a part of this journey with us.
            </p>
            <p className="text-gray-800 text-base mt-2">
             Warm regards,
            </p>
          </div>

          <div className="flex flex-col w-full lg:w-[400px] h-[600px] items-center text-center pt-16 ">
            <img
              src="/about/hero-ram2 (1).jpg"
              alt="Ram Giri"
              className="h-[600px] w-[400px] object-cover"
            />
            <div className="mt-4 text-left">
              <h4 className="text-lg font-semibold">Ram Giri</h4>
              <p className="text-base text-gray-600">
                Executive Chairman, RG Creations Nepal
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>

      <FAQ />
      <Deals />
    </main>
  );
}
