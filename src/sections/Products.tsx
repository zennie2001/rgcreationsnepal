"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import products from "@/constants/products";
import Link from "next/link";
import { useCartStore } from "@/app/(home)/store/useCartStore";
import { toast } from "react-toastify";

// Filter tabs
const filterTabs = [
  { id: "featured", label: "Featured Products" },
  { id: "new", label: "New Arrivals" },
  { id: "bestseller", label: "On Sale" },
];

const Products = () => {
  const formatSlug = (name: string) => name.toLowerCase().replace(/ /g, "-");
  const [activeFilter, setActiveFilter] = useState("featured");
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: any) => {
    addItem(product);
    toast.success("Added to cart!");
  };

  return (
    <section className="w-full bg-primary text-white pt-8 md:pt-16  px-6 md:px-12 lg:px-16">
      <div className="container mx-auto md:text-left text-center">
        {/* Product Range Heading */}
        <div className="mb-12">
          <p className="text-darkGreen text-base md:text-lg mb-2">
            Product Range
          </p>
          <h2 className="text-xl md:text-3xl text-black lg:text-4xl xl:text-5xl font-medium ">
            Engineered to Cut, Styled to
            <br />
            Stand Out, Ready for Anything
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center -mt-8 md:-mt-4 md:justify-end gap-3 mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 md:px-6 md:py-2 text-sm md:text-lg rounded-2xl transition-colors ${
                activeFilter === tab.id
                  ? "bg-darkGreen text-white"
                  : "bg-gray-200 text-black hover:bg-gray-500"
              }`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="bg-white border-2 border-darkGreen rounded-2xl overflow-hidden"
            >
              {/* Product Image */}
              <Link href={`/collections/${formatSlug(product.name)}`}>
                <div className="relative">
                  <img
                    src={product.image.src}
                    alt={product.name}
                    className="w-full aspect-square object-contain "
                  />
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-4">
                <Link href={`/collections/${formatSlug(product.name)}`}>
                <p className="text-gray-500 text-sm">{product.brand}</p>
                <h3 className="font-medium text-black mt-1 mb-4 line-clamp-2">
                  {product.name}
                </h3>
                </Link >

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-black font-bold">
                    ${product.salePrice.toFixed(2)}
                  </span>
                  <span className="text-gray-500 line-through text-sm">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-white bg-[#1c1c1c] px-2 py-1 rounded-sm text-sm">
                    -{product.discount}%
                  </span>
                </div>

                {/* Buy Now Button */}
                <div className="flex mt-4 gap-2">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="bg-gray-700 hover:bg-gray-600  text-white py-2 px-4 rounded-xl flex-grow"
                  >
                    Add To Cart
                  </button>
                  {/* Wishlist Button */}
                  <button className=" bg-darkGreen w-12 h-12   flex items-center justify-center rounded-xl">
                    <Heart size={20} color="white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          <div className="w-8 h-2 rounded-full bg-darkGreen"></div>
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Products;
