import Gallery3DHero from '@/sections/Gallery3dHero'

import React from 'react'

export const metadata = {
  title: "3D Gallery - RG Creations Nepal ",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};

const page = () => {
  return (
    <div className="overflow-hidden ">
        <Gallery3DHero/>
    </div>
  )
}

export default page