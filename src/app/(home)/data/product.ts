import { v4 as uuidv4 } from "uuid";
import img1 from "@/assets/images/bandles/Gold Bangles-3.jpg";
import img2 from "@/assets/images/rings/gold-rings-2.jpg";
import img3 from "@/assets/images/rings/gold-rings-4.jpg";
import img4 from "@/assets/images/bracelets/Gold Bracelets-10.jpg";
import img5 from "@/assets/images/pendants/Gold Pendants-2.jpg";
import img6 from "@/assets/images/rings/gold-rings-6.jpg";
import img7 from "@/assets/images/bracelets/Gold Bracelets-9.jpg";
import img8 from "@/assets/images/bandles/Gold Bangles-5.jpg";
import img9 from "@/assets/images/bandles/Gold Bangles-8.jpg";
import img10 from "@/assets/images/bandles/Gold Bangles-9.jpg";
import img11 from "@/assets/images/pendants/gold-necklace-4.jpg";
import img12 from "@/assets/images/pendants/gold-necklace.jpg";


export const products = [
    {
      images: [img1,img2,img3,img4,img1,img8,img3,img4],
      image:img1,
      product: "Diamond Necklace",
      price: 5000,
      desc: "A stunning diamond-studded necklace, perfect for special occasions.",
      id: uuidv4(),
    },
    {
      images: [img1,img2,img3,img4,img1,img8,img3,img4],
      image:img2,
      product: "Gold Engagement Ring",
      price: 3500,
      desc: "A timeless 18K gold engagement ring with a brilliant-cut diamond.",
      id: uuidv4(),
    },
    {
      images: [img1,img2,img3,img4,img1,img8,img3,img4],
      image:img3,
      product: "Silver Charm Bracelet",
      price: 1200,
      desc: "A delicate silver bracelet adorned with personalized charms.",
      id: uuidv4(),
    },
    {
      images: [img1,img2,img3,img4,img1,img8,img3,img4],
      image:img4,
      product: "Platinum Wedding Band",
      price: 4000,
      desc: "A sleek and elegant platinum wedding band for a lifetime commitment.",
      id: uuidv4(),
    },
    {
      images: [img1,img2,img3,img4,img1,img8,img3,img4],
      image:img5,
      product: "Gemstone Anklet",
      price: 900,
      desc: "A beautiful anklet embedded with vibrant gemstones.",
      id: uuidv4(),
    },
    {
      images: [img10,img2,img3,img4,img1,img8,img3,img4],
      image:img6,
      product: "Gold Hoop Earrings",
      price: 1800,
      desc: "Classic gold hoop earrings that complement any outfit.",
      id: uuidv4(),
    },
    {
      images:[img1,img10,img3,img4,img1,img8,img3,img4],
      image:img7,
      product: "Sapphire Pendant Necklace",
      price: 2700,
      desc: "A breathtaking sapphire pendant set in white gold.",
      id: uuidv4(),
    },
    {
      images: [img1,img9,img3,img4,img1,img8,img3,img4],
      image:img8,
      product: "Pearl Drop Earrings",
      price: 1600,
      desc: "Elegant pearl earrings for a sophisticated look.",
      id: uuidv4(),
    },
    {
      images: [img1,img2,img3,img4,img1,img8,img3,img4],
      image:img9,
      product: "Diamond Tennis Bracelet",
      price: 6000,
      desc: "A luxurious diamond tennis bracelet for ultimate glamour.",
      id: uuidv4(),
    },
    {
      images: [img1,img8,img3,img4,img1,img8,img3,img4],
      image:img10,
      product: "Rose Gold Infinity Ring",
      price: 2200,
      desc: "A romantic rose gold infinity ring symbolizing eternal love.",
      id: uuidv4(),
    },
    {
      images: [img1,img6,img3,img4,img1,img8,img3,img4],
      image:img11,
      product: "Emerald Cuff Bracelet",
      price: 3200,
      desc: "A bold cuff bracelet featuring radiant emerald stones.",
      id: uuidv4(),
    },
    {
      images: [img11,img2,img3,img4,img1,img8,img3,img4],
      image:img12,
      product: "Platinum Choker Necklace",
      price: 4500,
      desc: "A sleek and modern platinum choker necklace for contemporary style.",
      id: uuidv4(),
    },
  ];