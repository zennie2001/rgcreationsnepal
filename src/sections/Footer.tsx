import Link from "next/link";
import React from "react";
import { Globe, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const about = [
    {
      label: "Company",
      path: "/about",
    },
    { label: "Who We Are", path: "/our-team" },
    { label: "Message from CEO", path: "/message-from-ceo" },
    // {
    //   label: "Message from Director",
    //   path: "/message-from-director",
    // },
    { label: "Craftsmanship", path: "/craftsmanship" },
    { label: "Customer Testimonials", path: "/testimonials" },
    { label: "Our Showrooms", path: "/message-from-ceo" },
    { label: "FAQs", path: "/faqs" },
  ];
  const categories = [
    { label: "Necklaces", path: "/necklace" },
    { label: "Bracelets", path: "/bracelet" },
    { label: "Rings", path: "/ring" },
    { label: "Earrings", path: "/earring" },
    { label: "Bangles", path: "/bangle" },
    { label: "Pendants", path: "/pendant" },
    { label: "Chains", path: "/chain" },
    { label: "Anklets", path: "/anklet" },
    { label: "Nose Pins", path: "/nose-pin" },
    { label: "Cufflinks", path: "/cufflink" },
    { label: "Jewelry Sets", path: "/jewelry-set" },
    { label: "Gold Coin & Bullion", path: "/gold-coin-bullion" },
  ];

  const services = [
    { label: "Custom Design Services", path: "/necklace" },
    { label: "Jewelry Repair", path: "/bracelet" },
    { label: "Engraving Services", path: "/ring" },
    { label: "Appraisal Services", path: "/ring" },
  ];

  const midPoint = Math.ceil(categories.length / 2);
  const firstHalf = categories.slice(0, midPoint);
  const secondHalf = categories.slice(midPoint);

  return (
    <div
      className="bg-[#F6F8FA] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/footer-bg.jpg)" }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="text-center flex md:flex-row flex-col md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-799">
              Subscribe Newsletter
            </h2>
            <p className="text-lg text-black">
              Get the latest updates, tips, and exclusive offers straight to
              your inbox
            </p>
          </div>
          <div className="flex flex-row items-center w-full max-w-lg mx-auto">
            <input
              type="text"
              className="flex-grow p-2 border rounded-l w-[70%] md:w-full sm:w-auto"
              placeholder="Enter your email"
            />
            <button className="bg-[#ffd359] text-black px-4 py-2 rounded-r">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-2 lg:grid-cols-5 mt-10 ">
          <div>
            <h2 className="text-lg font-semibold text-black">About US</h2>
            <ul className="space-y-2 text-black">
              {about.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:-ml-10">
            <h2 className="text-lg font-semibold text-black">Categories</h2>
            <ul className="space-y-2 text-black">
              {firstHalf.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:-ml-20">
            <h2 className="text-lg font-semibold text-black invisible">
              Categories
            </h2>
            <ul className="space-y-2 text-black">
              {secondHalf.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:-ml-28">
            <h2 className="text-lg font-semibold text-black">Services</h2>
            <ul className="space-y-2 text-black">
              {services.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Information */}
          <div className="md:-ml-32">
            <h2 className="text-lg font-semibold text-black">Contact Us</h2>
            <ul className="space-y-2 text-black w-full">
              <li className="flex items-center gap-2">
                <MapPin className="flex-shrink-0" />
                <span>
                  Al Souq Al Kabeer Tailor Galli, Esag Building (Old Plot), Shop
                  No. 07 Burdubai, Dubai, UAE (Near Astoria Hotel)
                </span>
              </li>

              <li className="w-full">
                <Link
                  href="mailto:info@starlaxmijewellery.com"
                  className="flex items-center gap-2 w-full"
                >
                  <Mail className="flex-shrink-0" />
                  <span className="flex-1">info@starlaxmijewellery.com</span>
                </Link>
              </li>

              <li className="w-full">
                <Link
                  href="http://www.starlaxmijewellery.com"
                  className="flex items-center gap-2 w-full"
                >
                  <Globe className="flex-shrink-0" />
                  <span className="flex-1">www.starlaxmijewellery.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-6 border-t">
        <img
          src="/../assets/logo-final.png"
          className="h-32 mx-auto mb-2"
          alt="Company Logo"
        />
        <p className="text-black">
          &copy; 2025 Star Laxmi Jewellery LLC | All Rights Reserved
        </p>
        <span>
          <Link href="/privacy-policy" className="text-xs mt-1">
            PRIVACY POLICY
          </Link>
          {" | "}
          <Link href="/terms-conditions" className="text-xs mt-1">
            TERMS OF SERVICES
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
