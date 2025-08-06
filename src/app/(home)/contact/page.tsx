// import PageHeader from "@/components/PageHeader";

import { Phone } from "lucide-react";
import { MailOpen } from "lucide-react";
// import NewPageHeader from "@/components/NewPageHeader";
import ContactHero from "@/sections/ContactHero";
import FAQContact from "@/sections/FAQ";
import Script from "next/script";

export const metadata = {
  title: "Contact Us | RG Creations Nepal",
  description:
    "Get in touch with RG Creations Nepal for interior design and construction services. We're here to discuss your project needs.",
};



export default function ContactUs() {
  return (
    <>
     <head>
      <link
        rel="canonical"
        href="https://www.rgcreationsnepal.com/contact"
      />
    </head>
     <Script
  id="contact-page-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "url": "https://www.rgcreationsnepal.com/contact",
        "name": "Contact Us - RG Creations Nepal Pvt. Ltd.",
        "description": "Contact RG Creations Nepal Pvt. Ltd., a leading construction and architecture company. Reach out for inquiries about projects, partnerships, and services.",
        "alternateName": [
          "Best architecture company Nepal",
          "Top architecture company Nepal",
          "Premium architecture company Nepal",
          "Elegant architecture company Nepal",
          "Highly recommended architecture company Nepal",
          "Nepal’s leading architecture company Nepal",
          "Kathmandu’s top architecture company Nepal",
          "Award‑winning architecture company Nepal",
          "Trusted architecture company Nepal",
          "Best banquet design company Nepal",
          "Top banquet design company Nepal",
          "Premium banquet design company Nepal",
          "Elegant banquet design company Nepal",
          "Famous banquet design company Nepal",
           "Number 1 architect company in Nepal",
          "Best architects in Nepal",
          "Top architecture firms in Nepal",
          "Top 10 architecture companies in Nepal",
          "Best architecture company in Kathmandu",
          "Leading architect firm Nepal",
          "No.1 architecture company Nepal",
          "Award-winning architecture company in Nepal",
          "Best design and architecture company Nepal",
          "Best hospitality architecture firm in Nepal",
          "Commercial architect company Nepal",
          "Top rated architects Nepal",
          "Best interior and architecture firm Nepal",
          "Architecture company for hotel design in Nepal",
          "Premium architecture company Kathmandu",
          "Who is the best architect in Nepal?",
          "Top architects list Nepal 2025",
          "Best architectural design styles in Nepal",
          "Best architecture firm for commercial projects Nepal",
          "Famous architect companies in Nepal",
          "Architecture firm portfolio Nepal",
          "Architecture company reviews Nepal",
          "How to choose top architects in Nepal",
          "Cost of hiring architect in Kathmandu",
          "Best architecture for resorts and hotels in Nepal",
          "Best architect firm for hotel construction Nepal",
          "No.1 architecture firm for restaurant design Nepal",
          "Top modern architect companies Kathmandu",
          "Best architecture company near me",
          "Top 10 architecture consultants in Nepal",
          "Architectural Design Services",
          "Custom Architectural Design",
          "3D Architectural Visualization",
          "Modern Architecture",
          "Sustainable Architecture",
          "Interior Design",
          "Building Design",
          "Building Permit Assistance",
          "Structural Engineering Services",
          "Hospitality Design Consultants",
          "Hospitality Construction Companies",
          "Commercial Construction Services",
          "Turnkey Construction Solutions",
          "Premium Hanging Lights",
          "Architectural Project Management"
        ],
        "mainEntity": {
          "@type": "Organization",
          "name": "RG Creations Nepal Pvt. Ltd.",
          "url": "https://www.rgcreationsnepal.com",
          "logo": "https://www.rgcreationsnepal.com/logo.png",
          "email": "info@rgcreationsnepal.com",
          "telephone": "+977-9802357231",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Baluwatar",
            "addressLocality": "Kathmandu",
            "postalCode": "44600",
            "addressCountry": "NP"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+977-9802357231",
              "contactType": "customer service",
              "areaServed": "NP",
              "availableLanguage": ["English", "Nepali"]
            },
            {
              "@type": "ContactPoint",
              "telephone": "+977-01-4524806",
              "contactType": "office",
              "areaServed": "NP",
              "availableLanguage": ["English", "Nepali"]
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Architecture and Construction Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Architectural Design Services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Architectural Design"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "3D Architectural Visualization"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Modern Architecture"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sustainable Architecture"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Interior Design"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Building Design"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Building Permit Assistance"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Structural Engineering Services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Hospitality Design Consultants"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Hospitality Construction Companies"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Construction Services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Turnkey Construction Solutions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Premium Hanging Lights"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Architectural Project Management"
                }
              }
            ]
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does your architecture company provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer a full range of architectural services including modern and sustainable architecture, custom building design, interior design, 3D architectural visualization, structural engineering, and turnkey construction solutions."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a typical architectural project take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The duration depends on the project size and complexity, but typically ranges from a few months for residential projects to over a year for large commercial or hospitality developments."
            }
          },
          {
            "@type": "Question",
            "name": "Do you assist with building permit applications?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide building permit assistance as part of our comprehensive project management services to ensure compliance with local regulations."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with sustainable architecture design?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We specialize in sustainable architecture that focuses on energy efficiency, environmentally friendly materials, and reducing the overall carbon footprint of buildings."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer 3D architectural visualization services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide high-quality 3D architectural visualization to help clients better understand and experience their projects before construction begins."
            }
          },
          {
      "@type": "Question",
      "name": "What makes your firm one of the best architectural firms in Kathmandu, Nepal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are recognized as one of Kathmandu's top architecture companies offering award-winning, highly recommended, and trusted architectural services with a focus on modern, sustainable architecture and elegant, premium designs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer specialized design services for bars, pubs, and nightclubs in Nepal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide expert bar and pub design services in Nepal, including nightclub design in Kathmandu, combining creative concepts with functional architecture."
      }
    },
    {
      "@type": "Question",
      "name": "Can your firm handle luxury and creative resort master planning in Nepal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We specialize in luxury resort architecture and creative resort master planning, delivering customized architectural solutions tailored for the hospitality sector across Nepal."
      }
    },
    {
      "@type": "Question",
      "name": "What services do you provide as a neoclassical architectural firm in Nepal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our neoclassical architectural services focus on timeless elegance, incorporating classical design principles with modern construction techniques to create world-class buildings."
      }
    },
    {
      "@type": "Question",
      "name": "Do you assist with building permits and construction project management in Kathmandu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive building permit assistance and full construction project management services to ensure smooth and compliant project execution."
      }
    },
        ]
      },

    ])
  }}
/>

    <main className="w-full overflow-hidden">
      <ContactHero/>
      {/* Contact Section */}
      <div className="container mx-auto mt-20 mb-20 shadow-lg rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 bg-white p-10 md:p-16">
          <div className="md:mt-8 text-xs flex flex-col md:flex-row items-center gap-4 md:gap-10 text-gray-700">
            <div className="flex items-center -ms-20 md:ms-0  gap-2 mb-8">
              <Phone
                size={20}
                className="text-[#133950] font-semibold"
                fill="darkGreen"
              />
              <div className="flex flex-col items-start">
                <span className="text-[#133950] text-base font-semibold">
                  Phone
                </span>
                <span className="text-gray-500 text-base font-semibold">
                 +977-9802357231 <br/> +977-01-4524806
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 -ms-3 mb-8">
              <MailOpen size={20} className="text-[#133950" fill="darkGreen" />
              <div className="flex flex-col items-start">
                <span className="text-[#133950] text-base font-semibold">
                  Email
                </span>
                <span className="text-gray-500 text-base font-semibold">
                  info@rgcreationsnepal.com
                </span>
              </div>
            </div>
          </div>
          <h2 className="text-3xl text-left font-extrabold text-black mb-4">
            Get in <span className="text-[#133950">Touch</span>
          </h2>
          <p className="text-gray-600 text-sm mb-6">
           Have a project in mind? Let’s build something extraordinary together. Contact RG Creations Nepal for expert architecture and construction solutions that bring your vision to life.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              placeholder="Name *"
              required
              className="w-full px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
            />
            <input
              type="country"
              name="country"
              // value={formData.country}
              // onChange={handleChange}
              placeholder="Country"
              className="w-full px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
            />
            <input
              type="tel"
              name="phone"
              // value={formData.phone}
              // onChange={handleChange}
              placeholder="Phone number *"
              required
              className="w-full px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
            />
            <textarea
              name="details"
              // value={formData.details}
              // onChange={handleChange}
              placeholder="Enter your Query / Details"
              rows={4}
              required
              className="w-full px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
            />

            <button
              type="submit"
              className="w-full bg-[#133950] text-white py-2 px-4 rounded"
              // disabled={status === "loading"}
            >
              Submit
            </button>

            {/* {status === "success" && (
              <p className="text-green-600 mt-2">
                Request submitted successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-2">
                Something went wrong. Try again.
              </p>
            )} */}
          </form>

          {/* Contact info */}
          {/* <div className="mt-8 text-xs flex flex-col md:flex-row items-center gap-4 md:gap-10 text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <Phone
                size={15}
                className="text-darkGreen font-semibold"
                fill="darkGreen"
              />
              <div className="flex flex-col items-start">
                <span className="text-darkGreen text-sm font-semibold">
                  Phone
                </span>
                <span className="text-gray-500 font-semibold">
                  2222 4444 8685
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MailOpen size={15} className="text-darkGreen" fill="darkGreen" />
              <div className="flex flex-col items-start">
                <span className="text-darkGreen text-sm font-semibold">
                  Email
                </span>
                <span className="text-gray-500 font-semibold">
                  orders@RGCreation.com
                </span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Right side - Image */}
        <div className="w-[90%] mx-auto relative md:w-1/2  ">
          <div className="absolute bg-[#333d49] right-0 h-full w-1/2 z-10"></div>
          <div className="relative w-[70%] md:w-[77%] mx-auto h-[77%]  m-20 z-20">
            <img
              src="/rg-logo-frame.jpg" // Replace with your actual image
              alt="Top Construction company"
              className="object-cover w-full h-full  rounded-sm "
            />
          </div>
        </div>
      </div>
      
          
      <FAQContact />
      
      {/* <Contact className="pt-0 pb-16" /> */}
      {/* <div className="w-full flex_center h-max">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.390823710961!2d55.2927915!3d25.2645181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433fc32c0151%3A0xc280b5c494aa3428!2sAl%20Souq%20Al%20Kabeer%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2snp!4v1711382400000!5m2!1sen!2snp"
          loading="lazy"
          className="w-full h-[60vh]"
          allowFullScreen
        ></iframe>
      </div> */}
    </main>
    </>
  );
}
