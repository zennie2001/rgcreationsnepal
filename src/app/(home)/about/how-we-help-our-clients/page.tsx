

import Deals from "@/sections/Deals";
import FAQ from "@/app/(home)/faqs/page";
import Image from "next/image";
import AboutHelpHero from "@/sections/AboutHelpHero";
import Script from "next/script";

export const metadata = {
  title: "How We Help Clients | Best Construction Company Nepal",
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
    <>
     <Script
      id="how-we-help-clients-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "url": "https://www.rgcreationsnepal.com/about/how-we-help",
          "name": "How We Help Clients - RG Creations Nepal Pvt. Ltd.",
          "description":
            "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
          "mainEntity": {
            "@type": "Organization",
            "name": "RG Creations Nepal Pvt. Ltd.",
            "url": "https://www.rgcreationsnepal.com",
            "logo": "https://www.rgcreationsnepal.com/logo.png",
            "email": "info@rgcreationsnepal.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Baluwatar",
              "addressLocality": "Kathmandu",
              "postalCode": "44600",
              "addressCountry": "NP"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+977-9802357231",
                "contactType": "customer service",
                "areaServed": "NP",
                "availableLanguage": ["English", "Nepali"]
              },
              {
                "@type": "ContactPoint",
                "telephone": "+977-01-4524806",
                "contactType": "office",
                "areaServed": "NP",
                "availableLanguage": ["English", "Nepali"]
              }
            ],
            "description":
              "RG Creations Nepal is a design and construction firm specializing in luxury resorts, banquet halls, clubs, and more with a commitment to client success and sustainability.",
            "foundingDate": "2016",
            "numberOfEmployees": "200+"
          },
          "keywords": [
            "Construction company Nepal",
            "Architecture services Nepal",
            "Luxury resorts design Nepal",
            "Banquet hall architecture Nepal",
            "Sustainable construction Nepal",
            "Client-centric design Nepal",
            "Project management Nepal",
            "Innovative construction Nepal",
            "Nepali construction firm",
            "Building partnerships Nepal"
          ],
          "hasPart": howWeHelpItems.map(item => ({
            "@type": "CreativeWork",
            "name": item.title,
            "description": item.description,
          }))
        }, null, 2),
      }}
    />

      <main className="overflow-hidden">
      <AboutHelpHero/>
      <section className="px-6 py-12 md:px-20 md:py-20 bg-white">
  <div className="grid md:grid-cols-2 gap-12 items-stretch">
    {/* LEFT COLUMN */}
    <div>
      <h2 className="text-3xl md:text-4xl text-[#333d49] font-bold mb-4">
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
            <div className="bg-[#133950] text-white font-semibold px-3 py-1 text-sm min-w-[32px] text-center">
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

    {/* RIGHT COLUMN */}
    <div className="h-full w-full pl-6">
      <div className="grid grid-cols-2 grid-rows-3 gap-2 h-full">
        {[
          "/2324.jpg",
          "/2224.jpg",
          "/client14.jpg",
          "/2024.jpg",
          "/about/4.jpg",
          "/client6.jpg",
          
        ].map((src, i) => (
          <div key={i} className="relative w-full h-full">
            <Image
              src={src}
              alt={`RG Creations Nepal services ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      <FAQ />
      <Deals />
    </main>
    </>
  
  );
}
