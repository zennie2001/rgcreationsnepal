import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export default function VisaCard({ className, smallTitle, title, description, image }: { className?: string; smallTitle: string; title: string; description: string; step: string; image: StaticImageData }) {
    return (
        <div className={twMerge("flex md:flex-row flex-col md:gap-0 gap-3 justify-between items-center w-full", className)}>
            <div className={"section-header flex flex-col gap-3 md:w-[50%] w-full"}>
                <p className="text-base font-bold text-tertiary">
                    {smallTitle}
                </p>
                <h1 className="text-2xl font-semibold text-secondary">
                    {title}
                </h1>
                <p className="text-text">
                    {description}
                </p>
            </div>
         
            <div className="image md:w-[43%] w-full h-64">
                <Image
                    src={image}
                    alt="placeholder-image"
                    className="size-full object-cover rounded-sm"
                />
            </div>
        </div>
    )
}