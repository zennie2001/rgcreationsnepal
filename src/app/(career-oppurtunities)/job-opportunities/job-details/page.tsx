"use client"
import PageHeader from "@/components/PageHeader";

import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import ScholarshipCard from "@/components/ScholarshipCard";
import PrimaryButton from "@/components/UI/PrimaryButton";
import SecondaryButton from "@/components/UI/SecondaryButton";
import JobCard from "@/components/JobCard";
import { FaLocationDot } from "react-icons/fa6";

import { PiShareFatLight } from "react-icons/pi";
import { BsCreditCardFill } from "react-icons/bs";


export default function JobDetails() {
   
    return (
        <main className="w-full max-w-[1740px] mx-auto">
            <PageHeader
                link="/job-opportunities"
                title="Senior Co-ordinator"
            />
           
           <section className="xl:px-24 lg:px-10 px-4 lg:py-16 py-10 flex lg:flex-row flex-col justify-between lg:gap-0 gap-4">
            <div className="lg:w-[73%] w-full">
            <div className="w-full border border-borderColor rounded-sm px-4 py-5">
<div className="flex w-full justify-between items-center">
<p className="text-2xl font-semibold text-secondary">Senior Co-ordinator</p>
<div className=" gap-2 items-center lg:flex hidden">
<PrimaryButton text="Apply Now"/>
<div className="py-2 px-2 border border-borderColor flex items-center justify-center">
<PiShareFatLight/>
</div>
</div>
</div>
<div className="mt-3">
<div className="flex gap-4 items-center">
<div className="size-[80px] bg-gray-300 rounded-md">

</div>
<div className="flex flex-col items-start">
<div className="flex gap-2 flex-wrap items-center">
<FaLocationDot/>
<p className="text-sm text-secondary ">Putalisadak Chowk-30,</p>
<div className="flex gap-2">
<BsCreditCardFill/>
<p className="text-sm text-text">Rs.50000</p>
</div>
</div>
<div className=' gap-3 items-center pt-3 lg:flex hidden'>
<div className='bg-bodyColor px-4 py-2 rounded-md flex items-center justify-center text-text text-xs font-bold'>
On-Site
</div>
<div className='bg-bodyColor px-4 py-2 rounded-md flex items-center justify-center text-text text-xs font-bold'>
Full Time
</div>
<div className='bg-bodyColor px-4 py-2 rounded-md flex items-center justify-center text-text text-xs font-bold'>
Deskwork
</div>
</div>
</div>
</div>
<div className=' gap-3 items-center pt-3 flex lg:hidden'>
<div className='bg-bodyColor px-4 py-2 rounded-md flex items-center justify-center text-text text-xs font-bold'>
On-Site
</div>
<div className='bg-bodyColor px-4 py-2 rounded-md flex items-center justify-center text-text text-xs font-bold'>
Full Time
</div>
<div className='bg-bodyColor px-4 py-2 rounded-md flex items-center justify-center text-text text-xs font-bold'>
Deskwork
</div>
</div>
<div className=" gap-2 items-center flex lg:hidden pt-3">
<PrimaryButton text="Apply Now" className="w-[80%]"/>
<div className="py-2 px-2 border border-borderColor flex items-center justify-center">
<PiShareFatLight/>
</div>
</div>
</div>

</div>
<div className=" w-full border mt-4 border-borderColor rounded-sm px-4 py-5">
<h1 className="text-secondary font-semibold text-xl ">Job Overview</h1>
<p className="text-text">As a Senior Coordinator, you will play a pivotal role in overseeing and managing the coordination of projects, teams, and resources within the organization. You will act as a liaison between various departments, ensuring that operations run smoothly, objectives are met, and projects are delivered on time. This role requires exceptional organizational skills, leadership, and the ability to multitask in a dynamic environment.</p>
<div className="mt-10">
<p className="text-secondary font-semibold text-xl">Requirements</p>
<ul className="text-text list-disc px-5">
  <li>Open to women enrolled in an undergraduate degree program at a college or university in San Francisco.</li>
  <li>Applicants must be preparing for a career in transportation or a transportation-related field.</li>
  <li>Relevant fields of study include transportation engineering, planning, finance, or logistics.</li>
  <li>Must have a GPA of 3.0 or higher.</li>
  <li>Selection criteria include:
    <ul>
      <li>Transportation goals.</li>
      <li>Academic record.</li>
      <li>Transportation-related activities or job skills.</li>
    </ul>
  </li>
  <li>Minority candidates are encouraged to apply.</li>
</ul>

                </div>
                <div className="mt-10">
<p className="text-secondary font-semibold text-xl">Qualifications and Skills</p>
<ul className="text-text list-disc px-5">
  <li>Open to women enrolled in an undergraduate degree program at a college or university in San Francisco.</li>
  <li>Applicants must be preparing for a career in transportation or a transportation-related field.</li>
  <li>Relevant fields of study include transportation engineering, planning, finance, or logistics.</li>
  <li>Must have a GPA of 3.0 or higher.</li>
  <li>Selection criteria include:
    <ul>
      <li>Transportation goals.</li>
      <li>Academic record.</li>
      <li>Transportation-related activities or job skills.</li>
    </ul>
  </li>
  <li>Minority candidates are encouraged to apply.</li>
</ul>

                </div>
                <div className="mt-10">
<p className="text-secondary font-semibold text-xl">About Company</p>
<p className="text-text">Our team is driven by a shared vision of success, supported by a culture that values integrity, inclusivity, and continuous learning. We offer a dynamic work environment where creativity and ambition are celebrated, and employees are empowered to grow and achieve their career goals.
Join us and be a part of a forward-thinking team dedicated to making a difference. Together, we build a brighter future.</p>


                </div>
</div>
            </div>

            <section className="lg:w-[25%] w-full">
<p className="text-xl font-semibold text-secondary">Similar Jobs</p>
<div className="flex flex-col mt-3 gap-2">
{Array.from({ length: 3 }).map((_, index) => (
    <SimilarJobs key={index} />
  ))}
</div>
</section>
           </section>

        </main>
    )
}


 function SimilarJobs() {
  return (
    <div className='w-full p-3 rounded-lg border border-borderColor'>
    <div className='flex w-full justify-between '>
    <div className='flex gap-2 items-center'>
    <div className='size-[48px] bg-gray-300 rounded-sm'>
    
    </div>
    <div className='flex flex-col items-start'>
    <p className='text-sm font-semibold text-secondary'>Senior Co-ordinator</p>
    <div className='flex gap-1 items-center text-text text-xs'>
    <FaLocationDot/>
    <p>Putalisadak Chowk-30, Kathmandu,</p>
    </div>
    </div>
    </div>
    </div>
    <div className='flex gap-2 items-center pt-3'>
<div className='bg-bodyColor px-3 py-1 rounded-sm flex items-center justify-center text-text text-[10px] font-bold'>
On-Site
</div>
<div className='bg-bodyColor px-3 py-1 rounded-sm flex items-center justify-center text-text text-[10px] font-bold'>
Full Time
</div>
<div className='bg-bodyColor px-3 py-1 rounded-sm flex items-center justify-center text-text text-[10px] font-bold'>
Deskwork
</div>
</div>
    </div>
  )
}
