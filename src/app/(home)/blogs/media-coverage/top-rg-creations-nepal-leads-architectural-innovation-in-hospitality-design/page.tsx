import React from 'react'
import Image from 'next/image';
import { FaWhatsapp, FaFacebook , FaTwitter } from "react-icons/fa";


export const metadata = {
  title: "RG Creations Nepal Leads Architectural Innovation",
  description:
    "With over 15 years of experience, RG Creations Nepal specializes in premium hospitality design, developing iconic nightclubs, hotels, and event.",
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
                      
                        RG Creations Nepal Leads Architectural Innovation in Hospitality Design
                        </h1>
                        <div className='flex justify-between pb-10'>
                            <div>
                                <p className='text-lg font-semibold'>Deshsanchar</p>
                                <p>June 27, 2025</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full h-64 lg:h-[500px] lg:w-full relative mb-12">
                    <Image
                        src="/media1.jpg"        // Your image path (public folder or remote)
                        alt=" Nepal Leads Architectural Innovation" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    </div>



                    <p className="text-gray-700 leading-relaxed mb-6">
                      Kathmandu – With 15 years of service in Nepal’s hospitality sector, RG Creations has established itself as a specialist in the design, construction, and operation of premium outlets such as nightclubs, hotels, event venues, and cafés.
                    </p>
    
                    <p className="text-gray-700 leading-relaxed mb-6">
                    “We offer exceptional design solutions tailored to investors’ budgets. Our specialty lies in adapting global trends to fit the Nepali market,” said Ram Giri, Executive Chairman of RG Creations.
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        Currently, the company is constructing ‘Legend Nepal,’ an international-standard nightclub in Lazimpat, which will feature over 300 state-of-the-art elements. Previously, RG Creations has developed renowned outlets like Rambagh Mahal, Majestic Grand, and Deja Vu Discotheque.
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        The company operates offices across Nepal and also maintains a presence in Shenzhen, China. Its mission is to contribute to Nepal’s tourism sector through the application of cutting-edge technology.                   
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        “Our priority is to provide high-quality yet affordable construction services,” said Sumitra Paudel Upreti, Director at RG Creations. The company is executing projects not only in cities like Dharan and Pokhara but also in international locations.                 
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        “With 20 years of experience, we’re setting new standards by using unique concepts and high-quality materials,” added Giri. The company continues to move forward with the goal of contributing to tourism development in Nepal.                 
                     </p>

                     <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Hashtags:</strong>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  #BestArchitectureCompanyNepal #TopArchitectureCompanyNepal #PremiumArchitectureNepal #ElegantArchitectureNepal #HighlyRecommendedArchitectNepal #LeadingArchitectureCompanyNepal #KathmanduArchitectureCompany #AwardWinningArchitectNepal #TrustedArchitectNepal #ArchitectureFirmKathmandu #TopRatedArchitectNepal #CreativeArchitectureNepal #LuxuryArchitectureNepal #ModernArchitectureNepal #NeoclassicalArchitectureNepal #SustainableArchitectureNepal #CustomArchitecturalDesignNepal #ResortArchitectNepal #HotelArchitectNepal #InteriorDesignNepal

                </p>
                    
    
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="lg:flex   items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <span className=" text-[#133950]">Source:</span>
                        <a
                            href="https://english.deshsanchar.com/rg-creations-nepal-leads-architectural-innovation-in-hospitality-design/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-400 "
                            
                            >
                            https://english.deshsanchar.com/rg-creations-nepal
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