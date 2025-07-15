
import ProjectListHero from '@/sections/ProjectListHero';
import React from 'react';

type Props = {
  params: Promise<{ id: string }>
};

export default async function page({ params }: Props) {
  const { id } = await params;

  return (
   
    <div className="overflow-hidden  min-h-screen  px-4 flex flex-col mb-32   gap-16">
       
        <ProjectListHero/>
      

    
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
