"use client";

import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import aboutImage from "@/assets/images/heroBackground.jpg";
import aboutSecondImage from "@/assets/images/aboutPageImage.png";
import Image from "next/image";
import Contact from "@/sections/Contact";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import profileImage from "@/assets/images/profileImage.jpg";
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaPlus } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

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
      <section className="flex_center container mx-auto flex-col w-full  lg:py-16 py-7 gap-16">
        <div className="flex lg:flex-row flex-col items-center lg:gap-16 gap-6 w-full">
          <div className="flex flex-col lg:w-1/2 w-full gap-12">
            <div className="flex flex-col gap-4">
              <SectionHeader
                smallTitle="About Us"
                title=""
                className="items-center"
              />
              <h1 className="text-[30px]  font-semibold lg:text-start text-center">
                Our goal is to assist students for hassle free environment
              </h1>
              <p className="text-text lg:text-justify text-center">
                Reaction Nepal is a government-registered interdisciplinary
                organization with its headquarters in Putalisadak, Kathmandu,
                Nepal. Since its establishment in 2005, it has mainly aimed at
                providing education services to all seeking their study and
                career prospects in and out of the country.
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
              20K +
            </p>
            <div className="flex flex-col lg:gap-3 gap-0">
              <p className="lg:text-2xl text-xl font-semibold">
                Satisfied Customers
              </p>
              <p className="text-text text-sm">
                Trusted by 20K+ people all around the world
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
      <div className="image container flex_center h-[80vh] w-full relative">
        <Image
          src={aboutSecondImage}
          alt="image"
          className="size-full object-cover"
        />
        <div className="absolute bottom-0 lg:flex_center hidden w-full  ">
          <div className="flex w-full h-16 bg-primary"></div>
        </div>
      </div>
      <section className="w-full flex_center container">
        <div className="flex_center flex-col lg:gap-16 gap-7 pb-16 w-full">
          <div className="flex flex-col w-full lg:px-12 px-0 gap-4 lg:pt-0 pt-10">
            <h2 className="text-[40px] font-semibold text-secondary">
              Our Mission
            </h2>
            <div className="w-full flex md:flex-row flex-col md:gap-8 gap-4">
              <p className="text-text md:w-1/2 w-full">
                It was established by the noble efforts and endeavors of a group
                of dedicated and qualified professionals with diverse academic
                expertise in the fields of applied education, science, and
                technology, with the sole objective of providing the student
                community with the most appropriate training and educational
                opportunities aboard. REACTION Nepal, with its team of
                experienced professionals and academics, provides counseling
                services for those students who wish to pursue their further
                studies abroad in well-reputed colleges, institutions, and
                universities in different countries on all continents, such as
                Asia-Pacific, Australia, Europe, and North America.
              </p>
              <p className="text-text md:w-1/2 w-full">
                REACTION Nepal, with its professionalized service in the sector
                of international educational counseling, boasts of its
                reputation, acquired within a very short span of time. It is
                probably the best choice for promising students aspiring to
                achieve success in life. A considerable number of our students
                have already been attending some of the most well-reputed
                colleges and universities abroad in pursuit of shaping their
                futures and careers.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full lg:px-12 gap-4">
            <h2 className="text-[40px] font-semibold text-secondary">
              Our Vision
            </h2>
            <div className="w-full flex md:flex-row flex-col md:gap-8 gap-4">
              <p className="text-text md:w-1/2 w-full">
                REACTION Nepal, with its professionalized service in the sector
                of international educational counseling, boasts of its
                reputation, acquired within a very short span of time. It is
                probably the best choice for promising students aspiring to
                achieve success in life. A considerable number of our students
                have already been attending some of the most well-reputed
                colleges and universities abroad in pursuit of shaping their
                futures and careers.
              </p>
              <p className="text-text md:w-1/2 w-full">
                Reaction Nepal is a government-registered interdisciplinary
                organization with its headquarters in Putalisadak, Kathmandu,
                Nepal. Since its establishment in 2005, it has mainly aimed at
                providing education services to all seeking their study and
                career prospects in and out of the country.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex_center flex-col lg:gap-12 gap-6 lg:px-24 px-4 lg:py-16 py-10 bg-[#F5FBFF]">
        <SectionHeader smallTitle="History" title="Over the Years" />
        <div className="flex_center w-full container relative">
          <div className="absolute flex h-0.5 w-full bg-secondary"></div>
          <button className="absolute flex_center lg:size-10 size-7 p-2 -top5 left-0 bg-secondary text-primary rounded-md z-10">
            <IoIosArrowBack />
          </button>
          <button className="absolute flex_center lg:size-10 size-7 p-2 -top5 right-0 bg-secondary text-primary rounded-md z-10">
            <IoIosArrowForward />
          </button>
          <div className="flex_center lg:gap-20 gap-7 z-10">
            <div className="flex_center rounded-full border-2 border-secondary bg-[#F5FBFF] text-secondary text-sm font-bold lg:size-6 size-3 lg:block hidden"></div>
            <div className="flex_center rounded-full border-2 border-secondary bg-[#F5FBFF] text-secondary text-sm font-bold lg:size-6 size-3 lg:block hidden"></div>
            <div className="flex_center rounded-full border-2 border-secondary bg-[#F5FBFF] text-secondary text-sm font-bold size-14">
              2008
            </div>
            <div className="flex_center rounded-full bg-secondary lg:size-36 size-20 text-primary lg:text-[32px] text-lg font-semibold">
              2009
            </div>
            <div className="flex_center rounded-full border-2 border-secondary bg-[#F5FBFF] text-secondary text-sm font-bold size-14 ">
              2010
            </div>
            <div className="flex_center rounded-full border-2 border-secondary bg-[#F5FBFF] font-bold size-6 lg:block hidden"></div>
            <div className="flex_center rounded-full border-2 border-secondary bg-[#F5FBFF] text-secondary text-sm font-bold size-6 lg:block hidden"></div>
          </div>
        </div>
        <div className="flex_center flex-col container  w-full gap-6">
          <p className="w-full flex_center text-center text-text">
            With introduction of TIER-4 pointbased system by UKBA, this year was
            significant for REACTION Nepal to make successful placement to over
            a dozen UK institutions, including private and government colleges
            and universities. As a result of properly- selected courses in
            accordance with the students&apos; respective desires into right
            colleges, as well as accurate visa applications, the success rate
            was incredible with the cent percent. Also, the number of test prep
            students, especially for IELTS at RN soared up this year, with
            average of 6 Band overal.
          </p>
          <p className="w-full flex_center text-center text-text">
            Relatively, the students were a bit less for other destinations like
            USA and Australia but consideraly a good number as usual. This
            number included serious, academically-intact and financially abled
            candidates for whom the good institutions mattered, not the
            contries. So, basically the visa was not a bar as they deserved it
            for their further studies. We have been happy to be in their
            service.
          </p>
        </div>
      </section>
      <section className="w-full flex_center flex-col container py-16 gap-12 relative">
        <SectionHeader smallTitle="Team Members" title="Meet Our Team" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 relative">
          <div className="profilecard flex_center relative col-span-1 rounded-md overflow-hidden">
            <Image
              src={profileImage}
              alt="profile image"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute flex justify-between items-center w-[90%] gap-6 bottom-5">
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-semibold text-primary">
                  Raju Prasad Khanal
                </h4>
                <p className="text-primary">CEO/ Chairperson</p>
              </div>
              <button
                onClick={() => setShowMessage(true)}
                className="size-9 bg-primary rounded-full p-2"
              >
                <FaPlus className="size-full text-secondary" />
              </button>
            </div>
          </div>
          <div className="profilecard flex_center relative col-span-1 rounded-md overflow-hidden">
            <Image
              src={profileImage}
              alt="profile image"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute flex justify-between items-center w-[90%] gap-6 bottom-5">
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-semibold text-primary">
                  Raju Prasad Khanal
                </h4>
                <p className="text-primary">CEO/ Chairperson</p>
              </div>
              <button
                onClick={() => setShowMessage(true)}
                className="size-9 bg-primary rounded-full p-2"
              >
                <FaPlus className="size-full text-secondary" />
              </button>
            </div>
          </div>
          <div className="profilecard flex_center relative col-span-1 rounded-md overflow-hidden">
            <Image
              src={profileImage}
              alt="profile image"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute flex justify-between items-center w-[90%] gap-6 bottom-5">
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-semibold text-primary">
                  Raju Prasad Khanal
                </h4>
                <p className="text-primary">CEO/ Chairperson</p>
              </div>
              <button
                onClick={() => setShowMessage(true)}
                className="size-9 bg-primary rounded-full p-2"
              >
                <FaPlus className="size-full text-secondary" />
              </button>
            </div>
          </div>
          <button className="absolute flex_center size-10 p-2 bg-primary rounded-md top-1/2 -left-5 shadow-md">
            <IoIosArrowBack className="size-full" />
          </button>
          <button className="absolute flex_center size-10 p-2 bg-primary rounded-md top-1/2 -right-5 shadow-md">
            <IoIosArrowForward className="size-full" />
          </button>
        </div>
        {showMessage && (
          <div className="absolute inset-0 bg-black/80 flex_center lg:px-24 px-4">
            <div className="flex lg:flex-row flex-col gap-6 p-8 lg:w-[65%] w-full lg:h-[485px]  bg-primary rounded-md relative -bottom-16">
              <div className="image lg:w-[40%] w-full lg:h-full flex flex-col gap-4">
                <div className="flex_center w-full lg:h-[70%] h-[300px] overflow-hidden">
                  <Image
                    src={profileImage}
                    alt="profile-image"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex_center flex-col gap-2">
                  <h4 className="text-2xl font-semibold text-secondary">
                    Raju Prasad Khanal
                  </h4>
                  <p className="text-text">CEO/Chairperson</p>
                </div>
                <div className="flex_center gap-3">
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
              <div className=" flex flex-col gap-4 lg:w-[60%] w-full">
                <p className="text-text">
                  The CEO/Chairperson plays a pivotal role in steering the
                  organization towards success and sustainability. Their work
                  involves developing and executing the company&apos;s strategic
                  vision, making critical decisions, and overseeing day-to-day
                  operations.
                </p>
                <p className="text-text">
                  As the top executive, CEOs provide inspirational leadership,
                  setting the tone for the organization&apos;s culture and
                  values. They engage with various stakeholders, from employees
                  to investors, maintaining positive relationships and ensuring
                  alignment with the company&apos;s mission. Financial
                  oversight, risk management, and policy development are
                  integral components of their responsibilities.
                </p>
              </div>
              <button
                onClick={() => setShowMessage(false)}
                className="absolute top-5 right-5 text-secondary size-5"
              >
                <RxCross2 className="size-full" />
              </button>
            </div>
          </div>
        )}
      </section>
      {/* <Contact className="pt-0 pb-16" /> */}
    </main>
  );
}
