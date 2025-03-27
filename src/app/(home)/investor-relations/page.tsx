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

export default function InvestorRelations() {
  return (
    <main className="w-full overflow-hidden">
      <PageHeader link="/investor-relations" title="Investor Relations" />
      <section className="flex_center flex-col lg:py-16 py-10 lg:gap-12 gap-6 lg:px-0 px-4">
        <div className="flex_center flex-col gap-8 lg:w-[55%] w-full">
          <h3 className="text-[32px] font-semibold text-secondary">
            Investor Relations
          </h3>
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-8">
              <h4 className=" text-justify w-full">
                Welcome to the Investor Relations section of .
                <span className=" font-semibold text-[#ef001f] text-justify w-full">
                  Star Laxmi Jewellery LLC.
                </span>{" "}
                We are committed to providing our investors with comprehensive
                and transparent information to help you understand our business
                and investment opportunities. As a leading jewelry company, we
                pride ourselves on our sustainable growth, financial stability,
                and long-term value creation. This section is designed to offer
                you all the necessary insights to stay informed about our
                company’s performance, financial reports, and future prospects.
              </h4>
              <div>
                <h3 className="text-[32px] font-semibold text-secondary">
                  Our Vision for Growth
                </h3>
                <h4 className=" text-justify w-full">
                  At Star Laxmi Jewellery LLC, we aim to be the most trusted and
                  innovative jewelry brand in the industry, offering exquisite
                  craftsmanship, custom designs, and high-quality services. We
                  are constantly expanding our product offerings and exploring
                  new markets, while maintaining a commitment to the highest
                  ethical standards and sustainable practices. Our goal is to
                  deliver strong returns for our investors by capitalizing on
                  market trends and maintaining financial discipline.
                </h4>
              </div>

              <ul className="list-disc">
                <h1 className="text-tertiary  font-bold mb-4">
                  Investment Highlights
                </h1>
                <li className="mb-2 text-gray-700">
                  <span className="text-black">Strong Market Position:</span> A
                  trusted name in the jewelry industry with an established
                  customer base.
                </li>
                <li className="mb-2 text-gray-700">
                  <span className="text-black">Diversified Portfolio:</span>{" "}
                  Offering a wide range of jewelry designs and services,
                  including custom design, repair, engraving, and appraisal.
                </li>
                <li className="mb-2 text-gray-700">
                  <span className="text-black">Sustainable Practices: </span>{" "}
                  Commitment to responsible sourcing, ethical production, and
                  sustainable business practices.
                </li>
                <li className="mb-2 text-gray-700">
                  <span className="text-black">Growth Potential:</span> Focused
                  on expanding our market presence and exploring new revenue
                  streams through digital channels and international expansion.
                </li>
              </ul>
              <div>
                <h3 className="text-[32px] font-semibold text-secondary">
                  Financial Reports
                </h3>
                <h4 className=" text-justify w-full">
                  We provide quarterly and annual reports that highlight our
                  financial performance and key metrics. These reports are
                  available for download and will offer you an in-depth view of
                  our revenue growth, profitability, and future strategies.
                </h4>
              </div>
              <div>
                <h3 className="text-[32px] font-semibold text-secondary">
                  Press Releases
                </h3>
                <h4 className=" text-justify w-full">
                  Stay up to date with the latest company news, product
                  launches, and partnerships. Our press releases provide insight
                  into how Star Laxmi Jewellery LLC is continuing to shape the
                  future of the jewelry industry.
                </h4>
              </div>
              <div>
                <h3 className="text-[32px] font-semibold text-secondary">
                  Corporate Governance
                </h3>
                <h4 className=" text-justify w-full">
                  At Star Laxmi Jewellery LLC, we believe in maintaining the
                  highest level of corporate governance to ensure
                  accountability, transparency, and long-term value for our
                  stakeholders. Our board of directors and management team are
                  committed to overseeing the company’s growth and ensuring we
                  meet the highest standards of integrity and business conduct.
                </h4>
              </div>
              <div>
                <h3 className="text-[32px] font-semibold text-secondary">
                  Investor Contact
                </h3>
                <h4 className=" text-justify w-full">
                  For more information or inquiries about investment
                  opportunities with Star Laxmi Jewellery LLC, please feel free
                  to reach out to our Investor Relations team:
                </h4>
                <ul className="my-6 text-gray-600 w-full">
                  <li className="flex items-x`center gap-2">
                    <MapPin className="flex-shrink-0" />
                    <span>
                      Al Souq Al Kabeer Tailor Galli, Esag Building (Old Plot),
                      Shop No. 07 Burdubai, Dubai, UAE (Near Astoria Hotel)
                    </span>
                  </li>

                  <li className="w-full">
                    <Link
                      href="mailto:info@starlaxmijewellery.com"
                      className="flex items-center gap-2 w-full"
                    >
                      <Mail className="flex-shrink-0" />
                      <span className="flex-1">
                        info@starlaxmijewellery.com
                      </span>
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="http://www.starlaxmijewellery.com"
                      className="flex items-center gap-2 w-full"
                    >
                      <Globe className="flex-shrink-0" />
                      <span className="flex-1">www.starlaxmijewellery.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
