import { GoStarFill } from "react-icons/go";
import { ImQuotesLeft } from "react-icons/im";
import { StaticImageData } from "next/image";

export default function TestimonialCard({
  object,
}: {
  object: {
    miniDescription: string;
    name: string;
    image?: string | StaticImageData;
  };
}) {
  return (
    <div className="testimonialcard hover:shadow-lg flex flex-col gap-6 p-6 bg-primary rounded-md lg:w-[608px] w-full h-full border border-tertiary">
      <ImQuotesLeft className="size-12" />
      <p className="text-text">{object.miniDescription}</p>
      <div className="NAME flex w-full gap-3">
        <div className="image size-12 rounded-full overflow-hidden bg-text"></div>
        <div className="flex flex-col gap-1">
          <p className="font-medium">{object.name}</p>
          <div className="flex gap-1">
            <GoStarFill className="text-quaternary" />
            <GoStarFill className="text-quaternary" />
            <GoStarFill className="text-quaternary" />
            <GoStarFill className="text-quaternary" />
            <GoStarFill className="text-quaternary" />
          </div>
        </div>
      </div>
    </div>
  );
}
