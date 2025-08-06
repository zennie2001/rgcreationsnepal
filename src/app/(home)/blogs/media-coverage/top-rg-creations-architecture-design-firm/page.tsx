import React from 'react'

import Image from 'next/image';
import { FaWhatsapp, FaFacebook , FaTwitter } from "react-icons/fa";

export const metadata = {
  title: "RG Creations Nepal Expands Portfolio in Hospitality",
  description:
    "RG Creations Nepal is expanding its diverse portfolio with groundbreaking hospitality and architectural projects to shape future-ready spaces.",
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
                      
                        RG Creations Nepal expands portfolio in hospitality and architectural design
                        </h1>
                        <div className='flex justify-between pb-10'>
                            <div>
                                <p className='text-lg font-semibold'>Nepal News</p>
                                <p>August 1, 2025</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full h-64 lg:h-[500px] lg:w-full relative mb-12">
                    <Image
                        src="/rambagh3 (1).jpg"        // Your image path (public folder or remote)
                        alt="Nepal driving innovation in hospitality and nightlife architecture" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    </div>



                    <p className="text-gray-700 leading-relaxed mb-6">
                      KATHMANDU
                      <br/><br/>
                        RG Creations Nepal, an architecture and design firm based in Kathmandu, has been active in the hospitality and commercial interior sector for over 15 years. The company has completed more than 30 projects across cities including Kathmandu, Pokhara, Dharan, and Itahari, focusing on venues such as nightclubs, lounges, boutique hotels, and event spaces.


                    </p>
    
                    <p className="text-gray-700 leading-relaxed mb-6">
                 The firm operates from its headquarters in Baluwatar and maintains a sourcing and research hub in Shenzhen, China, under the name Link World Tech. It emphasizes customized design approaches based on site-specific potential and client requirements, integrating global design elements with local context.
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                      Among its notable projects are Victory Lounge, Deja Vu, Faces Lounge, Full Moon, and Rokers Magic. Its ongoing project, Legend Nepal Club in Lazimpat, is being developed in collaboration with entrepreneur Ramesh Karki, who cited the firm’s technical capabilities and design approach as key factors in his decision.


                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        According to Executive Chairman Ram Giri, the company focuses on blending functionality, cost-efficiency, and aesthetics. Director Sumitra Paudel Upreti noted the firm’s priority is long-term design value rather than short-term profit.                 
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       RG Creations employs a multidisciplinary team, including architects, engineers, and lighting specialists. The company highlights the use of energy-efficient designs, acoustic solutions, and automated lighting systems in its projects.               
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       In addition to architectural work, RG Creations has contributed to job creation in Nepal, with over 200 professionals engaged across various departments. It also supports staff development through local training and participation in international expos and seminars.                
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        Completed projects include Rambagh Mahal, Imperial Banquet, Majestic Grand, Harshah Batika, and Royal Empire Boutique Hotel. As the company continues to expand its national and regional presence, it is seeking to collaborate with investors and developers in hospitality, commercial interiors, and nightlife design.
                     </p>
                    
                    
    
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="lg:flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {/* <span className="text-sm text-gray-600">Joanna Wellick</span> */}
                         <span className=" text-[#133950]">Source:</span>
                        <a
                            href="https://nepalnews.com/s/business/rg-creations-nepal-expands-portfolio-in-hospitality-and-architectural-design/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-blue-600 hover:text-blue-400"
                            >
                           https://nepalnews.com/s/business/rg-creations-nepal-expands-portfolio-in-hospitality-and-architectural-design/
                            </a>
                            
                      </div>
                      <div className="flex items-center space-x-4">
                        
                        <div className="flex space-x-2">
                          {/* Facebook Share */}
                          <a
                            href={``}
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