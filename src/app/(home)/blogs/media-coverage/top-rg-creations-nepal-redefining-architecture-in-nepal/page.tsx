import React from 'react'
import Image from 'next/image';
import { FaWhatsapp, FaFacebook , FaTwitter } from "react-icons/fa";

export const metadata = {
  title: "RG Creations: Pioneering Luxury Architecture and Construction in Nepal",
  description:
    "RG Creations Nepal Pvt. Ltd. is a premier construction and architectural firm specializing in luxury resorts, banquet halls, nightclubs, and upscale residential projects across Nepal.",
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
                      
                        RG Creations Nepal leads in innovative hospitality design
                        </h1>
                        <div className='flex justify-between pb-10'>
                            <div>
                                <p className='text-lg font-semibold'>The Himalayn Times</p>
                                <p>July 01, 2025</p>
                            </div>
                           
                        </div>
                    </div>

                    <div className="w-full h-64 lg:h-[500px] lg:w-full relative mb-12 ">
                    <Image
                        src="/harsa-batika2.jpg"        // Your image path (public folder or remote)
                        alt="media1" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    </div>



                    <h2 className="text-xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                      
                        <span>KATHMANDU, JULY 1</span>
                        </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      RG Creations Nepal is redefining architecture in Nepal's hospitality and nightlife sectors with over 30 landmark projects and 15 years of experience.
                    </p>
    
                    <p className="text-gray-700 leading-relaxed mb-6">
                    Headquartered in Kathmandu with a sourcing hub in China, the firm blends global innovation with local insight.
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       Known for iconic venues like Deja Vu, Victory Lounge, and Rokers Magic, RG Creations offers tailor-made, energy-efficient designs that combine aesthetics with function.
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       Led by Executive Chairman Ram Giri, the company employs 200+ professionals and prioritizes quality, originality, and long-term impact-positioning itself as a visionary force shaping Nepal's architectural and tourism future.                 
                     </p>
                    
    
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="lg:flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {/* <span className="text-sm text-gray-600">Joanna Wellick</span> */}
                        <span className=" text-[#133950]">Source:</span>
                        <a
                            href="https://thehimalayantimes.com/business/rg-creations-nepal-leads-in-innovative-hospitality-design"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-blue-600 hover:text-blue-400  "
                            >
                            https://thehimalayantimes.com/business/rg-creations-nepal-leads-in-innovative-hospitality-design
                            </a>
                                                   
                      </div>
                      <div className="flex items-center space-x-4">
                       
                        <div className="flex space-x-2">
                          {/* Facebook Share */}
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                              "https://www.rgcreationsnepal.com/blogs/media-coverage/media2"
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
                              "https://www.rgcreationsnepal.com/blogs/media-coverage/media2"
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
                              "Check out this article from RG Creations Nepal! https://www.rgcreationsnepal.com/blogs/media-coverage/media2"
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