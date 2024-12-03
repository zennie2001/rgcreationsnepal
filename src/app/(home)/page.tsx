import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <About />
    </main>
  );
}
