"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaWordpress,
} from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";
import { MoveDownRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Implement subscription logic here
    console.log("Subscribing email:", email);
    // Reset the input
    setEmail("");
  };
  return (
    <footer className="bg-darkGreen text-white  pt-10 pb-10 px-4">
      <div className="flex flex-col items-centernp border-b border-lightGreen md:flex-row justify-between container mb-14">
        <h2 className="text-xl md:text-2xl  font-semibold text-white  text-center md:text-left  mb-8">
          Join our newsletter to
          <br /> keep up to date with us!
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="bg-darkGreen border border-lightGreen w-[300px] rounded-full text-white px-4 py-3  flex-grow focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <button
            onClick={handleSubscribe}
            className="bg-primary text-black rounded-full px-4   py-2 text-sm font-medium transition-colors flex items-center justify-center"
          >
            SUBSCRIBE
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column */}
        <div>
          <div className="  text-center md:text-left">
            <h3 className="text-white text-2xl font-semibold mb-4">
              Blades
            </h3>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed max-w-sm">
              Whether it’s everyday carry or mission-ready gear, our collection
              covers the spectrum of sharp innovation. Choose your edge — and
              carry it with confidence.
            </p>

            <div className="flex gap-4 mt-4  text-center md:text-left text-xl text-white">
              <FaFacebookF />
              <FaInstagram />
              <FaXTwitter />
              <FaYoutube />
              <FaWordpress />
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col  text-center md:text-left gap-6">
          <div>
            <h4 className="text-white font-semibold text-base md:text-lg  mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/shipping-info">Shipping Info</Link>
              </li>
              <li>
                <Link href="/cancellations-returns">
                  Cancellations & Returns
                </Link>
              </li>
              <li>
                <Link href="/accessibility">Accessibility Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-white  text-center md:text-left font-semibold text-base md:text-lg mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-300 flex flex-col items-center md:items-start">
              <li className="flex gap-2 items-center text-center">
                <MapPin className="w-4 h-4 mt-1 ms-6 md:ms-0" />
                Tyler, Alabama 36785 (not open to public)
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4" />
                <a href="mailto:orders@knife-depot.com">
                  orders@knife-depot.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-lightGreen container flex justify-between mt-12 pt-6 text-xs md:text-sm text-gray-400 text-center">
        <p>&copy; 2025 Blades. All rights reserved</p>
        <div className=" space-x-3">
          <Link href="/privacy-policy">Privacy Policy</Link>|
          <Link href="/terms-conditions">Terms & Conditions</Link>|
          <Link href="/cookies-policy">Cookies Policy</Link>|
          <Link href="/site-map">Map</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
