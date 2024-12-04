import About from "@/sections/About";
import Blogs from "@/sections/Blogs";
import Contact from "@/sections/Contact";
import GlobalDestination from "@/sections/GlobalDestination";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <About />
      <GlobalDestination />
      <Testimonials />
      <Contact />
      <Blogs />
    </main>
  );
}
