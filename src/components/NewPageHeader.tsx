import Image from "next/image";
import img from "@/assets/images/about-banner.png";
export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="w-full  h-screen  flex flex-col text-primary relative">
      <Image
        src={img}
        alt="page header image"
        className="w-full h-full object-cover bg-black/40"
      />

      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="text-center md:text-left text-white px-14 container mx-auto ">
          <p className="text-3xl md:text-5xl  font-bold mb-6 leading-tight">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
