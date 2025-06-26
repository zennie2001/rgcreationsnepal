"use client";
import React, { useState } from "react";
import { User, Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* First Column - Blog/Articles */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-white font-semibold text-lg mb-6">
              The Rise of Smart Homes: Revolutionizing Technology
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Exercitations with consequatur on lorem of quaerat in a encounters
              rationals and happiness taken fugiat by suscipit occasional
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-white text-base font-semibold">
                  Our Plain
                </h4>
                <p className="text-gray-400 text-sm">
                  Teaching lorem dislikes find distinctio dolore selections and
                  circumstances distinctio
                </p>

                <h4 className="text-white font-medium">
                  Many blinded Frequently
                </h4>
                <p className="text-gray-400 text-sm">
                  Survive largest who use making obscures the consectetur
                  available
                </p>

                <h4 className="text-white font-medium">Structures Interest</h4>
                <p className="text-gray-400 text-sm">
                  Always, original humour undoubtable was our simply way many
                  looked
                </p>
              </div>
              {/* Second Column - Consequuntures */}
              <div className="space-y-6">
                <h3 className="text-white font-semibold text-base mb-6">
                  Consequuntures
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-400 text-sm">
                    Ex qui aut Consequuntures ut denouncing happiness lorem's
                    pursues laborious
                  </p>

                  <h4 className="text-white font-medium">Ipsum</h4>
                  <p className="text-gray-400 text-sm">
                    Many ducimus pain know-those circumstance, human is the
                    lorem
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third Column - About RG */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg mb-6">About RG</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Company History
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Certifications & Licenses
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Awards & Recognitions
                </Link>
              </li>
            </ul>
          </div>

          {/* Fourth Column - We Offer */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg mb-6">We Offer</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Interior Design
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Utilities Installation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Finishing Touches
                </Link>
              </li>
            </ul>
          </div>
          {/* Right - Contact and Newsletter */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="">
              <h3 className="text-white border-2 border-gray-400 p-2 text-center font-semibold text-base mb-4">
                CONTACT US
              </h3>
              <div className="space-y-6">
                <div className="flex pt-4 items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm ">+01-4524806</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">
                    Balkuwatar Kathmandu, Nepal. 44600
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">
                    rgcreationsnp@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4 ">
              <h3 className="text-white font-semibold text-lg">
                Join our newsletter to keep up to date with us!
              </h3>
              <div className="flex flex-col gap-3">
                <div className="relative flex-1">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-gray-800 border border-gray-400 text-white placeholder-gray-400 pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600"
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  className="border-gray-400 border hover:bg-gray-600 text-white px-6 py-2 font-medium transition-colors"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 RG Creations. All rights reserved.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Logo and Description */}
          <div className="space-y-6">
            <img src="/logo.png" className="invert brightness-0" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Welcome to RG Creations. We envision a future where our projects,
              adorned with a royal touch, stand as timeless masterpieces.
            </p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              href="#"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
