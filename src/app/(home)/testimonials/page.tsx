"use client";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import blogImage from "@/assets/images/blogImage.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TestimonialCard from "@/components/TestimonialCard";
import InterviewCard from "@/components/InterviewCard";
import FaqCard from "@/components/FaqCard";
import { useState } from "react";
import CTA from "@/components/CTA";
const faqs = [
  {
    question: "Why should I pursue my studies overseas?",
    answer:
      "If possible, begin your application process at least a year in advance to give enough time for your applications to be processed and to prepare for your time overseas.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "If possible, begin your application process at least a year in advance to give enough time for your applications to be processed and to prepare for your time overseas.",
  },
  {
    question: "How much will it cost to study abroad?",
    answer:
      "If possible, begin your application process at least a year in advance to give enough time for your applications to be processed and to prepare for your time overseas.",
  },
  {
    question: "Can I work and study at the same time?",
    answer:
      "If possible, begin your application process at least a year in advance to give enough time for your applications to be processed and to prepare for your time overseas.",
  },
];
const blogs = [
  {
    image: blogImage,
    name: "Anjali K.",
    miniDescription: `I had the most amazing experience shopping at Start Laxmi Jewellery! The designs are unique, and the quality of the pieces is unmatched. I bought a custom-made necklace for my wedding, and it turned out even more beautiful than I imagined. The staff was incredibly helpful and made sure every detail was perfect.`,
  },
  {
    image: blogImage,
    name: "Ravi S.",
    miniDescription: `Start Laxmi Jewellery is my go-to place for all things elegant and timeless. From exquisite traditional pieces to trendy modern designs, their collection is perfect for any occasion. I recently purchased a pair of earrings, and I’ve received so many compliments! Highly recommend!`,
  },
  {
    image: blogImage,
    name: "Maya L.",
    miniDescription: `I’ve been a loyal customer of Start Laxmi Jewellery for years, and they never disappoint. The quality of their gold and diamond jewellery is exceptional, and the customer service is top-notch. Whether it's a gift for someone special or an addition to my own collection, I know I’m getting the best!`,
  },
  {
    image: blogImage,
    name: "Sandeep P.",
    miniDescription: `Shopping at Start Laxmi Jewellery is always a great experience. The staff takes the time to understand your preferences and helps you choose the perfect piece. I bought a wedding ring here, and it was everything I had hoped for—timeless, elegant, and beautifully crafted.`,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle current FAQ
  };
  return (
    <main className="w-full mx-auto">
      <PageHeader link="/Testimonials" title="Testimonials" />
      <section className="flex_center flex-col container lg:py-16 py-10 gap-12">
        <SectionHeader
          smallTitle="Client Testimonials"
          title="Testimonials that inspire confidence"
        />
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 w-full gap-8 gap-y-8">
          {blogs.map((blog, index) => {
            return <TestimonialCard object={blog} key={index} />;
          })}
        </div>
        {/* <div className="flex items-center gap-2">
          <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
            <IoIosArrowBack />
          </button>
          <button className="flex_center p-2 rounded-md text-sm size-10">
            1
          </button>
          <button className="flex_center p-2 rounded-md text-sm size-10">
            2
          </button>
          <p className="flex_center p-2 rounded-md text-sm size-10">....</p>
          <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
            5
          </button>
          <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
            <IoIosArrowForward />
          </button>
        </div> */}
      </section>
      <section className="mt-10 bg-bodyColor  lg:py-16 py-10">
        <SectionHeader
          smallTitle="Alumni Interviews"
          title=""
          className="lg:items-start items-center container lg:text-start"
        />
        <div className="w-full flex lg:flex-row flex-col container justify-between lg:items-end items-center">
          <h1 className="text-[30px]  font-semibold lg:text-start text-center  lg:w-[40%] w-full">
            Empowered by Education: <br /> Road to Success
          </h1>
          <p className="lg:w-[45%] w-full lg:text-start text-center">
            Students need to undertake a detailed analysis of all the options
            available to them, based on their background and future economic
            prospects, to make sound funding decisions for their education.
          </p>
        </div>
        <div className="grid pt-10 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full gap-8 container gap-y-8">
          {blogs.map((blog, index) => {
            return <InterviewCard key={index} />;
          })}
        </div>
        <div className="flex w-full items-center justify-center container pt-5">
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
            <p className="flex_center p-2 rounded-md text-sm size-10">....</p>
            <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
              5
            </button>
            <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </section>
      <section className="container mt-16">
        <CTA />
      </section>
      <section className="w-full flex_center flex-col container lg:py-16 py-10 gap-12">
        <SectionHeader smallTitle="FAQs" title="We answer your every queries" />
        <div className="flex_center w-full">
          <div className="flex flex-col w-full gap-6">
            {faqs.map((faq, index) => {
              return (
                <FaqCard
                  key={index}
                  index={index}
                  question={faq.question}
                  answer={faq.answer}
                  isActive={activeIndex === index}
                  toggleFAQ={toggleFAQ}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
