import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

export default function PageHeader({ title, link }: { title: string; link: string; }) {
    return (
        <div className="w-full bg-secondary flex_center flex-col gap-8 py-14 text-primary">
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
    )
}