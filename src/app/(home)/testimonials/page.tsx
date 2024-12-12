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

const blogs = [
    {
        image: blogImage,
        date: 'November 7, 2024',
        title: `USA's Best Universities, Prices, and Scholarships for Students`,
        miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    },
    {
        image: blogImage,
        date: 'November 2, 2024',
        title: `Germany's Best Universities, Prices, and Scholarships for Students`,
        miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    },
    {
        image: blogImage,
        date: 'October 24, 2024',
        title: `Everything You Should Know About Student Scholarships for Studying in Europe`,
        miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    },
    {
        image: blogImage,
        date: 'November 7, 2024',
        title: `USA's Best Universities, Prices, and Scholarships for Students`,
        miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    },
    // {
    //     image: blogImage,
    //     date: 'November 2, 2024',
    //     title: `Germany's Best Universities, Prices, and Scholarships for Students`,
    //     miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    // },
    // {
    //     image: blogImage,
    //     date: 'October 24, 2024',
    //     title: `Everything You Should Know About Student Scholarships for Studying in Europe`,
    //     miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    // },
    // {
    //     image: blogImage,
    //     date: 'November 7, 2024',
    //     title: `USA's Best Universities, Prices, and Scholarships for Students`,
    //     miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    // },
    // {
    //     image: blogImage,
    //     date: 'November 2, 2024',
    //     title: `Germany's Best Universities, Prices, and Scholarships for Students`,
    //     miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    // },
    // {
    //     image: blogImage,
    //     date: 'October 24, 2024',
    //     title: `Everything You Should Know About Student Scholarships for Studying in Europe`,
    //     miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    // },
]

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle current FAQ
    };
    return (
        <main className="w-full max-w-[1740px] mx-auto">
            <PageHeader
                link="/Testimonials"
                title="Testimonials"
            />
            <section className="flex_center flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12">
                <SectionHeader
                    smallTitle="Client Testimonials"
                    title="Testimonials that inspire confidence"
                />
                <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 w-full gap-8 gap-y-8">
                    {
                        blogs.map((blog, index) => {
                            return (
                              
                <TestimonialCard key={index} />
    
                            )
                        })
                    }
                </div>
                <div className="flex items-center gap-2">
                    <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
                        <IoIosArrowBack />
                    </button>
                    <button className="flex_center p-2 rounded-md text-sm size-10">
                        1
                    </button>
                    <button className="flex_center p-2 rounded-md text-sm size-10">
                        2
                    </button>
                    <p className="flex_center p-2 rounded-md text-sm size-10">
                        ....
                    </p>
                    <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
                        5
                    </button>
                    <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
                        <IoIosArrowForward />
                    </button>
                </div>
              
            </section>
            <section className="mt-10 bg-bodyColor lg:px-24 px-4 lg:py-16 py-10">
            <SectionHeader
                    smallTitle="Alumni Interviews"
                    title=""
                    className="lg:items-start items-center lg:text-start"
                />
                <div className="w-full flex lg:flex-row flex-col justify-between lg:items-end items-center">
                <h1 className="text-[30px]  font-semibold lg:text-start text-center  lg:w-[40%] w-full">
                Empowered by Education: <br />  Road to Success
            </h1>
            <p className="lg:w-[45%] w-full lg:text-start text-center">Students need to undertake a detailed analysis of all the options available to them, based on their background and future economic prospects, to make sound funding decisions for their education.</p>
                </div>
                <div className="grid pt-10 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full gap-8 gap-y-8">
                    {
                        blogs.map((blog, index) => {
                            return (
                              
                <InterviewCard key={index} />
    
                            )
                        })
                    }
                </div>
               <div className="flex w-full items-center justify-center pt-5">
               <div className="flex items-center gap-2 ">
                    <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
                        <IoIosArrowBack />
                    </button>
                    <button className="flex_center p-2 rounded-md text-sm size-10">
                        1
                    </button>
                    <button className="flex_center p-2 rounded-md text-sm size-10">
                        2
                    </button>
                    <p className="flex_center p-2 rounded-md text-sm size-10">
                        ....
                    </p>
                    <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
                        5
                    </button>
                    <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
                        <IoIosArrowForward />
                    </button>
                </div>
               </div>
               
</section>
<section className="lg:px-24 px-0 mt-16">
<CTA/>

</section>
<section className="w-full flex_center flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12">

                <SectionHeader
                    smallTitle="FAQs"
                    title="We answer your every queries"
                />
                <div className="flex_center lg:w-[70%] w-full">
                    <div className="flex flex-col w-full gap-6">
                        {
                            faqs.map((faq, index) => {
                                return (
                                    <FaqCard
                                        key={index}
                                        index={index}
                                        question={faq.question}
                                        answer={faq.answer}
                                        isActive={activeIndex === index}
                                        toggleFAQ={toggleFAQ}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}