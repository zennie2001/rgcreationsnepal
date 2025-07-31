

import Deals from "@/sections/Deals";
import FAQ from "@/app/(home)/faqs/page";
import AboutChairmanHero from "@/sections/AboutChairmanHero";
import Script from "next/script";

export const metadata = {
  title: "Message from Chairman | Leading Architecture Firm Nepal",
  description:"Meet the expert team behind RG Creations, a top construction company in Nepal committed to delivering quality and excellence."};


export default function Home() {
  return (
    <>
     <Script
      id="message-from-chairman-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "url": "https://www.rgcreationsnepal.com/about/message-from-chairman",
          "name": "Message from Chairman - RG Creations Nepal Pvt. Ltd.",
          "description": "Read the inspiring message from Ram Giri, Chairman of RG Creations Nepal, sharing the vision, commitment, and values driving the company’s success in architecture and construction.",
          "mainEntity": {
            "@type": "Person",
            "name": "Ram Giri",
            "jobTitle": "Chairman",
            "affiliation": {
              "@type": "Organization",
              "name": "RG Creations Nepal Pvt. Ltd.",
              "url": "https://www.rgcreationsnepal.com"
            },
            "description": "Ram Giri leads RG Creations Nepal with visionary leadership, blending creative foresight and business execution to deliver innovative architectural and construction solutions."
          },
          "publisher": {
            "@type": "Organization",
            "name": "RG Creations Nepal Pvt. Ltd.",
            "url": "https://www.rgcreationsnepal.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.rgcreationsnepal.com/logo.png"
            }
          }
        }),
      }}
    />

     <main className="overflow-hidden">
      <AboutChairmanHero />
      <div className="">
        <section className="px-8   py-12  md:py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-32 items-center">
          <div className="lg:pl-12 md:pl-12">
            <h2 className="text-2xl md:text-4xl text-[#333d49] font-bold mb-6">
              Building Beyond Structures - 
              <br className="hidden lg:block" />
              Crafting a Legacy for Nepal
            </h2>
            <p className="text-gray-700 text-base mb-4 pr-4">
              At RG Creations, we believe that architecture is not just about building structures—it’s about shaping dreams, creating meaningful experiences, and building lasting legacies. Since our inception, our mission has been to blend innovation with tradition, bringing global insights into the heart of Nepal to deliver exceptional design and construction solutions.
            </p>
            <p className="text-gray-700 text-base mb-4 pr-4">
             Our commitment is to every client’s unique vision. We strive to understand not only their goals but also the people and environment those spaces serve. This philosophy drives our personalized approach and fuels our passion for excellence across every project.
            </p>
            <p className="text-gray-700 text-base pr-4">
             With a strong foundation in research, design, engineering, and project management, combined with an integrated supply chain and cutting-edge technology, RG Creations is equipped to meet the evolving demands of today’s built environment. We are dedicated to sustainability, quality, and efficiency, ensuring every space we create is functional, beautiful, and future-ready.
            </p>
            <p className="text-gray-700 text-base pr-4">
             I am proud of the talented team we have built and the trust our clients place in us. Together, we will continue to push boundaries, set new standards, and contribute to shaping Nepal’s architectural landscape.
            </p>
            <p className="text-gray-800 text-base mt-2">
             Thank you for being part of our journey.
            </p>
          </div>

          <div className="flex flex-col w-full lg:w-[400px] h-[600px] items-center text-center pt-16 ">
            <img
              src="/about/hero-ram2 (1).jpg"
              alt="Ram Giri - RG Creations Nepal"
              className="h-[600px] w-[400px] object-cover"
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
      </div>

      <FAQ />
      <Deals />
    </main>
    </>
   
  );
}
