import React from 'react'
import Image from 'next/image';
import { FaWhatsapp, FaFacebook , FaTwitter } from "react-icons/fa";


export const metadata = {
  title: "RG Creations Leads Architectural Innovation",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
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
                        <h2 className="text-3xl font-bold flex gap-6  leading-relaxed mb-8 uppercase">
                      
                        <span>प्रिमियम हस्पिटालिटी आउटलेट’ निर्माणमा विशिष्ट पहिचान बनाउँदै ‘आरजी क्रिएसन्स</span>
                        </h2>
                        <div className='flex justify-between pb-10'>
                            <div>
                                <p className='text-lg font-semibold'> आर्थिक दैनिक</p>
                                <p>२०८२, असार २९</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full h-64 lg:h-[500px] lg:w-full relative mb-12">
                    <Image
                        src="/media1.jpg"        // Your image path (public folder or remote)
                        alt=" Nepal Leads Architectural Innovation" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    </div>



                    <p className="text-gray-700 leading-relaxed mb-6">
                     काठमाडौं  । आरजी क्रिएसन्स नेपाल हस्पिटालिटी तथा नाइट क्लबको क्षेत्रमा चिरपरिचित नाम हो । क्रिएसन्सको बालुवाटारस्थित मुख्य कार्यालय र चीनको ग्वाङ्दोङ प्रदेशको सेन्जेन सहरमा ‘लिंक वर्ल्ड टेक’ नाम गरेको कम्पनी रहेको छ ।
                    </p>
    
                    <p className="text-gray-700 leading-relaxed mb-6">
                    आरजी क्रिएसन्सले विगत १५ वर्षदेखि काठमाडौं उपत्यका लगायत देशका विभिन्न सहर र विदेशमा समेत होटल, इभेन्ट भेन्यु, नाइट क्लब, डिस्को थेक, क्यासिनो, ब्याङ्क्वेट, लाउञ्ज, क्याफे, बार, पबलगायत हस्पिटालिटी क्षेत्रसँग सम्बन्धित प्रोडक्टको कन्सेप्ट डिजाइन, कन्स्ट्रक्सन र सञ्चालन गरी आफ्नो छुट्टै मापदण्ड स्थापित गरिसकेको छ ।
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                      आरजी क्रियसन्सले लगानीकर्ताको बजेट र सोचअनुसार कमभन्दा कम लागतमा उत्कृष्ट प्रोडक्ट डिजाइन एवं निर्माण गर्दै आइरहेको छ । ‘हामी नाइट क्लब तथा इभेन्ट भेन्यु निर्माण गर्दा त्यसको लागत कम गर्न, त्यसलाई सुरक्षित बनाउन र कसरी भव्य एवं आकर्षक देखाउने भनेर विशेष ध्यान दिन्छौँ, कम्पनीका कार्यकारी अध्यक्ष राम गिरी भन्छन्, ‘नाइट क्लब तथा इभेन्ट भेन्युहरूमा विश्वमा चलेका नयाँ ट्रेन्ड र फिचरलाई कस्टमाइज गरेर लागू गर्ने गरिएको छ ।’
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        कम्पनीले लगानीकर्ताको आवश्यकताअनुसार प्रोजेक्ट छनोटदेखि त्यसको कन्सेप्ट, डिजाइन, निर्माण र सञ्चालनसम्मको सम्पूर्ण सेवा उपलब्ध गराउँदै आइरहेको छ ।                 
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       आरजी क्रिएसन्सले निर्माण गरेका प्रोजेक्टहरूमा नयाँ जेनेरेसनको सोच र उनीहरूको मनोविज्ञानलाई बोध गरेर तथा लगानीकर्ताको बजेटलाई मिल्ने गरी विभिन्न सुविधा तथा फिचरहरूलाई कुशलतापूर्वक अप्लाई गर्ने गरिएको पाइन्छ ।                 
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        आरजी क्रियसन्सले डिजाइन तथा निर्माण गरेका प्रोजेक्ट अन्यभन्दा भिन्न र विशिष्ट देखिन्छन् । ‘हामी सुन्दर डिजाइनमा त्यसको भव्यतालाई कसरी प्रस्तुत गर्न सकिन्छ भनेर गहन अनुसन्धान गर्छौँ, कार्यकारी अध्यक्ष गिरी भन्छन्, ‘हामीले प्रयोग गर्ने सामग्री, कन्सेप्ट र डिजाइनअनुसार कस्टमाइज गरिने भएकाले हाम्रा प्रोडक्टहरूमा भव्यता झल्किन्छ । सकेसम्म अन्यले प्रयोग नगरेका सामग्रीहरूको खोजी गरी प्रयोग गर्ने गरिएको छ ।’                
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">काठमाडौंको लाजिम्पाटमा तीन रोपनी क्षेत्रफलमा अन्तर्राष्ट्रियस्तरको नाइट क्लब लिजेन्ड नेपाल सञ्चालनको तयारी गरिरहेका रमेश कार्की लण्डनमा उच्च शिक्षा हासिल गरेर नेपाल फर्किएका युवा उद्यमी हुन् । उनले बेलायतमा रहँदा थुप्रै क्लब, पब, डिस्कोथेकको अनुभव लिन पाए । उनले नेपालमा पनि अन्तर्राष्ट्रियस्तरको नाइट क्लब सञ्चालन गर्ने सोच बनाएर थुप्रै विदेशी कन्सलट्यान्टसँग सम्पर्क र छलफल गरेका थिए । ‘मैले धेरै विदेशी कम्पनी र नाइट क्लबका क्षेत्रमा कार्यरतहरूसँग कुराकानी गरेँ, कार्की भन्छन्, ‘तर उनीहरूको प्रस्ताव र कन्सेप्ट चित्त बुझेन ।’</p>
                     <p className="text-gray-700 leading-relaxed mb-6">नेपालमै कन्सलट्यान्ट खोज्ने क्रममा कार्कीले आरजी क्रियसन्ससँग सम्पर्क भएको बताए । ‘आरजी क्रियसन्सले मलाई जुन डिजाइन र कन्सेप्ट दियो त्यो निकै उत्कृष्ट लागेर लिजेन्ड नेपालको निर्माणको जिम्मा दिएको हुँ,’ कार्की बताउँछन् ।</p>
                     <p className="text-gray-700 leading-relaxed mb-6">अन्तर्राष्ट्रियस्तरका सबै मापदण्ड पूरा गरेर निर्माण भइरहेको नाइट क्लब लिजेन्ड नेपाल आरजी क्रिएसन्सका लागि अर्को बेञ्चमार्क हुने अध्यक्ष गिरी बताउँछन् ।</p>
                     <p className="text-gray-700 leading-relaxed mb-6">क्लबको साउन्ड सिस्टम र साउन्ड प्रुफका लागि मात्रै करिब सयथरीका सामग्री प्रयोग हुन्छन्’, कार्यकारी अध्यक्ष गिरी भन्छन्, ‘नाइट क्लबको भव्यता र विश्वमा प्रयोग भइरहेका नवीनतम प्रविधि लिजेन्ड नेपालमा देख्न पाइने छ ।’ लिजेन्ड नेपालमा साउन्ड सिस्टम, लाइट, एलईडी स्क्रिन, हाइड्रोलिक मेसिनलगायत तीन सयभन्दा बढी अत्याधुनिक सामग्रीहरू प्रयोग हुनेछन् ।</p>
                     <p className="text-gray-700 leading-relaxed mb-6">आरजी क्रिएसन्सका निर्देशक सुमित्रा पौडेल उप्रेती कम्पनीले निर्माण गर्ने प्रजेक्टहरूबाट नाफा आर्जन गर्नेभन्दा पनि लगानीकर्तालाई कसरी सुलभ खर्चमा उत्कृष्ट प्रोजेक्ट दिन सकिन्छ भनेर कार्य गरिरहेको बताउँछिन् ।</p>
                     <p className="text-gray-700 leading-relaxed mb-6">‘आरजी क्रिएसन्सले निर्माण सम्पन्न गररे हस्तान्तरण गरेका प्रेजेक्टका लागानीकर्ताहरू खुसी भएको र उनीहरूले सोचेभन्दा उत्कृष्ट प्रोजेक्ट पाएर कम्पनीप्रति आभार प्रकट गर्ने गरेको उल्लेख गर्दै निर्देशक उप्रेतीले भनिन्, ‘भविष्यमा अझै उत्कृष्ट र भव्य प्रेजेक्ट निर्माणमा कम्पनी दत्तचित्त भएर लागिपरेको छ ।’</p>
                     <p className="text-gray-700 leading-relaxed mb-6">कम्पनीले काठमाडौं उपत्यकामा रामबाग महल, म्याजेस्टिक ग्रान्ड, हर्षबाटिक, ताज रिसेप्सन, ताज प्यालेस, बौद्ध हेरिटेज, इम्पेरियल ब्यांक्वेट, रोयल इम्पायर बुटिक होटललगायत दर्जनौँ इभेन्ट भेन्यु निर्माण सम्पन्न गरी लगानीकर्ताहरूलाई हस्तान्तरण गरिसकेको छ । आरजी क्रिएसन्सले धरान, इटहरी, पोखरालगायत देशका विभिन्न सहर एवं विदेशमा पनि हस्पिटालिटी क्षेत्रसँग सम्बन्धित प्रोजेक्टहरू निर्माण गरिरहेको छ ।</p>
                     <p className="text-gray-700 leading-relaxed mb-6">यसैगरी, आरजी क्रिएसन्सले रात्रिकालिन व्यवसायतर्फ यसअघि काठमाडौंको दरबारमार्गस्थित प्रख्यात डेजाभु डिस्को थेक, भिक्ट्री लाउञ्ज एवं ठमेलमा फुलमुन क्याफे, फेसेस लाउञ्ज, रकर्स म्याजिकजस्ता चर्चित आउटलेटको निर्माण सम्पन्न गरिसकेको छ ।</p>
                    
    
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="lg:flex   items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <span className=" text-[#133950]">Source:</span>
                        <a
                            href="https://www.aarthikdainik.com/news/187701/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-400 "
                            
                            >
                            https://www.aarthikdainik.com/news/187701/
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