import Banquet from '@/sections/Banquet'
import BanquetHero from '@/sections/BanquetHero'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden'>
      <BanquetHero/>
      <Banquet/>
    </div>
  )
}

export default page