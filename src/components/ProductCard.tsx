import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product, image, price, desc, id }: any) => {
  // Function to convert product name to slug format
  const formatSlug = (name: string) => name.toLowerCase().replace(/ /g, "-");

  return (
    <div className="bg-white p-4 rounded-sm shadow-lg group">
      {/* Wrap image in a Link */}
      <Link href={`/product/${formatSlug(product)}`} passHref>
        <div className="cursor-pointer flex justify-center group-hover:scale-105 transition-transform">
          <Image
            src={image}
            alt={product}
            width={200}
            height={200}
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
      </Link>

      <div className="mt-4 text-center">
        <h2 className="font-medium text-lg text-black">
          {product ?? "Product Name"}
        </h2>
        <p className="text-xl font-bold text-black mt-2">Rs. {price}</p>
        <p className="text-sm text-gray-500 mt-2">
          {desc ?? "Short product description."}
        </p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button className="text-semibold text-ascent-1 px-4 py-2 border-2 border-[#dda303] rounded-lg hover:bg-[#ef001f] hover:text-white transition">
          Add to Cart
        </button>
        {/* Wrap "Buy Now" button in a Link to the slug page */}
        <Link href={`/product/${formatSlug(product)}`} passHref>
          <button className="text-semibold text-ascent-1 px-4 py-2 border-2 border-[#dda303] rounded-lg hover:bg-[#ef001f] hover:text-white transition">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
