import React from "react";
import { Share2, MessageCircle, User } from "lucide-react";
import blacksmith from "@/assets/images/blacksmith.jpg";
import { blogs } from "@/constants/products";
import BlogCard from "@/components/BlogCard";
import Image from "next/image";
import BlogDetailHero from "@/sections/BlogDetailHero";
import { FaQuoteRight } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";


export const metadata = {
  title: "The Leading Architecture Company in Nepal",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};

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

                <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                  <span>Our Mission and Vision</span>
                  </h2>
               <div>
                 <h2 className="lg:text-3xl text-2xl font-bold   leading-relaxed mb-4 uppercase">
                  <span>Our Mission </span>
                  </h2>
                 <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                  <span>Excellence in Residential and Commercial Construction</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    At RG Creations Nepal Pvt Ltd, quality construction for residential and commercial projects is now more accessible than ever. We strive to be synonymous with opulence, exceptional craftsmanship, and innovation—delivering projects that leave a lasting impression with timeless sophistication.
                  </p>
                  <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                  <span>Luxurious Quality and Craftsmanship</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    We are pioneers in architectural innovation, dedicated to crafting distinctive, elegant, and opulent spaces that set the highest standards for uniqueness and creativity.
                  </p>
                  <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                  <span>Technological Advancements</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                   Committed to integrating the latest technologies and premium materials, we ensure our constructions lead in innovation, efficiency, and sustainability.
                  </p>
                   <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                  <span>Customer-Centric Approach</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                   Our mission centers on understanding the unique aspirations of every client, tailoring each project to reflect their personal vision of luxury and sophistication.
                  </p>
                   <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                  <span>Building Trust, Building Quality</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                  More than structures, we build lasting relationships with our clients. At every stage of the construction process, we prioritize quality, transparency, and trust.
                  </p>
                   <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                  <span>Where Vision Meets Precision</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                   We blend our clients’ vision with our construction expertise to create functional, aesthetically pleasing, and durable buildings that consistently exceed expectations.
                  </p>
                   <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                  <span>RG Creations Nepal Pvt Ltd — The No. 1 Choice for Quality Construction in Residential and Commercial Buildings</span>
                  </h2>

                  <h2 className="lg:text-3xl text-2xl font-bold   leading-relaxed mb-4 uppercase">
                  <span>Our Vision </span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                   To become Nepal’s most trusted and respected architecture and construction firm, known for creativity, reliability, and commitment to sustainable development.
                  </p>
                  
               </div>

               {/* comprehensive services we offer */}
                <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                  <span>Comprehensive Services We Offer</span>
                  </h2>
               <div>
                 
                 <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                  <span>1. Architectural Design & Planning</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    Our architects combine creativity with technical expertise to deliver bespoke designs that align with client needs, local culture, and environmental conditions. We offer full master planning, conceptualization, and detailed architectural drawings.
                  </p>
                  <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                  <span>2. Residential Construction</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    From cozy family homes to luxurious villas, our construction teams ensure that every detail, from foundation to finishing, is handled with utmost care and professionalism.
                  </p>
                  <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                  <span>3. Commercial and Industrial Construction</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                   We have vast experience building office complexes, shopping centers, factories, and warehouses. Our solutions prioritize efficiency, safety, and scalability.
                  </p>
                   <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                  <span>4. Interior Designh</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                   Our interior design experts craft functional and aesthetically pleasing interiors that reflect the client’s personality and optimize space usage.
                  </p>
                   <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                  <span>5. Renovation and Retrofitting</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                  We specialize in upgrading existing structures for improved safety, modern amenities, and enhanced aesthetics, while preserving architectural heritage where applicable.
                  </p>
                   <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                  <span>6. Sustainable and Green Building Solutions</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                  We incorporate eco-friendly materials, energy-efficient technologies, and sustainable construction methods to minimize environmental impact.

                  </p>
                   <h2 className="lg:text-xl font-bold  leading-relaxed mb-4 ">
                  <span>7. Project Management and Consultation</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                  Our dedicated project managers oversee every phase, ensuring timely delivery, budget adherence, and clear communication with clients.

                  </p>

      
                  
               </div>


               {/* Why Choose RG Creations Nepal Pvt Ltd? */}
               <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                  <span>Why Choose RG Creations Nepal Pvt Ltd?</span>
                  </h2>
                <div className="mb-8">
                  <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>Experience and Expertise:</strong> Years of successful project delivery in Nepal’s diverse geographic and climatic zones.
              </li>
              <li>
                <strong>Client-Centric Approach:</strong> We prioritize your vision, budget, and timeline, offering customized solutions and transparent communication.
              </li>
              <li>
                <strong>Cutting-Edge Technology:</strong> Use of the latest software like BIM (Building Information Modeling) for precise planning and construction.
              </li>
              <li>
                <strong>Quality Assurance:</strong> Strong quality control measures and use of premium materials to ensure durability and safety.
              </li>
              <li>
                <strong>Sustainability Focus:</strong> Commitment to green building practices that reduce carbon footprint and operational costs.
              </li>
              <li>
                <strong>Compliance:</strong> Full adherence to Nepal’s building codes, safety standards, and environmental regulations.
              </li>
            </ul>

                </div>

                <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                  <span>Key SEO Keywords We Target</span>
                  </h2>
                  <div className="mb-8">
                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
                      <li>Best architecture firm in Nepal</li>
                      <li>Construction company Kathmandu</li>
                      <li>Sustainable architecture Nepal</li>
                      <li>Residential construction Nepal</li>
                      <li>Commercial building contractors Nepal</li>
                      <li>Interior design services Kathmandu</li>
                      <li>Earthquake-resistant building Nepal</li>
                    </ul>

                  </div>

                  {/* Current Trends in Nepal’s Architecture and Construction */}
                  <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                  <span>Current Trends in Nepal’s Architecture and Construction</span>
                  </h2>
                  <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-8">
                      The construction and architectural sectors in Nepal are evolving rapidly, influenced by both local needs and global trends:
                    </p>
                     <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
                    <li>
                      <strong>Earthquake-Resistant Construction:</strong> After the 2015 earthquake, there is a heightened emphasis on seismic safety and resilient designs.
                    </li>
                    <li>
                      <strong>Green and Sustainable Buildings:</strong> Use of solar energy, rainwater harvesting, eco-friendly materials, and energy-efficient HVAC systems is growing.
                    </li>
                    <li>
                      <strong>Smart Homes and Automation:</strong> Increasing adoption of IoT (Internet of Things) devices to enhance comfort and security.
                    </li>
                    <li>
                      <strong>Urban Vertical Growth:</strong> Kathmandu and other cities are witnessing more multi-story residential and commercial buildings due to land scarcity.
                    </li>
                    <li>
                      <strong>Heritage Conservation:</strong> Renovation and adaptive reuse of traditional buildings to preserve Nepal’s rich cultural heritage.
                    </li>
                  </ul>
                  </div>

                  {/* Our Recent Projects */}
                   <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-4 uppercase">
                  <span>Our Recent Projects</span>
                  </h2>
                  <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed mb-8">
                      We are proud to showcase some of our recently completed projects:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
                      <li>
                        <strong>Luxury Residential Villa in Lalitpur:</strong> A blend of modern minimalism and traditional Nepalese style with sustainable building materials.
                      </li>
                      <li>
                        <strong>Commercial Office Building in Kathmandu:</strong> Featuring smart energy systems and open-plan interiors to boost productivity.
                      </li>
                      <li>
                        <strong>Boutique Hotel in Pokhara:</strong> Designed to maximize mountain views while using green building techniques.
                      </li>
                      <li>
                        <strong>Renovation of Historic Building:</strong> Preserving architectural elements while modernizing for safety and functionality.
                      </li>
                    </ul>

                   

                  </div>

                    {/* Client Testimonials */}
                    <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-4 uppercase">
                  <span>Client Testimonials</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    “RG Creations transformed our ideas into a stunning home that fits perfectly into the landscape and our lifestyle. Their team was professional and communicative throughout the project.”<br/>
                    — Prakash B., Kathmandu
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    “Thanks to RG Creations, our office building is not only beautiful but also energy efficient and safe. Their expertise in project management made the whole process seamless.”<br/>
                    — Shristi R., Lalitpur
                  </p>

                    {/* How We Work – Our Process */}
                   <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-4 uppercase">
                  <span>How We Work – Our Process</span>
                  </h2>
                  <ol className="list-decimal pl-10 pb-8 text-gray-700 leading-relaxed space-y-2">
                    <li>
                      <strong>Initial Consultation:</strong> Understanding your vision, budget, and timeline.
                    </li>
                    <li>
                      <strong>Site Analysis:</strong> Assessing location, terrain, and local regulations.
                    </li>
                    <li>
                      <strong>Design Development:</strong> Creating sketches, 3D models, and detailed plans.
                    </li>
                    <li>
                      <strong>Material Selection:</strong> Advising on durable and sustainable materials.
                    </li>
                    <li>
                      <strong>Construction:</strong> Skilled execution by experienced contractors under expert supervision.
                    </li>
                    <li>
                      <strong>Quality Checks:</strong> Rigorous inspections to ensure standards are met.
                    </li>
                    <li>
                      <strong>Project Handover:</strong> Final walkthrough and client approval.
                    </li>
                  </ol>



                    {/* How We Work – Our Process */}
                   <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-4 uppercase">
                  <span>Contact RG Creations Nepal Pvt Ltd</span>
                  </h2>
                   <p className="text-gray-700 leading-relaxed mb-8">
                    Are you ready to bring your architectural dreams to life? Whether it’s a new home, commercial space, or renovation project, RG Creations Nepal Pvt Ltd offers unmatched expertise and commitment. Contact us today to discuss your project or schedule a free consultation.
                   </p>
                   <p className="text-gray-700 leading-relaxed flex items-center gap-2"><FaMapPin /> Address: Baluwatar, Kathmandu, Nepal</p>
                   <p className="text-gray-700 leading-relaxed flex items-center gap-2"><FaPhoneAlt /> Phone: +977-1-4524806</p>
                   <p className="text-gray-700 leading-relaxed flex items-center gap-2"><MdOutlineMail /> Email: info@rgcreationsnepal.com </p>
                   <p className="text-gray-700 leading-relaxed flex items-center gap-2"> <TbWorld />Website: www.rgcreationsnepal.com</p>


                  



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
