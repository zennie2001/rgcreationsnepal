import React from "react";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const items = [
  {
    title: "Chains",
    image: "/chains/gold-chain.jpg",
    listings: "12938 Verified Listings",
  },
  {
    title: "Pendants",
    image: "/pendants/gold-necklace-6.jpg",
    listings: "1600 Products",
  },
  {
    title: "Necklace",
    image: "/pendants/gold-necklace-3.jpg",
    listings: "1200 Verified Listings",
  },
  {
    title: "Earrings",
    image: "/earings/gold-earrings-3.jpg",
    listings: "184520 Verified Listings",
  },
];

const Products = () => {
  return (
    <section className="w-full flex_center flex-col lg:gap-12 gap-6 lg:px-14 pt-20  px-4 font-jakarta">
      <SectionHeader
        title="Tailored Products To Meet your Custom Needs"
        smallTitle="Our Products"
      />
      <div className="container mx-auto px-4 pb-10 md:pb-0">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {items.map((item, index) => (
            <div key={index} className="cursor-pointer group w-full">
              {/* Image Section */}
              <div className="w-full h-[200px] md:h-[300px] border overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full rounded-md transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Text Section */}
              <div className="hidden sm:block mt-3">
                <p className="text-[16px] md:text-[18px] font-medium">
                  {item.title}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[14px]">{item.listings}</p>
                  <ArrowRight
                    color="#f65128"
                    size={30}
                    className="bg-gray-100 rounded-full p-1 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
