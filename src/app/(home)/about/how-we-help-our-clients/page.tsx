
import AboutHero from "@/sections/AboutHero";
import Deals from "@/sections/Deals";
import FAQ from "@/app/(home)/faqs/page";
import Image from "next/image";
import AboutHelpHero from "@/sections/AboutHelpHero";

export const metadata = {
  title: "How We Help Our Clients - RG Creations Nepal ",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};

const howWeHelpItems = [
  {
    number: "01",
    title: "Understanding Your Vision",
    description:
      "We begin by listening—deeply. We take the time to understand your goals, brand identity, target audience, and site potential. This foundation allows us to tailor every design decision specifically to your needs.",
  },
  {
    number: "02",
    title: "Delivering Innovative, Bespoke Designs",
    description:
      "No two clients are alike, so neither are our designs. We craft unique, creative spaces that blend aesthetics with functionality, ensuring your venue stands out while meeting operational demands.",
  },
  {
    number: "03",
    title: "Seamless Project Management",
    description:
      "From concept to completion, we coordinate every detail—architecture, interiors, engineering, acoustics, lighting, and more. Our integrated approach ensures efficiency, on-time delivery, and budget adherence.",
  },
  {
    number: "04",
    title: "Enhancing Guest Experience",
    description:
      "We design with your audience in mind. Through smart layouts, immersive acoustics, and atmospheric lighting, we create spaces that engage visitors and encourage repeat business.",
  },
  {
    number: "05",
    title: "Prioritizing Sustainability",
    description:
      "We help you reduce environmental impact by integrating energy-efficient systems, eco-friendly materials, and smart design strategies that lower costs and support responsible growth.",
  },
  {
    number: "06",
    title: "Leveraging Global Expertise with Local Insight",
    description:
      "With our international research hub and sourcing capabilities, we bring cutting-edge materials, technologies, and design trends from around the world—while respecting and reflecting Nepal’s unique cultural context.",
  },
  {
    number: "07",
    title: "Building Long-Term Partnerships",
    description:
      "Our commitment doesn’t end with project delivery. We provide ongoing support, advice, and collaboration to help your space evolve and thrive over time.",
  },
];
export default function Home() {
  return (
    <main className="overflow-hidden">
      <AboutHelpHero/>
      <section className="px-6 py-12 md:px-20 md:py-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Help Our Clients
            </h2>
            <p className="text-gray-700 text-sm mb-8 max-w-2xl">
              At RG Creations Pvt. Ltd., our goal is to turn your vision into
              reality by delivering architectural and design solutions that
              inspire, perform, and create lasting value. Here’s how we partner
              with our clients to make every project a success:
            </p>

            <div className="space-y-6">
              {howWeHelpItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-[#133950] text-white font-semibold px-3 py-1  text-sm min-w-[32px] text-center">
                    {item.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-2 pl-6">
            <div className="flex flex-col gap-4 ">
              <Image
                src="/ImageVideo/image7.jpg"
                alt=" Image 1"
                width={310}
                height={300}
                className="object-cover"
              />
              <Image
                src="/ImageVideo/image4.jpg"
                alt=" Image 2"
                width={310}
                height={300}
                className=""
              />
              
            </div>
            <div className="flex flex-col gap-4">
              <Image
                src="/ImageVideo/image3.jpg"
                alt=" Image 3"
                width={310}
                height={300}
                className=""
              />
              <Image
                src="/ImageVideo/image6.jpg"
                alt=" Image 4"
                width={310}
                height={300}
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Deals />
    </main>
  );
}
