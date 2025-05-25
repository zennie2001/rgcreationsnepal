import { notFound } from "next/navigation";
import products from "@/constants/products";
import ProductDetailClient from "./ProductDetailClient";
import Hero from "@/sections/Hero";

// TypeScript interfaces
interface Review {
  id: number;
  author: string;
  rating: number;
  verified: boolean;
  date: string;
  content: string;
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
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

export default async function ProductDetailPage({
  params,
  searchParams,
}: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams ?? {};

  const formatSlug = (name: string) => name.toLowerCase().replace(/ /g, "-");

  // Find the matching product
  const product = products.find((p) => formatSlug(p.name) === slug);

  if (!product) return notFound();

  const formatTitle = (slug: string) =>
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <main className="bg-white md:my-14">
      <Hero />
      {/* Navigation breadcrumb */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center font-medium text-sm mb-4">
          <a href="/" className="text-gray-800 hover:text-gray-800">
            Home
          </a>
          <span className="mx-2 text-gray-800">›</span>
          <a href="/collections" className="text-gray-800 hover:text-gray-800">
            Collection
          </a>
          <span className="mx-2 text-gray-600">›</span>
          <span className="text-darkGreen">{product.name}</span>
        </div>

        {/* Pass product data to client component */}
        <ProductDetailClient product={product} reviews={reviews} />
      </div>
    </main>
  );
}