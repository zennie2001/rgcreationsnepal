import { StaticImageData } from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function BlogCard({
  image,
  date,
  title,
  miniDescription,
  name,
}: {
  image: StaticImageData;
  date: string;
  title: string;
  miniDescription: string;
  name: string;
}) {
  return (
    <div className="rounded-lg cursor-pointer overflow-hidden group bg-white flex flex-col h-full shadow-md">
      {/* Fixed image size */}
      <img
        src={image.src}
        alt="Blog"
        className="w-full h-[250px] object-cover group-hover:scale-105 transition-all duration-300 rounded-lg"
      />
      {/* Content that fills remaining space */}
      <div className="p-[16px] pb-[0px] flex flex-col justify-between flex-grow">
        <h2 className="text-[20px] leading-[26px] text-[#222222] line-clamp-2 font-bold mt-[8px]">
          {title}
        </h2>
        <p className="text-[14px] leading-[20px] text-[#F65128] font-medium my-[6px]">
          {date} | {name}
        </p>
        <p className="text-[15px] leading-[24px] tracking-[0.03em] line-clamp-5 text-[#444444] pb-2">
          {miniDescription}
        </p>
      </div>
      <div className="flex m-2 border-b group hover:shadow-xl rounded-md border-secondary items-center gap-1 text-base cursor-pointer w-max">
        <Link
          href={"/blogs/blogdetails"}
          className="p-1   text-secondary cursor-pointer"
        >
          Read More
        </Link>
        <IoIosArrowRoundForward className="me-2 group-hover:scale-150 transition-all duration-300" />
      </div>
    </div>
  );
}
