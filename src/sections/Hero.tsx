"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Header from "./Header";


// Hero slides data
const slides = [
  {
    id: 1,
    image:
      "/rambagh.jpg",
    title: "Best Architectural Firm for Sustainable Design",
  },
  {
    id: 2,
    image:
      "/royal.jpg",
    title: "Innovative Architecture Solutions",
  },
  {
    id: 3,
    image:
      "/taaj.jpg",
    title: "Creating Tomorrow's Spaces Today",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Header */}
      <Header />

      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-fill"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="text-left text-white px-14 container mx-auto ">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          
          <button className="bg-white text-black px-8 py-2.5 rounded-md font-semibold text-lg hover:bg-yellow-300 transition-colors shadow-lg">
            Send Message
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-colors"
      >
        <ChevronRight size={24} className="rotate-180" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-yellow-400" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
