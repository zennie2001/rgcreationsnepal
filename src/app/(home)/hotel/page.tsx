import Hotel from '@/sections/Hotel'
import HotelHero from '@/sections/HotelHero'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden'>
      <HotelHero/>
      <Hotel />
    </div>
  )
}

export default page