import { products } from "../../data/product";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ProductImageSlider from "@/components/ProductImageSlider";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ProductPage({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const { slug } = resolvedParams ?? {};

  const formatTitle = (slug: string) =>
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const formatSlug = (name: string) => name.toLowerCase().replace(/ /g, "-");

  // Find the matching product
  const product = products.find((p) => formatSlug(p.product) === slug);

  if (!product) return notFound();

  return (
    <main className="w-full">
      <PageHeader link={`/product/${slug}`} title={formatTitle(slug)} />
      <section className="py-10 bg-[#F5F5F5] px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto">
          {/* Product Image */}
          <ProductImageSlider 
            images={product.images} 
            productName={product.product}
          />

          {/* Product Details */}
          <div className="flex flex-col">
            <h2 className="text-gray-500 uppercase tracking-wide text-sm md:text-base lg:text-lg">
              18K Gold Plated
            </h2>
            <h1 className="text-2xl sm:text-3xl text-[#ef001f] lg:text-4xl font-bold">
              {product.product}
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-semibold mt-2">
              Rs. {product.price}.00
            </p>

            <p className="text-gray-600 mt-4 text-sm md:text-base lg:text-lg">
              {product.desc}
            </p>

            <button className="bg-[#ef001f] text-white py-3 px-6 rounded-lg mt-6 hover:bg-gray-800 transition text-sm sm:text-base md:text-lg">
              ADD TO CART
            </button>
            <button className="bg-gray-200 text-black py-3 px-6 rounded-lg mt-3 hover:bg-gray-300 transition text-sm sm:text-base md:text-lg">
              BUY NOW
            </button>

            {/* Description & Details (Expandable) */}
            <details className="mt-6 border-t pt-4 cursor-pointer">
              <summary className="text-lg text-[#ef001f] font-semibold">
                DESCRIPTION
              </summary>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                {product.desc}
              </p>
            </details>

            <details className="mt-4 border-t pt-4 cursor-pointer">
              <summary className="text-lg text-[#ef001f] font-semibold">
                DETAILS
              </summary>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Material: 18K Gold Plated | Weight: 5g
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
