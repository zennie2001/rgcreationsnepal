import AboutSwotHero from '@/sections/AboutSwotHero'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden'>
        <AboutSwotHero/>
         {/* SWOT Analysis Section */}
<div className="w-full bg-[#f6f7f8] py-16 px-4 md:px-10 lg:px-20">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">SWOT Analysis for RG Creations Pvt. Ltd.</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 text-[15px] leading-relaxed">

    {/* Strengths */}
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-[#133950]">
      <h3 className="text-xl font-semibold uppercase mb-4">Strengths</h3>
      <ul className="space-y-3">
        <li><strong>Specialization in Premium Projects:</strong> We excel in designing and constructing high-end banquet halls, nightclubs, and luxury hospitality venues that set industry benchmarks.</li>
        <li><strong>Turnkey Project Management:</strong>  From design to final execution, we offer complete project solutions under one roof, ensuring seamless delivery.</li>
        <li><strong>Experienced Team:</strong> Our architects, engineers, and creative consultants bring years of experience in delivering landmark entertainment venues.</li>
        <li><strong>Strong Industry Network:</strong> We have established strong connections with leading vendors, suppliers, and contractors, ensuring the highest quality of materials and services.</li>
        <li><strong>Reputation for Excellence:</strong> Our portfolio includes high-profile projects like Rambagh Mahal and Harsa Batika, demonstrating our ability to deliver large-capacity and iconic venues.</li>
      </ul>
    </div>

    {/* Weaknesses */}
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-[#133950]">
      <h3 className="text-xl font-semibold uppercase mb-4">Weaknesses</h3>
      <ul className="space-y-3">
        <li><strong>Selective Project Range:</strong>We primarily focus on premium, large-scale projects and do not take on low-budget or small-scale developments. While this upholds our quality standards, it limits our potential client base in mid-tier markets.</li>
        <li><strong>Higher Entry Cost for Clients:</strong> Our high-quality finishes and custom solutions may not be accessible to clients with limited budgets.</li>
      </ul>
    </div>

    {/* Opportunities */}
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-[#133950] ">
      <h3 className="text-xl font-semibold uppercase mb-4">Opportunities</h3>
      <ul className="space-y-3">
        <li><strong>Expanding Urban Nightlife Scene: </strong> Rapid urbanization and changing lifestyles in Nepal and South Asia are increasing the demand for premium hospitality and entertainment spaces.</li>
        <li><strong>Partnership with Landowners:</strong>  Our build-lease-partner model opens doors to landowners who want to capitalize on their property without managing the business.</li>
        <li><strong>Franchise or Licensing:</strong> Offering our design and execution model as a franchise could help expand our brand across cities without overextending operationally.</li>
        <li><strong>Sustainable Construction:</strong> Integrating eco-friendly materials and energy-efficient systems can attract socially conscious clients and open doors to green building certifications.</li>
      </ul>
    </div>

    {/* Threats */}
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-[#133950] ">
      <h3 className="text-xl font-semibold uppercase  mb-4">Threats</h3>
      <ul className="space-y-3">
        <li><strong>Market Saturation in Urban Areas:</strong> Major cities may soon become saturated with similar offerings, increasing competition.</li>
        <li><strong>Economic Instability:</strong>In times of economic downturn, luxury and hospitality projects are among the first to be postponed or canceled.</li>
        <li><strong>Rising Construction Costs:</strong> Global fluctuations in material prices and supply chain delays can impact project timelines and profitability.</li>
        <li><strong>Regulatory Changes:</strong> Zoning, safety, or hospitality licensing changes could affect ongoing or planned developments.</li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default page