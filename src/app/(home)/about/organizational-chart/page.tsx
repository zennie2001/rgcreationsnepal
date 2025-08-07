import AboutOrgHero from '@/sections/AboutOrgHero'
import OrganizationalChart from '@/sections/OrganizationalChart'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden'>
      <AboutOrgHero />
      <OrganizationalChart/>
    </div>
  )
}

export default page