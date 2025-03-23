// import About from "@/sections/About";
import Blogs from "@/sections/Blogs";
import Categories from "@/sections/Categories";
import Collection from "@/sections/Collection";
// import Contact from "@/sections/Contact";
// import GlobalDestination from "@/sections/GlobalDestination";
import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
// import Services from "@/sections/Services";
// import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Categories />
      <Collection />
      <Products />
      {/* <Services />
      <About /> */}
      {/* <GlobalDestination />
      <Testimonials />
      <Contact /> */}
      <Blogs />
    </main>
  );
}
