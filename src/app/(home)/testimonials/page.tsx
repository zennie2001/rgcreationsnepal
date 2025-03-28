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
      <section className="flex_center flex-col container lg:py-16 px-4 lg:px-0 py-10 gap-12">
        <SectionHeader
          smallTitle="Client Testimonials"
          title="Testimonials that inspire confidence"
        />
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 w-full gap-8 gap-y-8">
          {blogs.map((blog, index) => {
            return <TestimonialCard object={blog} key={index} />;
          })}
        </div>
      </section>
    </main>
  );
}
