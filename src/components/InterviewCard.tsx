import React from 'react'
import interviewImage from '@/assets/images/interview.png';
import Image from 'next/image';
import { IoIosPlay } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";

export default function InterviewCard() {
  return (
    <div className='flex lg:flex-row flex-col gap-7 items-center'>
<div className='lg:w-[50%] w-full h-[180px]'>
<Image
                src={interviewImage}
                alt="page header image"
                className="w-full h-full object-cover rounded-lg"
            />
</div>
<div className='flex flex-col items-start lg:w-[60%] w-full'>
<p className='text-lg font-semibold'>Breaking Barriers: Abroad Study Experience</p>
<div className='flex items-center justify-between w-full pr-5 pt-2'>
<div className='flex gap-1 items-center '>
<div className='flex px-4 h-[35px] gap-1 rounded-2xl items-center text-xs text-text border border-[#E9E9E9]'>
<IoIosPlay className='text-lg text-secondary'/>
PLAY
</div>
<div className='flex px-4 h-[35px] gap-2 rounded-2xl items-center text-xs text-text'>
<FaRegClock className='text-lg text-secondary '/>
5 MIN
</div>
</div>
<p className='text-text text-xs'>9 Dec, 2024</p>

</div>
<hr className='my-3 bg-borderColor w-full'/>
<div className='flex gap-2'>
<div className='size-10'>
<img
                src={"https://images.unsplash.com/photo-1503001358144-8d7f2c1db9f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww"}
                alt="page header image"
                className="w-full h-full object-cover rounded-full"
            />
</div>
<div className='flex flex-col items-start'>
<p className='font-bold text-sm text-secondary'>Mrs. Anjana Tamang</p>
<p className='text-xs text-text'>San Francisco Bay University</p>
</div>
</div>
</div>

    </div>
  )
}
