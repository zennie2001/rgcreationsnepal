"use client";

import { Menu as HeadlessMenu } from "@headlessui/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";

  const aboutUsItems = [
    { title: "About Us", href: "/about/about-us" },
    { title: "Our Values", href: "/about/values" },
    { title: "What Sets Us Apart", href: "/about/unique" },
    { title: "How We Help Our Clients", href: "/about/help-clients" },
    { title: "Health and Safety", href: "/about/health-safety" },
  ];

  const servicesItems = [
    { title: "Residential Construction", href: "/services/residential" },
    { title: "Commercial Construction", href: "/services/commercial" },
    { title: "Interior Design", href: "/services/interior" },
  ];

  return (
    <header
      className={`w-full z-50 ${
        isHome
          ? "bg-white relative shadow-md "
          : "absolute top-0 left-0 backdrop-blur-sm bg-transparent text-white"
      }`}
    >
      <div
        className="container mx-auto px-4 py-4 flex justify-between items-center "
          
      >
        {/* Logo */}
        <a href="/" className="font-bold text-lg">
          <img src="/logo.png" alt="Company Logo" className="h-16 w-auto" />
        </a>

        {/* Desktop Menu */}
        <nav
          className={`hidden lg:flex space-x-8 items-center ${
            isHome ? "text-gray-800" : "text-white"
          }`}
        >
          <a href="/" className="hover:text-green-500 font-medium">
            Home
          </a>

          {/* About Us Dropdown */}
          <div className="relative group">
            <HeadlessMenu>
              <HeadlessMenu.Button className="flex items-center gap-1 hover:text-green-500 font-medium">
                About Us
                <ChevronDown size={16} />
              </HeadlessMenu.Button>
              <div className="absolute hidden group-hover:block  bg-white text-gray-800 shadow-lg rounded-md py-2 w-64 z-50">
                {aboutUsItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-base hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </HeadlessMenu>
          </div>

          {/* Services Dropdown */}
          <div className="relative group">
            <HeadlessMenu>
              <HeadlessMenu.Button className="flex items-center gap-1 hover:text-green-500 font-medium">
                Services
                <ChevronDown size={16} />
              </HeadlessMenu.Button>
              <div className="absolute hidden group-hover:block  bg-white text-gray-800 shadow-lg rounded-md py-2 w-64 z-50">
                {servicesItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-base hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </HeadlessMenu>
          </div>

          <a href="/projects" className="hover:text-green-500 font-medium">
            Projects
          </a>
          
          <a href="/projects" className="hover:text-green-500 font-medium">
          Work Process
          </a>
          <a href="/contact" className="hover:text-green-500 font-medium">
            Blogs
          </a>
          <a href="/contact" className="hover:text-green-500 font-medium">
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-4 bg-white shadow-md text-gray-800">
          <a href="/" className="block hover:text-green-500">
            Home
          </a>
          <div>
            <p className="font-medium">About Us</p>
            <div className="ml-4 space-y-1">
              {aboutUsItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-sm hover:text-green-500"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-medium">Services</p>
            <div className="ml-4 space-y-1">
              {servicesItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-sm hover:text-green-500"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <a href="/projects" className="block hover:text-green-500">
            Projects
          </a>
          <a href="/contact" className="block hover:text-green-500">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
