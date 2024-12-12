import { faqs } from '@/app/(home)/studentcounselling/page'
import FaqCard from '@/components/FaqCard'
import SectionHeader from '@/components/SectionHeader'
import React, { useState } from 'react'

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle current FAQ
    };
  return (
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
  )
}
