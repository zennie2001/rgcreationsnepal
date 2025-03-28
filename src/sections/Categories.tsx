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
  { name: "Nose Pins", image: "earring.jpg" },
];

const Categories = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="w-full flex justify-evenly">
          <div className="grid sm:grid-cols-4 grid-cols-3 lg:grid-cols-9 md:ms-[-50px] py-[1rem] md:py-[2rem] gap-y-[14px] md:gap-y-[40px]">
            {categories.map((category, index) => (
              <div
                key={index}
                //   initial={{ opacity: 0, y: 50 + index * 20 }}
                //   whileInView={{ opacity: 1, y: 0 }}
                //   transition={{ duration: 1 + index * 0.1 }}
                //   viewport={{ once: true }}
                className="flex flex-col justify-center items-center overflow-hidden md:gap-[30px] mx-4 md:mx-10 gap-[14px] group w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full hover:border-tertiary transition-all duration-300 border-2 border-black  text-white cursor-pointer"
              >
                <img
                  src={`/${category.image}`}
                  alt={category.name}
                  className="object-cover group-hover:scale-110 transition-all duration-600"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#EDEDED] md:mt-[21px] mt-[12px]"></div>
    </div>
  );
};

export default Categories;
