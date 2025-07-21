
import AboutHero from "@/sections/AboutHero";
import Deals from "@/sections/Deals";
import FAQ from "@/app/(home)/faqs/page";
import Image from "next/image";
import AboutValuesHero from "@/sections/AboutValuesHero";


export const metadata = {
  title: "Our Values | Leading Construction Company Nepal",
  description:"Learn about RG Creations’ core values that drive quality, sustainability, and client satisfaction as a leading construction company in Nepal."};

export default function Home() {

  return (
    <main className="overflow-hidden">
      <AboutValuesHero />
      <section className="relative bg-white container mx-auto px-4 md:px-0 py-20  text-gray-800 overflow-hidden">
        {/* Section Header */}
        <div className="flex w-full justify-between">
          <div className="text-3xl md:text-5xl text-[#333d49] font-extrabold mb-6 w-1/2">OUR<br/> VALUES</div>
          <p className="text-sm text-gray-600 max-w-2xl w-1/2 mb-12">
            We provide best services with guarantee. We are the best realtor in
            country and always bring best option for our customer or clients. We
            never compromise on guarantee. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>

        <svg
          className="w-full h-auto"
          viewBox="0 0 1551 151"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1550.23 149.949L1525.3 140.341C1034.34 -48.8714 489.999 -45.4392 1.46851 149.949V149.949"
            stroke="#244D4D"
            stroke-dasharray="3 3"
          />
        </svg>

        {/* Main Content Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 items-center gap-10 z-10">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-semibold mb-2">People First</h3>
              <p className="text-sm text-gray-600">
                We believe that people are the foundation of our success. We
                cultivate a safe, inclusive, and respectful workplace where
                creativity thrives and every team member is empowered to grow
                and excel.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Integrity</h3>
              <p className="text-sm text-gray-600">
                We operate with honesty, transparency, and accountability. By
                upholding the highest professional and ethical standards, we
                build trust that lasts—project after project, client after
                client.
              </p>
            </div>
          </div>

          {/* Center Image with rounded top corners */}
          <div className="relative w-full flex justify-center items-center">
            {/* SVG background */}
            <svg
              className="absolute inset-0 w-full h-full object-cover z-0"
              viewBox="0 0 667 819"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none" // ensures it stretches without keeping aspect ratio
            >
              <path
                d="M0.308838 9.38204C0.308838 2.7583 7.03899 -1.7403 13.1594 0.792458L37.3001 10.7824C235.367 92.747 458.504 89.1969 653.863 0.97288C659.572 -1.60519 666.038 2.56978 666.038 8.83366V665.878C666.038 669.011 664.858 672.028 662.732 674.33C490.599 860.704 198.194 867.084 18.0945 688.397L4.14787 674.559C1.69082 672.121 0.308838 668.804 0.308838 665.342V9.38204Z"
                fill="url(#paint0_linear_377_4677)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_377_4677"
                  x1="333.174"
                  y1="-4.52539"
                  x2="333.174"
                  y2="892.326"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.166667" stopColor="#F9BEBA" />
                  <stop offset="0.302083" stopColor="#FEDDC0" />
                  <stop offset="1" stopColor="#D2E6F5" />
                </linearGradient>
              </defs>
            </svg>

            {/* Foreground image */}
            <div className="relative z-10 overflow-hidden rounded-b-[190px] w-[400px] max-w-full">
              <Image
                src="/about/1000.jpg"
                alt="Our Values - RG Creations Nepal"
                width={400}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-semibold mb-2">Client Success</h3>
              <p className="text-sm text-gray-600">
                Our clients’ vision is at the heart of everything we do. We
                collaborate closely to understand their goals, delivering
                thoughtful, innovative, and value-driven design solutions that
                exceed expectations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
              <p className="text-sm text-gray-600">
                We are committed to designing spaces that are not only beautiful
                but responsible. Our work emphasizes smart resource use, energy
                efficiency, and sustainable practices that benefit both people
                and the planet.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom logo */}
        <div className="mt-16 flex justify-between gap-6 items-center">
          <svg
            width="600"
            height="100"
            viewBox="0 0 626 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M625.747 110.593H16.4687C8.18448 110.593 1.46875 103.877 1.46875 95.5928V0.0566406"
              stroke="#244D4D"
            />
          </svg>

          <div className="border-2 rounded-full mt-20 border-gray-300 px-6 py-4 inline-flex items-center gap-4">
            <Image
              src="/Rg Logo .svg" // replace with your logo path
              alt="Logo - RG Creations Nepal"
              width={50}
              height={50}
              className="object-contain  w-24 h-24"
            />
          </div>
          <svg
            width="600"
            height="110"
            viewBox="0 0 614 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.0266113 112.85L598 112.85C606.284 112.85 613 106.134 613 97.85V0.429687"
              stroke="#244D4D"
            />
          </svg>
        </div>
      </section>

      <FAQ />
      <Deals />
    </main>
  );
}
