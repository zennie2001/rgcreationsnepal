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
  title: "No.1 Architecture Firm Nepal | Best Architects & Designers",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
     keywords: [
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
    "Top 10 architecture consultants in Nepal"
  ]
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
        "url": "https://www.rgcreationsnepal.com",
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
          "Top 10 architecture consultants in Nepal"
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
