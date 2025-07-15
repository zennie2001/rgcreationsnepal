"use client";

import Link from 'next/link';
import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";

type MediaTab = "english" | "nepali" | "paper";

type NewsItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  path: string;
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
      title: "आरजी क्रिएशन्स नेपालको आर्किटेक्चर क्षेत्रमा अग्रणी भूमिका",
      description:
        "आरजी क्रिएशन्स नेपालले आर्किटेक्चर र निर्माण क्षेत्रमा महत्वपूर्ण उपलव्धि हासिल गरेको छ।",
      category: "ARCHITECTURE",
      image: "/nepali1.jpg",
      date: "05 JUL 2025",
      path: "/blogs/nepali/details"
    },
    {
      id: 2,
      title: "नेपालमा नाइटलाइफ डिजाईनमा नयाँ आयाम",
      description:
        "डेजाभु क्लबको डिजाईनले नेपालको नाइटलाइफ क्षेत्रमा नयाँ युगको सुरुवात गरेको छ।",
      category: "DESIGN",
      image: "/nepali2.jpg",
      date: "06 JUL 2025",
      path: "/blogs/nepali/details"
    },
    {
      id: 3,
      title: "निर्माण क्षेत्रमा प्रिमियम सेवाको नयाँ उचाइ",
      description:
        "आरजी क्रिएशन्स नेपालले प्रिमियम निर्माण क्षेत्रमा उच्च स्तरको सेवा उपलब्ध गराउँदै आएको छ।",
      category: "LIFESTYLE",
      image: "/nepali3.jpg",
      date: "08 JUL 2025",
      path: "/blogs/nepali/details"
    },
  ],
  paper: [
    {
      id: 1,
      title: "Paper News: RG Creations Receives National Award for Design Excellence",
      description:
        "Featured in national papers, RG Creations has been honored for architectural innovation and sustainable design.",
      category: "NEWS",
      image: "/paper1.jpg",
      date: "01 JUN 2025",
      path: "/blogs/paper/details"
    },
    {
      id: 2,
      title: "Construction Milestones Covered in Leading Newspapers",
      description:
        "Major newspapers highlight RG Creations' significant contributions to Nepal’s construction landscape.",
      category: "NEWS",
      image: "/paper2.jpg",
      date: "03 JUN 2025",
      path: "/blogs/paper/details"
    },
    {
      id: 3,
      title: "Innovative Hospitality Designs Capture Paper Headlines",
      description:
        "Newspaper articles feature RG Creations’ creative designs in hospitality and entertainment venues.",
      category: "NEWS",
      image: "/paper3.jpg",
      date: "05 JUN 2025",
      path: "/blogs/paper/details"
    },
  ]
};

const tabs: MediaTab[] = ["english", "nepali", "paper"];

const MediaCoverage = () => {
  const [activeTab, setActiveTab] = useState<MediaTab>("english");

  const blogs = mediaNews[activeTab];

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

      {/* Blog Cards */}
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
                  alt={blog.title}
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
    </div>
  );
};

export default MediaCoverage;
