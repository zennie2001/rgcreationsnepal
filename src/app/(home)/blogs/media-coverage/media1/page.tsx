import React from 'react'
import { Share2} from "lucide-react";
import Image from 'next/image';

const page = () => {
  return (
     <div className="min-h-screen  ">
          
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
                      
                        <span>RG Creations Nepal Leads Architectural Innovation in Hospitality Design</span>
                        </h2>
                        <div className='flex justify-between pb-10'>
                            <div>
                                <p className='text-lg font-semibold'>- Deshsanchar</p>
                                <p>June 27, 2025</p>
                            </div>
                            <p>46 Shares</p>
                        </div>
                    </div>

                    <div className="w-96 h-64 lg:h-[500px] lg:w-full relative mb-12">
                    <Image
                        src="/media1.jpg"        // Your image path (public folder or remote)
                        alt="media1" // Alt text for accessibility
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
                    
    
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {/* <span className="text-sm text-gray-600">Joanna Wellick</span> */}
                        <a
                            href="https://english.deshsanchar.com/rg-creations-nepal-leads-architectural-innovation-in-hospitality-design/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-[#133950] "
                            
                            >
                            Source
                            </a>
                                                    <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-600">3 min read</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">46 Shares </span>
                        <div className="flex space-x-2">
                          <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">f</span>
                          </button>
                          <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">t</span>
                          </button>
                          <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                            <Share2 className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
    
              
            </div>
            {/* Comments Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Comments</h2>
    
              {/* Comment Form */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <textarea
                  placeholder="Your Comment"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4"
                />
                <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
                  Comment
                </button>
              </div>
    
              {/* Existing Comments */}
              {/* <div className="space-y-6">
                {[1, 2, 3].map((comment) => (
                  <div key={comment} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700 mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Duis augue elit, eleifend non mauris et, semper dictum
                          nunc.
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Jane</span>
                          <button className="hover:text-gray-700">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
  )
}

export default page