import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import blogImage from "@/assets/images/blogImage.jpg";
import BlogCard from "@/components/BlogCard";
import { FaFacebookF, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Image from "next/image";
import { ImQuotesRight } from "react-icons/im";
import { GoDash } from "react-icons/go";
import blog1 from "@/assets/images/blog1.jpg";
import blog2 from "@/assets/images/blog2.jpg";

import blog3 from "@/assets/images/blog3.jpg";
import Link from "next/link";
import { Globe, Mail, MapPin } from "lucide-react";

const blogs = [
  {
    image: blog1,
    title: "Why 24K Gold is the Best Choice for Wholesale & Retail Buyers",
    date: "January 2, 2025",
    name: "Star Laxmi",
    miniDescription:
      "24K gold, known for its 99.9% purity, is highly valued in both wholesale and retail markets. Its demand continues to rise, making it a prime investment choice.",
  },
  {
    image: blog2,
    title: "The Growing Demand for Gold in Wholesale Markets",
    date: "March 2, 2025",
    name: "Star Laxmi",
    miniDescription:
      "Gold has been a prized commodity for centuries, and its demand in wholesale markets is growing rapidly. Investors see it as a stable asset amid economic uncertainty.",
  },
  {
    image: blog3,
    title: "The Benefits of Investing in Gold Bullion",
    date: "Feburary 2, 2025",
    name: "Star Laxmi",
    miniDescription:
      "Gold bullion is a safe and lucrative investment option, offering wealth preservation, high liquidity, and protection against inflation in global markets.",
  },
];

const socialMedia = [
  {
    link: "facebook.com",
    icon: FaFacebookF,
  },
  {
    link: "instagram.com",
    icon: RiInstagramFill,
  },
  {
    link: "linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    link: "pinterest.com",
    icon: FaPinterest,
  },
];

export default function CaratGold() {
  return (
    <main className="w-full overflow-hidden">
      <PageHeader link="/investor-relations" title="Investor Relations" />
      <section className="flex_center flex-col lg:py-16 py-10 lg:gap-12 gap-6 lg:px-0 px-4">
        <div className="flex_center flex-col gap-8 lg:w-[55%] w-full">
          <h3 className="text-[32px] font-semibold text-secondary">
            Why 24K Gold is the Best Choice for Wholesale & Retail Buyers
          </h3>
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-8">
              <h4 className=" text-justify w-full">
                Introduction Gold has always been a symbol of wealth and
                prosperity. Among the different types of gold available in the
                market, 24K gold stands out as the purest form, making it the
                preferred choice for both wholesale and retail buyers. At{" "}
                <span className=" font-semibold text-[#ef001f] text-justify w-full">
                  Star Laxmi Jewellery LLC,
                </span>{" "}
                a Dubai-based company with over 15 years of experience, we
                specialize in providing high-quality 24K gold to global clients.
                In this article, we will explore why 24K gold is the best
                investment for wholesalers and retailers.
              </h4>
              <h4 className=" text-justify w-full">
                What is 24K Gold? 24K gold is 99.9% pure gold, free from other
                metal alloys like silver or copper. Its high purity makes it
                highly valuable and sought after in the jewelry and investment
                sectors. Due to its softness, 24K gold is typically used for
                investment-grade gold such as bullion, coins, and intricate
                jewelry designs.
              </h4>

              <ul className="list-disc">
                <h1 className="text-tertiary  font-bold mb-4">
                  Why Choose 24K Gold for Wholesale & Retail?
                </h1>
                <li className="mb-2 text-gray-700">
                  <span className="text-black">High Market Value:</span> Being
                  the purest form of gold, 24K gold has a higher price and
                  retains its value over time.
                </li>
                <li className="mb-2 text-gray-700">
                  <span className="text-black">Global Demand: </span> Gold is an
                  essential part of many cultures, and 24K gold is particularly
                  popular in markets like India, China, and the Middle East.
                </li>
                <li className="mb-2 text-gray-700">
                  <span className="text-black">Investment Benefits: </span> 24K
                  gold is a safe investment, providing financial security and
                  stability even in uncertain times.
                </li>
                <li className="mb-2 text-gray-700">
                  <span className="text-black">Premium Quality Jewelry:</span>{" "}
                  Many retailers prefer 24K gold for custom jewelry, as it
                  provides a premium and luxurious feel.
                </li>
                <li className="mb-2 text-gray-700">
                  <span className="text-black">Easy Resale & Liquidity:</span>{" "}
                  The resale value of 24K gold is high due to its purity, making
                  it easier to trade in global gold markets.
                </li>
              </ul>
              <div>
                <h4 className=" text-justify w-full">
                  How Star Laxmi Jewellery LLC Ensures High-Quality 24K Gold As
                  an established gold supplier in Dubai, we ensure that all our
                  24K gold products are certified and hallmarked, guaranteeing
                  authenticity. We offer wholesale and retail solutions,
                  catering to businesses that seek reliable gold procurement at
                  competitive rates.
                </h4>
              </div>
              <div>
                <h4 className=" text-justify w-full">
                  Conclusion 24K gold remains the top choice for investors,
                  wholesalers, and retailers looking for quality, purity, and
                  profitability. At Star Laxmi Jewellery LLC, we provide
                  high-grade gold bullion, coins, and custom jewelry, ensuring
                  excellence in every transaction. Partner with us to secure the
                  best 24K gold supply in the market.
                </h4>
              </div>
              <div>
                <h3 className="text-[32px] font-semibold text-secondary">
                  The Growing Demand for Gold in Wholesale Markets
                </h3>
                <h4 className=" text-justify w-full mb-4">
                  Gold has been a valuable commodity for centuries, but its
                  demand in the wholesale market is growing exponentially. With
                  economic uncertainties and fluctuating stock markets, gold
                  remains a safe-haven investment. Wholesale buyers are
                  capitalizing on this trend to secure long-term gains.
                </h4>
                <ul className="list-disc">
                  <li className="mb-2 text-gray-700 ">
                    <span className="text-black">Global Market Trends:</span>{" "}
                    Demand for gold bullion and jewelry is increasing in
                    countries like India, China, and the UAE.
                  </li>
                  <li className="mb-2 text-gray-700">
                    <span className="text-black">Investment Appeal: </span> Gold
                    is a hedge against inflation, making it attractive for
                    financial institutions and large investors.
                  </li>
                  <li className="mb-2 text-gray-700">
                    <span className="text-black">Wholesale Advantages: </span>{" "}
                    Buying in bulk allows retailers and jewelry makers to get
                    better pricing and higher profit margins.
                  </li>
                </ul>
                <h4 className=" text-justify w-full mt-4">
                  As a trusted Dubai-based gold supplier, Star Laxmi Jewellery
                  LLC provides premium quality gold at competitive wholesale
                  rates.
                </h4>
              </div>
              <div>
                <h3 className="text-[32px] font-semibold text-secondary">
                  Why Dubai is the Best Hub for Gold Suppliers
                </h3>
                <h4 className=" text-justify w-full mb-4">
                  Dubai, known as the City of Gold, is a global hub for gold
                  trading and wholesaling. Several factors make it the best
                  place to buy and sell gold, including:
                </h4>
                <ul className="list-disc">
                  <li className="mb-2 text-gray-700">
                    <span className="text-black">Tax-Free Benefits:</span> The
                    UAE offers a duty-free environment, making gold trading more
                    profitable.
                  </li>
                  <li className="mb-2 text-gray-700">
                    <span className="text-black">Reliable Supply Chain: </span>{" "}
                    Dubai has a robust logistics network ensuring timely gold
                    delivery worldwide.
                  </li>
                  <li className="mb-2 text-gray-700">
                    <span className="text-black">High-Quality Standards: </span>{" "}
                    Dubai gold is known for its purity and certification,
                    attracting buyers worldwide.
                  </li>
                </ul>
                <h4 className=" text-justify w-full mt-4">
                  For wholesalers and retailers, Star Laxmi Jewellery LLC
                  ensures authentic 24K gold with competitive pricing and bulk
                  supply options.
                </h4>
              </div>
              <div>
                <h3 className="text-[32px] font-semibold text-secondary">
                  The Benefits of Investing in Gold Bullion
                </h3>
                <h4 className=" text-justify w-full mb-4">
                  Gold bullion is one of the safest investment options for both
                  individuals and businesses. Here’s why investing in gold
                  bullion is a smart choice:
                </h4>
                <ul className="list-disc">
                  <li className="mb-2 text-gray-700">
                    <span className="text-black ">Wealth Preservation:</span>{" "}
                    Gold retains value over time, making it a stable financial
                    asset.
                  </li>
                  <li className="mb-2 text-gray-700">
                    <span className="text-black">
                      Portfolio Diversification:{" "}
                    </span>{" "}
                    Adding gold to an investment portfolio reduces risk and
                    enhances security.
                  </li>
                  <li className="mb-2 text-gray-700">
                    <span className="text-black">High Liquidity: </span> Gold
                    bullion is easy to buy, sell, and trade in global markets.
                  </li>
                  <li className="mb-2 text-gray-700">
                    <span className="text-black">
                      Protection Against Inflation:{" "}
                    </span>
                    Gold prices tend to rise during economic downturns, making
                    it a strong hedge against inflation.
                  </li>
                </ul>
                <h4 className=" text-justify w-full mt-4">
                  At Star Laxmi Jewellery LLC, we offer high-purity gold bullion
                  for both wholesale and retail investors looking for a secure
                  and profitable investment.
                </h4>
              </div>
              <div>
                <h3 className="text-[32px] font-semibold text-secondary">
                  Understanding Gold Purity: 24K vs. 22K vs. 18K
                </h3>
                <h4 className=" text-justify w-full mb-4">
                  When purchasing gold, it’s essential to understand the
                  differences between various gold purities:
                </h4>
                <ul className="list-disc">
                  <li className="mb-2 text-gray-700">
                    <span className="text-black">24K Gold (99.9% Pure):</span>{" "}
                    The purest form, ideal for investment and high-value
                    jewelry.
                  </li>
                  <li className="mb-2 text-gray-700">
                    <span className="text-black">22K Gold (91.6% Pure): </span>{" "}
                    Mixed with small amounts of alloys, making it suitable for
                    durable jewelry.
                  </li>
                  <li className="mb-2 text-gray-700">
                    <span className="text-black">18K Gold (75% Pure): </span>{" "}
                    Contains a higher percentage of other metals, offering
                    strength and affordability.
                  </li>
                </ul>
                <h4 className=" text-justify w-full mt-4">
                  For both wholesale and retail gold buyers, Star Laxmi
                  Jewellery LLC provides certified gold in different purities to
                  meet diverse market needs.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
