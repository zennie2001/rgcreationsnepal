"use client";

import FaqCard from "@/components/FaqCard";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";

const helpQuestions = [
  {
    question: "How can I contact Star Laxmi Jewellery for assistance?",
    answer:
      "You can reach us via email at info@starlaxmijewellery.com or call us at +971 4324 772O.",
  },
  {
    question: "Do you offer live chat support?",
    answer:
      "Yes, we offer live chat support during business hours on our website.",
  },
  {
    question: "What should I do if I receive a damaged product?",
    answer:
      "If you receive a damaged or defective product, please contact our support team within 24 hours with images, and we will assist you with a replacement or refund.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, we will send you a tracking number via email so you can monitor the delivery status.",
  },
];

const paymentQueries = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards (Visa, MasterCard, American Express), bank transfers, and PayPal for online purchases.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes, we use SSL encryption and secure payment gateways to protect your financial information.",
  },
  {
    question: "Do you offer installment payment options?",
    answer:
      "Currently, we do not offer EMI options, but we are working on introducing flexible payment plans.",
  },
  {
    question: "Can I pay using cryptocurrency?",
    answer:
      "At the moment, we do not accept cryptocurrency payments, but we may introduce this option in the future.",
  },
];

const generalQuestions = [
  {
    question: "Are all your jewellery pieces made of real gold?",
    answer:
      "Yes, we offer certified 24K, 22K, and 18K gold jewellery, along with hallmarked authenticity.",
  },
  {
    question: "Do you provide international shipping?",
    answer:
      "Yes, we ship globally with trusted courier services. Shipping costs and delivery times vary based on location.",
  },
  {
    question: "Can I customize my jewellery?",
    answer:
      "Yes! We offer customization services for gold and diamond jewellery. Contact us for details.",
  },
  {
    question: "Do you offer a buy-back or exchange policy?",
    answer:
      "Yes, we offer a buy-back and exchange policy based on the condition and current market value of the gold. Terms and conditions apply.",
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
