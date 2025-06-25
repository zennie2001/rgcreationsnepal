"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const aboutUsContent = {
    title: "About Us",
    leftColumn: [
      { title: "Company History", href: "/about/company-history" },
      { title: "Mission & Vision", href: "/about/mission-vision" },
      { title: "Our Team", href: "#" },
      { title: "Certifications & Licenses", href: "#" },
      { title: "Awards & Recognitions", href: "#" }
    ],
    rightColumn: [
      { 
        title: "Contact Us", 
        href: "/contact",
        subtitle: "Lorem ipsum dolor sit",
        icon: "contact"
      },
      { 
        title: "Blogs", 
        href: "#",
        subtitle: "Lorem ipsum dolor sit",
        icon: "blog"
      },
      { 
        title: "Message Us", 
        href: "#",
        subtitle: "Lorem ipsum dolor sit",
        icon: "message"
      }
    ]
  };

  const servicesContent = {
    title: "Services",
    leftColumn: [
      { title: "Residential Construction", href: "/services/residential" },
      { title: "Commercial Construction", href: "#" },
      { title: "Renovations & Remodeling", href: "#" },
      { title: "Interior Fit-Outs", href: "#" },
      { title: "Project Management", href: "#" }
    ],
    rightColumn: [
      { 
        title: "Contact Us", 
        href: "/contact",
        subtitle: "Lorem ipsum dolor sit",
        icon: "contact"
      },
      { 
        title: "Blogs", 
        href: "#",
        subtitle: "Lorem ipsum dolor sit",
        icon: "blog"
      },
      { 
        title: "Message Us", 
        href: "#",
        subtitle: "Lorem ipsum dolor sit",
        icon: "message"
      }
    ]
  };

  const getIconColor = (icon:any) => {
    switch(icon) {
      case 'contact': return 'bg-blue-500';
      case 'blog': return 'bg-purple-500';
      case 'message': return 'bg-gray-500';
      default: return 'bg-blue-500';
    }
  };

  const renderMegaMenu = (content:any) => (
    <div className="absolute top-16 left-1/2 z-50 transform -translate-x-1/2 w-screen overflow-hidden max-w-3xl  rounded-lg shadow-2xl  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 ">
      <div className="grid grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="py-8 px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{content.title}</h3>
          <div className="space-y-6">
            {content.leftColumn.map((item:any, index:any) => (
              <a
                key={index}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors text-base"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className=" bg-black space-y-6 py-8 px-8">
          {content.rightColumn.map((item:any, index:any) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group/item"
            >
              <div className={`w-10 h-10 ${getIconColor(item.icon)} rounded-full flex items-center justify-center`}>
                <ArrowRight className="w-5 h-5 text-black" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">{item.title}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover/item:text-gray-600 transition-colors" />
                </div>
                <p className="text-gray-500 text-sm">{item.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Navigation */}
      <nav className=" backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex w-20 h-16 md:w-32 md:h-28  items-center">
              <img src="/logo.png" alt="Logo" className="p-2 md:p-4" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className="text-black hover:text-green-400 hover:font-semibold transition-colors"
              >
                Home
              </a>
              
              {/* About Us - Mega Menu */}
              <div className="relative group">
                <div className="text-black hover:text-green-400 hover:font-semibold transition-colors flex items-center gap-1 cursor-pointer py-4">
                  About Us
                  <ChevronDown
                    size={16}
                    className="transition-transform group-hover:rotate-180"
                  />
                </div>
                {renderMegaMenu(aboutUsContent)}
              </div>

              {/* Services - Mega Menu */}
              <div className="relative group">
                <div className="text-black hover:text-green-400 hover:font-semibold transition-colors flex items-center gap-1 cursor-pointer py-4">
                  Services
                  <ChevronDown
                    size={16}
                    className="transition-transform group-hover:rotate-180"
                  />
                </div>
                {renderMegaMenu(servicesContent)}
              </div>

              <a
                href="#"
                className="text-black hover:text-green-400 hover:font-semibold transition-colors"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-black hover:text-green-400 hover:font-semibold transition-colors"
              >
                Work Process
              </a>
              <a
                href="#"
                className="text-black hover:text-green-400 hover:font-semibold transition-colors"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="text-black hover:text-green-400 hover:font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-black p-2"
            >
              <Menu size={30} />
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
              <div className="flex justify-end items-end">
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={30} className="text-gray-600" />
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
                      href="/about/mission-vision"
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      Mission & Vision
                    </a>
                    <a
                      href="/about/company-history"
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      Company History
                    </a>
                    <a
                      href="/about/our-team"
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      Our Team
                    </a>
                    <a
                      href="/about/certifications"
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      Certifications & Licenses
                    </a>
                    <a
                      href="/about/awards"
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      Awards & Recognitions
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="py-3 text-gray-700 hover:text-gray-900 font-medium">
                    Services
                  </div>
                  <div className="pl-4 space-y-2">
                    <a
                      href="/services/residential"
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      Residential Construction
                    </a>
                    <a
                      href="/services/commercial"
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      Commercial Construction
                    </a>
                    <a
                      href="/services/renovations"
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      Renovations & Remodeling
                    </a>
                    <a
                      href="/services/interior"
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      Interior Fit-Outs
                    </a>
                    <a
                      href="/services/project-management"
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      Project Management
                    </a>
                  </div>
                </div>
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