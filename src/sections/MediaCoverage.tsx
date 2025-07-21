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
  mediaName?: string;
  mediaLogo?: string;
};

const mediaNews: Record<MediaTab, NewsItem[]> = {
english: [
  {
id: 1,
title: "RG Creations Nepal leads in innovative hospitality design",
description:
"RG Creations Nepal is redefining architecture in Nepal's hospitality and nightlife sectors with over 30 landmark projects and 15 years of experience. Headquartered in Kathmandu with a sourcing hub in China, the firm blends global innovation with local insight.",
category: "ARCHITECTURE",
image: "/harsa-batika2.jpg",
date: "July 01, 2025",
path: "/blogs/media-coverage/top-rg-creations-nepal-redefining-architecture-in-nepal",
mediaName: "The Himalayan Times",
mediaLogo: "/medialogo/himalayan.jpg",
},
{
id: 8,
title: "RG Creations expands role in Nepal’s hospitality and architecture sectors",
description:
"RG Creations Nepal is expanding its influence in architecture and design, focusing on hospitality and nightlife infrastructure. With over 15 years of experience, the company has completed more than 30 projects across Nepal, including venues in Kathmandu, Pokhara, Dharan, and Itahari.",
category: "ARCHITECTURE",
image: "/Royal-Empire-Boutique.jpg",
date: "June 3, 2025",
path: "/blogs/media-coverage/top-rg-creations-expand-role-in-nepals-hospitality",
mediaName: "Online Khabar",
mediaLogo: "/medialogo/onlinekhabar.png",
},

{
id: 2,
title: "RG Creations Nepal emerges as pioneer in hospitality architecture",
description:
" RG Creations Nepal is establishing itself as a leader in architectural innovation, particularly in the hospitality and nightlife sectors. With over 15 years of industry experience and a portfolio of more than 30 notable projects, the Kathmandu-based firm is redefining venues.",
category: "ARCHITECTURE",
image: "/rambagh.jpg",
date: "May 23, 2025",
path: "/blogs/media-coverage/top-rg-creations-nepal-emerges-as-pioneer-in-hospitality-architecture",
mediaName: "Republica",
mediaLogo: "/medialogo/republica.svg",
},
{
id: 3,
title: "RG Creations Nepal Leads Architectural Innovation in Hospitality Design",
description:
" With 15 years of service in Nepal’s hospitality sector, RG Creations has established itself as a specialist in the design, construction, and operation of premium outlets. We offer exceptional design solutions tailored to investors’ budgets.",
category: "ARCHITECTURE",
image: "/media1.jpg",
date: "June 27, 2025",
path: "/blogs/media-coverage/top-rg-creations-nepal-leads-architectural-innovation-in-hospitality-design",
mediaName: "Deshsanchar",
mediaLogo: "/medialogo/deshsanchar.png",
},
{
id: 4,
title: "RG Creations Nepal Takes The Lead In Architectural Innovation And Hospitality Design",
description:
"RG Creations Nepal is rapidly emerging as a trailblazer in Nepal’s architecture and design scene, particularly within the hospitality and nightlife sectors. With over 15 years of hands-on industry experience and a portfolio of more than 30 recognized, standout projects",
category: "DESIGN",
image: "/media2.jpeg",
date: "June 27, 2025",
path: "/blogs/media-coverage/top-rg-creations-nepal-takes-the-lead-in-innovation",
mediaName: "EKagaj",
mediaLogo: "/medialogo/ekagaj.jpg",
},
{
id: 5,
title: "RG Creations Nepal driving innovation in hospitality and nightlife architecture",
description:
"With over 15 years of industry experience and a portfolio exceeding 30 projects, the company is redefining the design and functionality of nightclubs, pubs, lounges, boutique hotels, and event venues. The firm operates with a 360-degree project approach.",
category: "LIFESTYLE",
image: "/media3.webp",
date: "June 28, 2025",
path: "/blogs/media-coverage/top-rg-creations-nepal-driving-innovation",
mediaName: "Aarthiknews",
mediaLogo: "/medialogo/arthiknews.png",
},
],
nepali: [
  {
id: 7,
title: "‘प्रिमियम हस्पिटालिटी आउटलेट’मा ‘आरजी क्रिएसन्स’को विशिष्ट पहिचान",
description:
"आरजी क्रियसन्सले डिजाइन तथा निर्माण गरेका प्रोजेक्ट अन्यभन्दा भिन्न र विशिष्ट देखिन्छन् । ‘हामी सुन्दर डिजाइनमा त्यसको भव्यतालाई कसरी प्रस्तुत गर्न सकिन्छ भनेर गहन अनुसन्धान गर्छौं, कार्यकारी अध्यक्ष गिरी भन्छन्, ‘हामीले प्रयोग गर्ने सामग्री, कन्सेप्ट र डिजाइनअनुसार कस्टमाइज गरिने भएकाले हाम्रा प्रडक्टहरूमा भव्यता झल्किन्छ ।",
category: "ARCHITECTURE",
image: "/media3.webp",
date: "२असार ५, २०८२ ",
path: "/blogs/media-coverage/premium-hospitality-outlet-annapurna",
mediaName: "अन्नपूर्ण",
mediaLogo: "/medialogo/annapurna.png",
},
  {
id: 1,
title: "प्रिमियम हस्पिटालिटी आउटलेट’ निर्माणमा ‘आरजी क्रिएसन्स",
description:
"क्रिएसन्सले विगत १५ वर्षदेखि काठमाडौँ उपत्यका लगायत देशका विभिन्न सहर र विदेशमासमेत होटल, इभेन्ट भेन्यू, नाइट क्लब, डिस्को थेक, क्यासिनो, ब्याङ्क्वेट, लाउञ्ज, क्याफे, बार, पब लगायत हस्पिटालिटी क्षेत्रको कन्सेप्ट डिजाइन, कन्स्ट्रक्सन र सञ्चालन गरी आफ्नो छुट्टै मापदण्ड स्थापित गरिसकेको छ। ",
category: "ARCHITECTURE",
image: "/rambagh.jpg",
date: "७ असार २०८२",
path: "/blogs/media-coverage/premium-hospitality-outlet-rg-creations",
mediaName: "गोरखापत्र",
mediaLogo: "/medialogo/gorkhapatra.jpg",
},
{
id: 5,
title: "प्रिमियम हस्पिटालिटी आउट लेट’ आरजी क्रिएसन्सको फरक पहिचान",
description:
"विगत १५ वर्षदेखि काठमाडौं उपत्यका लगायत देशका प्रमुख सहरहरू तथा विदेशसम्म फैलँदै होटेल, इभेन्ट भेन्यु, नाइट क्लब, डिस्को, क्यासिनो, ब्यांक्वेट, लाउञ्ज, क्याफे, बार, पब सम्बन्धी प्रोजेक्टहरूको अवधारणा, निर्माण र सञ्चालन गर्दै आएको छ। यस क्रममा कम्पनीले लगानीकर्ताको सोच र बजेट अनुसार न्यूनतम लागतमा उच्चस्तरीय डिजाइन कायम गरेको छ।",
category: "ARCHITECTURE",
image: "/ImageVideo/4(5).jpg",
date: "२३ जेष्ठ २०८२",
path: "/blogs/media-coverage/premium-hospitality-outlet-nagarik",
mediaName: "नागरिक",
mediaLogo: "/medialogo/republica.svg",
},
{
id: 6,
title: "प्रिमियम हस्पिटालिटी आउटलेट’ निर्माणमा जोड दिँदै ‘आरजी क्रिएसन्स",
description:
"आरजी क्रिएसन्सले विगत १५ वर्षदेखि काठमाडौं उपत्यकालगायत देशका विभिन्न सहर र विदेशमा समेत होटेल, इभेन्ट भेन्यू, नाइट क्लब, डिस्को थेक, क्यासिनो, ब्यांक्वेट, लाउन्ज, क्याफे, बार, पबलगायत हस्पिटालिटी क्षेत्रसँग सम्बन्धित प्रडक्टको कन्सेप्ट डिजाइन, कन्स्ट्रक्सन र सञ्चालन गरी आफ्नो छुट्टै मापदण्ड स्थापित गरिसकेको छ।",
category: "ARCHITECTURE",
image: "/harshah-b.jpeg",
date: "२o८२ जेठ १४ ",
path: "/blogs/media-coverage/premium-hospitality-outlet-nayapatrika",
mediaName: "नयाँ पत्रिका",
mediaLogo: "/medialogo/nayapatrika.jpg",
},
{
id: 2,
title: "प्रिमियम हस्पिटालिटी आउटलेट’ निर्माणमा विशिष्ट पहिचान बनाउँदै ‘आरजी क्रिएसन्स",
description:
"आरजी क्रियसन्सले लगानीकर्ताको बजेट र सोचअनुसार कमभन्दा कम लागतमा उत्कृष्ट प्रोडक्ट डिजाइन एवं निर्माण गर्दै आइरहेको छ । ‘हामी नाइट क्लब तथा इभेन्ट भेन्यु निर्माण गर्दा त्यसको लागत कम गर्न, त्यसलाई सुरक्षित बनाउन र कसरी भव्य एवं आकर्षक देखाउने भनेर विशेष ध्यान दिन्छौँ, कम्पनीका कार्यकारी अध्यक्ष राम गिरी भन्छन्।",
category: "ARCHITECTURE",
image: "/media1.jpg",
date: "असार ३०, २०८२",
path: "/blogs/media-coverage/premium-hospitality-outlet",
mediaName: "आर्थिक दैनिक",
mediaLogo: "/medialogo/arthikdainik.png",
},
{
id: 9,
title: "प्रिमियम हस्पिटालिटी आउटलेट निर्माणमा विशिष्ट पहिचान बनाउँदै आरजी क्रियसन्स",
description:
"आरजी क्रिएसन्सले १५ वर्षदेखि काठमाडौं उपत्यकालगायत देशका विभिन्न सहर र विदेशमा समेत होटल, इभेन्ट भेन्यू, नाइट क्लब, डिस्को थेक, क्यासिनो, बैंक्वेट, लाउन्ज, क्याफे, बार, पब लगायत हस्पिटालिटी क्षेत्रसँग सम्बन्धित प्रडक्टको कन्सेप्ट डिजाइन, कन्स्ट्रक्सन र सञ्चालन गरी आफ्नो छुट्टै मापदण्ड स्थापित गरिसकेको छ। ",
category: "ARCHITECTURE",
image: "/ImageVideo/4(4).jpg",
date: "असार २५, २०८२",
path: "/blogs/media-coverage/premium-hospitality-outlet",
mediaName: "क्यापिटल नेपाल",
mediaLogo: "/medialogo/capitalnepal.png",
},
{
id: 10,
title: "प्रिमियम हस्पिटालिटी आउटलेट’ मा फरक पहिचान बनाउँदै आरजी क्रिएसन्स",
description:
"नेपालको हस्पिटालिटी तथा नाइट क्लब क्षेत्रको एक चिरपरिचित नाम आरजी क्रिएसन्सले ‘प्रिमियम हस्पिटालिटी आउटलेट’ निर्माणमा फरक पहिचान बनाउँदै आएको छ । कम्पनीको मुख्य कार्यालय काठमाडौंको बालुवाटारमा रहेको छ भने चीनको ग्वाङ्दोङ प्रान्तको सेन्जेन सहरमा ‘लिंक वर्ल्ड टेक’ नामक साझेदार कम्पनी पनि सञ्चालनमा छ ।",
category: "ARCHITECTURE",
image: "/rg-creation.jpg",
date: "२०८२, जेठ ९",
path: "/blogs/media-coverage/premium-hospitality-outlet",
mediaName: "नेपाल प्रेस",
mediaLogo: "/medialogo/nepalpress.png",
},
{
id: 11,
title: "प्रिमियम हस्पिटालिटी आउटलेट’ निर्माणमा अघि बढ्दै ‘आरजी",
description:
"कम्पनीले विदेशमा समेत होटल, इभेन्ट भेन्यू, नाइट क्लब, डिस्को थेक, क्यासिनो, ब्यांक्वेट, लाउञ्ज, क्याफे, बार, पब लगायत हस्पिटालिटी क्षेत्रसँग सम्बन्धित प्रडक्टको कन्सेप्ट डिजाइन, कन्स्ट्रक्सन र सञ्चालन गरेको छ । कम्पनीका कार्यकारी अध्यक्ष राम गिरीले लगानीकर्ताको बजेट र सोच अनुसार कमभन्दा कम लागतमा उत्कृष्ट प्रडक्ट डिजाइन एवं निर्माण गर्दै आइरहेको बताए । ",
category: "ARCHITECTURE",
image: "/ImageVideo/2(4).jpg",
date: "२०८२, जेठ ९",
path: "/blogs/media-coverage/premium-hospitality-outlet",
mediaName: "अभियान ",
mediaLogo: "/medialogo/abhiyan.png",
},
{
id: 12,
title: "प्रिमियम हस्पिटालिटी आउटलेट’ निर्माणमा विशिष्ट पहिचान बनाउँदै ‘आरजी क्रिएसन्स’",
description:
"कम्पनीले विदेशमा समेत होटल, इभेन्ट भेन्यू, नाइट क्लब, डिस्को थेक, क्यासिनो, ब्यांक्वेट, लाउञ्ज, क्याफे, बार, पब लगायत हस्पिटालिटी क्षेत्रसँग सम्बन्धित प्रडक्टको कन्सेप्ट डिजाइन, कन्स्ट्रक्सन र सञ्चालन गरेको छ । कम्पनीका कार्यकारी अध्यक्ष राम गिरीले लगानीकर्ताको बजेट र सोच अनुसार कमभन्दा कम लागतमा उत्कृष्ट प्रडक्ट डिजाइन एवं निर्माण गर्दै आइरहेको बताए । ",
category: "ARCHITECTURE",
image: "/taajPalace.jpg",
date: "असार १४, २०८२",
path: "/blogs/media-coverage/premium-hospitality-outlet",
mediaName: "इकागज",
mediaLogo: "/medialogo/ekagaj.jpg",
},

{
id: 3,
title: "प्रिमियम हस्पिटालिटी आउटलेट’ निर्माणमा विशिष्ट पहिचान बनाउँदै ‘आरजी क्रिएसन्स",
description:
"आरजी क्रियसन्सले डिजाइन तथा निर्माण गरेका प्रोजेक्ट अन्य भन्दा भिन्न र विशिष्ट देखिन्छन् । ‘हामी सुन्दर डिजाइनमा त्यसको भव्यतालाई कसरी प्रस्तुत गर्न सकिन्छ भनेर गहन अनुसन्धान गर्छौँ’, कार्यकारी अध्यक्ष गिरी भन्छन्, ‘हामीले प्रयोग गर्ने सामग्री, कन्सेप्ट र डिजाइन अनुसार कस्टमाइज गरिने भएकाले हाम्रा प्रडक्टहरूमा भव्यता झल्किन्छ ।",
category: "DESIGN",
image: "/rambagh.jpg",
date: "२४ असार, २०८२",
path: "/blogs/media-coverage/premium-hospitality-sunaulo-nepal",
mediaName: "सुनौलो नेपाल",
mediaLogo: "/medialogo/sunaulo.png",
},
{
id: 7,
title: "प्रिमियम हस्पिटालिटी आउटलेट निर्माणमा अग्रणी आरजी क्रिएसन्स",
description:
"हाल कम्पनीले लाजिम्पाटमा अन्तर्राष्ट्रिय स्तरको ‘लिजेण्ड नेपाल’ नाइट क्लब निर्माण गरिरहेको छ, जसमा ३०० भन्दा बढी अत्याधुनिक सामग्री प्रयोग हुनेछ। यसअघि रामबाग महल, म्याजेस्टिक ग्रान्ड, डेजाभु डिस्को थेक जस्ता प्रख्यात आउटलेटहरू निर्माण गरिसकेको छ।",
category: "ARCHITECTURE",
image: "/harshah-b.jpeg",
date: "असार १३, २०८२",
path: "/blogs/media-coverage/premium-hospitality-outlet-nagarik",
mediaName: "देश सञ्चार",
mediaLogo: "/medialogo/deshsanchar.png",
},
{
id: 4,
title: "प्रिमियम हस्पिटालिटी आउटलेट’ निर्माणमा विशिष्ट पहिचान बनाउँदै ‘आरजी क्रिएसन्स",
description:
"आरजी क्रियसन्सले लगानीकर्ताको बजेट र सोच अनुसार कमभन्दा कम लागतमा उत्कृष्ट प्रडक्ट डिजाइन एवं निर्माण गर्दै आइरहेको छ । ‘हामी नाइट क्लब तथा इभेन्ट भेन्यू निर्माण गर्दा त्यसको लागत कम गर्न, त्यसलाई सुरक्षित बनाउन र कसरी भव्य एवं आकर्षक देखाउने भनेर विशेष ध्यान दिन्छौँ, कम्पनीका कार्यकारी अध्यक्ष राम गिरी भन्छन् ।",
category: "LIFESTYLE",
image: "/media3.webp",
date: "२४ असार २०८२",
path: "/blogs/media-coverage/premium-hospitality-newspolar",
mediaName: "News Polar",
mediaLogo: "/medialogo/newspolar.png",
},
],
paper: [
   { id: 11, image: "/newsAnnapurna.jpg" ,
  mediaName: "Annapurna Post",
mediaLogo: "/medialogo/annapurna.png",
date: "June 19, 2025"
},
  { id: 10, image: "/new1st.jpg" ,
  mediaName: "The Himalayan Times",
mediaLogo: "/medialogo/himalayan.jpg",
date: "July 1, 2025"
},
{ id: 1, image: "/news1.jpg" ,
  mediaName: "Aarthiknews",
mediaLogo: "/medialogo/arthiknews.png",
date: "June 28, 2025"
},
{ id: 2, image: "/newsNagrik.jpg",
    mediaName: "Nagrik Daily",
mediaLogo: "/medialogo/republica.svg",
 date: "June 4, 2025"
 },
{ id: 4, image: "/newsKarobar.jpg",
    mediaName: "Karobar Daily",
mediaLogo: "/medialogo/karobar.jpg",
 date: "June 6, 2025"
 },

{ id: 6, image: "/news66.jpg" ,
    mediaName: "The Rising Nepal",
mediaLogo: "/medialogo/risingnepal.jpg",
date: "May 21, 2025"
},
{ id: 7, image: "/newsAbhiyanDaily.jpg" ,
    mediaName: "Abhiyan",
mediaLogo: "/medialogo/abhiyan.png",
date: "May 23, 2025"
},
{ id: 8, image: "/news88.jpg",
    mediaName: "Karobar Daily",
mediaLogo: "/medialogo/karobar.jpg",
date: "June 28, 2025"
 },

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
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333d49] mb-2">
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
{/* <p className="flex items-center gap-1">
Sort by:
<span className="text-[#002C6D] flex items-center gap-1">
Most Recent <FiChevronDown />
</span>
</p> */}
</div>

{/* Content */}
{activeTab === "paper" ? (
<>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 lg:px-12">
  {blogs.map((blog) => (
    <div key={blog.id} className='shadow-lg pb-2 rounded-sm'>
      {/* Image */}
      <img
        src={blog.image}
        alt={blog.mediaName}
        onClick={() => openModal(blog.image)}
        className="w-full h-[400px] object-cover rounded-sm shadow cursor-pointer hover:shadow-lg transition-transform duration-300"
      />

      {/* Media Info */}
      <div className="flex items-center gap-3 mt-4 px-1">
        {/* Media Logo */}
        <img
          src={blog.mediaLogo } // fallback dummy logo
          alt={blog.mediaName}
          className="w-10 h-10 object-contain rounded-full"
        />

        {/* Media Name + Date */}
        <div className="flex flex-col">
          <p className="text-gray-900 font-semibold text-lg">
            {blog.mediaName }
          </p>
          <p className="text-sm text-gray-500">{blog.date}</p>
        </div>
      </div>
    </div>
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
        <article className="group cursor-pointer h-full shadow-lg">
          {/* Image container with overflow hidden */}
          <div className="relative rounded-sm h-[480px] overflow-hidden">
            {/* Actual image */}
            <img
              src={blog.image}
              alt={blog.title || ""}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 z-10 rounded-sm" />

            {/* Content inside overlay */}
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
                <button className="text-xs font-medium mt-4 tracking-widest hover:underline">
                  READ MORE
                </button>
              </div>
            </div>
          </div>

          {/* Media logo and name (outside image) */}
          <div className="flex items-center gap-3 mt-4 px-1 pb-2">
            {/* Dummy media logo */}
            <img
              src={blog.mediaLogo} // Replace with actual logo path
              alt={blog.mediaName}
              className="w-10 h-10 object-contain"
            />
            {/* Dummy name */}
            <div className='flex flex-col'>
              <p className=" text-gray-900 font-semibold text-lg">{blog.mediaName}</p>
             <p className="text-sm text-gray-500">{blog.date}</p>
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