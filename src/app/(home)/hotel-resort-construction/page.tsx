import Hotel from '@/sections/Hotel';
import HotelHero from '@/sections/HotelHero'
import React from 'react'

export const metadata = {
  title: "Hotel Resort Construction | Top Builder Nepal",
  description:
    "Meet the expert team behind RG Creations, a top construction company in Nepal committed to delivering quality and excellence.",
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