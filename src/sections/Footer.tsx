import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaWordpress,
} from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold leading-tight mb-6">
            <span className="text-[#F65128]">Engineered</span> to Cut, Styled to
            <br />
            Stand Out, Ready for{" "}
            <span className="text-[#F65128]">Anything</span>
          </h2>

          <div className="mt-10">
            <h3 className="text-[#F65128] text-lg font-semibold">Blades</h3>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed max-w-sm">
              Whether it’s everyday carry or mission-ready gear, our collection
              covers the spectrum of sharp innovation. Choose your edge — and
              carry it with confidence.
            </p>

            <div className="flex gap-4 mt-4 text-xl text-white">
              <FaFacebookF />
              <FaInstagram />
              <FaXTwitter />
              <FaYoutube />
              <FaWordpress />
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-white font-semibold text-lg mb-2">Company</h4>
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
            <h4 className="text-white font-semibold text-lg mb-2">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 mt-1" />
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
      <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-400 text-center">
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
  