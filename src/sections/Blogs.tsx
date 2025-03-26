import SectionHeader from "../components/SectionHeader";
import blog1 from "@/assets/images/blog1.jpg";
import blog2 from "@/assets/images/blog2.jpg";

import blog3 from "@/assets/images/blog3.jpg";

import BlogCard from "@/components/BlogCard";

const blogs = [
  {
    image: blog1,
    title: "Why 24K Gold is the Best Choice for Wholesale & Retail Buyers",
    date: "January 2, 2025",
    name: "Star Laxmi",
    miniDescription:
      "24K gold, known for its 99.9% purity, is highly valued in both wholesale and retail markets. Its demand continues to rise, making it a prime investment choice.",
  },
  {
    image: blog2,
    title: "The Growing Demand for Gold in Wholesale Markets",
    date: "March 2, 2025",
    name: "Star Laxmi",
    miniDescription:
      "Gold has been a prized commodity for centuries, and its demand in wholesale markets is growing rapidly. Investors see it as a stable asset amid economic uncertainty.",
  },
  {
    image: blog3,
    title: "The Benefits of Investing in Gold Bullion",
    date: "Feburary 2, 2025",
    name: "Star Laxmi",
    miniDescription:
      "Gold bullion is a safe and lucrative investment option, offering wealth preservation, high liquidity, and protection against inflation in global markets.",
  },
];

export default function Blogs() {
  return (
    <section className="container w-[90%] md:w-full flex_center flex-col lg:py-20 font-jakarta py-10 lg:gap-12 gap-6">
      <SectionHeader
        smallTitle="Blogs & Articles"
        title="Stay up to date on our blogs"
      />
      <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-6">
        {blogs.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              name={blog.name}
              image={blog.image}
              date={blog.date}
              title={blog.title}
              miniDescription={blog.miniDescription}
            />
          );
        })}
      </div>
    </section>
  );
}
