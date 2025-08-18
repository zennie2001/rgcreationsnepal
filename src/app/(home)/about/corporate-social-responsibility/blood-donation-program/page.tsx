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
                      
                        Blood Donation Program at Taaj Reception, Baluwatar
                        </h1>
                        <div className='flex justify-between pb-10'>
                            <div>
                                {/* <p className='text-lg font-semibold'>Nepal News</p> */}
                                <p>16th August 2025</p>
                            </div>
                            
                        </div>
                    </div>

                   <div className=''>
                     <div className="flex flex-row w-full h-64 lg:h-[500px] lg:w-full relative mb-12">
                    <Image
                        src="/Award1_11zon.jpg"        // Your image path (public folder or remote)
                        alt="Nepal driving innovation in hospitality and nightlife architecture" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    
                    </div>
                    <div className="flex flex-row w-full h-64 lg:h-[500px] lg:w-full relative mb-12">
                    
                    <Image
                        src="/Award2_11zon.jpg"        // Your image path (public folder or remote)
                        alt="Nepal driving innovation in hospitality and nightlife architecture" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    </div>
                   </div>



                    <p className="text-gray-700 leading-relaxed mb-6">
                      At RG Creations Nepal, we believe our responsibility goes beyond designing spaces—we strive to make a meaningful difference in people’s lives and the community we are part of.

                      <br/><br/>
                       On 16th August 2025, we proudly organized a Blood Donation Program at Taaj Reception, Baluwatar, as part of our Corporate Social Responsibility, in support of the 21st Mega Blood Donation Program. The initiative was made successful through the dedicated medical expertise of the Himal Blood Transfusion Center, the tireless volunteer efforts of the Lions Club team, and the enthusiastic involvement of the MR Nepal team. Together, we were able to contribute 122 units of blood—an achievement made possible by the generosity of every donor.



                    </p>
    
                    <p className="text-gray-700 leading-relaxed mb-6">
                 Being recognized for our contribution was an honor, but what truly mattered was the reminder that even small efforts can help save lives.

                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                      For us, CSR is not about a single event—it is a mindset. Whether through supporting health initiatives, promoting sustainability, or standing with our community in times of need, we remain committed to ensuring that our work creates a positive impact both within and beyond the spaces we design.


                    </p>
                     
                  
                    
                    
    
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="lg:flex items-center justify-between">
                      {/* <div className="flex items-center space-x-4">
                       
                         <span className=" text-[#133950]">Source:</span>
                        <a
                            href="https://nepalnews.com/s/business/rg-creations-nepal-expands-portfolio-in-hospitality-and-architectural-design/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-blue-600 hover:text-blue-400"
                            >
                           https://nepalnews.com/s/business/rg-creations-nepal-expands-portfolio-in-hospitality-and-architectural-design/
                            </a>
                            
                      </div> */}
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