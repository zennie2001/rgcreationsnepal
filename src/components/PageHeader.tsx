import Image from "next/image";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import pageHeaderImage from "@/assets/images/footer-background-new.jpg";
export default function PageHeader({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <div className="w-full  h-60 md:h-80 bg-darkGreen flex_center flex-col text-primary relative">
      <Image
        src={pageHeaderImage}
        alt="page header image"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-lightGreen to-darkGreen"></div>
      <div className="flex_center flex-col gap-8 absolute">
        <h1 className="text-2xl md:text-[2.5rem] mt-10 md:mt-32 text-center font-semibold">
          {title}
        </h1>
        <div className="flex_center gap-3 py-2 px-4 border border-primary rounded-md text-base">
          <Link href={"/"} className="flex_center gap-2">
            <BiHome />
            <p className="text-sm md:text-lg">Home</p>
          </Link>
          <div className="text-base">
            <IoIosArrowForward />
          </div>
          <Link href={link} className="flex_center text-sm md:text-lg gap-2">
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}
