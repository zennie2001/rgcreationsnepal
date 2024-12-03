import SectionHeader from "./SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";

export default function Testimonials() {
    return (
        <section className="flex_center flex-col w-full py-24 gap-12 bg-[#F5FBFF]">
            <SectionHeader
                smallTitle="Client Testimonials"
                title="Testimonials that inspire confidence"
            />
            <div className="testimonials w-full flex_center gap-8">
                <TestimonialCard />
            </div>
            <div className="buttons flex_center gap-2">
                <button className="size-3 bg-text/40 rounded-full overflow-hidden"></button>
                <button className="size-3 bg-text/40 rounded-full overflow-hidden"></button>
                <button className="size-4 bg-tertiary rounded-full overflow-hidden"></button>
                <button className="size-3 bg-text/40 rounded-full overflow-hidden"></button>
                <button className="size-3 bg-text/40 rounded-full overflow-hidden"></button>
            </div>
        </section>
    )
}