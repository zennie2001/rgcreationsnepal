
import GalleryHero from '@/sections/GalleryHero'
import ProjectImageGallery from '@/sections/ProjectImageGallery'
import React from 'react'

const page = () => {
  return (
    <div className="overflow-hidden ">
      <GalleryHero/>
      <ProjectImageGallery/>
    </div>
  )
}

export default page