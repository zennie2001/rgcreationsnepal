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
                src="/about/banquet (1).jpg"
                alt="Premium Nightclub Interior"
                className="w-full h-96 object-cover hover:scale-110 duration-300 transition-all rounded-sm shadow-lg"
              />
            </div>
            <div className="lg:pl-8 pt-6 pl-2 bg-white shadow-md rounded-md">
              <h3 className="text-3xl md:text-4xl font-bold text-[#333d49] mb-6">
                Elegant Banquet Hall & Event Venues Construction in Nepal
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 space-y-2">
                If you're on the hunt for Nepal's most iconic banquet hall or a venue that leaves a lasting impression, look no further than RG Creations Nepal. We specialize in crafting stunning banquet spaces, designing luxurious hospitality interiors, and creating unforgettable event venues. As the leading designers of hospitality structures and banquet halls in Nepal, we pride ourselves on our meticulous attention to detail and breathtaking designs.
                <br />
                Every one of our fully-equipped venues is thoughtfully designed to enhance any occasion and is Vastu-compliant, ensuring a seamless blend with both the natural and built environments.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-10">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 lg:pr-8 pl-4 pt-6 bg-white shadow-md rounded-md">
              <h3 className="text-3xl md:text-4xl font-bold text-[#333d49] mb-6 uppercase">
                Banquet Designer Nepal – Custom Architectural Designs That Make a Statement
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Are you planning a stunning wedding venue, a space for corporate events, or a versatile event center? Look no further than RG Creations, where we excel in:
              </p>
              <ul className="text-gray-600 text-sm leading-relaxed mb-6 list-disc list-inside space-y-2">
                <li>Crafting unique banquet designs and 3D models</li>
                <li>Creating personalized interior designs for banquet halls</li>
                <li>Enhancing guest experiences with top-notch sound management and lighting solutions</li>
                <li>Strategically planning staging, kitchen, and lounge areas</li>
                <li>Incorporating Vastu principles into banquet design right here in Nepal</li>
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                We don’t just build walls — we craft experiences that stay in the hearts of your guests.
              </p>
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

        {/* Best Banquet Construction Company Section */}
        <div className="mb-10">
          <div className="bg-white shadow-md rounded-md px-6 py-10">
            <h3 className="text-3xl md:text-4xl font-bold text-[#333d49] mb-6">
              Best Banquet Construction Company in Nepal
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Looking for the top banquet construction company in Nepal? You've come to the right place! Our dedication to luxurious design, impeccable execution, and smart space planning has earned us the trust of developers and entrepreneurs all over the country.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Here’s what we specialize in:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
              <li>Modern banquet hall construction</li>
              <li>Traditional and fusion-themed interiors</li>
              <li>Rooftop and open-air event venues</li>
              <li>Compact banquet solutions for urban settings</li>
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              If you’re on the hunt for the best banquet space in Nepal, there’s a good chance we’ve already had a hand in creating it!
            </p>
          </div>
        </div>

        {/* Best Event Venue Designers Section */}
        <div className="mb-10">
          <div className="bg-white shadow-md rounded-md px-6 py-10">
            <h3 className="text-3xl md:text-4xl font-bold text-[#333d49] mb-6">
              Best Event Venue Designers in Nepal
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              At RG Creations, we know what it takes to make a space memorable. From boutique event venues to large-scale reception halls, we blend elegance with practicality.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Our event venue services include:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
              <li>Site feasibility and design</li>
              <li>Capacity-focused planning</li>
              <li>Guest circulation & parking design</li>
              <li>Lounge, VIP, and green room setup</li>
              <li>Instagram-worthy interiors that go viral!</li>
            </ul>
          </div>
        </div>

        {/* Hospitality Construction Experts Section */}
        <div className="mb-10">
          <div className="bg-white shadow-md rounded-md px-6 py-10">
            <h3 className="text-3xl md:text-4xl font-bold text-[#333d49] mb-6">
              Hospitality Construction Experts
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              From 5-star hotels and luxury resorts to banquet complexes and private clubs, we’re known for elevating the hospitality landscape in Nepal.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Our hospitality construction services cover:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
              <li>Full-scale civil construction</li>
              <li>Turnkey interior finishing</li>
              <li>Branding and signage design</li>
              <li>Energy-efficient building systems</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Banquet
