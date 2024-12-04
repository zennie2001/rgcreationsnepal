import PrimaryButton from "@/components/UI/PrimaryButton";
import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaPinterest } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

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

export default function Footer() {
    return (
        <footer className="w-full flex_center flex-col p-24 gap-24 bg-secondary">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-[40px] font-semibold text-primary">
                    Subscribe To Our Newsletter
                </h1>
                <form className="flex_center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="px-6 py-2 placeholder-text rounded-tl-md rounded-bl-md w-80"
                    />
                    <PrimaryButton
                        text="Subscribe Now"
                        className="rounded-none rounded-tr-md rounded-br-md"
                    />
                </form>
            </div>
            <div className="flex w-full gap-14">
                <div className="flex flex-col gap-6 w-[29%] text-primary">
                    <p className="text-xl font-semibold">
                        About
                    </p>
                    <p className="">
                        Reaction Nepal is a government-registered interdisciplinary organization with its headquarters in Putalisadak, Kathmandu, Nepal.
                    </p>
                    <div className="flex flex-col gap-3">
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
                    <div className="flex items-center gap-3">
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
                <div className="flex justify-between w-[71%] text-primary">
                    <div className="flex flex-col gap-6 w-[33%]">
                        <p className="text-xl font-semibold">
                            Discover
                        </p>
                        <nav className="flex flex-col gap-4">
                            <Link
                                href={'/'}
                                className="hover:underline"
                            >
                                Immigration Info
                            </Link>
                            <Link
                                href={'/'}
                                className="hover:underline"
                            >
                                Study Abroad
                            </Link>
                            <Link
                                href={'/'}
                                className="hover:underline"
                            >
                                Test Preparation
                            </Link>
                            <Link
                                href={'/'}
                                className="hover:underline"
                            >
                                Gallery
                            </Link>
                            <Link
                                href={'/'}
                                className="hover:underline"
                            >
                                Vaccation
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-6 w-[33%]">
                        <p className="text-xl font-semibold">
                            Company
                        </p>
                        <nav className="flex flex-col gap-4">
                            <Link
                                href={'/'}
                                className="hover:underline"
                            >
                                Introduction
                            </Link>
                            <Link
                                href={'/'}
                                className="hover:underline"
                            >
                                Our Team
                            </Link>
                            <Link
                                href={'/'}
                                className="hover:underline"
                            >
                                Our Certificates
                            </Link>
                            <Link
                                href={'/'}
                                className="hover:underline"
                            >
                                Contact
                            </Link>
                            <Link
                                href={'/'}
                                className="hover:underline"
                            >
                                Message from CEO
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-6 w-[33%]">
                        <p className="text-xl font-semibold">
                            Accreditation
                        </p>
                        <p>
                            We use our years, international expertise, and endurance to help our students in a hassle-free setting.
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex_center col-span-1 h-11 bg-primary">

                            </div>
                            <div className="flex_center col-span-1 h-11 bg-primary">

                            </div>
                            <div className="flex_center col-span-1 h-11 bg-primary">

                            </div>
                            <div className="flex_center col-span-1 h-11 bg-primary">

                            </div>
                            <div className="flex_center col-span-1 h-11 bg-primary">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 w-full text-primary">
                <p className="text-xl font-semibold">
                    University Partners
                </p>
                <div className="flex items-center gap-16">
                    <div className="h-20 w-36 bg-primary"></div>
                    <div className="h-20 w-36 bg-primary"></div>
                    <div className="h-20 w-36 bg-primary"></div>
                    <div className="h-20 w-36 bg-primary"></div>
                    <div className="h-20 w-36 bg-primary"></div>
                    <div className="h-20 w-36 bg-primary"></div>
                    <div className="h-20 w-36 bg-primary"></div>
                </div>
            </div>
        </footer>
    )
}