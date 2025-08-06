import React from 'react'

import Image from 'next/image';
import { FaWhatsapp, FaFacebook , FaTwitter } from "react-icons/fa";


export const metadata = {
  title: "RG Creations | Innovation in nightlife architecture",
  description:
    "RG Creations is revolutionizing hospitality and nightlife design through culturally relevant, their projects are shaping the future spaces.",
};

const page = () => {

  return (
     <div className="min-h-screen  overflow-hidden">
          
          <div className='bg-[#133950] h-28 w-full'></div>
          
          <div className="container mx-auto px-4 py-8 ">

            <div className="grid grid-cols-1 lg:grid-cols-6">

              {/* Main Content */}
              <div className="lg:col-span-4">
                <article className="bg-white rounded-lg shadow-sm p-8">
                  {/* <p className="text-3xl font-bold text-darkGreen mb-6">
                    10 Best Rescue Knives You Can Buy in 2024
                  </p> */}
    
                  {/* Featured Image */}
                  {/* <div className="mb-8">
                    <img
                      src={blacksmith.src}
                      alt="Hands using a rescue knife on wood"
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </div> */}
    
                  {/* Article Content */}


                  <div className="prose prose-lg max-w-none">
                    
                    <div>
                        <h1 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                      
                        RG Creations Nepal driving innovation in hospitality and nightlife architecture
                        </h1>
                        <div className='flex justify-between pb-10'>
                            <div>
                                <p className='text-lg font-semibold'>Aarthiknews</p>
                                <p>June 28, 2025</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full h-64 lg:h-[500px] lg:w-full relative mb-12">
                    <Image
                        src="/media3.webp"        // Your image path (public folder or remote)
                        alt="Nepal driving innovation in hospitality and nightlife architecture" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    </div>



                    <p className="text-gray-700 leading-relaxed mb-6">
                      KATHMANDU, JUNE 28:  RG Creations Nepal, an architectural and interior design firm based in Baluwatar, Kathmandu, is gaining attention for its growing influence in Nepal’s hospitality and nightlife sectors. With over 15 years of industry experience and a portfolio exceeding 30 projects, the company is redefining the design and functionality of nightclubs, pubs, lounges, boutique hotels, and event venues.
                    </p>
    
                    <p className="text-gray-700 leading-relaxed mb-6">
                    The firm operates with a 360-degree project approach, involving a multidisciplinary team of architects, interior designers, engineers, acousticians, and lighting specialists. RG Creations is also supported by an international sourcing and research hub, Link World Tech, located in Shenzhen, China.
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       According to Executive Chairman Ram Giri, RG Creations focuses on blending innovation, cost-efficiency, and cultural relevance. “We don’t just build spaces; we create lasting impressions,” Giri said, emphasizing the firm’s commitment to both aesthetics and functionality.
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        The company has completed several prominent projects in Kathmandu, Pokhara, Dharan, and Itahari, including Deja Vu, Victory Lounge, Full Moon, Faces Lounge, and Rokers Magic. It has also delivered premium venues such as Rambagh Mahal, Majestic Grand, Harshah Batika, Taj Reception, Imperial Banquet, Boudha Heritage, and Royal Empire Boutique Hotel.                  
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       One of the firm is ongoing projects is the Legend Nepal Club in Lazimpat, Kathmandu, initiated by entrepreneur Ramesh Karki. Initially exploring foreign designers for the project, Karki later awarded the contract to RG Creations after being introduced to its capabilities and approach.                 
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       Director Sumitra Paudel Upreti stated that the company prioritizes long-term impact over short-term profit. “Our goal is not just to complete a project but to deliver something memorable and meaningful for every client,” she said.                
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        RG Creations is also contributing to workforce development in Nepal, employing over 200 individuals across technical and creative disciplines. The company regularly provides international exposure and internal training to its staff, aiming to maintain global standards in design and execution.
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        With Nepal witnessing a rise in tourism infrastructure and urban development, RG Creations is positioning itself as a key player in shaping the future of hospitality design in the region.
                     </p>
                    
    
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="lg:flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {/* <span className="text-sm text-gray-600">Joanna Wellick</span> */}
                         <span className=" text-[#133950]">Source:</span>
                        <a
                            href="https://english.aarthiknews.com/news/detail/18496/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-blue-600 hover:text-blue-400"
                            >
                            https://english.aarthiknews.com/news/detail/18496/
                            </a>
                            
                      </div>
                      <div className="flex items-center space-x-4">
                        
                        <div className="flex space-x-2">
                          {/* Facebook Share */}
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                              "https://www.rgcreationsnepal.com/blogs/media-coverage/media3"
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
                          >
                            <FaFacebook className="text-white text-xs" />
                          </a>

                          {/* Twitter Share */}
                          <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                              "https://www.rgcreationsnepal.com/blogs/media-coverage/media3"
                            )}&text=${encodeURIComponent(
                              "Check out this article from RG Creations Nepal!"
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
                          >
                            <FaTwitter className="text-white text-xs" />
                          </a>

                          {/* WhatsApp Share */}
                          <a
                            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                              "Check out this article from RG Creations Nepal! https://www.rgcreationsnepal.com/blogs/media-coverage/media3"
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
                          >
                            <FaWhatsapp className="w-4 h-4 text-white" />
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                </article>
              </div>
    
              
            </div>
           
          </div>
        </div>
  )
}

export default page