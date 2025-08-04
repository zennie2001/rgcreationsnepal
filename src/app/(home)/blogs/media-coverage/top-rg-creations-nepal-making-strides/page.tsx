import React from 'react'
import Image from 'next/image';
import { FaWhatsapp, FaFacebook , FaTwitter } from "react-icons/fa";

export const metadata = {
  title: "RG Creations Nepal Making Strides in Architecture & Design",
  description:
    "Discover how RG Creations Nepal is reshaping the hospitality and nightlife scene with innovative architectural designs, combining local expertise and global trends to create unique, tailor-made venues across Kathmandu, Pokhara, and beyond.",
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
                      
                        <span>RG Creations Nepal Making Strides</span>
                        </h1>
                        <div className='flex justify-between pb-10'>
                            <div>
                                <p className='text-lg font-semibold'>The Business Age</p>
                                <p>24 May 2025</p>
                            </div>
                           
                        </div>
                    </div>

                    <div className="w-full h-64 lg:h-[500px] lg:w-full relative mb-12 ">
                    <Image
                        src="/royal.jpg"        // Your image path (public folder or remote)
                        alt="media1" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    </div>



                    <p className="text-gray-700 leading-relaxed mb-6">
                     RG Creations Nepal is rapidly establishing itself as a leading name in architecture and design, particularly in the country’s evolving hospitality and nightlife sectors.<br/><br/>

                    With more than 15 years of experience and a portfolio of over 30 notable projects across Nepal, the firm says its work is reshaping how nightclubs, lounges, boutique hotels, and event venues are envisioned and built.<br/><br/>

                    Based in Baluwatar, Kathmandu, RG Creations also operates an international sourcing and research arm, Link World Tech, in Shenzhen, China. This enables the firm to combine global design intelligence with local understanding and cultural relevance.<br/><br/>
                    Each of its projects is tailor-made—designed to reflect the client’s vision and connect with the target audience.
                    <br/><br/> 

                    The company emphasizes each project is tailor-made–customized to reflect the investor’s vision, resonate with target audiences, and leverage each site’s unique potential.
                    <br/><br/>
                    RG Creations has left its mark on major urban centers including Kathmandu, Pokhara, Dharan, and Itahari. Popular venues such as Deja Vu, Victory Lounge, Full Moon, Faces Lounge, and Rockers Magic are part of its growing portfolio.
                    <br/><br/>

                    Among its latest high-profile projects is Legend Nepal Club in Lazimpat, a premium nightlife destination led by entrepreneur Ramesh Karki. Initially seeking international expertise, Karki eventually partnered with RG Creations, impressed by the company’s creative vision and technical capabilities.
                    <br/><br/>

                    “We don’t just build spaces; we create lasting impressions,” says Executive Chairman Ram Giri.
                    <br/><br/>

                    The firm says it takes a 360-degree approach to each project, with a multidisciplinary team of architects, interior designers, structural engineers, acousticians, and lighting experts.
                    <br/><br/>

                    “Our aim is not just to complete projects but to deliver meaningful experiences,” says Director Sumitra Paudel Upreti. “We measure success by long-term impact, not short-term gains.”
                    Energy efficiency, smart material use, and user-centered design are at the heart of RG Creations’ approach. Every element—from acoustic treatments to lighting systems—is carefully selected to enhance both functionality and guest experience.
                    <br/><br/>

                    The company also prioritizes talent development. It has provided employment to over 200 professionals and regularly sends its team abroad for training, while also conducting in-country design workshops and technical skill programs.
                    <br/><br/>

                    Its other notable projects include Rambagh Mahal, Majestic Grand, Harshah Batika, Taj Reception, Imperial Banquet, Boudha Heritage, and Royal Empire Boutique Hotel.
                        
                    </p>
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="lg:flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {/* <span className="text-sm text-gray-600">Joanna Wellick</span> */}
                        <span className=" text-[#133950]">Source:</span>
                        <a
                            href="https://newbusinessage.com/article/rg-creations-nepal-cementing-its-name-in-architecture-and-design"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-blue-600 hover:text-blue-400  "
                            >
                           https://newbusinessage.com/article/rg-creations-nepal-cementing-its-name-in-architecture-and-design
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