import SectionHeader from "@/components/SectionHeader";
import React from "react";

const collections = [
  {
    imgSrc: "/goldbar.jpg",
    title: "Gold Bars",
    type: "tall",
  },
  {
    imgSrc: "/new-rings.jpg",
    title: "Rings",
    type: "short",
  },
  {
    imgSrc: "/h4.jpg",
    title: "NECKLACE",
    type: "short",
  },
  {
    imgSrc: "/earrings.jpg",
    title: "Gold Jewellery Making Charges",
    discount: "50% Off",
    type: "tall",
  },
];

const Collection = () => {
  return (
    <section className="w-full flex_center flex-col lg:gap-12 gap-6 lg:px-14 pt-10 md:pt-20  px-1 font-jakarta">
      <SectionHeader
        title="Tailored Products To Meet your Custom Needs"
        smallTitle="Our Collections"
      />
      <div className="mt-4 container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-8">
          {/* Left Side - Gold Bars */}
          <div className="flex flex-col items-center group overflow-hidden rounded-lg lg:items-start">
            <div className="relative w-full lg:w-auto h-[500px]">
              <img
                src={collections[0].imgSrc}
                alt={collections[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2">
                <h2 className="text-lg font-medium text-red-500">
                  {collections[0].title}
                </h2>
              </div>
            </div>
          </div>

          {/* Middle Section - Rings & Necklace */}
          <div className="flex flex-col gap-8  overflow-hidden rounded-lg">
            {collections.slice(1, 3).map((item, index) => (
              <div key={index} className="relative w-full group h-[240px]">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2">
                  <h2 className="text-lg font-medium text-red-500">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - 50% Off Earrings */}
          <div className="flex flex-col items-center lg:items-end group overflow-hidden rounded-lg ">
            <div className="relative w-full lg:w-auto h-[500px]">
              <img
                src={collections[3].imgSrc}
                alt={collections[3].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 w-48 h-48 rounded-full flex flex-col items-center justify-center">
                <h2 className="text-base text-center">
                  {collections[3].title}
                </h2>
                <p className="text-2xl font-bold text-red-500">
                  {collections[3].discount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
