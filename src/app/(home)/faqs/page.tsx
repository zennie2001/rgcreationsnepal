"use client";

import FaqCard from "@/components/FaqCard";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";

const generalQuestions = [
  {
    question: "How do you ensure the quality of your jewellery?",
    answer:
      "We have a strict quality control process, ensuring all pieces meet international standards for purity, craftsmanship, and durability.",
  },
  {
    question:
      "Do you provide certificates of authenticity for diamonds and gemstones?",
    answer:
      "Yes, we provide certification for diamonds and precious gemstones from reputable gemological institutes.",
  },
  {
    question:
      "Do you offer designs tailored to cultural and regional preferences?",
    answer:
      "Yes, we understand market variations in Europe, the Middle East, and Asia and offer designs that suit cultural and regional preferences.",
  },
  {
    question: "Can I visit your showroom or manufacturing facility?",
    answer:
      "Yes, we welcome business partners to visit our showroom or production facility by appointment. Please contact us to schedule a visit.",
  },
];

const paymentQueries = [
  {
    question: "What are your payment terms for bulk orders?",
    answer:
      "We offer flexible payment options, including bank transfers and LC (Letter of Credit). Payment terms are discussed during order confirmation.",
  },
  {
    question: "How long does it take to fulfill bulk orders?",
    answer:
      "Production time varies based on order size and customization. On average, bulk orders take 4-8 weeks for production and delivery.",
  },
  {
    question: "Are there import duties or taxes on jewellery shipments?",
    answer:
      "Import duties and taxes depend on the destination country’s regulations. We recommend checking with local customs authorities for details.",
  },
  {
    question: "Do you offer wholesale pricing for bulk purchases?",
    answer:
      "Yes, we offer competitive wholesale pricing for bulk purchases. Contact our sales team for detailed pricing and discounts.",
  },
  {
    question: "Do you offer installment payment plans?",
    answer:
      "Currently, we do not offer installment payment plans. However, we provide flexible payment options for bulk and custom orders.",
  },
];

const helpQuestions = [
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide, including to Europe, the Middle East, and Asia. We partner with trusted logistics providers for safe and timely delivery.",
  },
  {
    question:
      "Do you provide marketing support for retailers and distributors?",
    answer:
      "Yes, we offer high-quality images, catalogs, and promotional materials to help our B2B clients market their products effectively.",
  },
  {
    question: "How can I place a bulk order or become a distributor?",
    answer:
      "You can contact our sales team via email or WhatsApp to discuss your requirements. We will guide you through the ordering process and partnership opportunities.",
  },
  {
    question: "What happens if my order gets delayed?",
    answer:
      "We do our best to ensure timely delivery. In case of delays due to unforeseen circumstances, we will notify you immediately with updates.",
  },
  {
    question: "Do you provide after-sales support for your customers?",
    answer:
      "Yes, our team is available to assist with any post-purchase inquiries, including repairs, resizing, and general customer support.",
  },
  {
    question: "Can I track my shipment after placing an order?",
    answer:
      "Yes, we provide tracking details for all shipments so you can monitor the status of your delivery in real-time.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] =
    useState<string>("general-questions"); // Track active section

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle current FAQ
  };

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId); // Update active section
    }
  };

  return (
    <main className="w-full overflow-hidden">
      <PageHeader title="FAQs" link="/faq" />
      <section className="w-full container lg:py-16 py-10 flex lg:flex-row flex-col gap-8">
        <div className="flex lg:flex-col flex-row overflow-x-auto gap-4 lg:w-[20%] w-full">
          {[
            { id: "general-questions", label: "General Questions" },
            { id: "help-support", label: "Help and Support" },
            { id: "payment-queries", label: "Payment Queries" },
          ].map(({ id, label }) => (
            <button
              key={id}
              className={`flex_center py-3 px-6  rounded-md w-max font-medium 
                ${
                  activeSection === id
                    ? "border-red-500 text-red-500"
                    : "text-text"
                }`}
              onClick={() => handleScrollToSection(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-16 lg:w-[80%] w-full h-[100vh] overflow-y-scroll no-scrollbar">
          <div id="general-questions" className="flex flex-col gap-8">
            <h3 className="text-3xl font-semibold text-secondary">
              General Questions
            </h3>
            <div className="flex flex-col w-full gap-6">
              {generalQuestions.map((faq, index) => (
                <FaqCard
                  key={index}
                  index={index}
                  question={faq.question}
                  answer={faq.answer}
                  isActive={activeIndex === index}
                  toggleFAQ={toggleFAQ}
                />
              ))}
            </div>
          </div>

          <div id="help-support" className="flex flex-col gap-8">
            <h3 className="text-3xl font-semibold text-secondary">
              Help & Support
            </h3>
            <div className="flex flex-col w-full gap-6">
              {helpQuestions.map((faq, index) => (
                <FaqCard
                  key={index}
                  index={index}
                  question={faq.question}
                  answer={faq.answer}
                  isActive={activeIndex === index}
                  toggleFAQ={toggleFAQ}
                />
              ))}
            </div>
          </div>

          <div id="payment-queries" className="flex flex-col gap-8">
            <h3 className="text-3xl font-semibold text-secondary">
              Payment Queries
            </h3>
            <div className="flex flex-col w-full gap-6">
              {paymentQueries.map((faq, index) => (
                <FaqCard
                  key={index}
                  index={index}
                  question={faq.question}
                  answer={faq.answer}
                  isActive={activeIndex === index}
                  toggleFAQ={toggleFAQ}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
