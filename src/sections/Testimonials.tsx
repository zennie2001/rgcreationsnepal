import SectionHeader from "../components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import blogImage from "../assets/images/blogImage.jpg";

const blogs = [
  {
    image: blogImage,
    name: "Anjali K.",
    miniDescription: `I had the most amazing experience shopping at Start Laxmi Jewellery! The designs are unique, and the quality of the pieces is unmatched. I bought a custom-made necklace for my wedding, and it turned out even more beautiful than I imagined. The staff was incredibly helpful and made sure every detail was perfect.`,
  },
  {
    image: blogImage,
    name: "Ravi S.",
    miniDescription: `Start Laxmi Jewellery is my go-to place for all things elegant and timeless. From exquisite traditional pieces to trendy modern designs, their collection is perfect for any occasion. I recently purchased a pair of earrings, and I’ve received so many compliments! Highly recommend!`,
  },
  {
    image: blogImage,
    name: "Maya L.",
    miniDescription: `I’ve been a loyal customer of Start Laxmi Jewellery for years, and they never disappoint. The quality of their gold and diamond jewellery is exceptional, and the customer service is top-notch. Whether it's a gift for someone special or an addition to my own collection, I know I’m getting the best!`,
  },
  {
    image: blogImage,
    name: "Sandeep P.",
    miniDescription: `Shopping at Start Laxmi Jewellery is always a great experience. The staff takes the time to understand your preferences and helps you choose the perfect piece. I bought a wedding ring here, and it was everything I had hoped for—timeless, elegant, and beautifully crafted.`,
  },
];

export default function Testimonials() {
  return (
    <section className="flex_center flex-col w-full py-24 font-jakarta  gap-12 bg-[#F5FBFF]">
      <SectionHeader
        smallTitle="Client Testimonials"
        title="Testimonials that inspire confidence"
      />
      <div className="testimonials w-full flex_center gap-8 px-4">
        {blogs.map((blog, index) => {
          return <TestimonialCard object={blog} key={index} />;
        })}
      </div>
      <div className="buttons flex_center gap-2">
        <button className="size-3 bg-text/40 rounded-full overflow-hidden"></button>
        <button className="size-3 bg-text/40 rounded-full overflow-hidden"></button>
        <button className="size-4 bg-tertiary rounded-full overflow-hidden"></button>
        <button className="size-3 bg-text/40 rounded-full overflow-hidden"></button>
        <button className="size-3 bg-text/40 rounded-full overflow-hidden"></button>
      </div>
    </section>
  );
}
