import React from "react";
import BlogCard from "@/components/BlogCard"; // This will be imported from a separate file
import Link from "next/link";

function BlogsSection() {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      image: "/blog-image.jpg",
      category: "News",
      title: "10 Best Rescue Knives You Can Buy in 2024",
      description:
        "Disaster can strike anytime, anywhere. Your car might suddenly careen off the road before landing...",
      author: "Olivia Rhye",
      date: "20 Jan 2022",
    },
    {
      id: 2,
      image: "/blog-image.jpg",
      category: "News",
      title: "10 Best Rescue Knives You Can Buy in 2024",
      description:
        "Disaster can strike anytime, anywhere. Your car might suddenly careen off the road before landing...",
      author: "Olivia Rhye",
      date: "20 Jan 2022",
    },
    {
      id: 3,
      image: "/blog-image.jpg",
      category: "News",
      title: "10 Best Rescue Knives You Can Buy in 2024",
      description:
        "Disaster can strike anytime, anywhere. Your car might suddenly careen off the road before landing...",
      author: "Olivia Rhye",
      date: "20 Jan 2022",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-black to-neutral-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
          <div>
            <p className="text-secondary text-center md:text-left mb-2">
              Blogs
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-center md:text-left text-white">
              The Edge Report: Stories, Tips & Sharp Talk
            </h2>
          </div>
         
            <Link href="/blogs" className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-all">
              Learn More
            </Link>
          
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}

// This is just the interface for the blog card that will be imported
// The actual implementation will be in a separate file
export default BlogsSection;
