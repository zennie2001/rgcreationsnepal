import { useRouter } from "next/router";
import Image from "next/image";
import { products } from "../data/product"; // Import product list

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Convert product name to slug format
  const formatSlug = (name: string) => name.toLowerCase().replace(/ /g, "-");

  // Find the matching product
  const product = products.find((p) => formatSlug(p.product) === slug);

  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <main className="container mx-auto p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.product}
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h2 className="text-gray-500 uppercase tracking-wide">
            18K Gold Plated
          </h2>
          <h1 className="text-3xl font-bold">{product.product}</h1>
          <p className="text-lg font-semibold mt-2">£{product.price}.00</p>

          <p className="text-gray-600 mt-4">{product.desc}</p>

          {/* Buttons */}
          <button className="bg-black text-white py-3 px-6 rounded-lg mt-6 hover:bg-gray-800 transition">
            ADD TO BAG
          </button>
          <button className="bg-gray-200 text-black py-3 px-6 rounded-lg mt-3 hover:bg-gray-300 transition">
            🎁 CHOOSE GIFT WRAP AT CHECKOUT
          </button>

          {/* Payment Options */}
          <div className="mt-4 border-t pt-4 text-sm text-gray-600">
            <p>
              Pay in 30 days with <span className="font-bold">Klarna</span>.{" "}
              <a href="#" className="text-blue-500">
                Learn more
              </a>
            </p>
            <p className="mt-2">
              or 4 interest-free payments of{" "}
              <span className="font-bold">£8.00</span> with{" "}
              <span className="text-green-500">Clearpay</span> 🛈
            </p>
          </div>

          {/* Description & Details (Expandable) */}
          <details className="mt-6 border-t pt-4 cursor-pointer">
            <summary className="text-lg font-semibold">DESCRIPTION</summary>
            <p className="text-gray-600 mt-2">{product.desc}</p>
          </details>

          <details className="mt-4 border-t pt-4 cursor-pointer">
            <summary className="text-lg font-semibold">DETAILS</summary>
            <p className="text-gray-600 mt-2">
              Material: 18K Gold Plated | Weight: 5g
            </p>
          </details>
        </div>
      </div>
    </main>
  );
}
