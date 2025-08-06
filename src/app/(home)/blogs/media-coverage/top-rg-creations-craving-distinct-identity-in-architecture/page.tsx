import React from 'react'

import Image from 'next/image';
import { FaWhatsapp, FaFacebook , FaTwitter } from "react-icons/fa";

export const metadata = {
  title: "RG Creations Redefining Hospitality Spaces with Visionary Designs",
  description:
    "Discover how RG Creations is transforming hospitality environments through bold, visionary architecture in luxury, experience, and innovation.",
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
                      
                        RG Creations redefining hospitality spaces with visionary designs
                        </h1>
                        <div className='flex justify-between pb-10'>
                            <div>
                                <p className='text-lg font-semibold'>Himal Press</p>
                                <p>July 30, 2025</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full h-64 lg:h-[500px] lg:w-full relative mb-12">
                    <Image
                        src="/majestic-1_11zon.jpg"        // Your image path (public folder or remote)
                        alt="Nepal driving innovation in hospitality and nightlife architecture" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    </div>



                    <p className="text-gray-700 leading-relaxed mb-6">
                      KATHMANDU
                      <br/><br/>
                        RG Creations Nepal is carving a distinct identity in the architecture and design landscape, especially in the country’s hospitality and nightlife sectors.


                    </p>
    
                    <p className="text-gray-700 leading-relaxed mb-6">
                  With over 15 years of experience and more than 30 standout projects to its name, the company is reshaping how nightclubs, lounges, pubs, event venues and boutique hotels are conceived and built. Its designs blend creativity with technical precision, guided by cultural awareness, original ideas and modern technology.
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                      Headquartered in Baluwatar, Kathmandu, RG Creations also operates an international sourcing and research hub, Link World Tech, in Shenzhen, China. This global-local synergy allows the firm to integrate international design trends with local needs and sensibilities. Every project handled by the firm is custom-designed to reflect the client’s vision, target audience and the unique potential of the site. From the heart of Kathmandu to the energetic streets of Pokhara, Dharan and Itahari, RG Creations has created venues that resonate with mood and meaning. Signature projects like Deja Vu, Victory Lounge, Full Moon, Faces Lounge and Rokers Magic speak volumes about the firm’s distinctive style, acoustic expertise and commercial impact.


                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        One of RG Creations Nepal’s most anticipated projects is the upcoming Legend Nepal Club in Lazimpat, Kathmandu—a premium nightlife venue led by entrepreneur Ramesh Karki. Initially, Karki sought design and construction services abroad in search of international quality. But after meeting RG Creations’ Executive Chairperson Ram Giri and learning about the firm’s capabilities, he was convinced by its visionary approach and technical expertise. Confident in the team’s ability to deliver at a global standard, Karki entrusted RG Creations with the project.              
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       “We don’t just build spaces; we create lasting impressions,” says Giri. “Every design balances innovation, cost-efficiency and elegance. Our mission is to deliver iconic structures that feel timeless, yet are built for the future.”             
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                      The firm operates with a specialized team of architects, interior designers, engineers, acousticians and lighting specialists, ensuring a holistic design and build process. RG Creations is known for avoiding formulaic approaches, instead crafting unique architectural solutions that are both visually compelling and highly functional.             
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                      “Our goal isn’t just to complete a project; it’s to deliver something memorable and meaningful for every client,” adds Sumitra Paudel Upreti, Director of RG Creations. “We take pride in exceeding expectations, both in terms of design quality and overall experience. Our focus is long-term impact, not short-term profit.”
                      <br/><br/>

                      At the heart of RG Creations’ design philosophy is an emphasis on energy efficiency, smart material use, and user-centric environments. From custom-imported acoustic systems to intelligent lighting solutions, every element is chosen to enhance both utility and atmosphere. As Nepal’s urban and tourism sectors expand, RG Creations is not just keeping up, it is helping shape the next chapter of commercial architecture.
                        <br/><br/>
                      Beyond design, the company is committed to national development. It has created jobs for over 200 professionals across technical and creative fields, contributing to local employment and reducing brain drain. With projects that attract both domestic and international audiences, RG Creations plays a vital role in strengthening Nepal’s tourism, hospitality, and nightlife industries.<br/><br/>

                      The company regularly sends team members abroad for international training programs, architectural expos and design seminars, ensuring that their knowledge stays ahead of the curve. It also runs in-house workshops and upskilling programs to equip staff with advanced tools and techniques needed to compete globally.<br/><br/>

                      RG Creations has already delivered over 30 landmark projects, including top-tier venues such as Rambagh Mahal, Majestic Grand, Harshah Batika, Taj Reception, Imperial Banquet, Boudha Heritage and Royal Empire Boutique Hotel.
                     </p>
                    
                    
    
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="lg:flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {/* <span className="text-sm text-gray-600">Joanna Wellick</span> */}
                         <span className=" text-[#133950]">Source:</span>
                        <a
                            href="https://en.himalpress.com/rg-creations-redefining-hospitality-spaces-with-visionary-designs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-blue-600 hover:text-blue-400"
                            >
                            https://en.himalpress.com/rg-creations-redefining-hospitality-spaces-with-visionary-designs/
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