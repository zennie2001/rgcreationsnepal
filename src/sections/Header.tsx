"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

const navLinks = [
  {
    title: "Gallery",
    link: "/gallery",
  },
  {
    title: "Vacancy",
    link: "/job-opportunities",
  },
  {
    title: "Immigration Info",
    link: "/services",
  },
  {
    title: "Study Abroad",
    link: "/destination",
  },
  // {
  //     title: 'Test Preparation',
  //     link: '/test-list'
  // },
  {
    title: "Contact",
    link: "/contact",
  },
];

const aboutUs = [
  {
    link: "/about",
    title: "Introduction",
  },
  {
    link: "/message-from-ceo",
    title: "Message From CEO",
  },
  {
    link: "/message-from-ceo",
    title: "Message From Managing Director",
  },
  {
    link: "/holiday-list",
    title: "Holiday List",
  },
  {
    link: "/our-team",
    title: "Our Team",
  },
  {
    link: "/our-certificates",
    title: "Our Certifications",
  },
  {
    link: "/services",
    title: "Services",
  },
];
const ourServices = [
  {
    link: "/test-list",
    title: "Test Preparation",
  },
  {
    link: "/events",
    title: "Events",
  },
  {
    link: "/consultation",
    title: "Consultation",
  },
  {
    link: "/scholarship-list",
    title: "Scholarship",
  },
  {
    link: "/career-counselling",
    title: "Career Counselling",
  },
  {
    link: "/visa-assistance",
    title: "Visa Assistance",
  },
];

export const MobileDropdownNav = ({
  title,
  items,
}: {
  title: string;
  items: {
    label: string;
    path: string;
    subMenu?: { label: string; path: string }[];
  }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between text-xl items-center w-full py-2"
      >
        {title}
        <ChevronDown
          size={18}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="pl-4 flex flex-col gap-2">
          {items.map((item, index) => (
            <div key={index}>
              <button
                onClick={() =>
                  setActiveSubMenu(
                    activeSubMenu === item.label ? null : item.label
                  )
                }
                className="w-full text-left py-1 text-black flex justify-between items-center"
              >
                <Link href={item.path} className="text-gray-600">
                  {item.label}
                </Link>
                {item.subMenu && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      activeSubMenu === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {item.subMenu && activeSubMenu === item.label && (
                <div className="pl-4 flex flex-col gap-1">
                  {item.subMenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.path}
                      className="text-gray-600 py-1"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const DropdownNav = ({
  href,
  children,
  menuItems,
}: {
  href: string;
  children: string;
  menuItems: {
    label: string;
    path: string;
    subMenu?: { label: string; path: string }[];
  }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setActiveSubMenu(null);
      }}
    >
      <button className="flex gap-1 items-center text-base font-medium text-black hover:text-[#ef001f]">
        {children} <ChevronDown size={18} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 bg-white p-2 rounded-sm shadow-lg w-56 z-[100]">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => item.subMenu && setActiveSubMenu(item.label)}
              onMouseLeave={() => item.subMenu && setActiveSubMenu(null)}
            >
              <Link href={item.path}>
                <div className="p-2 hover:bg-[#ef001f] hover:text-white rounded-sm text-base text-black font-normal flex justify-between items-center cursor-pointer">
                  {item.label}
                  {item.subMenu && <ChevronRight size={14} />}
                </div>
              </Link>

              {/* Submenu */}
              {item.subMenu && activeSubMenu === item.label && (
                <div className="absolute top-[-8px] left-full bg-white p-2 rounded-sm shadow-lg w-56 z-[100]">
                  {item.subMenu.map((subItem, subIndex) => (
                    <Link key={subIndex} href={subItem.path}>
                      <div className="p-2 hover:bg-[#ef001f] hover:text-white rounded-sm text-base text-black font-normal cursor-pointer">
                        {subItem.label}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full p-6 px-8 md:px-32 z-20 absolute top-0 bg-white/40">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black ml-auto"
        onClick={() => setIsMenuOpen(true)}
      >
        <Menu size={28} />
      </button>
      <div className="flex justify-between container mx-auto">
        {/* Left side navigation links (Hidden on small screens) */}
        <div className="hidden md:flex gap-6 text-black text-base">
          <Link href="/" className="font-medium hover:text-[#ef001f]">
            HOME
          </Link>
          <DropdownNav
            href="/about-us"
            menuItems={[
              {
                label: "Company",
                path: "/about",
              },
              // { label: "Who We Are", path: "/our-team" },
              { label: "Message from CEO", path: "/message-from-ceo" },
              // {
              //   label: "Message from Director",
              //   path: "/message-from-director",
              // },
              { label: "Craftsmanship", path: "/craftsmanship" },
              { label: "Customer Testimonials", path: "/testimonials" },
              // { label: "Our Showrooms", path: "/message-from-ceo" },
              { label: "FAQs", path: "/faqs" },
            ]}
          >
            ABOUT US
          </DropdownNav>

          <DropdownNav
            href="/categories"
            menuItems={[
              {
                label: "Necklaces",
                path: "/product",
                subMenu: [
                  { label: "Gold Necklace", path: "/product" },
                  { label: "Silver Necklace", path: "/product" },
                ],
              },
              {
                label: "Bracelets",
                path: "/product",
                subMenu: [
                  { label: "Gold", path: "/product" },
                  { label: "Silver", path: "/product" },
                  { label: "Diamond", path: "/product" },
                  { label: "Platinum", path: "/product" },
                  { label: "Gemstone", path: "/product" },
                ],
              },
              {
                label: "Rings",
                path: "/product",
                subMenu: [
                  { label: "Gold", path: "/product" },
                  { label: "Silver", path: "/product" },
                  { label: "Diamond", path: "/product" },
                  { label: "Platinum", path: "/product" },
                  { label: "Gemstone", path: "/product" },
                ],
              },
              {
                label: "Earrings",
                path: "/product",
                subMenu: [
                  { label: "Gold", path: "/product" },
                  { label: "Silver", path: "/product" },
                  { label: "Diamond", path: "/product" },
                  { label: "Platinum", path: "/product" },
                  { label: "Gemstone", path: "/product" },
                ],
              },
              { label: "Bangles", path: "/product" },
              { label: "Pendants", path: "/product" },
              { label: "Chains", path: "/product" },
              { label: "Anklets", path: "/product" },
              { label: "Nose Pins", path: "/product" },
              { label: "Cufflinks", path: "/product" },
              { label: "Jewelry Sets", path: "/product" },
              { label: "Gold Coin & Bullion", path: "/product" },
            ]}
          >
            CATEGORIES
          </DropdownNav>
          <Link
            href="/24-carat-gold"
            className="hover:text-[#ef001f] uppercase font-medium"
          >
            24 Carat Gold
          </Link>
        </div>

        {/* Center logo */}
        <div className="mt-0">
          <div className="absolute left-1/2 transform top-0 -translate-x-1/2 z-50">
            <div className="bg-white/40 px-2  md:pt-4 md:pb-3 py-2.5 rounded-b-full">
              <Link href="/">
                <img
                  src="/assets/star-laxmi-logo.png"
                  alt="Logo"
                  className="md:h-[150px] md:w-[150px] h-[70px] w-[70px]"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Right side navigation links (Hidden on small screens) */}
        <div className="hidden md:flex gap-6 text-black text-base">
          <DropdownNav
            href="/services"
            menuItems={[
              { label: "Custom Design", path: "/custom-design" },
              { label: "Jewelry Repair", path: "/jewellery-repair" },
              { label: "Engraving Services", path: "/engraving-services" },
              { label: "Appraisal Services", path: "/appraisal-services" },
            ]}
          >
            SERVICES
          </DropdownNav>
          <Link
            href="/investor-relations"
            className="hover:text-[#ef001f] font-medium"
          >
            INVESTOR RELATIONS
          </Link>
          <Link href="/blogs" className="hover:text-[#ef001f] font-medium">
            BLOG
          </Link>
          <Link href="/contact" className="hover:text-[#ef001f] font-medium">
            CONTACT US
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 z-50 transform transition-transform overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={28} />
        </button>
        <div className="flex flex-col gap-4 mt-10">
          <Link
            href="/"
            className="text-black text-lg font-medium hover:text-[#ef001f]"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>
          <MobileDropdownNav
            title="About Us"
            items={[
              {
                label: "Company",
                path: "/about",
              },
              // { label: "Who We Are", path: "/our-team" },
              { label: "Message from CEO", path: "/message-from-ceo" },
              // {
              //   label: "Message from Director",
              //   path: "/message-from-director",
              // },
              { label: "Craftsmanship", path: "/craftsmanship" },
              { label: "Customer Testimonials", path: "/testimonials" },
              // { label: "Our Showrooms", path: "/message-from-ceo" },
              { label: "FAQs", path: "/faqs" },
            ]}
          />

          <MobileDropdownNav
            title="Categories"
            items={[
              {
                label: "Necklaces",
                path: "/product",
                subMenu: [
                  { label: "Gold Necklace", path: "/product" },
                  { label: "Silver Necklace", path: "/product" },
                ],
              },
              {
                label: "Bracelets",
                path: "/product",
                subMenu: [
                  { label: "Gold", path: "/product" },
                  { label: "Silver", path: "/product" },
                  { label: "Diamond", path: "/product" },
                  { label: "Platinum", path: "/product" },
                  { label: "Gemstone", path: "/product" },
                ],
              },
              {
                label: "Rings",
                path: "/product",
                subMenu: [
                  { label: "Gold", path: "/product" },
                  { label: "Silver", path: "/product" },
                  { label: "Diamond", path: "/product" },
                  { label: "Platinum", path: "/product" },
                  { label: "Gemstone", path: "/product" },
                ],
              },
              {
                label: "Earrings",
                path: "/product",
                subMenu: [
                  { label: "Gold", path: "/product" },
                  { label: "Silver", path: "/product" },
                  { label: "Diamond", path: "/product" },
                  { label: "Platinum", path: "/product" },
                  { label: "Gemstone", path: "/product" },
                ],
              },
              { label: "Bangles", path: "/product" },
              { label: "Pendants", path: "/product" },
              { label: "Chains", path: "/product" },
              { label: "Anklets", path: "/product" },
              { label: "Nose Pins", path: "/product" },
              { label: "Cufflinks", path: "/product" },
              { label: "Jewelry Sets", path: "/product" },
              { label: "Gold Coin & Bullion", path: "/product" },
            ]}
          />
          <Link
            href="/24-carat-gold"
            className="text-black text-lg font-medium hover:text-[#ef001f]"
            onClick={() => setIsMenuOpen(false)}
          >
            24 CARAT GOLD
          </Link>

          <MobileDropdownNav
            title="Services"
            items={[
              { label: "Custom Design", path: "/custom-design" },
              { label: "Jewelry Repair", path: "/jewellery-repair" },
              { label: "Engraving Services", path: "/engraving-services" },
              { label: "Appraisal Services", path: "/appraisal-services" },
            ]}
          />
          <Link
            href="/investor-relations"
            className="text-black text-lg font-medium hover:text-[#ef001f]"
            onClick={() => setIsMenuOpen(false)}
          >
            INVESTOR RELATIONS
          </Link>
          <Link
            href="/blogs"
            className="text-black text-lg font-medium hover:text-[#ef001f]"
            onClick={() => setIsMenuOpen(false)}
          >
            BLOG
          </Link>
          <Link
            href="/contact"
            className="text-black text-lg font-medium hover:text-[#ef001f]"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
