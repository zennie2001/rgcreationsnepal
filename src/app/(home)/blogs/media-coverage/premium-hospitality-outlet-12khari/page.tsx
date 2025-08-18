import React from 'react'
import Image from 'next/image';
import { FaWhatsapp, FaFacebook , FaTwitter } from "react-icons/fa";

export const metadata = {
  title: "Innovating Premium Nightlife Design | RG Creations",
  description: "RG Creations Nepal transforms hotels, Nightclubs and banquet venues into iconic spaces, blending with global trends.",
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
                      
                        प्रिमियम हस्पिटालिटी आउटलेट’ निर्माणमा विशिष्ट पहिचान बनाउँदै ‘आरजी क्रिएसन्स’
                        </h1>
                        <div className='flex justify-between pb-10'>
                            <div>
                                <p className='text-lg font-semibold'>बाह्रखरी</p>
                                <p>साउन २९, २०८२</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full h-64 lg:h-[500px] lg:w-full relative mb-12">
                    <Image
                        src="/majestic-1_11zon.jpg"        // Your image path (public folder or remote)
                        alt=" Nepal Leads Architectural Innovation" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    </div>

                    
                    

                    <p className="text-gray-700 leading-relaxed mb-6">
                   काठमाडौं । आरजी क्रिएसन्स नेपाल हस्पिटालिटी तथा नाइट क्लबको क्षेत्रमा चिरपरिचित नाम हो । क्रिएसन्सको बालुवाटारस्थित मुख्य कार्यालय र चीनको ग्वाङ्दोङ प्रदेशको सेन्जेन शहरमा ‘लिंक वल्र्ड टेक’ नाम गरेको कम्पनी रहेको छ । 
                    </p>
    
                    <p className="text-gray-700 leading-relaxed mb-6">
                 आरजी क्रिएसन्सले विगत १५ वर्षदेखि काठमाडौं उपत्यका लगायत देशका विभिन्न शहर र विदेशमासमेत होटल, इभेन्ट भेन्यू, नाइट क्लब, डिस्को थेक, क्यासिनो, ब्यांक्वेट, लाउञ्ज, क्याफे, बार, पब लगायत हस्पिटालिटी क्षेत्रसँग सम्बन्धित प्रडक्टको कन्सेप्ट डिजाइन, कन्स्ट्रक्सन र सञ्चालन गरी आफ्नो छुट्टै मापदण्ड स्थापित गरिसकेको छ । 
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                      आरजी क्रियसन्सले लगानीकर्ताको बजेट र सोच अनुसार कमभन्दा कम लागतमा उत्कृष्ट प्रडक्ट डिजाइन एवं निर्माण गर्दै आइरहेको छ । “हामी नाइट क्लब तथा इभेन्ट भेन्यू निर्माण गर्दा त्यसको लागत कम गर्न,  त्यसलाई सुरक्षित बनाउन र कसरी भव्य एवं आकर्षक देखाउने भनेर विशेष ध्यान दिन्छौँ,” कम्पनीका कार्यकारी अध्यक्ष राम गिरी भन्छन्, “नाइट क्लब तथा इभेन्ट भेन्यूहरूमा विश्वमा चलेका नयाँ ट्रेण्ड र फिचरलाई कस्टमाइज गरेर लागू गर्ने गरिएको छ ।” 
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        कम्पनीले लगानीकर्ताको आवश्यकता अनुसार प्रोजेक्ट छनोटदेखि त्यसको कन्सेप्ट, डिजाइन, निर्माण र सञ्चालनसम्मको सम्पूर्ण सेवा उपलब्ध गराउँदै आइरहेको छ ।               
                     </p>

                    
                     <p className="text-gray-700 leading-relaxed mb-6">
                    आरजी क्रिएसन्सले निर्माण गरेका प्रोजेक्टहरूमा नयाँ जेनेरेसनको सोच र उनीहरूको मनोविज्ञानलाई बोध गरेर तथा लगानीकर्ताको बजेटलाई मिल्ने गरी विभिन्न सुविधा तथा फिचरहरूलाई कुशलता पूर्वक अप्लाई गर्ने गरिएको पाइन्छ ।                 
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                      आरजी क्रियसन्सले डिजाइन तथा निर्माण गरेका प्रोजेक्ट अन्य भन्दा भिन्न र विशिष्ट देखिन्छन् । “हामी सुन्दर डिजाइनमा त्यसको भव्यतालाई कसरी प्रस्तुत गर्न सकिन्छ भनेर गहन अनुसन्धान गर्छौँ,” कार्यकारी अध्यक्ष गिरी भन्छन्, “हामीले प्रयोग गर्ने सामग्री, कन्सेप्ट र डिजाइन अनुसार कस्टमाइज गरिने भएकाले हाम्रा प्रडक्टहरूमा भव्यता झल्किन्छ । सकेसम्म अन्यले प्रयोग नगरेका सामग्रीहरूको खोजी गरी प्रयोग गर्ने गरिएको छ ।” 
               
                     </p>

                     
                     <p className="text-gray-700 leading-relaxed mb-6">हस्पिटालिटी क्षेत्रमा उत्कृष्ट आउटलेटहरू निर्माण गरेर पर्यटन क्षेत्रमा योगदान दिने तथा देश विकासमा आफ्नोतर्फबाट केही योगदान गर्नु कम्पनीको उद्देश्य रहेको कार्यकारी अध्यक्ष गिरी बताउँछन् ।  </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        नयाँ कन्सेप्ट र डिजाइनका प्लेटफर्महरू निर्माण गरेर देशको आर्थिक विकासमा टेवा पुर्‍याउने र रोजगारी सिर्जना गर्ने उद्देश्य आरजी क्रियसन्सले लिएको छ । 
                     </p>
                    
    
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="lg:flex   items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <span className=" text-[#133950]">Source:</span>
                        <a
                            href="https://baahrakhari.com/detail/460221"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-400 "
                            
                            >
                          https://baahrakhari.com/detail/460221
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