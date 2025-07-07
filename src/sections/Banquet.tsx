import React from 'react'

const Banquet = () => {
  return (
      <section className="bg-gray-50 py-16 px-4 md:px-0">
      <div className="container mx-auto">

         {/* Premium Nightclub Section */}
        <div className="mb-10">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden">
              <img
                src="/about/banquet (1).jpg "
                alt="Premium Nightclub Interior"
                className="w-full h-96 object-cover hover:scale-110 duration-300 transition-all rounded-sm shadow-lg"
              />
            </div>
            <div className="lg:pl-8 pt-6 pl-2 bg-white shadow-md rounded-md">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                OUR FEATURES
               
              </h3>
               <ul className="text-gray-600 text-sm leading-relaxed mb-8 list-disc list-inside space-y-2">
                    <li>Spacious, flexible floor plans for various event sizes</li>
                    <li>Grand entrances and high ceilings creating a welcoming atmosphere</li>
                    <li>Elegant interiors with premium finishes and decorative lighting</li>
                    <li>Modern amenities including sound systems and climate control</li>
                    <li>Convenient access to kitchens, restrooms, and parking</li>
                    <li>Compliance with fire safety, accessibility, and building codes</li>
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
                    <li>Expertise in designing event spaces that combine beauty and practicality</li>
                    <li>Strong focus on guest comfort and accessibility</li>
                    <li>Ability to customize layouts and interiors to client specifications</li>
                    <li>Reliable project delivery with minimal disruption</li>
                    <li>Attention to detail in aesthetics and construction quality</li>
                    <li>Comprehensive post-construction support and maintenance advice</li>
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

export default Banquet