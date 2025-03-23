import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import blogImage from "@/assets/images/blogImage.jpg";
import BlogCard from "@/components/BlogCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import blog1 from "@/assets/images/blog1.jpg";
import blog2 from "@/assets/images/blog2.jpg";

import blog3 from "@/assets/images/blog3.jpg";

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
    <main className="w-full overflow-hidden">
      <PageHeader link="/blogs" title="Blogs" />
      <section className="flex_center flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12">
        <SectionHeader
          smallTitle="Blogs & Articles"
          title="Stay up to date on our blogs"
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 gap-y-16">
          {blogs.map((blog, index) => {
            return (
              <BlogCard
                key={index}
                image={blog.image}
                date={blog.date}
                title={blog.title}
                miniDescription={blog.miniDescription}
                name={blog.name}
              />
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
            <IoIosArrowBack />
          </button>
          <button className="flex_center p-2 rounded-md text-sm size-10">
            1
          </button>
          <button className="flex_center p-2 rounded-md text-sm size-10">
            2
          </button>
          <p className="flex_center p-2 rounded-md text-sm size-10">....</p>
          <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
            5
          </button>
          <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
            <IoIosArrowForward />
          </button>
        </div>
      </section>
    </main>
  );
}
