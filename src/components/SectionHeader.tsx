import { twMerge } from "tailwind-merge";

export default function SectionHeader({
  title,
  smallTitle,
  className,
}: {
  title: string;
  smallTitle: string;
  className?: string;
}) {
  return (
    <div className={twMerge("section-header flex_center flex-col", className)}>
      <p className="text-base font-bold text-tertiary lg:text-start text-center">
        {smallTitle}
      </p>
      <h1 className="text-[30px]  font-semibold lg:text-center text-center">
        {title}
      </h1>
    </div>
  );
}
