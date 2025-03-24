"use client";
import PageHeader from "@/components/PageHeader";
import { products } from "../data/product";
import ProductCard from "@/components/ProductCard";
import { ChevronDown, ChevronRight, LayoutGrid } from "lucide-react";
import { useState } from "react";

import Link from "next/link";
import { Grid } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const categories = [
  {
    label: "Necklaces",
    path: "/destination",
    subMenu: [
      { label: "Gold Necklace", path: "/product" },
      { label: "Silver Necklace", path: "/product" },
    ],
  },
  {
    label: "Bracelets",
    path: "/faqs",
    subMenu: [
      { label: "Gold", path: "/gold" },
      { label: "Silver", path: "/silver" },
      { label: "Diamond", path: "/diamond" },
      { label: "Platinum", path: "/platinum" },
      { label: "Gemstone", path: "/gemstone" },
    ],
  },
  {
    label: "Rings",
    path: "/gallery",
    subMenu: [
      { label: "Gold", path: "/gold" },
      { label: "Silver", path: "/silver" },
      { label: "Diamond", path: "/diamond" },
      { label: "Platinum", path: "/platinum" },
      { label: "Gemstone", path: "/gemstone" },
    ],
  },
  {
    label: "Earrings",
    path: "/scholarship-list",
    subMenu: [
      { label: "Gold", path: "/gold" },
      { label: "Silver", path: "/silver" },
      { label: "Diamond", path: "/diamond" },
      { label: "Platinum", path: "/platinum" },
      { label: "Gemstone", path: "/gemstone" },
    ],
  },
  { label: "Bangles", path: "/testimonials" },
  { label: "Pendants", path: "/visa-acceptance" },
  { label: "Chains", path: "/studentcounselling" },
  { label: "Anklets", path: "/scholarship-assistance" },
  { label: "Nose Pins", path: "/message-from-ceo" },
  { label: "Cufflinks", path: "/holiday-list" },
  { label: "Jewelry Sets", path: "/about" },
  { label: "Gold Coin & Bullion", path: "/blogs" },
];

export default function product() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleSubMenu = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };
  return (
    <main className="w-full ">
      <PageHeader link="/product" title="Our Products" />
      <section className="pt-10 bg-[	#F5F5F5]">
        <SectionHeader
          title="Tailored Products To Meet your Custom Needs"
          smallTitle="Our Products"
          className="mb-10"
        />
        <div className="container w-full flex ">
          <div className="w-[30%]">
            <div className="mb-2 bg-white me-4 p-4 rounded-sm shadow-lg md:min-w-80">
              <div className="flex gap-4">
                <LayoutGrid color="#ef001f" size={35} />
                <span className="font-semibold text-2xl">Categories</span>
              </div>
              <hr className="mt-3 mb-1 border-2 border-[#ecc96b]" />
              <ul>
                {categories.map((item, index) => (
                  <li key={index} className="w-full">
                    <div
                      onClick={() => toggleSubMenu(item.label)}
                      className="cursor-pointer flex items-center justify-between p-2 hover:bg-[#ef001f] text-gray-600 hover:text-white rounded-sm"
                    >
                      <Link href={item.path} className="font-semibold">
                        {item.label}
                      </Link>
                      {item.subMenu &&
                        (openCategory === item.label ? (
                          <ChevronDown size={18} />
                        ) : (
                          <ChevronRight size={18} />
                        ))}
                    </div>
                    {openCategory === item.label && item.subMenu && (
                      <ul className="pl-6 transition-all list-disc duration-300">
                        {item.subMenu.map((sub, subIndex) => (
                          <li
                            key={subIndex}
                            className="p-1 me-20 text-gray-600 font-semibold hover:text-white hover:bg-[#ef001f] rounded-sm"
                          >
                            <Link href={sub.path}>{sub.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[70%] h-full">
            <div className="grid lg:grid-cols-3 md:grid-cols-2  mt-[-16px] sm:grid-cols-2 gap-4 h-full overflow-y-auto">
              {products.map(({ image, product, price, desc, id }) => (
                <ProductCard
                  image={image.src}
                  product={product}
                  price={price}
                  desc={desc}
                  id={id}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
