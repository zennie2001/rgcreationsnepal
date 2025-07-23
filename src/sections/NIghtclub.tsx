import React from 'react'

const Nightclub = () => {
  return (
      <section className="bg-gray-50 py-16 px-4 md:px-0">
      <div className="container mx-auto">

         {/* Premium Nightclub Section */}
        <div className="mb-10">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden">
              <img
                src="/dejavu.png "
                alt="Premium Nightclub Interior"
                className="w-full h-[450px] object-cover hover:scale-110 duration-300 transition-all rounded-sm shadow-lg"
              />
            </div>
            <div className="lg:pl-8 pt-6 pl-2 bg-white shadow-md rounded-md">
              <h3 className="text-3xl md:text-4xl font-bold text-[#333d49] mb-6">
                Designing Iconic Nightlife Spaces That Drive Business and Buzz
              </h3>
               <p className="text-gray-600 text-sm leading-relaxed mb-8  space-y-2">
                    At RG Creations Pvt. Ltd., we take pride in our expertise in crafting top-notch nightclub spaces across Nepal. Our mission is to design visually captivating, tech-savvy, and highly functional nightlife venues that not only draw in crowds but also enhance the reputation of hospitality brands. Whether you're setting up a luxurious club in Kathmandu, a trendy bar-lounge in Pokhara, or a unique underground venue in Chitwan, our talented team combines architectural flair, creative interiors, and event-ready features to ensure your space becomes a must-visit destination. We don’t just construct nightclubs.
                    <br/>
                   we create immersive experiences that resonate with the atmosphere, provide exceptional sound and lighting, and leave a memorable mark on your guests. With a keen insight into the latest trends in hospitality construction and an understanding of nightlife audiences, RG Creations guarantees that every project we undertake meets international standards while showcasing your brand's distinct personality.
                </p>
            </div>
          </div>
        </div>

        {/* why choose us */}
        <div className="mb-10">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 lg:pr-8 pl-4 pt-6 bg-white shadow-md rounded-md">
              <h3 className="text-3xl md:text-4xl font-bold text-[#333d49] mb-6">
               Why RG Creations is Nepal’s Trusted Nightclub Construction Expert
              </h3>
               <ul className="text-gray-600 text-sm leading-relaxed mb-8 list-disc pl-4 list-inside space-y-2">
                     <li>Specialized in hospitality and entertainment venue construction</li>
                      <li>End-to-end service covering architecture, interiors, branding, and MEP</li>
                      <li>Expertise in soundproofing, acoustic design, and club lighting systems</li>
                      <li>Track record of delivering trendsetting clubs and lounges in Nepal</li>
                      <li>Trusted by leading event venues, casinos, bars, and private resorts</li>
                </ul>
                <p className="text-gray-600 text-sm leading-relaxed mb-8  space-y-2">
                  Whether you’re targeting high-end clientele, the millennial nightlife crowd, or hosting events and concerts, our designs ensure optimal layout, safety, ambiance, and impact.
                </p>
            </div>
            <div className="order-1 overflow-hidden lg:order-2">
              <img
               src="/about/3.jpg"
                alt="Modern Interior Design"
                className="w-full h-[480px] hover:scale-110 duration-300 transition-all object-cover rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>

         <div className="lg:pl-8 pt-8 pl-2 ">
              <h3 className="text-3xl md:text-4xl font-bold text-[#333d49] mb-6">
                 Our Nightclub Construction Services
              </h3>
               <p className="text-gray-600 text-sm leading-relaxed mb-8  space-y-2">
                   Our comprehensive service approach helps you get started quicker, smarter, and with a focus on long-term success. We take care of everything — from the initial idea to the final touches — all in one place. 
                </p>

                 <ul className="text-gray-600 text-sm leading-relaxed mb-8 list-disc pl-4 list-inside space-y-2">
                      <li>
                        <strong>Architectural Design & Planning:</strong>  
                        We create conceptual layouts, 3D designs, and drawings ready for municipal approval, ensuring structural and MEP integration.
                      </li>
                      <li>
                        <strong>Civil & Structural Construction:</strong>  
                        Our skilled construction and project management teams oversee everything from the foundation to the roofing and club zoning.
                      </li>
                      <li>
                        <strong>Lighting, Sound & Electrical:</strong>  
                        We set up advanced lighting systems with programmable LEDs, integrate DJ booths, and provide high-capacity wiring for powerful sound.
                      </li>
                      <li>
                        <strong>HVAC and Acoustic Insulation:</strong>  
                        We offer tailored solutions for climate control and noise reduction, using top-notch materials and technology.
                      </li>
                      <li>
                        <strong>Interior Design & Finishing:</strong>  
                        Whether you prefer modern, luxury, or industrial styles, we design interiors with carefully selected materials, custom furnishings, and spatial planning that enhances crowd flow and energy.
                      </li>
                </ul>
            </div>

      </div>
      </section>
  )
}

export default Nightclub
