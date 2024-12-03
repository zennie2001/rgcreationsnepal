export default function SectionHeader({ title, smallTitle }: { title: string; smallTitle: string; }) {
    return (
        <div className="section-header flex_center flex-col">
            <p className="text-base font-bold text-tertiary">
                {smallTitle}
            </p>
            <h1 className="text-[40px] font-semibold">
                {title}
            </h1>
        </div>
    )
}