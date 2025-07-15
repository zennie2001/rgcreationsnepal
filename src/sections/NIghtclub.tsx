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
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Designing Experiences. Building Icons.
               
              </h3>
               <p className="text-gray-600 text-sm leading-relaxed mb-8  space-y-2">
                    At RG Creations Nepal, we’re not just builders—we're creators of iconic nightlife destinations that redefine entertainment in Nepal and beyond. Recognized as one of the best nightclub designers in Nepal, our work seamlessly blends architecture, ambiance, sound, lighting, and performance into a single unforgettable experience.
                    <br/>
                    We are proud to share that one of our flagship projects has secured the 44th position on DJ Mag’s prestigious list of the World's Top 100 Clubs for 2025—a historic moment for Nepal's nightlife and a testament to our craftsmanship, creativity, and commitment to world-class quality.
                    <br/>
Whether you're building a rooftop lounge in Kathmandu, an underground club in Pokhara, or an exclusive VIP venue in a resort town, RG Creations Nepal offers a complete solution—from concept to execution.
                </p>
                            
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
               Why We’re the Best Nightclub Construction Company in Nepal
              </h3>
               <ul className="text-gray-600 text-sm leading-relaxed mb-8 list-disc pl-4 list-inside space-y-2">
                    <li> <strong>Globally Recognized Projects:</strong> From design to delivery, our club build ranked #44 on DJ Mag’s Top 100 Clubs, putting Nepal on the global nightlife map.</li>
  <li> <strong>Turnkey Design & Build:</strong> We handle everything—planning, permits, architecture, interiors, MEP, lighting, and AV integration.</li>
  <li><strong>Nightclub Equipment Supply:</strong> We source and supply world-class gear—professional DJ setups, intelligent lighting, LED walls, CO2 jets, bar units, and sound systems.</li>
  <li><strong>Expert Consulting Services:</strong> We help clients refine their business model, club layout, licensing strategy, and ROI optimization.</li>
  <li><strong>Trusted by Top Venues:</strong> From Legend Nepal and Faces Lounge to Victory Lounge and Taaj Palace, our footprint spans Nepal’s top-tier nightlife destinations.</li>
                </ul>
              {/* <button className="text-gray-500 text-sm font-medium tracking-widest hover:text-black transition-colors">
                READ MORE
              </button> */}
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


      </div>
      </section>
  )
}

export default Nightclub