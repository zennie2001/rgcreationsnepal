// import PageHeader from "@/components/PageHeader";
import Contact from "@/sections/Contact";
import FAQ from "@/app/(home)/faqs/page";
import {
  FaEnvelope,
  FaFacebookF,
  FaHeadset,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPinterest,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Phone } from "lucide-react";
import { MailOpen } from "lucide-react";
// import NewPageHeader from "@/components/NewPageHeader";
import ContactHero from "@/sections/ContactHero";
import FAQContact from "@/sections/FAQ";
import Script from "next/script";

export const metadata = {
  title: "Contact Us | RG Creations Nepal ",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};

const contactInfos = [
  {
    logo: FaPhoneAlt,
    title: "Call us",
    subTitle: "Sun-Fri from 10am-5pm",
    contact: "+971 7777777777",
  },
  {
    logo: FaEnvelope,
    title: "Mail us",
    subTitle: "We are here to help.",
    contact: "info@blade.com",
  },
  {
    logo: FaLocationDot,
    title: "Visit us",
    subTitle: "Visit our office.",
    contact: "Locate us",
  },
];

const socialMedia = [
  {
    link: "facebook.com",
    icon: FaFacebookF,
  },
  {
    link: "instagram.com",
    icon: RiInstagramFill,
  },
  {
    link: "linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    link: "pinterest.com",
    icon: FaPinterest,
  },
];

export default function ContactUs() {
  return (
    <>
     <Script
      id="contact-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "url": "https://www.rgcreationsnepal.com/contact",
          "name": "Contact Us - RG Creations Nepal Pvt. Ltd.",
          "description": "Contact RG Creations Nepal Pvt. Ltd., a leading construction and architecture company. Reach out for inquiries about projects, partnerships, and services.",
          "mainEntity": {
            "@type": "Organization",
            "name": "RG Creations Nepal Pvt. Ltd.",
            "url": "https://www.rgcreationsnepal.com",
            "logo": "https://www.rgcreationsnepal.com/logo.png",
            "email": "info@rgcreationsnepal.com",
            "telephone": "+977-9802357231",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Baluwatar",
              "addressLocality": "Kathmandu",
              "postalCode": "44600",
              "addressCountry": "NP"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+977-9802357231",
                "contactType": "customer service",
                "areaServed": "NP",
                "availableLanguage": ["English", "Nepali"]
              },
              {
                "@type": "ContactPoint",
                "telephone": "+977-01-4524806",
                "contactType": "office",
                "areaServed": "NP",
                "availableLanguage": ["English", "Nepali"]
              }
            ]
          }
        }),
      }}
    />
    <main className="w-full overflow-hidden">
      <ContactHero/>
      {/* Contact Section */}
      <div className="container mx-auto mt-20 mb-20 shadow-lg rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 bg-white p-10 md:p-16">
          <div className="md:mt-8 text-xs flex flex-col md:flex-row items-center gap-4 md:gap-10 text-gray-700">
            <div className="flex items-center -ms-20 md:ms-0  gap-2 mb-8">
              <Phone
                size={20}
                className="text-[#133950] font-semibold"
                fill="darkGreen"
              />
              <div className="flex flex-col items-start">
                <span className="text-[#133950] text-base font-semibold">
                  Phone
                </span>
                <span className="text-gray-500 text-base font-semibold">
                 +977-9802357231 <br/> +977-01-4524806
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 -ms-3 mb-8">
              <MailOpen size={20} className="text-[#133950" fill="darkGreen" />
              <div className="flex flex-col items-start">
                <span className="text-[#133950] text-base font-semibold">
                  Email
                </span>
                <span className="text-gray-500 text-base font-semibold">
                  info@rgcreationsnepal.com
                </span>
              </div>
            </div>
          </div>
          <h2 className="text-3xl text-left font-extrabold text-black mb-4">
            Get in <span className="text-[#133950">Touch</span>
          </h2>
          <p className="text-gray-600 text-sm mb-6">
           Have a project in mind? Let’s build something extraordinary together. Contact RG Creations Nepal for expert architecture and construction solutions that bring your vision to life.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              placeholder="Name *"
              required
              className="w-full px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
            />
            <input
              type="country"
              name="country"
              // value={formData.country}
              // onChange={handleChange}
              placeholder="Country"
              className="w-full px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
            />
            <input
              type="tel"
              name="phone"
              // value={formData.phone}
              // onChange={handleChange}
              placeholder="Phone number *"
              required
              className="w-full px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
            />
            <textarea
              name="details"
              // value={formData.details}
              // onChange={handleChange}
              placeholder="Enter your Query / Details"
              rows={4}
              required
              className="w-full px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
            />

            <button
              type="submit"
              className="w-full bg-[#133950] text-white py-2 px-4 rounded"
              // disabled={status === "loading"}
            >
              Submit
            </button>

            {/* {status === "success" && (
              <p className="text-green-600 mt-2">
                Request submitted successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-2">
                Something went wrong. Try again.
              </p>
            )} */}
          </form>

          {/* Contact info */}
          {/* <div className="mt-8 text-xs flex flex-col md:flex-row items-center gap-4 md:gap-10 text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <Phone
                size={15}
                className="text-darkGreen font-semibold"
                fill="darkGreen"
              />
              <div className="flex flex-col items-start">
                <span className="text-darkGreen text-sm font-semibold">
                  Phone
                </span>
                <span className="text-gray-500 font-semibold">
                  2222 4444 8685
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MailOpen size={15} className="text-darkGreen" fill="darkGreen" />
              <div className="flex flex-col items-start">
                <span className="text-darkGreen text-sm font-semibold">
                  Email
                </span>
                <span className="text-gray-500 font-semibold">
                  orders@RGCreation.com
                </span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Right side - Image */}
        <div className="w-[90%] mx-auto relative md:w-1/2  ">
          <div className="absolute bg-[#333d49] right-0 h-full w-1/2 z-10"></div>
          <div className="relative w-[70%] md:w-[77%] mx-auto h-[77%]  m-20 z-20">
            <img
              src="/rg-logo-frame.jpg" // Replace with your actual image
              alt="Top Construction company"
              className="object-cover w-full h-full  rounded-sm "
            />
          </div>
        </div>
      </div>
      
          
      <FAQContact />
      
      {/* <Contact className="pt-0 pb-16" /> */}
      {/* <div className="w-full flex_center h-max">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.390823710961!2d55.2927915!3d25.2645181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433fc32c0151%3A0xc280b5c494aa3428!2sAl%20Souq%20Al%20Kabeer%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2snp!4v1711382400000!5m2!1sen!2snp"
          loading="lazy"
          className="w-full h-[60vh]"
          allowFullScreen
        ></iframe>
      </div> */}
    </main>
    </>
  );
}
