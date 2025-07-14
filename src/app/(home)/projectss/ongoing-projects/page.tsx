
import OngoingProjects from '@/sections/OngoingProjects';
import ProjectOnGoingHero from '@/sections/ProjectOngoingHero'
import React from 'react'

export const metadata = {
  title: "Ongoing Projects | Top Architecture Firm Nepal",
  description:"Explore RG Creations’ ongoing projects showcasing innovative architecture and construction expertise across Nepal."};

const page = () => {
  return (
    <div className="overflow-hidden ">
       <ProjectOnGoingHero />
        <OngoingProjects />
    </div>
  )
}

export default page