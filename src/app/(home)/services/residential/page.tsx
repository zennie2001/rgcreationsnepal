import NewPageHeader from "@/components/NewPageHeader";
import About from "@/sections/About";
import BlogDesign from "@/sections/Blog";
import MissionSection from "@/sections/Mission";
import NewsLetter from "@/sections/NewsLetter";
import Image from "next/image";

export default function RGMission() {
  return (
    <main>
      <NewPageHeader title="Residential Construction" />
      <div className="container mx-auto w-full py-10 bg-white">
        {/* Top Section */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          {/* Left content */}
          <div className="space-y-6">
            <p className="text-4xl font-bold text-darkGreen leading-snug">
              Welcome to RG
              <br /> Creations Building Dreams,
              <br /> Crafting Excellence
            </p>
            <p className="text-base font-semibold text-darkGreen whitespace-nowrap">
              No. 1 quality construction for residential, commercial,
              infrastructure development.
            </p>
            <p className="text-gray-600 max-w-2xl text-justify">
              RG Creations stands as a beacon of innovation and quality in the
              realm of construction and business ventures. With a steadfast
              commitment to excellence, we specialize in bringing architectural
              visions to life, crafting buildings that resonate with elegance
              and functionality
            </p>
            <p className="text-gray-600 max-w-2xl text-justify">
              We boast a world-class international team featuring top architects
              globally. Tailoring our services to the scale and requirements of
              each project, we seamlessly integrate our international team when
              needed. Additionally, we specialize in constructing international
              chain hotels.
            </p>
            <p className="text-gray-600 max-w-2xl text-justify">
              Our mission is to embrace cutting-edge technologies and
              sustainable practices to create innovative, environmentally
              responsible, and safe structures that meet the evolving needs of
              our clients.
            </p>
            <p className="text-gray-600 max-w-2xl text-justify">
              At RG Creations, we specialize in delivering quality construction
              for residential and commercial infrastructure projects. With a
              focus on craftsmanship, precision, and durability, we ensure each
              project meets the highest standards. Whether building your dream
              home or a robust commercial structure, we are committed to
              providing exceptional results on time and within budget. Your
              vision, our expertise—building the future together.
            </p>
            <button className="bg-darkGreen text-white px-14 ms-6 md:ms-0 py-3 text-base rounded shadow hover:bg-green-800 transition">
              Contact Us
            </button>
          </div>

          {/* Right images */}
          <div className="w-full">
            {/* Responsive Column Layout for Small Screens */}
            <div className="flex flex-col md:hidden space-y-4">
              <div className="w-full h-80 p-4 bg-white border-white shadow-lg">
                <Image
                  src="/img-rg1.png"
                  alt="Notebook"
                  width={600}
                  height={320}
                  className="rounded-lg w-full h-full object-cover p-3"
                />
              </div>
              <div className="w-full h-80 p-4 bg-white border-white shadow-lg">
                <Image
                  src="/about2.jpg"
                  alt="Construction Site"
                  width={600}
                  height={320}
                  className="rounded-lg w-full h-full object-cover p-3"
                />
              </div>
            </div>

            {/* Original Absolute Layout for Medium and Up */}
            <div className="relative w-full h-[500px] hidden md:block">
              <div className="absolute top-0  right-0 w-96 h-80 p-4 bg-white border-white shadow-lg">
                <Image
                  src="/img-rg1.png"
                  alt="Notebook"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg p-3"
                />
              </div>
              <div className="absolute bottom-0 left-10 w-72 h-80 shadow-lg border-4 p-4 bg-white border-white">
                <Image
                  src="/about2.jpg"
                  alt="Construction Site"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg p-3"
                />
              </div>
            </div>
          </div>
        </div>
        <About />

        {/* Our Mission Section */}
        <MissionSection />
      </div>
      <BlogDesign />
      <NewsLetter />
    </main>
  );
}
