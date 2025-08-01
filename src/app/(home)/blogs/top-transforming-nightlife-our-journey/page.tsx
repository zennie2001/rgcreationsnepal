import React from "react";
import { Share2, MessageCircle, User } from "lucide-react";
import blacksmith from "@/assets/images/blacksmith.jpg";
import { blogs } from "@/constants/products";
import BlogCard from "@/components/BlogCard";
import Image from "next/image";
import BlogDetailHero from "@/sections/BlogDetailHero";
import { FaQuoteRight } from "react-icons/fa";
import BlogDetail2Hero from "@/sections/BlogDetail2Hero";

export const metadata = {
  title: "Transforming Nightlife | Nepal Leaders",
  description:
    "RG Creations Nepal leads in designing and constructing luxury nightclubs and entertainment venues, reshaping Nepal’s nightlife with innovative architecture and exceptional quality.",
};



const BlogPost = () => {
  return (
    <div className="min-h-screen  ">
      <BlogDetail2Hero/>
      
      
      
      
      
      
      
      
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
                        Nightclubs are more than just venues for music and dance—they are cultural hubs that define the pulse of a city’s nightlife. Designing a nightclub that stands out on the global stage demands a blend of creative vision, technical expertise, and a deep understanding of ambiance and guest experience. At RG Creations Nepal Pvt Ltd, we proudly undertook this challenge while designing Dejavu Club, which has now earned recognition as one of the world’s top 40 nightclubs.                      </p>
      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        In this article, we share the journey behind the creation of Dejavu Club—a masterpiece of nightclub design that has transformed Nepal’s nightlife scene and placed it firmly on the international map. From concept development to the final execution, discover how our team blended innovative interior design, cutting-edge technology, and tailored product supply to create an unforgettable nightlife experience.                      </p>
                      <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                        <FaQuoteRight className="text-5xl" />
                        <span>The Vision Behind Dejavu Club</span>
                        </h2>
      
                      <p className="text-gray-700 leading-relaxed mb-8">
When the owners of Dejavu Club approached RG Creations, their ambition was clear: to create a world-class nightclub in Kathmandu that could rival the best venues across the globe. The goal was not just to build a space for music and dance but to create an iconic destination that reflects luxury, innovation, and immersive entertainment.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">Our mission was to transform this vision into reality by designing interiors and sourcing products that would elevate the guest experience, captivate audiences, and make Dejavu Club a trendsetter in Nepal’s nightlife industry.</p>
                          {/* <p className="text-gray-700 leading-relaxed mb-8">
                        Eget aenean tellus venenatis. Donec odio tempus. Felis arcu nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.
                      </p> */}
      
                      {/* <h2 className="text-2xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                        Eu ridiculus fringilla aenean
                        </h2> */}

                        <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                        
                        <span>Understanding the Nightclub Experience</span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-8">Before diving into design, we immersed ourselves in the nightclub culture and studied what makes global venues truly exceptional. Nightclubs succeed not only by their music or DJs but by delivering an atmosphere where every element—lighting, acoustics, layout, furnishings, and visual aesthetics—works harmoniously.</p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                        Key elements considered in the Dejavu Club design included:
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-8 pr-8">
                        <li><strong>Ambiance and Mood:</strong> Creating a vibe that flows with the music and energizes the crowd.</li>
                        <li><strong>Spatial Flow:</strong> Designing areas for dancing, lounging, VIP sections, and bars that encourage social interaction yet allow personal comfort.</li>
                        <li><strong>Acoustics:</strong> Ensuring sound clarity and volume balance for immersive music without overwhelming guests.</li>
                        <li><strong>Lighting:</strong> Using dynamic lighting to enhance mood shifts and complement the DJ’s set.</li>
                        <li><strong>Innovative Features:</strong> Integrating technology and unique design elements to create an unforgettable sensory experience.</li>

                      </ul>

                       <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                        
                        <span>Our Design Approache</span>
                        </h2>
                        <div>
                          <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                          <span>1. Conceptualization & Theme Development</span>
                          </h2>
                          <p className="text-gray-700 leading-relaxed mb-8">
                            Dejavu Club’s theme centered on sophistication fused with a modern edge. We envisioned sleek lines, bold contrasts, and luxurious textures that reflect the vibrancy of Nepal’s evolving nightlife scene. Inspired by global nightclub trends, the concept combined industrial elements with high-end finishes to balance raw energy and polished elegance.
                          </p>
                          <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                          <span>2. Space Planning & Layout</span>
                          </h2>
                          <p className="text-gray-700 leading-relaxed mb-8">
                           Efficient use of space was critical. The design separated high-energy dance floors from more intimate lounge zones. VIP areas were strategically placed for exclusivity but remained integrated with the overall flow to maintain the club’s inclusive vibe.

                          </p>
                          <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                          <span>3. Interior Design Elements</span>
                          </h2>
                          <p className="text-gray-700 leading-relaxed mb-8">
                        We chose a monochrome palette with metallic accents to create a futuristic yet timeless feel. Custom-designed furniture incorporated LED elements, and mirrored surfaces were used to amplify lighting effects.
                        <br/>
                        <br/>
                          Wall treatments featured abstract patterns and textured panels, giving depth and dimension. The ceiling was designed with modular light fixtures that could change colors and intensities to match different moods and performances.

                          </p>
                         
                        </div>

                        <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                        
                        <span>Our Design Approache</span>
                        </h2>
                        <div>
                           <p className="text-gray-700 leading-relaxed mb-8">
                            No world-class nightclub is complete without advanced technology. RG Creations integrated multiple systems to enhance the guest experience:

                           </p>
                           <ul className="list-disc pl-6 pb-8 text-gray-700 leading-relaxed space-y-2">
                            <li>
                              <strong>Lighting System:</strong> Programmable LED and laser lighting synced to music beats.
                            </li>
                            <li>
                              <strong>Sound System:</strong> Acoustically engineered to deliver crisp, powerful sound without distortion.
                            </li>
                            <li>
                              <strong>Visual Displays:</strong> High-resolution LED screens for dynamic visuals and branding.
                            </li>
                            <li>
                              <strong>Climate Control:</strong> Efficient HVAC to maintain comfort despite packed crowds.
                            </li>
                            <li>
                              <strong>Security Systems:</strong> Advanced surveillance and access control for guest safety.
                            </li>
                          </ul>


                           <p className="text-gray-700 leading-relaxed mb-8">These technological features were carefully selected and installed to ensure longevity, ease of use, and scalability for future upgrades.</p>
                        </div>

                        <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                        
                        <span>Product Supply and Custom Fabrication</span>
                        </h2>
                        <div>
                          <p className="text-gray-700 leading-relaxed mb-8">As Nepal’s top supplier for nightclub interiors and products, RG Creations took full responsibility for sourcing and fabricating:</p>
                          <ul className="list-disc pl-6 pb-8 text-gray-700 leading-relaxed space-y-2">
                            <li>Custom seating and furniture</li>
                            <li>Bar counters and shelving</li>
                            <li>Decorative lighting fixtures</li>
                            <li>Dance floor materials with anti-slip properties</li>
                            <li>Acoustic panels and soundproofing materials</li>
                            <li>DJ booth construction and equipment mounts</li>
                          </ul>


                          <p className="text-gray-700 leading-relaxed mb-8">Our strong relationships with local and international manufacturers allowed us to provide premium quality materials while respecting budget and timeline constraints.</p>

                        </div>



                         <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                        
                        <span>Overcoming Challenges</span>
                        </h2>
                        <div>
                          <p className="text-gray-700 leading-relaxed mb-8">
                            Building a nightclub of this caliber in Kathmandu presented unique challenges:
                          </p>
                          <ul className="list-disc pl-6 pb-8 text-gray-700 leading-relaxed space-y-2">
                            <li>
                              <strong>Logistical Constraints:</strong> Transporting large materials through narrow city roads required meticulous planning.
                            </li>
                            <li>
                              <strong>Local Regulations:</strong> Ensuring compliance with building codes, fire safety, and noise ordinances.
                            </li>
                            <li>
                              <strong>Climate Considerations:</strong> Designing systems that work effectively in Kathmandu’s seasonal variations.
                            </li>
                            <li>
                              <strong>COVID-19 Pandemic:</strong> Navigating construction delays and health protocols while maintaining quality standards.
                            </li>
                          </ul>


                          <p className="text-gray-700 leading-relaxed mb-8">Our project management team’s expertise and adaptability ensured these challenges were met without compromising on quality or deadlines.</p>
                        </div>


                        <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                        
                        <span>The Impact on Nepal’s Nightlife</span>
                        </h2>
                        <div>
                          <p className="text-gray-700 leading-relaxed mb-8">
                            Since its grand opening, Dejavu Club has revolutionized Kathmandu’s nightlife by:
                          </p>

                        <ul className="list-disc pl-6 pb-8 text-gray-700 leading-relaxed space-y-2">
                          <li>Elevating expectations for club design and ambiance</li>
                          <li>Attracting international DJs and global partygoers</li>
                          <li>Creating new job opportunities within the hospitality and entertainment sectors</li>
                          <li>Inspiring other venue owners to upgrade and innovate their spaces</li>
                        </ul>


                          <p className="text-gray-700 leading-relaxed mb-8">
                            Dejavu Club now ranks among the world’s top 40 nightclubs, a testament to Nepal’s growing presence on the global entertainment map and RG Creations’ commitment to excellence.
                          </p>
                        </div>

                         <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                        
                        <span>Client and Guest Testimonials</span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                          “RG Creations brought our dream to life with professionalism and creativity. Dejavu Club is now a landmark in Kathmandu’s nightlife.”<br/>
                          — Owner, Dejavu Club
                          <br/> <br/>
                          “The atmosphere, lighting, and sound are unlike anything we’ve experienced before. It’s a world-class club right here in Nepal.”<br/>
                          — International DJ
                        </p>

                        <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                        
                        <span>Our Continued Commitment</span>
                        </h2>
                         <p className="text-gray-700 leading-relaxed mb-8">
                          RG Creations Nepal Pvt Ltd remains dedicated to pushing boundaries in interior design and product supply for entertainment venues. Our experience with Dejavu Club has set a new benchmark, and we are eager to bring the same level of quality and innovation to upcoming projects across Nepal and beyond.

                         </p>

                        <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                        
                        <span>Conclusion</span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                          Transforming a vision into reality requires passion, skill, and dedication. The journey of designing Dejavu Club reflects RG Creations’ strengths in blending architectural innovation, advanced technology, and premium product supply to create unforgettable spaces. As nightlife in Nepal continues to flourish, we are proud to play a pivotal role in shaping its future.
                        </p>



                     
      
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
              {/* Comments Section */}
             
            </div>
    </div>
  );
};

export default BlogPost;
