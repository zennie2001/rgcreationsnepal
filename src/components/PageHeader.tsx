import Image from "next/image";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import pageHeaderImage from '@/assets/images/pageHeaderImage.jpeg';

export default function PageHeader({ title, link }: { title: string; link: string; }) {
    return (
        <div className="w-full h-64 bg-secondary flex_center flex-col text-primary relative">
            <Image
                src={pageHeaderImage}
                alt="page header image"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary"></div>
            <div className="flex_center flex-col gap-8 absolute">
                <h1 className="text-[40px] font-semibold">
                    {title}
                </h1>
                <div className="flex_center gap-3 py-3 px-6 border border-primary rounded-md text-base">
                    <Link href={'/'} className="flex_center gap-3">
                        <BiHome />
                        <p>
                            Home
                        </p>
                    </Link>
                    <div className="text-base">
                        <IoIosArrowForward />
                    </div>
                    <Link href={link} className="flex_center gap-3">
                        {title}
                    </Link>
                </div>
            </div>
        </div>
    )
}