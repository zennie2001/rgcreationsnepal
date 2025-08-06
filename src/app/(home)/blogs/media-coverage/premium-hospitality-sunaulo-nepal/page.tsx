import React from 'react'
import Image from 'next/image';
import { FaWhatsapp, FaFacebook , FaTwitter } from "react-icons/fa";

export const metadata = {
  title: "RG Creations Establishes Identity in Premium Hospitality Outlets",
  description: "With over 15 years of experience, RG Creations is pioneering innovative design in Nepal's hospitality and nightclub sectors.",
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
                      
                        प्रिमियम हस्पिटालिटी आउटलेट’ निर्माणमा विशिष्ट पहिचान बनाउँदै ‘आरजी क्रिएसन्स
                        </h1>
                        <div className='flex justify-between pb-10'>
                            <div>
                                <p className='text-lg font-semibold'> सुनौलो नेपाल</p>
                                <p> २४ असार २०८२</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full h-64 lg:h-[500px] lg:w-full relative mb-12">
                    <Image
                        src="/rambagh.jpg"        // Your image path (public folder or remote)
                        alt=" Nepal Leads Architectural Innovation" // Alt text for accessibility
                        fill                        // Makes the image fill its parent div
                        style={{ objectFit: 'cover' }} // Optional: crop image to fill div
                    />
                    </div>



                    <p className="text-gray-700 leading-relaxed mb-6">
                    काठमाडौं । आरजी क्रिएसन्स ‘नेपाल हस्पिटालिटी तथा नाइट क्लब’को क्षेत्रमा चिरपरिचित नाम हो । क्रिएसन्सको बालुवाटारस्थित मुख्य कार्यालय र चीनको ग्वाङ्दोङ प्रदेशको सेन्जेन शहरमा ‘लिंक वर्ल्ड टेक’ नाम गरेको कम्पनी रहेको छ ।
                    </p>
    
                    <p className="text-gray-700 leading-relaxed mb-6">
                    आरजी क्रिएसन्सले विगत १५ वर्षदेखि काठमाडौं उपत्यका लगायत देशका विभिन्न सहर र विदेशमा समेत होटल, इभेन्ट भेन्यु, नाइट क्लब, डिस्को थेक, क्यासिनो, ब्याङ्क्वेट, लाउञ्ज, क्याफे, बार, पबलगायत हस्पिटालिटी क्षेत्रसँग सम्बन्धित प्रोडक्टको कन्सेप्ट डिजाइन, कन्स्ट्रक्सन र सञ्चालन गरी आफ्नो छुट्टै मापदण्ड स्थापित गरिसकेको छ ।
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                      दक्ष इन्जिनियरहरूलाई अध्यक्ष गिरी आफ्नो ‘कन्सेप्ट’ र प्रोजेक्टका लागि आवश्यक पर्ने ‘कन्टेन्ट क्रियट’ गरेर दिने गर्छन् । ‘कुनै पनि भेन्यूको भव्यता त्यसमा के कस्ता नयाँ ‘कन्सेप्ट र कन्टेन्ट एड’ गर्न सकियो भन्नेमा निर्भर गर्छ अध्यक्ष गिरी भन्छन्, ‘प्रोजेक्टका लागि जति युनिक कन्टेन्ट क्रियट गर्न सकियो त्यो त्यति नै भव्य, अकर्षक र सफल हुन्छ ।’ कम्पनीमा कार्यरत इन्जिनियर तथा कर्मचारीहरूलाई विदेशमा पठाएर तालिम लिने व्यवस्था पनि गरिएको गिरीले बताए ।
                    </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        कम्पनीले लगानीकर्ताको आवश्यकताअनुसार प्रोजेक्ट छनोटदेखि त्यसको कन्सेप्ट, डिजाइन, निर्माण र सञ्चालनसम्मको सम्पूर्ण सेवा उपलब्ध गराउँदै आइरहेको छ ।                 
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                       काठमाडौंको लाजिम्पाटमा तीन रोपनी क्षेत्रफलमा अन्तर्राष्ट्रिय स्तरको नाइट क्लब लिजेण्ड नेपाल सञ्चालनको तयारी गरिरहेका रमेश कार्की लण्डनमा उच्च शिक्षा हासिल गरेर नेपाल फर्किएका युवा उद्यमी हुन् । उनले बेलायतमा रहँदा थुप्रै क्लब, पब, डिस्कोथेकको अनुभव लिन पाए । उनले नेपालमा पनि अन्तर्राष्ट्रिय स्तरको नाइट क्लब सञ्चालन गर्ने सोच बनाएर थुप्रै विदेशी कन्सलट्यान्टसँग सम्पर्क र छलफल गरेका थिए । ‘मैले धेरै विदेशी कम्पनी र नाइट क्लबका क्षेत्रमा कार्यरतहरूसँग कुराकानी गरेँ, कार्की भन्छन्, ‘तर उनीहरूको प्रस्ताव र कन्सेप्ट चित्त बुझेन ।’                 
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">
                        नेपालमै कन्सलट्यान्ट खोज्ने क्रममा कार्कीले आरजी क्रियसन्ससँग सम्पर्क भएको बताए । ‘आरजी क्रियसन्सले मलाई जुन डिजाइन र कन्सेप्ट दियो त्यो निकै उत्कृष्ट लागेर लिजेण्ड नेपालको निर्माणको जिम्मा दिएको हुँ,’ कार्की बताउँछन् ।
अन्तर्राष्ट्रिय स्तरका सबै मापदण्ड पूरा गरेर निर्माण भइरहेको नाइट क्लब लिजेण्ड नेपाल आरजी क्रिएसन्सका लागि अर्को बेञ्चमार्क हुने अध्यक्ष गिरी बताउँछन् ।               
                     </p>
                     <p className="text-gray-700 leading-relaxed mb-6">‘क्लबको साउण्ड सिस्टम र साउण्ड प्रुफका लागि मात्रै करिब सय थरिका सामग्री प्रयोग हुन्छन्’, कार्यकारी अध्यक्ष गिरी भन्छन्, ‘नाइट क्लबको भव्यता र विश्वमा प्रयोग भइरहेका नविनतम प्रविधि लिजेण्ड नेपालमा देख्न पाइने छ ।’ लिजेण्ड नेपालमा साउण्ड सिस्टम, लाइट, एलइडी स्क्रिन, हाइड्रोलिक मेसिन लगायत तीन सयभन्दा बढी अत्याधुनिक सामग्रीहरू प्रयोग हुनेछन् । आरजी क्रिएसन्सका निर्देशक सुमित्रा पौडेल उप्रेती कम्पनीले निर्माण गर्ने पो्रजेक्टहरूबाट नाफा आर्जन गर्ने भन्दा पनि लगानीकर्तालाई कसरी सुलभ खर्चमा उत्कृष्ट प्रोजेक्ट दिन सकिन्छ भनेर कार्य गरिरहेको बताउँछिन् ।</p>
                     <p className="text-gray-700 leading-relaxed mb-6">‘आरजी क्रिएसन्सले निर्माण सम्पन्न गररे हस्तान्तरण गरेका प्रेजेक्टका लागनीकर्ताहरू खुशी भएको र उहाँहरूले सोचेभन्दा उत्कृष्ट प्रोजेक्ट पाएर कम्पनीप्रति आभार प्रकट गर्ने गरेको उल्लेख गर्दै निर्देशक उप्रेतीले भनिन्, ‘भविष्यमा अझै उत्कृष्ट र भव्य प्रेजेक्ट निर्माणमा कम्पनी दत्तचित्त भएर लागिपरेको छ ।’</p>
                     <p className="text-gray-700 leading-relaxed mb-6">कम्पनीले काठमाडौं उपत्यकामा रामबाग महल, म्याजेस्टिक ग्रान्ड, हर्षबाटिक, ताज रिसेप्सन, ताज प्यालेस, बौद्ध हेरिटेज, इम्पेरियल ब्यांक्वेट, रोयल इम्पायर बुटिक होटल लगायत दर्जनौँ इभेन्ट भेन्यू निर्माण सम्पन्न गरी लगानीकर्ताहरूलाई हस्तान्तरण गरिसकेको छ । आरजी क्रिएसन्सले धरान, इटहरी, पोखरा लगायत देशका विभिन्न शहर एवं विदेशमा पनि हस्टिटालिटी क्षेत्रसँग सम्बन्धित प्रोजेक्टहरू निर्माण गरिरहेको छ ।</p>
                     <p className="text-gray-700 leading-relaxed mb-6">यसैगरी आरजी क्रिएसन्सले रात्रिकालिन व्यवसायतर्फ यसअघि काठमाडौंको दरबारमार्गस्थित प्रख्यात डेजाभु डिस्को थेक, भिक्ट्री लाउञ्ज एवं ठमेलमा फूलमून क्याफे, फेसेस लाउञ्ज, रकर्स म्याजिक जस्ता चर्चित आउटलेटको निर्माण सम्पन्न गरिसकेको छ ।</p>
                     
                    
    
                    
                   
    
                  </div>
    
                  {/* Author and Share Section */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="lg:flex   items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <span className=" text-[#133950]">Source:</span>
                        <a
                            href="https://sunaulonepal.com/content/370972/?fbclid=IwY2xjawLi74RleHRuA2FlbQIxMQBicmlkETFiYlljY1I0eXdlQ3YxSThZAR7GA_8hUUMUKyshDcXLtUucNp3_D0VN03TQK8dNb9faGic05gFLBeiQaDPMug_aem__d5tN1VAywIrZsciQUnjgw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-400 "
                            
                            >
                            https://sunaulonepal.com/content/370972/
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