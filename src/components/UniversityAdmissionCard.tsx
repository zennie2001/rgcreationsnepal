import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export default function UniversityAdmissionCard({
  className,
  smallTitle,
  title,
  description,
  step,
  image,
}: {
  className?: string;
  smallTitle: string;
  title: string;
  description: string;
  step: string;
  image: StaticImageData;
}) {
  return (
    <div
      className={twMerge("flex justify-between items-center w-full", className)}
    >
      <div className={"section-header flex flex-col gap-3 w-[394px]"}>
        <p className="text-base font-bold text-tertiary">{smallTitle}</p>
        <h1 className="text-2xl font-semibold text-darkGreen">{title}</h1>
        <p className="text-text">{description}</p>
      </div>
      <div className="flex_center size-14 rounded-full bg-[#F5FBFF] text-darkGreen text-xl font-semibold p-2">
        {step}
      </div>
      <div className="image w-[394px] h-60">
        <Image
          src={image}
          alt="placeholder-image"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}
