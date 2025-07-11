"use client";
import AboutHero from "@/sections/AboutHero";
import Deals from "@/sections/Deals";
import FAQ from "@/app/(home)/faqs/page";
import Image from "next/image";
import AboutApartHero from "@/sections/AboutApartHero";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <AboutApartHero/>
      <section className="bg-white px-4 py-20 container md:px-0 text-gray-800">
        {/* Title and Intro */}
        <div className="mb-12 w-full flex justify-between">
          <h2 className="text-3xl md:text-4xl font-bold w-1/2 mb-4">
            WHAT SETS US<br/>APART
          </h2>
          <p className="text-sm text-gray-600 w-1/2">
            At RG Creations Pvt. Ltd., we don’t follow trends—we set them.
            Here’s what makes us the preferred architectural partner for
            visionary developers, hospitality leaders, and entrepreneurs across
            Nepal and beyond:
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Left Column */}
          <div className="">
            {[
              {
                title: "END-TO-END EXPERTISE",
                text: "We provide a comprehensive, turnkey service—covering architecture, interior design, structural engineering, acoustics, lighting design, and project supervision. Our multidisciplinary team ensures that every detail is seamlessly integrated for maximum visual, acoustic, and operational impact.",
              },
              {
                title: "CLIENT-CENTRIC COLLABORATION",
                text: "Every project is a partnership. We take time to deeply understand your vision, brand identity, and business objectives. We don’t offer one-size-fits-all solutions—we co-create unique spaces that reflect your goals and engage your audience.",
              },
              {
                title: "GLOBAL REACH, LOCAL SOUL",
                text: "With an R&D and sourcing office in Shenzhen, China, we have access to global design trends, materials, and technologies. Yet every design we create is rooted in local culture, functionality, and emotional relevance—connecting people to space in meaningful ways.",
              },
              {
                title: "PROVEN TRACK RECORD",
                text: "With over 30 completed projects across Nepal’s most vibrant cities—including iconic venues like Deja Vu, Victory Lounge, Rakers Magic, Full Moon, and Faces Lounge—we’ve proven our ability to consistently deliver excellence, even under pressure.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-2 border-black p-4 text-sm space-y-2 text-right bg-white shadow-sm"
              >
                <h3 className="font-semibold text-md uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center">
            <div className="h-full w-full overflow-hidden">
              <Image
                src="/about/contact.jpg" 
                alt="What Sets Us Apart"
                width={500}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="">
            {[
              {
                title: "UNMATCHED INDUSTRY FOCUS",
                text: "While we work across sectors, we have carved a niche in hospitality, nightlife, and commercial architecture, giving us unmatched insight into the psychology of guests, traffic flow, ambience, sound dynamics, and revenue-generating design elements.",
              },
              {
                title: "INNOVATION AT THE CORE",
                text: "From cutting-edge soundproofing and lighting automation to sustainable materials and smart spatial layouts, we constantly innovate to bring you designs that are ahead of the curve—technically advanced, visually stunning, and future-ready.",
              },
              {
                title: "SUSTAINABILITY BY DESIGN",
                text: "We design with conscience. From energy-efficient layouts and eco-friendly materials to long-lasting finishes and waste-reducing construction methods, we build spaces that are not just beautiful—but responsible.",
              },
              {
                title: "COMMITMENT TO LOCAL GROWTH",
                text: "We’re more than just a design firm—we’re a catalyst for national development. By hiring and training over 200+ local professionals, and reducing the need for foreign outsourcing, we’re helping Nepal’s talent thrive while delivering world-class results.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-2 border-black p-4 text-sm space-y-2 bg-white shadow-sm"
              >
                <h3 className="font-semibold text-md uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <Deals />
    </main>
  );
}
