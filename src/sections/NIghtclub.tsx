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
                className="w-full h-96 object-cover hover:scale-110 duration-300 transition-all rounded-sm shadow-lg"
              />
            </div>
            <div className="lg:pl-8 pt-6 pl-2 bg-white shadow-md rounded-md">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                OUR FEATURES
               
              </h3>
               <ul className="text-gray-600 text-sm leading-relaxed mb-8 list-disc list-inside space-y-2">
                    <li>Customized interior designs tailored to your brand identity</li>
                    <li>Advanced acoustic engineering for premium sound clarity</li>
                    <li>Dynamic LED and architectural lighting systems</li>
                    <li>Durable, stylish flooring designed for high foot traffic</li>
                    <li>Functional layouts optimizing dance floors, bars, and VIP areas</li>
                    <li>Compliance with safety, fire, and ventilation standards</li>
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
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
               WHY CHOOSE US?
              </h3>
               <ul className="text-gray-600 text-sm leading-relaxed mb-8 list-disc list-inside space-y-2">
                    <li>Proven track record with internationally acclaimed projects</li>
                    <li>Collaboration with top sound and lighting experts</li>
                    <li>End-to-end project management from design to delivery</li>
                    <li>On-time, on-budget execution with attention to detail</li>
                    <li>Use of premium materials ensuring durability and style</li>
                    <li>Customer-focused approach with transparent communication</li>
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

export default Nightclub