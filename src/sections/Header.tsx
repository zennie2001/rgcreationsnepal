import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaPinterest } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import logo from '@/assets/logo/reactionNepalLogo.png';
import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "@/components/UI/PrimaryButton";
import SecondaryButton from "@/components/UI/SecondaryButton";

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
        title: 'About Us',
        link: '/about'
    },
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

export default function Header() {
    return (
        <header className="header flex flex-col w-full text-primary">
            <div className="header-top w-full py-4 px-24 flex justify-between items-center bg-secondary">
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
            <div className="header-bottom flex justify-between items-center px-24 border-b">
                <div className="flex_center gap-12">
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
                    <nav className="flex_center gap-6 text-text">
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