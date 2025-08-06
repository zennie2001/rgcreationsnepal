// app/book-appointment/page.tsx


import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Book a Consultation - RG Creations Nepal",
  description:
    "Schedule a personalized consultation with RG Creations Nepal. Let our experts guide you through your architecture and construction needs.",
};


const BookAppointmentPage = () => {
  return (
    <>
    <head>
      <link
        rel="canonical"
        href="https://www.rgcreationsnepal.com/book-appointment"
      />
    </head>
     <Script
      id="book-appointment-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": "https://www.rgcreationsnepal.com/book-appointment",
          "name": "Book Appointment - RG Creations Nepal Pvt. Ltd.",
          "description": "Schedule your appointment with RG Creations Nepal Pvt. Ltd., a leading architecture and construction company specializing in luxury resorts, banquet halls, clubs, and more.",
          "mainEntity": {
            "@type": "Organization",
            "name": "RG Creations Nepal Pvt. Ltd.",
            "url": "https://www.rgcreationsnepal.com",
            "logo": "https://www.rgcreationsnepal.com/logo.png",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+977-9802357231",
                "contactType": "customer service",
                "areaServed": "NP",
                "availableLanguage": ["English", "Nepali"]
              },
              {
                "@type": "ContactPoint",
                "telephone": "+977-01-4524806",
                "contactType": "office",
                "areaServed": "NP",
                "availableLanguage": ["English", "Nepali"]
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Baluwatar",
              "addressLocality": "Kathmandu",
              "postalCode": "44600",
              "addressCountry": "NP"
            }
          }
        }),
      }}
    />
    <main className="min-h-screen py-20 px-4  bg-gray-400 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#333d49] mb-8 text-center pt-16">
          Book an Appointment
        </h1>
        <div className="w-full h-[700px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://cal.com/rgcreationsnp.com/30min?embed=1&overlayCalendar=true"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Cal.com Booking Calendar"
          ></iframe>
        </div>
      </div>
    </main>
    </>
  );
};

export default BookAppointmentPage;
