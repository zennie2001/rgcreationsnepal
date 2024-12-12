"use client"
import PageHeader from "@/components/PageHeader";


import PrimaryButton from "@/components/UI/PrimaryButton";
import SecondaryButton from "@/components/UI/SecondaryButton";
import Image from "next/image";
import interviewImage from '@/assets/images/unilogo.svg';
import usa from '@/assets/images/usa.svg';
import Contact from "@/sections/Contact";
import FAQ from "@/sections/FAQ";



export default function ScholarshipAssistance() {
const overview=[
    {
        "name":"University Offering",
        "subtitle":"San Francisco Bay University"
    },
    {
        "name":"Pursuing Degree Level",
        "subtitle":"Bachelor’s Degree"
    },
    {
        "name":"Intended Area of Study",
        "subtitle":"Mechanical Engineering"
    },
    {
        "name":"Funding Type",
        "subtitle":"Fee waiver/discount"
    },
    {
        "name":"Scholarship Amount",
        "subtitle":"$4000 USD"
    },
    {
        "name":"Deadline",
        "subtitle":"20th January, 2025"
    },
    {
        "name":"University Offering",
        "subtitle":"San Francisco Bay University"
    },
]
    return (
        <main className="w-full max-w-[1740px] mx-auto">
            <PageHeader
                link="/scholarship-assistance"
                title="Scholarship Assistance"
            />

            <section className="xl:px-24 lg:px-10 px-4 lg:py-16 py-10 ">
{/* top section  */}
                <div className="w-full p-5 bg-bodyColor rounded-lg">
                    <div className="flex flex-col">
                        <div className='bg-white p-1 size-16 rounded-md'>
                            <Image
                                src={interviewImage}
                                alt="page header image"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <p className="text-2xl text-secondary font-semibold pt-3">International Undergraduate Scholarship for Women</p>
                        <div className="flex w-full lg:flex-row flex-col justify-between lg:items-center items-start lg:gap-0 gap-4">
                            <div className='flex gap-2 items-center pt-2'>
                                <div className='size-5'>
                                    <Image
                                        src={usa}
                                        alt="page header image"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <p className='text-text text-sm font-medium'>San Francisco Bay University</p>

                            </div>
                            <div className=" flex justify-between items-center gap-4">
                                <PrimaryButton text="Apply Now" className="w-[131px]" />
                                <SecondaryButton text="Get Consultation" className="w-[200px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
<p className="text-3xl font-semibold text-secondary">About Scholarship</p>
<p className="text-text py-2">San Francisco scholarship is one of the most sought after scholarship programmes offered to students looking to pursue postgraduate courses from the University of Oxford. Rhodes scholarship covers all University and College fees, a personal stipend and one economy class airfare to Oxford at the start of the Scholarship, as well as an economy flight back to the students home country at the conclusion of the Scholarship. This is one of the oldest scholarship programmes that started in 1902 with the will of Cecil John Rhodes. However, it was in 1947, the first Rhodes scholarship was awarded in India. It is not only the most prestigious but arduous scholarship to get. </p>
                </div>
                <div className="mt-10">
<p className="text-3xl font-semibold text-secondary">Requirements</p>
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
<p className="text-3xl font-semibold text-secondary">Overview</p>
<div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 pt-5">
{overview.map((e,i)=>{
    return <div key={i}>
<p className="font-bold text-secondary">{e.name}</p>
<p className="text-sm text-text pt-2">{e.subtitle}</p>
    </div>
})}
</div>
                </div>

            </section>
<Contact/>
<FAQ/>
        </main>
    )
}