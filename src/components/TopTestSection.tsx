import React from 'react'
import PrimaryButton from './UI/PrimaryButton'
import { PiShareFatLight } from 'react-icons/pi'

export default function TopTestSection() {
  return (
    <div className="w-full rounded-sm border border-borderColor  p-4">
    <div className="flex w-full lg:justify-between justify-start lg:gap-0 gap-2 items-center">
    <div className="lg:size-[80px] size-[64px] rounded-sm bg-[#D9D9D9] lg:hidden block">
    
    </div>
    <h1 className="lg:text-2xl text-xl font-semibold w-[70%] text-secondary">(IELTS) International English Language <span className='lg:inline hidden'>Testing System</span> </h1>
    <div className=" gap-2 items-center lg:flex hidden">
    <PrimaryButton text="Get Consultation" />
    <div className="h-[40px] w-[40px] rounded-sm border border-borderColor flex items-center justify-center">
    <PiShareFatLight/>
    </div>
    </div>
    
    </div>
    <div className="pt-5 flex flex-wrap lg:gap-32 gap-5 items-center">
    <div className="flex gap-3 items-center">
    <div className="size-[80px] rounded-sm bg-[#D9D9D9] lg:block hidden">
    
    </div>
    <div className="flex flex-col items-start gap-2">
    <p className="font-bold text-base text-secondary">Test Format</p>
    <p className="text-sm text-text">Listening, Reading, Writing, Speaking</p>
    </div>
    </div>
    <div className="flex flex-col items-start gap-2">
    <p className="font-bold text-base text-secondary">Test Mode</p>
    <p className="text-sm text-text">Paper-Based/ Computer Delivered</p>
    </div>
    <div className="flex flex-col items-start gap-2">
    <p className="font-bold text-base text-secondary">Class Duration</p>
    <p className="text-sm text-text">2 Hours (Approximately)</p>
    </div>
    </div>
    <div className=" gap-2 items-center lg:hidden flex mt-2">
    <PrimaryButton text="Get Consultation" className='w-[80%]'/>
    <div className="h-[40px] w-[40px] rounded-sm border border-borderColor flex items-center justify-center">
    <PiShareFatLight/>
    </div>
    </div>
                   </div>
  )
}
