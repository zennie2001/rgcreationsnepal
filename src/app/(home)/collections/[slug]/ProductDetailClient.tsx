"use client";
import { useState } from "react";
import { Star, StarHalf, Plus, Minus } from "lucide-react";

interface Review {
  id: number;
  author: string;
  rating: number;
  verified: boolean;
  date: string;
  content: string;
}

interface Product {
  id: number;
  name: string;
  brand: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  image: any;
  images: any[];
}

interface Props {
  product: Product;
  reviews: Review[];
}

export default function ProductDetailClient({ product, reviews }: Props) {
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
    <>
      {/* Product section */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Image gallery */}
        <div className="w-full md:w-1/2">
          {/* Main product image */}
          <div className="bg-[#323232] rounded mb-4 flex items-center justify-center h-80">
            <img
              src={product.images[selectedImage]?.src || product.image?.src}
              alt={product.name}
              className="max-w-full max-h-80 object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2">
            {product.images.map((img, index) => (
              <div
                key={index}
                className={`border ${
                  selectedImage === index
                    ? "border-gray-800"
                    : "border-gray-300"
                } rounded cursor-pointer w-28 h-24 overflow-hidden bg-gray-100`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={img?.src || img}
                  alt={`Product thumbnail ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-2">Product Code: xyz123ac</p>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">{renderStars(4.5)}</div>
            <span className="text-gray-500 font-medium text-sm">4.5/5</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-bold">${product.salePrice}</span>
            <span className="text-gray-600 font-semibold text-lg line-through">
              ${product.originalPrice}
            </span>
            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
              -{product.discount}%
            </span>
          </div>

          <p className="text-gray-700 font-semibold border-b border-lightGreen pb-4 mb-6">
            {product.name}
          </p>

          {/* Customization options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-medium mb-2">Customize Your Blade</h3>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">
                  Blade Finish
                </label>
                <div className="border border-gray-300 rounded p-2 bg-gray-50">
                  <select className="w-full bg-transparent outline-none">
                    <option>Select Blade Finish</option>
                    <option>Satin</option>
                    <option>Black Oxide</option>
                    <option>Damascus</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">
                  Handle Material
                </label>
                <div className="border border-gray-300 rounded p-2 bg-gray-50">
                  <select className="w-full bg-transparent outline-none">
                    <option>Select Handle Material</option>
                    <option>Wood</option>
                    <option>Bone</option>
                    <option>Horn</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-1">
                  Personalize Your Blade
                </label>
                <div className="border border-gray-300 rounded p-2 bg-gray-50">
                  <input
                    type="text"
                    placeholder="Personalize by (Name, Title, Message, etc.)"
                    className="w-full bg-transparent outline-none text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Blade Details</h3>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">
                  Blade Length
                </label>
                <div className="border border-gray-300 rounded p-2 bg-gray-50">
                  <select className="w-full bg-transparent outline-none">
                    <option>Select Length</option>
                    <option>8 inches</option>
                    <option>10 inches</option>
                    <option>12 inches</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">
                  Scabbard
                </label>
                <div className="border border-gray-300 rounded p-2 bg-gray-50">
                  <select className="w-full bg-transparent outline-none">
                    <option>Select Scabbard</option>
                    <option>Leather</option>
                    <option>Wood</option>
                    <option>None</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-1">
                  Custom Logo / Photo Engraving
                </label>
                <div className="border border-gray-300 border-dashed rounded p-4 bg-gray-50 flex flex-col items-center justify-center">
                  <div className="mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-xs text-center">
                    Drag your file(s) or Browse
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Add to cart section */}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex border border-gray-300 rounded">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-2 border-r border-gray-300 hover:bg-gray-50"
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="px-4 py-2 flex items-center justify-center min-w-8">
                {quantity}
              </div>
              <button
                onClick={increaseQuantity}
                className="px-3 py-2 border-l border-gray-300 hover:bg-gray-50"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button className="flex-1 bg-darkGreen text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors">
              Add To Cart
            </button>
          </div>
        </div>
        
      </div>
      {/* Product details tabs */}
        <div className="mb-12">
          <div className="border-b bg-[#fafafa] border-gray-300 mb-6">
            <div className="flex">
              <button
                className={`py-3 px-6 font-medium relative ${
                  selectedTab === "details" ? "text-gray-800" : "text-gray-500"
                }`}
                onClick={() => setSelectedTab("details")}
              >
                Product Details
                {selectedTab === "details" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800"></div>
                )}
              </button>
              <button
                className={`py-3 px-6 font-medium relative ${
                  selectedTab === "reviews" ? "text-gray-800" : "text-gray-500"
                }`}
                onClick={() => setSelectedTab("reviews")}
              >
                Reviews
                {selectedTab === "reviews" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800"></div>
                )}
              </button>
            </div>
          </div>

          {selectedTab === "details" && (
            <div className="prose max-w-none">
              <h2 className="text-xl font-bold mb-4">
                Talwar Sword – Hand-Forged Indo-Nepalese Blade with Brass Hilt
              </h2>
              <p className="mb-4">
                The 24-inch Talwar sword by expert forge talents features
                Indo-Nepalese blade design with the ornamental beauty of a
                handcrafted brass hilt. Forged in Nepal using traditional
                techniques and regional influence, the blade represents a
                harmonious blend of Eastern and Western sword-making traditions,
                precisely curved for ceremonial elegance.
              </p>
              <p className="mb-4">
                Crafted from high-carbon steel salvaged from truck leaf springs,
                the blade is water-tempered to provide optimal hardness and
                flexibility. The curve is a dramatic 24-inch sweep with
                exquisite along cutting, sharpened to a fine edge and polished
                for a semi-reflective finish.
              </p>
              <p className="mb-4">
                The handcrafted brass hilt features intricate detailing inspired
                by traditional Indo-Nepalese ornamental designs and elegant
                Tibetan flourishes. The sword comes with a scabbard for safe
                storage and ceremonial display. Whether used for martial
                training, costume, or collection, this Talwar sword is a
                powerful presence in both form and function.
              </p>
              <p>
                The Talwar is a curved blade with roots in the Indian
                subcontinent, heavily influenced by Persian scimitars and
                Central Asian weapons. It was adopted by Indian and Nepali
                warriors alike for its curved shape, fine edge and flared tip
                that effectively combines the cutting/slashing capabilities of
                Eastern/Western blade designs to create an innovative and
                historical significance.
              </p>
              <button className="text-green-800 font-medium mt-4">
                View More
              </button>
            </div>
          )}

          {selectedTab === "reviews" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">All Reviews (449)</h2>
                <div className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Sort by:</span>
                    <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                      <option>Latest</option>
                      <option>Highest Rated</option>
                      <option>Lowest Rated</option>
                    </select>
                  </div>
                  <button className="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">
                    Write a Review
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border border-gray-200 rounded-lg p-4 relative"
                  >
                    <div className="flex mb-2">
                      {renderStars(review.rating)}
                    </div>
                    <h3 className="font-bold flex items-center gap-2 mb-1">
                      {review.author}
                      {review.verified && (
                        <span className="bg-green-100 text-green-600 text-xs px-1 py-0.5 rounded-full">
                          ✓
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-600 mb-4">{review.content}</p>
                    <span className="text-gray-500 text-sm">
                      Posted on {review.date}
                    </span>
                    <button className="absolute top-4 right-4 text-gray-500">
                      •••
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <button className="bg-green-800 hover:bg-green-700 text-white py-2 px-6 rounded">
                  Load More Reviews
                </button>
              </div>
            </div>
          )}
        </div>
    </>
  );
}