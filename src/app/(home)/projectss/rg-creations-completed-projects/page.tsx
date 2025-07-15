import CompletedProjects from '@/sections/CompletedProject'
import ProjectHero from '@/sections/ProjectHero'
import ProjectList from '@/sections/ProjectList'
import React from 'react'

export const metadata = {
  title: "Completed Projects | Leading Construction Nepal",
  description:"Explore RG Creations’ ongoing projects showcasing innovative architecture and construction expertise across Nepal."};

const page = () => {
  return (
    <div className="overflow-hidden ">
        <ProjectHero />
        <CompletedProjects/>
    </div>
  )
}

export default page