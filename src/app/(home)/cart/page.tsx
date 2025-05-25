"use client";
import React from "react";
import { useCartStore } from "@/app/(home)/store/useCartStore";
import Checkout from "@/components/Checkout";
import PageHeader from "@/components/PageHeader";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart } = useCartStore();

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  return (
    <main className="w-full bg-[#F5F5F5]">
      <PageHeader link="/cart" title="Cart" />
      <div className="w-full px-2 md:px-4 py-4 space-y-4 container min-h-screen overflow-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side */}
          <div className="w-full md:w-2/3 space-y-4">
            {items.length === 0 ? (
              <p className="text-center text-lg mt-11">Your cart is empty</p>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow-md gap-4"
                  >
                    {/* Image */}
                    <img
                      src={item.image?.src || item.image}
                      alt={item.name}
                      className="w-20 h-20 lg:w-60 lg:h-48 group-hover:scale-105 object-cover rounded-lg"
                    />

                    {/* Info + Quantity */}
                    <div className="flex-1 w-full">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="text-gray-500">{item.brand}</p>
                      <p className="text-gray-900 font-bold">
                        Rs. {item.salePrice}
                      </p>

                      <div className="flex items-center gap-4 mt-2">
                        <button
                          onClick={() =>
                            item.quantity > 1 &&
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className="font-semibold px-3 py-1 border-2 border-darkGreen rounded-sm hover:bg-darkGreen hover:text-white transition"
                        >
                          -
                        </button>
                        <span className="text-lg">{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="font-semibold px-3 py-1 border-2 border-darkGreen rounded-sm hover:bg-darkGreen hover:text-white transition"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-4 sm:mt-0 font-semibold px-4 py-2 border-2 border-darkGreen rounded-sm hover:bg-darkGreen hover:text-white transition"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/3 space-y-4">
            {items.length > 0 && (
              <>
                <button
                  onClick={() => clearCart()}
                  className="w-full  font-semibold px-4 py-2 border-2 border-darkGreen rounded-md hover:bg-darkGreen hover:text-white transition"
                >
                  Clear All
                </button>
                <Checkout />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
