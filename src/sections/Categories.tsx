import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";

const advantages = [
  {
    title: "Unmatched Variety Across Categories",
    description:
      "Turning your investments into cash flows and planning to bless future generations.",
  },
  {
    title: "Discounts for Military and First Responders",
    description:
      "Turning your investments into cash flows and planning to bless future generations.",
  },
  {
    title: "Customizable to Your Preferences",
    description:
      "Turning your investments into cash flows and planning to bless future generations.",
  },
];

const Categories = () => {
  return (
    <main className="w-full mt-10 bg-darkGray">
      <section className="grid grid-cols-1 md:grid-cols-4 container w-full">
        {/* Left Side - 1/4 width, dark */}
        <div className=" text-white py-10 flex flex-col justify-center items-center md:items-start space-y-6">
          <h2 className="text-3xl text-center md:text-left font-semibold">
            Our <br />
            Advantages
          </h2>
          <button className="bg-darkGreen text-white px-6 py-3 rounded transition">
            Learn More
          </button>
        </div>

        {/* Right Side - 3/4 width, orange in 3 columns */}
        {advantages.map((item, index) => (
          <div
            key={index}
            className="bg-darkGreen text-white p-8 flex flex-col items-center md:items-start space-y-4"
          >
            <FaMoneyBillWave className="text-white text-3xl" />
            <h3 className="text-lg text-center md:text-left font-semibold leading-snug">{item.title}</h3>
            <p className="text-xs md:text-sm text-center md:text-left opacity-90">{item.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Categories;
