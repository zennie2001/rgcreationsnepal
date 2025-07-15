"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineClose, AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";

type MediaTab = "english" | "nepali" | "paper";

type NewsItem = {
  id: number;
  title?: string;
  description?: string;
  category?: string;
  image: string;
  date?: string;
  path?: string;
};

const mediaNews: Record<MediaTab, NewsItem[]> = {
english: [
{
id: 1,
title: "RG Creations Nepal Leads Architectural Innovation in Hospitality Design",
description:
" With 15 years of service in Nepal’s hospitality sector, RG Creations has established itself as a specialist in the design, construction, and operation of premium outlets. We offer exceptional design solutions tailored to investors’ budgets.",
category: "ARCHITECTURE",
image: "/media1.jpg",
date: "June 27, 2025",
path: "/blogs/media-coverage/top-rg-creations-nepal-leads-architectural-innovation-in-hospitality-design"
},
{
id: 2,
title: "RG Creations Nepal Takes The Lead In Architectural Innovation And Hospitality Design",
description:
"RG Creations Nepal is rapidly emerging as a trailblazer in Nepal’s architecture and design scene, particularly within the hospitality and nightlife sectors. With over 15 years of hands-on industry experience and a portfolio of more than 30 recognized, standout projects",
category: "DESIGN",
image: "/media2.jpeg",
date: "June 27, 2025",
path: "/blogs/media-coverage/top-rg-creations-nepal-takes-the-lead-in-innovation"
},
{
id: 3,
title: "RG Creations Nepal driving innovation in hospitality and nightlife architecture",
description:
"With over 15 years of industry experience and a portfolio exceeding 30 projects, the company is redefining the design and functionality of nightclubs, pubs, lounges, boutique hotels, and event venues. The firm operates with a 360-degree project approach.",
category: "LIFESTYLE",
image: "/media3.webp",
date: "June 28, 2025",
path: "/blogs/media-coverage/top-rg-creations-nepal-driving-innovation"
},
],
nepali: [
{
id: 1,
title: "प्रिमियम हस्पिटालिटी आउटलेट’ निर्माणमा विशिष्ट पहिचान बनाउँदै ‘आरजी क्रिएसन्स",
description:
"आरजी क्रियसन्सले लगानीकर्ताको बजेट र सोचअनुसार कमभन्दा कम लागतमा उत्कृष्ट प्रोडक्ट डिजाइन एवं निर्माण गर्दै आइरहेको छ । ‘हामी नाइट क्लब तथा इभेन्ट भेन्यु निर्माण गर्दा त्यसको लागत कम गर्न, त्यसलाई सुरक्षित बनाउन र कसरी भव्य एवं आकर्षक देखाउने भनेर विशेष ध्यान दिन्छौँ, कम्पनीका कार्यकारी अध्यक्ष राम गिरी भन्छन्।",
category: "ARCHITECTURE",
image: "/media1.jpg",
date: "असार ३०, २०८२",
// path: "/blogs/media-coverage/premium-hospitality-outlet"
},
{
id: 2,
title: "प्रिमियम हस्पिटालिटी आउटलेट’ निर्माणमा विशिष्ट पहिचान बनाउँदै ‘आरजी क्रिएसन्स",
description:
"आरजी क्रियसन्सले डिजाइन तथा निर्माण गरेका प्रोजेक्ट अन्य भन्दा भिन्न र विशिष्ट देखिन्छन् । ‘हामी सुन्दर डिजाइनमा त्यसको भव्यतालाई कसरी प्रस्तुत गर्न सकिन्छ भनेर गहन अनुसन्धान गर्छौँ’, कार्यकारी अध्यक्ष गिरी भन्छन्, ‘हामीले प्रयोग गर्ने सामग्री, कन्सेप्ट र डिजाइन अनुसार कस्टमाइज गरिने भएकाले हाम्रा प्रडक्टहरूमा भव्यता झल्किन्छ ।",
category: "DESIGN",
image: "/rambagh.jpg",
date: "२४ असार, २०८२",
//path: "/blogs/media-coverage/premium-hospitality-sunaulo-nepal"
},
{
id: 3,
title: "प्रिमियम हस्पिटालिटी आउटलेट’ निर्माणमा विशिष्ट पहिचान बनाउँदै ‘आरजी क्रिएसन्स",
description:
"आरजी क्रियसन्सले लगानीकर्ताको बजेट र सोच अनुसार कमभन्दा कम लागतमा उत्कृष्ट प्रडक्ट डिजाइन एवं निर्माण गर्दै आइरहेको छ । ‘हामी नाइट क्लब तथा इभेन्ट भेन्यू निर्माण गर्दा त्यसको लागत कम गर्न, त्यसलाई सुरक्षित बनाउन र कसरी भव्य एवं आकर्षक देखाउने भनेर विशेष ध्यान दिन्छौँ, कम्पनीका कार्यकारी अध्यक्ष राम गिरी भन्छन् ।",
category: "LIFESTYLE",
image: "/media3.webp",
date: "२४ असार २०८२",
//path: "/blogs/media-coverage/premium-hospitality-newspolar"
},
],
  paper: [
    { id: 1, image: "/news1.jpg" },
    { id: 2, image: "/news22.jpg" },
    // { id: 3, image: "/news33.jpg" },
    { id: 4, image: "/news44.jpg" },
    // { id: 5, image: "/news55.jpg" },
    { id: 6, image: "/news66.jpg" },
    { id: 7, image: "/news77.jpg" },
    { id: 8, image: "/news88.jpg" },
    { id: 9, image: "/news99.jpg" },
  ]
};

const tabs: MediaTab[] = ["english", "nepali", "paper"];

const MediaCoverage = () => {
  const [activeTab, setActiveTab] = useState<MediaTab>("english");
  const blogs = mediaNews[activeTab];

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const openModal = (image: string) => {
    setModalImage(image);
    setZoom(1);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  const handleZoomIn = () => {
    setZoom((z) => Math.min(z + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((z) => Math.max(z - 0.25, 0.5));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-12 px-10 pt-16 mb-12">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            MEDIA COVERAGE
          </h2>
          <div className="w-16 h-1 bg-[#133950]"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full border text-sm font-medium 
                ${activeTab === tab ? "bg-[#133950] text-white" : "text-gray-600 border-gray-300 hover:bg-gray-100"}`}
            >
              {tab === "english" && "English News"}
              {tab === "nepali" && "Nepali News"}
              {tab === "paper" && "Paper News"}
            </button>
          ))}
        </div>
      </div>

      {/* Subheader */}
      <div className="flex justify-between items-center lg:px-12 px-10 mb-8">
        <span className="text-sm text-gray-400">
          Showing 1-{blogs.length} News
        </span>
        <p className="flex items-center gap-1">
          Sort by:
          <span className="text-[#002C6D] flex items-center gap-1">
            Most Recent <FiChevronDown />
          </span>
        </p>
      </div>

      {/* Content */}
      {activeTab === "paper" ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 lg:px-12">
            {blogs.map((blog) => (
              <img
                key={blog.id}
                src={blog.image}
                alt=""
                onClick={() => openModal(blog.image)}
                className="w-full h-[400px] object-cover rounded-sm shadow cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>

          {/* Modal */}
          {modalOpen && (
  <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
    {/* Close button */}
    <button
      onClick={closeModal}
      className="absolute top-6 right-6 text-white hover:text-gray-300 z-50"
    >
      <AiOutlineClose size={40} />
    </button>

    <div className="relative w-[90vw] h-[80vh] bg-black flex flex-col items-center justify-center">
      {/* Scrollable container */}
      <div className="overflow-auto w-full h-full">
        <img
          src={modalImage!}
          alt=""
          style={{
            width: `${zoom * 100}%`,
            height: "auto",
          }}
          className="object-contain mx-auto transition-all duration-300"
        />
      </div>

      {/* Zoom controls */}
      <div className="absolute bottom-6 flex gap-4 justify-center">
        <button
          onClick={handleZoomOut}
          className="p-3 bg-white rounded-full hover:bg-gray-200"
        >
          <AiOutlineZoomOut size={24} className="text-gray-800" />
        </button>
        <button
          onClick={handleZoomIn}
          className="p-3 bg-white rounded-full hover:bg-gray-200"
        >
          <AiOutlineZoomIn size={24} className="text-gray-800" />
        </button>
      </div>
    </div>
  </div>
)}

        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 lg:px-12">
          {blogs.map((blog) => (
            <Link href={blog.path || "#"} key={blog.id}>
              <article className="group cursor-pointer h-full">
                <div className="relative rounded-sm h-full">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>

                  {/* Image */}
                  <img
                    src={blog.image}
                    alt={blog.title || ""}
                    className="
                      w-full h-[480px]
                      object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                    "
                  />

                  {/* Overlay Content */}
                  <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white rounded-sm max-w-md z-20">
                    <div className="lg:border-[16px] lg:border-[#133950] py-6 lg:px-6 pr-1">
                      <h3 className="text-2xl font-bold leading-tight mb-4">
                        {blog.title}
                      </h3>
                      <p className="text-sm opacity-90 leading-relaxed mb-4 text-end">
                        {blog.date}
                      </p>
                      <p className="text-sm opacity-90 leading-relaxed mb-4">
                        {blog.description}
                      </p>
                      <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaCoverage;