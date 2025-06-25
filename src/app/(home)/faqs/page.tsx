"use client";
import { useState } from "react";

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqItems = [
    {
      question: "What makes your firm the best choice for sustainable design?",
      answer:
        "Our firm combines cutting-edge green technologies with timeless design principles. We prioritize passive design strategies, eco-certified materials, and LEED/BREEAM standards to deliver buildings that are both sustainable and beautiful.",
    },
    {
      question: "Do sustainable buildings cost more to design or build?",
      answer:
        "While some sustainable materials and technologies may have higher upfront costs, they typically result in long-term savings through energy efficiency, durability, and reduced maintenance costs.",
    },
    {
      question: "Can you work with local/natural materials in your designs?",
      answer:
        "Absolutely! We actively seek out local and natural materials to reduce transportation emissions, support regional economies, and connect our designs to their local contexts.",
    },
    {
      question:
        "Do sustainable designs compromise on aesthetics or functionality?",
      answer:
        "Not at all. Our sustainable designs are tailored to meet high standards of beauty and performance. Sustainability enhances both form and function when integrated thoughtfully.",
    },
    {
      question: "Do you offer sustainable design services internationally?",
      answer:
        "Yes, we provide sustainable design consultancy and architectural services to clients around the world. Our team is experienced in adapting to regional codes, climates, and cultural needs.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-black pt-8 pb-10">
      <div className="container mx-auto px-4 ">
        <div className="mb-10">
          <p className="text-darkGreen font-medium mb-2 text-sm">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Got Questions? We’ve Got the <br /> Edge on Answers
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openItem === index;
            return (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleItem(index)}
                  className="flex items-start justify-between w-full py-4 text-left focus:outline-none"
                >
                  <span className="text-base md:text-lg font-medium w-[90%]">
                    {item.question}
                  </span>
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full mt-1 shrink-0 ${
                      isOpen ? "bg-[#980000]" : "bg-darkGreen"
                    }`}
                  >
                    {isOpen ? (
                      <span className="text-white text-xl leading-none">×</span>
                    ) : (
                      <span className="text-white text-xl leading-none">+</span>
                    )}
                  </div>
                </button>

                {isOpen && (
                  <p className="text-sm text-gray-600 leading-relaxed pr-6">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
