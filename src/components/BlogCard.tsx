import React from "react";

function BlogCard({ blog }: any) {
  // Function to create URL-friendly slug from title
  const createSlug = (title: any) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <section className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl">
      <div className="bg-neutral-800 m-4 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-secondary/50 group">
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
          <p className="text-sm text-gray-400 mb-2">{blog.category}</p>

          <a
            href={`/blogs/${createSlug(blog.title)}`}
            className="group flex items-start gap-2"
          >
            <h3 className="text-white text-lg font-medium leading-tight mb-3 group-hover:text-secondary transition-colors">
              {blog.title}
            </h3>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-secondary mt-1 transform transition-transform group-hover:translate-x-1"
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

          <p className="text-sm text-gray-400 mb-4">{blog.description}</p>

          <div className="flex items-center gap-3 mt-6">
            <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden">
              <img
                src="/api/placeholder/32/32"
                alt={blog.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-white">{blog.author}</p>
              <p className="text-xs text-gray-400">{blog.date}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogCard;
