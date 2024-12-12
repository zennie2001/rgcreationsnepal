"use client"
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import blogImage from '@/assets/images/blogImage.jpg';
import BlogCard from "@/components/BlogCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TestimonialCard from "@/components/TestimonialCard";
import InterviewCard from "@/components/InterviewCard";
import FaqCard from "@/components/FaqCard";
import { useState } from "react";
import { faqs } from "../studentcounselling/page";
import CTA from "@/components/CTA";
import placeholderImage from '@/assets/images/visa.png';
import placeholderImage1 from '@/assets/images/visa2.png';
import placeholderImage2 from '@/assets/images/visa3.png';
import VisaCard from "@/components/VisaCard";
import FAQ from "@/sections/FAQ";



export default function VisaAcceptance() {
    
    const admissionProcesses = [
        {
            image: placeholderImage,
            smallTitle: 'Tailored Visa Guidance',
            title: 'Customized Support for Your Journey Abroad',
            description: 'From preparing and reviewing your application to organizing supporting documents, we offer personalized assistance to simplify the process.',
            step: '01'
        },
        {
            image: placeholderImage1,
            smallTitle: 'Effortless Visa Application Process',
            title: 'Accurate Documentation and Timely Submission',
            description: 'Our team handles the documentation and submission process to minimize delays or risks, ensuring a smooth experience for every student.',
            step: '02',
            className: 'md:flex-row-reverse flex-col'
        },
        {
            image: placeholderImage2,
            smallTitle: 'Confidence-Building Mock Interviews',
            title: 'Ace Your Visa Interview with Expert Training',
            description: 'Through realistic mock interviews, our team prepares you for visa interview scenarios. Receive constructive feedback, tailored advice, and proven tips to confidently handle questions and make a lasting impression.',
            step: '03'
        },
        {
            image: placeholderImage1,
            smallTitle: 'Comprehensive Post-Application Assistance',
            title: 'Support Every Step of the Way',
            description: 'Even after your application submission, our team remains available to address any queries or concerns. From status updates to additional documentation guidance, we are with you throughout the visa processing journey, ensuring a stress-free experience.',
            step: '04',
            className: 'md:flex-row-reverse flex-col'
        },
        
    ]
    return (
        <main className="w-full max-w-[1740px] mx-auto ">
            <PageHeader
                link="/Testimonials"
                title="Testimonials"
            />
           <section className="w-full lg:px-24 px-4 py-10 flex_center flex-col gap-4">
           <SectionHeader
                    smallTitle="Visa Assistance"
                    title="Seamless Visa Assistance"
                    className="lg:py-10 py-3"
                />
         <div className="flex_center flex-col lg:gap-28 gap-10 lg:w-[80%] w-full">
                    {
                        admissionProcesses.map((process, index) => {
                            return (
                                <VisaCard
                                    key={index}
                                    image={process.image}
                                    smallTitle={process.smallTitle}
                                    title={process.title}
                                    description={process.description}
                                    step={process.step}
                                    className={process.className}
                                />
                            )
                        })
                    }
                </div>
           </section>
<section className="lg:px-24 px-0 mt-16">
<CTA/>

</section>
<FAQ/>
        </main>
    )
}