import MediaCoverage from '@/sections/MediaCoverage';
import MediaHero from '@/sections/MediaHero'
import React from 'react'


export const metadata = {
  title: "Media Coverage | Best Construction Company Nepal",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};



const page = () => {

  

  return (
    <div className='overflow-hidden mb-20'>

    <MediaHero />

     <MediaCoverage/>
    </div>
  )
}

export default page