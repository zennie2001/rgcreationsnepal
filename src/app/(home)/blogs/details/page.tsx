import React from "react";
import { Share2, MessageCircle, User } from "lucide-react";
import blacksmith from "@/assets/images/blacksmith.jpg";
import { blogs } from "@/constants/products";
import BlogCard from "@/components/BlogCard";

const BlogPost = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-6">
          {/* Main Content */}
          <div className="lg:col-span-4">
            <article className="bg-white rounded-lg shadow-sm p-8">
              <h1 className="text-3xl font-bold text-darkGreen mb-6">
                10 Best Rescue Knives You Can Buy in 2024
              </h1>

              {/* Featured Image */}
              <div className="mb-8">
                <img
                  src={blacksmith.src}
                  alt="Hands using a rescue knife on wood"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  augue elit, eleifend non mauris et, semper dictum nunc. Cras
                  et ante dui. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis augue elit, eleifend non mauris et,
                  semper dictum nunc. Vestibulum ut ipsum sit ac ante varius,
                  velit ut cursus ipsum. Vivamus magna risus eget imperdiet
                  torquent. Aliquam massa ipsum, gravida finibus eget, ut
                  gravida efficitur, convallis. Mauris enim lorem cursus et nunc
                  magna mauris imperdiet risus magna aliquam. Pellentesque sit
                  amet condimentum magna ut nulla mauris mauris, rutrum at
                  vivamus nulla pharetra. Suspendisse potenti. Mauris gravida
                  lorem dapibus nul molestie, et finibus euismod.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  augue elit, eleifend non mauris et, semper dictum nunc. Cras
                  et ante dui. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis augue elit, eleifend non mauris et,
                  semper dictum nunc. Vestibulum ut ipsum sit ac ante varius,
                  velit ut cursus ipsum. Vivamus magna risus eget imperdiet
                  torquent. Aliquam massa ipsum, gravida finibus eget, ut
                  gravida efficitur, convallis. Mauris enim lorem cursus et nunc
                  magna mauris imperdiet risus magna aliquam. Pellentesque sit
                  amet condimentum magna ut nulla mauris mauris, rutrum at
                  vivamus nulla pharetra. Suspendisse potenti. Mauris gravida
                  lorem dapibus nul molestie, et finibus euismod.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  augue elit, eleifend non mauris et, semper dictum nunc. Cras
                  et ante dui. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis augue elit, eleifend non mauris et,
                  semper dictum nunc. Vestibulum ut ipsum sit ac ante varius,
                  velit ut cursus ipsum. Vivamus magna risus eget imperdiet
                  torquent. Aliquam massa ipsum, gravida finibus eget, ut
                  gravida efficitur, convallis. Mauris enim lorem cursus et nunc
                  magna mauris imperdiet risus magna aliquam. Pellentesque sit
                  amet condimentum magna ut nulla mauris mauris, rutrum at
                  vivamus nulla pharetra. Suspendisse potenti. Mauris gravida
                  lorem dapibus nul molestie, et finibus euismod.
                </p>
              </div>

              {/* Author and Share Section */}
              <div className="border-t border-gray-200 pt-6 mt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Author</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-600">2 min read</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Share this</span>
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">f</span>
                      </button>
                      <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">t</span>
                      </button>
                      <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <Share2 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 h-auto">
            <div className="">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-darkGreen mb-4">
                  Related Blogs
                </h3>
                {blogs.slice(0, 2).map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Comments Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Comments</h2>

          {/* Comment Form */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <textarea
              placeholder="Your Comment"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
              Comment
            </button>
          </div>

          {/* Existing Comments */}
          <div className="space-y-6">
            {[1, 2, 3].map((comment) => (
              <div key={comment} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis augue elit, eleifend non mauris et, semper dictum
                      nunc.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Jane</span>
                      <button className="hover:text-gray-700">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
