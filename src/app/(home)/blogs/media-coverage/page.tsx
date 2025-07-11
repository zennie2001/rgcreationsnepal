import MediaHero from '@/sections/MediaHero'
import Link from 'next/link';
import React from 'react'
import { FiChevronDown } from "react-icons/fi";


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


const page = () => {
  return (
    <div className='overflow-hidden mb-20'>

    <MediaHero />

     {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-12 px-10 pt-16 mb-12">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                MEDIA COVERAGE
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
           
            <Link href={'/blogs/media-coverage/media1'}>
              <article  className="group cursor-pointer h-full lg:h-[500px]">
                <div className="relative rounded-sm h-full">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>
    
                  {/* Image */}
                  <img
                    src='/media1.jpg'
                    alt='blog image'
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
                   
                    <div className="lg:border-[16px] lg:border-[#133950] py-6 lg:pl-6  lg:pr-6 pr-1 ">
                      <h3 className="text-2xl font-bold leading-tight mb-4">
                        RG Creations Nepal Leads Architectural Innovation in Hospitality Design
                      </h3>
                      <p className="text-sm opacity-90 leading-relaxed mb-4 text-end">
                        June 27, 2025
                      </p>

                      <p className="text-sm opacity-90 leading-relaxed mb-4 ">
                        With 15 years of service in Nepal’s hospitality sector, RG Creations has established itself as a specialist in the design, construction, and operation of premium outlets. <span className='hidden lg:block'>We offer exceptional design solutions tailored to investors’ budgets.</span>
                      </p>
                      <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                        READ MORE
                      </button>
                    </div>
                  </div>
                 
                </div>
              </article>
            </Link>
    
               <Link href={'/blogs/media-coverage/media2'}>
              <article  className="group cursor-pointer h-full">
                <div className="relative rounded-sm h-full">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>
    
                  {/* Image */}
                  <img
                    src='/media2.jpeg'
                    alt='blog'
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
                   
                    <div className="lg:border-[16px] lg:border-[#133950] py-6 lg:pl-6  lg:pr-6 pr-1 ">
                      <h3 className="text-2xl font-bold leading-tight mb-4">
                        RG Creations Nepal Takes The Lead In Architectural Innovation And Hospitality Design
                      </h3>
                       <p className="text-sm opacity-90 leading-relaxed mb-4 text-end">
                        June 27, 2025
                      </p>
                      <p className="text-sm  opacity-90 leading-relaxed mb-4">
                         RG Creations Nepal is rapidly emerging as a trailblazer in Nepal’s architecture and design scene, particularly within the hospitality and nightlife sectors.<span className='hidden lg:block'>With over 15 years of hands-on industry experience and a portfolio of more than 30 recognized, standout projects</span>
    
                      </p>
                      <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                        READ MORE
                      </button>
                    </div>
                  </div>
                 
                </div>
              </article>
              </Link>
    
               <Link href={'/blogs/media-coverage/media3'}>
              <article  className="group cursor-pointer h-full">
                <div className="relative rounded-sm h-full">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>
    
                  {/* Image */}
                  <img
                    src='/media3.webp'
                    alt='blog'
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
                   
                    <div className="lg:border-[16px] lg:border-[#133950] py-6 lg:pl-6  lg:pr-6 pr-1 ">
                      <h3 className="text-2xl font-bold leading-tight mb-4">
                        RG Creations Nepal driving innovation in hospitality and nightlife architecture
                      </h3>
                      <p className="text-sm opacity-90 leading-relaxed mb-4 text-end">
                        June 28, 2025
                      </p>
                      <p className="text-sm opacity-90 leading-relaxed mb-4">
                        With over 15 years of industry experience and a portfolio exceeding 30 projects, the company is redefining the design and functionality of nightclubs, pubs, lounges, boutique hotels, and event venues.<span className='hiiden lg:block'>The firm operates with a 360-degree project approach.</span>
    
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
    </div>
  )
}

export default page