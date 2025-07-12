import CompletedProjects from '@/sections/CompletedProject'
import ProjectHero from '@/sections/ProjectHero'
import ProjectList from '@/sections/ProjectList'
import React from 'react'

export const metadata = {
  title: "Completed Projects - RG Creations Nepal ",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};

const page = () => {
  return (
    <div className="overflow-hidden ">
        <ProjectHero />
        <CompletedProjects/>
    </div>
  )
}

export default page