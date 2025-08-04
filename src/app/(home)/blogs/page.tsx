

import Link from "next/link";
import React from "react";
import BlogHero from "@/sections/BlogHero";
import Script from "next/script";

export const metadata = {
  title: "Blogs | Leading Construction Company Nepal",
  description:
    "Explore insightful articles and updates from RG Creations Nepal on construction trends, architecture innovations, hospitality design, and project highlights across Nepal.",
};


// const blogs = [
//   {
//     id: 1,
//     title: "RG Creations Nepal Pvt Ltd – The Leading Architecture and Construction Company in Nepal",
//     description:
//       "RG Creations has earned a reputation as one of the best architecture and construction companies in Nepal.",
//     category: "ARCHITECTURE",
//     image: "/blog (2).jpg",
//     date: "10 AUG 2023",
//     path: "/blogs/details"
//   },
//   {
//     id: 2,
//     title: "Transforming Nightlife: Our Journey Designing One of the World’s Top 40 Nightclubs – Dejavu Club Nepal",
//     description:
//       "We proudly undertook this challenge while designing Dejavu Club, which has now earned recognition as one of the world’s top 40 nightclubs.",
//     category: "DESIGN",
//     image: "/blog (2).jpg",
//     date: "12 AUG 2023",
//   },
//   {
//     id: 3,
//     title: "Nepal’s Best Premium Construction Company: Delivering Excellence for Budget-Savvy and Luxury Clients",
//     description:
//       "We pride ourselves on being Nepal’s best premium construction company, delivering excellence to both budget-savvy and luxury clients.",
//     category: "LIFESTYLE",
//     image: "/blog (2).jpg",
//     date: "15 AUG 2023",
//   },
  
// ];

function Blog() {
  return (
    <>
      <Script
      id="blogs-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "url": "https://www.rgcreationsnepal.com/blogs",
          "name": "Blogs - RG Creations Nepal Pvt. Ltd.",
          "description": "Explore the latest insights, news, and updates on architecture, construction, design, and sustainability by RG Creations Nepal Pvt. Ltd.",
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
    <main className="overflow-hidden mb-16">
      <BlogHero />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-12 px-10 pt-16 mb-12">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333d49] mb-2">
            NEWS & UPDATES
          </h2>
          <div className="w-16 h-1 bg-[#133950]"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">Showing 1-7 Blogs</span>
          {/* <p className="flex items-center gap-1">
            Sort by:
            <span className="text-[#002C6D] flex items-center gap-1">
              Most Recent <FiChevronDown />
            </span>
          </p> */}
        </div>
      </div>

      {/* Blog Cards */}
      
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 px-10 lg:px-12">

        <article  className="group cursor-pointer h-full lg:h-[500px]">
            <div className="relative rounded-sm h-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>

              {/* Image */}
              <img
                src='/rg-logo-frame.jpg'
                alt='The Leading Architecture and Construction Company'
                className="
                  w-[276.6946105957031px] h-[439px]
                  sm:w-[276.6946105957031px] sm:h-[439px]
                  md:w-full md:h-full
                  mx-auto
                  object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                "
              />

              {/* Overlay Content */}
              
              <div className="absolute top-1/2  left-16 transform -translate-y-1/2 text-white rounded-sm max-w-md z-20">
               
                <div className="lg:border-[16px] border-[#133950] py-6 lg:pl-6  lg:pr-6 pr-1 ">
                  <Link href={'/blogs/kathmandus-best-architect-company'}>
                  <h3 className="text-2xl font-bold  leading-tight mb-4">
                   RG Creations Nepal – The Number 1 Architecture Company in Nepal (2025)

                  </h3>
                  </Link>
                  <p className="text-sm hidden lg:block pb-4  opacity-90 leading-relaxed mb-4">
                      When it comes to visionary architecture, timeless design, and precision-led construction services, RG Creations Nepal proudly stands as the number 1 architect company in Nepal. Headquartered in Kathmandu, this award-winning firm is widely regarded as Kathmandu’s best architect company.

                  </p>
                  <Link href={'/blogs/kathmandus-best-architect-company'}>
                  <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                    READ MORE
                  </button>
                  </Link>
                </div>
              </div>
             
            </div>
          </article>

         <article  className="group cursor-pointer h-full lg:h-[500px]">
            <div className="relative rounded-sm h-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>

              {/* Image */}
              <img
                src='/service-hero.jpg'
                alt='The Leading Architecture and Construction Company'
                className="
                  w-[276.6946105957031px] h-[439px]
                  sm:w-[276.6946105957031px] sm:h-[439px]
                  md:w-full md:h-full
                  mx-auto
                  object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                "
              />

              {/* Overlay Content */}
              
              <div className="absolute top-1/2  left-16 transform -translate-y-1/2 text-white rounded-sm max-w-md z-20">
               
                <div className="lg:border-[16px] border-[#133950] py-6 lg:pl-6  lg:pr-6 pr-1 ">
                  <Link href={'/blogs/top-rg-creations-building-nepals-future'}>
                  <h3 className="text-2xl font-bold  leading-tight mb-4">
                   Building Nepal&apos;s Future: Exploring Architecture, Nightclub Design, and Hospitality Construction
                  </h3>
                  </Link>
                  <p className="text-sm hidden lg:block pb-4  opacity-90 leading-relaxed mb-4">
                      Architecture in Nepal has evolved significantly in recent years. While the country&apos;s architectural history is rooted in its centuries-old temples, stupas, and traditional Newari houses, the present-day scene is influenced by minimalist, eco-friendly, and tech-enabled design philosophies.
                  </p>
                  <Link href={'/blogs/top-rg-creations-building-nepals-future'}>
                  <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                    READ MORE
                  </button>
                  </Link>
                </div>
              </div>
             
            </div>
          </article>
        
       
        
          <article  className="group cursor-pointer h-full lg:h-[500px]">
            <div className="relative rounded-sm h-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>

              {/* Image */}
              <img
                src='/about/rgcreations1(1).jpg'
                alt='The Leading Architecture and Construction Company'
                className="
                  w-[276.6946105957031px] h-[439px]
                  sm:w-[276.6946105957031px] sm:h-[439px]
                  md:w-full md:h-full
                  mx-auto
                  object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                "
              />

              {/* Overlay Content */}
              
              <div className="absolute top-1/2  left-16 transform -translate-y-1/2 text-white rounded-sm max-w-md z-20">
               
                <div className="lg:border-[16px] border-[#133950] py-6 lg:pl-6  lg:pr-6 pr-1 ">
                  <Link href={'/blogs/top-rg-creations-nepal-the-leading-architecture'}>
                  <h3 className="text-2xl font-bold  leading-tight mb-4">
                    RG Creations Nepal Pvt Ltd – The Leading Architecture and Construction Company in Nepal
                  </h3>
                  </Link>
                  <p className="text-sm hidden lg:block pb-4  opacity-90 leading-relaxed mb-4">
                      RG Creations Nepal Pvt Ltd stands as a beacon of excellence in this evolving market. With a commitment to delivering cutting-edge designs and superior construction solutions, RG Creations has earned a reputation as one of the best architecture and construction companies in Nepal.
                  </p>
                  <Link href={'/blogs/top-rg-creations-nepal-the-leading-architecture'}>
                  <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                    READ MORE
                  </button>
                  </Link>
                </div>
              </div>
             
            </div>
          </article>
        

           
          <article  className="group cursor-pointer h-full">
            <div className="relative rounded-sm h-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>

              {/* Image */}
              <img
                src='/about/news3.jpg'
                alt='Transforming Nightlife: The World’s Top 40 Nightclubs'
                className="
                  w-[276.6946105957031px] h-[439px]
                  sm:w-[276.6946105957031px] sm:h-[439px]
                  md:w-full md:h-full
                  mx-auto
                  object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                "
              />

              {/* Overlay Content */}
              
              <div className="absolute top-1/2  left-16 transform -translate-y-1/2 text-white rounded-sm max-w-md z-20">
               
                <div className="lg:border-[16px] border-[#133950] py-6 lg:pl-6  lg:pr-6 pr-1 ">
                  <Link href={'/blogs/top-transforming-nightlife-our-journey'}>
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                    Transforming Nightlife: Our Journey Designing One of the World’s Top 40 Nightclubs – Dejavu Club Nepal
                  </h3>
                  </Link>
                  <p className="text-sm hidden lg:block pb-4  opacity-90 leading-relaxed mb-4">
                      we share the journey behind the creation of Dejavu Club—a masterpiece of nightclub design that has transformed Nepal’s nightlife scene and placed it firmly on the international map. From concept development to the final execution, discover how our team blended innovative interior design.

                  </p>
                  <Link href={'/blogs/top-transforming-nightlife-our-journey'}>
                  <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                    READ MORE
                  </button>
                  </Link>
                </div>
              </div>
             
            </div>
          </article>
          

           
          <article  className="group cursor-pointer h-full">
            <div className="relative rounded-sm h-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>

              {/* Image */}
              <img
                src='/about/news2.jpg'
                alt='Nepal’s Best Premium Construction Company'
                className="
                  w-[276.6946105957031px] h-[439px]
                  sm:w-[276.6946105957031px] sm:h-[439px]
                  md:w-full md:h-full
                  mx-auto
                  object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                "
              />

              {/* Overlay Content */}
              
              <div className="absolute top-1/2  left-16 transform -translate-y-1/2 text-white rounded-sm max-w-md z-20">
               
                <div className="lg:border-[16px] border-[#133950] py-6 lg:pl-6  lg:pr-6 pr-1 ">
                  <Link href={'/blogs/top-nepals-best-premium-construction-company'}>
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                    Nepal’s Best Premium Construction Company: Delivering Excellence for Budget-Savvy 
                  </h3>
                  </Link>
                  <p className="text-sm hidden lg:block pb-4  opacity-90 leading-relaxed mb-4">
                    We pride ourselves on being Nepal’s best premium construction company, delivering excellence to both budget-savvy and luxury clients. This comprehensive article explores how RG Creations balances quality and affordability, our approach to construction.

                  </p>
                  <Link href={'/blogs/top-nepals-best-premium-construction-company'}>
                  <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                    READ MORE
                  </button>
                  </Link>
                </div>
              </div>

              
             


             
            </div>
          </article>

           <article  className="group cursor-pointer h-full lg:h-[500px]" >
            <div className="relative rounded-sm h-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>

              {/* Image */}
              <img
                src='/about/residential.jpg'
                alt='Nepal’s Best Premium Construction Company'
                className="
                  w-[276.6946105957031px] h-[439px]
                  sm:w-[276.6946105957031px] sm:h-[439px]
                  md:w-full md:h-full
                  mx-auto
                  object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                "
              />

              {/* Overlay Content */}
              
             <div className="absolute top-1/2  left-16 transform -translate-y-1/2 text-white rounded-sm max-w-md z-20">
               
                <div className="lg:border-[16px] border-[#133950] py-6 lg:pl-6  lg:pr-6 pr-1 ">
                  <Link href={'/blogs/how-to-choose-best-architect-in-nepal'}>
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                    How to Choose the Best Architect in Nepal for Your Dream Project?
                  </h3>
                  </Link>
                  <p className="text-sm hidden lg:block pb-4  opacity-90 leading-relaxed mb-4">
                    Nepal has witnessed a growing demand for innovative and sustainable architecture over the last decade. From traditional Newari craftsmanship to cutting-edge contemporary designs, today’s top Nepali architects are reshaping skylines with thoughtful, client-centered approaches.

                  </p>
                  <Link href={'/blogs/how-to-choose-best-architect-in-nepal'}>
                  <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                    READ MORE
                  </button>
                  </Link>
                </div>
              </div> 
            </div>
          </article>

          <article  className="group cursor-pointer h-full lg:h-[500px]" >
            <div className="relative rounded-sm h-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>

              {/* Image */}
              <img
                src='/about/nightclub.jpg'
                alt='Nepal’s Best Premium Construction Company'
                className="
                  w-[276.6946105957031px] h-[439px]
                  sm:w-[276.6946105957031px] sm:h-[439px]
                  md:w-full md:h-full
                  mx-auto
                  object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                "
              />

              {/* Overlay Content */}
              
             <div className="absolute top-1/2  left-16 transform -translate-y-1/2 text-white rounded-sm max-w-md z-20">
               
                <div className="lg:border-[16px] border-[#133950] py-6 lg:pl-6  lg:pr-6 pr-1 ">
                   <Link href={'/blogs/the-ultimate-guide-to-nightclub-design'}>
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                   The Ultimate Guide to Nightclub Design, Construction, and Equipment Supply in Nepal
                  </h3>
                  </Link>
                  <p className="text-sm hidden lg:block pb-4  opacity-90 leading-relaxed mb-4">
                    The nightlife scene in Nepal—especially in cities like Kathmandu, Pokhara, and Itahari—is rapidly evolving, with an increasing demand for immersive nightclub experiences. Whether you're an investor, entrepreneur, or hospitality brand.

                  </p>
                  <Link href={'/blogs/the-ultimate-guide-to-nightclub-design'}>
                  <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                    READ MORE
                  </button>
                  </Link>
                </div>
              </div> 
            </div>
          </article>

            <article  className="group cursor-pointer h-full lg:h-[500px]" >
            <div className="relative rounded-sm h-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>

              {/* Image */}
              <img
                src='/GalleryHero.jpg'
                alt='Nepal’s Best Premium Construction Company'
                className="
                  w-[276.6946105957031px] h-[439px]
                  sm:w-[276.6946105957031px] sm:h-[439px]
                  md:w-full md:h-full
                  mx-auto
                  object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                "
              />

              {/* Overlay Content */}
              
             <div className="absolute top-1/2  left-16 transform -translate-y-1/2 text-white rounded-sm max-w-md z-20">
               
                <div className="lg:border-[16px] border-[#133950] py-6 lg:pl-6  lg:pr-6 pr-1 ">
                  <Link href={'/blogs/quality-construction-for-residential'}>
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                   Building Dreams: Nepal’s Leading Luxury Residential and Premium Villa Construction Experts
                  </h3>
                  </Link>
                  <p className="text-sm hidden lg:block pb-4  opacity-90 leading-relaxed mb-4">
                    Nepal has seen a significant rise in demand for luxurious residential properties and premium villas. As urbanization expands and high-net-worth individuals seek quality living spaces that combine aesthetic beauty, functionality, and exclusivity

                  </p>
                  <Link href={'/blogs/quality-construction-for-residential'}>
                  <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                    READ MORE
                  </button>
                  </Link>
                </div>
              </div> 
            </div>
          </article>

            <article  className="group cursor-pointer h-full lg:h-[500px]" >
            <div className="relative rounded-sm h-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>

              {/* Image */}
              <img
                src='/ImageVideo/1(10).jpg'
                alt='Nepal’s Best Premium Construction Company'
                className="
                  w-[276.6946105957031px] h-[439px]
                  sm:w-[276.6946105957031px] sm:h-[439px]
                  md:w-full md:h-full
                  mx-auto
                  object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                "
              />

              {/* Overlay Content */}
              
             <div className="absolute top-1/2  left-16 transform -translate-y-1/2 text-white rounded-sm max-w-md z-20">
               
                <div className="lg:border-[16px] border-[#133950] py-6 lg:pl-6  lg:pr-6 pr-1 ">
                  <Link href={'/blogs/transform-your-land-into-profitable-banquet-hall'}>
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                   Transform Your Land into a Profitable Banquet Hall Business – We Build, Lease, or Partner
                  </h3>
                  </Link>
                  <p className="text-sm hidden lg:block pb-4  opacity-90 leading-relaxed mb-4">
                    In today’s fast-growing hospitality and event management industry, banquet halls are in constant demand. From weddings and birthdays to corporate functions and high-end social events, venues that offer luxury, convenience, and ample space are highly sought after.

                  </p>
                  <Link href={'/blogs/transform-your-land-into-profitable-banquet-hall'}>
                  <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                    READ MORE
                  </button>
                  </Link>
                </div>
              </div> 
            </div>
          </article>


            <article  className="group cursor-pointer h-full lg:h-[500px]" >
            <div className="relative rounded-sm h-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>

              {/* Image */}
              <img
                src='/royal.jpg'
                alt='Nepal’s Best Premium Construction Company'
                className="
                  w-[276.6946105957031px] h-[439px]
                  sm:w-[276.6946105957031px] sm:h-[439px]
                  md:w-full md:h-full
                  mx-auto
                  object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                "
              />

              {/* Overlay Content */}
              
             <div className="absolute top-1/2  left-16 transform -translate-y-1/2 text-white rounded-sm max-w-md z-20">
               
                <div className="lg:border-[16px] border-[#133950] py-6 lg:pl-6  lg:pr-6 pr-1 ">
                  <Link href={'/blogs/how-rg-creations-shaping-nepals-future'}>
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                   How RG Creations is Shaping Nepal’s Future through Employment, Training & Sustainable Growth
                  </h3>
                  </Link>
                  <p className="text-sm hidden lg:block pb-4  opacity-90 leading-relaxed mb-4">
                    In a country where economic migration has long been the default path for many young Nepalis, RG Creations Pvt. Ltd. is breaking the cycle by creating real opportunities — right here at home. One of Nepal’s leading premium construction and turnkey solution providers.


                  </p>
                  <Link href={'/blogs/how-rg-creations-shaping-nepals-future'}>
                  <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                    READ MORE
                  </button>
                  </Link>
                </div>
              </div> 
            </div>
          </article>


           
          
       
      </div>
      
    </main>
    </>
  );
}

export default Blog;
