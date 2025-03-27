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
      <PageHeader link="/blogs/blogdetails" title="Blog Details" />
      <section className="flex_center flex-col lg:py-16 py-10 lg:gap-12 gap-6 lg:px-0 px-4">
        <div className="flex_center flex-col gap-8 lg:w-[55%] w-full">
          <h3 className="text-[32px] font-semibold text-secondary">
            USA&apos;s Best Universities, Prices, and Scholarships for Students
          </h3>
          <div className="flex_center flex-col w-full gap-8">
            <div className="flex md:flex-row flex-col w-full justify-between md:items-center items-start md:gap-0 gap-3">
              <div className="flex gap-4">
                <p className="text-xs font-medium">BY ADMIN</p>
                <p className="text-xs font-medium text-text">
                  29 Sep, 2023 - 9 min read
                </p>
              </div>
              <div className="flex gap-3">
                {socialMedia.map((media, index) => (
                  <a
                    key={index}
                    href={media.link}
                    target="_blank"
                    className="social rounded-full size-8 p-2 border border-text/30 text-secondary"
                  >
                    <media.icon className="size-full" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex_center flex-col gap-3 w-full">
              <Image
                src={blogImage}
                alt="blog image"
                className="w-full h-[60vh] object-cover"
              />
              <p className="text-text text-sm">Image Caption</p>
            </div>
            <div className="flex_center flex-col gap-8">
              <h4 className="text-2xl font-semibold text-secondary text-justify w-full">
                Studying in the USA is quite expensive; so, you must think ahead
                and explore all possible sources of funding. Scholarships,
                grants, student loans and part-time jobs are the avenues that
                Nepalese Students can use to finance their studies in the USA.
              </h4>
              <p className="text-text text-base text-justify">
                Students need to undertake a detailed analysis of all the
                options available to them, based on their background and future
                economic prospects, to make sound funding decisions for their
                education.
              </p>
              <p className="text-text text-base text-justify">
                Financial planning and the numerous scholarship opportunities
                can be overwhelming as they are often complicated. To have a
                hassle-free and stress-free journey, avail of our services from
                The Next Education Consultancy. We have a team of experts that
                offer end-to-end services, ranging from application help, and
                visa assistance to search for scholarships and navigating
                financial aid. We enable you to make informed decisions and
                accomplish your education goals in the USA.
              </p>
            </div>
            <div className="flex_center flex-col gap-8">
              <h3 className="text-[32px] font-semibold text-secondary text-justify w-full">
                Financial Planning for Study in the USA
              </h3>
              <p className="text-text text-base text-justify">
                For Nepali students who cherish their dreams as high as the sky,
                the United States is the world where they can grab a
                close-to-hand opportunity to plunge into super-advanced research
                laboratories, the innovative environment, and the immense
                culture soaking up. This might be manageable; however, it will
                be very expensive.
              </p>
              <div className="flex_center gap-8 w-full">
                <div className="flex_center w-1/2">
                  <Image
                    src={blogImage}
                    alt="blog image"
                    className="w-full h-60 object-cover"
                  />
                </div>
                <div className="flex_center w-1/2">
                  <Image
                    src={blogImage}
                    alt="blog image"
                    className="w-full h-60 object-cover"
                  />
                </div>
              </div>
              <p className="text-text text-base text-justify">
                Planning the finances of Nepali students to study in the USA is
                more than just calculating the fees. The students should be
                prepared for the tuition fees, housing, and personal needs, and
                have enough funds for any extra activities. It is an opportunity
                to get the most out of it and to invest your time and money in
                the right area.
              </p>
            </div>
            <div className="flex w-full p-8 gap-4 bg-tertiary rounded-md">
              <div className="flex flex-col w-[90%] gap-8">
                <p className="text-sm text-primary/50">September 28, 2023</p>
                <p className="italic font-semibold text-2xl text-primary/70">
                  “Success is not final; failure is not fatal: it is the courage
                  to continue that counts.”
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-primary">Maya Hawke</p>
                  <GoDash className="font-bold text-primary" />
                  <p className="text-sm text-primary/50">
                    Forbes Java Developer
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-[10%]">
                <ImQuotesRight className="w-full h-auto object-contain scale-y-[-1] text-primary/50" />
              </div>
            </div>
            <div className="flex_center flex-col gap-8">
              <h3 className="text-[32px] font-semibold text-secondary text-justify w-full">
                The US University/College Tuition Fee
              </h3>
              <p className="text-text text-base text-justify">
                Planning the finances of Nepali students to study in the USA is
                more than just calculating the fees. The students should be
                prepared for the tuition fees, housing, and personal needs, and
                have enough funds for any extra activities. It is an opportunity
                to get the most out of it and to invest your time and money in
                the right area.
              </p>
              <div className="flex_center gap-8 w-full">
                <div className="flex flex-col gap-8 w-[65%]">
                  <p className="text-text text-base text-justify">
                    For Nepali students who cherish their dreams as high as the
                    sky, the United States is the world where they can grab a
                    close-to-hand opportunity to plunge into super-advanced
                    research.
                  </p>
                  <p className="text-text text-base text-justify">
                    Planning the finances of Nepali students to study in the USA
                    is more than just calculating the fees. The students should
                    be prepared for the tuition fees, housing, and personal
                    needs.
                  </p>
                </div>
                <div className="flex_center flex-col gap-3 w-[35%]">
                  <Image
                    src={blogImage}
                    alt="blog image"
                    className="w-full h-40 object-cover"
                  />
                  <p className="text-sm text-text ">Research Purpose</p>
                </div>
              </div>
            </div>
            <div className="flex_center flex-col gap-8">
              <h4 className="text-2xl font-semibold text-secondary text-justify w-full">
                Tuition by Type of Institution
              </h4>
              <p className="text-text text-base text-justify">
                The tuition fees in the USA differ across the types of the
                institution. Usually, public universities charge lower tuition
                rates to domestic students, while international students have to
                pay out-of-state tuition, which is much more expensive.
              </p>
              <p className="text-text text-base text-justify">
                <span className="font-bold">Public Universities:</span>
                International students should expect to pay around
                $20,000-$40,000 a year in tuition fees.
              </p>
              <p className="text-text text-base text-justify">
                <span className="font-bold">Public Universities:</span>
                International students should expect to pay around
                $20,000-$40,000 a year in tuition fees.
              </p>
              <p className="text-text text-base text-justify">
                <span className="font-bold">Public Universities:</span>
                International students should expect to pay around
                $20,000-$40,000 a year in tuition fees.
              </p>
            </div>
            <div className="flex_center flex-col gap-8">
              <h4 className="text-2xl font-semibold text-secondary text-justify w-full">
                Public vs. Private Institutions: Cost Comparison
              </h4>
              <p className="text-text text-base text-justify">
                The tuition fees in the USA differ across the types of the
                institution. Usually, public universities charge lower tuition
                rates to domestic students, while international students have to
                pay out-of-state tuition, which is much more expensive.
              </p>
              <p className="text-text text-base text-justify">
                <span className="font-bold">Public Universities:</span>
                International students should expect to pay around
                $20,000-$40,000 a year in tuition fees.
              </p>
              <p className="text-text text-base text-justify">
                <span className="font-bold">Public Universities:</span>
                International students should expect to pay around
                $20,000-$40,000 a year in tuition fees.
              </p>
              <p className="text-text text-base text-justify">
                <span className="font-bold">Public Universities:</span>
                International students should expect to pay around
                $20,000-$40,000 a year in tuition fees.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex_center flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12">
        <SectionHeader
          smallTitle="Similar BLogs"
          title="Stay up to date on our blogs"
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 gap-y-16">
          {blogs.map((blog, index) => {
            return (
              <BlogCard
                key={index}
                image={blog.image}
                date={blog.date}
                title={blog.title}
                miniDescription={blog.miniDescription}
                name={blog.name}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
