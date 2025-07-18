import AboutResearchHero from '@/sections/AboutResearch'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden'>
        <AboutResearchHero/>


        <div className="bg-white text-gray-800 px-6 md:px-12 py-12 max-w-6xl mx-auto">
     
      <p className="text-base md:text-lg text-gray-700 mb-6">
        At RG Creations Nepal, we believe that excellence in construction and design goes hand in hand with continuous innovation. Our Research and Technology division is dedicated to discovering new ways to elevate the standards of modern hospitality and commercial spaces in Nepal and beyond.
      </p>

      <p className="text-base md:text-lg text-gray-700 mb-12">
        As a company at the forefront of turnkey construction, premium interior design, and furniture manufacturing, we actively invest in cutting-edge technology, materials research, and sustainable practices. From 3D architectural modeling to smart lighting systems, acoustic engineering, and space-optimized furniture design, we bring the latest innovations into every phase of our projects.
      </p>

      {/* Content Blocks */}
      <div className="space-y-8">
        <div className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 flex items-center gap-2">
            <span className="text-2xl"></span> Advanced Construction Techniques
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            We are constantly researching advanced construction techniques to ensure that our buildings are not only durable and beautiful but also efficient and future-proof. Our team integrates modern construction methodologies such as prefabrication, modular structures, and environmentally conscious building practices to reduce waste, save time, and improve overall project performance.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 flex items-center gap-2">
            <span className="text-2xl"></span> Smart Design Through Technology
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            We leverage interior design software, real-time visualization tools, and data-driven space planning to deliver highly personalized and functional environments. Whether it’s a luxury banquet hall or a boutique hospitality project, our approach ensures that form and function are perfectly balanced using the latest digital tools.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 flex items-center gap-2">
            <span className="text-2xl"></span> Sustainable Innovation
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Sustainability is a key driver in our research efforts. We continuously explore eco-friendly materials, energy-efficient lighting, natural ventilation systems, and other green building elements that reduce environmental impact while enhancing the user experience. Our goal is to create buildings and spaces that are as responsible as they are remarkable.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 flex items-center gap-2">
            <span className="text-2xl"></span> Furniture Innovation & Custom Solutions
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            In our in-house furniture production, technology plays a critical role. We use precision-based manufacturing techniques to produce high-quality, durable, and customizable furniture solutions tailored for hotels, lounges, banquet halls, and office spaces. From ergonomic seating to modular banquet setups, our R&D ensures that each product is optimized for both style and practicality.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 flex items-center gap-2">
            <span className="text-2xl"></span> Future-Ready Projects
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Innovation is an ongoing journey. At RG Creations Nepal, we are committed to staying ahead of trends and technologies that shape the future of our industry. By combining creative vision with technological expertise, we ensure that every project we undertake is not only relevant for today but resilient for tomorrow.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page