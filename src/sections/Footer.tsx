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
  return (
    <footer className="bg-[#121212] text-white  pt-20 pb-10 px-4">
      <div className="flex flex-col items-center md:flex-row justify-between container mb-14">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold  text-center md:text-left  mb-6">
          <span className="text-[#F65128]">Engineered</span> to Cut, Styled to
          <br/><p className="md:mt-4"></p>
          Stand Out, Ready for <span className="text-[#F65128]">Anything</span>
        </h2>
        <div className="w-20 flex items-center h-20 bg-secondary">
          {" "}
          <MoveDownRight size={70} className="m-1" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column */}
        <div>
          <div className="  text-center md:text-left">
            <h3 className="text-[#F65128] text-lg font-semibold mb-4">Blades</h3>
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
      <div className="border-t border-gray-800 mt-12 pt-6 text-xs md:text-sm text-gray-400 text-center">
        <p>&copy; 2025 Blades. All rights reserved</p>
        <div className="mt-2 space-x-3">
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
