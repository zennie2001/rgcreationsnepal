import React from 'react'

const Hotel = () => {
  return (
      <section className="bg-gray-50 py-16 px-4 md:px-0">
      <div className="container mx-auto">

         {/* Premium Nightclub Section */}
        <div className="mb-10">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden">
              <img
                src="/luxurious.jpg "
                alt="Premium Nightclub Interior"
                className="w-full h-96 object-cover hover:scale-110 duration-300 transition-all rounded-sm shadow-lg"
              />
            </div>
            <div className="lg:pl-8 pt-6 pl-2 bg-white shadow-md rounded-md">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                OUR FEATURES
               
              </h3>
               <ul className="text-gray-600 text-sm leading-relaxed mb-8 list-disc list-inside space-y-2">
                      <li>Custom hotel and resort design tailored to target guests</li>
                        <li>Construction of guest rooms, lobbies, restaurants, and recreational facilities</li>
                        <li>Energy-efficient building solutions and sustainable materials</li>
                        <li>Integration of smart technology and modern HVAC systems</li>
                        <li>High-quality finishes and furnishings for premium guest experiences</li>
                        <li>Strict adherence to hospitality industry standards and safety regulations</li>
                </ul>
                            
              {/* <button className="text-gray-500 text-sm font-medium tracking-widest hover:text-black transition-colors">
                READ MORE
              </button> */}
            </div>
          </div>
        </div>


        {/* why choose us */}
        <div className="mb-10">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 lg:pr-8 pl-4 pt-6 bg-white shadow-md rounded-md">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 uppercase">
               WHY CHOOSE RG Creations Nepal?
              </h3>
               <ul className="text-gray-600 text-sm leading-relaxed mb-8 list-disc list-inside space-y-2">
                    <li>Extensive experience in hospitality construction projects</li>
                    <li>Collaborative approach with architects, designers, and operators</li>
                    <li>Commitment to sustainable and durable building practices</li>
                    <li>Transparent communication and flexible project management</li>
                    <li>Focus on creating spaces that enhance guest satisfaction and revenue</li>
                    <li>Timely delivery and post-project support services</li>
                </ul>
              {/* <button className="text-gray-500 text-sm font-medium tracking-widest hover:text-black transition-colors">
                READ MORE
              </button> */}
            </div>
            <div className="order-1 overflow-hidden lg:order-2">
              <img
               src="/about/3.jpg"
                alt="Modern Interior Design"
                className="w-full h-96 hover:scale-110 duration-300 transition-all object-cover rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>


      </div>
      </section>
  )
}

export default Hotel