import React from "react";
import { Share2, MessageCircle, User } from "lucide-react";
import blacksmith from "@/assets/images/blacksmith.jpg";
import { blogs } from "@/constants/products";
import BlogCard from "@/components/BlogCard";
import Image from "next/image";
import BlogDetailHero from "@/sections/BlogDetailHero";
import { FaQuoteRight } from "react-icons/fa";
import BlogDetail3Hero from "@/sections/BlogDetail3Hero";



export const metadata = {
  title: "Nepal’s Best Premium Construction Company",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};

const BlogPost = () => {
  return (
    <div className="min-h-screen  ">
     <BlogDetail3Hero />
      
      
      
      
      
      
      
      
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
In Nepal’s rapidly evolving construction industry, the demand for premium quality combined with cost efficiency is higher than ever. Whether clients are building luxurious residential estates or practical commercial spaces, they seek a construction partner that offers unparalleled craftsmanship, innovation, and value. At RG Creations Nepal Pvt Ltd, we pride ourselves on being Nepal’s best premium construction company, delivering excellence to both budget-savvy and luxury clients.        
                            </p>
                           <p className="text-gray-700 leading-relaxed mb-6">
This comprehensive article explores how RG Creations balances quality and affordability, our approach to construction, and why we are the preferred partner for clients seeking top-tier results without compromising on budget.
                            </p>
                           <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                             
                             <span>
                                The Changing Landscape of Construction in Nepal
                                </span>
                             </h2>
           
                           <p className="text-gray-700 leading-relaxed mb-8">
Nepal’s urbanization and economic growth have fueled a surge in construction projects—spanning residential apartments, commercial complexes, hotels, and more. With rising customer awareness and global exposure, clients increasingly demand premium construction services that offer durability, aesthetics, and sustainability.
                             </p>
                             <p className="text-gray-700 leading-relaxed mb-8">Our mission was to transform this vision into reality by designing interiors and sourcing products that would elevate the guest experience, captivate audiences, and make Dejavu Club a trendsetter in Nepal’s nightlife industry.</p>
                               {/* <p className="text-gray-700 leading-relaxed mb-8">
                             Eget aenean tellus venenatis. Donec odio tempus. Felis arcu nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.
                           </p> */}
           
                           {/* <h2 className="text-2xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                             Eu ridiculus fringilla aenean
                             </h2> */}
     
                             <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                             
                             <span>Challenges for Clients: Balancing Budget and Quality</span>
                             </h2>
                             <p className="text-gray-700 leading-relaxed mb-8">Before diving into design, we immersed ourselves in the nightclub culture and studied what makes global venues truly exceptional. Nightclubs succeed not only by their music or DJs but by delivering an atmosphere where every element—lighting, acoustics, layout, furnishings, and visual aesthetics—works harmoniously.</p>
                             <p className="text-gray-700 leading-relaxed mb-8">
                             While the desire for luxury and high-quality construction is strong, budget constraints remain a critical consideration for many clients. The challenge lies in achieving:
                           </p>
                           <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-8 pr-8">
                             <li>Superior construction standards</li>
                            <li>Innovative architectural design</li>
                            <li>Timely project delivery</li>
                            <li>Cost optimization</li>
     
                           </ul>

                           <h2 className="lg:text-3xl text-2xl font-bold   leading-relaxed mb-4 uppercase">
                            About RG Creations Nepal Pvt Ltd
                           </h2>
                           <p className="text-gray-700 leading-relaxed mb-8">Founded with a vision to revolutionize Nepal’s construction industry, RG Creations Nepal Pvt Ltd has built a reputation for reliability, innovation, and craftsmanship. Our portfolio includes high-end residential projects, commercial buildings, and landmark developments that reflect quality and sophistication.<br/> <br/>
                            Our expertise lies in:
                            </p>
                            <ul className="list-disc pl-10 pb-8 text-gray-700 leading-relaxed space-y-2">
                              <li>Architectural innovation</li>
                              <li>Sustainable construction practices</li>
                              <li>Use of advanced construction technology</li>
                              <li>Customized client solutions</li>
                              <li>Transparent communication and ethical business practices</li>
                            </ul>



                             <h2 className="lg:text-3xl text-2xl font-bold   leading-relaxed mb-4 uppercase">
                            What Defines a Premium Construction Company?
                           </h2>
                           <div>
                            <p className="text-gray-700 leading-relaxed mb-8">
                              Before diving into how RG Creations leads in premium construction, it’s essential to understand what “premium” truly means in this context.
                            </p>

                            <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                            <span>1. Quality Materials and Workmanship</span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                              Premium construction demands the highest quality materials—from structural steel and concrete to finishes and fixtures. Equally important is skilled workmanship ensuring every element is built to exacting standards.
                            </p>

                             <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                            <span>2. Innovative Design and Architecture</span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8">Premium projects showcase architectural creativity and functionality, incorporating modern trends while ensuring the design suits client lifestyles or business operations.</p>

                             <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                            <span>3. Technology and Sustainability</span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8">Advanced construction techniques, smart building systems, and eco-friendly materials are hallmarks of premium construction.</p>

                             <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                            <span>4. Client-Centric Service</span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                              Personalized solutions, clear communication, and flexibility to adapt to client needs distinguish premium firms.
                            </p>

                             <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                            <span>5. On-Time Delivery and Budget Control</span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8">Delivering projects within agreed timelines and budgets without sacrificing quality is critical.</p>
                           </div>

                            <h2 className="lg:text-3xl text-2xl font-bold   leading-relaxed mb-4 uppercase">
                           RG Creations’ Approach to Premium Construction
                           </h2>
                           <div>
                             <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                            <span>Customized Solutions for Diverse Clients</span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                              Every client is unique. RG Creations begins with thorough consultations to understand:
                            </p>
                            <ul className="list-disc pl-10 pb-8 text-gray-700 leading-relaxed space-y-2">
                            <li>Project goals</li>
                            <li>Budget constraints</li>
                            <li>Design preferences</li>
                            <li>Site-specific conditions</li>
                          </ul>


                            <p className="text-gray-700 leading-relaxed mb-8">
                              This foundation allows us to tailor construction strategies that optimize cost without compromising premium quality.
                            </p>

                             <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                            <span>Integration of Architectural Excellence and Practicality</span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                              Our architectural team works closely with construction experts to ensure designs are both visually stunning and feasible within the client’s budget and timeframe.
                            </p>
                             <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                            <span>Use of High-Quality and Sustainable Materials</span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                              We source premium-grade materials that enhance durability and aesthetics while promoting sustainability. Wherever possible, we incorporate green building materials and techniques to reduce environmental impact and operational costs.
                            </p>

                             <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                            <span>Skilled Workforce and Technology Adoption</span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                            We employ experienced engineers, architects, and craftsmen who use the latest technology—such as Building Information Modeling (BIM), project management software, and modern machinery—to enhance precision and efficiency.
                            </p>

                             <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                            <span>Transparent Project Management and Communication</span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                              Clients receive regular updates and clear cost breakdowns, ensuring transparency and trust throughout the construction process.
                            </p>

                           </div>

                          
           
                         </div>
           
                         {/* Author and Share Section */}
                         {/* <div className="border-t border-gray-200 pt-6 mt-8">
                           <div className="flex items-center justify-between">
                             <div className="flex items-center space-x-4">
                              
                               <span className="text-sm text-gray-400">•</span>
                               <span className="text-sm text-gray-600">10 min read</span>
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
                         </div> */}
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
                               alt='Transforming Nightlife: The World’s Top 40 Nightclubs'
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
                               alt='Nepal’s Best Premium Construction Company'
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
                 
                 </div>
    </div>
  );
};

export default BlogPost;
