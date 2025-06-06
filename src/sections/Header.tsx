"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex w-20 h-16 md:w-32 md:h-28 bg-white items-center">
              <img src="/logo.png" alt="Logo" className="p-2 md:p-4" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className="text-white hover:text-darkGreen hover:font-semiboldfont-medium transition-colors"
              >
                Home
              </a>
              <div className="relative group">
                <div className="text-white hover:text-darkGreen hover:font-semiboldfont-medium transition-colors flex items-center gap-1 cursor-pointer">
                  About Us
                  <ChevronDown
                    size={16}
                    className="transition-transform group-hover:rotate-180"
                  />
                </div>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a
                    href="/about/mission-vision"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-darkGreen"
                  >
                    Mission & Vision
                  </a>

                  <a
                    href="/about/company-history"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-darkGreen"
                  >
                    Company History
                  </a>
                </div>
              </div>
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
                <div className="flex flex-col">
                  <div className="py-3 text-gray-700 hover:text-gray-900 font-medium">
                    About Us
                  </div>
                  <div className="pl-4 space-y-2">
                    <a
                      href="/about/mission"
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      Mission
                    </a>
                    <a
                      href="/about/vision"
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      Vision
                    </a>
                    <a
                      href="/about/history"
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      Company History
                    </a>
                  </div>
                </div>
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
