

import Deals from "@/sections/Deals";
import FAQ from "@/app/(home)/faqs/page";
import Image from "next/image";
import AboutusHero from "@/sections/AboutusHero";
import Script from "next/script";



export const metadata = {
  title: "About Us | Top Architecture Firm Nepal | RG Creations",
  description:
    "Discover RG Creations, a top architecture firm in Nepal delivering innovative design and expert construction services across residential and commercial projects.",
};

export default function Home() {
  return (
    <>
    <Script
  id="about-page-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "RG Creations Nepal Pvt. Ltd.",
        "url": "https://www.rgcreationsnepal.com",
        "logo": "https://www.rgcreationsnepal.com/logo.png",
        "description":
          "RG Creations Nepal Pvt. Ltd. is a premier architecture and design firm based in Kathmandu, Nepal, dedicated to excellence, sustainability, and creativity in architectural solutions for hospitality, commercial, and residential projects.",
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
        "email": "info@rgcreationsnepal.com"
      },
      "url": "https://www.rgcreationsnepal.com/about/about-us",
      "name": "About Us - RG Creations Nepal Pvt. Ltd.",
      "description":
        "Learn about RG Creations Nepal Pvt. Ltd., our mission, expertise, and commitment to delivering excellence in architecture and design in Nepal.",
      "keywords": [
        "Best architecture company Nepal",
        "Top architecture company Nepal",
        "Premium architecture company Nepal",
        "Elegant architecture company Nepal",
        "Highly recommended architecture company Nepal",
        "Nepal’s leading architecture company Nepal",
        "Kathmandu’s top architecture company Nepal",
        "Award-winning architecture company Nepal",
        "Trusted architecture company Nepal",
        "Best banquet design company Nepal",
        "Top banquet design company Nepal",
        "Premium banquet design company Nepal",
        "Elegant banquet design company Nepal",
        "Famous banquet design company Nepal",
        "Most rated banquet design company Nepal",
        "Highly recommended banquet design company Nepal",
        "Nepal’s leading banquet design company Nepal",
        "Kathmandu’s top banquet design company Nepal",
        "Visionary banquet design company Nepal",
        "Award-winning banquet design company Nepal",
        "Trusted banquet design company Nepal",
        "Best nightclub design company Nepal",
        "Top nightclub design company Nepal",
        "Premium nightclub design company Nepal",
        "Elegant nightclub design company Nepal",
        "Famous nightclub design company Nepal",
        "Renowned nightclub design company Nepal",
        "Most recommended nightclub design company Nepal",
        "Highly preferred nightclub design company Nepal",
        "Nepal’s leading nightclub design company Nepal",
        "Iconic banquet design company Nepal",
        "Iconic nightclub design company Nepal",
        "Kathmandu’s top nightclub design company Nepal",
        "Visionary nightclub design company Nepal",
        "Award-winning nightclub design company Nepal",
        "Trusted nightclub design company Nepal",
        "Neoclassical architectural firm Nepal",
        "Creative resort master planning Nepal",
        "Resort and hotel architecture expert Nepal",
        "Architectural planning for entertainment venues Nepal",
        "Top architecture studio for hospitality Nepal",
        "Best architectural firm in Kathmandu Nepal",
        "Top-rated architecture company Nepal",
        "Nepal’s famous banquet planners Nepal",
        "Nightclub interior design Nepal",
        "Bar and pub design Nepal",
        "Banquet hall architectural services Nepal",
        "Nightclub design Kathmandu Nepal",
        "Banquet hall architects Nepal",
        "Top architectural firms Kathmandu Nepal",
        "Sustainable architecture services Nepal",
        "Interior architecture for hospitality Nepal",
        "Resort development planning Nepal",
        "Architectural design services Nepal",
        "Interior design Nepal",
        "Architectural firm near me Nepal",
        "World-class architectural firm Nepal",
        "Sustainable architecture for hotels Nepal",
        "Customized architectural solutions Nepal",
        "Architecture with purpose and soul Nepal",
        "Kathmandu resort architect near me Nepal",
        "Hospitality design consultants Nepal",
        "Hospitality architects Nepal",
        "Resort design Kathmandu Nepal",
        "Luxury resort architects Nepal",
        "Landscape architecture for resorts Nepal",
        "3D architectural visualization Nepal",
        "Architectural project management Nepal",
        "Custom architectural design Nepal",
        "Architectural renovation services Nepal",
        "LEED-certified architectural firm Nepal",
        "Hospitality construction companies Nepal",
        "Design-build firms for hotels Nepal",
        "Commercial construction services Nepal",
        "Turnkey construction solutions Nepal",
        "Construction project management Nepal",
        "Building permit assistance Nepal",
        "Structural engineering services Nepal",
        "Modern architecture Nepal",
        "Sustainable architecture Nepal",
        "Building design Nepal",
        "Construction management Nepal",
        "Famous architecture company Nepal",
        "Renowned architecture company Nepal",
        "Most rated architecture company Nepal",
        "Highly preferred architecture company Nepal",
        "Visionary architecture company Nepal",
        "Iconic architecture company Nepal",
        "Master architect Nepal",
        "Innovative design Nepal",
        "Elite architecture firm Nepal",
        "Luxury construction experts Nepal",
        "Innovative architectural firm Nepal",
        "Construction consultant for hospitality Nepal",
        "Turnkey banquet construction Nepal",
        "Iconic club design Nepal",
        "Premium hospitality infrastructure Nepal",
        "Hotel architecture services Nepal",
        "Resort architectural design Nepal",
        "Luxury hotel design Nepal",
        "Boutique hotel architecture Nepal",
        "Eco-friendly resort design Nepal",
        "Casino architectural planning Nepal",
        "Architectural firms in Kathmandu Nepal",
        "Hotel architects in Nepal Nepal"
      ]
    })
  }}
/>


    <main className="overflow-hidden">
      <AboutusHero />
      <section className="bg-[#f6f7f8] py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative w-full  md:w-[50%]  md:ms-60 h-[500px]">
            {/* Decorative Border Box */}
            <div className="absolute top-8 right-14 w-full h-full border-8 border-[#133950] z-0" />
            {/* Main Image */}
            <div className="relative z-10 w-full h-full overflow-hidden ">
              <Image
                src="/about-us.jpg" // Replace with your image path
                alt="Innovative Architecture"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-gray-800 ">
            <p className="uppercase text-sm tracking-wide mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl text-[#333d49] font-bold mb-4 leading-tight">
              Our Designing Dreams. Building Futures. Innovative Architecture. Strategic Execution.
            </h2>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed text-justify">
              <span className="font-semibold text-[#333d49]  block mb-2">

                RG Creations is a comprehensive architecture, construction, and material supply company headquartered in Baluwatar, Kathmandu, Nepal. With an international sourcing and R&D hub- Link World Tech in Shenzhen, China- we bring global innovation and materials into locally grounded design and construction practices.

              </span>
              Our work is deeply personalized. Every project is custom-tailored to reflect the investor’s vision, respond to the psychology of the intended users, and harness the full potential of the site. From concept to completion, we create environments that are both purposeful and inspiring. <br />
              <br />
             We offer end-to-end expertise across architectural design, master planning, interior design, structural engineering, and full MEP (mechanical, electrical, and plumbing) systems. In addition, we excel in lighting design, acoustics, landscaping, BIM modeling, and high-fidelity 3D visualization.
             <br/>
             <br/>
             Our support services include in-house legal advisory, digital marketing and branding for real estate ventures, sustainability consulting, and total project management. With our own material sourcing and logistics chain, we ensure quality, timely procurement and cost efficiency across all projects.
             <br/>
             <br/>
             At the heart of RG Creations is Ram Giri, a visionary founder whose leadership bridges creative foresight and business execution. Under his guidance, the company continues to shape spaces that inspire, function and endure.

            </p>

            {/* <a
              href="#"
              className="inline-block bg-emerald-900 text-white text-sm tracking-wide px-6 py-3 rounded-md hover:bg-emerald-800 transition"
            >
              READ MORE
            </a> */}
          </div>
        </div>
      </section>
      <div className="w-full bg-white py-16 px-4 md:px-10 lg:px-20 space-y-16 mb-40">
        {/* Vision Section */}
        <div className="relative  grid sm:grid-cols-1 md:grid-cols-2 items-center gap-6">
          <Image
            src="/about/vision.jpg" // replace with your actual image path
            alt="Vision - RG Creations Nepal"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
          <div className="absolute lg:right-36 lg:top-1/2 lg:-translate-y-1/2 bg-white p-8 shadow-lg max-w-md md:max-w-lg">
            <h2 className="text-2xl text-[#333d49] font-bold mb-4">OUR VISION</h2>
            <p className="text-sm leading-relaxed text-gray-700 text-justify">
              To become a globally recognized leader in innovative design, integrated construction and strategic business empowerment- delivering transformative spaces and solutions from research to reality. We envision a world where entrepreneurs everywhere have access to world-class environments, expert guidance and the tools to build lasting success.

            </p>
          </div>
        </div>

        <div className="relative w-full flex">
          {/* Right Half - Image with overlay */}

          {/* Text box overlaying from left inside the image half */}
          <div className="absolute lg:left-36 lg:top-1/2 lg:-translate-y-1/2 bg-black text-white p-8  shadow-lg max-w-lg z-10">
            <h2 className="text-2xl font-bold mb-4">OUR MISSION</h2>
            <p className="text-sm leading-relaxed text-justify">
              At RG Creations, our mission is to empower entrepreneurs by delivering innovative architectural design, high-quality construction services, and end-to-end material solutions. We go beyond building structures- we guide business owners with proven strategies and personalized business models to turn bold ideas into sustainable success.
            </p>
          </div>
          <div className="relative w-full flex justify-end items-center">
            {/* Image */}
            <Image
              src="/about/mission.jpg"
              alt="Mission - RG Creations Nepal"
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

    </>
    
  );
}
