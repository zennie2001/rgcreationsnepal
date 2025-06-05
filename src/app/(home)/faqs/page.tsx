"use client";
import { useState } from "react";

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqItems = [
    {
      question: "How long will it take my product to arrive?",
      answer:
        "When you place an order with Knife Depot, you'll receive an estimated delivery date during the checkout process. Your actual date of delivery will depend on the shipping option you choose. Keep in mind that on occasion bad weather and shipping company delays can slow down orders.",
    },
    {
      question: "How much will shipping cost?",
      answer:
        "Shipping costs depend on your location, selected shipping method, and order total. Standard shipping starts at $5.99, with free shipping available on orders over $75. Express shipping options are available at additional cost.",
    },
    {
      question: "Do you ship to military bases?",
      answer:
        "Yes, we do ship to military bases and APO/FPO addresses. Please note that deliveries to military addresses may take additional time due to military postal system processing.",
    },
    {
      question: "Do I need to sign up for an account to place an order?",
      answer:
        "No, you don't need to create an account to place an order. We offer a guest checkout option. However, creating an account allows you to track orders, save preferences, and makes future purchases faster.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. We currently do not accept checks, money orders, or cryptocurrency.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-black py-16">
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
                      isOpen ? "bg-red-600" : "bg-darkGreen"
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
