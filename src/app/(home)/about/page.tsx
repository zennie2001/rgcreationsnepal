"use client";

import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import aboutImage from "@/assets/images/crafts/c8.jpg";
import aboutSecondImage from "@/assets/images/about-large-starlaxmi.jpg";
import Image from "next/image";
import Contact from "@/sections/Contact";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import profileImage from "@/assets/images/profileImage.jpg";
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaPlus } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import craft1 from "@/assets/images/crafts/c4.jpg";
import craft2 from "@/assets/images/crafts/c8.jpg";
import craft3 from "@/assets/images/crafts/c2.jpg";

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

export default function AboutPage() {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  return (
    <main className="w-full  overflow-hidden">
      <PageHeader title="About Us" link="/about" />
      <section className="flex_center container mx-auto flex-col w-full px-4 lg:px-0  lg:py-16 py-7 gap-16">
        <div className="flex lg:flex-row flex-col items-center lg:gap-16 gap-6 w-full">
          <div className="flex flex-col lg:w-1/2 w-full gap-12">
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-xl md:text-3xl">
                Star Laxmi Jewellery LLC: The Premier Supplier of Premium
                24-Carat Gold Jewellery
              </h1>

              <p className="text-text text-justify">
                At Star Laxmi Jewellery LLC, we specialize exclusively in
                24-carat gold, offering our clients the highest level of purity
                and unmatched quality. 24-carat gold is renowned for its
                brilliant shine, exceptional durability, and timeless elegance,
                making it the gold standard for premium jewellery. By focusing
                solely on 24-carat gold, we ensure that every piece we craft
                upholds the finest standards of quality, making it perfect for
                both investment and luxurious adornment. We are committed to
                supplying only the purest gold, sourced directly from trusted
                gold mine companies, to ensure that our customers receive the
                very best.
              </p>
              <p className="text-text text-justify ">
                Our clientele consists of gold retail shops spanning Europe, the
                Middle East, and Asia, all of whom rely on our competitive
                wholesale rates and consistent supply of premium 24-carat gold.
                Whether you're looking to stock investment-grade pieces or seek
                intricate, high-quality designs for your customers, we offer a
                range of 24-carat gold jewellery that promises durability and
                elegance. By focusing exclusively on 24-carat gold, Star Laxmi
                Jewellery LLC guarantees that every piece we deliver is a true
                reflection of luxury, purity, and craftsmanship, making us a
                preferred supplier for retailers across the globe who value both
                quality and affordability.
              </p>
            </div>
          </div>
          <div className="flex gap-8 lg:w-1/2 w-full h-80 rounded-md overflow-hidden">
            <Image
              src={aboutImage}
              alt="image"
              className="size-full object-cover"
            />
          </div>
        </div>
        <div className="flex_center lg:flex-row flex-col w-full lg:gap-8 gap-3">
          <div className="flex items-center lg:p-12 p-4 lg:gap-8 gap-2 bg-[#F5FBFF] lg:w-1/2 w-full rounded-md">
            <p className="lg:text-4xl text-3xl text-tertiary font-semibold  w-[40%] md:w-[20%]">
              1K +
            </p>
            <div className="flex flex-col lg:gap-3 gap-0">
              <p className="lg:text-2xl text-xl font-semibold">
                Satisfied Business Customers
              </p>
              <p className="text-text text-sm">
                Trusted by 1K + businesses all around the world
              </p>
            </div>
          </div>
          <div className="flex items-center lg:p-12 p-4 gap-8 bg-[#FFBF1C]/10 lg:w-1/2 w-full rounded-md">
            <p className="lg:text-4xl text-3xl text-quaternary font-semibold w-[30%] md:w-[20%]">
              15 +
            </p>
            <div className="flex flex-col lg:gap-3 gap-0">
              <p className="lg:text-2xl text-xl font-semibold">
                Years of Experience
              </p>
              <p className="text-text text-sm">
                Experience of over 15 years and counting
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="image container px-4 lg:px-0 flex_center h-[80vh] w-full relative">
        <Image
          src={aboutSecondImage}
          alt="image"
          className="size-full object-cover"
        />
        <div className="absolute bottom-0 lg:flex_center hidden w-full  ">
          <div className="flex w-full h-16 bg-primary"></div>
        </div>
      </div>
      <section className="w-full flex_center container px-4 lg:px-0">
        <div className="flex pb-16 w-full">
          <div className="flex flex-col w-full lg:px-12 px-0 gap-4 lg:pt-0 pt-10">
            <h2 className="text-xl md:text-3xl font-semibold text-darkGreen">
              Our Mission
            </h2>
            <div className="w-full flex md:flex-row flex-col md:gap-8 gap-4">
              <p className="text-text w-full">
                To be a leading gold jewellery provider in the UAE, offering
                unparalleled quality, innovative designs, and exceptional
                customer service to wholesale and retail customers alike.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full lg:px-12 gap-4 pt-10 md:pt-0">
            <h2 className="text-xl md:text-3xl font-semibold text-darkGreen">
              Our Vision
            </h2>
            <div className="w-full flex md:flex-row flex-col md:gap-8 gap-4">
              <p className="text-text w-full">
                To redefine the gold jewellery industry by blending traditional
                craftsmanship with modern elegance, ensuring accessibility and
                affordability for all jewellery enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex_center lg:gap-12 gap-6 lg:px-24 px-4 lg:py-16 py-10 bg-[#F5FBFF]">
        <div className="flex container flex-col w-full gap-6">
          <h3 className=" text-xl md:text-3xl font-semibold text-center text-darkGreen">
            At Star Laxmi Jewellery LLC, we pride ourselves on being more than
            just a supplier We are trusted experts in the gold industry, with
            over 15 years of experience in delivering exceptional quality and
            service.
          </h3>
        </div>
      </section>

      <section className="flex_center flex-col container px-4 lg:px-0 lg:py-16 py-10 lg:gap-12 gap-6">
        <div className="flex md:flex-row flex-col gap-2 justify-between my-10 w-full">
          <Image
            src={craft1}
            alt="image"
            className="md:w-[30%] w-full rounded-md shadow-lg hover:scale-110 transition-all duration-300 object-cover"
          />
          <Image
            src={craft2}
            alt="image"
            className=" md:w-[30%] w-full rounded-md shadow-lg hover:scale-110 transition-all duration-300  object-cover"
          />
          <Image
            src={craft3}
            alt="image"
            className="md:w-[30%] w-full rounded-md shadow-lg hover:scale-110 transition-all duration-300  object-cover"
          />
        </div>
        <div className="flex_center flex-col gap-8  w-full">
          <div className="flex_center flex-col gap-8">
            <p className="text-text text-base text-justify">
              At{" "}
              <span className=" font-semibold text-[#ef001f] text-justify w-full">
                Star Laxmi Jewellery LLC,
              </span>{" "}
              we pride ourselves on being more than just a supplier – we are
              trusted experts in the gold industry, with over 15 years of
              experience in delivering exceptional quality and service. Here’s
              why you should choose us:
            </p>
            <ul className="list-disc">
              <li className="mb-2 text-black">
                <span className="text-black">
                  Trusted Experts in the Gold Industry:
                </span>{" "}
                With over a decade of expertise, we have built a reputation for
                reliability, precision, and commitment to quality. Our deep
                understanding of the gold market ensures that we provide only
                the best products to our clients.
              </li>
              <li className="mb-2 text-black">
                <span className="text-black">
                  100% Certified and Hallmarked Jewellery:
                </span>{" "}
                All our jewellery is 100% certified and hallmarked, adhering to
                the highest industry standards. This guarantees that every piece
                is genuine, pure, and of the finest quality, giving you complete
                peace of mind.
              </li>
              <li className="mb-2 text-black">
                <span className="text-black">
                  Competitive Wholesale and Retail Prices:
                </span>{" "}
                We offer highly competitive pricing for both wholesale and
                retail, making it easier for you to access premium, 24-carat
                gold jewellery at exceptional value. By sourcing gold directly
                from trusted mine companies, we eliminate intermediaries,
                passing on the savings to you.
              </li>
              <li className="mb-2 text-black">
                <span className="text-black">
                  Customized Jewellery Crafting Services:
                </span>{" "}
                At Star Laxmi Jewellery LLC, we understand that each customer
                has unique needs. That’s why we offer customized jewellery
                crafting services, allowing you to create bespoke pieces that
                meet your specifications and preferences. Whether you're
                designing a one-of-a-kind item or creating a signature
                collection, we bring your vision to life with unparalleled
                craftsmanship.
              </li>
              <li className="mb-2 text-black">
                <span className="text-black">
                  Secure and Insured Transactions:
                </span>{" "}
                We prioritize your safety and peace of mind. All transactions
                with us are secure and fully insured, ensuring that your
                investment is protected from start to finish. From the moment
                you place an order to the final delivery, we guarantee a safe
                and reliable experience.
              </li>
              <p>
                Choose Star Laxmi Jewellery LLC for your wholesale and retail
                gold needs, and experience the perfect blend of purity, quality,
                expertise, and customer satisfaction.
              </p>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
