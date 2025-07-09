"use client";

import { Menu as HeadlessMenu } from "@headlessui/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/" ;

  const aboutUsItems = [
    { title: "About Us", href: "/about/about-us" },
    { title: "Our Values", href: "/about/values" },
    { title: "What Sets Us Apart", href: "/about/sets-apart" },
    { title: "How We Help Our Clients", href: "/about/help-clients" },
    { title: "Health and Safety", href: "/about/health-safety" },
    { title: "Organizational Chart", href: "https://drive.google.com/file/d/1x4dbiNt6LJQjVSZjd0dCGqEvX6BEmkvC/view" },
    { title: "Message from Chairman", href: "/about/message-from-chairman" },
  ];
  const servicesItems = [
    { title: "Premium Nightclub Construction", href: "/services/premium-nightclub-construction" },
    { title: "Luxurious Residential Developments", href: "/services/luxurious-residentials-developments" },
    { title: "Commercial Construction", href: "/services/commercial-construction" },
    { title: " Architectural & Interior Design", href: "/services/interior-design" },
    { title: "Premium Furniture Supply", href: "/services/furniture-supply" },
    { title: "Nightclub Equipment Supply", href: "/services/nightclub-equipment-supply" },
    { title: "Project Management & Turnkey Solutions", href: "/services/project-management" },
  ]
  const projectItems = [
    { title: "On Going Projects", href: "/projectss/on-going" },
    { title: "Completed Projects", href: "/projectss/completed" },
    
  ];
  const newsItems = [
    { title: "Media Coverage", href: "/blogs/media-coverage" },
    { title: "Blogs", href: "/blogs" },
    { title: "Events", href: "/blogs/events" },
    
  ];
   const galleryItems = [
    { title: "Photo Gallery", href: "/gallery/photo" },
    { title: "Video Gallery", href: "/gallery/video" },
    { title: "3D Gallery", href: "/gallery/3d" },
    
  ];

  return (
    <header
      className={`w-full z-50 ${
        isHome
          ? "bg-white relative shadow-md "
          : "absolute top-0 left-0 backdrop-blur-sm bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto  py-0 flex justify-between items-center ">
        {/* Logo */}
        <a href="/" className="font-bold text-xl">
          <img src="/Rg Logo .svg" alt="RG Creation Nepal" className="lg:h-28 lg:w-28 h-20 w-auto" />
        </a>

        {/* Desktop Menu */}
        <nav
          className={`hidden lg:flex space-x-8 items-center ${
            isHome ? "text-gray-800" : "text-white"
          }`}
        >
          <a href="/" className="hover:text-green-500 font-medium">
            HOME
          </a>

          {/* About Us Dropdown */}
          <div className="relative group">
            <HeadlessMenu>
              <HeadlessMenu.Button className="flex items-center gap-1 hover:text-green-500 font-medium">
                ABOUT US
                <ChevronDown size={16} />
              </HeadlessMenu.Button>
              <div className="absolute hidden group-hover:block  bg-white text-gray-800 shadow-lg rounded-md py-2 w-64 z-50">
                {aboutUsItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-base hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </HeadlessMenu>
          </div>

          
            {/* About Us Dropdown */}
          <nav className="relative z-[9999]">
          <div className="relative group">
            <HeadlessMenu>
              <HeadlessMenu.Button className="flex items-center gap-1 hover:text-green-500 font-medium">
                SERVICES
                <ChevronDown size={16} />
              </HeadlessMenu.Button>
              <div className="fixed hidden group-hover:block  bg-white text-gray-800 shadow-lg rounded-md py-2 w-64 z-[9999]">
                {servicesItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-base hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </HeadlessMenu>
          </div>
          </nav>


           <nav className="relative z-[9999]">
          <div className="relative group">
            <HeadlessMenu>
              <HeadlessMenu.Button className="flex items-center gap-1 hover:text-green-500 font-medium ">
                PROJECTS
                <ChevronDown size={16} />
              </HeadlessMenu.Button>
              <div className="absolute hidden group-hover:block  bg-white text-gray-800 shadow-lg rounded-md py-2 w-64 z-[9999] ">
                {projectItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-base hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </HeadlessMenu>
          </div>
          </nav>
         
        
         

          {/* <a href="/work-process" className="hover:text-green-500 font-medium">
            WORK PROCESS
          </a> */}


          <div className="relative group">
            <HeadlessMenu>
              <HeadlessMenu.Button className="flex items-center gap-1 hover:text-green-500 font-medium">
                NEWS & UPDATES
                <ChevronDown size={16} />
              </HeadlessMenu.Button>
              <div className="absolute hidden group-hover:block  bg-white text-gray-800 shadow-lg rounded-md py-2 w-64 z-50">
                {newsItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-base hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </HeadlessMenu>
          </div>



          {/* Gallery Dropdown */}
          <div className="relative group">
          <HeadlessMenu>
              <HeadlessMenu.Button className="flex items-center gap-1 hover:text-green-500 font-medium">
                GALLERY
                <ChevronDown size={16} />
              </HeadlessMenu.Button>
              <div className="absolute hidden group-hover:block  bg-white text-gray-800 shadow-lg rounded-md py-2 w-64 z-50">
                {galleryItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-base hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </HeadlessMenu>
            </div>

            




          <a href="/contact" className="hover:text-green-500 font-medium">
            CONTACT 
          </a>



          
          <a href="/book-appointment" className="hover:bg-[#333d49] text-white bg-[#133950] p-2  font-medium">
            BOOK A CONSULTATION
          </a>

          
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-4 bg-white shadow-md text-gray-800">
          <a href="/" className="block hover:text-green-500">
            Home
          </a>
          <div>
            <p className="font-medium">About Us</p>
            <div className="ml-4 space-y-1">
              {aboutUsItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-sm hover:text-green-500"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* service */}
         <div>
            <p className="font-medium">Services</p>
            <div className="ml-4 space-y-1">
              {servicesItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-sm hover:text-green-500"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>



          <div>
            <p className="font-medium">Gallery</p>
            <div className="ml-4 space-y-1">
              {galleryItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-sm hover:text-green-500"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-medium">Projects</p>
            <div className="ml-4 space-y-1">
              {projectItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-sm hover:text-green-500"
                >
                  {item.title}
                </a>
              ))}
            </div>

            <div>
            <p className="font-medium mt-1">News & Updates</p>
            <div className="ml-4 space-y-1">
              {newsItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-sm hover:text-green-500"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          </div>
          <a href="/contact" className="block hover:text-green-500">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
