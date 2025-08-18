import React from 'react'
import Image from 'next/image';
import { FaWhatsapp, FaFacebook , FaTwitter } from "react-icons/fa";

export const metadata = {
  title: "Crafting Iconic Event Venues | RG Creations Nepal",
  description: "From luxury hotels to vibrant nightclubs, RG Creations shapes Nepal’s hospitality destinations with 15+ years of expertise.",
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
                      हस्पिटालिटी आउटलेट निर्माणमा पहिचान बनाउँदै आरजी क्रिएसन्स, काठमाडौंमा बने आकर्षक इभेन्ट भेन्यु
                        </h1>
                        <div className='flex justify-between pb-10'>
                            <div>
                                <p className='text-lg font-semibold'>Lokantar</p>
                                <p>साउन २९, २०८२</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full h-64 lg:h-[500px] lg:w-full relative mb-12">
                    <Image
                        src="/panas-2_11zon.jpg"        // Your image path (public folder or remote)
                        alt=" Nepal Leads Architectural Innovation" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    </div>

                    
                    

                    <p className="text-gray-700 leading-relaxed mb-6">
                   काठमाडौं उपत्यकामा होटल, इभेन्ट भेन्यु र क्याफे डिजाइनमा आरजी क्रिएसन्स परिचित बन्दै गएको छ । चीनको ग्वाङ्दोङ प्रदेशको सेन्जेन शहरमा रहेको ‘लिंक वर्ल्ड टेक’सँगको सहकार्यमा आरजी क्रिएसन्सले नेपालमा आकर्षक डिजाइन गरेको छ ।
                    </p>
    
                    <p className="text-gray-700 leading-relaxed mb-6">
                 आरजी क्रिएसन्सले विगत १५ वर्षदेखि काठमाडौं उपत्यका लगायत देशका विभिन्न शहर र विदेशमा समेत होटल, इभेन्ट भेन्यु, नाइट क्लब, डिस्को थेक, क्यासिनो, ब्यांक्वेट, लाउञ्ज, क्याफे, बार, पब लगायत हस्पिटालिटी क्षेत्रसँग सम्बन्धित प्रडक्टको कन्सेप्ट डिजाइन, कन्स्ट्रक्सन र सञ्चालनमा ल्याएको छ । 
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                     क्रिएसन्सले लगानीकर्ताको बजेट र सोच अनुसार कमभन्दा कम लागतमा आकर्षक प्रडक्ट डिजाइन एवं निर्माण गर्दै आइरहेको छ । ‘हामी नाइट क्लब तथा इभेन्ट भेन्यु निर्माण गर्दा त्यसको लागत कम गर्न, त्यसलाई सुरक्षित बनाउन र कसरी भव्य एवं आकर्षक देखाउने भनेर विशेष ध्यान दिन्छौं’, कम्पनीका कार्यकारी अध्यक्ष राम गिरीले भने, ‘नाइट क्लब तथा इभेन्ट भेन्युहरूमा विश्वमा चलेका नयाँ ट्रेण्ड र फिचरलाई कस्टमाइज गरेर लागू गर्ने गरिएको छ ।’
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
                       स्ट्रक्चर, इन्टेरियर, आर्टिटेक्ट, लाइट, साउण्ड, कलरिस्ट, निर्माणमा प्रयोग गरिने सामग्रीको गुणस्तर आदि हेर्नका लागि आरजी क्रियसन्समा विषय विज्ञ छुट्टाछुट्टै इन्जिनियरहरू कार्यरत रहेका छन् ।<br/><br/>

                       दक्ष इन्जिनियरहरूलाई अध्यक्ष गिरी आफ्नो ‘कन्सेप्ट’ र प्रोजेक्टका लागि आवश्यक पर्ने ‘कन्टेन्ट क्रियट’ गरेर दिने गर्छन् । ‘कुनै पनि भेन्युको भव्यता त्यसमा के कस्ता नयाँ ‘कन्सेप्ट र कन्टेन्ट एड’ गर्न सकियो भन्नेमा निर्भर गर्छ’ गिरीले भने, ‘प्रोजेक्टका लागि जति युनिक कन्टेन्ट क्रियट गर्न सकियो त्यो त्यति नै भव्य, अकर्षक र सफल हुन्छ  ।’ कम्पनीमा कार्यरत इन्जिनियर तथा कर्मचारीहरूलाई विदेशमा पठाएर तालिम लिने व्यवस्था पनि गरिएको कार्यकारी अध्यक्ष गिरीले बताए ।<br/><br/>

                       कम्पनीले लगानीकर्ताको बजेट र निर्माण स्थलको भू–बनोट अनुसार आवश्यक पर्ने सामग्री सिधै काराखानाबाट खरिद गर्ने गरेको छ ।<br/><br/>

                       काठमाडौंको लाजिम्पाटमा तीन रोपनी क्षेत्रफलमा अन्तर्राष्ट्रिय स्तरको नाइट क्लब ‘लिजेण्ड नेपाल’ सञ्चालनको तयारी गरिरहेका रमेश कार्की लण्डनमा उच्च शिक्षा हासिल गरेर नेपाल फर्किएका युवा उद्यमी हुन् । उनले बेलायतमा रहँदा थुप्रै क्लब, पब, डिस्कोथेकको अनुभव लिन पाए ।<br/><br/>

                       नेपालमा पनि अन्तर्राष्ट्रिय स्तरको नाइट क्लब सञ्चालन गर्ने सोच बनाएर फर्किएका उनले कयौं विदेशी कन्सलट्यान्टसँग सम्पर्क र छलफल गरेका थिए । अन्तिममा उनले आरजी क्रियसन्सलाइ रोजे । ‘मैले धेरै विदेशी कम्पनी र नाइट क्लबका क्षेत्रमा कार्यरतहरूसँग कुराकानी गरेँ’, कार्कीले भने, ‘तर उनीहरूको प्रस्ताव र कन्सेप्ट चित्त बुझेन ।’<br/><br/>

                       नेपालमै कन्सलट्यान्ट खोज्ने क्रममा कार्कीले आरजी क्रियसन्ससँग सम्पर्क भएको बताए । ‘आरजी क्रियसन्सले मलाई जुन डिजाइन र कन्सेप्ट दियो त्यो निकै उत्कृष्ट लागेर लिजेण्ड नेपालको निर्माणको जिम्मा दिएको हुँ,’ कार्की भन्छन् ।<br/><br/>

                       अन्तर्राष्ट्रिय स्तरका सबै मापदण्ड पूरा गरेर निर्माण भइरहेको नाइट क्लब लिजेण्ड नेपाल आरजी क्रिएसन्सका लागि अर्को बेञ्चमार्क हुने अध्यक्ष गिरी बताउँछन् ।<br/><br/>

                       क्लबको साउण्ड सिस्टम र साउण्ड प्रुफका लागि मात्रै करिब सय थरिका सामग्री प्रयोग हुनेछन् । लिजेण्ड नेपालमा साउण्ड सिस्टम, लाइट, एलइडी स्क्रिन, हाइड्रोलिक मेसिन लगायत तीन सयभन्दा बढी अत्याधुनिक सामग्रीहरू प्रयोग हुनेछन् ।<br/><br/>

                       आरजी क्रिएसन्सका निर्देशक सुमित्रा पौडेल उप्रेतीले नाफा आर्जन गर्नेभन्दा पनि लगानीकर्तालाई कसरी सुलभ खर्चमा उत्कृष्ट प्रोजेक्ट दिन सकिन्छ भनेर कार्य गरिरहेको बताइन ।
                       <br/><br/>

                       क्रिएसन्सले रात्रिकालिन व्यवसायतर्फ यसअघि काठमाडौंको दरबारमार्गस्थित प्रख्यात डेजाभु डिस्को थेक, भिक्ट्री लाउञ्ज एवं ठमेलमा फूलमून क्याफे, फेसेस लाउञ्ज, रकर्स म्याजिक जस्ता चर्चित आउटलेटको निर्माण सम्पन्न गरिसकेको छ ।
                     </p>
                    
    
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="lg:flex   items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <span className=" text-[#133950]">Source:</span>
                        <a
                            href="https://lokaantar.com/story/296395/2025/8/14/general-news/rg-creations-"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-400 "
                            
                            >
                          https://lokaantar.com/story/296395/2025/8/14/general-news/rg-creations-
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