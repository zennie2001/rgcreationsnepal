import React from "react";
import { FaMoneyBillWave } from "react-icons/fa"; // Replace with your actual SVG if available

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
    <main className=" bg-[#0D1E23]">
      <section className="flex flex-col container md:flex-row w-full">
        {/* Left Side */}
        <div className=" text-white py-10 md:w-1/3 flex flex-col justify-center items-start space-y-6">
          <h2 className="text-3xl font-semibold">
            Our <br />
            Advantages
          </h2>
          <button className="bg-[#FF5A1F] hover:bg-[#e54b10] text-white px-6 py-3 rounded transition">
            Learn More
          </button>
        </div>

        {/* Right Side */}
        <div className="bg-[#FF5A1F] text-white p-10 md:w-2/3 grid md:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div key={index} className="flex flex-col items-start space-y-4">
              <FaMoneyBillWave className="text-white text-3xl" />
              <h3 className="text-lg font-semibold leading-snug">
                {item.title}
              </h3>
              <p className="text-sm opacity-90">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Categories;
