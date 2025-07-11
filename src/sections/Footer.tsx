"use client";
import React, { useState } from "react";
import { User, Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";
import { HiOfficeBuilding } from "react-icons/hi";


const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#333d49] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* First Column - Blog/Articles */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-white font-semibold text-lg mb-6">
              The Rise of Smart Homes: Revolutionizing Technology
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              At the heart of RG Creations is Ram Giri, a visionary founder whose leadership bridges creative foresight and business execution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-white text-base font-semibold">
                  Our Mission: 
                </h4>
                <p className="text-gray-400 text-sm">
                  To empower entrepreneurs by delivering innovative architectural design, high-quality construction services, and end-to-end material solutions.
                </p>

                <h4 className="text-white font-medium">
                  Our vision:
                </h4>
                <p className="text-gray-400 text-sm">
                  To become a globally recognized leader in innovative design, integrated construction and strategic business
                </p>

                <h4 className="text-white font-medium">What Sets Us Apart</h4>
                <p className="text-gray-400 text-sm">
                  Always, original humour undoubtable was our simply way many
                  looked
                </p>
              </div>
              {/* Second Column - Consequuntures */}
              <div className="space-y-6">
                <h3 className="text-white font-semibold text-base mb-6">
                 Our Specialization
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-400 text-sm">
                    Giving us unmatched insight into the psychology of guests, traffic flow, ambience, sound dynamics
                  </p>

                  <h4 className="text-white font-medium">Areas of expertise</h4>
                  <p className="text-gray-400 text-sm">
                    Premium Nightclub Construction, Luxurious Residential Developments, Commercial Construction
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third Column - About RG */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg mb-6">About </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about/about-us"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about/about-us"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Our Values
                </Link>
              </li>
              <li>
                <Link
                  href="/about/what-sets-us-apart"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                 What Sets Us Apart
                </Link>
              </li>
              <li>
                <Link
                  href="/about/how-we-help-our-clients"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  How We Help Our Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/about/health-safety"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Health and Safety
                </Link>
              </li>
              <li>
                <Link
                  href="/about/message-from-chairman"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Message from Chairman
                </Link>
              </li>
            </ul>
          </div>

          {/* Fourth Column - We Offer */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              
              <li>
                <Link
                  href="/services/top-premium-nightclub-construction"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Premium Nightclub Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/top-luxurious-residential-developments"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Luxurious Residential Developments
                </Link>
              </li>
              <li>
                <Link
                  href="/services/top-commercial-construction"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                 Commercial Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/top-architectural-interior-design"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Architectural & Interior Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/top-premium-furniture-supply"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Premium Furniture Supply
                </Link>
              </li>
              <li>
                <Link
                  href="/services/top-nightclub-equipment-supply"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Nightclub Equipment Supply
                </Link>
              </li>
              <li>
                <Link
                  href="/services/top-project-management-turnkey-solutions"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Project Management & Turnkey Solutions
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
              <div className="space-y-4">
                <div className="flex pt-4 border-b pb-4 border-gray-600 items-center space-x-3">
                  <HiOfficeBuilding className="w-6 h-6 text-gray-400 fill-black bg-white rounded-full p-1 " color="black"  />
                  <span className="text-gray-400 text-sm ">RG Creations Nepal Pvt. Ltd.</span>
                </div>
               
                <div className="flex items-center border-b border-gray-600 pb-4 space-x-3">
                  <MapPin className="w-6 h-6 text-gray-400 fill-black bg-white rounded-full p-1 " color="black"  />
                  <span className="text-gray-400 text-sm">
                    Baluwatar Kathmandu, Nepal. 44600
                  </span>
                </div>
                 <div className="flex pt-4 border-b pb-4 border-gray-600 items-center space-x-3">
                  <Phone className="w-6 h-6 text-gray-400 fill-black bg-white rounded-full p-1 " color="black"  />
                  <span className="text-gray-400 text-sm ">+977-9802357231 <br/> +977-01-4524806</span>
                </div>
                <div className="flex items-center border-b border-gray-600 pb-4 space-x-3">
                  <Mail className="w-6 h-6 text-gray-400 fill-black bg-white rounded-full p-1 " color="black"  />
                  <span className="text-gray-400 text-sm">
                    rgcreationsnp@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4  ">
              <h3 className="text-white font-semibold mt-20  text-lg">
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
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-end gap-12">
          {/* Left - Logo and Description */}
          <div className="space-y-6">
            <img src="/Rg Logo .svg" className="h-28 w-auto  invert brightness-0" />
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Welcome to RG Creations. We envision a future where our projects,
              adorned with a royal touch, stand as timeless masterpieces.
            </p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              href="#"
              className="text-white text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white text-sm hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="text-white text-sm hover:text-white transition-colors"
            >
              Cookies
            </Link>
          </div>
          <div>
            {/* Social Media */}
            <div className="flex justify-start md:justify-end space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61557679596813"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Frgcreationsnp%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExODRiQnlMY1BMa2duVWlYUAEe1rd0mb7YcDXx3TbVxtrfwQlVVQjudfR6CqXO8F8F0mgtlnGs7-VWFoBzNxg_aem_3Omu_acknpc8Zt2MFvxI-A&h=AT0MTZGwN6ogpJTTWTzTfOvsxDl_TaM1HeIdP0FsgH4K1cUykqnSTaXcfPjPTFj7ZtE0zLdmtYWuQVotnsknnKd0UJMrzuC1jV6ULLqeq_U3yAURVb45j51qpHpLDeSdeV9b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                 href="https://www.youtube.com/@RGCreationsNepal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                 href="https://www.tiktok.com/@rgcreationsnp?fbclid=IwY2xjawLbIVNleHRuA2FlbQIxMABicmlkETE4NGJCeUxjUExrZ25VaVhQAR5vzMqzw3k_iFTznoXy5PMYDOBnf20F1UcGrOLeCT3_cVlO3n-GgWAZuzp0kA_aem_gP4OpF90nyrirL88BJ_5Zg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white pt-4 text-sm">
              © 2025 RG Creations Nepal. <span className="text-gray-300">All rights reserved.</span> 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
