import React from 'react'
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import ServicesProjectHero from '@/sections/ServicesProjectHero';
import Link from 'next/link';
import ServicesBuildHero from '@/sections/ServiceBuildHero';

export const metadata = {
  title: "Project Management & Turnkey Solutions Nepal",
  description:"Get quality nightclub equipment from RG Creations, a trusted supplier supporting Nepal’s hospitality and entertainment construction sectors."};

const page = () => {
  return (
    <div className='overflow-hidden'>
        <ServicesBuildHero />

        <section className="w-full container mx-auto">
        <div className=" py-20 bg-white">
          {/* Hero Section */}
          {/* <section className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 h-[85vh]">
              Image 1
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 ">
                  <div className="w-full h-full  flex items-center justify-center">
                    <img
                      src="/s1.jpg"
                      alt="Image 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              Image 2
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <img
                      src="/s3.jpg"
                      alt="Image 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              Image 3 with Text Overlay
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-400">
                  <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
                    <img
                      src="/s2.jpg"
                      alt="Image 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* Main Content Section */}
          <section className=" px-4 lg:px-8">
            <div className=" mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-8 col-span-2">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#333d49] leading-tight mb-6">
                      We Build, Lease, or Partner
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      In today’s fast-growing hospitality and event management industry, banquet halls are in constant demand. From weddings and birthdays to corporate functions and high-end social events, venues that offer luxury, convenience, and ample space are highly sought after. If you own land in a prime location, you’re sitting on a goldmine of potential.
                        <br/>
                        <br/>Rather than leaving your land idle or waiting for the perfect buyer, you can turn your land into a long-term, income-generating asset by partnering with us to build palace-style banquet halls. Whether you’re looking to lease your land, develop it with our support, or enter into a joint venture partnership, we offer a range of flexible models to help you maximize returns while minimizing risks.

                    </p>

                    <section className="max-w-4xl mx-auto px-4 py-12 ">
                      <h2 className="text-3xl font-bold text-[#133950] mb-8 ">
                      Why Banquet Halls Are a High-Return Investment
                      </h2>
                      <ol className="list-decimal list-inside space-y-6 text-gray-700 text-sm leading-relaxed">
                        <li>
                          <strong>Rising Demand in Nepal and Beyond</strong><br />
                          Nepal's event culture is booming. With a surge in middle- and upper-class populations, celebrations are becoming more elaborate. Weddings, receptions, corporate events, and cultural gatherings need elegant venues that can accommodate large crowds and offer luxury experiences. Well-located banquet halls are booked months in advance, especially during wedding and festival seasons.
                        </li>
                        <li>
                          <strong>Low Operational Risk</strong><br />
                          Unlike hotels or restaurants that require daily operations and staff, a banquet hall business operates mainly around events. That means fewer overheads, lower operational complexity, and higher profitability on event days.
                        </li>
                        <li>
                          <strong>High Leasing Value</strong><br />
                          If you prefer a passive income model, leasing a ready-to-use banquet hall in a prime location can fetch premium monthly rentals. Event management companies, hotels, and hospitality brands are always looking to lease elegant venues on long-term contracts.
                        </li>
                      </ol>
                    </section>

                  </div>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Quality Craftsmanship */}
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#133950] rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#133950]">
                        What We Offer
                      </h3>
                      <ul className="text-gray-600 text-sm list-disc list-inside leading-relaxed text-justify">
                        
                          <li>
                            <strong>Turnkey Construction Solutions:</strong> We design and construct palace-inspired banquet halls using modern engineering and local design sensibilities. From architectural design and permits to material sourcing and interior decoration, we handle every stage of the development process.
                          </li>
                          <li>
                            <strong>Lease Model:</strong> If you own land and want to earn without taking on the construction cost, we can lease the land, build a banquet hall at our expense, and offer you fixed monthly income or a share of the event profits.
                          </li>
                          <li>
                            <strong>Joint Venture Partnerships:</strong> Prefer to be more involved? We’re open to joint venture models where both parties invest and share profits. We bring the design, branding, construction, and operational expertise—while you contribute the land. Together, we build a brand that delivers long-term recurring revenue.
                          </li>
                          <li>
                            <strong>Marketing and Brand Support:</strong> We don’t just build structures—we create premium hospitality brands. From logo and website development to social media marketing and client bookings, we help establish your banquet hall as a top-tier venue.
                          </li>
                      </ul>
                    </div>

                    {/* Operational Efficiency */}
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#133950] rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#133950]">
                       Benefits of Partnering With Us
                      </h3>
                      <ul className="list-disc text-sm text-gray-600 leading-relaxed pl-8">
                          <li>
                            <strong>Expert Construction Team:</strong> Our experienced architects, engineers, and interior designers ensure your banquet hall is built to luxury standards, with optimal space utilization and timeless design.
                          </li>
                          <li>
                            <strong>International Material Sourcing:</strong> Through our global procurement network, we source high-end fixtures, flooring, lighting, and acoustics that give your venue an edge.
                          </li>
                          <li>
                            <strong>Cost Efficiency & Speed:</strong> Our project management and supply chain strength allow us to deliver world-class banquet halls on time and within budget, without compromising on quality.
                          </li>
                          <li>
                            <strong>Trusted Portfolio:</strong> Our completed projects include:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>Rambagh Mahal</li>
                              <li>Taj Reception</li>
                              <li>Deja Vu Lounge</li>
                              <li>Imperial Banquet (Chabahil, Bhaktapur, Itahari)</li>
                              <li>Victory Lounge</li>
                              <li>Panas Banquet</li>
                              <li>And more.</li>
                            </ul>
                          </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Content - CTA Card */}
                <div className="  lg:w-auto lg:pl-8 md:mt-20 ">
                  <div className="w-full bg-[#133950] text-white p-8">
                    <h2 className="text-2xl font-bold mb-4">
                      Get a appointment with our Expert
                    </h2>
                    <p className="pt-2 text-sm">
                      Cras tincidunt tellus at mi tristique rhoncus. Etiam
                      dapibus rutrum leo consectetur accumsan. Vivamus viverra
                      ante turpis.
                    </p>
                    <Link
                        href="/book-appointment"
                        className="my-10 inline-flex items-center justify-center w-12 h-12 bg-white text-darkGreen hover:bg-gray-100 transition-colors"
                        >
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
{/* 
       <div className="w-full lg:h-[950px] h-[550px] px-8 bg-gray-100 relative flex flex-col items-center pt-16">
      <h2 className="lg:text-5xl text-2xl font-bold text-[#133950] text-center mb-10">
        Project Management & Turnkey Solutions 
      </h2>

      <section
        className="
          relative 
          flex justify-center items-center
          lg:w-[1209px] lg:h-[600px] 
          md:w-[600px] w-[300px] h-[300px]
          rounded-xl overflow-hidden
        "
      >
        <iframe
        loading="lazy"
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/joYu4krAWZ4"
          title="Premium Furniture Supply"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div> */}

    </div>
  )
}

export default page