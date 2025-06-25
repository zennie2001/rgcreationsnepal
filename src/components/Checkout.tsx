"use client";
import { useCartStore } from "@/app/(home)/store/useCartStore";
import { useRouter } from "next/navigation";
import React from "react";

export default function Checkout() {
  const { items } = useCartStore();
  const shippingFee = 125;
  const navigate = useRouter();

  // Calculate subtotal inside the component
  const subTotal = items.reduce(
    (acc, item) => acc + item.salePrice * item.quantity,
    0
  );

  const handleProceedToCheckout = () => {
    navigate.push("/shipping");
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="flex justify-between text-gray-700">
        <span>Subtotal ({items.length} items)</span>
        <span>Rs. {subTotal}</span>
      </div>
      <div className="flex justify-between text-gray-700 mt-2">
        <span>Shipping Fee</span>
        <span>Rs. {shippingFee}</span>
      </div>
      <div className="flex mt-6 justify-between  text-gray-700">
        <span className="font-semibold text-xl">Total</span>
        <span className="font-semibold text-xl">
          Rs. {subTotal + shippingFee}
        </span>
      </div>
      <button
        onClick={handleProceedToCheckout}
        className="text-semibold text-ascent-1 px-4 my-4 py-2 border-2 border-darkGreen rounded-sm hover:bg-darkGreen hover:text-white transition"
      >
        Proceed To CheckOut
      </button>
    </div>
  );
}
