import React from 'react'

import Image from 'next/image';
import { FaWhatsapp, FaFacebook , FaTwitter } from "react-icons/fa";


export const metadata = {
  title: "RG Creations | Innovation in nightlife architecture",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
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
                        <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                      
                        <span>RG Creations expands role in Nepal’s hospitality and architecture sectors</span>
                        </h2>
                        <div className='flex justify-between pb-10'>
                            <div>
                                <p className='text-lg font-semibold'>OnlineKhabar</p>
                                <p>June 3, 2025</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full h-64 lg:h-[500px] lg:w-full relative mb-12">
                    <Image
                        src="/Royal-Empire-Boutique.jpg"        // Your image path (public folder or remote)
                        alt="Nepal driving innovation in hospitality and nightlife architecture" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    </div>



                    <p className="text-gray-700 leading-relaxed mb-6">
                      KATHMANDU, JUNE 3
                      <br/><br/>
                        RG Creations Nepal is expanding its influence in architecture and design, focusing on hospitality and nightlife infrastructure. With over 15 years of experience, the company has completed more than 30 projects across Nepal, including venues in Kathmandu, Pokhara, Dharan, and Itahari.


                    </p>
    
                    <p className="text-gray-700 leading-relaxed mb-6">
                  Headquartered in Baluwatar, Kathmandu, with a sourcing and research hub in Shenzhen, China, RG Creations integrates international technology with local context. Notable projects include Deja Vu, Victory Lounge, Full Moon, Faces Lounge, and Rokers Magic as per a press statement released by RG Creations.
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                      One of its current projects is Legend Nepal Club in Lazimpat, developed in collaboration with investor Ramesh Karki. Initially seeking foreign expertise, Karki chose RG Creations after discussions with Executive Chairperson Ram Giri.


                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        RG Creations employs professionals across architecture, structural engineering, acoustics, lighting, and interior design. The firm emphasises energy-efficient systems, user-focused design, and smart material use.                 
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       The company has generated employment for over 200 people in technical and creative roles, supporting local talent development and reducing skilled labour migration. Staff receive international training to align with evolving global standards.                
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       Projects like Rambagh Mahal, Majestic Grand, and Royal Empire Boutique Hotel underscore RG Creations’ growing role in shaping Nepal’s hospitality infrastructure.                
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        “We don’t just build spaces; we create lasting impressions,” states Ram Giri, Executive Chairperson of RG Creations. “Every design is a blend of innovation, cost-efficiency and elegance. Our mission is to deliver iconic structures that feel timeless, yet are built for the future.”
                     </p>
                    
                    
    
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="lg:flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {/* <span className="text-sm text-gray-600">Joanna Wellick</span> */}
                         <span className=" text-[#133950]">Source:</span>
                        <a
                            href="https://english.onlinekhabar.com/rg-creations-expands-role-in-nepals-hospitality-and-architecture-sectors.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-blue-600 hover:text-blue-400"
                            >
                            https://english.onlinekhabar.com/rg-creations-expands-role-in-nepals-hospitality
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