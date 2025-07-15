import Gallery3DHero from '@/sections/Gallery3dHero'
import Project3DGallery from '@/sections/Project3DGallery';

import React from 'react'

export const metadata = {
  title: "3D Gallery | Top Architecture Visualization ",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};

const page = () => {
  return (
    <div className="overflow-hidden ">
        <Gallery3DHero/>
        <Project3DGallery/>
    </div>
  )
}

export default page