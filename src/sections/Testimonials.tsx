import SectionHeader from "../components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import blogImage from "../assets/images/john.png";

const blogs = [
  {
    image: blogImage,
    name: "Anjali K.",
    description: `I had the most amazing experience shopping at Start Laxmi Jewellery! The designs are unique, and the quality of the pieces is unmatched...`,
  },
  {
    image: blogImage,
    name: "Ravi S.",
    description: `Start Laxmi Jewellery is my go-to place for all things elegant and timeless. From exquisite traditional pieces to trendy modern designs...`,
  },
  {
    image: blogImage,
    name: "Maya L.",
    description: `I’ve been a loyal customer of Start Laxmi Jewellery for years, and they never disappoint. The quality of their gold and diamond jewellery...`,
  },
  {
    image: blogImage,
    name: "Sandeep P.",
    description: `Shopping at Start Laxmi Jewellery is always a great experience. The staff takes the time to understand your preferences...`,
  },
];

export default function Testimonials() {
  return (
    <main className="bg-black">
      <section className="container flex flex-col w-full py-24 font-jakarta  text-white gap-16">
        <div className="text-left">
          <p className="text-sm text-secondary text-center md:text-left font-semibold uppercase">
            Testimonials
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left font-bold mt-2 leading-snug">
            Trusted by Thousands.
            <br />
            Carried with Confidence.
          </h2>
        </div>

        <div className="w-full px-4 flex justify-center">
          <TestimonialCard
            name={blogs[0].name}
            description={blogs[0].description}
            image={blogs[0].image}
          />
        </div>

        <div className="flex items-center justify-center gap-10">
          <button className="text-white text-xl hover:text-secondary transition">
            ←
          </button>
          <div className="flex items-center gap-2">
            {blogs.map((_, index) => (
              <div
                key={index}
                className={`rounded-full ${
                  index === 0 ? "w-4 h-4 bg-secondary" : "w-3 h-3 bg-gray-600"
                }`}
              />
            ))}
          </div>
          <button className="text-white text-xl hover:text-secondary transition">
            →
          </button>
        </div>
      </section>
    </main>
  );
}
