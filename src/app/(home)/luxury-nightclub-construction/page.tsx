import Nightclub from '@/sections/NIghtclub'
import NightclubHero from '@/sections/NightclubHero'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden'>
      <NightclubHero />
      <Nightclub />


     <div className="w-full lg:h-[950px] h-auto px-8 bg-gray-100 relative flex flex-col items-center  pt-12">
      <h2 className="lg:text-5xl text-2xl font-bold text-[#133950] text-center mb-16">
        Luxury Nightclub &<br /> Casino Construction
      </h2>

      <section
        className="
          grid 
          grid-cols-1 
          lg:grid-cols-2 
          gap-8 
          w-full 
          max-w-[1209px]
        "
      >
        <iframe
        loading="lazy"
          className="w-full h-[250px] md:h-[400px] lg:h-[500px] rounded-xl"
          src="https://www.youtube.com/embed/KL6GjVHCRS0"
          title="Luxury Nightclub Casino Construction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
        loading="lazy"
          className="w-full h-[250px] md:h-[400px] lg:h-[500px] rounded-xl"
          src="https://www.youtube.com/embed/nUAGfEXMyjc"
          title="Luxury Nightclub Casino Construction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div>


    </div>
  )
}

export default page