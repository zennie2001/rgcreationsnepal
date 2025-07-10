import GalleryHero from '@/sections/GalleryHero'
import ProjectVideoGallery from '@/sections/ProjectVideoGallery'
import VideoGalleryHero from '@/sections/VideoGalleryHero'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden'>
        <VideoGalleryHero/>
        <ProjectVideoGallery />
    </div>
  )
}

export default page