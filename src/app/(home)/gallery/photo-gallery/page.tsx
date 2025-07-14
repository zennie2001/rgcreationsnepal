
import GalleryHero from '@/sections/GalleryHero'
import ProjectImageGallery from '@/sections/ProjectImageGallery'
import React from 'react'

export const metadata = {
  title: "Photo Gallery | RG Creations Nepal ",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};

const page = () => {
  return (
    <div className="overflow-hidden ">
      <GalleryHero/>
      <ProjectImageGallery/>
    </div>
  )
}

export default page