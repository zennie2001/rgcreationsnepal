import Banquet from '@/sections/Banquet'
import BanquetHero from '@/sections/BanquetHero'
import React from 'react'

export const metadata = {
  title: "Elegant Banquet Construction | Top Builder Nepal",
  description:
    "RG Creations Nepal specializes in designing and constructing elegant banquet halls with luxurious finishes, functional layouts, and timeless architecture tailored to your vision.",
};


const page = () => {
  return (
    <div className='overflow-hidden'>
      <BanquetHero/>
      <Banquet/>

      <div className="w-full lg:h-[950px] h-[550px] px-8 bg-gray-100 relative flex flex-col items-center justify-center">
      <h2 className="lg:text-5xl text-2xl font-bold text-[#133950] text-center mb-10">
        Elegant Banquet Hall &<br/> Event venues Construction
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
          src="https://www.youtube.com/embed/Vqq1rA8RkLA"
          title="Premium Furniture Supply"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div>
    </div>
  )
}

export default page