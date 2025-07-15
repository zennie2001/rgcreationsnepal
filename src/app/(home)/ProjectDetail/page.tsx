
import ProjectListHero from '@/sections/ProjectListHero';
import Image from 'next/image';
import React from 'react';

type Props = {
  params: Promise<{ id: string }>
};

export default async function page({ params }: Props) {
  const { id } = await params;

  return (
   
    <div className="overflow-hidden  min-h-screen   flex flex-col mb-32   gap-16">
       
    {/* Hero images and video*/}

     <div className="  w-full  flex flex-col justify-center gap-20 ">
          <div className="relative  w-full h-screen text-white">
            {/* Background Image */}
          <Image
            src="/harshah.jpg" // Replace with your actual image path
            alt="Hero Background"
            fill
            className="object-cover z-0"
            priority
          />
    
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
    
          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center  items-center text-center h-full px-6">
            <div className=" text-center border-b-2 w-[500px] mb-8">
              <p className="uppercase tracking-wider text-base font-medium mb-4" >
                Projects
              </p>
            </div>
    
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-wider leading-loose max-w-3xl">
              Harshah Batika
            </h2>
    
           
          </div>
          </div>
    
    
          {/* Video section */}
            <div className="lg:px-[215px] lg:py-18 px-4 ">
                <div className=" w-full  lg:h-[500px] h-[350px]  rounded-lg overflow-hidden relative shadow-lg">
            <Image
                src="/harshah.jpg"
                alt="Hero Background"
                fill
                className="object-cover z-0"
                priority
            />
    
            {/* Overlay play button */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-yellow-400 bg-opacity-60 rounded-full w-20 h-20 flex items-center justify-center">
                <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M8 5v14l11-7z" />
                </svg>
                </div>
            </div>
            </div>
            </div>
    
    
          
    
    
        </div>
      

    
     {/* Content and sidebar */}
      <div className='lg:px-[215px] px-8 flex justify-between lg:flex-row flex-col gap-16' >
       
      <div className="lg:w-[60%] w-full flex flex-col gap-8">
        {/* Description area */}
        <div>
          <h2 className="font-semibold text-lg md:text-xl mb-2">Harshah Batika {id}</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Harshah Batika, a escape from the city’s hustle and bustle and discovering all-in-one
            party venue, nestled in a serene and family-friendly location.
          </p>
        </div>

        

        {/* More about project text */}
        <div >
          <h2 className="font-semibold text-base md:text-lg mb-2">More About Project</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Harshah Batika, a escape from the city’s hustle and bustle and discovering all-in-one
            party venue, nestled in a serene and family-friendly location.
          </p>
        </div>
      </div>

      {/* Sidebar with project details */}
      <aside className="lg:w-[30%]  sm:w-full bg-white shadow-md rounded-b-lg  text-gray-900 self-start ">
        <h3 className="text-white bg-teal-800   py-6 font-bold  text-center">
          Project Details
        </h3>
        <dl className=" divide-y-2 divide-[#244D4D] bg-gray-100 px-6">
          <div className="py-3 flex flex-col">
            <dt className="font-semibold text-sm">Client</dt>
            <dd className="text-gray-600 dark:text-gray-400 text-xs mt-1">Kodesolution Ltd</dd>
          </div>

          <div className="py-3 flex flex-col">
            <dt className="font-semibold text-sm">Location</dt>
            <dd className="text-gray-600 dark:text-gray-400 text-xs mt-1">
              #405, Lan Street, Las Vegas, USA
            </dd>
          </div>

          <div className="py-4 flex flex-col">
            <dt className="font-semibold text-sm">Category</dt>
            <dd className="text-gray-600 dark:text-gray-400 text-xs mt-1">
              Interior Design, Building Material
            </dd>
          </div>

          <div className="py-3 flex flex-col">
            <dt className="font-semibold text-sm">Date</dt>
            <dd className="text-gray-600 dark:text-gray-400 text-xs mt-1">March 27, 2024</dd>
          </div>

          <div className="py-3 flex flex-col">
            <dt className="font-semibold text-sm">Project Demand</dt>
            <dd className="text-gray-600 dark:text-gray-400 text-xs mt-1">Interior Design Ideas</dd>
          </div>
        </dl>
      </aside>
      </div>
    </div>
  


  );
}
