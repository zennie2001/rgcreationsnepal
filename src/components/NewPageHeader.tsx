import Image from "next/image";
import img from "@/assets/images/about-banner.png"
export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="w-full  h-screen  flex_center flex-col text-primary relative">
      <Image
        src={img}
        alt="page header image"
        className="w-full h-full object-cover bg-black/40"
      />

      <div className="flex items-center justify-start absolute">
        <h1 className="text-2xl md:text-4xl container mx-auto  font-semibold">{title}</h1>
      </div>
    </div>
  );
}
