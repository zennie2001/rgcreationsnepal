import Hotel from '@/sections/Hotel';
import HotelHero from '@/sections/HotelHero'
import React from 'react'

export const metadata = {
  title: "Hotel Resort Construction | Top Builder Nepal",
  description:
    "RG Creations Nepal specializes in hotel and resort construction, delivering luxurious, sustainable, and innovative hospitality spaces tailored to Nepal’s unique landscape.",
};


const page = () => {
  return (
    <div className='overflow-hidden'>
        <HotelHero />
       <Hotel />
    </div>
  )
}

export default page