import About from "@/sections/About";
import Categories from "@/sections/Categories";
import Collection from "@/sections/Collection";
// import Contact from "@/sections/Contact";
// import GlobalDestination from "@/sections/GlobalDestination";
import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
// import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import Deals from "@/sections/Deals";
import FAQ from "@/app/(home)/faqs/page";
import BlogDesign from "@/sections/Blog";
import Video from "@/sections/Video";
import SEOContent from "@/components/SEOContent";


export const metadata = {
  title: "RG Creations - Top Architecture Company Nepal",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};

export default function Home() {
  return (
    <>
    <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RG Creations Nepal",
        "url": "https://rgcreationsnepal.com",
        "logo": "https://rgcreationsnepal.com/logo.png",
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
          "Famous banquet design company Nepal"
        ],
        "description":
          "RG Creations Nepal is a leading architecture and banquet design firm in Kathmandu and nationwide, known for premium, award‑winning, elegant and trusted architectural and banquet design services.",
        "foundingDate": "2008",
        "founders": [
          {
            "@type": "Person",
            "name": "Ram Giri",
            "jobTitle": "Executive Chairman"
          }
        ],
        "location": {
          "@type": "PostalAddress",
          "streetAddress": "Baluwatar",
          "addressLocality": "Kathmandu",
          "addressRegion": "Bagmati Province",
          "addressCountry": "Nepal"
        },
        "foundingLocation": "Kathmandu, Nepal",
        "areaServed": "Nepal",
        "numberOfEmployees": "200+",
        "slogan":
          "We don’t just build spaces; we create lasting impressions.",
        "memberOf": ["Link World Tech (R&D hub, Shenzhen, China)"],
        "award": [
          "Award‑winning architecture company Nepal",
          "Award‑winning banquet design company Nepal"
        ]
      })
    }}
  />
    <main className="overflow-hidden">
  

      
      <SEOContent />
      <Hero />
      <Categories />

      

      <Products />
       <Collection />
      <About />
     <Video/>
      <BlogDesign />
      <Deals />
      <FAQ/>
      <Testimonials />
      {/* <Blogs /> */}

      {/* <NewsLetter />   */}
    </main>
    </>
  );
}
