"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

export const DropdownNav = ({
  href,
  children,
  menuItems,
}: {
  href: string;
  children: string;
  menuItems: { label: string; path: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || "";
  const path = pathname.split("/");
  const activepath = `/${path[1]}/${path[2]}`;
  const isActive = activepath === href;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex gap-1 items-center text-base font-medium text-gray-700 hover:text-[#ef001f]
          ${isActive ? "active text-[#ef001f]" : ""}`}
      >
        {children} <ChevronDown size={18} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 bg-white/80 p-2 rounded-sm shadow-lg w-56 z-50">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.path}>
              <div className="p-2 hover:bg-[#ef001f] hover:text-white rounded-sm text-base text-gray-600 font-normal cursor-pointer">
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center p-6 px-8 md:px-32 z-20 absolute top-0 bg-white/40">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsMenuOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* Left side navigation links (Hidden on small screens) */}
      <div className="hidden md:flex gap-6 text-gray-600 text-base">
        <Link href="/about-us" className="font-medium hover:text-[#ef001f]">
          HOME
        </Link>
        <DropdownNav
          href="/about-us"
          menuItems={[
            { label: "Our Stories", path: "/our-stories" },
            { label: "Our Values", path: "/our-values" },
            { label: "Sustainability", path: "/sustainability" },
          ]}
        >
          ABOUT US
        </DropdownNav>
        <DropdownNav
          href="/categories"
          menuItems={[
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
          ]}
        >
          CATEGORIES
        </DropdownNav>
      </div>

      {/* Center logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/40 px-2 pt-32 pb-3 rounded-b-full">
          <Image
            src="/assets/logo-final.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </div>
      </div>

      {/* Right side navigation links (Hidden on small screens) */}
      <div className="hidden md:flex gap-6 text-gray-700 text-base">
        <DropdownNav
          href="/services"
          menuItems={[
            { label: "Custom Design", path: "/custom-design" },
            { label: "Jewelry Repair", path: "/jewelry-repair" },
            { label: "Engraving Services", path: "/engraving-services" },
            { label: "Appraisal Services", path: "/appraisal-services" },
          ]}
        >
          SERVICES
        </DropdownNav>
        <Link href="/blog" className="hover:text-[#ef001f] font-medium">
          BLOG
        </Link>
        <Link href="/contact" className="hover:text-[#ef001f] font-medium">
          CONTACT US
        </Link>
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
        className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 z-50 transform transition-transform ${
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
            className="text-gray-700 text-lg font-medium hover:text-[#ef001f]"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>
          <DropdownNav
            href="/about-us"
            menuItems={[
              { label: "Our Stories", path: "/our-stories" },
              { label: "Our Values", path: "/our-values" },
              { label: "Sustainability", path: "/sustainability" },
            ]}
          >
            ABOUT US
          </DropdownNav>
          <DropdownNav
            href="/categories"
            menuItems={[
              { label: "Necklaces", path: "/necklace" },
              { label: "Bracelets", path: "/bracelet" },
              { label: "Rings", path: "/ring" },
            ]}
          >
            CATEGORIES
          </DropdownNav>
          <Link
            href="/blog"
            className="text-gray-700 text-lg font-medium hover:text-[#ef001f]"
            onClick={() => setIsMenuOpen(false)}
          >
            BLOG
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 text-lg font-medium hover:text-[#ef001f]"
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
