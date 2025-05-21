import React from "react";

function BlogCard({ blog }: any) {
  // Function to create URL-friendly slug from title
  const createSlug = (title: any) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <section className="bg-gradient-to-r from-[#888888] to-[#9e9e9e] rounded-xl">
      <div className="bg-gradient-to-r to-[#d9d9d9] from-[#ffffff] m-4 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-darkGreen/50 group">
        <div className="relative">
          {blog?.image && (
            <img
              src={blog.image}
              alt={blog.title || "Blog image"}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>

        <div className="p-6">
          {/* <p className="text-sm text-black mb-2">{blog.category}</p> */}

          <a
            href={`/blogs/${createSlug(blog.title)}`}
            className="group flex items-start gap-4"
          >
            <h3 className="text-darkGreen text-lg font-medium leading-tight mb-3 group-hover:text-darkGreen transition-colors">
              {blog.title}
            </h3>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-darkGreen mt-1 transform transition-transform group-hover:translate-x-1"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <p className="text-sm text-black mb-4">{blog.description}</p>

          <div className="flex items-center gap-3 mt-6">
            <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden">
              <img
                src="/api/placeholder/32/32"
                alt={blog.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-black">{blog.author}</p>
              <p className="text-xs text-black">{blog.date}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogCard;
