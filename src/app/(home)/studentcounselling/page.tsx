"use client";

import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import placeholderImage from '@/assets/images/heroBackground.jpg';
import Image from "next/image";
import Contact from "@/sections/Contact";
import { useState } from "react";
import FaqCard from "@/components/FaqCard";
import { twMerge } from "tailwind-merge";

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

const steps = [
    {
        title: 'Initial Consultation',
        link: 'initial'
    },
    {
        title: 'Course and University Selection',
        link: 'course'
    },
    {
        title: 'Application Assistance',
        link: 'application'
    },
    {
        title: 'Visa Guidance',
        link: 'visa'
    },
    {
        title: 'Pre-Departure Orientation',
        link: 'departure'
    },
]

const features = [
    {
        title: 'One-on-One or Group Counseling Sessions',
        description: 'Tailored guidance provided to each student based on their unique needs, aspirations, and circumstances. Direct interaction with the counselor allows for a detailed discussion of academic, career, and personal preferences.'
    },
    {
        title: 'Online and Offline Appointment Options',
        description: 'Convenient for students who cannot visit the counseling center physically. Students can access on-site resources, such as brochures, program catalogs, and direct interactions with multiple counselors.'
    },
    {
        title: 'Experienced Counselors',
        description: 'Counselors bring years of expertise in study-abroad guidance, ensuring students receive accurate, updated, and relevant advice.Their familiarity with international education systems, admission processes, and visa regulations helps streamline the process.'
    },
]

export default function StudentCounselling() {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const [counSteps, setCounSteps] = useState('initial');

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle current FAQ
    };

    return (
        <main className="w-full overflow-hidden">
            <PageHeader
                link="/studentcounselling"
                title="Student Counselling"
            />
            <section className="w-full flex_center flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12">
                <div className="flex_center lg:flex-row flex-col gap-8 w-full">
                    <div className="lg:w-[45%] w-full flex flex-col gap-4">
                        <SectionHeader
                            smallTitle="Counselling"
                            title="Why Study Abroad"
                            className="lg:items-start items-center"
                        />
                        <p className="text-text lg:text-start text-center">
                            Studying abroad is an investment in your future. It equips you with a globally recognized education, a competitive edge in the job market, and the personal growth needed to succeed in an interconnected world.
                        </p>
                        <p className="text-text lg:text-start text-center">
                            Studying abroad is a transformative experience that offers numerous academic, personal, and professional benefits. Gain a degree from top-ranked universities and institutions with global credibility. Exposure to cutting-edge research, modern curriculums, and advanced teaching methodologies.
                        </p>
                    </div>
                    <div className="lg:w-[55%] w-full flex_center">
                        <Image
                            src={placeholderImage}
                            alt="placeholder-image"
                            className="w-full h-96 object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full flex_center flex-col lg:px-24 px-4  lg:py-16 py-10 gap-12 bg-[#F5FBFF]">
                <SectionHeader
                    smallTitle="Why Counselling"
                    title="Benefits of Personalized Guidance"
                    className="lg:items-start items-center w-full"
                />
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8">
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
            <section className="w-full flex_center flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12">
                <SectionHeader
                    smallTitle="Process"
                    title="Steps in the Counseling Process"
                    className="items-start w-full"
                />
                <div className="flex flex-col gap-12 justify-start w-full overflow-x-scroll no-scrollbar">
                    <nav className="flex flex-none gap-6 lg:gap-8 overflow-x-clip">
                        {
                            steps.map((step, index) => {
                                return (
                                    <button
                                        key={index}
                                        onClick={() => setCounSteps(step.link)}
                                        className={twMerge("text-sm font-medium py-3 px-6 rounded-md hover:text-tertiary w-max transition duration-300", counSteps === step.link ? 'border border-tertiary text-tertiary' : '')}
                                    >
                                        {step.title}
                                    </button>
                                )
                            })
                        }
                    </nav>
                    <div className="w-full gap-10 flex">
                        <div className="w-[50%] gap-4 flex flex-col">
                            <h4 className="text-2xl font-semibold">
                                Understanding the Student&apos;s Goals & Preferences
                            </h4>
                            <p className="text-text text-base">
                                The initial consultation is the foundation of the study-abroad counseling process. During this session, counselors work closely with students to understand their individual needs, aspirations, and circumstances. This involves:
                            </p>
                            <ul className="text-base text-text list-disc">
                                <li className="mb-2">
                                    Reviewing past education, grades, and academic achievements
                                </li>
                                <li className="mb-2">
                                    Understanding the student&apos;s long-term professional aspirations and how studying abroad can help achieve them.
                                </li>
                                <li className="mb-2">
                                    Discussing preferred fields of study, extracurricular interests, and specific subject areas
                                </li>
                                <li className="mb-2">
                                    Factoring in the student&apos;s preferred study destination, cultural inclinations, lifestyle expectations, and any location-specific priorities.
                                </li>
                                <li className="mb-2">
                                    Evaluating the student&apos;s financial situation to recommend suitable scholarships
                                </li>
                            </ul>
                        </div>
                        <div className="w-[50%]">
                            <Image
                                src={placeholderImage}
                                alt="placeholder-image"
                                className="w-full h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex_center flex-col px-24 py-16 gap-12 bg-[#F5FBFF]">
                <SectionHeader
                    smallTitle="Features"
                    title="Counselling Features"
                />
                <div className="grid grid-cols-3 w-full gap-8">
                    {
                        features.map((feature, index) => {
                            return (
                                <div key={index} className="flex_center flex-col gap-6 pt-14 p-8 bg-primary rounded-md col-span-1 relative">
                                    <div className="absolute size-14 rounded-md bg-tertiary -top-7 left-1/2 -translate-x-1/2"></div>
                                    <div className="flex_center flex-col gap-4">
                                        <h4 className="text-2xl font-semibold text-center text-secondary">
                                            {feature.title}
                                        </h4>
                                        <div className="flex w-20 h-1 bg-tertiary rounded-full"></div>
                                    </div>
                                    <p className="text-text text-center p-4">
                                        {feature.description}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <Contact
                className="pb-16"
            />
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