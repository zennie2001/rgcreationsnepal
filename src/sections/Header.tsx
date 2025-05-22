"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ShoppingCart } from 'lucide-react';
import { User } from 'lucide-react';
import logo from "@/assets/images/final-logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavLinks = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Collections", link: "/collections" },
    { title: "Blogs", link: "/blogs" },
    { title: "Make your Custom Khukuri", link: "/custom-khukuri" },
     { title: "Contact Us", link: "/contact" },
  ];

  return (
    <header className="w-full bg-lightGreen text-white py-4 px-2 md:px-12 lg:px-16">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="hidden md:flex">
          <Link href="/">
            <img src={logo.src} alt="Logo" className="w-36 " />
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex  justify-center">
          <ul className="flex space-x-8">
            {mainNavLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className={`${
                    index === 0 ? "text-darkGreen font-semibold" : "text-white"
                  } hover:text-darkGreen transition-colors font-medium`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <div className=" hidden md:flex md:justify-end gap-4">
          <Link
            href="/cart"
            className="py-2"
          >
            <ShoppingCart size={28} fill="white" className="text-white" />
          </Link>
          <Link
            href="/contact"
            className=" py-2"
          >
            <User size={28} fill="white" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-4 text-white"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
        <div className="flex md:hidden">
          <Link href="/" >
            <img src={logo.src} alt="Logo" className="w-24" />
          </Link>
        </div>
        <div className="flex md:hidden gap-3 md:justify-end">
          <Link
            href="/cart"
            className="py-2"
          >
            <ShoppingCart size={24} fill="white" className="text-white" />
          </Link>
          <Link
            href="/contact"
            className=" py-2"
          >
            <User size={24} fill="white" />
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-primary/50 z-40"
              onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Menu */}
            <div className="fixed top-0 right-0 w-64 h-full bg-primary z-50 p-6 shadow-lg">
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={24} className="text-darkGreen" />
              </button>

              <div className="mt-10 flex flex-col gap-4">
                {mainNavLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className={`${
                      index === 0 ? "text-darkGreen" : "text-darkGreen"
                    } text-base font-medium hover:bg-darkGreen hover:text-white px-2 py-1 rounded-sm`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
