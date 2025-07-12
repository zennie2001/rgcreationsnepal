import GalleryHero from '@/sections/GalleryHero'
import ProjectVideoGallery from '@/sections/ProjectVideoGallery'
import VideoGalleryHero from '@/sections/VideoGalleryHero'
import React from 'react'

export const metadata = {
  title: "Video Gallery - RG Creations Nepal ",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};

const page = () => {
  return (
    <div className='overflow-hidden'>
        <VideoGalleryHero/>
        <ProjectVideoGallery />
    </div>
  )
}

export default page