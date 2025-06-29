"use client";
import AboutHero from "@/sections/AboutHero";
import Deals from "@/sections/Deals";
import FAQ from "@/app/(home)/faqs/page";
import Image from "next/image";

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
    <main className="w-full">
      <AboutHero />
      <section className="px-4 container mx-auto py-12 md:px-0 md:py-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Visionary Leadership,
              <br />
              Boundless Impact
            </h2>
            <p className="text-gray-700 text-base mb-4">
              Ram Giri’s entrepreneurial journey is defined by innovation,
              resilience, and a steadfast commitment to crafting exceptional
              experiences. As Executive Chairman of RG Creations Nepal, Ram has
              been instrumental in raising the bar for the hospitality industry
              by blending luxury, sustainability, and cultural authenticity into
              iconic architectural projects.
            </p>
            <p className="text-gray-700 text-base mb-4">
              His leadership style is visionary yet grounded, driving the
              company to deliver world-class venues that leave lasting
              impressions on guests and investors alike. Beyond the boardroom,
              Ram’s passion for sports and social engagement fuels his
              dedication to empowering Nepal’s next generation — inspiring youth
              to dream bigger and shape a brighter future for the country.
            </p>
            <p className="text-gray-700 text-base">
              Under Ram’s guidance, RG Creations Nepal continues to grow as a
              pioneer in architecture and design, turning ambitious ideas into
              transformative realities.
            </p>
          </div>

          <div className="flex flex-col h-[500px] items-center text-center">
            <Image
              src="/chairman.jpg"
              alt="Ram Giri"
              width={300}
              height={400}
              className=" object-contain"
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

      <FAQ />
      <Deals />
    </main>
  );
}
