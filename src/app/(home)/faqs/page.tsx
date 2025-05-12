"use client";
import { useState } from 'react';

export default function FAQ() {
  const [openItem, setOpenItem] = useState(0);
  
  const faqItems = [
    {
      question: "How long will it take my product to arrive?",
      answer: "When you place an order with Knife Depot, you'll receive an estimated delivery date during the checkout process. Your actual date of delivery will depend on the shipping option you choose. Keep in mind that on occasion bad weather and shipping company delays can slow down orders."
    },
    {
      question: "How much will shipping cost?",
      answer: "Shipping costs depend on your location, selected shipping method, and order total. Standard shipping starts at $5.99, with free shipping available on orders over $75. Express shipping options are available at additional cost."
    },
    {
      question: "Do you ship to military bases?",
      answer: "Yes, we do ship to military bases and APO/FPO addresses. Please note that deliveries to military addresses may take additional time due to military postal system processing."
    },
    {
      question: "Do I need to sign up for an account to place an order?",
      answer: "No, you don't need to create an account to place an order. We offer a guest checkout option. However, creating an account allows you to track orders, save preferences, and makes future purchases faster."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. We currently do not accept checks, money orders, or cryptocurrency."
    }
  ];

  const toggleItem = (index:any) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="w-full bg-background text-white py-16">
      <div className="container mx-auto px-4 ">
        <div className="mb-10 text-center md:text-left">
          <p className="text-secondary font-medium mb-2">FAQ</p>
          <h2 className="text-2xl lg:text-4xl font-medium">Got Questions? We've Got the Edge on Answers</h2>
        </div>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-gray-800 pb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium text-sm md:text-lg w-[90%]">{item.question}</span>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${openItem === index ? 'bg-red-600' : 'bg-secondary'}`}>
                  {openItem === index ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </button>
              
              {openItem === index && (
                <div className="py-2 text-gray-400 text-xs md:text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}