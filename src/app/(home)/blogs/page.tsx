

import Link from "next/link";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import BlogHero from "@/sections/BlogHero";

export const metadata = {
  title: "Blogs | Leading Construction Company Nepal",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};

const blogs = [
  {
    id: 1,
    title: "RG Creations Nepal Pvt Ltd – The Leading Architecture and Construction Company in Nepal",
    description:
      "RG Creations has earned a reputation as one of the best architecture and construction companies in Nepal.",
    category: "ARCHITECTURE",
    image: "/blog (2).jpg",
    date: "10 AUG 2023",
    path: "/blogs/details"
  },
  {
    id: 2,
    title: "Transforming Nightlife: Our Journey Designing One of the World’s Top 40 Nightclubs – Dejavu Club Nepal",
    description:
      "We proudly undertook this challenge while designing Dejavu Club, which has now earned recognition as one of the world’s top 40 nightclubs.",
    category: "DESIGN",
    image: "/blog (2).jpg",
    date: "12 AUG 2023",
  },
  {
    id: 3,
    title: "Nepal’s Best Premium Construction Company: Delivering Excellence for Budget-Savvy and Luxury Clients",
    description:
      "We pride ourselves on being Nepal’s best premium construction company, delivering excellence to both budget-savvy and luxury clients.",
    category: "LIFESTYLE",
    image: "/blog (2).jpg",
    date: "15 AUG 2023",
  },
  
];

function Blog() {
  return (
    <main className="overflow-hidden mb-16">
      <BlogHero />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-12 px-10 pt-16 mb-12">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            NEWS & UPDATES
          </h2>
          <div className="w-16 h-1 bg-[#133950]"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">Showing 1-{blogs.length} Blogs</span>
          <p className="flex items-center gap-1">
            Sort by:
            <span className="text-[#002C6D] flex items-center gap-1">
              Most Recent <FiChevronDown />
            </span>
          </p>
        </div>
      </div>

      {/* Blog Cards */}
      
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 px-10 lg:px-12">
       
        <Link href={'/blogs/top-rg-creations-nepal-the-leading-architecture'}>
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
                  <h3 className="text-2xl font-bold  leading-tight mb-4">
                    RG Creations Nepal Pvt Ltd – The Leading Architecture and Construction Company in Nepal
                  </h3>
                  <p className="text-sm hidden lg:block pb-4  opacity-90 leading-relaxed mb-4">
                      RG Creations Nepal Pvt Ltd stands as a beacon of excellence in this evolving market. With a commitment to delivering cutting-edge designs and superior construction solutions, RG Creations has earned a reputation as one of the best architecture and construction companies in Nepal.
                  </p>
                  <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                    READ MORE
                  </button>
                </div>
              </div>
             
            </div>
          </article>
        </Link>

           <Link href={'/blogs/top-transforming-nightlife-our-journey'}>
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
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                    Transforming Nightlife: Our Journey Designing One of the World’s Top 40 Nightclubs – Dejavu Club Nepal
                  </h3>
                  <p className="text-sm hidden lg:block pb-4  opacity-90 leading-relaxed mb-4">
                      we share the journey behind the creation of Dejavu Club—a masterpiece of nightclub design that has transformed Nepal’s nightlife scene and placed it firmly on the international map. From concept development to the final execution, discover how our team blended innovative interior design.

                  </p>
                  <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                    READ MORE
                  </button>
                </div>
              </div>
             
            </div>
          </article>
          </Link>

           <Link href={'/blogs/top-nepals-best-premium-construction-company'}>
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
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                    Nepal’s Best Premium Construction Company: Delivering Excellence for Budget-Savvy 
                  </h3>
                  <p className="text-sm hidden lg:block pb-4  opacity-90 leading-relaxed mb-4">
                    We pride ourselves on being Nepal’s best premium construction company, delivering excellence to both budget-savvy and luxury clients. This comprehensive article explores how RG Creations balances quality and affordability, our approach to construction.

                  </p>
                  <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                    READ MORE
                  </button>
                </div>
              </div>
             
            </div>
          </article>
          </Link>
       
      </div>
      
    </main>
  );
}

export default Blog;
