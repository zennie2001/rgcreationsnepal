
import Deals from "@/sections/Deals";
import FAQ from "@/app/(home)/faqs/page";
import Image from "next/image";
import AboutApartHero from "@/sections/AboutApartHero";
import Script from "next/script";


export const metadata = {
  title: "What Sets Us Apart | Top Architecture & Construction",
  description:
    "Discover what makes RG Creations Nepal unique — from innovative design setting new benchmarks in architecture and construction across Nepal.",
};


export default function Home() {
  return (
   <>
   <head>
      <link
        rel="canonical"
        href="https://www.rgcreationsnepal.com/about/what-sets-us-apart"
      />
    </head>

   <Script
  id="what-sets-us-apart-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "url": "https://www.rgcreationsnepal.com/about/what-sets-us-apart",
      "name": "What Sets Us Apart - RG Creations Nepal Pvt. Ltd.",
      "description": "Discover what makes RG Creations the top architecture and construction company in Nepal. From end-to-end expertise to sustainability and client collaboration, we stand apart.",
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
        "description": "RG Creations Nepal is a design and construction firm known for its innovative approach, sustainability focus, and extensive experience in hospitality and commercial architecture in Nepal.",
        "foundingDate": "2016",
        "numberOfEmployees": "200+"
      },
      "keywords": [
        "Top construction company Nepal",
        "Best architecture company Nepal",
        "Hospitality architecture Nepal",
        "Sustainable construction Nepal",
        "Commercial building design Nepal",
        "Nightlife architecture Nepal",
        "End-to-end construction service",
        "Local architects Nepal",
        "Smart building design Nepal",
        "Eco-friendly architecture Nepal"
      ],
      "hasPart": [
        {
          "@type": "CreativeWork",
          "name": "End-to-End Expertise",
          "description": "Comprehensive turnkey service across architecture, interior design, engineering, lighting, acoustics, and project management."
        },
        {
          "@type": "CreativeWork",
          "name": "Client-Centric Collaboration",
          "description": "Every design is a partnership. We tailor each space to your brand, audience, and business goals."
        },
        {
          "@type": "CreativeWork",
          "name": "Global Reach, Local Soul",
          "description": "International sourcing with cultural sensitivity and relevance to the Nepali context."
        },
        {
          "@type": "CreativeWork",
          "name": "Proven Track Record",
          "description": "30+ projects including top venues like Deja Vu, Victory Lounge, Rakers Magic, and more."
        },
        {
          "@type": "CreativeWork",
          "name": "Unmatched Industry Focus",
          "description": "Expertise in nightlife, hospitality, and commercial architecture with guest psychology at the center."
        },
        {
          "@type": "CreativeWork",
          "name": "Innovation at the Core",
          "description": "Advanced acoustics, smart lighting, sustainable design—delivering future-ready architecture."
        },
        {
          "@type": "CreativeWork",
          "name": "Sustainability by Design",
          "description": "Eco-friendly materials, energy-efficient layouts, and minimal-waste methods in all projects."
        },
        {
          "@type": "CreativeWork",
          "name": "Commitment to Local Growth",
          "description": "Empowering 200+ Nepali professionals while reducing foreign outsourcing."
        }
      ]
    })
  }}
/>


    <main className="overflow-hidden">
      <AboutApartHero />
      <section className="bg-white px-4 py-20 container md:px-0 text-gray-800">
        {/* Title and Intro */}
        <div className="mb-12 w-full flex flex-col md:flex-row justify-between gap-6">
          <h2 className="text-3xl md:text-4xl text-[#333d49] font-bold w-full md:w-1/2 mb-4">
            WHAT SETS US
            <br />
            APART
          </h2>
          <p className="text-sm text-gray-600 w-full md:w-1/2">
            At RG Creations Pvt. Ltd., we don’t follow trends—we set them.
            Here’s what makes us the preferred architectural partner for
            visionary developers, hospitality leaders, and entrepreneurs across
            Nepal and beyond:
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Left Column */}
          <div className="h-full flex flex-col justify-between">
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
                className="border-2 border-black p-4 mb-1 text-sm space-y-2 text-right bg-white shadow-sm flex-1"
              >
                <h3 className="font-semibold text-md uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
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
                className="border-2 border-black p-4 mb-1 text-sm space-y-2 bg-white shadow-sm flex-1"
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
   </>
  );
}
