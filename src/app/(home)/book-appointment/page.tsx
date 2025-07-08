// app/book-appointment/page.tsx
"use client";

import React from "react";

const BookAppointmentPage = () => {
  return (
    <main className="min-h-screen py-20 px-4  bg-gray-400 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold text-darkGreen mb-8 text-center pt-16">
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
  );
};

export default BookAppointmentPage;
