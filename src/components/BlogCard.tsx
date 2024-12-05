import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function BlogCard({ image, date, title, miniDescription }: { image: StaticImageData; date: string; title: string; miniDescription: string; }) {
    return (
        <div className="flex flex-col gap-4 col-span-1">
            <div className="flex_center w-full h-60 rounded-md overflow-hidden">
                <Image
                    src={image}
                    alt="blog-image"
                    className="size-full object-cover"
                />
            </div>
            <p className="py-1 px-2 rounded-md border border-text/30 w-max text-xs font-medium">
                {date}
            </p>
            <div className="flex flex-col gap-3">
                <h1 className="text-xl font-semibold">
                    {title}
                </h1>
                <p className="text-base text-text">
                    {miniDescription}
                </p>
            </div>
            <div className="flex items-center gap-2 text-base cursor-pointer w-max">
                <Link href={'/blogs/blogdetails'} className="pb-1 border-b border-secondary text-secondary cursor-pointer">
                    Read More
                </Link>
                <IoIosArrowRoundForward />
            </div>
        </div>
    )
}