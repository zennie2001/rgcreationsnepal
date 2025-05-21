"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavLinks = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Collections", link: "/collections" },
    { title: "Blogs", link: "/blogs" },
    { title: "Make your Custom Khukuri", link: "/collections" },
    
  ];

  return (
    <header className="w-full bg-lightGreen text-white py-4 px-6 md:px-12 lg:px-16">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="text-xl font-medium">
            Blades
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
        <div className="flex-1 flex justify-end">
          <Link
            href="/contact"
            className="bg-primary text-darkGreen  hover:bg-[#ff5533] transition-colors px-5 py-2 rounded-md text-base font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-4 text-white"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

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
                <X size={24} />
              </button>

              <div className="mt-10 flex flex-col gap-6">
                {mainNavLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className={`${
                      index === 0 ? "text-[#ff5533]" : "text-white"
                    } text-lg font-medium hover:text-[#ff5533]`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="border border-[#ff5533] text-white hover:bg-[#ff5533] transition-colors px-4 py-2 rounded-md text-center mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
