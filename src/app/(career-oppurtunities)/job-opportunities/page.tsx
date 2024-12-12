"use client"
import PageHeader from "@/components/PageHeader";

import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import ScholarshipCard from "@/components/ScholarshipCard";
import PrimaryButton from "@/components/UI/PrimaryButton";
import SecondaryButton from "@/components/UI/SecondaryButton";
import JobCard from "@/components/JobCard";



export default function Jobs() {
   
    return (
        <main className="w-full max-w-[1740px] mx-auto">
            <PageHeader
                link="/job-opportunities"
                title="Job Opportunities"
            />
           
           <section className="xl:px-24 lg:px-10 px-4 lg:py-16 py-10 flex justify-between gap-5">
            
<div className="w-[22%] lg:block hidden">
<h1 className="text-2xl text-secondary font-semibold">Filters</h1>
<p className="text-text py-2">Use the filters listed below to focus your search.</p>
<div className="p-3  rounded-sm mt-3 border border-borderColor">
<div className="flex justify-between w-full items-center">
<p className="text-xl text-secondary font-semibold">Job Type</p>
<FaMinus className="text-secondary text-base"/>
</div>
<p className="text-text py-2">Locate scholarships that are available.</p>
<div className="py-3 space-y-2">
<div className="flex gap-2 items-center">
<input type="radio" />
<p className="text-sm text-text">Full Time</p>
</div>
<div className="flex gap-2 items-center">
<input type="radio" />
<p className="text-sm text-text">Part-time</p>
</div>
<div className="flex gap-2 items-center">
<input type="radio" />
<p className="text-sm text-text">Intern</p>
</div>
<div className="flex gap-2 items-center">
<input type="radio" />
<p className="text-sm text-text">Remote</p>
</div>
</div>
</div>
<div className="p-3  rounded-sm mt-3 border border-borderColor">
<div className="flex justify-between w-full items-center">
<p className="text-xl text-secondary font-semibold">Experience Level</p>
<FaMinus className="text-secondary text-base"/>
</div>

</div>
<div className="p-3  rounded-sm mt-3 border border-borderColor">
<div className="flex justify-between w-full items-center">
<p className="text-xl text-secondary font-semibold">Salary</p>
<FaMinus className="text-secondary text-base"/>
</div>

</div>
</div>
<div className="lg:w-[75%] w-full">
<div className="lg:hidden flex justify-between items-center">
                 <PrimaryButton text="Filters" className="w-[45%]"/>
                 <SecondaryButton text="Sort By" className="w-[45%]"/>
            </div>
<div className="w-full flex justify-between items-center lg:py-0 py-3">
<p className="text-text ">Showing 9 results</p>
<div className=" items-center gap-2 lg:flex hidden">
    <p className="text-text">Sort by:</p>
    <div className="flex items-center font-medium text-tertiary">
<p>Highest Salary</p>
<IoIosArrowDown/>
    </div>
</div>
</div>
<div className="grid  grid-cols-1 gap-5 py-5">
  {Array.from({ length: 10 }).map((_, index) => (
    <JobCard key={index} />
  ))}
</div>

</div>
           </section>

        </main>
    )
}