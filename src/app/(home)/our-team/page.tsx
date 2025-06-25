"use client";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import placeholderImage from "@/assets/images/our-team.jpg";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { RxCross2 } from "react-icons/rx";
import profileImage from "@/assets/images/profileImage.jpg";
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { RiInstagramFill } from "react-icons/ri";
import CTA from "@/components/CTA";
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

export default function OurTeam() {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  return (
    <main className="w-full overflow-hidden">
      <PageHeader link="/our-team" title="Meet The Team" />
      <section className="w-full flex_center flex-col container lg:py-16 py-10 gap-12">
        <SectionHeader
          smallTitle="Team Members"
          title="Meet Our Team"
          className="lg:w-[60%] w-full text-center"
        />
        <div className="flex_center flex-col gap-4 w-full">
          <Image
            src={placeholderImage}
            alt="placeholder-image"
            className="w-full h-[60vh] object-cover"
          />
          <div className="flex_center lg:flex-row flex-col  gap-8 w-full text-text">
            <p className=" w-full text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex_center flex-col container py-16 gap-12 relative">
        <SectionHeader smallTitle="" title="Management" />
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
                <FaPlus className="size-full text-darkGreen" />
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
                <FaPlus className="size-full text-darkGreen" />
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
                <FaPlus className="size-full text-darkGreen" />
              </button>
            </div>
          </div>
        </div>
        {showMessage && (
          <div className="absolute inset-0 bg-primary/80 flex_center lg:px-24 px-4">
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
                  <h4 className="text-2xl font-semibold text-darkGreen">
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
                      className="social rounded-full size-8 p-2 border border-text/30 text-darkGreen"
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
                className="absolute top-5 right-5 text-darkGreen size-5"
              >
                <RxCross2 className="size-full" />
              </button>
            </div>
          </div>
        )}
      </section>
      <section className="w-full flex_center flex-col container py-16 gap-12 relative">
        <SectionHeader smallTitle="" title="Other Members" />
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
                <FaPlus className="size-full text-darkGreen" />
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
                <FaPlus className="size-full text-darkGreen" />
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
                <FaPlus className="size-full text-darkGreen" />
              </button>
            </div>
          </div>
        </div>
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
                <FaPlus className="size-full text-darkGreen" />
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
                <FaPlus className="size-full text-darkGreen" />
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
                <FaPlus className="size-full text-darkGreen" />
              </button>
            </div>
          </div>
        </div>
        {showMessage && (
          <div className="absolute inset-0 bg-primary/80 flex_center lg:px-24 px-4">
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
                  <h4 className="text-2xl font-semibold text-darkGreen">
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
                      className="social rounded-full size-8 p-2 border border-text/30 text-darkGreen"
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
                className="absolute top-5 right-5 text-darkGreen size-5"
              >
                <RxCross2 className="size-full" />
              </button>
            </div>
          </div>
        )}
        <div className="flex items-center gap-2">
          <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
            <IoIosArrowBack />
          </button>
          <button className="flex_center p-2 rounded-md text-sm size-10">
            1
          </button>
          <button className="flex_center p-2 rounded-md text-sm size-10">
            2
          </button>
          <p className="flex_center p-2 rounded-md text-sm size-10">....</p>
          <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
            5
          </button>
          <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
            <IoIosArrowForward />
          </button>
        </div>
        <CTA />
      </section>
    </main>
  );
}
