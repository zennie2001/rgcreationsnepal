"use client";
import AboutHero from "@/sections/AboutHero";
import Deals from "@/sections/Deals";
import FAQ from "@/app/(home)/faqs/page";
import Image from "next/image";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <section className="bg-[#f6f7f8] py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative w-full  md:w-[50%]  md:ms-60 h-[500px]">
            {/* Decorative Border Box */}
            <div className="absolute top-8 right-14 w-full h-full border-8 border-darkGreen z-0" />
            {/* Main Image */}
            <div className="relative z-10 w-full h-full overflow-hidden ">
              <Image
                src="/about-us.jpg" // Replace with your image path
                alt="About Us"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-gray-800 ">
            <p className="uppercase text-sm tracking-wide mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Our Mission is the Best Interior Design & Development.
            </h2>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              <span className="font-semibold text-black uppercase block mb-2">
                At RG Creations Pvt. Ltd, we don’t just design buildings—we
                craft environments that inspire, engage, and elevate. Based in
                Kathmandu, Nepal and backed by over 15 years of hands-on
                industry experience, we specialize in architectural and interior
                design with a strong focus on the hospitality, nightlife, and
                commercial sectors.
              </span>
              From iconic nightclubs and boutique hotels to dynamic lounges,
              pubs, and event venues, our portfolio of 30+ premium landmark
              projects speaks to our commitment to creativity, precision, and
              purposeful design. Each space we create is tailored to tell a
              story—one that aligns with our client’s vision, resonates with
              their audience, and delivers exceptional user experiences. <br />
              <br />
              With our international sourcing and tech hubs, like world tech in
              Shenzhen, China, we combine global design intelligence with local
              insight. Our multidisciplinary team—comprising architects,
              interior designers, engineers, acousticians, and lighting
              experts—works together to bring innovative, energy-efficient, and
              culturally relevant designs to life.
            </p>

            <a
              href="#"
              className="inline-block bg-emerald-900 text-white text-sm tracking-wide px-6 py-3 rounded-md hover:bg-emerald-800 transition"
            >
              READ MORE
            </a>
          </div>
        </div>
      </section>
      <div className="w-full bg-white py-16 px-4 md:px-10 lg:px-20 space-y-16">
        {/* Vision Section */}
        <div className="relative grid md:grid-cols-2 items-center gap-6">
          <Image
            src="/vision.jpg" // replace with your actual image path
            alt="Vision"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
          <div className="absolute right-36 top-1/2 -translate-y-1/2 bg-white p-8 shadow-lg max-w-md md:max-w-lg">
            <h2 className="text-2xl font-bold mb-4">OUR VISION</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              TO BE THE MOST TRUSTED NAME IN ARCHITECTURAL INNOVATION, KNOWN FOR
              TRANSFORMING IDEAS INTO IMMERSIVE, HIGH–PERFORMANCE SPACES THAT
              INSPIRE AND ENDURE.
            </p>
          </div>
        </div>

        <div className="relative w-full flex">
          {/* Right Half - Image with overlay */}

          {/* Text box overlaying from left inside the image half */}
          <div className="absolute left-36 top-1/2 -translate-y-1/2 bg-black text-white p-8 shadow-lg max-w-lg z-10">
            <h2 className="text-2xl font-bold mb-4">OUR MISSION</h2>
            <p className="text-sm leading-relaxed">
              TO DESIGN ENVIRONMENTS THAT ELEVATE HUMAN EXPERIENCE, DRIVE
              BUSINESS SUCCESS, AND CONTRIBUTE TO THE SUSTAINABLE GROWTH OF
              NEPAL'S BUILT ENVIRONMENT.
            </p>
          </div>
          <div className="relative w-full flex justify-end items-center">
            {/* Image */}
            <Image
              src="/mission.jpg"
              alt="Mission"
              width={800}
              height={600}
              className="w-1/2   h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <FAQ />
      <Deals />
    </main>
  );
}
