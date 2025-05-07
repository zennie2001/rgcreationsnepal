"use client";
import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Implement subscription logic here
    console.log('Subscribing email:', email);
    // Reset the input
    setEmail('');
  };

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 16.5L12 5.25L19.5 16.5H4.5Z" fill="#FF5722" stroke="#FF5722" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 5.25V18.75" stroke="#FF5722" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Shipping",
      description: "Free shipping on orders over $99"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 3L6 10L13 17" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 10H20" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Returns",
      description: "We offer 30-Day Returns"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Service",
      description: "Razor sharp customer service"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="8" width="18" height="8" rx="2" stroke="#FF5722" strokeWidth="2"/>
          <rect x="8" y="12" width="8" height="3" rx="1" fill="#FF5722"/>
        </svg>
      ),
      title: "Knives",
      description: "10,000 Badass knives in stock"
    }
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Newsletter subscription */}
          <div className="w-full lg:w-1/2">
            <p className="text-secondary  text-center md:text-left font-medium mb-2">NEWSLETTER</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl  text-center md:text-left font-bold mb-4">
              Blades. Deals. Insider Access. Straight to Your Inbox.
            </h2>
            <p className="text-gray-400  text-center md:text-left mb-8">
              Join our newsletter to receive sharp updates, members-only offers, and the latest
              from the world of Swift-Action. Stay connected — stay equipped.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="bg-gray-900 text-white px-4 py-3 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                onClick={handleSubscribe}
                className="bg-secondary hover:bg-orange-600 text-white px-8 py-2 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                SUBSCRIBE
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Features grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center sm:items-start">
                  <div className="bg-gray-900 p-3 rounded-md mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-medium">{feature.title}</h3>
                  <p className="text-gray-400 text-sm text-center sm:text-left">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Images */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-gray-900 rounded-md overflow-hidden">
              <img src="/b1.jpg" alt="Knife woodworking" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-900 rounded-md overflow-hidden">
              <img src="/b2.jpg" alt="Knife display" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-900 rounded-md overflow-hidden">
              <img src="/b3.jpg" alt="Knife closeup" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-900 rounded-md overflow-hidden">
              <img src="/b4.jpg" alt="Knife handle" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;