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
                      
                        <span>RG Creations Nepal Takes The Lead In Architectural Innovation And Hospitality Design</span>
                        </h2>
                        <div className='flex justify-between pb-10'>
                            <div>
                                <p className='text-lg font-semibold'>- EKagaj</p>
                                <p>June 27, 2025</p>
                            </div>
                            <p>32 Shares</p>
                        </div>
                    </div>

                    <div className="w-96 h-64 lg:h-[500px] lg:w-full relative mb-12">
                    <Image
                        src="/media2.jpeg"        // Your image path (public folder or remote)
                        alt="media1" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    </div>



                    <p className="text-gray-700 leading-relaxed mb-6">
                      Kathmandu, Nepal - RG Creations Nepal is rapidly emerging as a trailblazer in Nepal’s architecture and design scene, particularly within the hospitality and nightlife sectors. With over 15 years of hands-on industry experience and a portfolio of more than 30 recognized, standout projects, the firm is redefining how event venues, nightclubs, discotheques, pubs, lounges and boutique hotels are imagined, constructed and brought to life. By fusing creativity with precision and aesthetics with purpose, RG Creations is leading a bold new wave in architecture-one driven by original concepts, cultural relevance and cutting-edge technology.
                    </p>
    
                    <p className="text-gray-700 leading-relaxed mb-6">
                    Headquartered in Baluwatar, Kathmandu, with an international sourcing and research hub named Link World Tech in Shenzhen - Guangdong, China, RG Creations combines global design intelligence with local insight. The company’s approach is deeply personalized- each project is tailor-made to reflect the investor’s vision, audience psychology and site-specific potential. From the urban core of Kathmandu to the vibrant cities of Pokhara, Dharan and Itahari, RG Creations has made its mark through landmark venues that tell a story, spark emotion and elevate guest experiences. Acclaimed establishments such as Deja Vu, Victory Lounge, Full Moon, Faces Lounge and Rokers Magic stand as proof of RG Creations unmatched aesthetic, acoustic and commercial excellence.
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       One of the company’s most exciting ongoing projects is Legend Nepal Club in Lazimpat- Kathmandu, a premium nightlife destination spearheaded by Mr. Ramesh Karki. Initially, Mr. Karki explored design and construction expertise abroad in search of international-level innovation and quality. However, after meeting Executive Chairman Ram Giri and learning about RG Creations capabilities, he was impressed by the firm’s visionary approach and technical proficiency. Being confident in RG’s ability to deliver world-class results, Mr. Karki entrusted the project to RG Creations- marking yet another milestone in the firm’s growing portfolio of transformative spaces.
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       “We don’t just build spaces; we create lasting impressions,” says Ram Giri, Executive Chairman of RG Creations. “Every design is a blend of innovation, cost-efficiency and elegance. Our mission is to deliver iconic structures that feel timeless, yet are built for the future.” The company operates with a dedicated team of expert architects, interior designers, structural engineers, acousticians and lighting specialists, bringing a 360-degree approach to every project. RG Creations proudly goes beyond conventional formulas, designing unique architectural blueprints that make every venue not only visually striking but also brilliantly functional.                  
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        “Our goal isn’t just to complete a project; it’s to deliver something memorable and meaningful for every client,” adds Sumitra Paudel Upreti, Director of RG Creations. “We take pride in exceeding expectations, both in terms of design quality and overall experience. Our focus is long-term impact, not short-term profit.” This unwavering commitment to quality and originality has earned RG Creations the trust of high-profile clients and the attention of hospitality leaders across Nepal and beyond.                
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        At the core of the company’s philosophy lies a strong focus on energy-efficient design, smart material usage and user-centered environments. Every element- from custom-imported acoustic solutions to automated lighting ecosystems, is chosen to enhance functionality while contributing to immersive guest experiences. As Nepal undergoes rapid urban and tourism development, RG Creations isn’t merely keeping pace- it’s shaping the future of commercial architecture with vision, precision and purpose.                 
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        To maintain global standards, RG Creations invests in the development of its workforce. The company regularly sends team members abroad for international training programs, architectural expos and design seminars ensuring that their knowledge stays ahead of the curve. Internally, it provides structured skill enhancement and technical workshops, empowering staff with advanced tools and techniques needed to lead in a competitive global market.
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        RG Creations has already delivered over 30 landmark projects, including top-tier venues such as Rambagh Mahal, Majestic Grand, Harshah Batika, Taj Reception, Imperial Banquet, Boudha Heritage and Royal Empire Boutique Hotel, solidifying its presence as a name synonymous with visionary design and trusted execution.
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        As RG Creations continues to expand its national and international footprint, the firm invites forward-thinking investors, developers and collaborators to be part of its journey in transforming how hospitality and commercial spaces are built in South Asia. RG Creations Nepal - The name behind iconic spaces, timeless design and transformative experiences.
                     </p>
                    
    
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {/* <span className="text-sm text-gray-600">Joanna Wellick</span> */}
                        <a
                            href="https://en.ekagaj.com/articles/rg-creations-nepal-takes-the-lead-in-architectural-innovation-and-hospitality-design/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-[#133950] "
                            >
                            Source
                            </a>
                                                    <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-600">6 min read</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">32 Shares </span>
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