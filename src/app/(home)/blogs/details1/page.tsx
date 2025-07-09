import React from "react";
import { Share2, MessageCircle, User } from "lucide-react";
import blacksmith from "@/assets/images/blacksmith.jpg";
import { blogs } from "@/constants/products";
import BlogCard from "@/components/BlogCard";
import Image from "next/image";
import BlogDetailHero from "@/sections/BlogDetailHero";
import { FaQuoteRight } from "react-icons/fa";


const BlogPost = () => {
  return (
    <div className="min-h-screen  ">
      <BlogDetailHero />
      
      
      
      
      
      
      
      
      <div className="container mx-auto px-4 py-8">
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
                <p className="text-gray-700 leading-relaxed mb-6">
                  Nepal, a land of breathtaking landscapes and rich culture, is experiencing a significant transformation in its urban and rural infrastructure. As the country modernizes, the need for innovative, sustainable, and high-quality architecture and construction services grows stronger every day. RG Creations Nepal Pvt Ltd stands as a beacon of excellence in this evolving market. With a commitment to delivering cutting-edge designs and superior construction solutions, RG Creations has earned a reputation as one of the best architecture and construction companies in Nepal.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Our expertise covers a broad spectrum of services from conceptual architectural design to full-scale construction and project management. Whether building contemporary residential homes, large-scale commercial complexes, or eco-friendly public infrastructures, RG Creations combines creative vision with practical experience to bring dreams into reality.
                </p>
                <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                  <FaQuoteRight className="text-5xl" />
                  <span>About RG Creations Nepal Pvt Ltd</span>
                  </h2>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Established with the mission to elevate construction standards across Nepal, RG Creations Nepal Pvt Ltd is headquartered in Kathmandu and operates nationwide. We pride ourselves on integrating traditional Nepalese architectural principles with modern technology and sustainable building practices. Our multidisciplinary team comprises experienced architects, civil engineers, interior designers, and construction experts who collaborate closely to ensure every project is completed with precision, efficiency, and the highest quality standards.                </p>
                {/* <p className="text-gray-700 leading-relaxed mb-8">
                  Eget aenean tellus venenatis. Donec odio tempus. Felis arcu nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.
                </p> */}

                {/* <h2 className="text-2xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                  Eu ridiculus fringilla aenean
                  </h2> */}
                  <p className="text-gray-700 leading-relaxed mb-8">
                  Our portfolio includes a diverse range of projects:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-8 pr-8">
                  <li>Residential villas and apartments</li>
                  <li>Commercial office buildings and retail outlets</li>
                  <li>Hospitality and tourism infrastructure such as hotels and resorts</li>
                  <li>Healthcare and educational facilities</li>
                  <li>Renovation and restoration of heritage buildings</li>
                </ul>
               

              </div>

              {/* Author and Share Section */}
              <div className="border-t border-gray-200 pt-6 mt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* <span className="text-sm text-gray-600">Joanna Wellick</span> */}
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-600">2 min read</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Share this</span>
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

          {/* Sidebar */}
          <div className="lg:col-span-2 h-auto">
            <div className="">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
               
                <div className="mb-8 lg:mb-0">
                  <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    LATEST BLOGS
                  </h2>
                  <div className="w-16 h-1 bg-[#133950]"></div>
                </div>

                  {/* blog 1 */}
                <div className="h-full flex flex-col justify-between gap-8 pt-4">
            
              <article
               
                className="group cursor-pointer relative h-[190px] sm:h-[250px] flex-1"
              >
                <div className="relative rounded-sm ">
                  <div className="absolute inset-0 bg-black/30 overflow-hidden z-10 rounded-sm"></div>
                  
                  {/* ✅ UPDATED - LEFT IMAGE SIZE */}
                  <img
                    src='/about/news3.jpg'
                    alt='blog'
                    className="
                      w-[327px] h-[190px]
                      sm:w-[327px] sm:h-[250px]
                     
                      mx-auto
                      object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                    "
                  />

                  {/* Overlay Card */}
                  <div className="absolute bottom-4  -left-4 bg-[#133950] text-white h-24 px-4 rounded-sm max-w-sm z-20">
                    {/* <div className="text-[10px] ms-2 font-medium rotate-90 origin-top-left my-4 opacity-75">
                      10 AUG 2023
                    </div> */}
                    <h3 className="text-lg font-bold ms-4 leading-tight -my-2 mb-2 pt-4">
                      Transforming Nightlife: Our Journey Designing One of the World’s Top 40 Nightclubs – Dejavu Club Nepal
                    </h3>
                  </div>
                </div>
              </article>
           
                </div>

                {/* blog 2 */}
                <div className="h-full flex flex-col justify-between gap-8 pt-4">
            
              <article
               
                className="group cursor-pointer relative h-[190px] sm:h-[250px] flex-1"
              >
                <div className="relative rounded-sm ">
                  <div className="absolute inset-0 bg-black/30 overflow-hidden z-10 rounded-sm"></div>
                  
                  {/* ✅ UPDATED - LEFT IMAGE SIZE */}
                  <img
                    src='/about/news2.jpg'
                    alt='blog'
                    className="
                      w-[327px] h-[190px]
                      sm:w-[327px] sm:h-[250px]
                     
                      mx-auto
                      object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                    "
                  />

                  {/* Overlay Card */}
                  <div className="absolute bottom-4  -left-4 bg-[#133950] text-white h-24 px-4 rounded-sm max-w-sm z-20">
                    {/* <div className="text-[10px] ms-2 font-medium rotate-90 origin-top-left my-4 opacity-75">
                      10 AUG 2023
                    </div> */}
                    <h3 className="text-lg font-bold ms-4 leading-tight -my-2 mb-2 pt-4">
                     Nepal’s Best Premium Construction Company: Delivering Excellence for Budget-Savvy and Luxury Clients
                    </h3>
                  </div>
                </div>
              </article>
           
                </div>

                
              </div>
            </div>
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
  );
};

export default BlogPost;
