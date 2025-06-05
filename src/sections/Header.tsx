"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex w-32 h-28 bg-white items-center">
              <img src="/logo.png" alt="Logo" className="p-4"/>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className="text-white hover:text-darkGreen hover:font-semiboldfont-medium transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white hover:text-darkGreen hover:font-semiboldfont-medium transition-colors"
              >
                About Us
              </a>
              <a
                href="/services"
                className="text-white hover:text-darkGreen hover:font-semiboldfont-medium transition-colors"
              >
                Services
              </a>
              <a
                href="/projects"
                className="text-white hover:text-darkGreen hover:font-semiboldfont-medium transition-colors"
              >
                Projects
              </a>
              <a
                href="/work-process"
                className="text-white hover:text-darkGreen hover:font-semiboldfont-medium transition-colors"
              >
                Work Process
              </a>
              <a
                href="/blog"
                className="text-white hover:text-darkGreen hover:font-semiboldfont-medium transition-colors"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="text-white hover:text-darkGreen hover:font-semiboldfont-medium transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-white p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-gray-800">Menu</span>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                <a
                  href="/"
                  className="py-3 text-gray-700 hover:text-gray-900 font-medium"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="py-3 text-gray-700 hover:text-gray-900 font-medium"
                >
                  About Us
                </a>
                <a
                  href="/services"
                  className="py-3 text-gray-700 hover:text-gray-900 font-medium"
                >
                  Services
                </a>
                <a
                  href="/projects"
                  className="py-3 text-gray-700 hover:text-gray-900 font-medium"
                >
                  Projects
                </a>
                <a
                  href="/work-process"
                  className="py-3 text-gray-700 hover:text-gray-900 font-medium"
                >
                  Work Process
                </a>
                <a
                  href="/blog"
                  className="py-3 text-gray-700 hover:text-gray-900 font-medium"
                >
                  Blog
                </a>
                <a
                  href="/contact"
                  className="py-3 text-gray-700 hover:text-gray-900 font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
