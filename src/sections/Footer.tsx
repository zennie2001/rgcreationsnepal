"use client";
import React, { useState } from "react";
import { Users, Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

// You'll need to replace this with your actual RG Creations logo
const rgLogo = "/path-to-your-rg-logo.png"; // Update this path

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Implement subscription logic here
    console.log("Subscribing email:", email);
    // Reset the input
    setEmail("");
  };

  return (
    <footer className="bg-[#2d5a5a] text-white">
      {/* Newsletter Section */}
      <section className="w-full container mx-auto bg-[#2d5a5a] border-b border-[#3d6a6a]">
        <div className="flex flex-col md:flex-row justify-between items-center container mx-auto px-6 py-8">
          <h2 className="text-xl md:text-2xl font-medium text-white text-center md:text-left mb-4 md:mb-0">
            Join our newsletter to keep
            <br />
            up to date with us!
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-[#3d6a6a] border border-[#4d7a7a] rounded-full text-white placeholder-gray-300 pl-10 pr-4 py-3 w-full md:w-[300px] focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
              />
            </div>
            <button
              onClick={handleSubscribe}
              className="bg-white text-[#2d5a5a] rounded-full px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="RG Creations Logo" className="h-20 brightness-0 invert" />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Welcome to RG Creations. We envision a future where our projects,
              adorned with a royal touch, stand as timeless masterpieces.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-[#3d6a6a] rounded-full flex items-center justify-center hover:bg-[#4d7a7a] transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#3d6a6a] rounded-full flex items-center justify-center hover:bg-[#4d7a7a] transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#3d6a6a] rounded-full flex items-center justify-center hover:bg-[#4d7a7a] transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#3d6a6a] rounded-full flex items-center justify-center hover:bg-[#4d7a7a] transition-colors"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Middle Column - Services */}
          <div className="space-y-6">
            <h4 className="text-white font-medium text-lg">SERVICES</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/architectural-design"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link
                  href="/interior-design"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Interior Design
                </Link>
              </li>
              <li>
                <Link
                  href="/quality-assurance"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link
                  href="/utilities-installation"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Utilities Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/finishing-touches"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Finishing Touches
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-medium text-lg">CONTACT US</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-gray-300 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91-6524805</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-gray-300 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Balkumari, Kathmandu, Nepal, 44600
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-gray-300 flex-shrink-0" />
                <a
                  href="mailto:rgcreationsnp@gmail.com"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  rgcreationsnp@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-[#3d6a6a]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <p className="text-gray-300 text-xs text-right">
            © 2025 RG Creations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
