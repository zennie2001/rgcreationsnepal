"use client";

import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import placeholderImage from '@/assets/images/heroBackground.jpg';
import Image from "next/image";
import Contact from "@/sections/Contact";
import { useState } from "react";
import FaqCard from "@/components/FaqCard";

const benifits = [
    {
        pointNo: '01',
        title: 'Tailored to Your Unique Needs',
        description: 'Counselors consider your academic background, career goals, financial situation, and personal preferences to recommend the best programs, universities, and countries.'
    },
    {
        pointNo: '02',
        title: 'Expert Knowledge',
        description: 'Get accurate details on admission requirements, deadlines, and visa regulations. Counselors are well-versed in international education systems, helping you navigate unfamiliar processes efficiently.'
    },
    {
        pointNo: '03',
        title: 'Streamlined Application Process',
        description: 'Expert guidance ensures all forms, essays, and documents are correctly prepared and submitted on time. Helps you build confidence for university interviews or visa appointments through mock sessions and feedback.'
    },
    {
        pointNo: '04',
        title: 'Support with Financial Planning',
        description: 'Personalized advice on scholarships and funding options that you qualify for. Help with creating a financial plan, including tuition, living costs, and travel expenses.'
    },
    {
        pointNo: '05',
        title: 'Stress-Free Visa Process',
        description: 'Clear instructions on visa documentation, application submission, and interviews. Ensures you meet all legal and regulatory requirements for the chosen destination.'
    },
    {
        pointNo: '06',
        title: 'Enhanced Confidence and Decision-Making',
        description: 'Simplifies complex decisions and reduces the anxiety associated with studying abroad. With a clear understanding of your options, you can make informed choices about your future.'
    },
]

const faqs = [
    {
        question: 'Why should I pursue my studies overseas?',
        answer: 'If possible, begin your application process at least a year in advance to give enough time for your applications to be processed and to prepare for your time overseas.'
    },
    {
        question: 'How long does the application process take?',
        answer: 'If possible, begin your application process at least a year in advance to give enough time for your applications to be processed and to prepare for your time overseas.'
    },
    {
        question: 'How much will it cost to study abroad?',
        answer: 'If possible, begin your application process at least a year in advance to give enough time for your applications to be processed and to prepare for your time overseas.'
    },
    {
        question: 'Can I work and study at the same time?',
        answer: 'If possible, begin your application process at least a year in advance to give enough time for your applications to be processed and to prepare for your time overseas.'
    }
]

export default function StudentCounselling() {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle current FAQ
    };

    return (
        <main className="w-full overflow-hidden">
            <PageHeader
                link="/studentcounselling"
                title="Student Counselling"
            />
            <section className="w-full flex_center flex-col px-24 py-16 gap-12">
                <div className="flex_center gap-8 w-full">
                    <div className="w-[45%] flex flex-col gap-4">
                        <SectionHeader
                            smallTitle="Counselling"
                            title="Why Study Abroad"
                            className="items-start"
                        />
                        <p className="text-text">
                            Studying abroad is an investment in your future. It equips you with a globally recognized education, a competitive edge in the job market, and the personal growth needed to succeed in an interconnected world.
                        </p>
                        <p className="text-text">
                            Studying abroad is a transformative experience that offers numerous academic, personal, and professional benefits. Gain a degree from top-ranked universities and institutions with global credibility. Exposure to cutting-edge research, modern curriculums, and advanced teaching methodologies.
                        </p>
                    </div>
                    <div className="w-[55%] flex_center">
                        <Image
                            src={placeholderImage}
                            alt="placeholder-image"
                            className="w-full h-96 object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full flex_center flex-col px-24 py-16 gap-12 bg-[#F5FBFF]">
                <SectionHeader
                    smallTitle="Why Counselling"
                    title="Benefits of Personalized Guidance"
                    className="items-start w-full"
                />
                <div className="grid grid-cols-3 w-full gap-8">
                    {
                        benifits.map((benifit, index) => {
                            return (
                                <div
                                    key={index}
                                    className="counselling card flex flex-col gap-4 p-6 col-span-1 bg-primary rounded-md"
                                >
                                    <div className="flex_center w-max py-2 px-4 bg-[#F5FBFF] text-base font-bold text-secondary">
                                        {benifit.pointNo}
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <p className="text-secondary font-bold">
                                            {benifit.title}
                                        </p>
                                        <p className="text-text text-sm">
                                            {benifit.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className="w-full flex_center flex-col px-24 py-16 gap-12">
                <SectionHeader
                    smallTitle="Process"
                    title="Steps in the Counseling Process"
                    className="items-start w-full"
                />
            </section>
            <section className="w-full flex_center flex-col px-24 py-16 gap-12 bg-[#F5FBFF]">
                <SectionHeader
                    smallTitle="Features"
                    title="Counselling Features"
                />
                <div className="grid grid-cols-3 w-full gap-8">
                        
                </div>
            </section>
            <Contact
                className="pb-16"
            />
            <section className="w-full flex_center flex-col px-24 py-16 gap-12">
                <SectionHeader
                    smallTitle="FAQs"
                    title="We answer your every queries"
                />
                <div className="flex_center w-[70%]">
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