"use client";

import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaPinterest } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import logo from '@/assets/logo/reactionNepalLogo.png';
import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "@/components/UI/PrimaryButton";
import SecondaryButton from "@/components/UI/SecondaryButton";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const socialMedia = [
    {
        link: 'facebook.com',
        icon: FaFacebookF
    },
    {
        link: 'instagram.com',
        icon: RiInstagramFill
    },
    {
        link: 'linkedin.com',
        icon: FaLinkedinIn
    },
    {
        link: 'pinterest.com',
        icon: FaPinterest
    },
]

const navLinks = [
    {
        title: 'Gallery',
        link: '/gallery'
    },
    {
        title: 'Vacancy',
        link: '/vacancy'
    },
    {
        title: 'Immigration Info',
        link: '/immigration'
    },
    {
        title: 'Study Abroad',
        link: '/study'
    },
    {
        title: 'Test Preparation',
        link: '/test'
    },
    {
        title: 'Contact',
        link: '/contact'
    },
]

const aboutUs = [
    {
        link: '/about',
        title: 'Introduction'
    },
    {
        link: '/about',
        title: 'Message From CEO'
    },
    {
        link: '/about',
        title: 'Message From Managing Director'
    },
    {
        link: '/about',
        title: 'Holiday List'
    },
    {
        link: '/about',
        title: 'Our Team'
    },
    {
        link: '/about',
        title: 'Our Certifications'
    },
]

export default function Header() {

    const [showAbout, setShowAbout] = useState<boolean>(false);
    const [showNav, setshowNav] = useState(false)
    return (
        <header className="header z-50 top-0 sticky flex flex-col w-full text-primary">
            {/* mobile responsive */}
            <div className="flex w-full bg-white justify-between items-center lg:hidden border-b border-[#E9E9E9]  p-[14px] text-black">
                <Link
                    href={'/'}
                    className="logo w-28 h-auto"
                >
                    <Image
                        src={logo}
                        alt="Reaction-Nepal"
                        className="w-full h-full object-contain"
                    />
                </Link>
                {showNav == false ? <FiMenu className="text-black text-2xl" onClick={() => {
                    setshowNav(!showNav)
                }} /> : <MdClose className="text-black text-2xl" onClick={() => {
                    setshowNav(!showNav)
                }} />}
            </div>
            {showNav && (
                <div className="bg-white w-full h-[calc(100vh-50px)]  z-50 top-0 sticky    overflow-y-auto">
                    <div className="p-3">

                   
                    {navLinks.map((e, i) => {
                        return <div key={i} className="p-3 text-text  border-b border-borderColor">
                            {e.title}
                        </div>
                    })}
                    <PrimaryButton text="Apply" className="h-[38px] w-full " />
                    <button className="rounded-md border border-tertiary text-tertiary hover:bg-tertiary hover:text-primary transition duration-300 h-[38px] mt-3 w-full px-6 text-base font-medium">
                        Mock Test
                    </button>
                    <p className="text-text  pt-5">Follow us on:</p>
                    <div className="flex items-center gap-3">
                        {
                            socialMedia.map((media, index) => (
                                <a
                                    key={index}
                                    href={media.link}
                                    target="_blank"
                                    className="social rounded-full size-6 p-1.5 border border-secondary"
                                >
                                    <media.icon className="size-full text-secondary" />
                                </a>
                            ))
                        }
                    </div>
                    </div>
                    <div className="flex flex-col gap-3 bg-secondary p-5">
                        <div className="flex items-center gap-2 text-sm">
                            <FaPhoneAlt /> <p>+977-1-4532334/4</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <FaEnvelope /> <p>info@rnc.edu.np</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <FaLocationDot /> <p>Putalisadak Chowk-30, Kathmandu, P.O.B: 8927</p>
                        </div>
                    </div>
                </div>
            )}
            {/* desktop view */}
            <div className="header-top w-full py-4 xl:px-24 px-10 lg:flex hidden justify-between items-center bg-secondary">
                <div className="info flex_center gap-3">
                    <div className="flex_center gap-2 font-normal text-sm">
                        <FaEnvelope />
                        <a href="mailto:info@rnc.edu.np" className="text-sm hover:underline">
                            info@rnc.edu.np
                        </a>
                    </div>
                    <div className="w-4 h-[1.5px] bg-primary"></div>
                    <div className="flex_center gap-2 font-normal text-sm">
                        <FaPhoneAlt />
                        <a href="tel:+977-1-4532334/4" className="text-sm hover:underline">
                            +977-1-4532334/4
                        </a>
                    </div>
                    <div className="w-4 h-[1.5px] bg-primary"></div>
                    <div className="flex_center gap-2 font-normal text-sm">
                        <FaLocationDot />
                        <p className="text-sm hover:underline">
                            Putalisadak Chowk-30, Kathmandu, P.O.B: 8927
                        </p>
                    </div>
                </div>
                <div className="flex_center gap-3">
                    {
                        socialMedia.map((media, index) => (
                            <a
                                key={index}
                                href={media.link}
                                target="_blank"
                                className="social rounded-full size-6 p-1.5 border-2 border-primary"
                            >
                                <media.icon className="size-full" />
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className="header-bottom lg:flex hidden xl:px-24 px-10 justify-between items-center   border-b bg-primary">
                <div className="flex_center xl:gap-12 gap-6">
                    <Link
                        href={'/'}
                        className="logo w-32 h-auto"
                    >
                        <Image
                            src={logo}
                            alt="Reaction-Nepal"
                            className="w-full h-full object-contain"
                        />
                    </Link>
                    <nav className="flex_center gap-6 text-text w-full">
                        <div
                            onMouseEnter={() => setShowAbout(true)}
                            onMouseLeave={() => setShowAbout(false)}
                            className="flex_center py-7 text-base border-b-2 border-primary hover:border-secondary cursor-pointer relative"
                        >
                            <p>About Us</p>
                            <div className={twMerge("absolute -bottom-[355px] left-0 p-2 flex flex-col justify-center rounded-md bg-primary w-80 z-0", showAbout === true ? '' : 'hidden')}>
                                {
                                    aboutUs.map((about, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                href={about.link}
                                                className="p-4 rounded-md hover:bg-gray-100 w-full text-left"
                                            >
                                                {about.title}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {
                            navLinks.map((link, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={link.link}
                                        className="flex_center py-7 text-base border-b-2 border-primary hover:border-secondary"
                                    >
                                        {link.title}
                                    </Link>
                                )
                            })
                        }
                    </nav>
                </div>
                <div className="flex_center gap-4">
                    <PrimaryButton
                        text="Apply"
                    />
                    <SecondaryButton
                        text="Mock Test"
                    />
                </div>
            </div>
        </header>
    )
}