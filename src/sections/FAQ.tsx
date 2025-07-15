"use client";
import FaqCard from '@/components/FaqCard'
import SectionHeader from '@/components/SectionHeader'
import { twMerge } from "tailwind-merge";
import React, { useState } from 'react'
import { FaPlus} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function FAQContact() {
     const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
    const faqs = [
        {
            question: 'What makes your firm the best choice for sustainable design?',
            answer: 'Our firm combines cutting-edge green technologies with timeless design principles. We prioritize passive design strategies, eco-certified materials, and LEED/BREEAM standards to deliver buildings that are both sustainable and beautiful.'
        },
        {
            question: 'Do sustainable buildings cost more to design or build?',
            answer: 'If possible, begin your application process at least a year in advance to give enough time for your applications to be processed and to prepare for your time overseas.'
        },
        {
            question: 'Can you work with local/natural materials in your designs?',
            answer: 'If possible, begin your application process at least a year in advance to give enough time for your applications to be processed and to prepare for your time overseas.'
        },
        {
            question: 'Do sustainable designs compromise on aesthetics or functionality?',
            answer: 'If possible, begin your application process at least a year in advance to give enough time for your applications to be processed and to prepare for your time overseas.'
        },
         {
            question: 'Do you offer sustainable design services internationally?',
            answer: 'If possible, begin your application process at least a year in advance to give enough time for your applications to be processed and to prepare for your time overseas.'
        }
    ]
  return (
    <section className="w-full  flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12">
    <div className={twMerge("section-header  flex-col pb-6 ") }>
      <p className="text-base font-bold text-tertiary lg:text-start text-left">
        FAQS
      </p>
      <p className="md:text-[30px] text-[1.5rem]  font-semibold  text-left ">
        Got Questions? We’ve Got the<br/> Edge on Answers
      </p>
    </div>
    <div className="flex_center lg:w-[70%] w-full">
        <div className="flex flex-col w-full gap-6">
            {faqs.map((item, index) => (
        <div
          key={index}
          className=" py-4"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-4">
              {openIndex === index ? (
                <div className='rounded-full p-3 bg-[#980000]'>
                <RxCross2  className=" text-white" />
                </div>
              ) : (
                <div className='rounded-full p-3 bg-[#244D4D]'>
                <FaPlus className="  text-white" />
                </div>
              )}
              <span className={`text-[20px]  font-medium text-gray-800`}>
                {item.question}
              </span>
            </div>
          </button>

          {/* Answer */}
          {openIndex === index && (
            <div className="mt-3 pl-[58px] text-gray-500">
              {item.answer}
            </div>
          )}
        </div>
      ))}
        </div>
    </div>
</section>
  )
}
