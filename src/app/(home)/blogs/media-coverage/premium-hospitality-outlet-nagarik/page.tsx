import React from 'react'
import Image from 'next/image';
import { FaWhatsapp, FaFacebook , FaTwitter } from "react-icons/fa";

export const metadata = {
  title: "RG Creations Carves a Distinct Identity in Premium Hospitality",
  description: "RG Creations leads Nepal’s hospitality sector by delivering innovative, cost-effective, and internationally benchmarked nightlife and event venues, setting new standards across the region.",
};



const page = () => {
   
  return (
     <div className="min-h-screen  overflow-hidden">
          
          <div className='bg-[#133950] h-28 w-full'></div>
          
          <div className="container mx-auto px-4 py-8 ">

            <div className="grid grid-cols-1 lg:grid-cols-6">

              {/* Main Content */}
              <div className="lg:col-span-4">
                <article className="bg-white rounded-lg shadow-sm p-8">
                  {/* <p className="text-3xl font-bold text-darkGreen mb-6">
                    10 Best Rescue Knives You Can Buy in 2024
                  </p> */}
    
                  {/* Featured Image */}
                  {/* <div className="mb-8">
                    <img
                      src={blacksmith.src}
                      alt="Hands using a rescue knife on wood"
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </div> */}
    
                  {/* Article Content */}


                  <div className="prose prose-lg max-w-none">
                    
                    <div>
                        <h1 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                      
                        प्रिमियम हस्पिटालिटी आउट लेट’ आरजी क्रिएसन्सको फरक पहिचान
                        </h1>
                        <div className='flex justify-between pb-10'>
                            <div>
                                <p className='text-lg font-semibold'> नागरिक</p>
                                <p>२३ जेष्ठ २०८२</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full h-64 lg:h-[500px] lg:w-full relative mb-12">
                    <Image
                        src="/ImageVideo/4(5).jpg"        // Your image path (public folder or remote)
                        alt=" Nepal Leads Architectural Innovation" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    </div>

                    
                    

                    <p className="text-gray-700 leading-relaxed mb-6">
                    आरजी क्रिएसन्सले नेपालको हस्पिटालिटी तथा नाइट क्लब क्षेत्रको ‘प्रिमियम हस्पिटालिटी आउट लेट ’निर्माणमा फरक पहिचान बनाउँदै गएको छ। 
                    </p>
    
                    <p className="text-gray-700 leading-relaxed mb-6">
                  विगत १५ वर्षदेखि काठमाडौं उपत्यका लगायत देशका प्रमुख सहरहरू तथा विदेशसम्म फैलँदै होटेल, इभेन्ट भेन्यु, नाइट क्लब, डिस्को, क्यासिनो, ब्यांक्वेट, लाउञ्ज, क्याफे, बार, पब सम्बन्धी प्रोजेक्टहरूको अवधारणा, निर्माण र सञ्चालन गर्दै आएको छ। यस क्रममा कम्पनीले लगानीकर्ताको सोच र बजेट अनुसार न्यूनतम लागतमा उच्चस्तरीय डिजाइन तथा निर्माण गरी छुट्टै मापदण्ड कायम गरेको छ।
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                      ‘हामी नाइट क्लब तथा इभेन्ट भेन्यु निर्माण गर्दा लागत न्यून गर्न, सुरक्षित बनाउने र भव्य तथा आकर्षक देखाउने कुरामा विशेष ध्यान दिन्छौँ,’ कम्पनीका कार्यकारी अध्यक्ष राम गिरीले भने, ‘विश्वमा प्रचलित नयाँ ट्रेन्डहरूलाई कस्टमाइज गरी लागू गर्ने हाम्रो नीति हो ।’ आफूहरूले प्रोजेक्टको अवधारणा, डिजाइनदेखि सञ्चालनसम्मको सम्पूर्ण सेवा एकै थलोबाट प्रदान गर्ने गरेको उनले बताए। 
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        स्ट्रक्चर, इन्टेरियर, आर्किटेक्चर, लाइट, साउन्ड, रंग संयोजनलगायतका क्षेत्रमा दक्ष विशेषज्ञ इन्जिनियरहरू कम्पनीसँगै कार्यरत रहेको अध्यक्ष गिरीले बताए। यस्ता कर्मचारीलाई आवश्यकताअनुसार विदेशमा पनि तालिमका लागि पठाउने गरेको उनको भनाई छ।                
                     </p>

                     <h2 className="text-xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                      
                        <span>अन्तर्राष्ट्रिय मापदण्डको प्रयास</span>
                        </h2>
                     <p className="text-gray-700 leading-relaxed mb-6">
                     काठमाडौंको लाजिम्पाटमा निर्माण भइरहेको अन्तर्राष्ट्रिय स्तरको नाइट क्लब ‘लिजेन्ड नेपाल’ आरजी क्रिएसन्सकै बेन्चमार्क प्रोजेक्ट रहेको अध्यक्ष गिरी बताउँछन्।  बेलायतमा उच्च शिक्षा हासिल गरेका युवा उद्यमी रमेश कार्कीले त्यहाँ हासिल गरेको अनुभवका आधारमा नेपालमै अन्तर्राष्ट्रिय मापदण्डको क्लब सञ्चालन गर्ने सोच बनाएका थिए।                
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       ‘विदेशी कन्सल्ट्यान्टहरूसँग धेरै छलफल गरेँ तर सन्तुष्ट हुन सकिनँ। अन्ततः आरजी क्रिएसन्सले दिएको डिजाइन र कन्सेप्टले मन जित्यो,’ कार्कीले भने। उनका अनुसार ‘लिजेन्ड नेपाल’ मा विश्वस्तरीय सामग्रीहरू प्रयोग गरिनेछन्।  

               
                     </p>

                      <h2 className="text-xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                      
                        <span>दर्जनौँ प्रोजेक्ट </span>
                        </h2>
                     <p className="text-gray-700 leading-relaxed mb-6">आरजी क्रिएसन्ससँग  काठमाडौं उपत्यकामा राम बाग महल, म्याजेस्टिक ग्रान्ड, हर्ष बाटिका, ताज रिसेप्सन, ताज प्यालेस, बौद्ध हेरिटेज, इम्पेरियल ब्यांक्वेट, रोयल इम्पायर बुटिक होटेललगायतका प्रोजेक्ट निर्माण गरेको अनुभव छ। यस्तै धरान, इटहरी, पोखरा लगायतका सहर र विदेशमा समेत हस्पिटालिटी प्रोजेक्टहरू निर्माण भइरहेको अध्यक्ष गिरीले बताए।  </p>
                     <p className="text-gray-700 leading-relaxed mb-6">यस्तै काठमाडौंको दरबारमार्गमा प्रख्यात डेजाभु डिस्को थेक, भिक्ट्री लाउञ्ज, ठमेलस्थित फूलमुन क्याफे, फेसेस लाउञ्ज, रकर्स म्याजिक जस्ता चर्चित रात्रिकालीन व्यवसायहरू पनि निर्माण  गरेको उनले बताए।</p>
                    
    
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="lg:flex   items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <span className=" text-[#133950]">Source:</span>
                        <a
                            href="https://nagariknews.nagariknetwork.com/economy/1478347-1749218579.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-400 "
                            
                            >
                           https://nagariknews.nagariknetwork.com/economy/1478347-1749218579.html
                            </a>
                                                    {/* <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-600">3 min read</span> */}
                      </div>
                      <div className="flex items-center space-x-4">
                        
                        <div className="flex space-x-2">
                                                  {/* Facebook Share */}
                                                  <a
                                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                                      "https://www.rgcreationsnepal.com/blogs/media-coverage/media1"
                                                    )}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
                                                  >
                                                    <FaFacebook className="text-white text-xs" />
                                                  </a>
                        
                                                  {/* Twitter Share */}
                                                  <a
                                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                                      "https://www.rgcreationsnepal.com/blogs/media-coverage/media1"
                                                    )}&text=${encodeURIComponent(
                                                      "Check out this article from RG Creations Nepal!"
                                                    )}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
                                                  >
                                                    <FaTwitter className="text-white text-xs" />
                                                  </a>
                        
                                                  {/* WhatsApp Share */}
                                                  <a
                                                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                                                      "Check out this article from RG Creations Nepal! https://www.rgcreationsnepal.com/blogs/media-coverage/media1"
                                                    )}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
                                                  >
                                                    <FaWhatsapp className="w-4 h-4 text-white" />
                                                  </a>
                                                </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
    
              
            </div>
           
          </div>
        </div>
  )
}

export default page