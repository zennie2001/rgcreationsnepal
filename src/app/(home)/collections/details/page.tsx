"use client";
import { useState } from "react";
import { Star, StarHalf } from "lucide-react";
import knife from "@/assets/images/blade.png";
import b4 from "@/assets/images/b4.jpg";
import b2 from "@/assets/images/b2.jpg";
import FAQ from "../../faqs/page";
import NewsLetter from "@/sections/NewsLetter";
import Hero from "@/sections/Hero";

// TypeScript interfaces
interface ProductImage {
  src: string;
  alt: string;
}

interface Review {
  id: number;
  author: string;
  rating: number;
  verified: boolean;
  date: string;
  content: string;
}

// Mock data
const product = {
  id: 1,
  name: 'Benchmade 9400 Osborne Auto, 3.4" S30V Satin Blade, Green Aluminum Handle',
  brand: "Benchmade",
  originalPrice: 300,
  salePrice: 260,
  discount: 40,
  image: knife,
  images: [knife, b2, b4],
};

const reviews: Review[] = [
  {
    id: 1,
    author: "Samantha D.",
    rating: 4.5,
    verified: true,
    date: "August 14, 2023",
    content:
      "The OD/V Ultrainium C90T-7 is a versatile folding knife that combines style and functionality perfectly.",
  },
  {
    id: 2,
    author: "Alex M.",
    rating: 4,
    verified: true,
    date: "August 15, 2023",
    content:
      "The OD/V Ultrainium C90T-7 is a versatile folding knife that combines style and functionality perfectly.",
  },
  {
    id: 3,
    author: "Ethan R.",
    rating: 3.5,
    verified: true,
    date: "August 16, 2023",
    content:
      "The OD/V Ultrainium C90T-7 is a versatile folding knife that combines style and functionality perfectly.",
  },
  {
    id: 4,
    author: "Olivia P.",
    rating: 4,
    verified: true,
    date: "August 17, 2023",
    content:
      "The OD/V Ultrainium C90T-7 is a versatile folding knife that combines style and functionality perfectly.",
  },
];

// Color options
const bladeColors = [
  { id: 1, color: "bg-gray-700" },
  { id: 2, color: "bg-green-700" },
  { id: 3, color: "bg-blue-800" },
];

const handleColors = [
  { id: 1, color: "bg-gray-700" },
  { id: 2, color: "bg-green-700" },
  { id: 3, color: "bg-blue-800" },
];

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState("details");

  // Handle quantity change
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Render stars for ratings
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    // Add empty stars to reach 5
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-star-${i}`} className="w-4 h-4 text-yellow-400" />
      );
    }

    return stars;
  };

  return (
    <main className="overflow-hidden">
      <Hero />
      <section className="bg-black text-white min-h-screen">
        {/* Navigation */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm mb-6">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <span className="mx-2">›</span>
            <a href="#" className="hover:text-gray-400">
              Collection
            </a>
            <span className="mx-2">›</span>
            <span className="text-gray-400">Details</span>
          </div>

          {/* Product section */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Thumbnails column */}
            <div className="flex flex-row md:flex-col gap-4 md:w-24">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`border-2 ${
                    selectedImage === index
                      ? "border-secondary"
                      : "border-gray-700"
                  } rounded-lg cursor-pointer overflow-hidden`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={img.src}
                    alt={`Product thumbnail ${index + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main product image */}
            <div className="flex-1 bg-gray-900 rounded-lg p-4 flex items-center justify-center">
              <img
                src={product.images[selectedImage].src}
                alt={product.name}
                className="max-w-full max-h-80 object-contain"
              />
            </div>

            {/* Product details */}
            <div className="flex-1">
              <h1 className="text-xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">{renderStars(4.5)}</div>
                <span className="text-gray-400 text-sm">4.5/5</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-bold">${product.salePrice}</span>
                <span className="text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
                <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">
                  -{product.discount}%
                </span>
              </div>

              <p className="text-gray-400 mb-6">
                Benchmade 9400 Osborne Auto, 3.4" S30V Satin Blade, Green
                Aluminum Handle
              </p>

              {/* Color options */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>Blade Colors</span>
                  <span>Handle Colors</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    {bladeColors.map((option) => (
                      <div
                        key={option.id}
                        className={`w-6 h-6 rounded-full ${
                          option.color
                        } cursor-pointer ${
                          option.id === 1
                            ? "ring-2 ring-offset-2 ring-offset-black ring-secondary"
                            : ""
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {handleColors.map((option) => (
                      <div
                        key={option.id}
                        className={`w-6 h-6 rounded-full ${
                          option.color
                        } cursor-pointer ${
                          option.id === 1
                            ? "ring-2 ring-offset-2 ring-offset-black ring-secondary"
                            : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Brand */}
              <div className="mb-6">
                <span className="block mb-2">Brand</span>
                <button className="bg-secondary hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
                  View Deal
                </button>
              </div>

              {/* Quantity and buy button */}
              <div className="flex gap-4">
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-l"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    className="bg-gray-800 w-10 h-10 text-center"
                    readOnly
                  />
                  <button
                    onClick={increaseQuantity}
                    className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-r"
                  >
                    +
                  </button>
                </div>
                <button className="flex-1 bg-secondary hover:bg-orange-600 text-white py-2 px-4 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-700 mb-8">
            <div className="flex ">
              <button
                className={`py-4 px-6 w-[50%] relative ${
                  selectedTab === "details" ? "text-white" : "text-gray-400"
                }`}
                onClick={() => setSelectedTab("details")}
              >
                Product Details
                {selectedTab === "details" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></div>
                )}
              </button>
              <button
                className={`py-4 px-6 w-[50%] relative ${
                  selectedTab === "reviews" ? "text-white" : "text-gray-400"
                }`}
                onClick={() => setSelectedTab("reviews")}
              >
                Rating & Reviews
                {selectedTab === "reviews" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></div>
                )}
              </button>
            </div>
          </div>

          {/* Reviews section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border border-gray-700 rounded-lg p-6 relative"
              >
                <div className="flex mb-2">{renderStars(review.rating)}</div>
                <h3 className="font-bold flex items-center gap-2 mb-1">
                  {review.author}
                  {review.verified && (
                    <span className="bg-green-900 text-green-400 text-xs px-1 py-0.5 rounded-full">
                      ✓
                    </span>
                  )}
                </h3>
                <p className="text-gray-400 mb-4">{review.content}</p>
                <span className="text-gray-500 text-sm">
                  Posted on {review.date}
                </span>
                <button className="absolute top-4 right-4 text-gray-500">
                  •••
                </button>
              </div>
            ))}
          </div>

          {/* Load more button */}
          <div className="flex justify-center mb-12">
            <button className="bg-secondary hover:bg-orange-600 text-white py-2 px-6 rounded-full">
              Load More Reviews
            </button>
          </div>
        </div>
      </section>
      <FAQ />

      <NewsLetter />
    </main>
  );
};

export default ProductDetailPage;
