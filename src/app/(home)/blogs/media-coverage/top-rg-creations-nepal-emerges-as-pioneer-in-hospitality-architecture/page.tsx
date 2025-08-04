import React from 'react'
import Image from 'next/image';
import { FaWhatsapp, FaFacebook , FaTwitter } from "react-icons/fa";

export const metadata = {
  title: "RG Creations Nepal Emerges as Pioneer in Hospitality Architecture",
  description:
    "Explore how RG Creations Nepal is revolutionizing hospitality architecture with innovative designs, cutting-edge technology, and a commitment to sustainable growth across Nepal's major urban centers.",
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
                      
                        <span>RG Creations Nepal emerges as pioneer in hospitality architecture</span>
                        </h1>
                        <div className='flex justify-between pb-10'>
                            <div>
                                <p className='text-lg font-semibold'>Republica</p>
                                <p>May 23, 2025</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full h-64 lg:h-[500px] lg:w-full relative mb-12">
                    <Image
                        src="/rambagh.jpg"        // Your image path (public folder or remote)
                        alt=" Nepal Leads Architectural Innovation" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    </div>



                    <p className="text-gray-700 leading-relaxed mb-6">
                      KATHMANDU, May 23: RG Creations Nepal is establishing itself as a leader in architectural innovation, particularly in the hospitality and nightlife sectors. With over 15 years of industry experience and a portfolio of more than 30 notable projects, the Kathmandu-based firm is redefining how venues such as nightclubs, pubs, lounges, and boutique hotels are envisioned and built. By combining artistic creativity with modern technology and cultural relevance, RG Creations is leading a noticeable transformation in Nepal's commercial architecture.
                    </p>
    
                    <p className="text-gray-700 leading-relaxed mb-6">
                    RG Creations' personalized design approach integrates global design intelligence from its international research hub in Shenzhen, China, with deep local insight. The firm's projects-spanning cities like Kathmandu, Pokhara, Dharan, and Itahari-reflect each client's vision and the psychological preferences of target audiences. Acclaimed venues like Deja Vu, Victory Lounge, Full Moon, Faces Lounge, and Rokers Magic exemplify the firm's design excellence and market impact.
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        According to the company, one of its most ambitious ongoing projects is Legend Nepal Club in Lazimpat, Kathmandu--a premium nightlife destination led by investor Ramesh Karki. Initially seeking international designers, Karki entrusted the project to RG Creations after being impressed by Executive Chairman Ram Giri's visionary leadership and the firm's technical prowess. "We don't just build spaces, we create lasting impressions," said Giri. "Every design is a blend of innovation, cost-efficiency, and elegance."
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        Director Sumitra Paudel Upreti emphasized the firm's commitment to long-term value over short-term profit. "Our goal isn't just to complete a project, it's to deliver something memorable and meaningful," she said.                  
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        With a team of over 200 professionals-including architects, structural engineers, acousticians, and lighting experts-RG Creations adopts a 360-degree design strategy. Their projects prioritize energy efficiency, smart materials, and immersive user experiences, featuring imported acoustic solutions and automated lighting systems.                 
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       Beyond architecture, RG Creations actively contributes to national development by creating employment, reducing brain drain, and investing in workforce training both domestically and internationally. Notable past projects include Rambagh Mahal, Majestic Grand, Harshah Batika, Taj Reception, Imperial Banquet, Boudha Heritage, and Royal Empire Boutique Hotel.
                       <br/><br/>
                          As Nepal undergoes rapid urban and tourism growth, RG Creations is not only responding to market demand but actively shaping the future of hospitality architecture in South Asia. The company invites innovative investors and collaborators to join in building transformative, iconic spaces across the region.              
                     </p>
                    
    
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="lg:flex   items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <span className=" text-[#133950]">Source:</span>
                        <a
                            href="https://myrepublica.nagariknetwork.com/news/rg-creations-nepal-emerges-as-pioneer-in-hospitality-architecture-40-32.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-400 "
                            
                            >
                            https://myrepublica.nagariknetwork.com/news/rg-creations-nepal-emerges-as-pioneer-in-hospitality-architecture
                            </a>
                                                    {/* <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-600">3 min read</span> */}
                      </div>
                      <div className="flex items-center space-x-4">
                        
                        <div className="flex space-x-2">
                                                  {/* Facebook Share */}
                                                  <a
                                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                                      "https://www.rgcreationsnepal.com/blogs/media-coverage/media1"
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
                                                      "https://www.rgcreationsnepal.com/blogs/media-coverage/media1"
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
                                                      "Check out this article from RG Creations Nepal! https://www.rgcreationsnepal.com/blogs/media-coverage/media1"
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