import React from "react";
// import { motion } from "framer-motion";

const categories = [
  { name: "Necklaces", image: "necklace.jpg" },
  { name: "Bracelets", image: "bracelet.jpg" },
  { name: "Rings", image: "ring.jpg" },
  { name: "Earrings", image: "earring.jpg" },
  { name: "Bangles", image: "bangle.jpg" },
  { name: "Pendants", image: "pendents.jpg" },
  { name: "Chains", image: "chain.jpg" },
  { name: "Anklets", image: "anklets.jpg" },
];

const Categories = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-4 grid-cols-2 lg:grid-cols-8  py-[2rem] gap-y-[40px]">
          {categories.map((category, index) => (
            <div
              key={index}
              //   initial={{ opacity: 0, y: 50 + index * 20 }}
              //   whileInView={{ opacity: 1, y: 0 }}
              //   transition={{ duration: 1 + index * 0.1 }}
              //   viewport={{ once: true }}
              className="flex flex-col justify-center items-center md:gap-[30px] gap-[14px]  text-white cursor-pointer"
            >
              <img
                src={`/${category.image}`}
                alt={category.name}
                className="w-[94px] h-[94px] rounded-full border-2 border-black"
              />
              <p className="md:text-[18px] text-[12.56px] md:leading-[21.09px] text-gray-700 leading-[13.55px] tracking-[0.02em] font-bold text-center">
                {category.name.split(" ").map((word, i) => (
                  <span key={i}>
                    {word} <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#EDEDED] md:mt-[21px] mt-[12px]"></div>
    </div>
  );
};

export default Categories;
