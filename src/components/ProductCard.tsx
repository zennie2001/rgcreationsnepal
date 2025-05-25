import React from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartStore } from "@/app/(home)/store/useCartStore";

const ProductCard = ({ product, image, price, desc, id, viewMode }: any) => {
  const formatSlug = (name: string) => name.toLowerCase().replace(/ /g, "-");

  const { items: cart, addToCart } = useCartStore();

  const handleAddToCart = () => {
    const productToAdd = { image, name: product, price, desc, id };

    const itemExists = cart.some((item) => item.id === id);

    if (itemExists) {
      toast.info("Product already exists!!");
    } else {
      addToCart(productToAdd);
      toast.success("Product added to Cart");
    }
  };

  return viewMode === "grid" ? (
    <div className="bg-white p-4 rounded-sm shadow-lg group">
      <Link href={`/product/${formatSlug(product)}`}>
        <div className="cursor-pointer flex justify-center group-hover:scale-105 transition-transform">
          <Image
            src={image}
            alt={product}
            width={200}
            height={200}
            className="w-48 h-40 object-cover rounded-lg"
          />
        </div>
      </Link>

      <div className="mt-4 text-center">
        <h2 className="font-medium text-lg text-black">{product}</h2>
        <p className="text-xl font-bold text-black mt-2"> £. {price}</p>
        <p className="text-sm text-black mt-2">{desc}</p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handleAddToCart}
          className="text-semibold text-ascent-1 px-4 py-2 border-2 border-darkGreen rounded-lg hover:bg-darkGreen hover:text-white transition"
        >
          Add to Cart
        </button>
        <Link href={`/product/${formatSlug(product)}`} passHref>
          <button className="text-semibold text-ascent-1 px-4 py-2 border-2 border-darkGreen rounded-lg hover:bg-darkGreen hover:text-white transition">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="flex bg-white p-1 rounded-lg shadow-md group items-center gap-2 md:gap-10 overflow-hidden">
      <Image
        src={image}
        alt={product}
        width={200}
        height={200}
        className="w-20 h-20 lg:w-80 lg:h-72 object-cover group-hover:scale-105 rounded-lg"
      />
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{product}</h3>
        <p className="text-black">{desc}</p>
        <p className="text-gray-900 font-bold"> £. {price}</p>
        <div className="flex space-x-2 mt-2">
          <Link
            href="#"
            onClick={handleAddToCart}
            className="text-xs text-ascent-1 px-4 py-2 border-2 border-darkGreen rounded-lg hover:bg-darkGreen hover:text-white transition"
          >
            Add to Cart
          </Link>
          <Link href={`/product/${formatSlug(product)}`} passHref>
            <button className="text-xs text-ascent-1 px-4 py-2 border-2 border-darkGreen rounded-lg hover:bg-darkGreen hover:text-white transition">
              More Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
