import About from "@/sections/About";
import Blogs from "@/sections/Blogs";
import Categories from "@/sections/Categories";
import Collection from "@/sections/Collection";
// import Contact from "@/sections/Contact";
// import GlobalDestination from "@/sections/GlobalDestination";
import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
// import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";

import NewsLetter from "@/sections/NewsLetter";
import Youtube from "@/sections/Blog";
import Deals from "@/sections/Deals";
import FAQ from "@/app/(home)/faqs/page";
import BlogDesign from "@/sections/Blog";
import Video from "@/sections/Video";
import SEOContent from "@/components/SEOContent";


export const metadata = {
  title: "RG Creations - Top Architecture and Construction Company",
  description:
    "RG Creations Nepal Pvt. Ltd. is a top construction and architecture company in Nepal, specializing in luxury resorts, banquet halls, clubs, and more.",
};

export default function Home() {
  return (
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
  );
}
