import CompletedProjects from '@/sections/CompletedProject'
import ProjectHero from '@/sections/ProjectHero'
import ProjectList from '@/sections/ProjectList'
import React from 'react'

const page = () => {
  return (
    <div className="overflow-hidden ">
        <ProjectHero />
        <CompletedProjects/>
    </div>
  )
}

export default page