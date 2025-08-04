import React from 'react'
import Image from 'next/image';
import { FaWhatsapp, FaFacebook , FaTwitter } from "react-icons/fa";

export const metadata = {
  title: "RG Creations Takes Lead In Architectural Design",
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
                        <h1 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                      
                        <span>RG designs 30 landmark projects in tourism and hospitality</span>
                        </h1>
                        <div className='flex justify-between pb-10'>
                            <div>
                                <p className='text-lg font-semibold'>The Rising Nepal</p>
                                <p>22 May 2025</p>
                            </div>
                           
                        </div>
                    </div>

                    <div className="w-full h-64 lg:h-[500px] lg:w-full relative mb-12 ">
                    <Image
                        src="/taaj-palace.jpg"        // Your image path (public folder or remote)
                        alt="media1" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    </div>



                    <p className="text-gray-700 leading-relaxed mb-6">
                     <strong>By A Staff Reporter,</strong> Kathmandu, May 22: RG Creations Nepal, a design and architecture firm based in Kathmandu, is expanding its presence in Nepal’s hospitality and nightlife sectors. 
                    </p>
    
                    <p className="text-gray-700 leading-relaxed mb-6">
                    "With over 15 years of experience and a portfolio of more than 30 completed projects, the company focuses on venues such as nightclubs, pubs, lounges, event venues, and boutique hotels," it said in a statement.
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       RG Creations operates with an international sourcing and research hub, Link World Tech, in Shenzhen, China. The firm integrates global design practices with local market insights. 
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       It said that each project is developed in response to the investor’s vision, site characteristics, and target audience. Its completed projects include Deja Vu, Victory Lounge, Full Moon, Faces Lounge, and Rokers Magic in various cities, including Kathmandu, Pokhara, Dharan, and Itahari.                
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        Other notable projects include Rambagh Mahal, Majestic Grand, Harshah Batika, Taj Reception, Imperial Banquet, Boudha Heritage, and Royal Empire Boutique Hotel.              
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       One of its ongoing projects is Legend Nepal Club in Lazimpat, Kathmandu which is initiated by Ramesh Karki. The project was awarded to RG Creations after he opted against outsourcing design services abroad, said Ram Giri, RG's chairman. He leads a team of architects, engineers, acousticians, and lighting specialists to deliver custom-built spaces that emphasise both functionality and visual impact.                
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        "Our approach is deeply personalised - each project is tailor-made to reflect the investor’s vision, audience psychology and site-specific potential. Every design is a blend of innovation, cost-efficiency and elegance," Giri said.
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       Likewise, Director of the company Sumitra Paudel Upreti said the designer firm has contributed to the growth of tourism, hospitality and nightlife sectors.
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        According to the statement, RG Creations focuses on energy-efficient and user-centric design and incorporates materials and technologies that support acoustic control, lighting automation, and spatial efficiency. 
                        <br/><br/>
                        The company has generated employment for over 200 individuals in technical and creative roles, and provides ongoing training and international exposure to its staff to maintain global standards.
                     </p>
                    
    
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="lg:flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {/* <span className="text-sm text-gray-600">Joanna Wellick</span> */}
                        <span className=" text-[#133950]">Source:</span>
                        <a
                            href="https://risingnepaldaily.com/news/62332"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-blue-600 hover:text-blue-400  "
                            >
                            https://risingnepaldaily.com/news/62332
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