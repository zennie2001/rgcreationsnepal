"use client";

import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import Contact from "@/sections/Contact";
import placeholderImage from "@/assets/images/homepageAbout.png";
import UniversityAdmissionCard from "@/components/UniversityAdmissionCard";
import FaqCard from "@/components/FaqCard";
import { useState } from "react";

const admissionProcesses = [
  {
    image: placeholderImage,
    smallTitle: "Personalized Counselling",
    title: "Tailored Guidance for Your Unique Journey",
    description:
      "Our experienced counselors provide bespoke support, understanding each student’s academic background and aspirations.",
    step: "01",
  },
  {
    image: placeholderImage,
    smallTitle: "Choosing the Right Path",
    title: "Course, Country, and University Selection",
    description:
      "We help students discover the ideal study destination, institution, and program tailored to their ambitions.",
    step: "02",
    className: "flex-row-reverse",
  },
  {
    image: placeholderImage,
    smallTitle: "Global Test Preparation",
    title: "Master Standardized Tests with Expert Coaching",
    description:
      "Prepare for key exams like TOEFL, PTE, IELTS, GMAT, GRE, SAT, and ACT with personalized coaching from expert faculty.",
    step: "03",
  },
  {
    image: placeholderImage,
    smallTitle: "Professional Document Review",
    title: "Polished Applications for Better Success",
    description:
      "Our experts focus on highlighting your strengths, meeting university-specific requirements, and eliminating errors to boost success rates and speed up responses.",
    step: "04",
    className: "flex-row-reverse",
  },
  {
    image: placeholderImage,
    smallTitle: "Polished Applications for Better Success",
    title: "Comprehensive Support for Hassle-Free Submissions",
    description:
      "We collaborate with students to refine documents, provide personalized recommendations to universities, and ensure all materials showcase the student’s potential for a perfect match.",
    step: "05",
  },
  {
    image: placeholderImage,
    smallTitle: "Mock Interview Coaching",
    title: "Excel in University and Visa Interviews",
    description:
      "Our specialists prepare students for university and visa interviews through mock sessions tailored to typical questions.",
    step: "06",
    className: "flex-row-reverse",
  },
  {
    image: placeholderImage,
    smallTitle: "Seamless Visa Assistance",
    title: "Expert Guidance for a 99% Visa Success Rate",
    description:
      "From document preparation to mock interviews, we provide end-to-end support based on updated consulate advice. Our proven strategies ensure a smooth experience, minimizing errors and delays.",
    step: "07",
  },
];

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

export default function UniversityAdmition() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle current FAQ
  };

  return (
    <main className="w-full overflow-hidden">
      <PageHeader
        link="/destination/universityadmission"
        title="University Admission"
      />
      <section className="w-full px-24 py-16 flex_center flex-col gap-16">
        <SectionHeader
          smallTitle="University Admission"
          title="A Smooth Admissions Process"
        />
        <div className="flex_center flex-col gap-28 w-[80%]">
          {admissionProcesses.map((process, index) => {
            return (
              <UniversityAdmissionCard
                key={index}
                image={process.image}
                smallTitle={process.smallTitle}
                title={process.title}
                description={process.description}
                step={process.step}
                className={process.className}
              />
            );
          })}
        </div>
      </section>
      {/* <Contact className="pt-0" /> */}
      <section className="w-full flex_center flex-col px-24 py-16 gap-12">
        <SectionHeader smallTitle="FAQs" title="We answer your every queries" />
        <div className="flex_center w-[70%]">
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
