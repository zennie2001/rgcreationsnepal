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
import craft1 from "@/assets/images/crafts/c4.jpg";
import craft2 from "@/assets/images/crafts/c8.jpg";
import craft3 from "@/assets/images/crafts/c2.jpg";
import blog3 from "@/assets/images/blog3.jpg";
import Link from "next/link";
import { Globe, Mail, MapPin } from "lucide-react";

const blogs = [
  {
    image: blog1,
    title: "Why 24K Gold is the Best Choice for Wholesale & Retail Buyers",
    date: "January 2, 2025",
    name: "Khukuri Blades",
    miniDescription:
      "24K gold, known for its 99.9% purity, is highly valued in both wholesale and retail markets. Its demand continues to rise, making it a prime investment choice.",
  },
  {
    image: blog2,
    title: "The Growing Demand for Gold in Wholesale Markets",
    date: "March 2, 2025",
    name: "Khukuri Blades",
    miniDescription:
      "Gold has been a prized commodity for centuries, and its demand in wholesale markets is growing rapidly. Investors see it as a stable asset amid economic uncertainty.",
  },
  {
    image: blog3,
    title: "The Benefits of Investing in Gold Bullion",
    date: "Feburary 2, 2025",
    name: "Khukuri Blades",
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
      <PageHeader link="/24-carat-gold" title="24 Carat Gold" />
      <section className="flex_center flex-col lg:py-16 py-10 lg:gap-12 gap-6 lg:px-0 px-4">
        <div className="flex_center flex-col gap-8 lg:w-[55%] w-full">
          <h3 className="text-[32px] font-semibold text-darkGreen">
            Why 24K Gold is the Best Choice for Wholesale & Retail Buyers
          </h3>
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col items-stretch lg:flex-row w-full gap-8">
              <div className="w-full h-full">
                <h4 className=" text-justify w-full mb-2">
                  Introduction Gold has always been a symbol of wealth and
                  prosperity. Among the different types of gold available in the
                  market, 24K gold stands out as the purest form, making it the
                  preferred choice for both wholesale and retail buyers. At{" "}
                  <span className=" font-semibold text-darkGreen text-justify w-full">
                    Khukuri Blades,
                  </span>{" "}
                  a Dubai-based company with over 15 years of experience, we
                  specialize in providing high-quality 24K gold to global
                  clients. In this article, we will explore why 24K gold is the
                  best investment for wholesalers and retailers.
                </h4>
                <h4 className=" text-justify w-full mb-2">
                  What is 24K Gold? 24K gold is 99.9% pure gold, free from other
                  metal alloys like silver or copper. Its high purity makes it
                  highly valuable and sought after in the jewelry and investment
                  sectors. Due to its softness, 24K gold is typically used for
                  investment-grade gold such as bullion, coins, and intricate
                  jewelry designs.
                </h4>
              </div>
              <div className="w-full h-full">
                <Image
                  src={craft1}
                  alt="blogImage"
                  className="w-[80%] shadow-lg rounded-md object-cover"
                />
              </div>
            </div>
            <div>
              <ul className="list-disc">
                <h1 className="text-[32px] font-semibold text-darkGreen mb-6">
                  Why Choose 24K Gold for Wholesale & Retail?
                </h1>
                <li className="mb-2 text-black">
                  <span className="text-tertiary font-semibold">
                    High Market Value:
                  </span>{" "}
                  Being the purest form of gold, 24K gold has a higher price and
                  retains its value over time.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-tertiary font-semibold">
                    Global Demand:{" "}
                  </span>{" "}
                  Gold is an essential part of many cultures, and 24K gold is
                  particularly popular in markets like India, China, and the
                  Middle East.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-tertiary font-semibold">
                    Investment Benefits:{" "}
                  </span>{" "}
                  24K gold is a safe investment, providing financial security
                  and stability even in uncertain times.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-tertiary font-semibold">
                    Premium Quality Jewelry:
                  </span>{" "}
                  Many retailers prefer 24K gold for custom jewelry, as it
                  provides a premium and luxurious feel.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-tertiary font-semibold">
                    Easy Resale & Liquidity:
                  </span>{" "}
                  The resale value of 24K gold is high due to its purity, making
                  it easier to trade in global gold markets.
                </li>
              </ul>
              <div>
                <h4 className=" text-justify w-full">
                  How Khukuri BladesEnsures High-Quality 24K Gold As an
                  established gold supplier in Dubai, we ensure that all our 24K
                  gold products are certified and hallmarked, guaranteeing
                  authenticity. We offer wholesale and retail solutions,
                  catering to businesses that seek reliable gold procurement at
                  competitive rates.
                </h4>
              </div>
              <div>
                <h4 className=" text-justify w-full">
                  Conclusion 24K gold remains the top choice for investors,
                  wholesalers, and retailers looking for quality, purity, and
                  profitability. At Khukuri Blades, we provide high-grade gold
                  bullion, coins, and custom jewelry, ensuring excellence in
                  every transaction. Partner with us to secure the best 24K gold
                  supply in the market.
                </h4>
              </div>
              <div>
                <h3 className="text-[32px] font-semibold text-darkGreen">
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
                  <li className="mb-2 text-black ">
                    <span className="text-tertiary font-semibold">
                      Global Market Trends:
                    </span>{" "}
                    Demand for gold bullion and jewelry is increasing in
                    countries like India, China, and the UAE.
                  </li>
                  <li className="mb-2 text-black">
                    <span className="text-tertiary font-semibold">
                      Investment Appeal:{" "}
                    </span>{" "}
                    Gold is a hedge against inflation, making it attractive for
                    financial institutions and large investors.
                  </li>
                  <li className="mb-2 text-black">
                    <span className="text-tertiary font-semibold">
                      Wholesale Advantages:{" "}
                    </span>{" "}
                    Buying in bulk allows retailers and jewelry makers to get
                    better pricing and higher profit margins.
                  </li>
                </ul>
                <h4 className=" text-justify w-full mt-4">
                  As a trusted Dubai-based gold supplier, Khukuri Blades LLC
                  provides premium quality gold at competitive wholesale rates.
                </h4>
              </div>
              <div>
                <h3 className="text-[32px] font-semibold text-darkGreen">
                  Why Dubai is the Best Hub for Gold Suppliers
                </h3>
                <h4 className=" text-justify w-full mb-4">
                  Dubai, known as the City of Gold, is a global hub for gold
                  trading and wholesaling. Several factors make it the best
                  place to buy and sell gold, including:
                </h4>
                <ul className="list-disc">
                  <li className="mb-2 text-black">
                    <span className="text-tertiary font-semibold">
                      Tax-Free Benefits:
                    </span>{" "}
                    The UAE offers a duty-free environment, making gold trading
                    more profitable.
                  </li>
                  <li className="mb-2 text-black">
                    <span className="text-tertiary font-semibold">
                      Reliable Supply Chain:{" "}
                    </span>{" "}
                    Dubai has a robust logistics network ensuring timely gold
                    delivery worldwide.
                  </li>
                  <li className="mb-2 text-black">
                    <span className="text-tertiary font-semibold">
                      High-Quality Standards:{" "}
                    </span>{" "}
                    Dubai gold is known for its purity and certification,
                    attracting buyers worldwide.
                  </li>
                </ul>
                <h4 className=" text-justify w-full mt-4">
                  For wholesalers and retailers, Khukuri Blades ensures
                  authentic 24K gold with competitive pricing and bulk supply
                  options.
                </h4>
              </div>
              <div>
                <h3 className="text-[32px] font-semibold text-darkGreen">
                  The Benefits of Investing in Gold Bullion
                </h3>
                <h4 className=" text-justify w-full mb-4">
                  Gold bullion is one of the safest investment options for both
                  individuals and businesses. Here’s why investing in gold
                  bullion is a smart choice:
                </h4>
                <ul className="list-disc">
                  <li className="mb-2 text-black">
                    <span className="text-tertiary font-semibold ">
                      Wealth Preservation:
                    </span>{" "}
                    Gold retains value over time, making it a stable financial
                    asset.
                  </li>
                  <li className="mb-2 text-black">
                    <span className="text-tertiary font-semibold">
                      Portfolio Diversification:{" "}
                    </span>{" "}
                    Adding gold to an investment portfolio reduces risk and
                    enhances security.
                  </li>
                  <li className="mb-2 text-black">
                    <span className="text-tertiary font-semibold">
                      High Liquidity:{" "}
                    </span>{" "}
                    Gold bullion is easy to buy, sell, and trade in global
                    markets.
                  </li>
                  <li className="mb-2 text-black">
                    <span className="text-tertiary font-semibold">
                      Protection Against Inflation:{" "}
                    </span>
                    Gold prices tend to rise during economic downturns, making
                    it a strong hedge against inflation.
                  </li>
                </ul>
                <h4 className=" text-justify w-full mt-4">
                  At Khukuri Blades, we offer high-purity gold bullion for both
                  wholesale and retail investors looking for a secure and
                  profitable investment.
                </h4>
              </div>
              <div>
                <h3 className="text-[32px] font-semibold text-darkGreen">
                  Understanding Gold Purity: 24K vs. 22K vs. 18K
                </h3>
                <h4 className=" text-justify w-full mb-4">
                  When purchasing gold, it’s essential to understand the
                  differences between various gold purities:
                </h4>
                <ul className="list-disc">
                  <li className="mb-2 text-black">
                    <span className="text-tertiary font-semibold">
                      24K Gold (99.9% Pure):
                    </span>{" "}
                    The purest form, ideal for investment and high-value
                    jewelry.
                  </li>
                  <li className="mb-2 text-black">
                    <span className="text-tertiary font-semibold">
                      22K Gold (91.6% Pure):{" "}
                    </span>{" "}
                    Mixed with small amounts of alloys, making it suitable for
                    durable jewelry.
                  </li>
                  <li className="mb-2 text-black">
                    <span className="text-tertiary font-semibold">
                      18K Gold (75% Pure):{" "}
                    </span>{" "}
                    Contains a higher percentage of other metals, offering
                    strength and affordability.
                  </li>
                </ul>
                <h4 className=" text-justify w-full mt-4">
                  For both wholesale and retail gold buyers, Khukuri Blades
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
