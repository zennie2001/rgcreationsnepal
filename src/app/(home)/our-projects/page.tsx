
import Deals from "@/sections/Deals";
import FAQ from "@/app/(home)/faqs/page";
import Image from "next/image";
import OurProjectHero from "@/sections/OurProjectsHero";
import Link from "next/link";

export const metadata = {
  title: "Our Projects | Architecture, Interior & Nightclub Construction in Nepal – RG Creations",
  description:
    "Explore RG Creations Nepal’s featured projects, including luxury villas, nightclubs, banquet halls, offices, and commercial spaces. See how we blend design, innovation, and functionality across Nepal.",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
     <OurProjectHero/>
      <section className="bg-white px-4 py-20 container md:px-0 text-gray-800">
        {/* Title and Intro */}
        <div className="mb-12 w-full flex flex-col md:flex-row justify-between gap-6">
          <h2 className="text-3xl md:text-4xl text-[#333d49] font-bold w-full md:w-1/2 mb-4">
            OUR PROJECTS
          </h2>
          {/* <p className="text-sm text-gray-600 w-full md:w-1/2">
            At RG Creations Pvt. Ltd., we don’t follow trends—we set them.
            Here’s what makes us the preferred architectural partner for
            visionary developers, hospitality leaders, and entrepreneurs across
            Nepal and beyond:
          </p> */}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Left Column */}
          <div className="h-full flex flex-col justify-between">
            {[
              {
                title: "Premium Nightclub Construction",
                text: "At RG Creations Nepal, we don’t just build nightclubs — we create immersive, high-energy destinations that captivate your guests from the moment they walk in. Our premium nightclub construction services are trusted by some of Nepal’s most successful hospitality brands",
                url: "/services/top-premium-nightclub-construction",
              },
              {
                title: "Luxurious Residential Developments",
                text: "At RG Creations Pvt. Ltd., we redefine the essence of modern living through our luxurious residential developments. Combining architectural brilliance with refined aesthetics, we design and build exclusive homes and communities.",
                 url: "/services/top-luxurious-residential-developments",
              },
              {
                title: "Commercial Construction",
                text: "We develop versatile commercial properties, including office buildings, retail centers, hotels, and mixed-use complexes. Understanding the diverse needs of businesses, we deliver designs that maximize functionality, flexibility, and brand identity.",
                 url: "/services/top-commercial-construction",
              },
              {
                title: "Architectural & Interior Design",
                text: "At RG Creations Pvt. Ltd., we bring visions to life through distinctive architectural and interior design services that blend creativity, functionality, and elegance. Whether you're building from the ground up or transforming an existing space.",
                 url: "/services/top-architectural-interior-design",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-2 border-black p-4 mb-1 text-sm space-y-2 text-right bg-white shadow-sm flex-1"
              >
                <Link href={item.url}>
                <h3 className="font-semibold text-md uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
                 <p className="text-gray-600 hover:underline">Read more</p>
                 </Link>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="h-full w-full overflow-hidden flex">
            <Image
              src="/rg-creations(1).jpg"
              alt="Top Architecture Firm in Nepal"
              width={500}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="h-full flex flex-col justify-between">
            {[
              {
                title: "Premium Furniture Supply",
                text: "At RG Creations Pvt. Ltd., we supply premium furniture solutions that blend sophistication, comfort. Our curated collection is crafted to elevate residential, commercial, hospitality, and entertainment spaces.",
                url:"/services/top-premium-furniture-supply",
              },
              {
                title: "Nightclub Equipment Supply",
                text: "At RG Creations Pvt. Ltd., we are your trusted partner for sourcing and supplying world-class nightclub equipment tailored to elevate the energy, performance, and profitability of nightlife venues across Nepal. From lighting and sound systems to DJ consoles and special effects.",
                url:"/services/top-nightclub-equipment-supply",
              },
              {
                title: "Project Management & Turnkey Solutions",
                text: "At RG Creations Pvt. Ltd., we specialize in turning bold visions into iconic nightlife destinations. Our premium nightclub construction services are tailored to entrepreneurs, hospitality brands, and entertainment groups. ",
                url:"/services/top-project-management-turnkey-solutions",
              },
              {
                title: "We Build, Lease, or Partner",
                text: "In today’s fast-growing hospitality and event management industry, banquet halls are in constant demand. From weddings and birthdays to corporate functions and high-end social events, venues that offer luxury and convenience.",
                url:"/services/we-build-lease-partner",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-2 border-black p-4 mb-1 text-sm space-y-2 bg-white shadow-sm flex-1"
              >
                <Link href={item.url}>
                <h3 className="font-semibold text-md uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
                <p className="text-gray-600 hover:underline">Read more</p>
                </Link>
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
