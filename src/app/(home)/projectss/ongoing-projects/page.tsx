
import OngoingProjects from '@/sections/OngoingProjects';
import ProjectOnGoingHero from '@/sections/ProjectOngoingHero'
import React from 'react'

export const metadata = {
  title: "Ongoing Projects - RG Creations Nepal ",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};

const page = () => {
  return (
    <div className="overflow-hidden ">
       <ProjectOnGoingHero />
        <OngoingProjects />
    </div>
  )
}

export default page